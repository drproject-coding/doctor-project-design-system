import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  dark?: boolean;
}

export function Checkbox({
  label,
  dark,
  className = "",
  ...props
}: CheckboxProps) {
  const classes = ["bru-checkbox", dark && "bru-checkbox--dark", className]
    .filter(Boolean)
    .join(" ");
  return (
    <label className={classes}>
      <input type="checkbox" {...props} />
      {label}
    </label>
  );
}
