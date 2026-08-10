"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";
import { fadeInUp, staggerContainer, VIEWPORT } from "@/lib/motion";
import { HexScatter, type HexAccent } from "./HexScatter";
import { HoneycombPattern } from "./HoneycombPattern";
import {
  ActivityIcon,
  ChatBubbleIcon,
  EyeIcon,
  GraduationCapIcon,
  PeopleIcon,
  SparkleIcon,
} from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const HEX_ACCENTS: HexAccent[] = [
  { className: "left-[3%] top-[3%] h-20 w-20 text-dusty-olive/15 rotate-6" },
  { className: "right-[2%] top-[10%] h-12 w-12 text-honey-gold/20 -rotate-[18deg]" },
  { className: "left-[1%] top-[50%] h-10 w-10 text-honey-gold/25 rotate-45" },
  { className: "right-[3%] top-[48%] h-16 w-16 text-dusty-olive/15 -rotate-6" },
  { className: "left-[5%] bottom-[5%] h-14 w-14 text-honey-gold/20 rotate-12" },
  { className: "right-[6%] bottom-[3%] h-24 w-24 text-dusty-olive/12 -rotate-12" },
];

const AREAS = [
  {
    heading: "Autism & Developmental Differences",
    body: "Supporting children across the autism spectrum with understanding and care.",
    Icon: SparkleIcon,
  },
  {
    heading: "Communication & Language",
    body: "For children building their voice and connection with others, at their own pace.",
    Icon: ChatBubbleIcon,
  },
  {
    heading: "Sensory Processing",
    body: "For children who experience sounds, textures, and spaces a little differently.",
    Icon: EyeIcon,
  },
  {
    heading: "Motor Skills & Coordination",
    body: "Supporting movement, strength, and physical confidence.",
    Icon: ActivityIcon,
  },
  {
    heading: "Social & Emotional Growth",
    body: "Helping children connect, share, and navigate feelings.",
    Icon: PeopleIcon,
  },
  {
    heading: "School Transitions",
    body: "Preparing children — and families — for a confident start to school.",
    Icon: GraduationCapIcon,
  },
] as const;

// Reframed supportively — everyday family language, not a clinical symptom
// list. See _specs/landing-page.md §3.9. Icons are content-specific (see
// ./icons.tsx) — badge sized h-12 (icon ~42% of that) suits this denser
// 6-card grid, a notch smaller than TrustStrip's 3 larger cards. Cards
// stagger in on scroll and lift on hover — see src/lib/motion.ts.
export function WhoWeHelp() {
  return (
    <Section
      eyebrow="WHO WE HELP"
      tone="soft-white"
      decorations={<HexScatter accents={HEX_ACCENTS} />}
    >
      <Reveal className="max-w-2xl">
        <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Areas We Support
        </h2>
        <p className="mt-4 font-body text-ink/70">
          Every child&rsquo;s journey looks different. Here are some of the
          ways we walk alongside children and families — wherever you&rsquo;re
          starting from.
        </p>
      </Reveal>

      <motion.div
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerContainer}
      >
        {AREAS.map((area, index) => {
          const isGold = index % 2 === 0;
          const tone = isGold ? "text-honey-gold" : "text-dusty-olive";
          const badgeBg = isGold ? "bg-honey-gold/10" : "bg-dusty-olive/10";
          const watermark = isGold ? "honey-gold" : "dusty-olive";
          return (
            <motion.div
              key={area.heading}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 transition duration-200 ease-gentle hover:-translate-y-1 hover:shadow-md"
            >
              <div className="pointer-events-none absolute -bottom-7 -right-7 h-28 w-28 opacity-[0.07]">
                <HoneycombPattern colourway={watermark} cellSize={16} />
              </div>
              <div
                className={cn(
                  "relative flex h-12 w-12 items-center justify-center rounded-full",
                  badgeBg,
                )}
              >
                <area.Icon className={cn("h-5 w-5", tone)} />
              </div>
              <h3 className="relative mt-4 font-heading text-base font-bold text-ink">
                {area.heading}
              </h3>
              <p className="relative mt-2 font-body text-sm text-ink/70">{area.body}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
