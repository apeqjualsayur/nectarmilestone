import { useId } from "react";
import { cn } from "@/lib/cn";
import { HEX_GLYPH_VIEW_BOX, HexGlyphPaths } from "./hex-glyph";

const [, , GLYPH_WIDTH, GLYPH_HEIGHT] = HEX_GLYPH_VIEW_BOX.split(" ").map(Number);
const GLYPH_ASPECT = GLYPH_HEIGHT / GLYPH_WIDTH;

export type HoneycombColourway = "honey-gold" | "dusty-olive";

export type HoneycombPatternProps = {
  colourway?: HoneycombColourway;
  /** Width of one hex cell, in px. */
  cellSize?: number;
  className?: string;
};

const COLOUR_CLASSES: Record<HoneycombColourway, string> = {
  "honey-gold": "text-honey-gold",
  "dusty-olive": "text-dusty-olive",
};

// Seamless honeycomb tessellation of the HexCell mark, as an SVG pattern.
// Size the parent (e.g. `absolute inset-0`) and use as a section edge, side
// panel, or texture per the Brand Guideline.
export function HoneycombPattern({
  colourway = "honey-gold",
  cellSize = 64,
  className,
}: HoneycombPatternProps) {
  const patternId = useId();
  const cellHeight = cellSize * GLYPH_ASPECT;
  const scale = cellSize / GLYPH_WIDTH;

  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full", COLOUR_CLASSES[colourway], className)}
    >
      <defs>
        <pattern
          id={patternId}
          width={cellSize}
          height={cellHeight * 2}
          patternUnits="userSpaceOnUse"
        >
          {/* Row 1, flush with the tile's left edge. */}
          <g transform={`scale(${scale})`}>
            <HexGlyphPaths />
          </g>
          {/* Row 2, offset half a cell — drawn twice so it wraps seamlessly
              across the tile's left/right edges instead of clipping. */}
          <g transform={`translate(${cellSize / 2},${cellHeight}) scale(${scale})`}>
            <HexGlyphPaths />
          </g>
          <g transform={`translate(${cellSize / 2 - cellSize},${cellHeight}) scale(${scale})`}>
            <HexGlyphPaths />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
