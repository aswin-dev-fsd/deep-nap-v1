# Deep Nap - Project Status & Features Built

This document tracks all completed features, components, and pages built in the `deep_nap_v1` Next.js codebase.

## 1. Core Architecture
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4, custom design tokens matching the brand (Primary/Navy, Sand, Ink).
- **Fonts:** Plus Jakarta Sans (Headings), Inter (Body).
- **Data Models:** Mock databases created for `products.ts` (13 mattresses) and `cots.ts` (5 furniture pieces).

## 2. Reusable Components
- **Header & Navigation:** Responsive navbar with mobile drawer, top utility bar. Links correctly route to collection and feature pages.
- **Footer:** Brand-aligned footer with working shop deep-links and contact information.
- **ConditionalLayout:** Layout wrapper providing flexible header/footer injection and route-based conditional wrappers.
- **Buttons:** Custom `PrimaryButton` and `WhatsAppButton` implementations.
- **ProductConfigurator:** Complex client-side pricing calculator for mattresses. Handles custom dimensions (LxW), standard sizes, and thickness permutations.
- **CotConfigurator:** Furniture-specific variant selector handling wood finishes (image swatches), storage options, and installation fees.
- **QuoteForm:** Structured form capturing customized specifications and forwarding formatted order inquiries via WhatsApp.
- **CustomSizeBuilder:** Reusable form to generate leads for bespoke dimensions.

## 3. Completed Pages & Flows

### Homepage (`/`)
- Hero section, trust badges, featured product carousel, and a "Design your own size" call-to-action.

### Mattress Collection (`/mattresses`)
- Dynamic grid displaying 13 products.
- Client-side category filtering (Latex, Pocket Spring, Ortho, Memory Foam, Coir).
- **Compare Tray:** Users can tick checkboxes on cards to spawn a sticky bottom tray holding up to 3 selected mattresses.

### Mattress Product Detail (`/mattresses/[slug]`)
- Dynamic routes displaying gallery, specifications, and the interactive `ProductConfigurator`.
- "Delivery & Installation Check" PIN code verifier.
- "What's inside" component visualizing comfort and core layers.

### Diwan Cots Collection (`/diwan-cots`)
- Grid displaying 5 furniture variants.
- Client-side filters for Finish type and a "Has Storage" toggle.

### Diwan Cot Product Detail (`/diwan-cots/[slug]`)
- Features the `CotConfigurator` with wood grain swatches.
- **Cross-Sell Engine ("Pairs Perfectly With"):** Suggests a complementary mattress and passes the currently selected cot dimensions via URL (`?prefillSize=LxW`) so the mattress configurator opens with those dimensions pre-filled.
- Rigid furniture "Delivery Access Check" accordion (expanded by default).

### Custom Size Request (`/custom-size`)
- Full-screen bespoke dimension request page for odd sizes not covered by standard products.

### Specifications Compare (`/compare`)
- Dedicated matrix page comparing up to 3 mattresses side-by-side.
- State is managed statelessly via URL params (e.g. `?m=slug1,slug2`).
- Sticky headers (top) and sticky row labels (left, for mobile scrolling).

### Quote Checkout Flow (`/quote`)
- A highly optimized lead capture form functioning as the "checkout" screen.
- Hydrates selected product configurations directly from the URL.
- On submit, formats all details into a clean string and opens a pre-filled WhatsApp conversation with the brand. No backend database required.

### Mattress Finder Quiz (`/quiz`)
- **Layout Override:** Uses `ConditionalLayout.tsx` to strip out the global Header and Footer, providing a distraction-free, full-screen wizard experience.
- **State Machine:** Client-side React state tracking 5 steps (Who is it for, Sleep Position, Concerns, Firmness, Size).
- **Interactive UI:** Large tappable cards utilizing Material Symbols for iconography and visual feedback on selection.
- **Recommendation Engine:** A heuristic scoring algorithm that reads the user's answers and assigns weighted points to all 13 mattresses in the `products.ts` database (e.g. 'Back pain' boosts Ortho models, 'Sleep hot' boosts Latex/Coir).
- **Results Screen:** Dynamically generates text explaining *why* a mattress was chosen, displays the top 3 matches, and features a CTA that formats all preferences and recommendations into a pre-filled WhatsApp lead-capture message.

---
*Document last updated: September 21, 2026*
