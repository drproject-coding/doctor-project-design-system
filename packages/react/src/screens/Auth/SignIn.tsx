import React, { useState } from "react";
import { AuthLayout } from "./AuthLayout";

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState("catherine.shaw@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign in:", { email, password, rememberMe });
  };

  return (
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
          Sign in
        </h1>
        <p
          style={{
            fontSize: "13px",
            color: "#888",
            marginBottom: "32px",
          }}
        >
          Enter your account details or use QR code
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email field */}
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 600,
                color: "#444",
                marginBottom: "6px",
              }}
            >
              Email
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="catherine.shaw@gmail.com"
                style={{
                  width: "100%",
                  padding: "11px 40px 11px 14px",
                  border: "1.5px solid #E0E0E0",
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: "#121212",
                  background: "#fff",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              {/* Mail icon */}
              <svg
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#888",
                }}
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
            </div>
          </div>

          {/* Password field */}
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 600,
                color: "#444",
                marginBottom: "6px",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{
                  width: "100%",
                  padding: "11px 40px 11px 14px",
                  border: "1.5px solid #E0E0E0",
                  borderRadius: "8px",
                  fontSize: "13px",
                  color: "#121212",
                  background: "#fff",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  color: "#888",
                }}
              >
                {showPassword ? (
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
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
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
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember me + Recover password */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "12px",
                color: "#444",
                cursor: "pointer",
              }}
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{
                  width: "15px",
                  height: "15px",
                  accentColor: "#631DED",
                  cursor: "pointer",
                }}
              />
              Remember me
            </label>
            <a
              href="#"
              style={{
                fontSize: "12px",
                color: "#631DED",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Recover password
            </a>
          </div>

          {/* Log in button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "13px",
              background: "#121212",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
              marginBottom: "16px",
              letterSpacing: "0.2px",
            }}
          >
            Log in
          </button>

          {/* OR divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "#E0E0E0" }} />
            <span style={{ fontSize: "12px", color: "#888" }}>or</span>
            <div style={{ flex: 1, height: "1px", background: "#E0E0E0" }} />
          </div>

          {/* Log in with QR code button */}
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
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <path
                d="M14 14h1v1h-1zM17 14h1v1h-1zM20 14h1v1h-1zM14 17h1v1h-1zM17 17h1v1h-1zM20 17h1v1h-1zM14 20h1v1h-1zM17 20h1v1h-1zM20 20h1v1h-1z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
            Log in with QR code
          </button>
        </form>

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
};
