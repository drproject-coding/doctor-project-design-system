import { useState } from "react";

export interface TabItem {
  label: string;
  key: string;
}

export interface TabsProps {
  items: TabItem[];
  activeKey?: string;
  onChange?: (key: string) => void;
  variant?: "underline";
  className?: string;
}

export function Tabs({
  items,
  activeKey,
  onChange,
  variant,
  className = "",
}: TabsProps) {
  const [internalKey, setInternalKey] = useState(items[0]?.key);
  const current = activeKey ?? internalKey;

  const containerClasses = [
    "bru-tabs",
    variant && `bru-tabs--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      {items.map((item) => (
        <button
          key={item.key}
          className={`bru-tab ${current === item.key ? "bru-tab--active" : ""}`}
          onClick={() => {
            setInternalKey(item.key);
            onChange?.(item.key);
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
