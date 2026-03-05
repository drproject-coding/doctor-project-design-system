import React from "react";
import { AuthLayout } from "./AuthLayout";

/**
 * A simple SVG-based QR code placeholder that looks like a real QR code.
 */
const QRCodePlaceholder: React.FC = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    {/* Outer border */}
    <rect
      x="0"
      y="0"
      width="160"
      height="160"
      rx="10"
      fill="#fff"
      stroke="#E0E0E0"
      strokeWidth="1"
    />

    {/* Top-left position pattern */}
    <rect x="12" y="12" width="44" height="44" rx="3" fill="#121212" />
    <rect x="18" y="18" width="32" height="32" rx="2" fill="#fff" />
    <rect x="24" y="24" width="20" height="20" rx="1" fill="#121212" />

    {/* Top-right position pattern */}
    <rect x="104" y="12" width="44" height="44" rx="3" fill="#121212" />
    <rect x="110" y="18" width="32" height="32" rx="2" fill="#fff" />
    <rect x="116" y="24" width="20" height="20" rx="1" fill="#121212" />

    {/* Bottom-left position pattern */}
    <rect x="12" y="104" width="44" height="44" rx="3" fill="#121212" />
    <rect x="18" y="110" width="32" height="32" rx="2" fill="#fff" />
    <rect x="24" y="116" width="20" height="20" rx="1" fill="#121212" />

    {/* Data modules - scattered cells to look like QR data */}
    {/* Row 1 */}
    <rect x="68" y="12" width="8" height="8" fill="#121212" />
    <rect x="80" y="12" width="8" height="8" fill="#121212" />
    <rect x="68" y="24" width="8" height="8" fill="#121212" />
    <rect x="80" y="24" width="8" height="8" fill="#121212" />
    <rect x="92" y="24" width="8" height="8" fill="#121212" />
    <rect x="68" y="36" width="8" height="8" fill="#121212" />
    <rect x="92" y="36" width="8" height="8" fill="#121212" />
    <rect x="68" y="48" width="8" height="8" fill="#121212" />
    <rect x="80" y="48" width="8" height="8" fill="#121212" />

    {/* Middle rows */}
    <rect x="12" y="68" width="8" height="8" fill="#121212" />
    <rect x="24" y="68" width="8" height="8" fill="#121212" />
    <rect x="36" y="68" width="8" height="8" fill="#121212" />
    <rect x="56" y="68" width="8" height="8" fill="#121212" />
    <rect x="68" y="68" width="8" height="8" fill="#121212" />
    <rect x="80" y="68" width="8" height="8" fill="#121212" />
    <rect x="92" y="68" width="8" height="8" fill="#121212" />
    <rect x="104" y="68" width="8" height="8" fill="#121212" />
    <rect x="116" y="68" width="8" height="8" fill="#121212" />
    <rect x="128" y="68" width="8" height="8" fill="#121212" />
    <rect x="140" y="68" width="8" height="8" fill="#121212" />

    <rect x="12" y="80" width="8" height="8" fill="#121212" />
    <rect x="36" y="80" width="8" height="8" fill="#121212" />
    <rect x="68" y="80" width="8" height="8" fill="#121212" />
    <rect x="92" y="80" width="8" height="8" fill="#121212" />
    <rect x="116" y="80" width="8" height="8" fill="#121212" />
    <rect x="140" y="80" width="8" height="8" fill="#121212" />

    <rect x="12" y="92" width="8" height="8" fill="#121212" />
    <rect x="24" y="92" width="8" height="8" fill="#121212" />
    <rect x="48" y="92" width="8" height="8" fill="#121212" />
    <rect x="68" y="92" width="8" height="8" fill="#121212" />
    <rect x="80" y="92" width="8" height="8" fill="#121212" />
    <rect x="104" y="92" width="8" height="8" fill="#121212" />
    <rect x="128" y="92" width="8" height="8" fill="#121212" />
    <rect x="140" y="92" width="8" height="8" fill="#121212" />

    {/* Bottom-right data area */}
    <rect x="104" y="80" width="8" height="8" fill="#121212" />
    <rect x="116" y="80" width="8" height="8" fill="#121212" />
    <rect x="128" y="80" width="8" height="8" fill="#121212" />

    <rect x="104" y="104" width="8" height="8" fill="#121212" />
    <rect x="116" y="104" width="8" height="8" fill="#121212" />
    <rect x="128" y="104" width="8" height="8" fill="#121212" />
    <rect x="140" y="104" width="8" height="8" fill="#121212" />

    <rect x="104" y="116" width="8" height="8" fill="#121212" />
    <rect x="128" y="116" width="8" height="8" fill="#121212" />

    <rect x="104" y="128" width="8" height="8" fill="#121212" />
    <rect x="116" y="128" width="8" height="8" fill="#121212" />
    <rect x="140" y="128" width="8" height="8" fill="#121212" />

    <rect x="104" y="140" width="8" height="8" fill="#121212" />
    <rect x="128" y="140" width="8" height="8" fill="#121212" />
    <rect x="140" y="140" width="8" height="8" fill="#121212" />

    {/* Bottom-left extended data */}
    <rect x="12" y="104" width="8" height="8" fill="#631DED" />
    <rect x="24" y="104" width="8" height="8" fill="#121212" />
    <rect x="36" y="104" width="8" height="8" fill="#121212" />
    <rect x="48" y="104" width="8" height="8" fill="#631DED" />
    <rect x="56" y="104" width="8" height="8" fill="#121212" />

    <rect x="12" y="116" width="8" height="8" fill="#121212" />
    <rect x="36" y="116" width="8" height="8" fill="#631DED" />
    <rect x="56" y="116" width="8" height="8" fill="#121212" />
    <rect x="68" y="116" width="8" height="8" fill="#121212" />
    <rect x="80" y="116" width="8" height="8" fill="#121212" />
    <rect x="92" y="116" width="8" height="8" fill="#631DED" />

    <rect x="24" y="128" width="8" height="8" fill="#121212" />
    <rect x="48" y="128" width="8" height="8" fill="#121212" />
    <rect x="68" y="128" width="8" height="8" fill="#121212" />
    <rect x="80" y="128" width="8" height="8" fill="#631DED" />

    <rect x="12" y="140" width="8" height="8" fill="#121212" />
    <rect x="36" y="140" width="8" height="8" fill="#121212" />
    <rect x="56" y="140" width="8" height="8" fill="#631DED" />
    <rect x="80" y="140" width="8" height="8" fill="#121212" />
    <rect x="92" y="140" width="8" height="8" fill="#121212" />
  </svg>
);

export const SignInWithQR: React.FC = () => (
  <AuthLayout>
    <div>
      <h1
        style={{
          fontSize: "36px",
          fontWeight: 800,
          color: "#121212",
          lineHeight: 1.1,
          marginBottom: "8px",
          letterSpacing: "-0.5px",
        }}
      >
        Log in with QR
      </h1>
      <p
        style={{
          fontSize: "13px",
          color: "#888",
          marginBottom: "32px",
          lineHeight: 1.5,
        }}
      >
        Scan this code with the mobile app to log in to Doctor Project
      </p>

      {/* QR code container */}
      <div
        style={{
          display: "inline-flex",
          padding: "16px",
          background: "#fff",
          borderRadius: "12px",
          border: "1.5px solid #E0E0E0",
          marginBottom: "32px",
        }}
      >
        <QRCodePlaceholder />
      </div>

      {/* Log in with email button */}
      <button
        type="button"
        style={{
          width: "100%",
          padding: "12px",
          background: "transparent",
          color: "#121212",
          border: "1.5px solid #E0E0E0",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: 600,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        Log in with email or phone number
      </button>

      {/* Sign up link */}
      <p
        style={{
          marginTop: "32px",
          fontSize: "12px",
          color: "#888",
          textAlign: "center",
        }}
      >
        You don't have an account?{" "}
        <a
          href="#"
          style={{
            color: "#631DED",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          Create an account
        </a>
      </p>
    </div>
  </AuthLayout>
);
