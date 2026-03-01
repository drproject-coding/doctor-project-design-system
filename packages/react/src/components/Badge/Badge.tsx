import type { ReactNode } from "react";

type BadgeVariant =
  | "filled"
  | "primary"
  | "secondary"
  | "outline"
  | "mint"
  | "pink";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant, className = "" }: BadgeProps) {
  const classes = ["bru-badge", variant && `bru-badge--${variant}`, className]
    .filter(Boolean)
    .join(" ");
  return <span className={classes}>{children}</span>;
}
