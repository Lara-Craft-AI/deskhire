# DeskHire — Codex Task

You are working on the DeskHire landing page. Read PRD.md and PLAN.md for full context.

## YOUR TASKS (do ALL of these):

### 1. Fix API Route (CRITICAL — current one uses filesystem, breaks on Vercel)
Edit `src/app/api/intake/route.ts`:
- Remove all filesystem read/write logic
- Just console.log the submission (Vercel captures server logs)
- Return `{ ok: true }` on success
- Keep the validation for required fields
- Delete the `data/` directory if it exists

### 2. Fix Em Dashes
In `src/components/sections/landing-sections.tsx` and all other files:
- Replace ALL instances of ` - ` (space-dash-space used as em dash) with `—` (actual em dash)
- Replace ` -  ` (space-dash-double-space) with `—` as well
- Check ALL strings in the file

### 3. Add Mobile Hamburger Menu
In `src/components/sections/landing-sections.tsx`, update the `Header` component:
- Add a hamburger button visible only on mobile (md:hidden)
- When clicked, show/hide the nav links in a dropdown
- Use React useState for toggle
- Mark the Header component as "use client" or extract to a client component
- Keep it simple: just a menu icon button that toggles a mobile nav panel

### 4. Gradient Text on Hero
In `HeroSection`, add a gradient to the h1:
- Use a subtle blue-to-purple or blue-to-indigo gradient via Tailwind
- `bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent`
- Or similar — keep it professional, not flashy

### 5. Card Hover Effects
Add hover effects to all Card components:
- `hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`
- Apply to role cards, included cards, security cards, option cards

### 6. Subtle Background Pattern
Add a subtle dot-grid pattern to the hero section background:
- Use CSS radial-gradient dots or a subtle pattern
- Keep it very subtle (low opacity)

### 7. Footer Polish
- Add "Privacy Policy" and "Terms of Service" placeholder links
- These can just be `href="#"` for now

### 8. Build & Verify
After ALL changes:
- Run `npx next build` and make sure it passes with zero errors
- Fix any TypeScript or build errors

### 9. Git Commit
- `git add -A && git commit -m "Polish: mobile menu, gradients, em dashes, hover effects, API fix"`
- `git push origin main`

## IMPORTANT RULES:
- Keep light mode only
- Keep it minimalist and professional
- Target audience: insurance agents, accountants, real estate agents
- shadcn/ui components are already installed
- Do NOT add new dependencies unless absolutely necessary
- The Header needs to be a client component for the hamburger toggle state

When completely finished, run this command to notify me:
openclaw system event --text "Done: DeskHire polish complete — mobile menu, gradients, em dashes, hover effects, API fix all done. Pushed to GitHub." --mode now
