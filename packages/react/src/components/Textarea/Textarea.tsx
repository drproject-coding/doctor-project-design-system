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
        <textarea className={classes} {...props} />
      </div>
    );
  }
  return <textarea className={classes} {...props} />;
}
