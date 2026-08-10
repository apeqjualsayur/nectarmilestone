"use client";

import { motion } from "motion/react";
import { HexOutline } from "./HexOutline";

// Very slow, barely-there float on the hero's decorative hex accents —
// optional per the brand's "restrained and calm" motion language, purely
// ambient (not tied to scroll or interaction). Each accent drifts a
// different amount/speed so it doesn't read as mechanically synchronised.
// Decorative only (HexOutline is aria-hidden) — MotionConfig's
// reducedMotion="user" (see layout.tsx) disables this automatically for
// users with the OS reduced-motion preference on.
const ACCENTS = [
  {
    wrapperClassName: "absolute -left-6 -top-8 lg:-left-10 lg:-top-10",
    hexClassName: "h-16 w-16 text-honey-gold/70 lg:h-20 lg:w-20",
    y: [0, -6, 0],
    duration: 7.5,
  },
  {
    wrapperClassName: "absolute -right-5 -top-6",
    hexClassName: "h-10 w-10 rotate-12 text-dusty-olive/60",
    y: [0, 5, 0],
    duration: 6.5,
  },
  {
    wrapperClassName: "absolute -bottom-8 -right-8 lg:-bottom-10 lg:-right-10",
    hexClassName: "h-20 w-20 text-honey-gold/50 lg:h-24 lg:w-24",
    y: [0, -5, 0],
    duration: 9,
  },
  {
    wrapperClassName: "absolute -bottom-6 left-10",
    hexClassName: "h-10 w-10 -rotate-6 text-dusty-olive/50",
    y: [0, 6, 0],
    duration: 8,
  },
] as const;

export function HeroHexDrift() {
  return (
    <>
      {ACCENTS.map((accent, index) => (
        <motion.div
          key={index}
          className={accent.wrapperClassName}
          animate={{ y: [...accent.y] }}
          transition={{ duration: accent.duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <HexOutline className={accent.hexClassName} />
        </motion.div>
      ))}
    </>
  );
}
