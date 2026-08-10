"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer, VIEWPORT } from "@/lib/motion";
import { HexCell } from "./HexCell";
import { HexScatter, type HexAccent } from "./HexScatter";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const OPEN_ROLES = ["Speech Therapist", "Occupational Therapist", "Physiotherapist"];

const HEX_ACCENTS: HexAccent[] = [
  { className: "left-[3%] top-[6%] h-16 w-16 text-honey-gold/20 rotate-12" },
  { className: "right-[4%] top-[10%] h-10 w-10 text-dusty-olive/25 -rotate-6" },
  { className: "left-[2%] top-[50%] h-12 w-12 text-dusty-olive/15 rotate-[20deg]" },
  { className: "right-[3%] bottom-[8%] h-20 w-20 text-honey-gold/15 -rotate-12" },
  { className: "left-[42%] bottom-[2%] h-8 w-8 text-honey-gold/25 rotate-45" },
];

function AtIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13.5 10V11.5C13.5 12.6 14.4 13.5 15.5 13.5C16.6 13.5 17.5 12.6 17.5 11.5V10C17.5 6.41 14.59 3.5 11 3.5C7.41 3.5 4.5 6.41 4.5 10C4.5 13.59 7.41 16.5 11 16.5C12.3 16.5 13.5 16.12 14.51 15.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 5.5C4 4.67 4.67 4 5.5 4H14.5C15.33 4 16 4.67 16 5.5V11.5C16 12.33 15.33 13 14.5 13H8L5 16V13H5.5C4.67 13 4 12.33 4 11.5V5.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 3.5C11.8 5.4 12.75 7.65 12.75 10C12.75 12.35 11.8 14.6 10 16.5C8.2 14.6 7.25 12.35 7.25 10C7.25 7.65 8.2 5.4 10 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M3.75 10H16.25" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const PLACEHOLDER_SOCIALS = [AtIcon, ChatIcon, GlobeIcon];

function TeamCard({ role }: { role: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl border border-ink/10 bg-white p-6 text-center transition duration-200 ease-gentle hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-honey-gold/10">
        <HexCell className="h-12 w-12 text-honey-gold" />
      </div>
      <p className="mt-4 font-heading text-base font-bold text-ink">To Be Announced</p>
      <p className="mt-1 font-body text-sm text-ink/60">{role}</p>
      <div className="mt-4 flex justify-center gap-2">
        {PLACEHOLDER_SOCIALS.map((Icon, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/10 text-ink/25"
          >
            <Icon className="h-4 w-4" />
          </span>
        ))}
      </div>
      <span className="sr-only">Profile and social links coming soon</span>
    </motion.div>
  );
}

// Practitioners aren't confirmed yet — clearly labelled placeholders, no
// invented names, per _specs/landing-page.md §3.8. Cards stagger in on
// scroll and lift on hover — see src/lib/motion.ts.
export function Team() {
  return (
    <Section
      eyebrow="OUR TEAM"
      tone="soft-white"
      decorations={<HexScatter accents={HEX_ACCENTS} />}
    >
      <Reveal className="max-w-2xl">
        <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Meet the Team Behind Every Milestone
        </h2>
        <p className="mt-4 font-body text-ink/70">
          We&rsquo;re building a team of qualified, compassionate therapists —
          profiles will be introduced here as they join us.
        </p>
      </Reveal>

      <motion.div
        className="mt-12 grid gap-6 sm:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerContainer}
      >
        {OPEN_ROLES.map((role) => (
          <TeamCard key={role} role={role} />
        ))}
      </motion.div>
    </Section>
  );
}
