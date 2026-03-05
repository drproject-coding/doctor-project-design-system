import type { ReactNode } from "react";

export interface TooltipProps {
  text: string;
  children: ReactNode;
  className?: string;
}

export function Tooltip({ text, children, className = "" }: TooltipProps) {
  return (
    <span className={`drp-tooltip ${className}`}>
      {children}
      <span className="drp-tooltip-text">{text}</span>
    </span>
  );
}
