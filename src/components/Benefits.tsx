"use client";

import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";
import benefit1 from "@/assets/benefit1.png";
import benefit2 from "@/assets/benefit2.png";
import { cn } from "@/lib/cn";
import { fadeInUp, staggerContainer, VIEWPORT } from "@/lib/motion";
import { HexScatter, type HexAccent } from "./HexScatter";
import { BackpackIcon, ChatBubbleIcon, GraduationCapIcon, PeopleIcon } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const HEX_ACCENTS: HexAccent[] = [
  { className: "right-[3%] top-[2%] h-12 w-12 text-honey-gold/20 rotate-12" },
  { className: "left-[1%] top-[40%] h-16 w-16 text-dusty-olive/15 -rotate-6" },
  { className: "right-[1%] top-[35%] h-10 w-10 text-honey-gold/20 rotate-[20deg]" },
  { className: "left-[4%] bottom-[4%] h-14 w-14 text-dusty-olive/20 rotate-6" },
  { className: "right-[5%] bottom-[2%] h-24 w-24 text-honey-gold/12 -rotate-[10deg]" },
];

const OUTCOMES = [
  {
    label: "Communication confidence",
    tone: "honey-gold",
    Icon: ChatBubbleIcon,
    position: "left-[4%] top-[6%]",
  },
  {
    label: "Everyday independence",
    tone: "dusty-olive",
    Icon: BackpackIcon,
    position: "left-[54%] top-[20%]",
  },
  {
    label: "Social connection",
    tone: "dusty-olive",
    Icon: PeopleIcon,
    position: "left-[8%] top-[64%]",
  },
  {
    label: "Smoother transitions to school",
    tone: "honey-gold",
    Icon: GraduationCapIcon,
    position: "left-[50%] top-[76%]",
  },
] as const;

function CollageTile({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-md">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 22vw, 45vw"
        className="object-cover"
      />
    </div>
  );
}

const OUTCOME_CARD =
  "flex items-center gap-3 rounded-2xl bg-white transition duration-200 ease-gentle hover:-translate-y-1";

// Real child+carer photography (src/assets/benefit1.png, benefit2.png) —
// chosen to echo the outcome cards floating over them: reading together for
// communication, and a child dressing herself for everyday independence.
// Outcome icons are content-specific (see ./icons.tsx) rather than the
// repeated brand mark. Collage + outcome cards stagger in on scroll — see
// src/lib/motion.ts.
export function Benefits() {
  return (
    <Section
      eyebrow="BENEFITS"
      tone="soft-white"
      decorations={<HexScatter accents={HEX_ACCENTS} />}
    >
      <Reveal className="max-w-2xl">
        <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          What Families Can Look Forward To
        </h2>
        <p className="mt-4 font-body text-ink/70">
          Early intervention isn&rsquo;t only about your child&rsquo;s
          progress — it&rsquo;s about giving your whole family more
          confidence, connection, and calm along the way.
        </p>
      </Reveal>

      <div className="relative mt-12">
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="lg:mt-12">
            <CollageTile
              src={benefit1}
              alt="A carer reading a storybook together with a joyful child"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CollageTile
              src={benefit2}
              alt="A child independently putting on her backpack while her smiling carer looks on"
            />
          </motion.div>
        </motion.div>

        {/* Floating outcome cards over the collage — desktop only; see the
            stacked grid below for the small-screen equivalent. */}
        <motion.div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={staggerContainer}
        >
          {OUTCOMES.map((outcome) => (
            <motion.div
              key={outcome.label}
              variants={fadeInUp}
              className={cn("pointer-events-auto absolute w-56 p-4 shadow-lg hover:shadow-xl", outcome.position, OUTCOME_CARD)}
            >
              <outcome.Icon
                className={cn(
                  "h-8 w-8 shrink-0",
                  outcome.tone === "honey-gold" ? "text-honey-gold" : "text-dusty-olive",
                )}
              />
              <span className="font-body text-sm font-semibold text-ink">{outcome.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerContainer}
      >
        {OUTCOMES.map((outcome) => (
          <motion.div
            key={outcome.label}
            variants={fadeInUp}
            className={cn("border border-ink/10 p-4", OUTCOME_CARD)}
          >
            <outcome.Icon
              className={cn(
                "h-8 w-8 shrink-0",
                outcome.tone === "honey-gold" ? "text-honey-gold" : "text-dusty-olive",
              )}
            />
            <span className="font-body text-sm font-semibold text-ink">{outcome.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
