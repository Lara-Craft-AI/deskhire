# DeskHire — Execution Plan

## Status: IN PROGRESS

## Phase 1: Fix Critical Issues
- [ ] **1.1** Replace filesystem API route with email/log-based submission
  - Remove `data/intake-submissions.json` filesystem write
  - Log submission to console (Vercel serverless logs capture it)
  - Send email notification via Resend or simply POST to a webhook
  - Simplest: just console.log the submission (viewable in Vercel logs) + return success
- [ ] **1.2** Fix all " - " → "—" (em dashes) throughout copy
- [ ] **1.3** Verify `next build` passes cleanly

## Phase 2: Visual Polish
- [ ] **2.1** Add gradient text effect on hero headline ("Your next hire doesn't need a salary")
- [ ] **2.2** Mobile hamburger menu (hidden nav links on mobile → hamburger toggle)
- [ ] **2.3** Improve card hover effects (subtle lift + shadow)
- [ ] **2.4** Add subtle dot-grid or radial gradient background pattern to hero
- [ ] **2.5** Staggered fade-in animations on card grids (better delay timing)
- [ ] **2.6** Better spacing and typography review
- [ ] **2.7** Footer: add Privacy Policy / Terms placeholder links

## Phase 3: Deploy & Verify
- [ ] **3.1** Commit all changes to GitHub
- [ ] **3.2** Trigger Vercel deploy (auto on push)
- [ ] **3.3** Verify live site loads correctly
- [ ] **3.4** Test intake form submission on production
- [ ] **3.5** Test mobile responsiveness
- [ ] **3.6** Screenshot and review — rate quality

## Phase 4: Final Review Loop
- [ ] **4.1** If quality < 9/10, identify issues and loop back
- [ ] **4.2** Commit final polish
- [ ] **4.3** Confirm production deployment is clean

## Completion Criteria
- Site looks professional and minimalist (9/10+ quality)
- All sections render correctly on desktop and mobile
- Intake form submits successfully on Vercel
- No build errors or warnings
- Em dashes everywhere (no " - ")
- Mobile menu works
- Live on Vercel with auto-deploy from main
