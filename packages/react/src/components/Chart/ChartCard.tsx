import type { ReactNode } from "react";

type ChartSize = "sm" | "md" | "lg" | "xl";

export interface ChartCardProps {
  title: string;
  subtitle?: string;
  size?: ChartSize;
  children: ReactNode;
  legend?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export function ChartCard({
  title,
  subtitle,
  size,
  children,
  legend,
  action,
  className = "",
}: ChartCardProps) {
  const containerClasses = ["bru-chart-card", className]
    .filter(Boolean)
    .join(" ");

  const bodyClasses = [
    "bru-chart-container",
    size && `bru-chart-container--${size}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      <div className="bru-chart-header">
        <div>
          <h3 className="bru-card__title">{title}</h3>
          {subtitle && <p className="bru-card__subtitle">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className={bodyClasses}>{children}</div>
      {legend && <div className="bru-chart-legend">{legend}</div>}
    </div>
  );
}
