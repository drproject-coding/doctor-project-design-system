import React from "react";

export interface TopBarProps {
  title?: string;
  actions?: React.ReactNode;
  menuButton?: boolean;
  onMenuClick?: () => void;
  className?: string;
}

export const TopBar: React.FC<TopBarProps> = ({
  title,
  actions,
  menuButton = false,
  onMenuClick,
  className = "",
}) => {
  return (
    <header className={`topbar ${className}`}>
      <div className="topbar-left">
        {menuButton && (
          <button className="topbar-menu-btn" onClick={onMenuClick}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        )}
        {title && <h1 className="topbar-title">{title}</h1>}
      </div>
      {actions && <div className="topbar-right">{actions}</div>}
    </header>
  );
};
