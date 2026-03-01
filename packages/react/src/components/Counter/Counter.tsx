import { useState } from "react";

export interface CounterProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export function Counter({
  value: controlledValue,
  min = 0,
  max = 99,
  onChange,
}: CounterProps) {
  const [internalValue, setInternalValue] = useState(controlledValue ?? min);
  const value = controlledValue ?? internalValue;

  const update = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    setInternalValue(clamped);
    onChange?.(clamped);
  };

  return (
    <div className="bru-counter">
      <button
        className="bru-counter__btn"
        onClick={() => update(value - 1)}
        disabled={value <= min}
      >
        −
      </button>
      <input
        className="bru-counter__value"
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => update(Number(e.target.value))}
        readOnly
      />
      <button
        className="bru-counter__btn"
        onClick={() => update(value + 1)}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
}
