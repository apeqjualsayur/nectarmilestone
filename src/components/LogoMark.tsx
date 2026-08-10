import Image from "next/image";
import { cn } from "@/lib/cn";

export type LogoMarkProps = {
  className?: string;
};

// Icon-only mark (hexagon, no wordmark), used as a faded corner watermark on
// dark-ground feature cards — see Approach.tsx / OurPromise.tsx. Decorative
// only: aria-hidden, sized via className (h-* w-auto keeps the intrinsic
// 1473x1607 ratio, matching the Logo.tsx pattern).
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <Image
      src="/brand/nectar-milestone-icon-white.svg"
      alt=""
      aria-hidden="true"
      width={1473}
      height={1607}
      className={cn("select-none", className)}
    />
  );
}
