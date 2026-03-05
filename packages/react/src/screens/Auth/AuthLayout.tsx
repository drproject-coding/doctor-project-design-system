import React, { ReactNode } from "react";

/**
 * Decorative right panel — floating UI cards over a purple blob background.
 * Purely visual, matches the registration screenshots.
 */
const DecorativePanel: React.FC = () => (
  <div
    className="hidden lg:flex flex-1 relative overflow-hidden"
    style={{ background: "#F2F2F2" }}
  >
    {/* Purple blob */}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "520px",
        height: "520px",
        background:
          "radial-gradient(ellipse at 40% 40%, #a78bfa 0%, #7c3aed 35%, #631DED 60%, #c4b5fd 100%)",
        borderRadius: "50% 60% 55% 45% / 45% 55% 60% 50%",
        filter: "blur(2px)",
        opacity: 0.85,
      }}
    />

    {/* Floating card 1 — task tracker (top-right area) */}
    <div
      style={{
        position: "absolute",
        top: "8%",
        right: "12%",
        background: "#fff",
        borderRadius: "12px",
        padding: "14px 16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        minWidth: "180px",
        zIndex: 10,
      }}
    >
      <div style={{ fontSize: "11px", color: "#888", marginBottom: "8px" }}>
        NM Tasks
      </div>
      {/* Mini bar chart */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "4px",
          height: "36px",
          marginBottom: "8px",
        }}
      >
        {[14, 22, 18, 30, 24, 20, 28].map((h, i) => (
          <div
            key={i}
            style={{
              width: "10px",
              height: `${h}px`,
              background: i === 3 ? "#631DED" : "#e5e7eb",
              borderRadius: "2px",
            }}
          />
        ))}
      </div>
      <div style={{ fontSize: "10px", color: "#888" }}>Mon – Sun</div>
    </div>

    {/* Floating card 2 — user task card (center-left) */}
    <div
      style={{
        position: "absolute",
        top: "30%",
        left: "8%",
        background: "#fff",
        borderRadius: "14px",
        padding: "14px 16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
        minWidth: "200px",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a78bfa, #631DED)",
            flexShrink: 0,
          }}
        />
        <div>
          <div style={{ fontSize: "12px", fontWeight: 600, color: "#121212" }}>
            Delafaran Sorgato
          </div>
          <div style={{ fontSize: "10px", color: "#888" }}>in progress</div>
        </div>
      </div>
      <div
        style={{
          background: "#631DED",
          color: "#fff",
          fontSize: "11px",
          fontWeight: 600,
          borderRadius: "6px",
          padding: "5px 12px",
          display: "inline-block",
          marginBottom: "10px",
        }}
      >
        Task
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#121212" }}>
            $123.20
          </div>
          <div style={{ fontSize: "10px", color: "#888" }}>Est.</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#121212" }}>
            14
          </div>
          <div style={{ fontSize: "10px", color: "#888" }}>hrs</div>
        </div>
      </div>
    </div>

    {/* Floating card 3 — "Update design system" (top-right corner) */}
    <div
      style={{
        position: "absolute",
        top: "18%",
        right: "4%",
        background: "#fff",
        borderRadius: "10px",
        padding: "10px 14px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
        fontSize: "11px",
        fontWeight: 600,
        color: "#121212",
        zIndex: 10,
        whiteSpace: "nowrap",
      }}
    >
      Update design system
    </div>

    {/* Floating card 4 — revenue card (center-right) */}
    <div
      style={{
        position: "absolute",
        top: "52%",
        left: "10%",
        background: "#fff",
        borderRadius: "14px",
        padding: "14px 16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        minWidth: "180px",
        zIndex: 10,
      }}
    >
      <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>
        Total revenue
      </div>
      <div
        style={{
          fontSize: "18px",
          fontWeight: 700,
          color: "#121212",
          marginBottom: "8px",
        }}
      >
        $68,310.28
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <span
          style={{
            background: "#f3f4f6",
            borderRadius: "6px",
            padding: "3px 8px",
            fontSize: "11px",
            color: "#631DED",
            fontWeight: 600,
          }}
        >
          7,384
        </span>
        <span style={{ fontSize: "10px", color: "#888" }}>transactions</span>
      </div>
    </div>

    {/* Floating card 5 — "Photobook for family move" */}
    <div
      style={{
        position: "absolute",
        top: "58%",
        right: "5%",
        background: "#fff",
        borderRadius: "10px",
        padding: "10px 14px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
        zIndex: 10,
        minWidth: "190px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: 600,
          color: "#121212",
          marginBottom: "6px",
        }}
      >
        Photobook for family move
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "#f3f4f6",
          borderRadius: "6px",
          padding: "4px 8px",
          fontSize: "10px",
          color: "#631DED",
          fontWeight: 600,
        }}
      >
        <span>Due on 15 Aug 2025</span>
      </div>
    </div>

    {/* Floating card 6 — "Design tasks" tag (bottom-left) */}
    <div
      style={{
        position: "absolute",
        bottom: "22%",
        left: "6%",
        background: "#fff",
        borderRadius: "8px",
        padding: "8px 12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
        fontSize: "11px",
        fontWeight: 600,
        color: "#121212",
        zIndex: 10,
      }}
    >
      Design tasks
    </div>

    {/* Floating card 7 — "Mockup for task app" (bottom-center) */}
    <div
      style={{
        position: "absolute",
        bottom: "14%",
        left: "18%",
        background: "#fff",
        borderRadius: "8px",
        padding: "8px 14px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
        fontSize: "11px",
        color: "#121212",
        zIndex: 10,
      }}
    >
      Mockup for task app
    </div>

    {/* Decorative dots */}
    <div
      style={{
        position: "absolute",
        top: "10%",
        left: "30%",
        width: "12px",
        height: "12px",
        background: "#121212",
        borderRadius: "50%",
        zIndex: 10,
      }}
    />
    <div
      style={{
        position: "absolute",
        top: "22%",
        left: "55%",
        width: "8px",
        height: "8px",
        background: "#121212",
        borderRadius: "50%",
        zIndex: 10,
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: "20%",
        right: "30%",
        width: "10px",
        height: "10px",
        background: "#121212",
        borderRadius: "50%",
        zIndex: 10,
      }}
    />

    {/* Decorative squiggly lines (SVG) */}
    <svg
      style={{ position: "absolute", top: "5%", right: "28%", zIndex: 10 }}
      width="60"
      height="40"
      viewBox="0 0 60 40"
      fill="none"
    >
      <path
        d="M2 20 Q10 5 20 20 Q30 35 40 20 Q50 5 58 20"
        stroke="#121212"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
    <svg
      style={{ position: "absolute", bottom: "28%", right: "18%", zIndex: 10 }}
      width="50"
      height="34"
      viewBox="0 0 50 34"
      fill="none"
    >
      <path
        d="M2 17 Q10 4 18 17 Q26 30 34 17 Q42 4 48 17"
        stroke="#121212"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

export interface AuthLayoutProps {
  children: ReactNode;
}

/**
 * Shared split-panel layout for all Auth screens.
 * Left: cream background with form content.
 * Right: decorative panel with floating cards (desktop only).
 */
export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <div
    className="min-h-screen flex"
    style={{ fontFamily: "var(--bru-font-primary, sans-serif)" }}
  >
    {/* Left panel */}
    <div
      className="flex flex-col w-full lg:w-[480px] xl:w-[520px] min-h-screen px-10 py-10"
      style={{ background: "#F2F2F2", flexShrink: 0 }}
    >
      {/* Logo */}
      <div className="mb-12">
        <span
          style={{
            fontWeight: 800,
            fontSize: "20px",
            color: "#121212",
            letterSpacing: "-0.5px",
          }}
        >
          Doctor Project
          <span style={{ color: "#631DED" }}>.</span>
        </span>
      </div>

      {/* Form content */}
      <div className="flex-1 flex flex-col justify-center max-w-sm">
        {children}
      </div>
    </div>

    {/* Right decorative panel */}
    <DecorativePanel />
  </div>
);
