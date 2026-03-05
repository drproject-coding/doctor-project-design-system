import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: boolean;
  success?: boolean;
}

export function Textarea({
  label,
  error,
  success,
  className = "",
  ...props
}: TextareaProps) {
  const classes = [
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
        <textarea className={classes} {...props} />
      </div>
    );
  }
  return <textarea className={classes} {...props} />;
}
