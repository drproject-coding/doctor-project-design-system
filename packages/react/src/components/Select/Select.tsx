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
    <select className={`bru-select ${className}`} {...props}>
      {children}
    </select>
  );
  if (label) {
    return (
      <div className="bru-field">
        <label className="bru-field__label">{label}</label>
        {selectEl}
      </div>
    );
  }
  return selectEl;
}
