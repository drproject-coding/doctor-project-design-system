import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

export const ProfileSecurity: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Security Settings</h1>
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Password</h3>
          <p className="text-gray-600 mb-4">Last changed 3 months ago</p>
          <Button>Change Password</Button>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">
            Two-Factor Authentication
          </h3>
          <p className="text-gray-600 mb-4">Enhance your account security</p>
          <Button>Enable 2FA</Button>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Active Sessions</h3>
          <p className="text-gray-600 mb-4">1 active session</p>
          <Button variant="outline">View & Manage</Button>
        </Card>
      </div>
    </div>
  );
};
