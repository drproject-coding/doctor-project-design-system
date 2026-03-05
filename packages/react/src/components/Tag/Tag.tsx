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
    "drp-tag",
    color && `drp-tag--${color}`,
    filled && "drp-tag--filled",
    dark && "drp-tag--dark",
    dot && "drp-tag--dot",
    closeable && "drp-tag--closeable",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {children}
      {closeable && (
        <button className="drp-tag__close" onClick={onClose}>
          ×
        </button>
      )}
    </span>
  );
}
