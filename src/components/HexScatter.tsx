import { cn } from "@/lib/cn";
import { HexOutline } from "./HexOutline";

export type HexAccent = {
  /** Position, size, colour/opacity, and rotation — e.g. "left-[6%] top-[10%] h-16 w-16 text-honey-gold/20 rotate-12". */
  className: string;
};

// Scattered HexOutline accents for a section's decorative background layer —
// pass via <Section decorations={...}>. Positions/sizes are hand-placed
// (not Math.random(), which would cause a server/client hydration mismatch)
// but varied enough to read as organic scatter rather than a grid.
export function HexScatter({ accents }: { accents: HexAccent[] }) {
  return (
    <>
      {accents.map((accent, index) => (
        <HexOutline key={index} className={cn("absolute", accent.className)} />
      ))}
    </>
  );
}
