import React, { useState } from "react";
import { AuthLayout } from "./AuthLayout";

export interface PasswordResetProps {
  mode?: "request" | "reset";
}

export const PasswordReset: React.FC<PasswordResetProps> = ({
  mode = "request",
}) => {
  const [email, setEmail] = useState("catherine.shaw@gmail.com");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRequestReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword && newPassword.length >= 8) {
      console.log("Password reset successful");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 40px 11px 14px",
    border: "1.5px solid #E0E0E0",
    borderRadius: "8px",
    fontSize: "13px",
    color: "#121212",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
  };

  return (
    <AuthLayout>
      <div>
        {mode === "request" ? (
          <>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: 800,
                color: "#121212",
                lineHeight: 1.05,
                marginBottom: "12px",
                letterSpacing: "-0.5px",
              }}
            >
              Forgot password?
            </h1>
            <p
              style={{
                fontSize: "13px",
                color: "#888",
                marginBottom: "28px",
                lineHeight: 1.6,
                maxWidth: "320px",
              }}
            >
              Enter your email address and we'll send you instructions on how to
              reset your password in a few minutes. You can also add a recovery
              email if you've never set one before.
            </p>

            {submitted ? (
              <div
                style={{
                  background: "#f0fdf4",
                  border: "1.5px solid #86efac",
                  color: "#166534",
                  padding: "12px 16px",
                  borderRadius: "8px",
                  fontSize: "13px",
                }}
              >
                Check your email for reset instructions.
              </div>
            ) : (
              <form onSubmit={handleRequestReset}>
                {/* Email field */}
                <div style={{ marginBottom: "24px" }}>
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
                      style={inputStyle}
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

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "13px",
                    background: "#631DED",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: "0.2px",
                  }}
                >
                  Start recovery
                </button>
              </form>
            )}

            <p
              style={{
                marginTop: "24px",
                fontSize: "12px",
                color: "#888",
                textAlign: "center",
              }}
            >
              Already registered?{" "}
              <a
                href="#"
                style={{
                  color: "#631DED",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Sign in to your account
              </a>
            </p>
          </>
        ) : (
          <>
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
              Reset Password
            </h1>
            <p
              style={{
                fontSize: "13px",
                color: "#888",
                marginBottom: "28px",
              }}
            >
              Enter your new password below
            </p>

            <form onSubmit={handleResetPassword}>
              {/* New Password */}
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
                  New Password
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    style={inputStyle}
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
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div style={{ marginBottom: "24px" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#444",
                    marginBottom: "6px",
                  }}
                >
                  Confirm Password
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    style={inputStyle}
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
                  </button>
                </div>
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "13px",
                  background: "#631DED",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "0.2px",
                }}
              >
                Reset Password
              </button>
            </form>
          </>
        )}
      </div>
    </AuthLayout>
  );
};
