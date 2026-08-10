import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

export type SectionTone = "soft-white" | "honey-gold" | "dusty-olive" | "deep-gold";

export type SectionProps = {
  id?: string;
  /** Small uppercase kicker above the content, e.g. "BENEFITS", "OUR PROGRAMMES". */
  eyebrow?: string;
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  /** Decorative background layer (e.g. scattered HexOutline accents), rendered behind the content. */
  decorations?: ReactNode;
  children: ReactNode;
};

const TONE_BG: Record<SectionTone, string> = {
  "soft-white": "bg-soft-white text-ink",
  "honey-gold": "bg-honey-gold text-white",
  "dusty-olive": "bg-dusty-olive text-white",
  "deep-gold": "bg-deep-gold text-white",
};

const EYEBROW_TONE: Record<SectionTone, string> = {
  "soft-white": "text-honey-gold",
  "honey-gold": "text-white/80",
  "dusty-olive": "text-white/80",
  "deep-gold": "text-white/80",
};

// Consistent vertical rhythm for page sections, with an optional eyebrow
// kicker above the section content.
export function Section({
  id,
  eyebrow,
  tone = "soft-white",
  className,
  containerClassName,
  decorations,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-16 sm:py-20 lg:py-24",
        decorations ? "overflow-hidden" : undefined,
        TONE_BG[tone],
        className,
      )}
    >
      {decorations && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {decorations}
        </div>
      )}
      <Container className={cn("relative", containerClassName)}>
        {eyebrow && (
          <p
            className={cn(
              "mb-3 font-body text-sm font-semibold uppercase tracking-[0.2em]",
              EYEBROW_TONE[tone],
            )}
          >
            {eyebrow}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
