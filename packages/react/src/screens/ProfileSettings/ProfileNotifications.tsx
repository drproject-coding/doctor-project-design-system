import React from "react";
import { Card } from "../../components/Card";
import { Checkbox } from "../../components/Checkbox";

export const ProfileNotifications: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Notification Settings</h1>
      <Card className="p-6">
        <div className="space-y-4">
          <Checkbox label="Email notifications" defaultChecked />
          <Checkbox label="Push notifications" defaultChecked />
          <Checkbox label="SMS notifications" />
          <Checkbox label="Marketing emails" />
          <Checkbox label="Weekly digest" defaultChecked />
        </div>
      </Card>
    </div>
  );
};
