import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  success?: boolean;
}

export function Input({
  label,
  error,
  success,
  className = "",
  ...props
}: InputProps) {
  const inputClasses = [
    "drp-input",
    error && "drp-input--error",
    success && "drp-input--success",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (label) {
    return (
      <div className="drp-field">
        <label className="drp-field__label">{label}</label>
        <input className={inputClasses} {...props} />
      </div>
    );
  }
  return <input className={inputClasses} {...props} />;
}
