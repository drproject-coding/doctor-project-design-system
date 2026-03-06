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
  /** Icon element placed before the label */
  iconLeft?: ReactNode;
  /** Icon element placed after the label */
  iconRight?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant,
  size,
  block,
  icon,
  iconLeft,
  iconRight,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "drp-btn",
    variant && `drp-btn--${variant}`,
    size && `drp-btn--${size}`,
    block && "drp-btn--block",
    icon && "drp-btn--icon",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {iconLeft && <span className="drp-btn__icon">{iconLeft}</span>}
      {children}
      {iconRight && <span className="drp-btn__icon">{iconRight}</span>}
    </button>
  );
}
