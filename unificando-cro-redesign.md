# Unificando CRO & Design Redesign

## Goal
Transform the main landing page components (Hero and CTA) into high-conversion, brutalist-inspired machines focused strictly on generating direct WhatsApp leads, abandoning the safe "SaaS" template aesthetic.

## Tasks
- [x] Task 1: Update `src/constants/cta.ts` to point the primary CTA directly to WhatsApp (number: +55 81 99555-7302) instead of the Contact page, ensuring maximum conversion speed. → Verify: `CTA.primary.to` is a `wa.me` link.
- [x] Task 2: Refactor `src/features/home/components/HeroSection.tsx` to an asymmetric (60/40) layout. Remove safe indigo colors, apply high-contrast (Charcoal/Onyx background with neon/signal accents), and add immediate social proof and micro-animations to the primary CTA. Hide or minimize the secondary CTA. → Verify: Visual inspection confirms loss of "SaaS cliché" and clear focus on WA CTA.
- [x] Task 3: Refactor `src/features/home/components/CtaSection.tsx` to match the new aggressive visual identity. Use a single, massive, pulsing CTA targeting WhatsApp. → Verify: Component renders with sharp geometry and single focus.

## Done When
- [x] The Hero Section no longer looks like a standard centralized SaaS template.
- [x] All primary CTAs point directly to a dynamic WhatsApp conversation.
- [x] Code passes linting (`npm run lint`).
- [x] The final audit script passes with no major visual/CRO errors.
