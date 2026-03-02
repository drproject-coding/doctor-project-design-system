import type { ReactNode } from "react";

export interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({
  icon = "∅",
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`bru-empty ${className}`}
      style={{
        textAlign: "center",
        padding: "48px 24px",
        border: "2px dashed rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          fontSize: "48px",
          marginBottom: "16px",
          opacity: 0.3,
          fontFamily: "var(--bru-font-primary)",
          fontWeight: 800,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--bru-font-primary)",
          fontSize: "18px",
          fontWeight: 700,
          marginBottom: "8px",
          margin: "0 0 8px",
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            fontSize: "13px",
            color: "#666",
            maxWidth: "400px",
            margin: "0 auto 20px",
          }}
        >
          {description}
        </p>
      )}
      {action}
    </div>
  );
}
