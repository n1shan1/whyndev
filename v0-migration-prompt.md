# V0 MIGRATION PROMPT — whyn.dev (Complete Content & Structure)

> **Context:** I have an existing Next.js 16 / App Router website for a web-agency brand called **whyn.dev**. I'm migrating to a new design template. Below is the **complete content, page structure, data, and functional requirements** of the current site. Please recreate all of this content inside the new design, adapting the layout and visual style to match the new template's design language while keeping every piece of copy, data, and functionality intact. Add new sections if the new design calls for them, but never remove existing content.

---

## GLOBAL CONFIGURATION

- **Brand:** whyn.dev
- **Tagline:** "We build what makes your business grow"
- **Primary Color:** Emerald / oklch(0.696 0.17 162.48) — used for CTAs, accents, gradients, and highlights
- **Fonts:** Geist Sans (body) + Geist Mono (code)
- **Dark Mode:** Yes — uses `next-themes` with `attribute="class"` and `defaultTheme="dark"`. Tailwind `darkMode: 'class'`. Full light/dark CSS variable system is defined. Preserve both themes.
- **Framework:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui components, Lucide icons
- **Analytics:** Vercel Analytics
- **Booking:** Cal.com embed (CalEmbed component)

---

## GLOBAL LAYOUT (app/layout.tsx)

Every page is wrapped in:

1. `<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>` (from next-themes)
2. `<GridBackground />` — a dot-grid background with floating emerald glow orbs
3. `<FloatingContacts />` — fixed bottom-left floating contact bubble (WhatsApp: wa.me/491575440551, Phone: +491575440551, Email: hello@whyn.dev)
4. `<Footer />` — global footer
5. `<Navigation />` — floating pill-shaped glassmorphism navbar (fixed, centered, top)

---

## NAVIGATION (components/navigation.tsx)

- **Logo/Brand:** "whyn.dev" (links to /)
- **Desktop Links (pill-shaped, rounded-full):**
  - **Services** → /services (dropdown: AI Conversion Websites → /services#ai-conversion, AI Lead Capture Systems → /services#ai-leads, AI Chat Sales Assistants → /services#ai-chat, SaaS / Web App Development → /services#saas)
  - **Projects** → /projects
  - **Pricing** → /pricing (dropdown: Website Packages → /pricing#websites, AI Integration Packages → /pricing#ai, Custom Enterprise Builds → /pricing#enterprise)
  - **Blog** → /blog
  - **About** → /about
- **Right Side:**
  - Theme toggle button (Sun/Moon icon, uses `useTheme` from next-themes)
  - "Book a Call" CTA button → /contact (hidden on mobile)
  - Mobile hamburger menu (identical links + dropdowns in sheet)
- **Behavior:** Glassmorphism pill nav that gets more opaque on scroll. Dropdown panels appear on hover (desktop) or expand on tap (mobile).

---

## FOOTER (components/footer.tsx)

4-column grid:

1. **Brand:** "whyn.dev" — "Premium web design and digital innovation for modern brands."
2. **Services:** Web Design, Development, Web-Apps, AI Integration (all link to /services)
3. **Company:** About Us → /about, Our Work → /projects, Pricing → /pricing, Contact → /contact
4. **Connect:** hello@whyn.dev, Social icons: LinkedIn, Twitter, GitHub, Email

**Bottom bar:** "© 2026 Whyn. All rights reserved." + Privacy Policy, Terms of Service, Cookie Policy links

---

## FLOATING CONTACTS (components/floating-contacts.tsx)

Fixed bottom-left. A toggle bubble (MessageCircle icon, emerald accent). When expanded, shows 3 contact bubbles:

- WhatsApp → wa.me/491575440551 (green #25D366)
- Call → tel:+491575440551 (emerald #34d399)
- Email → mailto:hello@whyn.dev (light emerald #6ee7b7)

---

## PAGE 1: HOME (app/(home)/page.tsx)

**Section order:**

1. HeroSection
2. PortfolioSection
3. ExpertiseSection
4. ResultsReviewsSection
5. AboutDeveloperCard
6. BookCallSection
7. FaqSection

### 1A. Hero Section

- **Headline:** "We build what makes you **grow**" (the word "grow" is emerald gradient-colored)
- **Subheading:** "Websites, web apps & custom software — designed with AI, crafted for your business."
- **CTA Button:** "Get Free Mockup" → /contact
- **Tech Stack Ticker (infinite scroll):** Next.js, TailwindCSS, Framer Motion, Node.js, PostHog, Vercel, React, TypeScript, Supabase, OpenAI, Three.js, Prisma (repeated for seamless loop)
- **Hero Stats (3 items):**
  - 92+ — Projects completed
  - 7.5M+ — Users reached
  - 100% — Client satisfaction

### 1B. Portfolio Section (glass-card container)

- **Heading:** "Portfolio."
- **Subheading:** "Selected work. From local businesses to international platforms."
- **6 project preview cards in 3-column grid:**
  1. Propvex Capital | FINANCE | "Real Estate Investment Platform. Redefining property investment through digital interface."
  2. Steakclub New York | GASTRONOMIE | "High-end Dining Branding. Sophisticated visual identity for exclusive dining."
  3. Chauffeur München | TRANSPORT | "Luxury Transport UI/UX. Elegant booking ecosystem for premium transportation."
  4. Car Company | AUTOMOTIVE | "Digitalization of a used car dealership with modern web presence."
  5. Moussa Export | TRADE | "Import & Export platform for international trade and logistics."
  6. Köse Autolackiererei | AUTOMOTIVE | "Professional auto paint services website with portfolio showcase."
- **CTA:** "View All Projects" → /projects

### 1C. Expertise Section (glass-card container)

- **Heading:** "Expertise"
- **Subheading:** "What we do and what we stand for."
- **Stats Bar (4 items):** 50+ Projects | 7.5M+ Users | 10 yrs Experience | 30+ Clients
- **Services Grid (2×2):**
  1. 🧠 AI Conversion Websites — "AI-powered websites engineered to maximize conversions and user engagement."
  2. ⚡ AI Lead Capture — "Intelligent lead capture systems that qualify and nurture prospects automatically."
  3. 👥 AI Chat Sales Assistants — "Custom chatbots trained on your business to drive sales 24/7."
  4. 💻 SaaS / Web App Development — "Full-stack web applications built for scale with modern architecture."

### 1D. Results & Reviews Section (glass-card container)

- **Heading:** "Results & Reviews"
- **Subheading:** "What our clients say and the impact we deliver."
- **Testimonials (3 cards):**
  1. Alex Rivera, CEO TechFlow — "The ROI-first approach changed how we view our digital spend. Traffic doubled in 3 months!"
  2. Sarah Chen, Founder Bloom Media — "Incredible speed performance. Our bounce rate dropped by 45% since the redesign."
  3. Marcus Thorne, Partner Thorne & Co — "A professional team that understands business goals, not just pretty designs."
- **Impact Stats (4 badges):**
  - +248% User Growth (12 mo)
  - OnPage SEO — Optimized Content
  - 100% Responsive — All Devices
  - ROI-First — Business Growth

### 1E. About Developer Card

- **Badge:** "Full Stack / AI Engineer"
- **Name:** John Doe
- **Bio:** "Crafting robust, scalable, and intelligent web applications. Expert in merging modern UI/UX with AI architectures to deliver conversion-focused software solutions. Passionate about clean code and exceptional user experiences."
- **Tech Arsenal tags:** Next.js, React, TypeScript, Tailwind, Python, OpenAI
- **Buttons:** GitHub (default variant) + LinkedIn (outline variant)
- **Visual:** Code2 icon in emerald gradient square

### 1F. Book Call Section (glass-card container)

- **Heading:** "Ready for your project?"
- **Subheading:** "Book a free intro call. Let's discuss your vision and create something extraordinary."
- **Cal.com Embed** (embedded booking widget)
- **Note:** "Prefer direct contact? +49 1575 4405511"

### 1G. FAQ Section (glass-card container)

- **Heading:** "FAQ"
- **Subheading:** "Straight answers to your questions."
- **Accordion (5 items):**
  1. Why Whyn? → "We deliver custom, high-performance solutions tailored to your business needs with attention to detail and professional service."
  2. How long does it take? → "Projects typically take 4-8 weeks depending on scope. We provide a detailed timeline during your initial consultation."
  3. How much does a website cost? → "Websites start at $2,500 for design-only solutions. Custom web apps range from $5,000-$50,000+ depending on complexity."
  4. What technologies do you use? → "We use Next.js, React, TypeScript, Tailwind CSS, and modern tools to ensure fast, scalable, and maintainable solutions."
  5. Do you integrate AI features? → "Yes! AI-powered chatbots, lead capture systems, and conversion optimization are core to our service offering."

---

## PAGE 2: ABOUT (app/about/page.tsx)

**Section order:**

1. Hero — "About Whyn" / "The mind and vision behind Whyn."
2. Stats Grid (2×4): 92+ Projects Completed | 7.5M+ Users Reached | 100% Client Satisfaction | 24h Avg Response Time
3. Story Section — heading "Our Story", three paragraphs:
   - "Whyn was founded with the belief that great design and technology can transform businesses. We combine strategic thinking with creative excellence to craft digital solutions that truly matter."
   - "Our mission is to be your trusted partner in digital innovation. We work closely with our clients to understand their vision and deliver results that exceed expectations. Every project is an opportunity to create something extraordinary."
   - "Whether you're a startup establishing your brand or an established company ready for innovation — we're here to help you succeed."
   - Right side: 4 hover cards repeating the stats
4. Values Section — heading "Our Values" / "These principles guide us in everything we do."
   - Quality First — "We deliver exceptional code and design that stands the test of time."
   - Fast Execution — "Quick turnaround without compromising on quality or attention to detail."
   - Client Focused — "Your success is our success. We invest in understanding your goals."
   - Innovation — "We use cutting-edge technologies and best practices in our industry."
5. Founder Section — heading "One mind, clear vision."
   - "I'm Kerim Bilin — the sole mind behind Whyn. No big team, no unnecessary meetings, no wasted hours. As a young developer with innovative thinking, I work efficiently, with quality, and fast."
   - "I manage and execute everything myself to deliver the best result. No 500 hours of work for things that simply need to work. I'm the best partner you'll find when it comes to excellence and getting things done."
   - Mini stats: 7.5M+ Users Impacted | 92+ Projects | 19 Years Old
   - CTA: "Start Your Project" → /contact
6. CTA Section — "Ready to collaborate?" / "Let's create something extraordinary together." / CTA: "Get in Touch" → /contact

---

## PAGE 3: SERVICES (app/services/page.tsx)

**Header:**

- Badge: "What We Build"
- Heading: "AI-Powered Digital Solutions"
- Subheading: "From intelligent websites to custom AI systems — engineering solutions that drive measurable business growth."

**4 Service Sections** (each in a section-card):

### Service 1: AI Conversion Websites (id: ai-conversion)

- **Tagline:** "Websites engineered to convert, powered by intelligence."
- **Description:** "We build AI-powered websites that dynamically adapt to user behavior, optimizing layouts, copy, and CTAs in real-time for maximum conversion rates."
- **Features:** Dynamic content personalization, AI-driven A/B testing automation, Heatmap-informed layout optimization, Conversion funnel analytics dashboard, Smart form optimization, PageSpeed 100 performance guarantee
- **Process:** 01 Research → 02 Design → 03 Build → 04 Optimize
- **Outcomes:** +248% avg. user growth, 45% lower bounce rates, 3x faster load times
- **Price:** From $3,500

### Service 2: AI Lead Capture Systems (id: ai-leads)

- **Tagline:** "Capture, qualify, and nurture leads automatically."
- **Description:** "Intelligent lead capture systems that go beyond simple forms. Our AI qualifies prospects, scores leads, and triggers personalized follow-up sequences — all on autopilot."
- **Features:** Smart lead scoring algorithms, Behavioral trigger automation, Multi-step intelligent forms, CRM integration (HubSpot, Salesforce), Personalized email sequences, Real-time lead quality analytics
- **Process:** 01 Map → 02 Build → 03 Integrate → 04 Scale
- **Outcomes:** 60% lead qualification rate, 3x faster response time, 40% higher close rates
- **Price:** From $5,000

### Service 3: AI Chat Sales Assistants (id: ai-chat)

- **Tagline:** "Your 24/7 sales team that never sleeps."
- **Description:** "Custom AI chatbots trained on your business data, products, and sales processes. They qualify leads, answer questions, and guide visitors through to purchase — around the clock."
- **Features:** Custom-trained on your business, Natural conversation handling, Product recommendation engine, Appointment booking integration, Handoff to human agents, Multi-language support
- **Process:** 01 Train → 02 Design → 03 Deploy → 04 Learn
- **Outcomes:** 80% query resolution rate, 50% more qualified meetings, 24/7 availability
- **Price:** From $4,000

### Service 4: SaaS / Web App Development (id: saas)

- **Tagline:** "Full-stack applications built for scale."
- **Description:** "From MVPs to enterprise platforms — we architect and build web applications using modern frameworks, scalable infrastructure, and clean code practices."
- **Features:** Full-stack Next.js / React, Scalable database architecture, Authentication & authorization, API design and integration, Real-time features (WebSocket), CI/CD pipeline setup
- **Process:** 01 Scope → 02 Architect → 03 Develop → 04 Launch
- **Outcomes:** Production-ready in 8-12 weeks, 99.9% uptime SLA, Infinite scalability
- **Price:** From $10,000

**Bottom CTA:** "Not sure which service fits?" / "Book a free consultation and we'll recommend the best approach for your business goals." / CTA: "Book Free Consultation" → /contact

---

## PAGE 4: PROJECTS (app/projects/page.tsx)

**Hero:** "Our Work." / "A collection of premium digital experiences, web apps, and AI integrations."

**Category Filter Tabs (pill-style):** All, Finance, Gastronomie, Transport, Automotive, Trade

**6 Projects in 3-column grid** (each card links to /projects/[slug]):

1. **Propvex Capital** | Finance | slug: propvex-capital | "Investment and capital management. Professional financial platform with an elegant design" | Client: Propvex Capital | Date: January 2026 | Website: propvex.capital | Technologies: Next.js, Tailwind CSS, Financial Design, SEO | Challenge → Solution → Results
2. **Steakclub New York** | Gastronomie | slug: steakclub-ny | "High-end Dining Branding." | Brand Identity & Web Development | 6 Weeks | Next.js, Framer Motion, Tailwind CSS, Sanity CMS
3. **Chauffeur München** | Transport | slug: chauffeur-munchen | "Luxury Transport UI/UX." | UI/UX Design & Frontend | 8 Weeks | React, Next.js, Stripe Integration, Google Maps API
4. **Car Company** | Automotive | slug: car-company | "Digitalization of a used car dealership." | Full-Stack Development | 10 Weeks | Next.js, Supabase, Tailwind CSS, Vercel
5. **Moussa Export** | Trade | slug: moussa-export | "Import & Export platform." | Custom Web Application Design | 14 Weeks | React, Node.js, MongoDB, AWS
6. **Köse Autolackiererei** | Automotive | slug: kose-autolackiererei | "Professional auto paint services." | Web Design & Content Strategy | 4 Weeks | Next.js, Tailwind CSS, Framer Motion

**CTA:** "Like what you see?" / "Let's create something amazing together." / CTA: "Start Your Project" → /contact

### Project Detail Page (app/projects/[slug]/page.tsx)

Bento-grid layout:

- Header box with category badge, title, description, "Visit website" link, technology count
- Laptop mockup placeholder
- Left column: Project details (Client, Date, Technologies), "Interested?" dark CTA card → /contact
- Right column: The Challenge, Our Solution (with feature bullets if available), The Result
- Bottom dark CTA: "Ready for your project?" / "Let's get started together. Send me an inquiry and receive a response within 12 hours." / "PROJEKT STARTEN" → /contact / "whyn agency — Web Design & Software Development — Available for new projects"

---

## PAGE 5: PRICING (app/pricing/page.tsx)

**Header:** "Pricing." / "Transparent pricing. Built for startups that want websites that convert."

**Toggle:** One-time project vs Monthly subscription

**Mode explanations:**

- One-time: "Project is paid upfront — you own it immediately."
- Monthly: "Subscribe monthly — incl. maintenance & updates. You own it after the term."

### Primary Plans (3-column)

1. **Landing Page** — badge "AFFORDABLE" — $900–$1,500 (one-time) / from $69/mo (12 months, incl. hosting) — Features: Single high-converting landing page, AI lead capture form, Fast load performance, Mobile optimized, Basic analytics
2. **Starter** ⭐ FEATURED — badge "MOST POPULAR" — $2,000–$3,500 / from $149/mo (18 months, incl. maintenance) — Features: Up to 5 pages, AI chat assistant integration, Conversion optimized layout, SEO foundation, Responsive design, GDPR compliant
3. **Standard** — $5,000–$8,000 / from $249/mo (24 months, incl. maintenance) — Features: Up to 10 pages, Advanced AI lead capture, Conversion analytics dashboard, Automated email flows, Performance optimization

### Enterprise Plans (2-column)

1. **Corporate** — $10,000–$18,000 / from $450/mo — Full marketing website, AI customer assistant, CRM integrations, Advanced analytics, Performance optimization, Priority support
2. **Enterprise** ⭐ FEATURED DARK — badge "PREMIUM" — $20,000+ / from $1,500/mo (24 months, VIP support) — Custom SaaS platform, AI automation systems, Advanced integrations, Dedicated architecture planning, Ongoing support & monitoring, Quarterly strategy reviews

**Bottom note:** Free initial consultation • Response guaranteed in 12h • Non-binding quote + "How we work" CTA

### Technology Section

Heading "Technology." / "The stack behind every whyn website."

- 6 tech cards (2×3 grid): Next.js (▲ Modern React Architecture), React (⚛ Interactive UI Components), TypeScript (TS Type-Safe Code), Tailwind CSS (🎨 Flexible Design System), Vercel (▼ Global CDN Performance), AI Integrations (🧠 Intelligent Automation)

### Pricing FAQ (Accordion, 5 items)

1. Can I switch plans later? → credit toward new plan
2. What payment options? → one-time, monthly, enterprise billing
3. Do you offer refunds? → 14-day satisfaction guarantee
4. What's in maintenance? → security updates, content changes (5/mo), monitoring, priority support
5. How long does a project take? → Landing pages 1-2 weeks, Starter 2-4 weeks, Standard/Corporate 4-8 weeks, Enterprise 8-16 weeks

**Bottom CTA:** "Need something custom?" / "Every business is unique. Let's discuss your specific needs and create a tailored solution." / "Get Custom Quote" → /contact

---

## PAGE 6: BLOG (app/blog/page.tsx)

**Header:** Badge "Blog & Insights" / "Ideas & Engineering" / "Insights on AI-powered websites, conversion optimization, and modern web development from the whyn.dev studio."

**Featured Post (large card):**

- "How AI-Powered Websites Are Changing Conversion Rates" | AI & Conversion | Mar 5, 2026 | 7 min read
- Excerpt: "Explore how machine learning models can predict user behavior and dynamically optimize website layouts for maximum conversion."

**Article Grid (3-column, 5 posts):**

1. "Why Next.js 15 Is the Future of Web Development" | Web Development | Feb 28, 2026 | 5 min
2. "Building AI Chat Assistants That Actually Convert" | AI Integration | Feb 20, 2026 | 6 min
3. "The ROI of Speed: Why PageSpeed Matters More Than You Think" | Performance | Feb 12, 2026 | 4 min
4. "Liquid Glass UI: The Future of Web Design Aesthetics" | Design | Feb 5, 2026 | 8 min
5. "AI Lead Capture: Automating Your Sales Pipeline" | AI & Sales | Jan 28, 2026 | 6 min

**CTA:** "Want insights delivered?" / "Stay updated with our latest thinking on AI, web performance, and conversion optimization." / "Get in Touch" → /contact

---

## PAGE 7: CONTACT (app/contact/page.tsx)

**Hero:** "Get in Touch" / "Let's discuss your project and create something extraordinary together."

**Contact Info Cards (3-column):**

1. 📧 Email — hello@whyn.dev — "We respond within 24 hours"
2. 📞 Phone — +49 1575 4405511 — "Available Mon-Fri, 10am-6pm"
3. 📍 Location — Bocholt, Germany — "Remote meetings available"

**Contact Form (centered, inside hover card):**

- Fields: Name\*, Email\*, Phone, Company, Message\* (textarea, 6 rows)
- Submit button: "Send Message" (CTA variant, full width)
- Success toast: "Thank you! We'll be in touch soon."
- Note: "We'll respond within 12 hours during business hours."

**Bottom CTA:** "Other ways to reach us" / "Whether you have a quick question or want to discuss a project, we're here to help." / Two buttons: "Send Email" (mailto:hello@whyn.dev) + "Call Now" (tel:+491575440551)

---

## PAGE 8: 404 / NOT FOUND (app/not-found.tsx)

- Large "404"
- "Page Not Found"
- "Sorry, we couldn't find the page you're looking for. It might have been moved or deleted."
- Two buttons: "Go Home" → / (CTA) + "Contact Us" → /contact (CTA-secondary)

---

## DESIGN SYSTEM NOTES FOR THE NEW TEMPLATE

1. **Color tokens** must support light/dark via CSS custom properties (see the oklch variable system above). The emerald accent (oklch 0.696 0.17 162.48) is used everywhere for CTAs, badges, gradients, and highlights.
2. **Card style:** Current design uses "glass-card" / "section-card" with rounded-3xl–rounded-[40px], subtle border, card background, and soft shadows. Adapt to the new template's card system.
3. **Animations:** Framer Motion for scroll-triggered reveals (fade-up, stagger children). Keep animations subtle and professional.
4. **Buttons:** shadcn/ui Button with CVA variants: default, destructive, outline, secondary, ghost, cta (shiny emerald gradient), cta-secondary (emerald border), glass, link, tab, tab-active.
5. **Typography:** Bold, large headings (text-5xl to text-8xl). Muted descriptions. Emerald gradient text for accent numbers.
6. **Responsive:** Mobile-first. Grid layouts collapse from 3→2→1 columns. Nav becomes hamburger sheet on mobile.

**Please implement all pages and sections listed above with the new design template's visual language, keeping every piece of text, data, link, and functionality exactly as described. If the new template has additional section types (e.g., a "logos" section, a "newsletter" section, a "team" section), add them using content that fits the whyn.dev brand.**
