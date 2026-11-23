/*
 * Abeeha Aamir — Developer Portfolio content
 * ------------------------------------------------------------------
 * This is the ONE place to edit the site's text, images and colours.
 *
 * "text":   original template text  ->  your text
 *           (left side must stay exactly as it is; only edit the right side)
 * "images": original Framer image id ->  local image path
 * "alts":   original Framer image id ->  descriptive alt text (SEO/accessibility)
 * "links":  CSS selector -> page to open on click (for template elements
 *           that were not links, e.g. "View all projects")
 * "scopedText": replace the text inside ONE element only (when the same
 *           template word is used elsewhere, e.g. "Web Design")
 * "colors": original template colour ->  ash grey colour
 * "colorOverrides": exact colour string -> replacement (used to raise faint
 *           text to WCAG AA contrast; applied before "colors")
 * "pages":  <title> and meta description for each page
 *
 * After editing, run:   python tools/build.py
 * (this rewrites index/about/services/contact.html from framer-source/).
 * The site also applies this file at runtime, so the Framer script cannot
 * switch content back to the template.
 *
 * Anything marked "20XX", "XX", "Client Name", "Project One" etc. is a
 * PLACEHOLDER — replace it with your real details.
 * This file must stay valid JSON between the first "{" and the last "}".
 */
window.PORTFOLIO_CONTENT = {
  "text": {
    "Creative": "Developer",
    "Joanne Alexander": "Abeeha Aamir",
    "Creative Strategist": "Software Developer",
    "Joanne.": "Abeeha.",
    "Joanne": "Abeeha",
    "JOANNE": "Abeeha",
    "ALEXANDER": "AAMIR",

    "I am a creative strategist and product designer with 6+ years of experience helping brands turn ideas into clear, beautiful and useful digital experiences. I blend research, strategy and visual craft to design products people love to use.": "I am a developer who enjoys turning ideas into clean, reliable and user-friendly digital products. I care about readable code, responsive interfaces and thoughtful problem-solving, and I am always learning new tools to build things people love to use.",
    "• Product Design": "•  Frontend Development",
    "• Branding & Visual Identity": "•  Backend & APIs",
    "• Design Systems": "•  Responsive Web Design",
    "• User Research": "•  Databases & Version Control",

    "EXPERIENCES": "EXPERIENCE",
    "I create engaging digital experiences that combine usability, creativity, and business goals.": "I build custom web applications and AI-powered automations that cut manual work and help businesses run smoothly.",
    "500+ Digital Screens Designed": "AI Automation Developer",
    "Multiple Industries Served": "Full Stack Developer",
    "Startups to Enterprise Clients": "Custom CRM & Client Portal Development",
    "End-to-End Product Design Experience": "AI Transcription & Workflow Automation",
    "User-Centered Design Approach": "Third-Party Integrations & Dashboards",

    "2021 – 2025": "2026 – Ongoing",
    "Bachelor of Information Systems": "BS Computer Science",
    "Focused on human-computer interaction, research methods and product thinking.": "The Islamia University of Bahawalpur",
    "2023": "2024 – 2026",
    "UX Design Professional Certificate": "Intermediate",
    "Intensive program covering user research, wireframing, prototyping and usability testing.": "Army Public College Bahawalpur",
    "2021": "2022 – 2024",
    "Senior High School Diploma": "Matriculation",
    "Graduated with honors with a focus on visual arts and communication.": "Rangers Public School Bahawalpur",

    "Sample": "Selected",
    "A selection of recent work across product design, branding and digital experiences — from early research to the final pixel.": "Custom CRMs, client portals and AI automations built to solve real business problems — from first idea to production.",
    "Lumen Studio — Brand Identity": "Hostyo – Custom CRM & Owner Portal",
    "A complete visual identity for an independent design studio: logo system, color palette, typography and stationery that feel warm, crafted and confident.": "A custom property management portal and AI-powered CRM that streamlines owner management, sales operations, bookings, and business workflows.",
    "Branding": "View Project →",
    "Visual Identity": "CRM",
    "Print": "AI Automation",
    "Bloom Skin — Packaging & E-commerce": "BrioForm – The Athlete Standard",
    "Soft, modern packaging and an online store for a clean skincare brand. The design system scales from product labels to a conversion-focused shopping experience.": "A coach-led athlete development platform combining structured 12-week training programs, digital workbooks, progress tracking, and real-time coaching into one connected experience.",
    "Packaging": "View Project →",
    "E-commerce": "React",
    "UI Design": "Supabase",
    "Terra Home — Website Redesign": "MAÎTR-ISO – Workforce Management Web & Mobile App",
    "An earthy, editorial website for a ceramics and home-goods brand, built around large imagery, calm typography and a simple path to purchase.": "A bilingual workforce management platform designed for construction companies in Quebec, Canada, featuring GPS-based attendance, job site management, employee scheduling, compliance tracking, and mobile applications.",
    "Art Direction": "GPS Attendance",
    "UX": "Mobile Apps",

    "Sarah Mitchell": "Client Name",
    "Founder, Lumen Studio": "Role, Company",
    "“Joanne turned a messy brief into a clear, beautiful brand. Every detail felt intentional.”": "“Placeholder testimonial — replace with real feedback from a client, teammate or mentor.”",
    "Michael Chen": "Client Name",
    "Product Lead, Northwind": "Role, Company",
    "“Thoughtful, fast and incredibly organized. Our new app flows are easier for everyone.”": "“Placeholder testimonial — add a short quote about working with Abeeha here.”",
    "David Wilson": "Client Name",
    "CEO, Terra Home": "Role, Company",
    "“Our redesigned website doubled online sales in three months. Highly recommended.”": "“Placeholder testimonial — keep it short, specific and genuine.”",
    "Sophia Lee": "Client Name",
    "Marketing Director, Bloom": "Role, Company",
    "“A true creative partner. She understands both the business and the people using it.”": "“Placeholder testimonial — replace or remove once you have real feedback.”",

    "Let's create something meaningful together.": "Let's build something meaningful together.",
    "hello@joannealexander.com": "abeehaaamirr@gmail.com",
    "+123-456-7890": "+92 329 8891430",
    "Mon – Fri, 9am – 6pm": "Mon – Sat, 10am – 10pm",
    "Mon – Fri · 9am – 6pm": "Mon – Sat · 10am – 10pm",
    "Creative strategist & product designer crafting meaningful digital experiences.": "Building powerful web experiences and intelligent AI-driven solutions.",
    "© 2026 Joanne Alexander. All rights reserved.": "© 2026 Abeeha Aamir. All rights reserved.",

    "A creative strategist and product designer who believes good design is equal parts empathy, clarity and a little bit of magic.": "A developer who believes great software is equal parts clean code, clear thinking and a little bit of curiosity.",
    "I grew up between sketchbooks and screens, always curious about why some things just feel right. That curiosity became a career helping brands and products speak clearly to the people they serve.": "I have always been curious about how things work behind the screen. That curiosity grew into a passion for building websites and applications that are fast, accessible and easy to use.",
    "Today I partner with founders, startups and established teams to shape brands, websites and digital products — blending research, strategy and craft into work that is beautiful and genuinely useful.": "Today I focus on building responsive interfaces and reliable back-ends — turning ideas into working products. (Placeholder: add more about your journey, interests and goals here.)",
    "6+": "XX+",
    "Years of experience": "Years of experience",
    "Designing brands and digital products.": "Learning and building for the web.",
    "120+": "XX+",
    "Projects delivered": "Projects completed",
    "From startups to global companies.": "Personal, academic and client work.",
    "45+": "XX+",
    "Happy clients": "Technologies",
    "Across 12 countries and counting.": "Languages, frameworks and tools.",
    "12": "XX",
    "Design awards": "Certifications",
    "Recognized for craft and impact.": "Courses and certifications completed.",
    "The craft behind the work — the skills I sharpen every day and the tools I use to bring ideas to life.": "The skills I sharpen every day and the tools I use to bring ideas to life. (Placeholder: update the skills and levels to match your own.)",
    "UI / UX Design": "HTML & CSS",
    "Brand Identity": "Backend Development",
    "Prototyping": "JavaScript",
    "User Research": "React",
    "Framer Development": "Git & GitHub",
    "Figma": "VS Code",
    "Interface design": "Code editor",
    "Framer": "GitHub",
    "Websites": "Version control",
    "Adobe CC": "Tailwind CSS",
    "Visual design": "Styling",
    "Notion": "Postman",
    "Documentation": "API testing",
    "Miro": "Trello",
    "Workshops": "Task planning",
    "Maze": "Chrome DevTools",
    "User testing": "Debugging",
    "2024 — Now": "20XX — Now",
    "Lead Product Designer": "AI Automation Developer",
    "Northwind Studio": "Company / Organization",
    "Leading design for SaaS clients and mentoring a team of four designers.": "Building AI-powered CRMs, call transcription and summaries, and automated business workflows.",
    "2021 — 2024": "20XX — 20XX",
    "Senior UX Designer": "Full Stack Developer",
    "Bloom Digital": "Company / Organization",
    "Designed e-commerce experiences and a multi-brand design system.": "Building React web applications, custom admin dashboards and client portals.",
    "2019 — 2021": "20XX — 20XX",
    "Brand Designer": "Internship / Freelance",
    "Lumen Studio": "Company / Organization",
    "Created identities, packaging and campaigns for lifestyle brands.": "Placeholder: describe the projects you worked on.",
    "2018 — 2019": "20XX — 20XX",
    "Design Intern": "Started Coding",
    "Terra Agency": "University / Self-taught",
    "Supported research, wireframes and visual design for web projects.": "Placeholder: how you started your developer journey.",

    "Strategy, design and digital craft for brands that want to stand out — from first idea to final pixel.": "Clean code, thoughtful interfaces and reliable development for products that need to work well — from first idea to final deploy.",
    "Six ways I can help your brand look sharper, work better and connect with the people it serves.": "Six ways I can help bring your product to life — from interfaces to APIs.",
    "Product Design": "Frontend Development",
    "End-to-end design for web and mobile products, from user flows and wireframes to polished, testable interfaces.": "Responsive, accessible interfaces built with modern frameworks and clean, reusable components.",
    "Logos, color, typography and guidelines that give your brand a clear, memorable and consistent voice.": "APIs, databases and server logic that are secure, reliable and easy to maintain.",
    "Design Systems": "Full-Stack Web Apps",
    "Scalable component libraries and documentation that keep product teams fast and consistent.": "End-to-end applications, from database design to a polished user interface.",
    "UX Research": "API Integration",
    "Interviews, usability tests and insights that turn assumptions into confident design decisions.": "Connecting your product to third-party services, payments and data sources.",
    "Web Design": "Website Development",
    "Editorial, conversion-focused websites built in Framer and ready to grow with your business.": "Fast, responsive websites that look great on every device and are ready to grow with your business.",
    "Creative Strategy": "Maintenance & Optimization",
    "Positioning, messaging and creative direction that connect business goals with real people.": "Bug fixes, performance improvements and updates that keep your product running smoothly.",
    "We start with a call to understand your goals, audience, timeline and constraints.": "We start with a call to understand your goals, users, timeline and requirements.",
    "Define": "Plan",
    "I turn research into a clear strategy, scope and roadmap we both agree on.": "I turn requirements into a clear technical plan, scope and roadmap we both agree on.",
    "Design": "Build",
    "Concepts, iterations and prototypes, refined together with your feedback.": "Iterative development with regular updates, demos and your feedback.",
    "Deliver": "Launch",
    "Final files, developer handoff and launch support so everything goes smoothly.": "Testing, deployment and handover so everything goes live smoothly.",
    "$1,800": "$XXX",
    "For small brands and founders who need a strong first impression.": "For small businesses and founders who need a strong online presence.",
    "✓ Logo or landing page": "✓  Landing page or small website",
    "✓ Delivery in 2–3 weeks": "✓  Timeline agreed upfront",
    "$4,200": "$X,XXX",
    "For growing teams ready for a complete website or product sprint.": "For growing teams ready for a complete website or web application.",
    "✓ Website or product sprint": "✓  Full website or web app",
    "✓ Design system starter": "✓  Admin dashboard / CMS",
    "✓ Delivery in 4–6 weeks": "✓  Regular progress updates",
    "$7,500+": "$X,XXX+",
    "For ambitious launches, full rebrands and long-term partnerships.": "For complex products, custom platforms and long-term partnerships.",
    "✓ Full product or rebrand": "✓  Custom full-stack product",
    "✓ Research & usability testing": "✓  Testing & documentation",
    "Most projects take 2–6 weeks depending on scope. You get a clear timeline before we start.": "Timelines depend on scope. You get a clear estimate before we start.",
    "Yes — I work remotely with teams around the world and adapt to your time zone.": "Yes — I can work remotely and adapt to your time zone.",
    "A short brief, your goals and any existing brand assets. I will guide you through the rest.": "A short brief, your goals and any existing designs or code. I will guide you through the rest.",
    "Can you build the website too?": "Can you also design the UI?",
    "Absolutely. I design and build responsive websites in Framer, ready to publish.": "Yes — I can create clean, simple interfaces or work from your existing designs.",
    "50% to book your spot and 50% on delivery. Larger projects can be split into milestones.": "Payment terms are agreed before the project starts. Larger projects can be split into milestones.",

    "Design System": "Full-Stack Web App",
    "STUDIO": "LOCATION",
    "Rua das Flores 28, Lisbon": "Bahawalpur, Pakistan",
    "Instagram": "GitHub",
    "Dribbble": "LeetCode",
    "Behance": "Stack Overflow",
    "A clear proposal with scope and price. Once approved, we start creating.": "A clear proposal with scope and price. Once approved, we start building.",
    "Visit the": "My",
    "Coffee is always on. Drop by for a chat about your next project — just let me know you’re coming.": "I worked at Techticks in Bahawalpur as a Full Stack & AI Automation Developer — building web apps, custom CRMs and smart automated workflows.",
    "Rua das Flores 28, 1200-195 Lisbon, Portugal": "Bahawalpur, Pakistan"
  },

  "images": {
    "eQUTXQ8rByuwp6lukPpwibpYYg0": "assets/images/techticks-office.webp",
    "qwDvSo0wyH4CBjsPBRbzgFhz9fw": "assets/images/abeeha-portrait.webp",
    "VdvtmjCwdrHBZJznP2uG4jNrQY": "assets/images/abeeha-portrait.webp",
    "PlSkVTwt0uDXQstLN3IOgouTnLc": "assets/images/abeeha-portrait-medium-mirror.webp",
    "ueYuyiIR1alUgWmBw0wNWmXQxc": "assets/images/abeeha-portrait-close.webp",
    "hRcGOXDVXdxEFz8STNm7hJuMo": "assets/images/abeeha-portrait-close-mirror.webp",
    "Zj3ww30Vd98FyOg59ushro8eI": "assets/images/abeeha-portrait-mirror.webp",
    "UehLGUWCfpPB30pYDFQJdfEcVQU": "assets/images/abeeha-portrait-close.webp",
    "1N4dQyPfSDSTtXwyuwMLiL3paQ": "assets/images/abeeha-portrait-medium-mirror.webp",
    "ee5a8VlAumEXYx1v5IHKEHlakU": "assets/images/abeeha-portrait-close-mirror.webp",
    "9z652MG2hXI4KzHMNgZD7MW74L0": "assets/images/abeeha-portrait-mirror.webp",
    "6VpdKCB62meIuEpzD9sJfmeFGA": "assets/images/abeeha-bw-close.jpg",
    "Xc0tjYQZes2PBNvj3inOzDz4C8": "assets/images/abeeha-studio-landscape-close.jpg",
    "UBNd5jlUG1wEmylSJ7wznbFW7g": "assets/images/abeeha-studio-landscape-mirror.jpg",
    "mbeZK7UZB9pgPhcv23zBzRfD5Q": "assets/images/abeeha-studio-landscape.jpg",
    "lBLed6OE6HLaGxjfY94L5fw3o": "assets/images/abeeha-studio-portrait-close.jpg",
    "lIcwejW3yqSSyK2KSRWlGPlCA": "assets/images/favicon.png",
    "CQDa03bLnPipJjzynmItyX0Tfc": "assets/images/abeeha-photo.jpg",

    "WBNEBM5pnUK5j0UsSN7OyK3qg": "assets/images/projects/hostyo/hostyo-owner-portal-dashboard.webp",
    "WYaxc1xQmwcIs4SmVoxC27Lfhw": "assets/images/projects/hostyo/hostyo-owner-portal-dashboard.webp",
    "oxWt8xDcGexKHzKIkEyNWeSMFR0": "assets/images/projects/hostyo/hostyo-crm-admin-dashboard.webp",
    "H1lDnzxdlanaUHMcxUxPg3I9RYM": "assets/images/projects/hostyo/hostyo-crm-admin-dashboard.webp",

    "YajIbdFl3PJfXJWnFnAR3Eo4qI": "assets/images/projects/hostyo/hostyo-owner-portal-dashboard.webp",
    "WiWivfOVfUekva1VoE1essROM": "assets/images/projects/hostyo/hostyo-crm-admin-dashboard.webp",

    "v4KobKxlEKdfmj1uBq3WpgmNYo": "assets/images/projects/brioform/brioform-admin-operations-dashboard.webp",
    "Zlhl9AIHGhqRKfeZAJXWYCClLA": "assets/images/projects/brioform/brioform-workbook-content-editor.webp",
    "v6B9IVUkpvazguKsmRfC7hidjY": "assets/images/projects/brioform/brioform-workbook-content-editor.webp",
    "7Am3acuCMAwweFAht822UHpF9i8": "assets/images/projects/maitr-iso/maitr-iso-gps-punch-in.webp",
    "ZLYN3NiRxi5Mkp7TmZRbrUEHQVU": "assets/images/projects/maitr-iso/maitr-iso-gps-punch-in.webp",
    "HrrUNcB75FqF0AQuhWehZhtig": "assets/images/projects/maitr-iso/maitr-iso-job-sites-geofencing.webp",
    "HpBH7OvhnsTGlH45W1gxJpPc": "assets/images/projects/maitr-iso/maitr-iso-job-sites-geofencing.webp"
  },

  "alts": {
    "WBNEBM5pnUK5j0UsSN7OyK3qg": "Hostyo Owner Portal dashboard showing balance, payouts, expenses, forecast and upcoming guest arrivals",
    "oxWt8xDcGexKHzKIkEyNWeSMFR0": "Hostyo CRM and Admin Portal dashboard with tasks, leads, deals and sales pipeline analytics",
    "qwDvSo0wyH4CBjsPBRbzgFhz9fw": "Abeeha Aamir, AI Automation and Full Stack Developer",
    "YajIbdFl3PJfXJWnFnAR3Eo4qI": "Hostyo Owner Portal dashboard",
    "WiWivfOVfUekva1VoE1essROM": "Hostyo CRM and Admin Portal dashboard",
    "v4KobKxlEKdfmj1uBq3WpgmNYo": "BrioForm admin operations dashboard showing active athletes, cohorts, programs, cohort progress and action items",
    "Zlhl9AIHGhqRKfeZAJXWYCClLA": "BrioForm workbook content editor for managing weekly lessons and lesson videos in the 12-week program",
    "7Am3acuCMAwweFAht822UHpF9i8": "MAÎTR-ISO GPS punch screen showing an employee punched in at a job site with automatic punch out and distance from the site",
    "HrrUNcB75FqF0AQuhWehZhtig": "MAÎTR-ISO job site management with addresses, GPS coordinates and geofence radius for each construction site",

    "VdvtmjCwdrHBZJznP2uG4jNrQY": "Abeeha Aamir, AI Automation and Full Stack Developer",
    "PlSkVTwt0uDXQstLN3IOgouTnLc": "Portrait of Abeeha Aamir",
    "ueYuyiIR1alUgWmBw0wNWmXQxc": "Portrait of Abeeha Aamir",
    "hRcGOXDVXdxEFz8STNm7hJuMo": "Portrait of Abeeha Aamir",
    "Zj3ww30Vd98FyOg59ushro8eI": "Portrait of Abeeha Aamir",
    "UehLGUWCfpPB30pYDFQJdfEcVQU": "Portrait of Abeeha Aamir",
    "1N4dQyPfSDSTtXwyuwMLiL3paQ": "Portrait of Abeeha Aamir",
    "ee5a8VlAumEXYx1v5IHKEHlakU": "Portrait of Abeeha Aamir",
    "9z652MG2hXI4KzHMNgZD7MW74L0": "Portrait of Abeeha Aamir",
    "6VpdKCB62meIuEpzD9sJfmeFGA": "Black and white portrait of Abeeha Aamir",
    "Xc0tjYQZes2PBNvj3inOzDz4C8": "Abeeha Aamir",
    "UBNd5jlUG1wEmylSJ7wznbFW7g": "Abeeha Aamir",
    "mbeZK7UZB9pgPhcv23zBzRfD5Q": "Abeeha Aamir",
    "lBLed6OE6HLaGxjfY94L5fw3o": "Abeeha Aamir",
    "WYaxc1xQmwcIs4SmVoxC27Lfhw": "Hostyo Owner Portal dashboard",
    "H1lDnzxdlanaUHMcxUxPg3I9RYM": "Hostyo CRM and Admin Portal dashboard",
    "v6B9IVUkpvazguKsmRfC7hidjY": "BrioForm workbook content editor",
    "ZLYN3NiRxi5Mkp7TmZRbrUEHQVU": "MAÎTR-ISO GPS punch screen",
    "HpBH7OvhnsTGlH45W1gxJpPc": "MAÎTR-ISO job site management screen",
    "4S3yjP7wzYyYmBcoQJ8pzObgJFA": "Placeholder client photo",
    "Va7JZRjhvpxtbQAtScl7FWyws": "Placeholder client photo",
    "tnkQKs6bGodGofwfeF2QYS5g": "Placeholder client photo",
    "c7Ufc5JgRXBihlEgDntv5sWL7s": "Placeholder client photo",
    "1LpIZ0HXEmk9oVakTx3w7f1JB4": "Hands arranging printed layouts on a table during a planning session",
    "eQUTXQ8rByuwp6lukPpwibpYYg0": "Techticks office at Chughtai Complex, Bahawalpur"
  },

  "scopedText": [
    { "within": ".framer-8mnrm6", "text": "View Project →" }
  ],

  "links": [
    { "selector": ".framer-15xwglg, .framer-1tecrea, .framer-lhpl2v, .framer-a6fu5g, .framer-18ibp5k, .framer-skw540", "href": "mailto:abeehaaamirr@gmail.com", "label": "Email Abeeha: abeehaaamirr@gmail.com" },
    { "selector": ".framer-12a88nl, .framer-z95ee4, .framer-1y0xpjo, .framer-1btkmgk, .framer-g6m2p6", "href": "tel:+923298891430", "label": "Call Abeeha: +92 329 8891430" },
    { "selector": ".framer-199atu3", "href": "https://github.com/abeehaaamirr", "label": "GitHub profile (opens in a new tab)" },
    { "selector": ".framer-n7kpba", "href": "https://www.linkedin.com/in/abeeha-aamir-/", "label": "LinkedIn profile (opens in a new tab)" },
    { "selector": ".framer-1vallcp", "href": "https://www.google.com/maps/search/?api=1&query=Bahawalpur%2C%20Pakistan", "label": "Open Bahawalpur, Pakistan in Google Maps (opens in a new tab)" },

    { "selector": ".framer-q8xdzt", "href": "projects/" },
    { "selector": ".framer-2b863c", "href": "projects/hostyo-custom-crm-owner-portal/" },
    { "selector": ".framer-1q4fmzq", "href": "projects/hostyo-custom-crm-owner-portal/", "label": "View project: Hostyo – Custom CRM & Owner Portal" },
    { "selector": ".framer-1ursfq3", "href": "projects/brioform-athlete-development-platform/" },
    { "selector": ".framer-1c90wjp", "href": "projects/brioform-athlete-development-platform/", "label": "View project: BrioForm – The Athlete Standard" },
    { "selector": ".framer-jo359c", "href": "projects/maitr-iso-workforce-management-app/" },
    { "selector": ".framer-16uzqtl", "href": "projects/maitr-iso-workforce-management-app/", "label": "View project: MAÎTR-ISO – Workforce Management Web & Mobile App" },
    { "selector": ".framer-1kh2pnn", "href": "projects/maitr-iso-workforce-management-app/", "label": "View project: MAÎTR-ISO – Workforce Management Web & Mobile App" },

    { "selector": ".framer-bhx0qq", "href": "contact.html" },
    { "selector": ".framer-gbudbv", "href": "contact.html" },
    { "selector": ".framer-amh8ml", "href": "contact.html" },
    { "selector": ".framer-obj9e", "href": "contact.html" },
    { "selector": ".framer-1a0f18u", "href": "contact.html" },
    { "selector": ".framer-om3m7u", "href": "contact.html" },
    { "selector": ".framer-1j2tlpc", "href": "projects/", "label": "Learn more: Frontend Development projects" },
    { "selector": ".framer-12sb9r", "href": "projects/", "label": "Learn more: Backend Development projects" },
    { "selector": ".framer-1v383ye", "href": "projects/", "label": "Learn more: Full-Stack Web App projects" },
    { "selector": ".framer-lw09bk", "href": "projects/", "label": "Learn more: API Integration projects" },
    { "selector": ".framer-16jpylm", "href": "projects/", "label": "Learn more: Website Development projects" },
    { "selector": ".framer-1knuddf", "href": "projects/", "label": "Learn more: Maintenance & Optimization projects" }
  ],

  "colors": {
    "f6f0e8": "e6eae7",
    "f5eee6": "e9ecea",
    "a9271f": "5e6b63",
    "5a1311": "3a423d",
    "3b1513": "262b28",
    "7a5b57": "5a645e",
    "f0948a": "b2beb5",
    "f7d9b8": "eef1ef"
  },

  "colorOverrides": {
    "rgba(255, 255, 255, 0.7)": "rgba(255, 255, 255, 0.92)",
    "rgba(246, 240, 232, 0.65)": "rgba(246, 240, 232, 1)",
    "rgba(246, 240, 232, 0.8)": "rgba(246, 240, 232, 1)"
  },

  "pages": {
    "index.html": {
      "title": "Abeeha Aamir — Developer Portfolio",
      "description": "Portfolio of Abeeha Aamir, a developer building clean, responsive and meaningful digital experiences."
    },
    "about.html": {
      "title": "About Abeeha Aamir — Developer Portfolio",
      "description": "Meet Abeeha Aamir: her story, skills, tools and journey as a developer."
    },
    "services.html": {
      "title": "Services — Abeeha Aamir | Web Development",
      "description": "Frontend, backend and full-stack web development services by Abeeha Aamir. See the process, packages and FAQs."
    },
    "contact.html": {
      "title": "Contact — Abeeha Aamir | Let's Work Together",
      "description": "Have a project in mind? Send a message to Abeeha Aamir for web development and software projects."
    }
  }
};
