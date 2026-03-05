import React from "react";
import { TopBar, TopBarProps } from "../TopBar";
import { Sidebar, SidebarProps } from "../Sidebar";

export interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarProps?: SidebarProps;
  topBarProps?: TopBarProps;
  showSidebar?: boolean;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  sidebarProps,
  topBarProps,
  showSidebar = true,
}) => {
  return (
    <div className="app-layout">
      {showSidebar && sidebarProps && <Sidebar {...sidebarProps} />}
      <div className="main-content">
        {topBarProps && <TopBar {...topBarProps} />}
        <div className="content">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};
