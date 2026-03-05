import React from "react";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: SidebarItem[];
  active?: boolean;
}

export interface SidebarProps {
  items: SidebarItem[];
  theme?: "light" | "dark";
  collapsed?: boolean;
  onItemClick?: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  theme = "light",
  collapsed = false,
  onItemClick,
}) => {
  const bgClass = theme === "dark" ? "bg-slate-900" : "bg-white";
  const borderClass = theme === "dark" ? "border-slate-700" : "border-gray-200";
  const textClass = theme === "dark" ? "text-slate-300" : "text-gray-700";

  const renderItems = (items: SidebarItem[], level = 0) => {
    return items.map((item) => (
      <div key={item.id}>
        <button
          onClick={() => onItemClick?.(item.id)}
          className={`w-full text-left px-4 py-2 rounded flex items-center gap-2 ${
            item.active ? "bg-blue-100 text-blue-700" : textClass
          } hover:bg-gray-100`}
          style={{ paddingLeft: `${(level + 1) * 1.5}rem` }}
        >
          {item.icon && <span className="w-5 h-5">{item.icon}</span>}
          {!collapsed && <span>{item.label}</span>}
        </button>
        {item.children && !collapsed && renderItems(item.children, level + 1)}
      </div>
    ));
  };

  return (
    <div
      className={`${bgClass} border-r ${borderClass} w-${collapsed ? "20" : "64"} transition-all`}
    >
      <div className="p-4">{renderItems(items)}</div>
    </div>
  );
};
