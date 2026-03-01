import type { InputHTMLAttributes } from "react";

export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
}

export function Switch({ label, ...props }: SwitchProps) {
  return (
    <label className="bru-switch">
      <input type="checkbox" {...props} />
      <span className="bru-switch__track">
        <span className="bru-switch__knob" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
