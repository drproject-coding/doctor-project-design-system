import React from "react";

export const ToolsTrackerFooter: React.FC = () => (
  <footer
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--drp-space-3) var(--drp-space-6)",
      borderTop: "var(--drp-border-thin)",
      flexShrink: 0,
    }}
  >
    <div className="drp-flex drp-items-center drp-gap-4">
      <span className="drp-text drp-text--xs drp-text--muted">v1.0</span>
      <a href="#" className="drp-text drp-text--xs drp-text--muted">
        Privacy Policy
      </a>
      <a href="#" className="drp-text drp-text--xs drp-text--muted">
        License
      </a>
    </div>
    <button
      className="drp-btn drp-btn--ghost drp-btn--sm"
      aria-label="Settings"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </button>
  </footer>
);
