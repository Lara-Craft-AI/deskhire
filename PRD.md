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

## MVP Scope (Tonight's Build)

### Landing Page (DONE — needs polish)
- [x] Hero section with value prop
- [x] Trust bar (insurance, accounting, real estate)
- [x] Value strip (cost, 24/7, custom)
- [x] Problem section ("You know AI can do this...")
- [x] Comparison table (Human vs AI Desk Hire)
- [x] Monthly improvement section
- [x] What's included (memory, tools, persona, support)
- [x] Security section (6 items)
- [x] Role cards (Admin, Content, Sales, Compliance, Ops, Custom)
- [x] Process steps (5 steps)
- [x] Three options comparison (DIY vs Generic vs DeskHire)
- [x] FAQ accordion
- [x] Footer
- [ ] Mobile hamburger menu
- [ ] Gradient text on hero headline
- [ ] Staggered reveal animations (smoother)
- [ ] Em dashes (— not " - ")
- [ ] Visual polish: subtle patterns, hover effects, card shadows

### Intake Form (DONE — needs backend fix)
- [x] Full Name, Email, Company Name, Website
- [x] Industry dropdown (Insurance, Accounting, Real Estate, Legal, Other)
- [x] Role to automate (textarea)
- [x] Current tools (input)
- [x] Hire type interest (checkboxes)
- [x] Additional notes
- [x] Submit button with loading/success/error states
- [ ] Backend: switch from filesystem to email notification (or Supabase)

### Intake API
- [ ] Replace filesystem write with email notification to mathis@zealy.io
- [ ] Or: store in Supabase if we set up a project
- [ ] Send Telegram notification to Mathis on new submission

### Deployment
- [x] Vercel project created and linked to GitHub
- [x] Auto-deploy on push to main
- [ ] Custom domain (deskhire.ai or similar — future)
- [ ] Verify production build works cleanly

## Out of Scope (Future)
- Stripe payment integration
- Client dashboard
- Automated agent provisioning
- Blog / content pages
- Analytics / tracking

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
