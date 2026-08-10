"use client";

import { motion } from "motion/react";
import { fadeInUp, fadeInUpSlow, staggerContainer, VIEWPORT } from "@/lib/motion";
import { HexCell } from "./HexCell";
import { HexScatter, type HexAccent } from "./HexScatter";
import { HoneycombPattern } from "./HoneycombPattern";
import { LogoMark } from "./LogoMark";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const HEX_ACCENTS: HexAccent[] = [
  { className: "left-[2%] top-[4%] h-16 w-16 text-honey-gold/15 rotate-[15deg]" },
  { className: "left-[1%] top-[55%] h-10 w-10 text-dusty-olive/20 -rotate-6" },
  { className: "left-[10%] bottom-[6%] h-8 w-8 text-honey-gold/25 rotate-45" },
  { className: "right-[4%] bottom-[3%] h-14 w-14 text-dusty-olive/15 rotate-12" },
  { className: "right-[8%] top-[6%] h-10 w-10 text-honey-gold/20 -rotate-12" },
];

const ADDRESSES = [
  "Whole-child developmental milestones",
  "Communication & language",
  "Everyday independence & self-care",
  "Movement, strength & coordination",
  "School readiness & classroom confidence",
  "Clear, compassionate diagnostic guidance",
  "Faith & values learning, adapted for every child",
];

const PRINCIPLES = [
  { word: "Partner", body: "We build every plan together with you." },
  { word: "Practice", body: "Simple strategies you can use at home." },
  { word: "Progress", body: "Every small step, celebrated." },
];

// "Approach card" carries the honeycomb texture accent per
// _specs/landing-page.md §3.6. Address list staggers in on scroll; the card
// reveals as one block — see src/lib/motion.ts.
export function Approach() {
  return (
    <Section
      id="approach"
      eyebrow="WHAT WE DO"
      tone="soft-white"
      decorations={<HexScatter accents={HEX_ACCENTS} />}
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <Reveal>
            <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
              Built Around Your Family — Not Just a Diagnosis
            </h2>
            <p className="mt-4 max-w-xl font-body text-ink/70">
              Every plan starts with you. We work alongside parents,
              caregivers, and therapists to set goals that fit your
              family&rsquo;s life — then support you with the tools,
              guidance, and practice to reach them together.
            </p>
          </Reveal>

          <motion.ul
            className="mt-8 grid gap-3 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            variants={staggerContainer}
          >
            {ADDRESSES.map((item) => (
              <motion.li key={item} variants={fadeInUp} className="flex items-start gap-3">
                <HexCell className="mt-0.5 h-5 w-5 shrink-0 text-honey-gold" />
                <span className="font-body text-sm text-ink/80">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Reveal
          variants={fadeInUpSlow}
          className="relative overflow-hidden rounded-3xl bg-dusty-olive p-8 text-white sm:p-10"
        >
          <div className="absolute inset-0 opacity-10">
            <HoneycombPattern colourway="honey-gold" cellSize={36} />
          </div>
          <LogoMark className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-auto opacity-[0.08] sm:h-44" />
          <div className="relative">
            <h3 className="font-heading text-xl font-bold">Our Approach</h3>
            <p className="mt-2 font-body text-sm text-white/85">
              We don&rsquo;t just treat the child — we equip the whole family
              with practical strategies you can use every day, at home and
              beyond our centre.
            </p>
            <dl className="mt-6 space-y-4">
              {PRINCIPLES.map((principle) => (
                <div key={principle.word} className="flex items-start gap-3">
                  <dt className="w-20 shrink-0 font-heading text-base font-bold">
                    {principle.word}
                  </dt>
                  <dd className="font-body text-sm text-white/85">{principle.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
