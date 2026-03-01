import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "outline"
  | "ghost"
  | "ghost-bordered"
  | "danger"
  | "secondary"
  | "dark";
type ButtonSize = "sm" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  icon?: boolean;
  children: ReactNode;
}

export function Button({
  variant,
  size,
  block,
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "bru-btn",
    variant && `bru-btn--${variant}`,
    size && `bru-btn--${size}`,
    block && "bru-btn--block",
    icon && "bru-btn--icon",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
