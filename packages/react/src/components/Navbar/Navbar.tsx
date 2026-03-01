import type { ReactNode } from "react";

export interface NavbarProps {
  brand: ReactNode;
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function Navbar({
  brand,
  children,
  actions,
  className = "",
}: NavbarProps) {
  return (
    <nav className={`bru-navbar ${className}`}>
      <div className="bru-navbar__brand">{brand}</div>
      <div className="bru-navbar__links">{children}</div>
      {actions && <div className="bru-navbar__actions">{actions}</div>}
    </nav>
  );
}
