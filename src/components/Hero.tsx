import Image from "next/image";
import heroImage from "@/assets/hero.png";
import { WHATSAPP_URL } from "@/content/contact";
import { Button } from "./Button";
import { Container } from "./Container";
import { HeroHexDrift } from "./HeroHexDrift";

// Real child+carer photography (src/assets/hero.png) as a plain rounded-corner
// photo card, with small hexagon-frame accents (the logo's outer shape, no
// silhouette) scattered behind it — see _specs/landing-page.md §3.3.
//
// Deliberately no mount/scroll entrance animation on the headline, copy, CTAs,
// or photo: this is the one section visible immediately at load with no
// scrolling, so animating its opacity in would risk a flash-of-hidden-content
// if hydration is slow. It's server-rendered fully visible from the start.
// Only the purely decorative hex accents (HeroHexDrift) get any motion.
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft-white">
      <Container className="grid gap-12 pb-8 pt-16 sm:pb-10 sm:pt-20 lg:grid-cols-2 lg:items-center lg:pb-12 lg:pt-28">
        <div>
          <h1 className="text-balance font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Confidence Grows, One <span className="text-honey-gold">Milestone</span> at a Time
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg text-ink/75">
            At Nectar Milestone, parents, caregivers, and therapists work side
            by side — with practical tools and compassionate early
            intervention that celebrate every step forward, big or small.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={WHATSAPP_URL} variant="primary">
              Book a Consultation
            </Button>
            <Button href="#programmes" variant="secondary">
              Explore Programmes
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-honey-gold/15 via-deep-gold/10 to-dusty-olive/15 blur-2xl" />

          <HeroHexDrift />

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={heroImage}
              alt="A carer and a young child smiling together while playing with a wooden stacking toy"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              style={{ objectPosition: "68% center" }}
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
