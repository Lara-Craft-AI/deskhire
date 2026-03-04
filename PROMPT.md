# DeskHire — Build Spec

Build a complete, production-ready marketing landing page for **DeskHire** — "Your AI Desk Hire."

## Tech Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Light mode only** — clean, minimalist, professional
- **Deployed on Vercel**

## Design Direction
- **Minimalist and beautiful** — lots of whitespace, clean typography
- **Light mode only** — white/light gray backgrounds, dark text
- **Professional but warm** — target audience is insurance agents, accountants, real estate agents
- **Inspired by:** Linear, Vercel, Stripe landing pages
- **Font:** Use Inter or system font stack
- **Colors:** Clean blues/indigos for accents, plenty of white space

## Target ICP
Insurance agents, accountants, and real estate agents who drown in repetitive desk work (data entry, follow-ups, scheduling, emails, compliance docs).

## Page Structure (Single Page)

### 1. Hero Section
**Headline:** "Your next hire doesn't need a salary."
**Subheadline:** "We build you a managed AI employee. It works 24/7, costs 90% less than a human, and gets better every single month — because we keep training it."
**Sub-sub:** "Not a chatbot. Not a template. A custom-built digital worker that knows your business, uses your tools, and does the actual job — while our team monitors, tunes, and improves it behind the scenes."
**CTA buttons:** "Free Consult" (primary) and "$2,000 setup · $500/mo · no contract" (secondary/muted)

### 2. Problem Section
**Heading:** "You know AI can do this work. So why hasn't it?"
**Body:** "Because there's a brutal gap between 'AI can handle follow-ups' and actually having an AI that handles your follow-ups — in your voice, connected to your CRM, every single day without you touching it.

Getting there means configuring prompts, wiring up APIs, building memory systems, setting up servers, debugging at 2 AM when something breaks, and iterating for weeks until the output is actually good.

Most people start, get 60% of the way there, and give up.

We do all of it. The whole 100%.

You tell us what the role is. We build the entire system, deploy it, and then — here's the part nobody else does — we keep improving it every month."

### 3. Comparison Table
**Heading:** "The math is absurd"
**Subheading:** "A real comparison. No asterisks."

Create a beautiful, clean comparison table/grid (NOT a traditional HTML table — use cards or a modern layout):

| | Human Employee | Your AI Desk Hire |
|---|---|---|
| Annual cost | $50,000 - $150,000 | $8,000/yr + API usage |
| Hours per week | 40 (minus PTO, sick days, meetings) | 168. Every week. Forever. |
| Ramp-up | 2-4 weeks of onboarding | 48 hours |
| 2 AM coverage | Not a chance | Already working |
| Consistency | Monday energy ≠ Friday energy | Identical quality, every time |
| Gets sick | Yes | No |
| Needs managing | Yes | Minimal — we handle most of it |
| Scale to 2x | Hire another person | Costs $0 extra |
| You own everything | They quit, tribal knowledge leaves | Every file, every config, forever |

### 4. Monthly Improvement Section
**Heading:** "The part that makes this unfair"
**Body:** "A normal AI setup is frozen in time. You configure it once, it does that thing, and it never gets better unless you put in more work.

Your DeskHire has a team behind it. Every month, we actively improve your system. Not just 'keep it running' — genuinely make it better. New techniques we discover, better prompting strategies, smarter memory architectures, workflow optimizations from managing AI employees across dozens of clients.

Your AI employee is getting better every month whether you do anything or not."

### 5. What's Included Section
**Heading:** "What you get that a vanilla AI setup doesn't"

Cards/grid with icons:

- **🧠 Memory that sticks** — "Most AI setups constantly forget things. We've figured out the memory architecture that makes it stick — your hire remembers clients, cases, preferences, and how you operate."
- **🔧 Pre-installed tool stack** — "Email, calendar, CRM integration, document generation — ready to go. We add domain-specific tools during your build."
- **👤 Custom persona & voice** — "Every hire gets a tailored personality, communication style, and decision-making framework. It speaks like your brand."
- **🤝 Expert support** — "Your hire is backed by our team of AI specialists. When it hits something it can't solve, we handle it directly."

### 6. Security Section
**Heading:** "Built secure from day one"
Clean grid of security features:
- 🔒 Isolated infrastructure — dedicated server per client
- 🔐 Encrypted everything — at rest and in transit
- 🛡️ Managed firewalls — locked down to only needed services
- 💾 Automated backups — daily with point-in-time recovery
- 🔑 Permission-scoped access — least-privilege, audited
- 📡 24/7 monitoring — we fix it before you notice

### 7. Role Types Section
**Heading:** "Who do you want to hire?"

Cards for each role type:

- **📬 Admin Hire** — "Replace your office admin. Email triage, scheduling, client follow-ups, data entry. The desk work that eats 20 hours a week."
- **✍️ Content Hire** — "Replace your content writer. Blog posts, social media, newsletters, marketing emails. Publishes while you sleep."
- **📈 Sales Hire** — "Replace your SDR. Lead follow-up within minutes, personalized outreach, CRM updates, meeting booking."
- **📋 Compliance Hire** — "Replace your compliance clerk. Document prep, filing deadlines, regulatory updates, audit trail maintenance."
- **🧾 Ops Hire** — "Replace your operations manager. Invoicing, vendor follow-ups, internal handoffs, reporting."
- **🧠 Custom Hire** — "Replace... whoever. Tell us the role. If a human does it on a computer, we can probably build a hire for it."

### 8. Process/Timeline Section
**Heading:** "From intake to employee in days"

Numbered steps (vertical timeline or horizontal steps):

1. **Tell us the role** — "Free consult — fill out the intake form. What does the person do today? What tools do they use? What does 'good' look like?"
2. **We scope your hire** — "We map your workflows, identify what to automate first, and send you a build plan within 48 hours."
3. **We build it** — "$2,000 setup. We configure the AI, install skills, connect your tools, test everything, and deploy."
4. **You start using it** — "Your hire goes live. You talk to it like a teammate. It does the work."
5. **We keep making it better** — "$500/mo. We monitor, fix issues, and push improvements from everything we learn across every client."

### 9. Three Options Section
**Heading:** "Three ways to run AI. Only one you actually want."

Three columns/cards:

**Option 1: DIY**
- ✓ Full control
- ✗ You configure everything
- ✗ You debug every issue
- ✗ It never improves unless you improve it
- "Great if you're technical and have unlimited time."

**Option 2: Generic "Managed AI"**
- ✓ Someone else runs the server
- ✗ Generic config, not built for your business
- ✗ "Maintenance" = keeps the lights on
- ✗ No one is actively making it better
- "A server with training wheels."

**Option 3: DeskHire** (highlighted/featured)
- ✓ Custom-built for your exact workflows
- ✓ We handle setup, hosting, and maintenance
- ✓ We actively improve it every month
- ✓ Production-quality from day one
- "You get the employee. We do everything else."

### 10. Intake / Contact Form
**Heading:** "Start here — Free Consult"
**Subheading:** "Tell us about the role and we'll follow up within 24 hours."

Form fields:
- Full Name (required)
- Email (required)
- Company Name (required)
- Company Website (optional)
- Industry (dropdown: Insurance, Accounting, Real Estate, Legal, Other)
- "What role do you want to automate?" (textarea, with placeholder: "Example: Replace a junior admin who manages my inbox, schedules appointments, and follows up with leads.")
- "What tools do you currently use?" (text input, placeholder: "Gmail, Salesforce, QuickBooks, etc.")
- Hire Type Interest (multi-select checkboxes): Admin, Content, Sales, Compliance, Ops, Custom
- "Anything else we should know?" (optional textarea)
- Submit button: "Get Your Free Consult"
- Below button: "No payment required. We'll email you within 24 hours."

**For now, form submissions should be stored in a simple JSON file or logged to console. We'll add a real backend later.**

### 11. FAQ Section
**Heading:** "Questions"

Accordion/collapsible FAQ:

- **How is this different from just using ChatGPT?** — "Same difference as having a word processor vs having a secretary. ChatGPT is a tool you use. Your DeskHire is a worker that uses tools — connected to your email, your CRM, your calendar, doing actual work autonomously."
- **Is the consult really free?** — "Yes. We review your workflows, ask discovery questions, and send you a concrete scope plan — no charge, no commitment."
- **What do I need to provide?** — "Answers to our intake questions, access to the tools you want automated (email, CRM, etc.), and about 30 minutes for the initial scope call. We handle everything else."
- **How fast can my hire be live?** — "Most go live within one week of scope approval. Some within 48 hours."
- **What does the $500/mo cover?** — "Hosting, monitoring, bug fixes, skill updates, and active improvement. We don't just keep the lights on — we make your hire better every month."
- **Can I cancel?** — "Month-to-month. No contract. If you leave, we hand over every file, every config, every piece of the system. Zero lock-in."
- **Is my data safe?** — "Your hire runs on isolated infrastructure. Nothing is shared between clients. You own your data, your configs, and your system."

### 12. Footer
- DeskHire logo/name
- "Your AI Desk Hire."
- Copyright 2026
- Link to contact email

## Important Notes
- NO dark mode toggle. Light mode only.
- Make it responsive — looks great on mobile.
- Use shadcn/ui components for the form, accordion, buttons, cards.
- Use smooth scroll for navigation.
- Add a simple sticky header with logo + "Free Consult" CTA button.
- The page should feel premium and trustworthy — these are professional services buyers.
- Use subtle animations (fade in on scroll) if easy to add.
- NO placeholder images — use clean layouts, typography, and whitespace instead.
- Initialize with: npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
- Then add shadcn: npx shadcn@latest init
- Install needed shadcn components: npx shadcn@latest add button card accordion input textarea label select checkbox

## After Building
- Run `npm run build` to verify no errors
- Commit all files to git
- Push to origin/main
