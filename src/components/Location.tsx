"use client";

import { motion } from "motion/react";
import { CONTACT, EMAIL_HREF, MAPS_EMBED_SRC, MAPS_SEARCH_URL, TEL_HREF, WHATSAPP_URL } from "@/content/contact";
import { fadeInUp, staggerContainer, VIEWPORT } from "@/lib/motion";
import { Button } from "./Button";
import { HexScatter, type HexAccent } from "./HexScatter";
import { HoneycombPattern } from "./HoneycombPattern";
import { ClockIcon, EnvelopeIcon, PhoneIcon, PinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const HEX_ACCENTS: HexAccent[] = [
  { className: "left-[2%] top-[4%] h-16 w-16 text-honey-gold/15 rotate-[10deg]" },
  { className: "right-[3%] top-[2%] h-10 w-10 text-dusty-olive/20 -rotate-6" },
  { className: "left-[1%] top-[55%] h-12 w-12 text-dusty-olive/15 rotate-6" },
  { className: "left-[8%] bottom-[3%] h-8 w-8 text-honey-gold/25 rotate-45" },
  { className: "right-[4%] bottom-[5%] h-20 w-20 text-honey-gold/12 -rotate-[15deg]" },
];

const DETAILS = [
  { label: "Address", value: CONTACT.address, href: MAPS_SEARCH_URL, Icon: PinIcon },
  { label: "Hours", value: CONTACT.hours, href: null, Icon: ClockIcon },
  {
    label: "Phone & WhatsApp",
    value: CONTACT.phoneDisplay,
    href: TEL_HREF,
    secondary: { label: "Chat on WhatsApp", href: WHATSAPP_URL },
    Icon: PhoneIcon,
  },
  { label: "Email", value: CONTACT.email, href: EMAIL_HREF, Icon: EnvelopeIcon },
];

// Single Setiawangsa centre — no multi-city tabs. See
// _specs/landing-page.md §3.11. Icons are content-specific (see ./icons.tsx)
// — badge sized h-9 (icon ~44% of that) suits this compact 4-row list,
// smaller than the card-grid sections since it's a dense stack, not tiles.
// Contact card and map arrive as a pair — see src/lib/motion.ts.
export function Location() {
  return (
    <Section
      id="location"
      eyebrow="VISIT US"
      tone="soft-white"
      decorations={<HexScatter accents={HEX_ACCENTS} />}
    >
      <Reveal className="max-w-2xl">
        <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Visit Us in Setiawangsa
        </h2>
        <p className="mt-4 font-body text-ink/70">
          One centre, one team, ready to welcome your family — in the heart
          of Setiawangsa, Kuala Lumpur.
        </p>
      </Reveal>

      <motion.div
        className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-stretch"
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeInUp}
          className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-8 sm:p-10"
        >
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 opacity-[0.06]">
            <HoneycombPattern colourway="honey-gold" cellSize={20} />
          </div>
          <dl className="relative space-y-6">
            {DETAILS.map((detail) => (
              <div key={detail.label} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-honey-gold/10">
                  <detail.Icon className="h-4 w-4 text-honey-gold" />
                </div>
                <div>
                  <dt className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-honey-gold">
                    {detail.label}
                  </dt>
                  <dd className="mt-1 font-body text-base text-ink">
                    {detail.href ? (
                      <a href={detail.href} className="transition-colors hover:text-honey-gold">
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                    {"secondary" in detail && detail.secondary && (
                      <>
                        {" "}
                        <a
                          href={detail.secondary.href}
                          className="font-body text-sm text-dusty-olive underline underline-offset-2 transition-colors hover:text-honey-gold"
                        >
                          ({detail.secondary.label})
                        </a>
                      </>
                    )}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
          <Button href={WHATSAPP_URL} variant="primary" className="relative mt-8">
            Book a Consultation
          </Button>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="relative min-h-[320px] overflow-hidden rounded-3xl bg-dusty-olive/10"
        >
          <iframe
            src={MAPS_EMBED_SRC}
            title="Nectar Milestone location map"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
    </Section>
  );
}
