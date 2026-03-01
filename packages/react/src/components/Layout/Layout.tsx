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
    <div className="bru-app">
      {sidebar}
      <div className="bru-main-wrapper">
        {topbar}
        <main className="bru-main">{children}</main>
        {footer && <footer className="bru-footer">{footer}</footer>}
      </div>
    </div>
  );
}

export function Sidebar({ children, collapsed }: SidebarProps) {
  const classes = ["bru-sidebar", collapsed && "bru-sidebar--collapsed"]
    .filter(Boolean)
    .join(" ");
  return <aside className={classes}>{children}</aside>;
}

export function Topbar({ children }: TopbarProps) {
  return <header className="bru-topbar">{children}</header>;
}
