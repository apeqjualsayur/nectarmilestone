# Nectar Milestone — Landing Page Spec

Source of truth for the public marketing landing page. Structure adapted from the
reference design at `_specs/reference/landing-reference.png`; all visual and content
choices follow the official Brand Guideline in `_brand`. Keep this file updated if
direction changes.

**Status:** Pre-launch. **Location:** Setiawangsa, Kuala Lumpur.
**Parent brand:** Go Health Solutions.
**Stack:** Next.js (TypeScript, App Router) + Tailwind, deploy on Vercel.

---

## 1. Brand system (from the Brand Guideline — authoritative)

### Colours

| Token         | Hex       | Role |
|---------------|-----------|------|
| `honey-gold`  | `#E49C38` | **Primary.** Highlight word, primary CTA, accents. RGB 228,156,56 · HSL 35°,76%,56% |
| `dusty-olive` | `#95A688` | **Secondary.** Calm section grounds, secondary buttons, wordmark on light. RGB 149,166,136 · HSL 94°,14%,59% |
| `deep-gold`   | `#D59A4D` | Supporting gold — deeper fields, hover states, gradients with honey-gold |
| `soft-white`  | `#F7F6F4` | Page background / light neutral (the guideline's page ground) |
| `white`       | `#FFFFFF` | Card surfaces, reversed text on colour |

- Both primaries ship with a **10%–100% tint scale** in the guideline — use tints for
  soft fills, hovers, and section washes rather than inventing new colours.
- **Body text:** the guideline doesn't fix a body-text hex. For WCAG AA on `soft-white`,
  set body copy in a warm dark neutral (implementation choice, e.g. `#2E2A24`). Do **not**
  set body copy in dusty-olive on white — it fails contrast.

### Typography

| Level    | Typeface           | Use |
|----------|--------------------|-----|
| Headline | **Fredoka Bold**   | All headings, hero, section titles |
| Body     | **Pliant Regular** | Body copy, paragraphs, captions |
| Highlight| **Pliant SemiBold**| Emphasis / lead-ins within body |

**Web implementation note (important):**
- **Fredoka** is on Google Fonts — load via `next/font/google` (weight 700 for headings).
- **Pliant** is a commercial typeface (not on Google Fonts). Either license a webfont and
  self-host via `next/font/local`, or, until licensed, fall back to a close humanist sans
  (Inter or Mulish) in the font stack. Flag any page still on the fallback in the
  placeholder register so it's swapped before launch.

### Logo & marks

- **Primary logo:** hexagon icon (a child's profile silhouette inside a honey-gold
  rounded hexagon) + "Nectar Milestone" wordmark. Wordmark is dusty-olive on light
  grounds, white on colour grounds.
- **Icon / favicon / app icon:** the hexagon-with-silhouette symbol alone.
- Respect clear space; never stretch, recolour, shadow, or rotate the logo.

### Motif system

- **Honeycomb pattern:** seamless tessellation of the hexagon-silhouette cell. Two
  colourways — honey-gold ground and dusty-olive ground. Use as side panels, section
  edges, and texture (as in the guideline's stationery and billboard).
- **Super graphic:** an enlarged, translucent version of the profile-in-hexagon
  silhouette, layered behind or beside content — the signature hero/section device.
- Hexagon cells can be arranged as an ascending sequence to suggest progress/milestones
  in layout accents.

### Tone

Warm, compassionate, hopeful. Celebrates small wins. Beehive/nectar warmth — growth,
hope, resilience. **Never clinical or cold.**

**Tagline:** *Where Every Milestone Blossoms.*

---

## 2. Positioning & content rules

- **What it is:** an autism & special-needs early-intervention initiative supporting
  children through compassionate care and early intervention.
- **Core differentiator:** empowering **parents, caregivers, and therapists** — families
  are partners, not bystanders. Every section reflects this.
- **Audience:** parents and carers of young children (roughly 28–40), Setiawangsa and
  surrounding KL catchment.

**Guardrails (do not violate):**
- No experience-length or track-record claims, no client counts, no ratings/awards — the
  centre is pre-launch. (The guideline's app-store/billboard mockups showing "50k
  ratings / 4.9 / Editor's Choice" are template dressing — never reproduce them as fact.)
- No testimonials or success stories until real ones exist.
- Internal package names must **never** appear in public content until announced:
  First Bloom, Honeycomb Circle, Golden Nectar, First Flight, Hive Family Workshops.
- Public copy uses the seven **programme** names only (below).

**The seven programmes:**
1. Early Intervention Programme (EIP)
2. Speech Therapy
3. Occupational Therapy
4. Physiotherapy
5. School Readiness
6. Autism Assessment
7. Fardhu Ain Sessions

---

## 3. Section order & content

### 3.1 Top utility bar
Slim bar. Left: contact/hours (placeholder). Right: quick links (About, Careers,
Contact). Dusty-olive or deep-gold ground. Minimal.

### 3.2 Header / nav
Primary logo left. Nav: the 7 programmes (grouped under a "Programmes" menu if the flat
list is too wide) + About + Contact. Right: **"Book a Consultation"** button (honey-gold,
primary). Sticky on scroll.

### 3.3 Hero
- **Fredoka Bold** headline with **one** honey-gold highlighted word. Direction: growth /
  milestones / confidence for the child *and* the family.
- Subheadline (Pliant): carer-empowerment promise — families supported, not sidelined.
- Two CTAs: primary "Book a Consultation" (honey-gold), secondary "Explore Programmes"
  (dusty-olive outline).
- **Visual:** use the super-graphic profile-in-hexagon silhouette (translucent, layered)
  as the hero anchor, per the guideline — not a generic stock hero. Real child+carer
  photography can sit within/over it.

### 3.4 Trust strip
Three honest signal cards (replacing the reference's "24hr / 50 years"):
- Evidence-based, family-centred approach
- Qualified, caring therapists
- One accent card / CTA ("Book a Consultation")

No experience-length claims.

### 3.5 Benefits — "What families gain"
Image collage with floating labelled cards (keep the reference's floating-label style).
Labels focus on outcomes families care about: communication confidence, everyday
independence, social connection, smoother transitions to school. Eyebrow: `BENEFITS`.

### 3.6 Our approach — "What we do"
Short explainer + bulleted list of what the programmes address + a compact approach card.
Copy centred on partnering with and empowering carers. Honeycomb texture accent.

### 3.7 Programmes grid
The reference's services grid → cards for the 7 programmes. Each card: image slot,
programme name (Fredoka), one-line description (Pliant), subtle honey-gold "learn more"
affordance (circular arrow like the reference). Responsive: 3-up desktop → 1-up mobile.
Eyebrow: `OUR PROGRAMMES`.

One-liners (draft — refine in copy pass):
- **EIP** — Early, structured support for developmental milestones.
- **Speech Therapy** — Building communication, language, and confidence.
- **Occupational Therapy** — Everyday skills and independence.
- **Physiotherapy** — Movement, strength, and physical development.
- **School Readiness** — Preparing children to thrive in the classroom.
- **Autism Assessment** — Clear, caring evaluation and next steps.
- **Fardhu Ain Sessions** — Faith learning adapted for every child.

### 3.8 Team — "Meet our team"
Member cards: photo slot, name, role, socials. **Use clearly labelled placeholder cards**
(e.g. "Practitioner — to be announced") until practitioners are confirmed. Do not invent
names. Eyebrow: `OUR TEAM`.

### 3.9 Who we help — supportive grid
The reference's conditions grid, reframed supportively and family-friendly (not a clinical
symptom list). Grid of areas the centre supports. Eyebrow: `WHO WE HELP`.

### 3.10 Our promise — (replaces testimonials)
Same visual treatment as the reference's testimonial block (quote-style block + supporting
copy), but content is **"What families can expect"** / the centre's promise — there are no
clients yet. Swap to real testimonials post-launch.

### 3.11 Location
Single Setiawangsa centre. Address, opening hours, map embed placeholder. **Drop the
multi-city tabs.** Eyebrow: `VISIT US`.

### 3.12 Closing dual CTA band
Two blocks side by side:
- Dusty-olive: "Book a free consultation" → primary action.
- Honey-gold: secondary action (call / WhatsApp / enquire).

### 3.13 Footer
Primary logo + one-line about, Quick Links, Programmes list, Contact. Matches reference
structure. Dusty-olive or honeycomb-patterned ground.

---

## 4. Component inventory

**Primitives (`/components`)**
- `Container` — max-width + responsive padding.
- `Section` — vertical rhythm + optional `eyebrow` label prop.
- `Button` — variants: `primary` (honey-gold), `secondary` (dusty-olive outline), `ghost`.
- `HexCell` / `HoneycombPattern` — the hexagon-silhouette cell and its tessellation
  (gold + olive colourways).
- `SuperGraphic` — the enlarged translucent profile-in-hexagon silhouette for hero/section
  backdrops.

**Section components**
- `TopBar`, `Header` (with `NavItem`)
- `Hero`
- `TrustStrip` (`TrustCard`)
- `Benefits` (`FloatingLabelCard`)
- `Approach`
- `ProgrammesGrid` (`ProgrammeCard`)
- `Team` (`TeamCard` — placeholder-aware)
- `WhoWeHelp` (`ConditionCard`)
- `Promise`
- `Location`
- `CtaBand`
- `Footer`

**Content source:** keep programme + section copy in a typed data file
(e.g. `/content/programmes.ts`) so cards map over data rather than hardcoding.

---

## 5. Placeholder register (replace before launch)

- Hero photography, benefit collage images, programme card images, team photos.
- Team names/roles (currently placeholders).
- Contact details, opening hours, map embed.
- "Our promise" copy → real testimonials once available.
- Final approved copy for all one-liners (draft above).
- **Any page still using the Pliant fallback font** — swap once Pliant webfont is licensed.
