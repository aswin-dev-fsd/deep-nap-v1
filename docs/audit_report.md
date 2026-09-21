# Audit & Production Readiness Report

*Date: September 21, 2026*

This report compares the current state of the `deep_nap_v1` Next.js application against the foundational requirements outlined in `docs/deepnap-website-prompt-pack.md`.

---

## 1. Compliance with "Part 4: Things that will make this look wrong" (The Strict Constraints)

| Rule | Status | Notes |
|---|---|---|
| **1. No cart icon or "Add to cart"** | ✅ PASS | Exclusively uses "Get a Quote" and WhatsApp paths. |
| **2. No MRP strike-through / fake sales** | ✅ PASS | Clean pricing. No discount logic built. |
| **3. Gold as an accent only** | ✅ PASS | Restricted to small UI dots, icons, and reasoning text. |
| **4. NEVER USE PINK** | ✅ PASS | Tailwinds config strictly uses Navy, Sand, Ink. |
| **5. Headlines are sentence case** | ✅ PASS | Followed across all generated pages. |
| **6. No western stock photography** | ⚠️ FAIL | We are currently using a generic Google placeholder image url for *every* product and swatch. |
| **7. ISO certification only** | ✅ PASS | No fake CertiPUR/OEKO-TEX badges used. |
| **8. No sleep trial claims** | ✅ PASS | Absent. |
| **9. Prices labelled "indicative / confirmed on quote"** | ✅ PASS | Implemented aggressively in the Configurator and Quote summary. |
| **10. Custom-size non-returnable warning** | ✅ PASS | Displayed conditionally when custom sizing is active. |
| **11. Phone-first contact, no emails** | ✅ PASS | Quote and Quiz capture only Phone, Name, Pincode. |
| **12. Tamil text support & toggle** | ❌ FAIL | The Utility Bar lacks the required "English / தமிழ்" toggle, and we have no localization architecture (i18n) installed. |
| **13. Large tap targets (48px+)** | ✅ PASS | Form inputs and buttons are appropriately sized. |

---

## 2. Page Completion Status

| Page / Feature | Status | Notes |
|---|---|---|
| **1. Homepage** | ✅ Built | Complete. |
| **2. Mattress Collection** | ✅ Built | With category filtering and Compare Tray. |
| **3. Product Detail** | ✅ Built | With Configurator, Custom Sizes, Delivery PIN Check. |
| **4. Custom Size Builder** | ✅ Built | Standalone custom dimension lead-gen. |
| **5. Mattress Finder Quiz** | ✅ Built | State-machine based wizard with WhatsApp handoff. |
| **6. Compare Page** | ✅ Built | URL-hydrated sticky comparison matrix. |
| **7. Quote Request** | ✅ Built | WhatsApp-based checkout flow. |
| **8. Diwan Cots** | ✅ Built | With cross-sell module to mattresses. |
| **9. Bulk and B2B** | ❌ Missing | Not yet built. |
| **10. Book a Consultation** | ❌ Missing | Not yet built. |
| **11. Our Manufacturing** | ❌ Missing | Not yet built. |
| **12. Visit the Store** | ❌ Missing | Not yet built. |
| **13. Warranty Registration** | ❌ Missing | Not yet built. |
| **14. Sleep Guide (Blog)** | ❌ Missing | Not yet built. |
| **15. FAQ and Policies** | ❌ Missing | Not yet built. |
| **16. Search Overlay & Custom 404** | ❌ Missing | We lack the global search overlay and custom 404 page ("This page isn't here" mattress drawing). |

---

## 3. Production Readiness Gaps

If we were to deploy this application to Vercel/Netlify *today*, it would fail a production standard for the following reasons:

### A. Data Layer (The "Mock" Problem)
Our products (`src/data/products.ts`) and cots (`src/data/cots.ts`) are currently hardcoded JSON structures utilizing identical placeholder images and mock descriptions. We are also missing the **true mathematical pricing formulas** (the prompt mentions this in Part 5: "The size slab pricing table... is still unseen"). 
- *Recommendation:* We either need the client to provide the exact pricing math to hardcode, or we need to integrate a lightweight headless CMS (e.g., Sanity.io) so the client can manage these prices and upload the real photography of their Coimbatore unit.

### B. Internationalization (i18n)
The prompt explicitly dictates "English primary, Tamil secondary, with a toggle". 
- *Recommendation:* We need to install `next-intl` or a similar localization package, extract all hardcoded strings into JSON dictionaries, and wire up the Utility Bar toggle.

### C. Search Engine Optimization (SEO)
While we have a fast App Router foundation, we are missing:
- Dynamic `<title>` and OpenGraph image tags for product pages.
- A `sitemap.xml` and `robots.txt`.
- Schema.org structured data (Product, LocalBusiness).

### D. Form Validation & Resilience
The quote form captures leads, but it lacks rigorous validation.
- *Recommendation:* Integrate `zod` and `react-hook-form` to ensure phone numbers always validate properly (+91 logic) and Pincodes are exactly 6 digits before allowing submission.

### E. JavaScript Degradation
The prompt mentions: "the firmness component must work without JavaScript having fully loaded". Because our `ProductConfigurator` relies heavily on React State (`"use client"`), if a user on a weak 3G connection in Tamil Nadu clicks a mattress before JS executes, the configurator won't work.
- *Recommendation:* Ensure loading skeletons are robust, or move some configuration state to URL parameters (like we did with Compare) so the server can render it natively.

---
*End of Report*
