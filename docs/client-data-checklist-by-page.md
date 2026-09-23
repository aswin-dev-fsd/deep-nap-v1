# Client Data Checklist — By Page (Internal / Dev Reference)

**Purpose:** Same client-data gaps as [client-data-checklist.md](client-data-checklist.md), organized by where they live in the site instead of by data type, with file:line references for whoever wires the real data in once the client sends it. Don't send this file to the client — send the category version.

**Legend:** 🔴 Critical to launch · 🟡 Can follow later

---

## Sitewide (Header / Footer / every page)

- 🔴 **Logo** — `src/components/Header.tsx:34`, `src/components/Footer.tsx:16` — currently a lifestyle photo used as a logo
- 🔴 **Phone/WhatsApp number** (`+91 96008 89334`) — appears 33× across 19 files incl. `Header`, `Footer`, `UtilityBar.tsx:24-27`, `Buttons.tsx:55`, all forms — confirm this is correct
- 🔴 **Email address** — none exists anywhere in the codebase; add wherever the client wants it shown
- 🔴 **Physical address** — `Footer.tsx:33-35` — confirm exact wording
- 🔴 **Business hours** — `Footer.tsx:41` ("9am–10pm daily") — reconcile with different hours used in `book-consultation/page.tsx:182-184` and `visit/page.tsx:257-259`
- 🔴 **Google review rating/count** — `Footer.tsx:127` ("4.6★, 62 reviews") — reconcile with `ProductConfigurator.tsx:59` / `CotConfigurator.tsx:55` ("4.8★, 34 reviews")
- 🔴 **"Get directions" / "Review us on Google" links** — `Footer.tsx:46,129` — currently point to generic `google.com`/`maps.google.com`, need real Business Profile links
- 🔴 **GSTIN** — `Footer.tsx:134` — currently the dummy pattern `33AAAAA0000A1Z5`
- 🔴 **Registered legal entity name + copyright** — `Footer.tsx:135` — currently "© 2025 Deep Nap Mattress"
- 🟡 **Social media links** — none exist in `Header.tsx` / `Footer.tsx`
- 🟡 **Favicon** — `src/app/favicon.ico` — confirm branded
- 🟡 **Open Graph share image** — none configured in `src/app/layout.tsx`
- 🟡 **Leftover Next.js scaffold icons** — `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` — no client input, just cleanup

---

## Homepage (`/`)

- 🔴 **Hero image** — `src/components/homepage/Hero.tsx:62` — AI-generated placeholder
- 🔴 **Firmness/support cards, 3 images** — `src/components/homepage/SupportCards.tsx:37,71,102`
- 🔴 **"The range" 3 product cards** — `src/components/homepage/ProductRange.tsx:46,74,102` (images) and `:53,81,109` (product names — currently don't match any real catalog product, need real product selection + real images)
- 🔴 **Consultation banner photo** — `src/components/homepage/ConsultationBanner.tsx:14`
- 🔴 **Testimonials** — `src/components/homepage/Reviews.tsx:26-47` — 3 fabricated customer names/quotes, need real ones (with permission)
- 🔴 **EMI claim** — `src/components/homepage/WhatsIncluded.tsx:13` ("No-cost EMI available in store") — need real provider/terms or remove
- 🟡 **"Visit Us" map-background photo** — `src/components/homepage/VisitUs.tsx:72`
- 🟡 **No page-specific `<title>`/meta description** — homepage currently uses only root `layout.tsx` metadata

---

## Mattress Collection (`/mattresses`) & Product Detail (`/mattresses/[slug]`)

- 🔴 **13 product photos** — `src/data/products.ts` (`image` field, lines 40,59,78,99,118,140,159,180,199,218,239,258,277) — all point to shared `public/images/placeholder-mattress.jpg`
- 🔴 **Fake gallery** — `src/app/mattresses/[slug]/page.tsx:38-47` repeats the one placeholder image 4× as thumbnails; needs real multi-angle photos once real images exist
- 🔴 **13 base prices** (`priceFrom`) — `src/data/products.ts` lines 37,57,76,97,116,137,157,178,197,216,237,256,275
- 🔴 **Product catalog data** (names, materials, firmness, "best for" copy, build time, bestseller flags) — `src/data/products.ts`, all 13 entries — currently invented
- 🔴 **Warranty years per product** — inconsistent between `src/data/products.ts` (e.g. lines 35,55 show "20 years") and `src/data/warranties.ts:7` (shows 10 years for the same material) — needs one confirmed source of truth
- 🔴 **Custom-size pricing formula** — `src/actions/calculatePrice.ts:5,9` — currently `L × W × T × 0.76`, explicitly commented as a guessed formula
- 🔴 **Standard-size thickness upcharge** — `src/components/ProductConfigurator.tsx:24-36` — currently ₹1,200/inch, commented as a demo placeholder
- 🟡 **"Delivery & Installation Check" PIN box** — `src/app/mattresses/[slug]/page.tsx:69-77` — currently non-functional (no handler); needs real pincode/shipping logic once shipping rules are confirmed
- 🟡 **No page-specific SEO metadata**

---

## Diwan Cots Collection (`/diwan-cots`) & Product Detail (`/diwan-cots/[slug]`)

- 🔴 **5 cot photos** — `src/data/cots.ts` (`image` field, lines 32,47,63,78,93) — line 32 has a code comment "We reuse the placeholder for now"
- 🔴 **Fake gallery** — `src/app/diwan-cots/[slug]/page.tsx:38-47` — same repeated-placeholder pattern as mattresses
- 🔴 **5 base prices + installation charges** — `src/data/cots.ts` lines 28-30, 44-46, 59-61, 75-77, 90-92
- 🔴 **Cot catalog data** — `src/data/cots.ts`, all 5 entries — currently invented
- 🔴 **Custom cot pricing formula** — `src/components/CotConfigurator.tsx:14-22` — currently `(length × width × 10) / 100`, commented as "just a mock formula for the UI demo"
- 🟡 **"Delivery Access Check" accordion** — same non-functional shipping-check pattern as mattress PDP

---

## Compare Matrix (`/compare`)

- Consumes the same `products.ts` data — no additional fields, but real specs/images will flow through once product data is real.

---

## Custom Size Request (`/custom-size`) & Quote Checkout (`/quote`)

- No independent placeholder data beyond the shared pricing formulas and contact number listed above.

---

## Mattress Finder Quiz (`/quiz`)

- 🟡 **Scoring engine weights** — `src/app/quiz/page.tsx:66-106` — hand-tuned point values (`+3/+4/+5`, `-5`), commented "Basic scoring engine," not derived from any client sleep-science guidance. Ask client/domain expert to review the logic, especially why e.g. "back pain" scores +5 toward Orthopaedic but +4 toward firm Latex.
- 🟡 **Firmness scale thresholds inconsistency** — `src/components/homepage/FirmnessScale.tsx:7-13` (1-3/4-5/6-7/8/9-10) vs. `src/data/articles.ts:164-169` (1-3/4-6/7-8/9-10) — pick one taxonomy sitewide.

---

## B2B (`/b2b`)

- 🔴 **Hero background photo** — `src/app/b2b/page.tsx:12`
- 🔴 **Institutional client logos** — `src/app/b2b/page.tsx:155-164` — code comment explicitly flags these as placeholders ("The Residency", "PSG Hospitals", "KGISL Infrastructure", "Kumaraguru College") — need real, permissioned logos or removal
- 🔴 **Bulk pricing tiers** — `src/app/b2b/page.tsx:123` — only "10+ units" threshold exists, no tier/discount table
- 🟡 **Dedicated B2B contact** — `src/components/B2BForm.tsx:190` — copy claims "institutional sales lead" but reuses retail WhatsApp number

---

## Book Consultation (`/book-consultation`)

- 🔴 **Material sample photos (4)** — `src/app/book-consultation/page.tsx:272,277,282,287` — same placeholder image repeated
- 🔴 **Time slot hours** — `page.tsx:182-184` — reconcile with `visit/page.tsx:257-259` (see Sitewide section)

---

## Manufacturing (`/manufacturing`)

- 🔴 **Hero + 5 process-step + 5 raw-material photos (11 total)** — `src/app/manufacturing/page.tsx:15,51,58,79,86,107,130,144,158,172,187` — all currently the exact same one placeholder image
- 🔴 **Team section** — `page.tsx:206-256` — code comment "SECTION 4 - THE TEAM (Placeholders)" and literal text "Founder Name"/"Name" ×3, plus comment at line 223 "To client: Swap this placeholder with real founder image"
- 🟡 **"How it's made" process copy** — needs verification against actual production process
- 🟡 **"Sourced from trusted Kerala estates" claim** — `page.tsx:47` — name real supplier if desired
- 🟡 **"ISO 9001:2015 certified" claim** — `page.tsx:121` — needs certificate reference

---

## Visit Us (`/visit`)

- 🔴 **4 facility photos** — `src/app/visit/page.tsx:119,122,127,130` — currently unrelated Unsplash stock photos ("Shop Interior," "Materials Display," "Factory View," "Custom Beds")
- 🔴 **Google Maps pin** — `page.tsx:39` — generic lat/long + text query, not a verified business location
- 🔴 **Business hours** — `page.tsx:76` and time slots at `257-259` (see Sitewide)
- 🔴 **Review link** — `page.tsx:181,191-192` — same generic-link and rating-count issue as footer

---

## Sleep Guide (`/guide`, `/guide/[slug]`)

- 🟡 **5 article images** — `src/data/articles.ts:24,71,114,156,199` — same placeholder image reused for every article
- 🟡 **Article "recommended product" image** — `src/app/guide/[slug]/page.tsx:151`
- 🟡 **Firmness scale thresholds** — `articles.ts:164-169` — see Quiz section above for the inconsistency to resolve

---

## FAQ (`/faq`)

- 🟡 **All 13 answers** — `src/data/faq.ts` — verify against Terms/Returns pages for consistency, e.g. custom lead time at line 47 ("3 days"), return logistics fee at line 100

---

## Policies (`/terms`, `/privacy`, `/returns`, `/warranty`)

- 🔴 **Full legal review** of all four pages — currently AI-drafted, unreviewed text
- 🔴 **"Last updated" date** — `terms/page.tsx:16`, `privacy/page.tsx:16`, `returns/page.tsx:16` — all share the same placeholder date
- 🔴 **Specific terms to confirm**: 14-day quote validity, 10-20% advance token, 2-4 day delivery/7-day peak, 24-hour cancellation window, ±0.5" tolerance (`terms/page.tsx:26,35,40,46,51`); 3-day return window + unspecified logistics fee amount (`returns/page.tsx:26,31`)
- 🟡 **Warranty calculator** — `src/app/warranty/page.tsx:26-45` — logic is correct, just depends on the warranty-years data above being fixed

---

## Config / Integrations (not page-specific)

- No `.env` file exists at all — flag for a decision meeting, not just data collection:
  - 🟡 Analytics (GA/GTM/Meta Pixel) — none installed
  - 🟡 Payment gateway — none installed (site currently WhatsApp-quote-only by design; confirm intentional)
  - 🟡 WhatsApp Business API — currently just `wa.me` links, no API integration
  - 🟡 Google Maps API — currently a free embed, no API key configured
- 🟡 `robots.txt` / `sitemap.xml` — missing, no client input needed, just flagging as pre-launch technical work

---

*Generated from a full codebase audit on 2026-09-23. See [client-data-checklist.md](client-data-checklist.md) for the client-facing version organized by data category.*
