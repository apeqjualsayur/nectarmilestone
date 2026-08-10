"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { PROGRAMMES } from "@/content/programmes";
import { WHATSAPP_URL } from "@/content/contact";
import { DURATION, EASE_GENTLE } from "@/lib/motion";

const NAV_LINKS = [
  { label: "About", href: "#approach" },
  { label: "Contact", href: "#location" },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProgrammesMenu() {
  return (
    <div className="group relative">
      <button
        type="button"
        aria-haspopup="true"
        className="flex items-center gap-1 font-body text-sm font-semibold text-ink transition-colors hover:text-honey-gold"
      >
        Programmes
        <ChevronIcon className="h-4 w-4 transition-transform duration-200 ease-gentle group-focus-within:rotate-180 group-hover:rotate-180" />
      </button>
      <div
        className="invisible absolute left-1/2 top-full z-20 w-80 -translate-x-1/2 pt-3 opacity-0
          transition duration-200 ease-gentle group-hover:visible group-hover:opacity-100
          group-focus-within:visible group-focus-within:opacity-100"
      >
        <ul className="rounded-xl border border-ink/10 bg-white p-2 shadow-lg">
          {PROGRAMMES.map((programme) => (
            <li key={programme.slug}>
              <a
                href={`#programme-${programme.slug}`}
                className="block rounded-lg px-3 py-2 transition-colors hover:bg-honey-gold/10"
              >
                <span className="block font-body text-sm font-semibold text-ink">
                  {programme.name}
                </span>
                <span className="block font-body text-xs text-ink/60">{programme.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Primary site header. Sticky on scroll; Programmes uses a CSS-only
// hover/focus dropdown, the mobile panel below `lg` needs the toggle state.
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-soft-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Nectar Milestone home">
          <Logo className="h-9 w-auto sm:h-10" priority />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <ProgrammesMenu />
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-semibold text-ink transition-colors hover:text-honey-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button href={WHATSAPP_URL} variant="primary">
              Book a Consultation
            </Button>
          </div>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              {mobileOpen ? (
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: DURATION.fast, ease: EASE_GENTLE }}
            className="border-t border-ink/10 bg-soft-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              <p className="px-3 pb-1 font-body text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                Programmes
              </p>
              {PROGRAMMES.map((programme) => (
                <a
                  key={programme.slug}
                  href={`#programme-${programme.slug}`}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 font-body text-sm text-ink transition-colors hover:bg-honey-gold/10"
                >
                  {programme.name}
                </a>
              ))}
              <div className="my-2 border-t border-ink/10" />
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2 font-body text-sm font-semibold text-ink transition-colors hover:bg-honey-gold/10"
                >
                  {link.label}
                </a>
              ))}
              <Button href={WHATSAPP_URL} variant="primary" className="mt-3">
                Book a Consultation
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
