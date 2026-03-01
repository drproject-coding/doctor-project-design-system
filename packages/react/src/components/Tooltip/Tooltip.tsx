import type { ReactNode } from "react";

export interface TooltipProps {
  text: string;
  children: ReactNode;
  className?: string;
}

export function Tooltip({ text, children, className = "" }: TooltipProps) {
  return (
    <span className={`bru-tooltip ${className}`}>
      {children}
      <span className="bru-tooltip-text">{text}</span>
    </span>
  );
}
