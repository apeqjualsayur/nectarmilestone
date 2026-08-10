"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { fadeInUp, fadeInUpSlow, staggerContainer, VIEWPORT } from "@/lib/motion";
import { HexCell } from "./HexCell";
import { HexScatter, type HexAccent } from "./HexScatter";
import { HoneycombPattern } from "./HoneycombPattern";
import { LogoMark } from "./LogoMark";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const HEX_ACCENTS: HexAccent[] = [
  { className: "right-[4%] top-[2%] h-14 w-14 text-honey-gold/20 rotate-12" },
  { className: "left-[1%] top-[35%] h-10 w-10 text-dusty-olive/20 -rotate-6" },
  { className: "right-[2%] top-[55%] h-20 w-20 text-honey-gold/12 rotate-[20deg]" },
  { className: "left-[6%] bottom-[4%] h-12 w-12 text-dusty-olive/20 rotate-45" },
  { className: "right-[8%] bottom-[6%] h-8 w-8 text-honey-gold/25 -rotate-12" },
];

const EXPECTATIONS = [
  "Clear updates after every session — no jargon, no guesswork.",
  "A plan that adapts and grows as your child does.",
  "A team that treats you as a partner, not a bystander.",
];

const BUBBLE_TONES = ["honey-gold", "dusty-olive", "honey-gold", "dusty-olive"] as const;

// Replaces the reference's client testimonials — there are no clients yet.
// The quote is a promise from the centre, attributed to the team (not a
// fabricated person), with the reference's avatar-cluster motif reworked
// into brand hex cells. Swap to real testimonials post-launch — see
// _specs/landing-page.md §3.10. Quote card settles in a beat after the
// heading (fadeInUpSlow); expectations stagger — see src/lib/motion.ts.
export function OurPromise() {
  return (
    <Section
      eyebrow="OUR PROMISE"
      tone="soft-white"
      decorations={<HexScatter accents={HEX_ACCENTS} />}
    >
      <Reveal className="flex items-center gap-4">
        <div className="flex -space-x-3">
          {BUBBLE_TONES.map((tone, index) => (
            <div
              key={index}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full border-2 border-soft-white",
                tone === "honey-gold" ? "bg-honey-gold/15" : "bg-dusty-olive/15",
              )}
            >
              <HexCell
                className={cn("h-5 w-5", tone === "honey-gold" ? "text-honey-gold" : "text-dusty-olive")}
              />
            </div>
          ))}
        </div>
        <span className="font-body text-sm text-ink/60">
          Every family who walks through our doors
        </span>
      </Reveal>

      <Reveal>
        <h2 className="mt-6 font-heading text-3xl font-bold text-ink sm:text-4xl">
          What Families Can Expect
        </h2>
      </Reveal>

      <Reveal variants={fadeInUpSlow} className="relative mt-10 overflow-hidden rounded-3xl bg-dusty-olive p-8 text-white sm:p-12">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <HoneycombPattern colourway="honey-gold" cellSize={40} />
        </div>
        <LogoMark className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-auto opacity-[0.08] sm:h-48" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 left-6 select-none font-heading text-8xl text-white/15"
        >
          &ldquo;
        </span>
        <p className="relative max-w-2xl font-heading text-xl font-bold leading-snug sm:text-2xl">
          We promise to see your child as a whole person — not a diagnosis.
          Every session, every plan, and every conversation includes you,
          because you know your child best.
        </p>
        <p className="relative mt-4 font-body text-sm text-white/70">
          — The Nectar Milestone Team
        </p>
      </Reveal>

      <motion.ul
        className="mt-8 grid gap-4 sm:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerContainer}
      >
        {EXPECTATIONS.map((item) => (
          <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-honey-gold/10">
              <HexCell className="h-4 w-4 text-honey-gold" />
            </div>
            <span className="font-body text-sm text-ink/80">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
