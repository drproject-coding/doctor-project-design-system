import type { ReactNode } from "react";

export interface AppShellProps {
  sidebar: ReactNode;
  topbar: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export interface SidebarProps {
  children: ReactNode;
  collapsed?: boolean;
}

export interface TopbarProps {
  children: ReactNode;
}

export function AppShell({ sidebar, topbar, children, footer }: AppShellProps) {
  return (
    <div className="drp-app">
      {sidebar}
      <div className="drp-main-wrapper">
        {topbar}
        <main className="drp-main">{children}</main>
        {footer && <footer className="drp-footer">{footer}</footer>}
      </div>
    </div>
  );
}

export function Sidebar({ children, collapsed }: SidebarProps) {
  const classes = ["drp-sidebar", collapsed && "drp-sidebar--collapsed"]
    .filter(Boolean)
    .join(" ");
  return <aside className={classes}>{children}</aside>;
}

export function Topbar({ children }: TopbarProps) {
  return <header className="drp-topbar">{children}</header>;
}
