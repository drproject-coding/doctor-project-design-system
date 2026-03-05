import type { ReactNode } from "react";

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  uppercase?: boolean;
  className?: string;
}

export function Heading({
  level = 1,
  children,
  uppercase,
  className = "",
}: HeadingProps) {
  const Tag = `h${level}` as const;

  const classes = [`drp-h${level}`, className].filter(Boolean).join(" ");

  const style: React.CSSProperties = uppercase
    ? {
        textTransform: "uppercase",
        letterSpacing: "var(--drp-tracking-caps)",
        fontWeight: "var(--drp-weight-heavy)" as unknown as number,
      }
    : {};

  return (
    <Tag className={classes} style={style}>
      {children}
    </Tag>
  );
}
