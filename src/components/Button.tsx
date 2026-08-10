import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonOwnProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

// Hover: gentle lift + shadow (transform/box-shadow/colors only — GPU-friendly,
// no layout properties). Active: quick press-down for tactile feedback, on a
// shorter duration than the hover so the press reads as immediate. Timing
// mirrors DURATION.fast / EASE_GENTLE in src/lib/motion.ts.
const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition duration-200 ease-gentle hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.97] active:duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey-gold focus-visible:ring-offset-2 focus-visible:ring-offset-soft-white disabled:pointer-events-none disabled:opacity-50";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-honey-gold text-white hover:bg-deep-gold",
  secondary:
    "border-2 border-dusty-olive text-dusty-olive bg-transparent hover:bg-dusty-olive hover:text-white",
  ghost: "text-ink hover:bg-honey-gold/10 hover:text-honey-gold",
};

// primary = honey-gold fill, secondary = dusty-olive outline, ghost = text-only.
// Pass `href` to render an <a>; omit it to render a <button>.
export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = cn(BASE, VARIANT_CLASSES[variant], className);

  if (props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchor;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as Omit<ButtonAsButton, "href">;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
