# Lux Suites Design System
> Adapted from Ferrari's luxury editorial design language — chiaroscuro rhythm, photography-first storytelling, extreme restraint. Retuned for ultra-luxury hospitality with a navy/gold palette and serif typography.

---

## 1. Visual Theme & Atmosphere

Lux Suites presents itself as a five-star editorial — a curated publication where each room, suite, and amenity is a vignette unto itself. The page opens onto deep navy, the hotel emblem floating alone in open space, conveying the ease of a property that requires no explanation. Below, the content alternates between ink-dark immersive sections and ivory-warm editorial panels. This chiaroscuro rhythm — night yielding to morning, grandeur yielding to intimacy — feels more like turning pages in a luxury travel magazine than scrolling a hotel website.

The color language is monastically restrained. Gold (`#C9A84C`) appears with surgical sparseness — reserved for primary CTAs, hover moments, and brand marks that must command immediate attention. The vast majority of the interface lives in deep navy, warm ivory, and a precisely calibrated greige scale. When gold appears, it carries the full authority of the brand.

Typography pairs a display serif (`Cormorant Garamond`) for all hero headings and editorial titles with a refined sans-serif (`DM Sans`) for body copy, UI labels, and navigation. This pairing mirrors the conventions of luxury travel publications — the serif conveys heritage and drama, the sans-serif provides modern legibility and structure.

**Key Characteristics:**
- Chiaroscuro layout alternating between deep navy cinematic sections and warm ivory editorial panels
- Gold (`#C9A84C`) used with extreme sparseness — accent, not atmosphere
- Hotel emblem as isolated hero element on a void-navy field
- Cormorant Garamond display serif for all hero text, editorial headings, and pull quotes
- DM Sans for navigation, body copy, labels, captions, and UI chrome
- Photography-driven storytelling: each section is a curated vignette — suites, dining, spa, pool
- Uppercase DM Sans labels with wide letter-spacing (1.5px) for editorial annotation
- Nearly zero border-radius (2px default) for architectural precision; 0px for photo crops
- Booking widget as the single conversion element — never more than one per viewport

---

## 2. Color Palette & Roles

### Primary
- **Warm Gold** (`#C9A84C`): The signature accent — primary CTA color, hover states, logo mark, and brand moments requiring maximum visual authority. `--ls-gold`
- **Deep Navy** (`#0D1B2A`): Hero backgrounds, cinematic sections, footer, and nav on scroll. The dominant dark surface. `--ls-navy`
- **Warm Ivory** (`#F7F3ED`): Primary surface for editorial content panels, room showcases, and breathing-room sections. `--ls-ivory`

### Secondary & Accent
- **Dark Gold** (`#A8863A`): Hover and pressed state for gold CTAs — adds dimensionality without introducing a new hue. `--ls-gold-dark`
- **Pale Gold** (`#E8D5A3`): Subtle tints — dividers on dark surfaces, shine overlays on gold buttons, secondary emphasis on navy panels. `--ls-gold-pale`
- **Midnight Navy** (`#070F1A`): Deepest navy for hero overlays, footer depth differentiation, modal backdrops. `--ls-navy-deep`
- **Slate Navy** (`#1E3248`): Secondary dark surface — slightly lighter than Deep Navy for section layering and card hover states. `--ls-navy-slate`

### Surface & Background
- **Ivory White** (`#FDFAF6`): Pure surface for cards and inline content against Warm Ivory backgrounds — the lightest surface in the system. `--ls-ivory-light`
- **Warm Stone** (`#EDE6DB`): Alternate warm surface for dividers, subtle section breaks, and spa/wellness section backgrounds. `--ls-stone`
- **Overlay Dark** (`hsla(13, 18%, 5%, 0.75)`): Semi-transparent near-black for image caption overlays and booking widget backgrounds over hero photography. `--ls-overlay`

### Neutrals & Text
- **Charcoal** (`#1C1C1C`): Primary body text on light surfaces — warm near-black for comfortable readability. `--ls-charcoal`
- **Warm Gray** (`#6B6460`): Secondary text, captions, and subdued labels. `--ls-gray`
- **Silver Taupe** (`#9E9690`): Tertiary text for metadata, timestamps, and supportive content. `--ls-taupe`
- **Mist** (`#C5BEB8`): Placeholder text and disabled state indicators. `--ls-mist`
- **Border Stone** (`#D9D0C8`): Input fields, card borders, and dividers on light surfaces. `--ls-border`

### Semantic
- **Success Forest** (`#2D6A4F`): Booking confirmation, availability indicators, positive status. `--ls-success`
- **Alert Amber** (`#C97A1A`): Availability warnings, limited availability nudges — warm amber deliberately close to gold but clearly distinct. `--ls-alert`
- **Error Terracotta** (`#B04040`): Form validation errors, booking failures. `--ls-error`

### Gradient System
- No UI gradients on interface elements
- Depth through the chiaroscuro section system: navy → ivory → navy
- Photography provides all atmospheric depth: candlelit dining, window-light suite photography, dawn pool reflections
- Hero image overlays use `--ls-overlay` for text legibility on photography
- Subtle vignette on hero sections (radial dark overlay at image edges) to frame the central subject

---

## 3. Typography Rules

### Font Families
- **Cormorant Garamond** (Google Fonts, weights 300/400/500/600): Display serif for all hero headlines, section titles, pull quotes, room names, and editorial narrative headings. The voice of the hotel. Fallbacks: Georgia, 'Times New Roman', serif
- **DM Sans** (Google Fonts, weights 300/400/500/600): Sans-serif for navigation, body copy, labels, captions, booking UI, form elements, and all UI chrome. Fallbacks: system-ui, -apple-system, sans-serif

### Hierarchy

| Role | Family | Size | Weight | Line Height | Letter Spacing | Notes |
|------|--------|------|--------|-------------|----------------|-------|
| Hero Title | Cormorant Garamond | 72–96px | 300 | 1.05 | -0.5px | Light italic preferred; scales to 48px on tablet, 36px on mobile |
| Section Headline | Cormorant Garamond | 48px | 400 | 1.10 | -0.25px | Editorial section openers, room names |
| Subheadline | Cormorant Garamond | 32px | 500 | 1.20 | normal | Amenity titles, dining section headings |
| Pull Quote | Cormorant Garamond | 28px | 300 italic | 1.35 | 0.1px | Guest quotes, editorial callouts |
| Card Title | Cormorant Garamond | 22px | 500 | 1.25 | normal | Room cards, amenity cards |
| UI Heading | DM Sans | 16px | 500 | 1.40 | 0.05px | Booking widget headings, form group labels |
| Body | DM Sans | 16px | 400 | 1.65 | 0.02px | All narrative body copy |
| Nav Link | DM Sans | 13px | 500 | 1.20 | 0.15px | Primary navigation, footer links |
| Caption | DM Sans | 13px | 400 | 1.55 | 0.1px | Image captions, room metadata |
| Label Upper | DM Sans | 11px | 500 | 1.30 | 1.5px | Uppercase category tags, section eyebrows, amenity labels |
| Micro | DM Sans | 11px | 400 | 1.30 | 0.5px | Legal text, footnotes, availability counts |
| Button | DM Sans | 14px | 500 | 1.00 | 0.8px | All CTA labels — slight tracking gives authority |

### Principles
- **Serif for soul, sans for structure**: Cormorant Garamond carries all emotional, aspirational content. DM Sans handles everything functional.
- **Light weights for large display**: Hero titles at weight 300 or 300 italic feel expansive at large sizes. Medium (500) for card titles and subheadings provides contrast without heaviness.
- **Uppercase only for DM Sans labels**: Category eyebrows, amenity chips, section tags, and availability labels use `text-transform: uppercase` + 1.5px letter-spacing. Never uppercase Cormorant Garamond.
- **Tight leading for display**: Hero and section headlines use 1.05–1.20 line-heights. Body opens to 1.65 for comfortable reading.
- **No weight extremes**: The system runs 300–600. Weight 700 is never used — heaviness conflicts with the hotel's graceful tone.

---

## 4. Component Stylings

### Buttons

**Primary CTA (Gold)** — The default booking/conversion action:
- Default: bg `#C9A84C`, text `#0D1B2A`, fontSize 14px (DM Sans), letterSpacing 0.8px, padding 14px 28px, borderRadius 2px, no border
- Hover: bg `#A8863A` (Dark Gold), text `#F7F3ED`, transition 200ms ease
- Focus: 2px offset ring in `#C9A84C` on dark bg, `#0D1B2A` ring on light bg
- Disabled: opacity 0.45, cursor not-allowed
- Used for: "Reserve Now", "Check Availability", "Book This Suite"

**Ghost Button (Navy Border)** — For light ivory sections:
- Default: bg transparent, text `#0D1B2A`, border 1px solid `#0D1B2A`, borderRadius 2px, padding 14px 28px
- Hover: bg `#0D1B2A`, text `#F7F3ED`
- Used for: "Explore Rooms", "View Dining", secondary actions on ivory backgrounds

**Ghost Button (Pale Border)** — For dark navy sections:
- Default: bg transparent, text `#F7F3ED`, border 1px solid `rgba(249, 243, 237, 0.4)`, borderRadius 2px, padding 14px 28px
- Hover: border-color `#C9A84C`, text `#C9A84C`
- Used for: actions overlaid on photography and dark cinematic sections

**Text Link** — Inline and nav:
- Default: text inherits color, no underline, no background
- Hover: color `#C9A84C`, underline offset 3px (1px solid)
- DM Sans 13px/500 for nav, 14px/400 for inline body links

### Cards & Containers

**Room Card** (Suite/Room showcase):
- Background: `#FDFAF6` (Ivory White)
- Border: none on default; 1px solid `#D9D0C8` on hover
- Shadow: none — depth through surface contrast
- Image: full-width 4:3 ratio with `object-fit: cover`, 0px radius
- Text: Cormorant Garamond room name (22px/500) + DM Sans nightly rate (16px/400) + DM Sans feature list (13px/400 in Warm Gray)
- CTA: Gold primary button, right-aligned or full-width on mobile

**Amenity Card** (Spa, Dining, Pool):
- Background: `#0D1B2A` (Deep Navy) or image with `--ls-overlay`
- Full-bleed photography with text overlay at bottom
- Cormorant Garamond title (32px/400) in Ivory, DM Sans descriptor (14px/400) in Pale Gold
- No border, no shadow — darkness is the container

**Gallery Card** (Photography grid):
- No text overlay by default
- Hover: subtle scale(1.02) on image, 200ms ease
- 0px border-radius on all photo crops — architectural sharpness

**Info Card** (Amenity chips/icons):
- Background: `#F7F3ED` (Warm Ivory)
- Icon: thin-line style, gold color, 24px
- Label: DM Sans uppercase 11px, 1.5px tracking
- No border-radius > 2px; no shadow

### Inputs & Forms

**Booking Date Input**:
- Background: `#FDFAF6`
- Border: 1px solid `#D9D0C8`; focus: 1px solid `#C9A84C`
- Text: DM Sans 15px, Charcoal
- Label: DM Sans uppercase 11px, 1.5px tracking, Silver Taupe
- Placeholder: DM Sans 15px, Mist
- Border-radius: 2px

**Booking Widget Container**:
- Background: `#0D1B2A` at 90% opacity (on hero photography)
- Or `#FDFAF6` on ivory section placement
- Padding: 32px
- Date inputs + guest count in a single-row flex grid on desktop, stacked on mobile
- Gold primary CTA spanning full width on mobile, auto on desktop

**Text Area / Form Fields** (Contact, special requests):
- Same treatment as booking inputs
- Min-height: 120px for textarea

### Navigation

- **Desktop**: Hotel wordmark left-aligned on navy background; primary navigation links centered; "Reserve Now" gold CTA right-aligned — a three-zone masthead
- **On scroll**: nav gains `backdrop-filter: blur(16px)` + `background: rgba(13, 27, 42, 0.92)` for depth on scroll
- **Logo**: Wordmark in Cormorant Garamond 500, Warm Ivory, 28px, letter-spacing 3px, uppercase
- **Nav Links**: DM Sans 13px/500, ivory, uppercase, 0.15px tracking. Hover: gold underline 1px
- **Mobile**: Hamburger (3 lines, ivory) → full-screen navy overlay with centered nav links in Cormorant Garamond 32px
- **Footer**: 4-column DM Sans link grid on `#070F1A` (Midnight Navy). Category headers in gold uppercase label style. Copyright in Mist.

### Image Treatment

- **Hero**: Full-bleed editorial photography on navy backgrounds — suite interiors with window light, aerial pool at dusk, candlelit dining table
- **Aspect ratios**: 16:9 for hero sections, 4:3 for room cards, 1:1 for amenity chips, 3:2 for gallery grids
- **Full-bleed**: All hero and cinematic section images are full-bleed, 0px radius
- **Art direction standard**: All imagery must be professionally shot with ambient or studio lighting. No lifestyle stock photography. Every image tells a specific story about a specific moment at Lux Suites.
- **Lazy loading**: Below-fold images load progressively
- **Color grading guideline**: Images should lean warm in shadows (golden candlelight, sunset tones) and cool-neutral in highlights — reinforcing the gold/navy brand palette without color-grading in CSS

### Booking Flow UI

- Step indicators: DM Sans uppercase label 11px, 1.5px tracking, Pale Gold
- Active step: Gold underline 2px
- Progress bar (if used): 2px height, Gold fill on Navy track
- Confirmation message: Cormorant Garamond 32px/400, Ivory, centered on Navy background
- Price display: Cormorant Garamond 28px/500 for nightly rate, DM Sans 13px/400 for per-night label

---

## 5. Layout Principles

### Spacing System
- **Base unit**: 8px
- **Scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px
- **Button padding**: 14px vertical, 28px horizontal — generous for luxury feel
- **Section padding**: 80–128px vertical between major content blocks on desktop; 48–64px on mobile
- **Card gaps**: 24–32px in room grids
- **Booking widget padding**: 32px interior padding

### Grid & Container
- **Max content width**: 1400px, centered
- **Hero**: Full-bleed at all widths; content centered with max-width 800px for text
- **Room grid**: 3-column on desktop (>1024px), 2-column on tablet, 1-column on mobile
- **Amenity grid**: 2-column alternating image+text on desktop, stacked on mobile
- **Gallery grid**: Masonry-style 3-column on desktop, 2-column on tablet
- **Footer**: 4-column link grid, collapses to 2-column on tablet, accordion on mobile

### Whitespace Philosophy
Lux Suites treats whitespace as the space between courses at a fine-dining table — necessary, deliberate, and a signal of quality. Each section is given its own room. The alternating navy/ivory sections create a pacing rhythm: dark = immersive, aspirational moment (the hotel at its most dramatic); ivory = detailed content (the practical beauty of the rooms, amenities, and booking details). A guest should never feel rushed. Generous padding signals that there is nothing to rush toward — the experience is the destination.

### Border Radius Scale
| Value | Context |
|-------|---------|
| 0px | All photograph crops — architectural sharpness |
| 2px | Buttons, inputs, chips, badges — barely perceptible precision |
| 4px | Booking widget container corners — slight softness for the functional UI |
| 50% | Circular elements: avatar thumbnails, availability dot indicators |

---

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Level 0 (Flat) | No shadow, no border | Default state for all content sections and cards |
| Level 1 (Edge) | 1px solid `#D9D0C8` | Card hover state, input fields — depth through delineation |
| Level 2 (Overlay) | `hsla(13, 18%, 5%, 0.75)` backdrop | Image overlays in hero and cinematic sections |
| Level 3 (Float) | `0 4px 24px rgba(13, 27, 42, 0.15)` | Booking widget on hero; modal dialogs |

### Shadow Philosophy
Depth is achieved through the chiaroscuro surface system (navy vs. ivory) and through photography. The single elevated shadow token (`0 4px 24px rgba(13, 27, 42, 0.15)`) is reserved for the booking widget on hero photography, where it must float above the image without feeling heavy. Cards and content never carry shadows — the warm ivory surface and 1px border on hover provide all needed differentiation.

---

## 7. Hotel-Specific Sections

### Hero Section
- Full-bleed photography (suite interior or exterior aerial)
- Centered Cormorant Garamond hero title: 72–96px, weight 300, ivory, light italic
- Sub-caption in DM Sans 16px/300, Pale Gold, uppercase with 1.5px tracking
- Booking widget below headline (or floating bottom of viewport on desktop)
- Navy gradient overlay from bottom to mid-frame for text legibility

### Room/Suite Showcase
- Section eyebrow: DM Sans uppercase 11px, 1.5px tracking, Gold — e.g., "ACCOMMODATIONS"
- Section title: Cormorant Garamond 48px/400, Navy on Ivory background
- 3-column card grid with room images, names, rates, and brief features
- "From $XXX / night" in Cormorant Garamond 22px/500
- Gold "Reserve" CTA per card

### Dining Section
- Dark navy cinematic section
- Full-bleed or two-column editorial: photography left, editorial text right
- Cormorant Garamond section title in Ivory (48px)
- DM Sans body (16px, Mist) describing the culinary concept
- Ghost (pale border) CTA: "View Menu" or "Reserve a Table"

### Spa & Wellness
- Alternating ivory and stone sections
- Photography-driven with amenity icon grid (gold thin-line icons)
- DM Sans uppercase labels for each treatment category
- Pull quote in Cormorant Garamond 28px italic: a guest sentiment or philosophy statement

### Gallery
- Full-width masonry or 3-column grid
- 0px radius on all images
- Hover: subtle scale(1.02) + gold border 1px appears at image edge
- Lightbox on click — navy overlay, white X close button, arrow navigation in Gold

### Location & Map
- Split section: editorial text left (navy bg) + static map or lifestyle photography right (ivory bg)
- Cormorant Garamond subheadline: "Getting Here" in ivory
- DM Sans body copy with address, distance from key landmarks, transport options

### Booking Flow
- Full-page navy background
- Booking steps as Cormorant Garamond section headings (48px, ivory)
- Form fields on ivory card containers with 32px padding
- Gold primary CTA for each step
- Availability calendar: navy selected date with gold highlight; ivory unselected; mist for unavailable

---

## 8. Do's and Don'ts

### Do
- Use Gold (`#C9A84C`) sparingly — only for primary CTAs, brand marks, and editorial accent moments. Its power is restraint.
- Alternate between deep navy cinematic sections and warm ivory editorial sections for the signature chiaroscuro rhythm.
- Use Cormorant Garamond at weight 300 or 400 for all display and hero text — the lightness conveys effortlessness.
- Apply DM Sans in uppercase with 1.5px letter-spacing for all labels, category tags, and structural annotations.
- Keep border-radius at 2px for all interactive elements, 0px for all photo crops.
- Let photography carry the emotional weight — every image must be art-directed hospitality photography.
- Use the hotel emblem/wordmark as a standalone hero element — never crowd it with adjacent content.
- Reserve the booking widget as the single conversion element per viewport. One booking CTA per screen view.
- Use `#1C1C1C` (Charcoal) for body text rather than pure black — the warmth complements the ivory surfaces.

### Don't
- Scatter Gold across the interface as decoration — it is a CTA signal and brand accent, not a theme color.
- Use rounded-pill buttons or border-radius > 4px on any UI element — softness undermines the architectural precision.
- Add box-shadows to cards or content sections — depth comes from surface contrast and photography.
- Mix Cormorant Garamond and DM Sans within the same text block — they serve separate hierarchical functions.
- Use colorful backgrounds (warm orange, bright green, etc.) — the palette is exclusively navy/ivory/stone with gold accents.
- Apply uppercase to Cormorant Garamond — that role belongs exclusively to DM Sans labels.
- Display low-quality, stock, or user-generated imagery without art direction — every photograph must meet editorial standards.
- Place more than one Gold CTA in the same viewport — scarcity preserves its authority.
- Use Alert Amber (`#C97A1A`) for anything other than availability/urgency states — it must not be confused with Gold.

---

## 9. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | ≤640px | Single-column; hero title 36px; booking widget stacked full-width; hamburger nav |
| Tablet Small | 641–768px | 2-column room grid; hero title 48px; booking widget 2-up date fields |
| Tablet | 769–1024px | Full 2-column layout; hero title 60px; 3-column room grid begins |
| Desktop | 1025–1280px | Full nav, 3-column room grid, 2-column amenity alternation |
| Large Desktop | 1281px+ | Max content width 1400px; hero title 72–96px; generous section padding |

### Touch Targets
- Primary CTA buttons: minimum 48px height
- Navigation links: adequate spacing between items
- Gallery images: tap opens lightbox
- Date picker calendar: 44px minimum cell size
- Form fields: 48px minimum height

### Collapsing Strategy
- **Navigation**: Full three-zone nav collapses to wordmark + hamburger on mobile; full-screen navy overlay nav
- **Room grid**: 3-column → 2-column (tablet) → 1-column with full-width card (mobile)
- **Booking widget**: Horizontal date/guest row → fully stacked vertical on mobile
- **Amenity alternating layout**: 2-column image+text → stacked image above text on mobile
- **Gallery**: 3-column masonry → 2-column → 1-column on mobile
- **Footer**: 4-column → 2-column → accordion on mobile

---

## 10. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: "Warm Gold (#C9A84C)"
- CTA hover: "Dark Gold (#A8863A)"
- Background Dark: "Deep Navy (#0D1B2A)"
- Background Light: "Warm Ivory (#F7F3ED)"
- Card Surface: "Ivory White (#FDFAF6)"
- Heading text (light bg): "Charcoal (#1C1C1C)"
- Body text: "Warm Gray (#6B6460)"
- Tertiary: "Silver Taupe (#9E9690)"
- Divider: "Border Stone (#D9D0C8)"
- Label/tag: "DM Sans uppercase, 11px, 1.5px tracking"

### Example Component Prompts
- "Create a hero section with full-bleed hotel suite photography and a Deep Navy overlay (`hsla(13, 18%, 5%, 0.75)`). Center a Cormorant Garamond headline at 80px, weight 300, light italic, Warm Ivory. Below it, add a DM Sans subline in uppercase, 13px, 1.5px tracking, Pale Gold. Position a floating booking widget below the headline with Deep Navy background, 32px padding, date inputs, guest count, and a Gold 'Check Availability' button."
- "Design a 3-column room card grid on Warm Ivory background. Each card: Ivory White surface, no shadow, full-width 4:3 photo at top (0px radius), Cormorant Garamond room name at 22px/500 below, DM Sans nightly rate in Charcoal at 16px, and a Gold CTA button ('Reserve' 14px, 2px radius, 14px 28px padding)."
- "Build a dark dining section on Deep Navy. Left: full-bleed restaurant photography. Right: editorial panel with a DM Sans uppercase eyebrow in Pale Gold (11px, 1.5px tracking), Cormorant Garamond section title in Ivory at 48px/400, DM Sans body in Mist at 16px, and a ghost CTA with pale border: 'Reserve a Table'."
- "Create an amenity icon grid on Warm Ivory. 4-column on desktop, 2-column on mobile. Each cell: a 24px thin-line icon in Gold, a DM Sans uppercase label at 11px/1.5px tracking below, and a 2-line DM Sans description at 13px/Warm Gray. No cards — just the icon, label, and text grouped with 24px spacing."
- "Design a full-screen lightbox for the photo gallery: Deep Navy overlay at 95% opacity, centered image at max 90vw × 85vh, white X close button top-right, left/right arrow navigation in Gold (#C9A84C), image caption in DM Sans 13px/Mist below the image."

### Iteration Guide
When refining screens generated with this design system:
1. Focus on ONE section at a time — each section is a self-contained vignette with its own surface and purpose.
2. Use color names and hex codes from this document — the palette is small and every color has a precise role.
3. Check the surface: is this section on Deep Navy (cinematic/immersive) or Warm Ivory (editorial/informational)? Wrong surface = wrong tone.
4. Reserve Gold for ONE primary CTA per viewport. If gold appears in multiple elements, evaluate which one earns it.
5. Serif (Cormorant Garamond) = aspiration and story; Sans (DM Sans) = information and function. Never reverse these roles.
6. Spacing should feel generous. If a section feels cramped, add 16px more vertical padding before trying any other fix.
