import { cn } from "@/lib/cn";
import { HEX_GLYPH_VIEW_BOX, HexGlyphPaths } from "./hex-glyph";

export type SuperGraphicProps = {
  className?: string;
  /** 0–1. Defaults to a translucent 0.12, matching the guideline's backdrop treatment. */
  opacity?: number;
};

// The enlarged, translucent profile-in-hexagon silhouette used as the
// signature hero/section backdrop device. Purely decorative — position and
// size it via className (e.g. `absolute -right-32 top-0 h-[140%] w-auto`)
// inside a `relative` parent; colour via a text-* class (defaults to honey-gold).
export function SuperGraphic({ className, opacity = 0.12 }: SuperGraphicProps) {
  return (
    <svg
      viewBox={HEX_GLYPH_VIEW_BOX}
      aria-hidden="true"
      className={cn("pointer-events-none select-none text-honey-gold", className)}
      style={{ opacity }}
    >
      <HexGlyphPaths />
    </svg>
  );
}
