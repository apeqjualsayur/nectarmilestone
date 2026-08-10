"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { fadeInUp, VIEWPORT } from "@/lib/motion";

export type RevealProps = HTMLMotionProps<"div">;

// Fade + rise a block into view once, ~15–20% visible, never replaying on
// scroll back up — see src/lib/motion.ts for the shared tokens. For
// staggered groups (cards, list items), use motion.* + staggerContainer /
// fadeInUp directly (see ProgrammesGrid, TrustStrip, etc.) rather than this;
// Reveal is for single content blocks (a heading, a card, an intro
// paragraph).
export function Reveal({ variants = fadeInUp, ...props }: RevealProps) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={VIEWPORT} variants={variants} {...props} />
  );
}
