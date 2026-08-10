import type { ReactNode } from "react";
import {
  Button,
  Container,
  HexCell,
  HoneycombPattern,
  Section,
  SuperGraphic,
} from "@/components";

function DemoBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="font-heading text-lg font-bold text-ink">{title}</h3>
      {children}
    </div>
  );
}

function Swatch({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {children}
      <span className="font-body text-xs text-ink/60">{label}</span>
    </div>
  );
}

// Component-primitive gallery — not a real page. Each primitive from
// /components rendered in isolation so it can be checked before it's used
// to build actual sections.
export default function ComponentPreviewPage() {
  return (
    <main>
      <Section eyebrow="FOUNDATION" tone="soft-white">
        <h1 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
          Component Primitives
        </h1>
        <p className="mt-3 max-w-2xl font-body text-ink/70">
          Isolated previews of the reusable building blocks in{" "}
          <code className="rounded bg-ink/5 px-1.5 py-0.5 text-sm">/components</code>{" "}
          — Container, Section, Button, HexCell, HoneycombPattern, SuperGraphic.
        </p>
      </Section>

      <Section eyebrow="CONTAINER" className="border-t border-ink/10">
        <DemoBlock title="Max-width + responsive padding">
          <div className="bg-honey-gold/10">
            <Container>
              <div className="rounded bg-honey-gold/20 py-6 text-center font-body text-sm text-ink/70">
                max-w-7xl · px-4 sm:px-6 lg:px-8
              </div>
            </Container>
          </div>
        </DemoBlock>
      </Section>

      <Section eyebrow="SECTION" className="border-t border-ink/10">
        <DemoBlock title="Vertical rhythm, tones, and eyebrow label">
          <div className="overflow-hidden rounded-lg border border-ink/10">
            <Section eyebrow="BENEFITS" tone="soft-white" className="py-10">
              <p className="font-body text-sm text-ink/70">tone=&quot;soft-white&quot;</p>
            </Section>
            <Section eyebrow="OUR PROMISE" tone="dusty-olive" className="py-10">
              <p className="font-body text-sm text-white/90">tone=&quot;dusty-olive&quot;</p>
            </Section>
            <Section eyebrow="BOOK NOW" tone="honey-gold" className="py-10">
              <p className="font-body text-sm text-white/90">tone=&quot;honey-gold&quot;</p>
            </Section>
            <Section eyebrow="VISIT US" tone="deep-gold" className="py-10">
              <p className="font-body text-sm text-white/90">tone=&quot;deep-gold&quot;</p>
            </Section>
          </div>
        </DemoBlock>
      </Section>

      <Section eyebrow="BUTTON" className="border-t border-ink/10">
        <div className="space-y-8">
          <DemoBlock title="Variants">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Book a Consultation</Button>
              <Button variant="secondary">Explore Programmes</Button>
              <Button variant="ghost">Learn more</Button>
            </div>
          </DemoBlock>
          <DemoBlock title="As link (href) + disabled state">
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#" variant="primary">
                Primary link
              </Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
            </div>
          </DemoBlock>
        </div>
      </Section>

      <Section eyebrow="HEXCELL" className="border-t border-ink/10">
        <DemoBlock title="Colourways and sizes">
          <div className="flex flex-wrap items-end gap-8">
            <Swatch label="text-honey-gold">
              <HexCell className="h-20 w-20 text-honey-gold" />
            </Swatch>
            <Swatch label="text-dusty-olive">
              <HexCell className="h-20 w-20 text-dusty-olive" />
            </Swatch>
            <Swatch label="text-deep-gold, h-12 w-12">
              <HexCell className="h-12 w-12 text-deep-gold" />
            </Swatch>
          </div>
        </DemoBlock>
      </Section>

      <Section eyebrow="HONEYCOMB PATTERN" className="border-t border-ink/10">
        <DemoBlock title="Seamless tessellation, both colourways">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="h-48 overflow-hidden rounded-lg bg-soft-white">
              <HoneycombPattern colourway="honey-gold" cellSize={48} />
            </div>
            <div className="h-48 overflow-hidden rounded-lg bg-ink/5">
              <HoneycombPattern colourway="dusty-olive" cellSize={48} />
            </div>
          </div>
        </DemoBlock>
      </Section>

      <Section eyebrow="SUPERGRAPHIC" className="border-t border-ink/10">
        <DemoBlock title="Translucent hero/section backdrop device">
          <div className="relative h-64 overflow-hidden rounded-lg bg-dusty-olive/10">
            <SuperGraphic
              className="absolute -right-16 -top-10 h-[140%] w-auto text-honey-gold"
              opacity={0.18}
            />
            <div className="relative z-10 flex h-full max-w-sm items-center px-8">
              <p className="font-body text-sm text-ink/70">
                Backdrop demo — content sits above the silhouette via
                relative z-10.
              </p>
            </div>
          </div>
        </DemoBlock>
      </Section>
    </main>
  );
}
