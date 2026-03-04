# DeskHire — Product Requirements Document

## One-liner
"Your next hire doesn't need a salary." — Managed AI employees for insurance agents, accountants, and real estate teams.

## Target ICP
- Insurance agents (independent or small agency)
- Accountants / CPAs (solo or small firm)
- Real estate agents / brokers

These people drown in desk work: follow-ups, scheduling, data entry, compliance paperwork, client emails. They want automation but can't build it themselves.

## Copycat Reference
[Clawsourcing by The Masinov Company](https://www.shopclawmart.com/clawsourcing#intake)

## Mono-feature
**Managed AI employee as a service.** We build, deploy, and continuously improve a custom AI worker for your business. $2,000 setup + $500/mo.

## MVP Scope

### Landing Page
- [x] Hero section with value prop + gradient text
- [x] Trust bar (insurance, accounting, real estate)
- [x] Value strip (cost, 24/7, custom)
- [x] Problem section ("You know AI can do this...")
- [x] Comparison table (Human vs AI Desk Hire)
- [x] Monthly improvement section
- [x] What's included (memory, tools, persona, support) — with hover effects
- [x] Security section (6 items)
- [x] Role cards (Admin, Content, Sales, Compliance, Ops, Custom)
- [x] Process steps (5 steps)
- [x] Three options comparison (DIY vs Generic vs DeskHire)
- [x] FAQ accordion
- [x] Footer with Privacy/Terms links
- [x] Mobile hamburger menu
- [x] Gradient text on hero headline
- [x] Staggered reveal animations
- [x] Em dashes throughout
- [x] Dot grid background pattern on hero
- [ ] Hover effects on Role cards (lift + shadow like Included cards)
- [ ] Hover effects on Security cards
- [ ] Hover effects on Process step cards
- [ ] Hover effects on Options comparison cards
- [ ] Remove unused `src/components/sections/header.tsx` (duplicate of Header in landing-sections.tsx)

### Intake Form
- [x] Full Name, Email, Company Name, Website
- [x] Industry dropdown (Insurance, Accounting, Real Estate, Legal, Other)
- [x] Role to automate (textarea)
- [x] Current tools (input)
- [x] Hire type interest (checkboxes)
- [x] Additional notes
- [x] Submit button with loading/success/error states

### Intake API
- [x] Telegram notification on new submission
- [ ] Set TELEGRAM_BOT_TOKEN and TELEGRAM_NOTIFY_CHAT_ID as Vercel env vars
- [ ] Test that form submission actually sends Telegram notification in production

### Deployment
- [x] Vercel project created and linked to GitHub
- [x] Auto-deploy on push to main
- [x] Build passes cleanly
- [ ] Verify production form submission works end-to-end

### Visual Polish (Final Pass)
- [ ] Screenshot desktop + mobile, rate each section
- [ ] Ensure consistent card styling across all sections
- [ ] Check font sizes, spacing, and alignment on mobile
- [ ] Verify all animations are smooth (no jank)

## Out of Scope (Future)
- Stripe payment integration
- Client dashboard
- Automated agent provisioning
- Blog / content pages
- Analytics / tracking
- Custom domain

## Tech Stack
- Next.js 14 (App Router)
- Tailwind CSS + shadcn/ui
- Vercel (hosting + serverless)
- GitHub (Lara-Craft-AI/deskhire)

## Design Guidelines
- Light mode only
- Minimalist, clean, professional
- Must feel trustworthy to insurance/accounting/real estate professionals
- No flashy tech vibes — more "premium service" than "startup"
- Mobile-first responsive
