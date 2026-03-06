import type { ReactNode } from "react";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastProps {
  variant?: ToastVariant;
  message: string;
  icon?: ReactNode;
  className?: string;
}

export function Toast({ variant, message, icon, className = "" }: ToastProps) {
  const classes = [
    "drp-toast",
    variant ? `drp-toast--${variant}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} role="status">
      {icon && <span>{icon}</span>}
      <span>{message}</span>
    </div>
  );
}
