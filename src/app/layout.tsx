import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import { MotionConfig } from "motion/react";
import "./globals.css";

// Headings — per Brand Guideline (Fredoka Bold).
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: "700",
});

// Body — per Brand Guideline this should be Pliant (Regular / SemiBold).
// TODO(pliant-font): Pliant is a commercial typeface, not on Google Fonts, and no
// licensed webfont file exists in `_brand` yet. Once licensed, swap this for
// next/font/local pointing at the Pliant woff2 files and remove the Inter fallback.
const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nectar Milestone | Where Every Milestone Blossoms",
    template: "%s | Nectar Milestone",
  },
  description:
    "Nectar Milestone is an autism & special-needs early-intervention centre in Setiawangsa, Kuala Lumpur, supporting children and empowering parents, caregivers, and therapists through compassionate early intervention.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">
        {/* reducedMotion="user" makes every motion.* component site-wide
            automatically honour the OS-level prefers-reduced-motion setting —
            see src/lib/motion.ts for why that matters for this audience. */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
