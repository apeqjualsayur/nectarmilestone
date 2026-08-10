"use client";

import { motion } from "motion/react";
import { WHATSAPP_URL } from "@/content/contact";
import { cn } from "@/lib/cn";
import { fadeInUp, staggerContainer, VIEWPORT } from "@/lib/motion";
import { HexScatter, type HexAccent } from "./HexScatter";
import { HoneycombPattern } from "./HoneycombPattern";
import { CalendarCheckIcon, ClipboardCheckIcon, HeartIcon } from "./icons";
import { Section } from "./Section";

const HEX_ACCENTS: HexAccent[] = [
  { className: "left-[2%] top-[10%] h-14 w-14 text-honey-gold/20 rotate-12" },
  { className: "right-[3%] top-[6%] h-10 w-10 text-dusty-olive/20 -rotate-6" },
  { className: "left-[8%] bottom-[8%] h-8 w-8 text-dusty-olive/25 rotate-45" },
  { className: "right-[6%] bottom-[12%] h-20 w-20 text-honey-gold/15 -rotate-12" },
];

const SIGNALS = [
  {
    heading: "Evidence-Based & Family-Centred",
    body: "Every plan blends proven early-intervention practice with what matters most to your family.",
    Icon: ClipboardCheckIcon,
    tone: "text-honey-gold",
    badgeBg: "bg-honey-gold/10",
    watermark: "honey-gold",
  },
  {
    heading: "Qualified, Caring Therapists",
    body: "Our therapists are trained in autism and special-needs care, and treat every child with warmth and patience.",
    Icon: HeartIcon,
    tone: "text-dusty-olive",
    badgeBg: "bg-dusty-olive/10",
    watermark: "dusty-olive",
  },
] as const;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 10H16M16 10L11 5M16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const CARD_LIFT = "transition duration-200 ease-gentle hover:-translate-y-1 hover:shadow-md";

// Three honest signal cards — no experience-length claims, per the pre-launch
// guardrail in _specs/landing-page.md §2. Third card is the accent CTA.
// Icons are content-specific (see ./icons.tsx) rather than the repeated
// brand mark — badge sized h-14 (icon ~43% of that) suits these larger,
// fewer cards. Cards stagger in on scroll (see src/lib/motion.ts).
export function TrustStrip() {
  return (
    <Section tone="soft-white" decorations={<HexScatter accents={HEX_ACCENTS} />}>
      <motion.div
        className="grid gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerContainer}
      >
        {SIGNALS.map((signal) => (
          <motion.div
            key={signal.heading}
            variants={fadeInUp}
            className={cn(
              "relative overflow-hidden rounded-2xl border border-ink/10 bg-white p-8",
              CARD_LIFT,
            )}
          >
            <div className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 opacity-[0.07]">
              <HoneycombPattern colourway={signal.watermark} cellSize={18} />
            </div>
            <div
              className={cn(
                "relative flex h-14 w-14 items-center justify-center rounded-full",
                signal.badgeBg,
              )}
            >
              <signal.Icon className={cn("h-6 w-6", signal.tone)} />
            </div>
            <h3 className="relative mt-4 font-heading text-lg font-bold text-ink">
              {signal.heading}
            </h3>
            <p className="relative mt-2 font-body text-sm text-ink/70">{signal.body}</p>
          </motion.div>
        ))}

        <motion.a
          variants={fadeInUp}
          href={WHATSAPP_URL}
          className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-honey-gold p-8 text-white hover:bg-deep-gold active:scale-[0.98]",
            CARD_LIFT,
          )}
        >
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
              <CalendarCheckIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-bold">Ready to Begin?</h3>
            <p className="mt-2 font-body text-sm text-white/85">
              Book a consultation and take the first step together.
            </p>
          </div>
          <span className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold">
            Book a Consultation
            <ArrowIcon className="h-4 w-4 transition-transform duration-200 ease-gentle group-hover:translate-x-1" />
          </span>
        </motion.a>
      </motion.div>
    </Section>
  );
}
