type ProgressColor = "mint" | "pink" | "yellow" | "grey";
type ProgressSize = "sm" | "lg";

export interface ProgressBarProps {
  value: number;
  color?: ProgressColor;
  size?: ProgressSize;
  label?: string;
  className?: string;
}

export function ProgressBar({
  value,
  color,
  size,
  label,
  className = "",
}: ProgressBarProps) {
  const progressClasses = [
    "bru-progress",
    color && `bru-progress--${color}`,
    size && `bru-progress--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const bar = (
    <div className={progressClasses}>
      <div
        className="bru-progress__bar"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );

  if (label) {
    return (
      <div className="bru-progress-group">
        <div className="bru-progress-group__label">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
        {bar}
      </div>
    );
  }

  return bar;
}
