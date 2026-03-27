import type { ReactNode } from "react";

export interface EmptyStateProps {
  icon?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

/**
 * Centered placeholder shown when a list or data region has no content — always provide an `action` with a clear next step so users are never left without guidance.
 * @example
 * <EmptyState
 *   icon="📋"
 *   title="No appointments scheduled"
 *   description="Book your first appointment to get started."
 *   action={<Button variant="primary">Schedule Appointment</Button>}
 * />
 */
export function EmptyState({
  icon = "∅",
  title,
  description,
  action,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`drp-empty ${className}`}
      style={{
        textAlign: "center",
        padding: "48px 24px",
        border: "var(--drp-border-dashed)",
      }}
    >
      <div
        aria-hidden="true"
        className="drp-empty__icon"
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontWeight: 800,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontSize: "18px",
          fontWeight: 700,
          margin: "0 0 8px",
          overflowWrap: "break-word",
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            fontSize: "14px",
            color: "var(--drp-text-secondary)",
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
