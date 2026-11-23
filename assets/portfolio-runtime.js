/*
 * Keeps Abeeha's content, images and ash-grey colours on the page.
 *
 * The page is a Framer export: Framer's script (loaded from its CDN) hydrates
 * the page with the ORIGINAL template content, which would undo edits made to
 * the HTML. This script applies assets/portfolio-content.js once on load and
 * then watches the DOM, re-applying it whenever Framer re-renders something.
 */
(function () {
  "use strict";
  var C = window.PORTFOLIO_CONTENT;
  if (!C || !window.MutationObserver) return;

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }

  // ---- text -------------------------------------------------------------
  var scoped = C.scopedText || [];
  var textMap = Object.create(null);
  Object.keys(C.text).forEach(function (k) { textMap[norm(k)] = C.text[k]; });

  function fixText(node) {
    var v = node.nodeValue;
    if (!v) return;
    var p = node.parentNode;
    if (p && p.nodeName === "STYLE") {
      var s = fixStyleString(v);
      if (s !== v) node.nodeValue = s;
      return;
    }
    if (p && p.nodeName === "SCRIPT") return;
    // Scoped replacements: text inside one specific element only.
    if (p && p.closest) {
      for (var si = 0; si < scoped.length; si++) {
        if (p.closest(scoped[si].within)) {
          if (v.trim() && v.trim() !== scoped[si].text) node.nodeValue = scoped[si].text;
          return;
        }
      }
    }
    var key = norm(v);
    if (!key || !(key in textMap)) return;
    var nv = v.replace(v.trim(), textMap[key]);
    if (nv !== v) node.nodeValue = nv;
    var fo = p && p.closest && p.closest("foreignObject.framer-fit-text");
    if (fo && fo.ownerSVGElement) trackFitSvg(fo.ownerSVGElement);
  }

  // ---- colours + image urls inside style strings -------------------------
  var hexKeys = Object.keys(C.colors);
  var hexRe = new RegExp("#(" + hexKeys.join("|") + ")(?=[0-9a-f]{2}\\b|\\b)", "gi");
  function toRgb(h) { return [0, 2, 4].map(function (i) { return parseInt(h.substr(i, 2), 16); }); }
  var rgbMap = Object.create(null);
  hexKeys.forEach(function (k) { rgbMap[toRgb(k).join(",")] = toRgb(C.colors[k]); });
  var rgbRe = /(rgba?\(\s*)(\d+)(\s*,\s*)(\d+)(\s*,\s*)(\d+)/gi;

  var imgIds = Object.keys(C.images);
  var imgSrc = "https://framerusercontent\\.com/images/(" + imgIds.join("|") + ")\\.[a-z]+(\\?[^\"')\\s,]*)?";
  var imgRe = new RegExp(imgSrc, "g");
  var imgOne = new RegExp(imgSrc);

  // Exact colour strings to replace before recolouring, e.g. a faint
  // "rgba(255, 255, 255, 0.7)" raised to meet WCAG AA contrast.
  // Keys/values are written like "rgba(255, 255, 255, 0.7)"; matching ignores
  // spacing and requires the closing ")" so 0.7 never matches 0.75.
  var overrides = Object.keys(C.colorOverrides || {}).map(function (k) {
    var body = k.replace(/\)\s*$/, "");
    var src = body.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s*,\s*/g, "\\s*,\\s*");
    return { re: new RegExp(src + "(?=\\s*\\))", "gi"), to: C.colorOverrides[k].replace(/\)\s*$/, "") };
  });

  function fixStyleString(s) {
    if (!s) return s;
    for (var oi = 0; oi < overrides.length; oi++) s = s.replace(overrides[oi].re, overrides[oi].to);
    return s
      .replace(hexRe, function (m, h) { return "#" + C.colors[h.toLowerCase()]; })
      .replace(rgbRe, function (m, a, r, c1, g, c2, b) {
        var t = rgbMap[r + "," + g + "," + b];
        return t ? a + t[0] + c1 + t[1] + c2 + t[2] : m;
      })
      .replace(imgRe, function (m, id) { return C.images[id]; });
  }

  // ---- Framer "fit text" ---------------------------------------------------
  // Some headings are an <svg viewBox="0 0 W H"> sized for the ORIGINAL word.
  // When our word is longer, widen the viewBox so it still fits its box.
  var reverseMap = Object.create(null);
  Object.keys(textMap).forEach(function (k) {
    var v = norm(textMap[k]);
    if (!(v in reverseMap)) reverseMap[v] = k;
  });
  var ctx = document.createElement("canvas").getContext("2d");

  function fitSvg(svg) {
    var p = svg.querySelector("p");
    var orig = svg.__pfOrig;
    var vb = svg.getAttribute("viewBox");
    if (!p || !orig || !vb) return;
    if (vb !== svg.__pfVb) svg.__pfBase = vb; // Framer (re)set its own value
    var parts = svg.__pfBase.split(/[\s,]+/).map(Number);
    var cs = getComputedStyle(p);
    ctx.font = cs.fontStyle + " " + cs.fontWeight + " 100px " + cs.fontFamily;
    var ratio = ctx.measureText(norm(p.textContent)).width / ctx.measureText(orig).width;
    var nvb = ratio > 1.001
      ? [parts[0], parts[1], +(parts[2] * ratio).toFixed(2), parts[3]].join(" ")
      : svg.__pfBase;
    svg.__pfVb = nvb;
    if (vb !== nvb) svg.setAttribute("viewBox", nvb);
  }

  function trackFitSvg(svg) {
    var p = svg.querySelector("p");
    if (!p) return;
    var t = norm(p.textContent);
    if (t in textMap) svg.__pfOrig = t;           // will be replaced below
    else if (t in reverseMap) svg.__pfOrig = reverseMap[t]; // already replaced
    if (svg.__pfOrig) {
      (window.queueMicrotask || setTimeout)(function () { fitSvg(svg); });
    }
  }

  // ---- elements ----------------------------------------------------------
  function fixEl(el) {
    if (el.nodeName === "svg" || el.nodeName === "SVG") {
      if (el.querySelector && el.querySelector("foreignObject.framer-fit-text")) trackFitSvg(el);
    }
    var st = el.getAttribute("style");
    if (st) {
      var ns = fixStyleString(st);
      if (ns !== st) el.setAttribute("style", ns);
    }
    ["fill", "stroke"].forEach(function (a) {
      var v = el.getAttribute(a);
      if (v) { var nv = fixStyleString(v); if (nv !== v) el.setAttribute(a, nv); }
    });
    if (el.nodeName === "IMG") {
      var src = el.getAttribute("src") || "";
      var set = el.getAttribute("srcset") || "";
      var m = imgOne.exec(src) || imgOne.exec(set);
      if (m) {
        var local = C.images[m[1]];
        if (set) el.removeAttribute("srcset");
        if (src !== local) el.setAttribute("src", local);
        var alt = C.alts && C.alts[m[1]];
        if (alt && el.getAttribute("alt") !== alt) el.setAttribute("alt", alt);
      } else if (C.alts) {
        // Images still served from Framer's CDN (not replaced locally) can
        // also have alt text, matched by their image id.
        for (var aid in C.alts) {
          if ((src.indexOf(aid) !== -1 || set.indexOf(aid) !== -1) && el.getAttribute("alt") !== C.alts[aid]) {
            el.setAttribute("alt", C.alts[aid]);
            break;
          }
        }
      }
    }
    if (links.length && el.matches) {
      for (var i = 0; i < links.length; i++) {
        if (el.matches(links[i].selector)) {
          if (el.getAttribute("role") !== "link") el.setAttribute("role", "link");
          if (!el.hasAttribute("tabindex")) el.setAttribute("tabindex", "0");
          // Image-only links need an accessible name.
          if (links[i].label && el.getAttribute("aria-label") !== links[i].label) el.setAttribute("aria-label", links[i].label);
        }
      }
    }
  }

  // ---- extra links (elements that were not links in the template) --------
  var links = C.links || [];
  function linkFor(target) {
    if (!target || !target.closest) return null;
    for (var i = 0; i < links.length; i++) {
      if (target.closest(links[i].selector)) return links[i].href;
    }
    return null;
  }
  // Framer navigates between its pages client-side (no reload) and injects the
  // ORIGINAL page CSS through the CSSOM, which brings back the old colours and
  // changes the URL to e.g. "/services". Force normal page loads instead, so
  // every page comes from the rebuilt ash-grey HTML.
  var PAGES = { "": "index.html", "index": "index.html", "about": "about.html", "services": "services.html", "contact": "contact.html" };
  function pageHref(target) {
    var a = target && target.closest && target.closest("a[href]");
    if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return null;
    var url;
    try { url = new URL(a.getAttribute("href"), location.href); } catch (err) { return null; }
    if (url.origin !== location.origin) return null;
    var seg = url.pathname.split("/").pop().replace(/\.html$/, "");
    if (!(seg in PAGES)) return null;
    var file = PAGES[seg];
    var here = location.pathname.split("/").pop() || "index.html";
    if (file === here && url.hash) return null; // same-page anchor: let Framer scroll
    return file + url.search + url.hash;
  }

  function go(e) {
    var href = linkFor(e.target) || (e.type === "click" ? pageHref(e.target) : null);
    if (!href) return;
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    e.stopPropagation();
    // "#scroll:<selector>" scrolls to a section on the same page.
    if (href.indexOf("#scroll:") === 0) {
      var target = document.querySelector(href.slice(8));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // External profiles/maps open in a new tab; mailto:/tel: and pages load here.
    if (/^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0) {
      window.open(href, "_blank", "noopener");
      return;
    }
    if (e.ctrlKey || e.metaKey) window.open(href, "_blank");
    else location.href = href;
  }
  // Capture phase so Framer's own handlers do not swallow the click.
  window.addEventListener("click", go, true);
  window.addEventListener("keydown", go, true);

  function walk(root) {
    if (root.nodeType === 3) { fixText(root); return; }
    if (root.nodeType !== 1) return;
    fixEl(root);
    var w = document.createTreeWalker(root, 5 /* ELEMENT | TEXT */, null);
    var n;
    while ((n = w.nextNode())) {
      if (n.nodeType === 3) fixText(n); else fixEl(n);
    }
  }

  walk(document.documentElement);

  new MutationObserver(function (records) {
    for (var i = 0; i < records.length; i++) {
      var r = records[i];
      if (r.type === "childList") {
        for (var j = 0; j < r.addedNodes.length; j++) walk(r.addedNodes[j]);
      } else if (r.type === "characterData") {
        fixText(r.target);
      } else if (r.type === "attributes") {
        fixEl(r.target);
      }
    }
  }).observe(document.documentElement, {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["style", "src", "srcset", "fill", "stroke", "viewBox"]
  });

  // Safety net: recolour CSS rules that Framer inserts through the CSSOM
  // (insertRule does not show up as a DOM mutation).
  var oldColour = new RegExp(hexRe.source + "|rgba?\\(\\s*(" +
    Object.keys(rgbMap).map(function (k) { return k.replace(/,/g, ",\\s*"); }).join("|") + ")\\b", "i");
  function fixRules(rules) {
    for (var i = 0; i < rules.length; i++) {
      var r = rules[i];
      if (r.cssRules && r.cssRules.length) fixRules(r.cssRules);
      if (!r.style) continue;
      var txt = r.cssText;
      if (!oldColour.test(txt) && !overrides.some(function (o) { o.re.lastIndex = 0; return o.re.test(txt); })) continue;
      for (var j = 0; j < r.style.length; j++) {
        var prop = r.style[j];
        var val = r.style.getPropertyValue(prop);
        var nv = fixStyleString(val);
        if (nv !== val) r.style.setProperty(prop, nv, r.style.getPropertyPriority(prop));
      }
    }
  }
  function fixSheets() {
    var sheets = document.styleSheets;
    for (var i = 0; i < sheets.length; i++) {
      try { fixRules(sheets[i].cssRules); } catch (err) { /* cross-origin sheet */ }
    }
  }
  fixSheets();
  var sweeps = 0;
  var sweepTimer = setInterval(function () { fixSheets(); if (++sweeps > 15) clearInterval(sweepTimer); }, 1000);
  window.addEventListener("load", fixSheets);

  // Re-measure fit-text headings once the web fonts have loaded.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      var all = document.querySelectorAll("svg");
      for (var i = 0; i < all.length; i++) if (all[i].__pfOrig) fitSvg(all[i]);
    });
  }

  // Framer can also reset the document title during client-side navigation.
  function setTitle() {
    if (!C.pages) return;
    var page = location.pathname.split("/").pop() || "index.html";
    if (!/\.html$/.test(page)) page += ".html";
    var meta = C.pages[page] || C.pages["index.html"];
    if (meta && meta.title && document.title !== meta.title) document.title = meta.title;
  }
  setTitle();
  new MutationObserver(setTitle).observe(document.head, { childList: true, characterData: true, subtree: true });
})();
