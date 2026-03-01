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
    "bru-input",
    error && "bru-input--error",
    success && "bru-input--success",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (label) {
    return (
      <div className="bru-field">
        <label className="bru-field__label">{label}</label>
        <input className={inputClasses} {...props} />
      </div>
    );
  }
  return <input className={inputClasses} {...props} />;
}
