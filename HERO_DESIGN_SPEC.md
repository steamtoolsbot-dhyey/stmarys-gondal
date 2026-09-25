# St. Mary's School Gondal — Cinematic Academic Monument Hero Spec

## 1. Overview & Understanding Summary
- **Component**: `src/components/Hero.jsx`
- **Vision**: "Cinematic Academic Monument" — an authoritative, prestigious, and visually stunning digital entrance reflecting 45+ years of scholastic and moral excellence (Estd. 1979 under the Diocese of Rajkot).
- **Primary Centerpiece**: An interactive 3D/tilt embossed brass school crest medallion that physically tracks cursor movement and dynamically reflects specular light.
- **Target Audience**: Prospective parents, students, alumni, and educational authorities seeking an elite institution in Gondal/Saurashtra.
- **Explicit Non-Goals**:
  - No generic corporate SaaS or startup templates.
  - No bloated external WebGL/Three.js dependencies.
  - No intrusive autoplaying audio.

---

## 2. Core Decisions & Decision Log

| Decision Area | Selected Solution | Alternatives Considered | Rationale |
| :--- | :--- | :--- | :--- |
| **Hero Concept** | Approach 1: Heritage Relic & Stately Monument | Approach 2 (Orbiting Nodes), Approach 3 (Archival Monolith) | Maximizes visual prestige, establishes institutional credibility, and directly channels parent intent into admissions. |
| **3D Crest Engine** | Hardware-accelerated CSS 3D Transforms (`perspective`, `rotateX/Y`) + Dynamic Specular Glare Layer | Three.js / WebGL / Canvas 3D | Zero external bundle bloat, native 60fps GPU acceleration, and instant load time. |
| **Particle System** | Self-contained HTML5 Canvas particle engine (30–40 golden motes) | Div-based CSS particles or `tsparticles` npm package | Single DOM node, smooth physics, auto-sleeps off-screen via `IntersectionObserver`. |
| **Color System** | Deep Midnight Navy (`#060B14`, `#0B172E`), Warm Brass/Gold (`#D4A85C`), and Crisp Ivory | Flat Dark or Generic White | Authentic scholastic luxury reflecting gold foil diploma and Catholic diocesan heritage. |
| **Conversion Flow** | High-contrast Golden CTA ("Admissions 2025–26") triggering `onOpenInquiry` | Static phone link or multi-step form on hero | Instant modal interaction dramatically increases conversion rates. |

---

## 3. Component Architecture & Detailed Specification

### A. Background & Atmospheric Stage
1. **Base Gradient**: `linear-gradient(135deg, #060B14 0%, #0B172E 50%, #091222 100%)`.
2. **Ambient Light Blooms**:
   - Radial warm gold flare (`rgba(212, 168, 92, 0.18)`) positioned behind the crest medallion.
   - Secondary deep azure glow (`rgba(37, 99, 235, 0.10)`) at bottom-left.
3. **Architectural Grid**: Micro dot-matrix (`radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`) sized at `36px × 36px`.
4. **Golden Dust Motes**: Canvas-driven ambient particles drifting upward with organic sway and subtle mouse-repulsion.

### B. Interactive 3D Brass Medallion
- **Dimensions**: Desktop `160px × 160px`, Tablet `140px × 140px`, Mobile `110px × 110px`.
- **Card Styling**:
  - Circular frosted glass & brass bevel ring (`border: 2px solid rgba(212, 168, 92, 0.45)`).
  - Multi-tier box shadows simulating physical relief (`0 20px 50px rgba(0,0,0,0.6), inset 0 2px 6px rgba(255,255,255,0.4)`).
  - Centered high-resolution school crest (`/assets/SCHOOLLOGOCOLOUR-full.png`).
- **3D Physics**:
  - Normalized cursor calculation:
    $$\theta_x = -\left(\frac{y - y_c}{h/2}\right) \times 16^\circ, \quad \theta_y = \left(\frac{x - x_c}{w/2}\right) \times 16^\circ$$
  - Dynamic glare gradient tracking cursor angle.
  - Fallback on touch screens: Continuous smooth ambient oscillation ($\pm 2.5^\circ$) with rhythmic metallic shine sweep.

### C. Monumental Editorial Typography
- **Institutional Top Bar**: `ESTD. 1979 • DIOCESE OF RAJKOT • GSEB ENGLISH MEDIUM K–12` + Pulsing emerald badge (`Admissions Open 2025–26`).
- **Main Heading**:
  - `St. Mary's School` in `Playfair Display` (4rem–5.5rem), vertical gold metallic gradient text-fill.
  - `Gondal` in `Caveat` script with flanking golden hairline flourishes.
- **Ethos Statement**: 2 lines articulating character, moral responsibility, and 45-year unbroken scholastic legacy.
- **Trust Milestone Pills**:
  - `✓ 100% Board Pass Rate`
  - `✓ 5-Acre Lush Green Campus`
  - `✓ Nursery to Std 12 Co-Educational`

### D. Conversion & Actions
1. **Primary**: `Apply for Admission 2025–26` (Gold gradient button with animated pulse beacon, triggers `onOpenInquiry`).
2. **Secondary**: `Explore 45-Year Legacy` (Frosted glass button with gold arrow hover slide, calls `onNavigate('about')`).
3. **Tertiary**: `Virtual Campus Tour` (`onNavigate('campus')`).

---

## 4. Accessibility & Responsiveness
- **Reduced Motion**: Respects `prefers-reduced-motion` by disabling tilt physics and canvas particles, displaying static elegance.
- **Keyboard Navigation**: Full `focus-visible` rings on all interactive CTAs.
- **Contrast**: Text contrast complies with WCAG AA standard (> 4.5:1 ratio).
- **Responsive**: Fully optimized for 375px (mobile), 768px (tablet), 1024px (laptop), and 1440px+ (desktop).
