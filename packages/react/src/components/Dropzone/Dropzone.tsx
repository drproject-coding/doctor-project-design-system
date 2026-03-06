import { useState, useRef } from "react";
import type { ReactNode, DragEvent, ChangeEvent } from "react";

export interface DropzoneProps {
  onFiles?: (files: File[]) => void;
  accept?: string;
  hint?: string;
  icon?: ReactNode;
  className?: string;
}

export function Dropzone({
  onFiles,
  accept,
  hint = "PNG, JPG, PDF up to 10MB",
  icon = "↑",
  className = "",
}: DropzoneProps) {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDragOver(e: DragEvent) {
    e.preventDefault();
    setActive(true);
  }

  function handleDragLeave() {
    setActive(false);
  }

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setActive(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length) onFiles?.(files);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (files.length) onFiles?.(files);
  }

  const classes = [
    "drp-dropzone",
    active ? "drp-dropzone--active" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <span className="drp-dropzone__icon">{icon}</span>
      <span className="drp-dropzone__text">
        Drop files here or click to upload
      </span>
      {hint && <span className="drp-dropzone__hint">{hint}</span>}
    </div>
  );
}
