import type { SelectHTMLAttributes, ReactNode } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  children: ReactNode;
}

export function Select({
  label,
  className = "",
  children,
  ...props
}: SelectProps) {
  const selectEl = (
    <select className={`drp-select ${className}`} {...props}>
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
