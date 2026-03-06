import type { SelectHTMLAttributes, ReactNode } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: boolean;
  success?: boolean;
  children: ReactNode;
}

export function Select({
  label,
  error,
  success,
  className = "",
  children,
  ...props
}: SelectProps) {
  const selectEl = (
    <select
      className={[
        "drp-select",
        error && "drp-select--error",
        success && "drp-select--success",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </select>
  );
  if (label) {
    return (
      <div className="drp-field">
        <label className="drp-field__label">{label}</label>
        {selectEl}
      </div>
    );
  }
  return selectEl;
}
