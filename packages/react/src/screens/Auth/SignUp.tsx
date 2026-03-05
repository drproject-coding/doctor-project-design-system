import React, { useState } from "react";
import { AuthLayout } from "./AuthLayout";

export const SignUp: React.FC = () => {
  const [country, setCountry] = useState("United States");
  const [countryBusiness, setCountryBusiness] = useState("");
  const [email, setEmail] = useState("catherine.shaw4");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sign up:", { country, countryBusiness, email, password });
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    border: "1.5px solid #E0E0E0",
    borderRadius: "8px",
    fontSize: "13px",
    color: "#121212",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
    appearance: "none" as const,
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    color: "#444",
    marginBottom: "6px",
  };

  const fieldStyle: React.CSSProperties = {
    marginBottom: "14px",
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
          Sign up
        </h1>
        <p
          style={{
            fontSize: "13px",
            color: "#888",
            marginBottom: "28px",
          }}
        >
          Fill out the form below using your current location
        </p>

        <form onSubmit={handleSubmit}>
          {/* Country/Region of Residence */}
          <div style={fieldStyle}>
            <label style={labelStyle}>Country/Region of Residence</label>
            <div style={{ position: "relative" }}>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={{
                  ...inputStyle,
                  paddingRight: "36px",
                  cursor: "pointer",
                }}
              >
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
              </select>
              <svg
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#888",
                }}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Email */}
          <div style={fieldStyle}>
            <label style={labelStyle}>Email</label>
            <div style={{ position: "relative" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="catherine.shaw@gmail.com"
                style={{ ...inputStyle, paddingRight: "40px" }}
              />
              {/* Mail icon */}
              <svg
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#888",
                  pointerEvents: "none",
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

          {/* Password */}
          <div style={fieldStyle}>
            <label style={labelStyle}>Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{ ...inputStyle, paddingRight: "40px" }}
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

          {/* Checkboxes */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                fontSize: "12px",
                color: "#444",
                cursor: "pointer",
                marginBottom: "10px",
                lineHeight: 1.4,
              }}
            >
              <input
                type="checkbox"
                checked={receiveUpdates}
                onChange={(e) => setReceiveUpdates(e.target.checked)}
                style={{
                  width: "15px",
                  height: "15px",
                  accentColor: "#631DED",
                  cursor: "pointer",
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              />
              I agree to receive email updates
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                fontSize: "12px",
                color: "#444",
                cursor: "pointer",
                lineHeight: 1.4,
              }}
            >
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                style={{
                  width: "15px",
                  height: "15px",
                  accentColor: "#631DED",
                  cursor: "pointer",
                  flexShrink: 0,
                  marginTop: "1px",
                }}
              />
              I have read and agree to{" "}
              <a
                href="#"
                style={{
                  color: "#631DED",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Terms of Service
              </a>
            </label>
          </div>

          {/* Create account button */}
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
            Create account
          </button>
        </form>

        {/* Sign in link */}
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
      </div>
    </AuthLayout>
  );
};
