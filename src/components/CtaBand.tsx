import { EMAIL_HREF, WHATSAPP_URL } from "@/content/contact";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { HexOutline } from "./HexOutline";
import { Reveal } from "./Reveal";

// Concentric brand-hexagon "ripple" rings, largest/faintest outermost —
// same idea as the reference's radiating circles, swapped for our hexagon
// outline so it stays inside the design system.
const HEX_RINGS = [
  "h-[90px] w-[90px] text-white/40",
  "h-[150px] w-[150px] text-white/32",
  "h-[210px] w-[210px] text-white/24",
  "h-[270px] w-[270px] text-white/18",
  "h-[330px] w-[330px] text-white/12",
  "h-[400px] w-[400px] text-white/8",
];

const CTA_LINK =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm font-semibold transition duration-200 ease-gentle hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.97] active:duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-honey-gold";

// Single combined CTA (was two colour blocks side by side) — honey-gold,
// our primary action colour, carries both contact paths: WhatsApp
// (primary) and email (secondary). See src/content/contact.ts.
export function CtaBand() {
  return (
    <section className="bg-soft-white py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-honey-gold px-8 py-14 text-white sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4"
            aria-hidden="true"
          >
            <div className="relative h-[400px] w-[400px]">
              {HEX_RINGS.map((ring, index) => (
                <HexOutline
                  key={index}
                  className={cn(
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                    ring,
                  )}
                />
              ))}
            </div>
          </div>

          <div className="relative max-w-lg">
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Let&rsquo;s Get in Touch
            </h2>
            <p className="mt-4 font-body text-white/85">
              Ready to book, or just want to ask a question first? Reach out
              however&rsquo;s easiest for you — no pressure, no obligation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WHATSAPP_URL} className={cn(CTA_LINK, "bg-white text-honey-gold hover:bg-soft-white")}>
                Book a Consultation
              </a>
              <a
                href={EMAIL_HREF}
                className={cn(
                  CTA_LINK,
                  "border-2 border-white text-white hover:bg-white hover:text-honey-gold",
                )}
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
