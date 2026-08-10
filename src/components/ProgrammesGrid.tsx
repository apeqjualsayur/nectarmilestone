"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { PROGRAMMES } from "@/content/programmes";
import { fadeInUp, staggerContainer, VIEWPORT } from "@/lib/motion";
import { HexScatter, type HexAccent } from "./HexScatter";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const HEX_ACCENTS: HexAccent[] = [
  { className: "left-[2%] top-[4%] h-24 w-24 text-honey-gold/15 rotate-[8deg]" },
  { className: "right-[4%] top-[8%] h-16 w-16 text-dusty-olive/20 -rotate-12" },
  { className: "left-[62%] top-[2%] h-10 w-10 text-honey-gold/25 rotate-45" },
  { className: "left-[1%] top-[45%] h-14 w-14 text-dusty-olive/15 rotate-6" },
  { className: "right-[2%] top-[55%] h-20 w-20 text-honey-gold/10 -rotate-6" },
  { className: "left-[6%] bottom-[4%] h-12 w-12 text-dusty-olive/20 rotate-12" },
  { className: "right-[5%] bottom-[6%] h-28 w-28 text-honey-gold/15 -rotate-[15deg]" },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 14L14 6M14 6H7M14 6V13"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Card ids match the anchors the Header's Programmes dropdown and the Hero's
// "Explore Programmes" CTA already point to. No detail pages exist in this
// single-page site, so the arrow is a decorative "more to come" affordance,
// not a link — see Header.tsx / Hero.tsx. Cards stagger in on scroll and
// lift on hover, with the arrow nudging up-right — see src/lib/motion.ts.
export function ProgrammesGrid() {
  return (
    <Section
      id="programmes"
      eyebrow="OUR PROGRAMMES"
      tone="soft-white"
      decorations={<HexScatter accents={HEX_ACCENTS} />}
    >
      <Reveal className="max-w-2xl">
        <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Six Ways We Support Your Family
        </h2>
        <p className="mt-4 font-body text-ink/70">
          Every programme is built to work together — for your child, and for
          the parents, caregivers, and therapists supporting them.
        </p>
      </Reveal>

      <motion.div
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerContainer}
      >
        {PROGRAMMES.map((programme) => (
          <motion.article
            key={programme.slug}
            id={`programme-${programme.slug}`}
            variants={fadeInUp}
            className="group scroll-mt-24 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition duration-200 ease-gentle hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={programme.image}
                alt={programme.imageAlt}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 90vw"
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-heading text-lg font-bold text-ink">{programme.name}</h3>
              <p className="mt-2 font-body text-sm text-ink/70">{programme.blurb}</p>
              <div className="mt-4 flex justify-end">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-honey-gold text-honey-gold transition-transform duration-200 ease-gentle group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
