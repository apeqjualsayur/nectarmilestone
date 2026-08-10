import type { NextConfig } from "next";

// Static export for GitHub Pages, served from the custom domain
// (nectarmilestone.my) at the root — not a project subpath — so basePath /
// assetPrefix stay unset. See public/CNAME.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
