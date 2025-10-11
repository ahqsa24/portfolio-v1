# Animations Guide

This project uses AOS (scroll-based) and Framer Motion for smooth, composable animations.

- AOS is initialized globally in `src/main.jsx` and refreshed on route changes via `AOSRouteInit.jsx`.
- Framer Motion variants live in `src/animations/motion.js` and are applied with the `MotionSection` wrapper.

## Quick usage

- Wrap a section with MotionSection and pick a variant:
  - `<MotionSection variant="fadeInUp" aos="fade-up" delay={0.2}>...children...</MotionSection>`
- Variants available: `fadeInUp`, `slideInLeft`, `slideInRight`, `zoomIn`, `staggerContainer`.
- Use the `aos` prop to add a matching AOS attribute for progressive enhancement.

## Tips

- Prefer small delays (0–0.4) to create staggered entrances.
- Keep `viewport.once` true for performance (set in `MotionSection`).
- For lists/grids, wrap the parent in `staggerContainer()` and apply a child variant to each item.

## Files
- `src/animations/motion.js`: shared variants
- `src/components/MotionSection.jsx`: wrapper to apply variants + AOS data attributes
- `src/components/AOSRouteInit.jsx`: refreshes AOS on route navigation
