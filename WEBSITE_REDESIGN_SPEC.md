# St. Mary's School Gondal — Living Academic Chronicle (Complete Website Redesign Spec)

## 1. Understanding Summary
- **Project**: St. Mary's School Gondal Website Redesign
- **Core Theme**: "Living Academic Chronicle" (Museum & Editorial Prestige)
- **Visual Identity**: Rich, dignified contrast between Deep Midnight Navy (`#060B14`, `#0B172E`) and Warm Ivory / Parchment (`#FDFCFA`, `#F7F4EE`), embellished with Polished Brass / Champagne Gold (`#D4A85C`) foil highlights.
- **Scope**: Comprehensive overhaul covering:
  1. The complete 8-Chapter Homepage storytelling journey.
  2. The creation of shared design primitives (`ChronicleSection`, `ChronicleCard`, `ChroniclePageHeader`).
  3. Consistent subpage layouts across all 11 dedicated views (About, History, Management, Staff, Campus, Academics, Activities, Gallery, Contact, News).
- **Target Audience**: Prospective parents, students, alumni, and diocesan educational patrons.
- **Explicit Non-Goals**:
  - No slow-loading WebGL/Three.js bloat.
  - No disruptive background audio.
  - No low-contrast unreadable text.

---

## 2. Complete Decision Log

| Decision Area | Selected Solution | Alternatives Considered | Rationale |
| :--- | :--- | :--- | :--- |
| **Experiential Theme** | Living Academic Chronicle (Museum & Editorial Prestige) | Campus Odyssey (High-Tech 3D), Cinematic Keynote Storytelling | Captures the authentic 45+ year Catholic diocesan heritage (Estd. 1979) with academic gravity and timeless prestige. |
| **Design Architecture** | Approach 1: Chronicle Design System & Dynamic Page Architecture | Approach 2: Continuous Single-Page Canvas, Approach 3: Ad-hoc file restyle | Guarantees 100% visual cohesion, prevents code duplication, and makes adding future pages seamless. |
| **Component Primitives** | Shared `ChronicleSection`, `ChronicleCard`, and `ChroniclePageHeader` | Isolated custom styling in every file | Centralizes typography, chapter badges, gold foil line animations, and 3D hover effects in clean reusable primitives. |
| **Homepage Layout** | 8 Sequenced Chapters with Alternating Light/Dark Contrast | Monotone light or monotone dark | Alternating between midnight navy and warm parchment keeps visual engagement high, reduces cognitive fatigue, and gives each chapter a distinct physical atmosphere. |
| **Interactivity & Effects**| Hardware-accelerated CSS 3D matrix transforms + dynamic specular flare + canvas dust motes | Third-party animation engines (`framer-motion`, `three.js`) | Zero external npm dependencies, native 60fps GPU acceleration, and under 2.5s production build times. |

---

## 3. Global Design System & Primitives Specification

### A. Design Tokens
- **Midnight Navy (`--midnight-950`)**: `#060B14` (Deep obsidian backdrop)
- **Midnight Royal (`--midnight-900`)**: `#0B172E` (Cathedral navy card & section surface)
- **Warm Ivory (`--ivory-50`)**: `#FDFCFA` (Clean illuminated page surface)
- **Parchment (`--parchment-100`)**: `#F7F4EE` (Warm archival paper surface)
- **Champagne Gold Foil (`--gold-400`, `--gold-500`)**: `#D4A85C`, `#C9944A` (Metallic accents, badges, and flourishes)
- **Emerald Pulse (`--emerald-500`)**: `#10B981` (Live admissions status beacon)
- **Typography**:
  - Primary Headlines: `Playfair Display` serif (weights 600, 700) with gradient text-fill
  - Body & Data: `Plus Jakarta Sans` (weights 400, 500, 600)
  - Flourishes & Signatures: `Caveat` script (weights 400, 700)

### B. Reusable Chronicle Component Primitives
1. **`ChronicleSection`** (`src/components/chronicle/ChronicleSection.jsx`):
   - Handles standard chapter numbering (`CHAPTER 02 / OUR GENESIS`), scroll-driven expanding gold rule, section title, and optional badge.
   - Supports light (`ivory`/`parchment`) and dark (`midnight`) variants.
2. **`ChronicleCard`** (`src/components/chronicle/ChronicleCard.jsx`):
   - Reusable surface with beveled gold foil border, optional corner charter brackets, and cursor-reactive 3D tilt + specular glare.
3. **`ChroniclePageHeader`** (`src/components/chronicle/ChroniclePageHeader.jsx`):
   - Shared top header for all 11 subpages with breadcrumb navigation, roman numeral chapter markers, and watermarked diocesan crest.

---

## 4. Homepage 8-Chapter Chronicle Narrative

1. **Chapter 01: The Academic Monument (Hero)**
   - Interactive 3D tilt brass school crest medallion, canvas golden dust motes, and direct admission actions (`Hero.jsx`).
2. **Chapter 02: Our Genesis & Legacy**
   - Split-screen editorial featuring archival offset photos (`school-photo.jpg`, `kg-building.jpg`), illuminated drop-cap, and milestone timeline.
3. **Chapter 03: The Principal's Monumental Epistle**
   - Midnight cathedral card with Fr. Rojant's portrait framed in a brass oval ring, gilded quote marks, and signed script sign-off.
4. **Chapter 04: The Four Houses Heraldry**
   - 4 interactive heraldic cards: **St. Peter** (Red/Fortitude), **St. Paul** (Blue/Intellect), **St. John** (Green/Service), and **St. Thomas** (Gold/Purpose) with metallic edge glow on hover.
5. **Chapter 05: Scholastic Curriculum Dossiers**
   - Tabbed dossiers detailing Kindergarten, Primary, Secondary, and Higher Secondary (Science & Commerce) with GSEB distinction highlights.
6. **Chapter 06: Living Campus Map & Facilities**
   - Architectural blueprint map with interactive pulsating hotspots (Assembly Quad, Skating Rink, Science Laboratories, Library).
7. **Chapter 07: School Chronicles & News**
   - Clean timeline dossier of circulars, achievements, and events with instant modal reader.
8. **Chapter 08: The Grand Admissions Charter & Footer**
   - Admission eligibility checker, quick inquiry launchpad, and institutional contact footer with verified coordinates.

---

## 5. Global Subpages Architecture

Every subpage will utilize `ChroniclePageHeader` and `ChronicleCard` grids:
- **`AboutPage.jsx`**: Diocesan vision, core pillars, and accreditation.
- **`HistoryPage.jsx`**: Chronological milestone timeline from 1979 foundation to present day.
- **`AcademicsPage.jsx`**: Comprehensive curriculum breakdown, examination track record, and academic calendar.
- **`CampusPage.jsx`**: Interactive photographic tour of the 5-acre campus with facility specs.
- **`StaffPage.jsx` & `ManagementPage.jsx`**: Faculty directory with portrait cards, qualifications, and house allocations.
- **`GalleryPage.jsx` & `ActivitiesPage.jsx`**: Masonry photo mosaic with filterable categories and modal lightbox.
- **`ContactPage.jsx`**: Direct admission inquiry form, campus geolocation map, and institutional office hours.

---

## 6. Accessibility & Non-Functional Guarantees
- **60 FPS Rendering**: GPU-composited CSS transforms and single-canvas particles.
- **Prefeers-Reduced-Motion**: Automatically disables all parallax, tilt, and particle loops when requested.
- **WCAG AA Compliance**: High-contrast ratios on all text elements (> 4.5:1).
- **Responsive Guarantee**: Precision layouts optimized across 375px (mobile), 768px (tablet), 1024px (laptop), and 1440px+ (desktop).
