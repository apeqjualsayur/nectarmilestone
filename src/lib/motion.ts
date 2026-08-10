import type { Variants } from "motion/react";

// Single source of truth for the site's motion language — restrained and
// calm by design (warm, family-centred, autism early-intervention brand;
// part of our audience is motion-sensitive). Every scroll reveal and
// stagger on the page pulls from these same values so it reads as one
// system, not a patchwork. Mirrored in globals.css as `--ease-gentle` for
// the CSS-driven hover/press micro-interactions (Button, cards, arrows) so
// both halves of the motion system share the same curve.
export const EASE_GENTLE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const DURATION = {
  /** Hover/press micro-interactions (buttons, card lift, arrow nudge). */
  fast: 0.2,
  /** Section/element scroll reveals. */
  base: 0.5,
  /** Larger or later-arriving reveals (e.g. secondary cards). */
  slow: 0.9,
} as const;

/** Rise distance for scroll reveals, in px. */
export const REVEAL_OFFSET = 20;

/** Delay between staggered siblings (cards, list items, floating labels). */
export const STAGGER_DELAY = 0.07;

/** Trigger once, ~15–20% visible, never replays on scroll back up. */
export const VIEWPORT = { once: true, amount: 0.175 } as const;

// Fade + gentle rise. Used both standalone (single element) and as the
// per-child variant inside a stagger container — Motion propagates
// hidden/visible state from parent to children that share these keys.
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_GENTLE },
  },
};

// Noticeably slower, larger-rise variant for feature cards that should
// settle in unhurried, on their own — not raced through mid-scroll.
export const fadeInUpSlow: Variants = {
  hidden: { opacity: 0, y: REVEAL_OFFSET * 1.4 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_GENTLE },
  },
};

// Wrap a group of fadeInUp children in this on the parent (initial="hidden"
// whileInView="visible" viewport={VIEWPORT} variants={staggerContainer}) to
// have them arrive in sequence rather than all at once.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER_DELAY, delayChildren: 0.05 },
  },
};
