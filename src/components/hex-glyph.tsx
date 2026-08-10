import type { ReactNode } from "react";

// Shared geometry for the brand mark — hexagon frame + child-profile
// silhouette — traced from `_brand/NM Logo_Icon_Color.svg`. Both paths are
// monochrome in the source file; colour is applied via `currentColor` so
// consumers can set it with a Tailwind text-* class.

export const HEX_GLYPH_VIEW_BOX = "0 0 1473 1607";

const HEX_FRAME_D =
  "M13868.802,6030.54C13881.448,6023.239 13897.028,6023.239 13909.674,6030.54L13968.897,6064.732C13981.543,6072.033 13989.333,6085.526 13989.333,6100.128L13989.333,6168.513C13989.333,6183.115 13981.543,6196.608 13968.897,6203.909L13909.674,6238.101C13897.028,6245.402 13881.448,6245.402 13868.802,6238.101L13809.58,6203.909C13796.934,6196.608 13789.144,6183.115 13789.144,6168.513L13789.144,6100.128C13789.144,6085.526 13796.934,6072.033 13809.58,6064.732L13868.802,6030.54ZM13872.802,6037.468L13813.58,6071.66C13803.409,6077.532 13797.144,6088.384 13797.144,6100.128L13797.144,6168.513C13797.144,6180.257 13803.409,6191.108 13813.58,6196.98L13872.803,6231.173C13882.973,6237.045 13895.504,6237.045 13905.674,6231.173L13964.897,6196.98C13975.067,6191.108 13981.333,6180.257 13981.333,6168.513L13981.333,6100.128C13981.333,6088.384 13975.067,6077.532 13964.897,6071.66L13905.674,6037.468C13895.504,6031.596 13882.973,6031.596 13872.802,6037.468Z";

const SILHOUETTE_D =
  "M13895.442,6196.857L13867.557,6202.478C13862.884,6203.42 13857.983,6202.137 13854.702,6199.111L13807.878,6155.939C13804.597,6152.913 13803.433,6148.605 13804.825,6144.638L13824.694,6088.022C13826.087,6084.054 13829.824,6081.03 13834.497,6080.088C13834.497,6080.088 13875.088,6071.906 13882.279,6070.456C13882.991,6070.313 13883.738,6070.383 13884.397,6070.656C13892.837,6074.171 13898.153,6078.687 13899.703,6080.044C13908.995,6088.174 13916.373,6111.38 13915.775,6119.956C13915.019,6130.787 13912.448,6134.277 13924.403,6140.666C13932.92,6145.219 13923.63,6152.519 13924.661,6155.396C13925.564,6157.92 13928.694,6159.975 13926.151,6163.202C13924.36,6165.474 13925.325,6165.733 13925.188,6168.67C13925.007,6172.527 13921.283,6171.926 13921.677,6178.105C13922.753,6195.011 13906.473,6193.71 13895.442,6196.857Z";

// Outer transform chain reproduced exactly from the source SVG — maps the
// raw path coordinates into HEX_GLYPH_VIEW_BOX. Shared by both the full mark
// and the frame-only variant so they line up identically.
function HexGlyphOuterTransform({ children }: { children: ReactNode }) {
  return (
    <g transform="matrix(1,0,0,1,-28433,-1073)">
      <g transform="matrix(2.804481,0,0,2.804481,-16825.836482,-776.579025)">
        <g transform="matrix(3.702936,0,0,3.702936,-41944.288041,-2937.171282)">{children}</g>
      </g>
    </g>
  );
}

// Full brand mark: hexagon frame + child-profile silhouette.
export function HexGlyphPaths() {
  return (
    <HexGlyphOuterTransform>
      <g transform="matrix(0.707744,0,0,0.707744,5926.363034,-3292.844128)">
        <path d={HEX_FRAME_D} fill="currentColor" fillRule="evenodd" />
      </g>
      <g transform="matrix(0.676312,-0.205033,0.237348,0.782903,4910.191694,-907.326435)">
        <path d={SILHOUETTE_D} fill="currentColor" fillRule="evenodd" />
      </g>
    </HexGlyphOuterTransform>
  );
}

// Just the outer hexagon frame — no silhouette. Used for small decorative
// accents (e.g. scattered behind the hero photo) where the full brand mark
// would be too literal.
export function HexFrameGlyph() {
  return (
    <HexGlyphOuterTransform>
      <g transform="matrix(0.707744,0,0,0.707744,5926.363034,-3292.844128)">
        <path d={HEX_FRAME_D} fill="currentColor" fillRule="evenodd" />
      </g>
    </HexGlyphOuterTransform>
  );
}
