type LoaderSize = "sm" | "lg";

export interface LoaderProps {
  size?: LoaderSize;
  label?: string;
  className?: string;
}

export function Loader({ size, label, className = "" }: LoaderProps) {
  const dimension = size === "sm" ? 20 : size === "lg" ? 48 : 32;
  const borderWidth = size === "sm" ? 2 : size === "lg" ? 4 : 3;

  return (
    <div
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}
    >
      <div
        style={{
          width: dimension,
          height: dimension,
          border: `${borderWidth}px solid var(--bru-light-grey, #E0E0E0)`,
          borderTop: `${borderWidth}px solid var(--bru-purple)`,
          animation: "bru-spin 0.8s linear infinite",
        }}
      />
      {label && (
        <span
          style={{
            fontFamily: "var(--bru-font-primary)",
            fontSize: "var(--bru-text-sm)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {label}
        </span>
      )}
      <style>{`@keyframes bru-spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
