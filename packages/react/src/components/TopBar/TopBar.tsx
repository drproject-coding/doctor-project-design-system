import React from "react";

export interface TopBarProps {
  title?: string;
  showIcon?: boolean;
  theme?: "light" | "dark";
  actions?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

export const TopBar: React.FC<TopBarProps> = ({
  title,
  showIcon = true,
  theme = "light",
  actions,
  breadcrumbs,
}) => {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 border-b ${
        theme === "dark"
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center gap-4">
        {breadcrumbs && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span>/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-gray-700">
                    {crumb.label}
                  </a>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        {title && <h1 className="text-xl font-semibold">{title}</h1>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
};
