# Changelog

All notable changes to the Deep Nap project will be documented in this file.

## [2026-09-21]
### Added
- **Mattress Finder Quiz (Phase 6):**
  - Built a distraction-free, 5-step quiz wizard at `/quiz` with custom layout overrides (`ConditionalLayout`).
  - Implemented a heuristic scoring engine that analyzes sleeper profile, sleep position, health concerns, firmness preference, and size to rank all 13 catalog mattresses.
  - Designed interactive cards with Material Symbols, dynamic progress indicator, and smooth step navigation.
  - Added dynamic recommendations screen highlighting top 3 matches with match rationale and direct WhatsApp consultation handoff.
  - Added "Mattress Finder Quiz" navigation link in `Footer.tsx`.
- **Diwan Cots Vertical (Phase 5):**
  - Created `src/data/cots.ts` with mock furniture data and specifications.
  - Built `/diwan-cots` collection page with Finish and Storage filters.
  - Built `/diwan-cots/[slug]` detail page with image-based finish swatches and `CotConfigurator`.
  - Implemented the "Pairs Perfectly With" cross-selling engine that passes custom cot dimensions to the mattress configurator via URL params (`?prefillSize=LxW`).
- **Compare Feature (Phase 4):**
  - Upgraded `src/data/products.ts` with `buildTime` and `breathability` attributes.
  - Built the sliding "Compare Tray" on the `/mattresses` collection page for selecting up to 3 mattresses.
  - Built the sticky Comparison Matrix page at `/compare`.
- **Quote Checkout Flow (Phase 3):**
  - Built `/quote` page and interactive `QuoteForm` serving as the WhatsApp checkout flow.
  - Linked `ProductConfigurator` and `CustomSizeBuilder` CTAs to push data to the `/quote` URL.
- **Layout & Navigation:**
  - Added `ConditionalLayout` wrapper component to support conditional navigation layouts.
  - Connected navigation links in Header and Footer across all routes.

## [2026-09-19]
### Added
- **Quote Request Flow (Phase 3):**
  - Built `/quote` page serving as the WhatsApp-based checkout screen.
  - Linked `ProductConfigurator` and `CustomSizeBuilder` CTAs to push data to the `/quote` URL.
- **Mattress Detail & Custom Sizing (Phase 2):**
  - Built dynamic product pages (`/mattresses/[slug]`).
  - Created the robust `ProductConfigurator` component handling custom pricing formulas.
  - Created the standalone `/custom-size` bespoke request page.
  - Converted `/mattresses` into a Client Component to handle local React state for category filtering.
  - Resolved TypeScript strictness errors around `children` props in `WhatsAppButton`.

## [2026-09-18]
### Added
- **Foundation & Homepage (Phase 1):**
  - Initialized Next.js project with Tailwind CSS v4.
  - Configured design tokens, fonts (Plus Jakarta Sans, Inter), and core color palette.
  - Built reusable UI pieces: Navbar, Footer, Buttons.
  - Built the Homepage (`/`) with Hero, value propositions, and featured products grid.
