import React from "react";
import { Card } from "../../components/Card";
import { Badge } from "../../components/Badge";

export const InboxList: React.FC = () => {
  const messages = [
    {
      id: "1",
      from: "John Doe",
      subject: "Project Update",
      preview: "Here is the latest update on the project...",
      date: "2024-01-20",
      unread: true,
    },
    {
      id: "2",
      from: "Jane Smith",
      subject: "Meeting Scheduled",
      preview: "We have a meeting scheduled for tomorrow at 2 PM",
      date: "2024-01-19",
      unread: false,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Inbox</h1>
      <div className="space-y-4">
        {messages.map((msg) => (
          <Card
            key={msg.id}
            className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold">{msg.from}</h3>
                  {msg.unread && <Badge>New</Badge>}
                </div>
                <p className="font-medium mb-1">{msg.subject}</p>
                <p className="text-gray-600 text-sm">{msg.preview}</p>
              </div>
              <span className="text-gray-500 text-sm ml-4">{msg.date}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
