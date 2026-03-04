import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export interface PasswordResetProps {
  mode?: "request" | "reset";
}

export const PasswordReset: React.FC<PasswordResetProps> = ({
  mode = "request",
}) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {mode === "request" ? (
          <>
            <h1 className="text-3xl font-bold mb-2">Forgot Password?</h1>
            <p className="text-gray-600 mb-6">
              Enter your email to receive reset instructions
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                Check your email for reset instructions
              </div>
            ) : (
              <form onSubmit={handleRequestReset} className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
              </form>
            )}
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-2">Reset Password</h1>
            <p className="text-gray-600 mb-6">Enter your new password</p>

            <form onSubmit={handleResetPassword} className="space-y-4">
              <Input
                label="New Password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
              />
              <Input
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
              />
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
