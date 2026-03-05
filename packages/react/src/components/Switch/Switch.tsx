import type { InputHTMLAttributes } from "react";

export interface SwitchProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
}

export function Switch({ label, ...props }: SwitchProps) {
  return (
    <label className="drp-switch">
      <input type="checkbox" {...props} />
      <span className="drp-switch__track">
        <span className="drp-switch__knob" />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
