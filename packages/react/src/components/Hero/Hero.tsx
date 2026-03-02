import type { ReactNode } from "react";

export interface HeroProps {
  badge?: ReactNode;
  title: ReactNode;
  subtitle?: string;
  actions?: ReactNode;
  visual?: ReactNode;
  className?: string;
}

export function Hero({
  badge,
  title,
  subtitle,
  actions,
  visual,
  className = "",
}: HeroProps) {
  return (
    <section className={`bru-hero ${className}`}>
      <div className="bru-hero__content">
        {badge && <div className="bru-hero__badge">{badge}</div>}
        <h1 className="bru-hero__title">{title}</h1>
        {subtitle && <p className="bru-hero__subtitle">{subtitle}</p>}
        {actions && <div className="bru-hero__actions">{actions}</div>}
      </div>
      {visual && <div className="bru-hero__visual">{visual}</div>}
    </section>
  );
}
