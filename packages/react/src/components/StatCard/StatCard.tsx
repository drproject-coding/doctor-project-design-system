export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div
      className={`bru-stat-card ${className}`}
      style={{
        textAlign: "center",
        padding: "var(--bru-space-8)",
        border: "var(--bru-border-chunk)",
        background: "var(--bru-surface)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--bru-font-primary)",
          fontSize: "3.5rem",
          fontWeight: 800,
          color: "var(--bru-purple)",
          lineHeight: 1,
        }}
      >
        {value}
      </p>
      <p
        style={{
          fontFamily: "var(--bru-font-primary)",
          fontSize: "var(--bru-text-sm)",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginTop: "var(--bru-space-2)",
        }}
      >
        {label}
      </p>
    </div>
  );
}
