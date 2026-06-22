# Kusuke SAKAMURA / Portfolio Design Guideline (DESIGN.md)

This document defines the design principles, visual styles, UI component guidelines, and interaction patterns for the development of **Kusuke SAKAMURA's** portfolio website. All future feature additions and style updates must comply with these guidelines.

---

## 1. Design Philosophy

> **"go with the flow, like water."**

This portfolio serves as a physical and digital manifestation of the artist's identity, focusing on Web and Generative Art. The design prioritizes three core principles:

1. **Balance of Algorithmic Logic & Aesthetic Comfort**
   - Combine rigorous, algorithmically-controlled systems with organic, comfortable interfaces.
2. **Minimalism & Refined Materials**
   - Keep the UI itself minimal (monospace typography, small text sizes, limited color palette) to prioritize the actual artworks and concepts.
   - Inject life and texture using WebGL background gradients and transitions, avoiding sterile, flat interfaces in favor of "living" materials.
3. **Interactive Tactility**
   - Provide tactile, physically satisfying responses to user inputs through features like `web-haptics`, seamless page transitions using the `View Transitions API`, and micro-animations driven by Framer Motion.

---

## 2. Color System

The system uses Tailwind CSS v4 `@theme` variables (configured in [globals.css](file:///Users/k.sakamura/Downloads/work/web/portfolio03/app/globals.css)).

### Base Palette

| Variable               | HEX / RGBA                  | Purpose                                                                          |
| :--------------------- | :-------------------------- | :------------------------------------------------------------------------------- |
| `--color-bg-primary`   | `#ffffff`                   | Main background color (clean, crisp white)                                       |
| `--color-bg-secondary` | `#f8f9fa`                   | Container boxes, carousel panels, and secondary backgrounds (soft light gray)    |
| `--color-fg-primary`   | `#252525`                   | Primary body text and headings (rich dark charcoal)                              |
| `--color-fg-secondary` | `#999999`                   | Secondary text, captions, metadata, and monospace labels                         |
| `--color-border`       | `rgba(255, 255, 255, 0.25)` | Semi-transparent white border (used to elevate images over the WebGL background) |
| `--color-accent`       | `#f5b111`                   | Primary accent color (gold / warm orange)                                        |
| `--color-accent-light` | `#fff4d9`                   | Highlight background color for text selection                                    |

### Haze Gradient (WebGL Background)

The header card background in the work detail page ([HazeBackground.tsx](file:///Users/k.sakamura/Downloads/work/web/portfolio03/components/HazeBackground.tsx)) dynamically blends these 5 colors using custom WebGL shaders to simulate an organic haze:

- `c1` : `#BFBDB8` (Grayish / Haze)
- `c2` : `#D99A25` (Golden / Amber)
- `c3` : `#D9AC59` (Muted Gold / Ochre)
- `c4` : `#BFA77A` (Tan / Sand)
- `c5` : `#F29C6B` (Orange-Salmon / Dusk)

---

## 3. Typography

Information hierarchy is built using small, understated font sizes and clean spacing, contrasting different font families rather than large font sizes.

### Fonts

The following Google Fonts are imported via [globals.css](file:///Users/k.sakamura/Downloads/work/web/portfolio03/app/globals.css):

1. **Sans-serif (`var(--font-sans)`)**: `Inter`
   - Used for primary UI elements and body text.
2. **Monospace (`var(--font-mono)`)**: `IBM Plex Mono`
   - Used for H2 headings, technology badges, dates, buttons, and metadata text (e.g., "Related Works").
3. **Serif**: `Noto Serif JP`
   - Reserved for Japanese text when poetic or narrative styling is required.

### Typography Hierarchy

- **H1 to H6 (Global Default)**: `font-size: 1rem` / `font-weight: 600`
  - Restricting headings to `1rem` prevents the UI from feeling cluttered, maintaining a clean, modern aesthetic.
- **H2**: `font-family: var(--font-mono)`
  - Uses the monospace font to create an industrial, structural tone.
- **Body & Links (`p`, `span`, `a`)**: `font-size: 0.85rem`
  - Keeps text size compact and clean.
- **Muted Labels (`span`)**: `color: var(--color-fg-secondary)`

---

## 4. Layout & Grid

The layout is fully responsive, transitioning between a two-column structure and a single-column layout depending on the screen size (defined in [layout.tsx](file:///Users/k.sakamura/Downloads/work/web/portfolio03/app/layout.tsx)).

### Desktop Layout (md and above)

A dual-column split-screen layout with sticky elements.

```mermaid
graph TD
  subgraph PC Layout (md: flex-row)
    A[Left Sidebar: w-80 Header & SNS Links] --- B[Right Main Content: scrollable]
    B --> C[Tab Navigation: sticky top]
    B --> D[Main Page Content]
    B --> E[Footer]
  end
```

- **Left Column (aside / `w-80` / `h-screen` / `sticky`)**:
  - Contains the `HeroVideo` (a short looping video showing water elements), name, subtitle, and social links.
- **Right Column (main / `flex-1`)**:
  - Tab navigation sits sticky at the top, followed by the scrollable main content area and footer.

### Mobile Layout (below md)

A single-column vertical flow.

- **Header Block**: Placed at the top (`HeroVideo` is automatically hidden).
- **Tab Navigation**: Sits directly under the header.
- **Main Area**: Flows downwards, ending with the footer at the bottom of the page.

---

## 5. Interaction Patterns

### 1. View Transitions API

When navigating from the work list page ([WorkCard.tsx](file:///Users/k.sakamura/Downloads/work/web/portfolio03/components/WorkCard.tsx)) to the detail page ([WorkDetailClient.tsx](file:///Users/k.sakamura/Downloads/work/web/portfolio03/components/WorkDetailClient.tsx)), the work image animates smoothly across pages.

- This is managed via the `ViewTransition` component matching the transition name: `name={`img-${id}`}`.

### 2. Web Haptics (Tactile Feedback)

Provides subtle, physical vibration feedback on touch devices.

- **Applied to**:
  - Tab switches in `TabNavigation` (`trigger([5])`)
  - Likes submitted via `LikeButton` (`trigger([5])`)

### 3. Motion (Framer Motion)

`motion/react` is used to implement smooth fades and pop effects.

- **`FadeIn` Wrapper**:
  - Animates from `opacity: 0, y: 10` to `opacity: 1, y: 0` using a staggered delay (`delay={index * 0.05}`) for lists.
- **`LikeButton`**:
  - Heart icon flies out upward when liked, controlled using `AnimatePresence` and `motion.div`.

### 4. Interactive Components

- **`Carousel`**:
  - Detects touch events (`onTouchStart`, `onTouchMove`, `onTouchEnd`) to enable horizontal swipe transitions on mobile devices.

---

## 6. Bilingual Structure & Data

The site supports both Japanese (`ja`) and English (`en`) to reach a global audience.

- **Profile Page**:
  - Language toggle button (`JA / EN`) sits at the top of the profile, managing the language state.
- **Work Details (`data/works.ts`)**:
  - All content is structured under translation keys (`details.overview.{ja, en}` and `details.concept.{ja, en}`).
- **Related Works (Vector Recommendations)**:
  - Related works are calculated via vector embeddings using local/remote models and are saved in [related-works.json](file:///Users/k.sakamura/Downloads/work/web/portfolio03/data/related-works.json).

---

## 7. Guidelines for Future Development

Use the following checklist to maintain consistency:

1. **No Hardcoded Colors or Sizes**
   - **Do not hardcode raw hex, RGB, or HSL color codes** in markup or component files (e.g., using Tailwind arbitrary properties like `text-[#f5b111]`). Always use design tokens like `text-fg-primary` or custom CSS classes.
   - **Do not hardcode arbitrary sizes** in layout/typography (e.g., `text-[10px]`, `w-[342px]`). If a new layout size or typography size is needed, define it as a CSS variable or theme token inside [globals.css](file:///Users/k.sakamura/Downloads/work/web/portfolio03/app/globals.css) (such as `--text-2xs`) and use the corresponding class (e.g., `text-2xs`).
2. **Avoid Introducing New Raw Colors**
   - Keep design monochrome. Rely on `var(--color-bg-secondary)` and `var(--color-fg-secondary)` for structural visual hierarchy, reserving `var(--color-accent)` only for call-to-actions or highlights.
3. **Adhere to Typography Bounds**
   - Headings must not exceed `1rem` (16px). Body and secondary elements should hover around `0.85rem` (13.6px). Structure hierarchy using padding and gap margins instead of size scaling.
4. **Verify Interactive Experiences**
   - When modifying components, test mobile gestures (swiping), transition performance (View Transitions), and tactile responses (haptics) on actual target devices or simulators.
5. **Ensure Symmetric Translations**
   - When adding new data objects in `data/*.ts`, always provide matching keys for both `ja` and `en` to prevent runtime layout breaks.
