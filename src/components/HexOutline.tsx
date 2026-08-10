import { HEX_GLYPH_VIEW_BOX, HexFrameGlyph } from "./hex-glyph";

export type HexOutlineProps = {
  className?: string;
};

// Just the brand mark's outer hexagon frame, no silhouette — a lighter-touch
// decorative accent (e.g. scattered behind a photo) than the full HexCell
// mark. Always decorative (aria-hidden). Colour via a text-* class, size via
// className.
export function HexOutline({ className }: HexOutlineProps) {
  return (
    <svg viewBox={HEX_GLYPH_VIEW_BOX} className={className} aria-hidden="true">
      <HexFrameGlyph />
    </svg>
  );
}
