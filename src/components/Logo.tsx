import Image from "next/image";

export type LogoProps = {
  className?: string;
  /** "color" (default) for light grounds, "white" for dark/colour grounds. */
  variant?: "color" | "white";
  /** Set true for above-the-fold usage (e.g. the header). */
  priority?: boolean;
};

const SOURCES: Record<NonNullable<LogoProps["variant"]>, string> = {
  color: "/brand/nectar-milestone-logo.svg",
  white: "/brand/nectar-milestone-logo-white.svg",
};

// Primary logo lockup (hexagon icon + wordmark), from
// _brand/NM Logo_Horizontal_Color.svg / _White.svg. Intrinsic size fixes the
// aspect ratio; scale the rendered size via className (e.g. h-9 w-auto).
export function Logo({ className, variant = "color", priority = false }: LogoProps) {
  return (
    <Image
      src={SOURCES[variant]}
      alt="Nectar Milestone"
      width={220}
      height={74}
      priority={priority}
      className={className}
    />
  );
}
