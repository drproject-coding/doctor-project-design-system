import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";

export const CalendarEvent: React.FC = () => {
  const events = [
    {
      id: "1",
      title: "Team Standup",
      time: "09:00 AM",
      date: "2024-01-22",
      attendees: 5,
    },
    {
      id: "2",
      title: "Client Meeting",
      time: "02:00 PM",
      date: "2024-01-22",
      attendees: 8,
    },
    {
      id: "3",
      title: "Design Review",
      time: "04:00 PM",
      date: "2024-01-22",
      attendees: 3,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Calendar Events</h1>
      <div className="space-y-4">
        {events.map((event) => (
          <Card key={event.id} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">
                  📅 {event.date} at {event.time}
                </p>
                <p className="text-gray-600">👥 {event.attendees} attendees</p>
              </div>
              <Button>View Details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
