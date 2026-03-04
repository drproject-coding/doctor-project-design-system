import React from "react";
import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export const SupportHome: React.FC = () => {
  const categories = [
    { id: "1", title: "Getting Started", articles: 12 },
    { id: "2", title: "Billing & Payments", articles: 8 },
    { id: "3", title: "Account Management", articles: 15 },
    { id: "4", title: "Troubleshooting", articles: 20 },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
      <p className="text-gray-600 mb-6">
        Find answers and get support from our team
      </p>

      <div className="mb-8">
        <Input placeholder="Search help articles..." className="w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <Card
            key={cat.id}
            className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
            <p className="text-gray-600 mb-4">{cat.articles} articles</p>
            <Button variant="outline">Browse</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
