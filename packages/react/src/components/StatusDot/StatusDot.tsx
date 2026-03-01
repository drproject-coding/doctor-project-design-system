type DotColor = "purple" | "mint" | "pink" | "yellow";

export interface StatusDotProps {
  color?: DotColor;
  pulse?: boolean;
  className?: string;
}

export function StatusDot({ color, pulse, className = "" }: StatusDotProps) {
  const classes = [
    "bru-dot",
    color && `bru-dot--${color}`,
    pulse && "bru-dot--pulse",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <span className={classes} />;
}
