import type { ReactNode } from "react";

type TagColor = "purple" | "mint" | "pink" | "yellow" | "grey";

export interface TagProps {
  children: ReactNode;
  color?: TagColor;
  filled?: boolean;
  dark?: boolean;
  dot?: boolean;
  closeable?: boolean;
  onClose?: () => void;
  className?: string;
}

export function Tag({
  children,
  color,
  filled,
  dark,
  dot,
  closeable,
  onClose,
  className = "",
}: TagProps) {
  const classes = [
    "bru-tag",
    color && `bru-tag--${color}`,
    filled && "bru-tag--filled",
    dark && "bru-tag--dark",
    dot && "bru-tag--dot",
    closeable && "bru-tag--closeable",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {children}
      {closeable && (
        <button className="bru-tag__close" onClick={onClose}>
          ×
        </button>
      )}
    </span>
  );
}
