import React from "react";
import { TopBar, TopBarProps } from "../TopBar";
import { Sidebar, SidebarProps } from "../Sidebar";

export interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebarProps?: SidebarProps;
  topBarProps?: TopBarProps;
  showSidebar?: boolean;
  theme?: "light" | "dark";
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  sidebarProps,
  topBarProps,
  showSidebar = true,
  theme = "light",
}) => {
  return (
    <div className="flex h-screen">
      {showSidebar && sidebarProps && (
        <Sidebar {...sidebarProps} theme={theme} />
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        {topBarProps && <TopBar {...topBarProps} theme={theme} />}
        <div className="flex-1 overflow-auto bg-gray-50 p-6">{children}</div>
      </div>
    </div>
  );
};
