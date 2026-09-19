# Deep Nap — Website Design Prompt Pack

**Version 1 · 6 September 2026**
Page-by-page prompts for design and build. Each page has a self-contained prompt block you can paste into a design tool, hand to a designer, or work from directly.

---

## Part 0 — How to use this

1. **Paste Part 1 (Brand Foundations) at the top of every page prompt.** The page prompts assume it. Without it you will get generic output.
2. Page prompts are in fenced blocks. Everything outside the blocks is context for you, not for the tool.
3. Build in this order: Homepage → Product page → Custom size builder → Collection → everything else. Those four settle every component the rest of the site reuses.

### Colours are estimated — please confirm

The hex values in Part 1 are sampled from the photograph of the stitched label. A photo of navy fabric under warm light reads darker and less saturated than the real brand colour, so these are close but not exact. **Send me the vector logo or the brand hex codes and I will correct the whole pack in one pass.** Same for the typeface — I've described the letterforms and given a free web-safe match, but the actual font name from whoever built the logo would be better.

### What I've assumed

- Site is **enquiry-first**. No cart, no payment gateway, no checkout. Every route ends in a quote request, a WhatsApp message, or a call. This is from his form answers, and it is the single biggest structural decision in the build.
- **English primary, Tamil secondary**, with a toggle.
- Mattresses and diwan cots only. Accessories are planned within a year, so the navigation leaves room.

---

## Part 1 — Brand foundations

Paste this block above every page prompt.

```
BRAND FOUNDATIONS — DEEP NAP MATTRESS

Deep Nap is a mattress manufacturer in Coimbatore, Tamil Nadu. Founded 2021.
They make every mattress to order in their own unit — no ready stock. 18 standard
sizes, 6 thicknesses, 13 mattress types, plus true custom sizes. Warranty up to
20 years. 4.6 stars from 62 Google reviews.

POSITIONING
Premium, modern, friendly, honest. Targeting buyers who will not haggle. They are
NOT the cheapest and must never look like a discount brand. The feeling is a
confident, well-run manufacturer — not an artisan workshop, and not a clinical
medical supplier. Warm, but precise.

Three brand words: Comfortable. Premium. Honest.

COLOUR (estimated from the physical label — confirm before final build)
  Navy      #142C47   primary. Backgrounds, headers, footers, primary buttons
  Navy deep #0E1F33   darker panels, footer
  Cream     #EFE5D7   primary surface and reversed text on navy
  Cream lt  #F8F4ED   page background alternative to white
  Gold      #DCA544   accent ONLY. Sparkle, ratings, small highlights, key numbers
  Gold soft #F3E3C2   gold tint backgrounds
  Ink       #1A2230   body text on light backgrounds
  Slate     #5E6B7A   secondary text
  Hairline  #DFD8CC   borders and dividers on cream
  White     #FFFFFF

Gold is a jewel, not a house paint. It should never cover more than about 5% of
any screen. No gold gradients, no gold buttons larger than a chip, no gold text
at body size.

NEVER USE PINK. This is an explicit client restriction.

TYPOGRAPHY
Display: a heavy geometric sans with rounded terminals and a single-storey 'a',
matching the logo wordmark. Use Poppins SemiBold/Bold as the web substitute until
the real font is confirmed. Tight letterspacing, generous line height.
Body/UI: a clean neutral sans — Inter — at 400/500/600.
Tamil: Mukta Malar or Noto Sans Tamil, always set one step smaller than the
English it sits beneath.

Headlines are sentence case, never all caps. The only all-caps in the system is
the word MATTRESS in the logo lockup and small overline labels, both letterspaced.

SHAPE AND SPACING
Generous. 8px base grid. Cards and inputs at 10-12px radius, buttons at 8px,
pill shapes only for filter chips and the WhatsApp button. Borders are 1px
hairlines, not shadows. Use at most one soft shadow per screen, on the sticky
enquiry bar.

PHOTOGRAPHY DIRECTION (shoot not yet done — use placeholders that match)
Three kinds, in this ratio: 50% real bedrooms in real Coimbatore homes, warm
daylight, lived-in but tidy; 30% macro detail of materials — latex, coir, quilting
stitch, fabric weave; 20% the unit and the team actually building mattresses.
No stock photos of white bedrooms with grey throws. No models posing asleep.

TONE OF VOICE
Plain, warm, specific. Short sentences. Talk about what things are made of and
how long they take. Never use "luxury", "ultimate", "revolutionary", "sleep like
never before". Never use exclamation marks. Prices are written "Rs 24,600".

COMMERCE MODEL — READ CAREFULLY
There is NO cart and NO online payment. Every product path ends in one of:
  1. "Get a quote" — a short form that captures the configuration
  2. "Ask on WhatsApp" — opens WhatsApp with the configuration prefilled
  3. "Call" — tap to dial
Prices shown on the site are INDICATIVE and always labelled "confirmed on quote".
Payment is cash on delivery. Build time is 4-6 days. Delivery is 2-4 days across
Tamil Nadu. Custom-size orders are non-returnable and this must be stated plainly
wherever a custom size is configured.

WHAT THIS SITE MUST NEVER DO
- No MRP strike-through pricing, no "70% OFF" badges, no countdown timers
- No fake urgency, no "only 3 left" (everything is made to order anyway)
- No sleep-trial claims — they do not offer one
- No certifications other than ISO — they hold no BIS, CertiPUR or OEKO-TEX
- No stock photography of Western bedrooms
- No cart icon anywhere
```

---

## Part 2 — Global components

Design these once. Every page prompt refers back to them.

```
GLOBAL COMPONENTS — DEEP NAP

UTILITY BAR (desktop only, 36px, navy #142C47)
Left: "Made to order in our own unit · delivered across Tamil Nadu"
Right: language toggle "English / தமிழ்", then phone "96008 89334"
Text is cream at 70% opacity, 13px.

HEADER (sticky, cream #EFE5D7 background, 1px hairline bottom)
Left: Deep Nap logo lockup, navy on cream version, 40px tall.
Centre: Mattresses · Diwan cots · Custom size · Bulk orders · Visit us
Right: a pill "WhatsApp" button in navy outline with a small gold dot, and a
solid navy "Get a quote" button.
On scroll the header compresses to 64px and the logo reduces to the symbol only.

MOBILE HEADER (64px)
Logo left, WhatsApp icon and hamburger right. Drawer slides from the right with
the full nav, the language toggle, the phone number and the shop address. Nav
items are 56px tall — this is a phone-first audience and taps must be forgiving.

STICKY ENQUIRY BAR (mobile, all product and configurator pages)
Fixed to the bottom, 72px, cream with a soft shadow. Left: the current
configuration in two lines — product name, then size and thickness, then
indicative price in navy. Right: a navy "Get a quote" button and a WhatsApp icon
button. This bar is the primary conversion surface on mobile.

WHATSAPP BEHAVIOUR (site-wide)
Half of this business already closes over WhatsApp. Treat it as a first-class
path, not a floating bubble in the corner.
Every WhatsApp link opens with a prefilled message containing whatever the user
was looking at. Example:
  "Hi Deep Nap, I'm interested in the Natural Latex mattress, 78x72, 6 inch.
   Indicative price Rs 24,600. Could you confirm?"
A floating WhatsApp button appears on mobile only, above the sticky bar, 52px,
navy circle with a cream icon.

TRUST STRIP (reusable, sits under the hero on most pages)
Four items, cream background, hairline top and bottom, small gold tick icons:
  ISO certified materials · Warranty up to 20 years · Made in our own unit ·
  2-4 day delivery across Tamil Nadu

FOOTER (navy #0E1F33, cream text)
Four columns: logo + address + hours + "Get directions"; Shop (mattress types,
diwan cots, custom size); Help (FAQ, warranty, returns, care guide, bulk orders);
Talk to us (WhatsApp, phone, book a consultation, visit the store).
Below: an embedded map strip showing the Chinniyampalayam location.
Bottom bar: "4.6 stars from 62 Google reviews" with small gold stars, and the
Google review link. Then legal links and GSTIN.

BUTTONS
Primary: navy fill, cream text, 8px radius, 48px tall desktop / 52px mobile
Secondary: navy 1.5px outline, navy text, transparent fill
WhatsApp: navy outline pill with a gold dot
Never a gold-filled button. Gold is for accents only.

FORM FIELDS
Cream-white fill, 1px hairline border, 10px radius, 52px tall, label above the
field in slate 13px. Focus state is a 2px navy ring. Error state is a warm red
border with the message below in 13px. Phone number field defaults to +91.
```

---

## Part 3 — Page prompts

### 1. Homepage

The most important decision here: he rated *technical detail and firmness information*, *shop address and map*, and *the WhatsApp button* as must-haves, and *the story of the shop* and *prices shown immediately* as only nice-to-have. The page is ordered to his ratings, not to convention.

```
PAGE: HOMEPAGE — DEEP NAP

GOAL: convince a Coimbatore buyer that this is a serious manufacturer, get them
into a configured enquiry or a WhatsApp conversation. Mobile is the primary
viewport — design that first.

SECTION 1 — HERO (full width, cream #EFE5D7 background)
Left column, 55% width:
  Overline in gold caps, letterspaced, 12px: "MADE TO ORDER IN COIMBATORE"
  Headline, display face, 52px desktop / 34px mobile, navy, two lines:
    "Firmness you can
     actually measure."
  Subhead, Inter 17px slate, two lines: every mattress built to order in our own
  unit, rated on a 10-point firmness scale, made in any size.
  A live firmness scale component: a horizontal track, navy fill to 70%, a navy
  knob, "Soft" and "Firm" labels at the ends, and a floating label above the knob
  reading "7 · medium firm" in navy.
  Two buttons side by side: primary "Get a quote", secondary "Book a store visit".
  Below, in 13px slate: "No online payment. Tell us the size, we quote, then we
  build it."

Right column, 45%: a product card floating on the cream, white fill, hairline
border, 12px radius, gentle lift.
  Product name in display face. One line of material description.
  A small gold-tinted chip: "Best seller".
  Large product photograph — mattress at a three-quarter angle, warm daylight.
  A four-up spec row: Firmness 7/10 · Thickness 4-12 in · Warranty 20 years ·
  Sizes 18 + custom.
  Hairline divider, then "Enquire for price" in navy display face and a text link
  "Compare" in navy.

DO NOT put a price in the hero. Prices are nice-to-have for this client and
leading with them undermines the premium positioning.

SECTION 2 — TRUST STRIP
The reusable four-item strip from Global Components.

SECTION 3 — FIND THE RIGHT SUPPORT (white background)
Heading in display face: "Find the right support"
Subhead: answer four questions about how you sleep, we shortlist from 13 types.
A navy "Start the quiz" button on the right of the heading row.
Below, three firmness cards — Soft (3-4), Medium firm (6-7), Firm (8-9). Each has
a 4px top rule (gold on the middle card, hairline on the others), the firmness
range in gold, who it suits, which materials, and a small product image.
The middle card is subtly raised — it is the most common choice.

SECTION 4 — CUSTOM SIZE BAND (gold-soft #F3E3C2 background, full width)
Heading: "Tell us the size. We build it."
Subhead: a quarter to half of what we make is a non-standard size. No surcharge,
no waiting for stock.
An inline mini-configurator: three number inputs — Length, Width, Thickness —
each with an "in" suffix. As values change, an indicative price updates live in
display face at 30px navy. A navy "Send this enquiry" button on the right.
Below in 13px: "Indicative. Confirmed on quote. Custom sizes are non-returnable."

This band is the single most differentiating element on the site. Give it room.

SECTION 5 — THE RANGE (white)
Heading "The range", subhead "13 mattress types, 18 standard sizes, six
thicknesses."
A row of filter pills: All types · Latex · Pocket spring · Orthopaedic · Memory
foam · Coir. First is active (navy fill).
Three product cards below. Each card: image panel on a warm off-white, product
name, one-line material description, hairline divider, then two spec rows
(Firmness, Warranty) right-aligned, and an "Enquire" text link in navy.
No prices on cards. No "Add to cart" anywhere.

SECTION 6 — BUILT AROUND HOW YOU SLEEP (cream background, asymmetric)
Left 45%: a large rounded photograph of a real bedroom, warm light.
Right 55%: display headline "Built around how you actually sleep."
Body: book a 15-minute video call. We ask about your bed, your back and how you
sleep, then specify the mattress around it.
Then a second line offering the home visit: an advisor can bring samples to your
house anywhere in Coimbatore.
Navy button: "Book a consultation".

SECTION 7 — REVIEWS (white)
A row of five small gold stars, then "4.6 from 62 Google reviews" in display face.
Three short review quotes in a row, each with a first name and a Coimbatore
neighbourhood. Keep them one line each. Link to the Google listing.

SECTION 8 — BULK AND B2B (navy #142C47, full bleed)
Cream display headline: "Supplying hotels, hostels, hospitals and builders"
Subhead in cream at 70%: bulk pricing, consistent specification, delivery
anywhere in Tamil Nadu.
A cream outline button: "Request bulk pricing".
This is a quarter of their revenue. It does not belong in the footer.

SECTION 9 — WHAT'S INCLUDED (gold-soft band, 64px)
Three items with small gold dots: Free pillows with every mattress · No-cost EMI
available in store · Bulk discounts on 10+ units.
Understated. This is not a promotions banner.

SECTION 10 — VISIT US (cream)
Split: left is the address, opening hours, phone, and a "Get directions" link.
Right is an embedded map. Below the map, a navy button "Book a store visit".
He rated this a must-have — it is a real section, not a footer line.

SECTION 11 — FOOTER
Global footer component.

MOBILE NOTES
Single column throughout. The hero product card sits below the hero text. The
custom size band stacks its three inputs two-up with thickness full width. The
firmness cards become a horizontal snap-scroll carousel. The sticky enquiry bar
does not appear on the homepage — only the floating WhatsApp button.
```

---

### 2. Mattress collection page

```
PAGE: MATTRESS COLLECTION — DEEP NAP

GOAL: let someone narrow 13 types across 18 sizes and 6 thicknesses down to two
or three candidates without feeling like they are reading a spreadsheet.

HEADER AREA (cream)
Breadcrumb in 13px slate. H1 in display face: "Mattresses". One line of subhead
giving the honest scope: every mattress made to order, in any of 18 standard
sizes or yours.

FILTER BAR (sticky below the header on scroll)
Desktop: a horizontal row of filter groups — Type, Firmness, Thickness, Size,
Price. Each opens a small dropdown panel. Active filters appear as removable
navy chips below the bar, with a "Clear all" text link.
Firmness filter is a range slider on the 10-point scale, not checkboxes — it is
the brand's signature device and should appear everywhere.
Mobile: a single "Filter" button that opens a full-screen sheet, plus a "Sort"
button. The sheet has a sticky "Show 14 mattresses" button at the bottom.

RESULT GRID
3-up desktop, 2-up tablet, 1-up mobile. Cards are generous — this is a
considered purchase, not a catalogue.
Each card:
  Image panel, warm off-white background, product photo at an angle
  A small gold chip top-left only where it is true — "Best seller" or "Best for
  back pain". No promotional badges.
  Product name in display face, 19px navy
  One line of material description in slate
  Hairline divider
  A compact firmness scale — a small track with a filled portion and a numeral
  Two spec rows: Thickness range, Warranty
  Footer row: "From Rs X,XXX" in navy with "indicative" in 11px slate beneath,
  and an "Enquire" link
  On hover: a second photograph crossfades in, and a "Compare" checkbox appears
  top-right

COMPARE TRAY
When one or more Compare boxes are ticked, a tray slides up from the bottom
showing thumbnails and a navy "Compare 2 mattresses" button. Maximum three.

EMPTY STATE
If filters return nothing: a friendly navy illustration, "Nothing matches that
combination", and two buttons — "Clear filters" and "Ask us on WhatsApp". The
second is important: with a made-to-order business, the answer is almost always
"yes we can make that", so a dead end should become a conversation.

BOTTOM OF PAGE
The custom size band, repeated from the homepage. Anyone who filtered and did not
find their size should land on it.
```

---

### 3. Product detail page

He asked for *detailed — full specifications, layers, materials, care instructions*. This page should be long and unafraid of detail.

```
PAGE: PRODUCT DETAIL — DEEP NAP

GOAL: answer every question a buyer has, then move them into a configured quote
or a WhatsApp conversation. There is no Add to Cart on this page.

SECTION 1 — GALLERY AND CONFIGURATOR (two columns, cream background)

LEFT — Gallery, sticky on scroll
Main image in a warm off-white panel, 4:3. Four thumbnails below. At least one
thumbnail is a cutaway or macro of the internal layers, and one is the mattress
in a real bedroom.

RIGHT — Configurator
  Breadcrumb, then product name in display face 34px navy
  One-line material summary
  Star row in gold, "4.6 · 62 reviews", linking to the Google listing
  FIRMNESS: the 10-point scale component, with a numeral and the word
  ("7 · medium firm"). Label it "Firmness" above.
  SIZE: a grid of size chips — the common four, then a "Custom" chip that is
  visually distinct with a small gold dot. Below the chips, a text link
  "See all 18 sizes" that opens a panel.
  Selecting "Custom" swaps the chip grid for three dimension inputs inline.
  THICKNESS: six chips — 4" 5" 6" 8" 10" 12".
  PRICE PANEL: a cream-tinted panel, hairline border. Small label "Indicative
  price for this configuration", then the price in display face 28px navy, and
  to the right in 13px slate "Confirmed on quote".
  ACTIONS: a navy "Get a quote" button and a WhatsApp outline button side by side.
  BELOW ACTIONS, in 13px slate, three facts: Cash on delivery · Built in 4-6 days ·
  Free pillows included.
  If Custom is selected, add a fourth line in a gold-soft tint box: "Custom sizes
  are made only for you and cannot be returned."

SECTION 2 — DELIVERY CHECK (full width, cream, hairline top and bottom)
A single-row component: a PIN code input, a "Check" button, and on submit a
result line — "Delivered to 641062 in 2-3 days after build. Installed by our own
team." If outside Tamil Nadu, show a WhatsApp prompt instead.

SECTION 3 — DELIVERY ACCESS (collapsed accordion, opens on click)
Heading: "Will it fit through your door?"
Four short questions with number inputs or yes/no: main door width, staircase
width, service lift available, which floor. A note that they install for an
additional charge and this helps them bring the right team.
This prevents failed deliveries on a large made-to-order item and it justifies
the installation fee rather than hiding it.

SECTION 4 — WHAT IT IS MADE OF (white)
A layered diagram of the mattress cross-section, drawn not photographed, with
each layer labelled and a short paragraph beside it. Comfort layer, support core,
cover. Use the brand navy and cream with gold callout lines.
Below, three macro photographs with captions naming the material and where it
comes from.

SECTION 5 — FULL SPECIFICATION (white)
A two-column table, alternating row tint, 10-14 rows:
Comfort layer · Support core · Cover · Firmness · Available thickness · Standard
sizes · Custom sizes · Warranty · Build time · Breathability · Care · Certification
Be honest: certification says ISO only.

SECTION 6 — WHAT CUSTOMERS ASK US MOST (cream band, accordion)
Build this from the questions he says people actually ask:
  Does this mattress trap heat?
  Will it help with back, body or neck pain?
  How is a custom size priced?
  How soft is it really?
  What happens if it sags?
  Can I see it being made?
Each answer is three or four plain sentences. No marketing language.

SECTION 7 — COMPARE (white)
"Not sure between two?" with a small two-up selector and a navy "Compare" button.

SECTION 8 — REVIEWS
Google rating summary in gold, then four or five reviews. If there are few
written reviews, show fewer rather than padding.

SECTION 9 — RELATED
Three cards, same component as the collection page. Heading: "Others also
considered".

STICKY MOBILE BAR
Appears after the user scrolls past the configurator. Shows product name, the
chosen size and thickness, indicative price, and the two action buttons.
```

---

### 4. Custom size builder

```
PAGE: CUSTOM SIZE BUILDER — DEEP NAP

GOAL: turn "my bed is an odd size" into a priced, submitted enquiry in under two
minutes. This is the page that wins against Wakefit and Sleepwell.

LAYOUT: a single centred column, max 820px, on cream. Calm and uncluttered —
this is a form, not a shop.

STEP 0 — INTRO
Display headline: "Tell us the size. We build it."
Two lines: most Indian beds are built by carpenters, so standard sizes rarely
fit. We make yours to the inch, with no surcharge.

STEP 1 — MEASURE
A clear illustrated diagram of a bed frame with length, width and thickness
arrows, drawn in navy and gold on cream. Beside it, three short measuring tips.
Include: measure the inside of the frame, not the outside.

STEP 2 — YOUR DIMENSIONS
Three large number inputs in a row: Length, Width, Thickness. Unit toggle for
inches and centimetres — Centuary and Sleepwell both accept cm and buyers with
carpenter-built beds often have cm.
Live validation against what they can actually make. If a dimension is out of
range, show a helpful line rather than an error: "That's larger than our usual
maximum — send it on WhatsApp and we'll confirm."

STEP 3 — CHOOSE THE MATTRESS
A vertical list of mattress types, each a selectable row: name, one line of
description, the firmness numeral, and a small image. Selected row gets a navy
2px border and a gold dot.

STEP 4 — FIRMNESS
The 10-point scale as an interactive slider. As it moves, a line of text below
updates describing who that firmness suits.

STEP 5 — YOUR PRICE
A prominent cream panel: the configuration summarised in one line, then the
indicative price in display face 36px navy. Beneath it, in slate: how the price
was calculated — per size slab, materials, thickness.
Then the honesty block in a gold-soft tint box:
  "This is indicative. We confirm on quote.
   Built in 4-6 days, delivered in 2-4.
   Custom sizes are made only for you and cannot be returned."

STEP 6 — SEND IT
Two large buttons: "Send this enquiry" (navy) and "Send on WhatsApp" (outline).
The WhatsApp option prefills the full configuration as text.
A short form under the first button: name, phone, pincode, and an optional note.
Nothing else. Do not ask for an email.

MOBILE
Steps stack. The price panel becomes sticky at the bottom once dimensions are
entered, so the number is always visible while they change options.
```

---

### 5. Mattress finder quiz

```
PAGE: MATTRESS FINDER QUIZ — DEEP NAP

GOAL: guide someone who does not know what they want to two or three candidates,
and capture a lead. Four or five questions maximum — his own brief said four.

FORMAT: full-screen, one question at a time, cream background, no site header
beyond a small logo and a close X. A thin navy progress bar at the top.

QUESTION DESIGN
Each question is a display-face heading and 2-4 large tappable cards with a
simple line illustration in navy and gold, a short label, and a one-line
description. Cards are at least 120px tall — this is a phone audience.

THE QUESTIONS
1. Who is it for? (One person / Two people / A child / A guest room or hostel)
2. How do you usually sleep? (Side / Back / Front / It changes)
3. Any of these? (Back pain / Neck or shoulder pain / You sleep hot / None)
   — multi-select, these are his customers' actual stated concerns
4. How firm do you like it? (Soft / Medium / Firm / Not sure)
5. Do you know your size? (Standard size picker / A custom size / Not sure yet)

BEHAVIOUR
Selecting an answer advances automatically after a short beat. A back arrow
bottom-left. No "next" button except on the multi-select.

RESULT SCREEN
Display headline: "Three that would suit you"
Then up to three product cards with a short reason each: "Because you sleep on
your side and run hot" in gold-tinted text above the card.
Below the cards, two actions: "Get a quote on these" and "Talk it through on
WhatsApp".
Then a soft lead capture: "Want this sent to you?" with a phone number field and
a Send button. Optional, skippable, never a blocking wall.

If they chose "Not sure yet" on size, the result screen ends with a prompt to
book the 15-minute video call instead.
```

---

### 6. Compare page

```
PAGE: COMPARE — DEEP NAP

GOAL: settle a two- or three-way decision with specifications, honestly.

LAYOUT: a sticky comparison table, full width, white.

HEADER ROW (sticky on scroll)
Each column: product image, name in display face, a small "Remove" X, and an
"Enquire" button. A "+ Add another" empty column if fewer than three.

ROWS (label column on the left, sticky horizontally on mobile)
Firmness — render as the actual scale component in each cell, not a number
Material / comfort layer
Support core
Available thicknesses
Standard sizes
Custom size available
Warranty
Build time
Breathability
Best for — a short phrase
Indicative price from

BEHAVIOUR
Rows where all values are identical are dimmed and collapsed under a "Show
identical rows" toggle — this is what makes a comparison table actually useful.
Differences are what the buyer came for.

MOBILE
Two columns maximum, horizontally scrollable, with the label column pinned left.
A sticky bottom bar with "Enquire about both" and a WhatsApp button.
```

---

### 7. Quote request and confirmation

```
PAGE: QUOTE REQUEST — DEEP NAP

GOAL: capture a configured enquiry with the least possible friction. This is the
site's checkout equivalent and it must feel as considered as one.

LAYOUT: two columns on desktop, cream background. Single column mobile.

LEFT — THE FORM
Display headline: "Get your quote"
One line: we'll confirm the price and the build date, usually within an hour
during shop hours.

Fields, in this order and no more:
  Name
  Phone (defaults +91, this is the important one)
  Pincode
  How would you like us to reply? — three chips: WhatsApp / Call / Either
  Anything we should know? (optional textarea)

Then a navy submit button "Send enquiry", full width.
Below it, a secondary path: "Prefer to just message us?" with a WhatsApp button.

Do not ask for an email address. Do not ask for a full address at this stage.
Do not create an account.

RIGHT — THE SUMMARY PANEL (sticky)
A cream card with a hairline border showing exactly what they configured:
  Product image thumbnail and name
  Size, thickness, firmness
  Indicative price in display face
  "Confirmed on quote" in slate
  Hairline divider
  Build time 4-6 days · Delivery 2-4 days · Cash on delivery
  If custom: the non-returnable note in a gold-soft box
An "Edit" text link returns them to the configurator with state preserved.

CONFIRMATION SCREEN
Not a thin "thank you" page. Show:
  A navy tick in a gold-soft circle
  Display headline: "We've got it."
  "We'll message you on WhatsApp within the hour. Shop hours are 9am to 10pm,
  every day."
  A summary card repeating the configuration, with a "Save this" or share option
  A direct WhatsApp button — "Message us now instead" — for impatient buyers
  Then three things to do while waiting: see how we make it (link to the
  manufacturing page), book a store visit, read the care guide
  The shop address and map at the bottom
```

---

### 8. Diwan cots

They sell only diwan cots, made to order, ₹15,000–25,000, in teak, rubber wood, sheesham, ply-laminate and MDF, installed for an extra charge.

```
PAGE: DIWAN COTS — DEEP NAP

GOAL: sell the one furniture line they actually make, without pretending to be a
furniture store.

Structure mirrors the mattress collection and product pages, with these changes:

COLLECTION HEADER
H1 "Diwan cots". Honest subhead: we make diwan cots to order in five finishes.
Everything is built for your size and installed by our team.

FILTERS
Finish (Teak / Rubber wood / Sheesham / Ply and laminate / MDF), Size, Storage
(yes/no), Price. No firmness filter here.

PRODUCT PAGE DIFFERENCES
- Finish selector shown as material swatches — actual photographs of the wood
  grain, not colour blocks
- A "Pairs with" module suggesting the right mattress size for the cot chosen,
  linking through to the mattress configurator with size prefilled. This is the
  single best cross-sell on the site and it should be prominent.
- Installation is explained as a benefit with its charge stated plainly, not
  buried: "Assembled at your home by our team. Rs X extra."
- The delivery access accordion is more important here than on mattresses.
  Surface it expanded by default.
- Lead time is longer than a mattress — state it clearly.
```

---

### 9. Bulk and B2B

A quarter of revenue. He ticked hotels, hostels, hospitals, builders, interior designers, furniture dealers and schools.

```
PAGE: BULK AND B2B — DEEP NAP

GOAL: make an institutional buyer confident enough to send a requirement. The
tone here is more corporate than the rest of the site.

SECTION 1 — HERO (navy full bleed, cream text)
Display headline: "Mattresses for hotels, hostels, hospitals and sites."
Subhead: consistent specification, repeatable quality, delivery anywhere in
Tamil Nadu. Made in our own unit, so we control the batch.
Cream outline button: "Send your requirement".

SECTION 2 — WHO WE SUPPLY
Seven cards with simple navy line icons: Hotels and resorts · Hostels and PG ·
Hospitals and nursing homes · Builders and apartment projects · Interior designers
and architects · Furniture dealers · Schools and colleges.
Each card has one line about what that segment typically needs.

SECTION 3 — WHY BUY FROM A MANUFACTURER
Three columns: no middleman markup · same specification every batch · you can
inspect the unit before you commit.
This last point is their strongest B2B argument and no national brand can match
it locally.

SECTION 4 — WHAT WE NEED FROM YOU
A short explainer of the quote process, then the requirement form:
  Organisation name
  Contact person and phone
  Type of buyer (dropdown of the seven segments)
  Quantity
  Sizes required (free text, they will have a schedule)
  Thickness and material preference
  Delivery location and pincode
  Target date
  Upload a specification or BOQ (optional file field)
Navy submit: "Send requirement". Secondary WhatsApp button.

SECTION 5 — TERMS FOR BULK
Plainly stated: bulk discounts on 10+ units, GST invoice with your GSTIN,
staged delivery available, warranty applies per unit.

SECTION 6 — PROOF
Logos or names of institutions supplied, if he is willing to share them. If not,
a photograph of a bulk order being loaded and a short line about the largest
order handled.
```

---

### 10. Book a consultation

```
PAGE: BOOK A CONSULTATION — DEEP NAP

GOAL: convert the undecided into a scheduled conversation. Three routes, one
page. This page substitutes for the sleep trial they do not offer.

SECTION 1 — HERO (cream)
Display headline: "Talk to someone who actually makes them."
One line of subhead about specifying a mattress around how you sleep.

SECTION 2 — THREE WAYS, as three equal cards
CARD A — 15-minute video call
  Icon, heading, description: we ask about your bed, your back and how you sleep,
  then specify the mattress around it. Free, no obligation.
CARD B — Home visit (Coimbatore only)
  We bring material samples to your house so you can feel the difference before
  we build anything.
CARD C — Visit the unit
  Come and see your mattress being made. Open until 10pm, every day.
Each card has its own navy button.

SECTION 3 — BOOKING FORM (appears below once a card is chosen)
  Name, phone, preferred day, preferred time slot (morning / afternoon / evening),
  and for the home visit, an address and pincode field.
  A note that they will confirm on WhatsApp.

SECTION 4 — WHAT TO EXPECT
Four numbered steps in a horizontal row explaining what happens after booking.
Sets expectations and reduces no-shows.

SECTION 5 — SAMPLE PHOTOGRAPHY
A row of macro material photographs — latex, coir, foam, fabric — with names.
Gives the home visit something concrete to be about.
```

---

### 11. Our manufacturing

He rated the shop story only *nice to have*, so this page exists for the people who want it rather than being pushed on everyone. But *"customers can see the manufacturing"* is his strongest premium claim, so the page must be good.

```
PAGE: OUR MANUFACTURING — DEEP NAP

GOAL: prove they actually make it. This is the page that converts sceptics and
B2B buyers.

SECTION 1 — HERO
A wide photograph of the unit, real and unstaged. Overlaid display headline:
"Come and watch us make it."
Subhead: our unit is in Chinniyampalayam. It is open to customers. Most people
who visit buy.

SECTION 2 — THE PROCESS
Five or six steps down the page, alternating image left and right. Each step has
a number in gold, a display-face heading, a short paragraph, and a photograph of
that stage actually happening. Materials in, cutting, layering, quilting and
stitching, finishing, quality check.
Keep the copy factual. Name the materials and the machines.

SECTION 3 — WHAT WE USE
Material cards: rubberised coir, natural latex, HR foam, memory foam, pocket
springs. Each with a macro photograph, where it is sourced, and what it does.
State the ISO certification here, accurately, and nothing more.

SECTION 4 — THE TEAM
Photographs of real people with first names and what they do. He said he is happy
to appear, so include him.

SECTION 5 — WHY MADE TO ORDER
A short honest explanation of why they hold no stock: every mattress is built
after you order, so nothing sits in a warehouse compressing, and any size is the
same price to make.

SECTION 6 — VISIT US
Address, hours, map, and a "Book a visit" button.
```

---

### 12. Visit the store

```
PAGE: VISIT THE STORE — DEEP NAP

GOAL: get them through the door. He rated address, map and phone a must-have.

Full-width map at the top, then a two-column layout:
LEFT — Address in full, opening hours (open until 10pm, every day), phone as a
tap-to-call link, WhatsApp button, and a "Get directions" button that opens Google
Maps.
RIGHT — Three or four photographs of the shop and unit interior.

Below:
- "What you can do here" — four items: feel every material, watch your mattress
  being made, get measured for a custom size, collect the same day for stock sizes
- Landmarks and directions in plain language for people navigating Irugur Road
- Parking information
- The Google reviews block with the 4.6 rating and a link
- A "Book a store visit" form: name, phone, preferred day and time
```

---

### 13. Warranty registration

He currently handles warranty claims by manual phone calls. This turns that into a record.

```
PAGE: WARRANTY REGISTRATION — DEEP NAP

GOAL: register a purchase so a future claim is simple, and build a customer list.

A single centred column, max 640px, cream.
Display headline: "Register your warranty"
One line: register once and we'll have your details when you need us. Warranties
run from 2 to 20 years depending on the product.

FORM
  Name
  Phone
  Invoice number (with a small "where do I find this?" link showing a sample bill)
  Purchase date (date picker)
  Product (dropdown)
  Size and thickness
  Upload a photo of the bill (optional)
Navy submit button.

CONFIRMATION
A navy tick, "Registered", the warranty end date calculated and shown prominently
in display face, and a line about how to claim — call or WhatsApp, and they
collect and inspect.

BELOW THE FORM
"What the warranty covers" as a short honest list, and what it does not. Sagging
thresholds, fabric, stitching, misuse. Plain language, no legal density.
```

---

### 14. Sleep guide (blog)

```
PAGE: SLEEP GUIDE — DEEP NAP

INDEX PAGE
Cream background. Display H1 "Sleep guide". One line: practical answers from
people who make mattresses for a living.
A featured article card at the top, full width, image left and text right.
Below, a three-up grid of article cards: image, category chip in gold-soft, title
in display face, two-line excerpt, read time.
Categories: Choosing a mattress · Back and neck pain · Sizes and measuring ·
Care and cleaning · Materials explained

ARTICLE PAGE
Single column, max 720px, generous 19px body type, 1.7 line height.
Title in display face 40px. Byline and date. Hero image.
Pull quotes set in display face at 26px navy with a gold left rule.
Inline diagrams rather than stock photos wherever a concept needs explaining.
A sticky "Ask us on WhatsApp" chip on mobile.
At the end: a product recommendation block relevant to the article, then two
related articles.

First articles to write, taken from his customers' real questions:
  Why some mattresses feel hot, and what to do about it
  How to measure a carpenter-built bed for a custom mattress
  Coir, foam or latex: what actually suits Coimbatore's climate
  What firmness means, and why a number helps
  Mattress care in a humid climate
```

---

### 15. FAQ and policy pages

```
PAGES: FAQ AND POLICIES — DEEP NAP

FAQ PAGE
Cream. Display H1. A sticky left sidebar with category jump links on desktop.
Categories: Ordering and quotes · Custom sizes · Delivery and installation ·
Payment · Warranty · Returns · Care · Bulk orders
Accordion rows, one question per row, answers three to five plain sentences.
Search field at the top.
End the page with "Still not sure?" and three buttons: WhatsApp, call, book a
consultation.

POLICY PAGES (Returns, Warranty, Privacy, Terms)
Single column, max 720px, white, plain 17px body type with clear H2 sections and
a last-updated date.
Write them in plain English, then Tamil. Do not use a template with clauses that
do not apply — this business has no online payment, no shipping partner returns,
and no subscription.

Returns must state clearly:
  Standard-size mattresses can be returned if undamaged
  Custom-size mattresses are made only for you and cannot be returned
  There is no sleep trial
```

---

### 16. Search, empty states and 404

```
PAGES: SEARCH AND EDGE CASES — DEEP NAP

SEARCH RESULTS
Search opens as a full-screen overlay on mobile, a dropdown panel on desktop.
As the user types, show three groups: Mattresses, Diwan cots, Guides.
Each result row is image, name, one line, firmness numeral.
Below results, always: "Can't find your size? We make custom." with a link to the
builder.

NO RESULTS
Never a dead end. Show: "We didn't find that — but we make almost anything to
order." Then a WhatsApp button and a link to the custom builder.

404 PAGE
Navy background, cream type. A simple line drawing of a mattress with one corner
folded. Display headline: "This page isn't here."
Three links back: Mattresses, Custom size, Talk to us.
Keep the shop phone number visible.

LOADING STATES
Skeleton blocks in cream tint, never spinners. Configurator price updates should
fade rather than flicker.

OFFLINE / SLOW CONNECTION
This audience is often on mobile data. Images must be lazy-loaded and served in
modern formats, the firmness component must work without JavaScript having fully
loaded, and the WhatsApp and call links must be plain anchors that work
regardless.
```

---

## Part 4 — Things that will make this look wrong

A checklist to review every page against.

1. A cart icon, a wishlist heart in the header, or the phrase "Add to cart"
2. Strike-through MRP pricing or percentage-off badges
3. Gold used as a large fill instead of an accent
4. Pink, in any tint, anywhere
5. All-caps headlines
6. Stock photography of Western bedrooms with grey throws
7. Claiming BIS, CertiPUR or OEKO-TEX certification — they hold ISO only
8. Any mention of a sleep trial or a 100-night guarantee
9. A price shown without "indicative" or "confirmed on quote" beside it
10. A custom-size flow that does not state the non-returnable condition
11. Email-first contact forms — phone and WhatsApp come first for this audience
12. Tamil text set at the same size as English, or in a font without proper Tamil support
13. Tap targets under 48px
14. The founding year or any heritage claim — the business started in December 2021

---

## Part 5 — What I need from you

**Blocking:**
1. **Exact brand hex codes and the vector logo.** Everything in Part 1 is sampled from a photograph of the stitched label, which under warm light reads darker than the true colour. I have navy at roughly `#142C47`, cream at `#EFE5D7` and gold at `#DCA544`, but I would rather use the real values than guess.
2. **The display typeface name.** The wordmark is a heavy geometric sans with rounded terminals and a single-storey 'a'. I have specced Poppins as a stand-in. If the original has a web licence, we should use it.

**Would improve the pack:**
3. The size slab pricing table — the configurator prompts describe live pricing but the maths behind it is still unseen.
4. Whether the ₹4,000 entry range appears online or stays in-store.
5. The installation charge figure, so it can be stated plainly rather than as "Rs X".
6. Whether he'll share B2B client names for the bulk page.

---

*Prompt pack v1. Every product detail, price band, size, warranty figure and policy in these prompts is drawn from the client's own discovery responses. Colour and typography are estimated from the logo photograph and marked as such.*
