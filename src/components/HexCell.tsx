import { HEX_GLYPH_VIEW_BOX, HexGlyphPaths } from "./hex-glyph";

export type HexCellProps = {
  className?: string;
  /** Accessible label. Omit to render as a decorative (aria-hidden) mark. */
  label?: string;
};

// The brand mark: hexagon frame + child-profile silhouette. Colour comes from
// `currentColor` — set it via a Tailwind text-* class (text-honey-gold,
// text-dusty-olive, ...). Size via className (e.g. h-10 w-10).
export function HexCell({ className, label }: HexCellProps) {
  return (
    <svg
      viewBox={HEX_GLYPH_VIEW_BOX}
      className={className}
      role={label ? "img" : undefined}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <HexGlyphPaths />
    </svg>
  );
}
