import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

export const ProfileSocial: React.FC = () => {
  const socialAccounts = [
    { name: "Twitter", connected: true, handle: "@johndoe" },
    { name: "LinkedIn", connected: true, handle: "johndoe" },
    { name: "GitHub", connected: false, handle: null },
    { name: "Facebook", connected: false, handle: null },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Social Accounts</h1>
      <div className="space-y-4">
        {socialAccounts.map((account) => (
          <Card
            key={account.name}
            className="p-6 flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold">{account.name}</h3>
              {account.connected && (
                <p className="text-gray-600 text-sm">
                  Connected as {account.handle}
                </p>
              )}
              {!account.connected && (
                <p className="text-gray-600 text-sm">Not connected</p>
              )}
            </div>
            <Button variant={account.connected ? "outline" : "primary"}>
              {account.connected ? "Disconnect" : "Connect"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
