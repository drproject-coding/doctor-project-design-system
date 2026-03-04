import React from "react";
import { ListScreen } from "../Common/ListScreen";
import { Badge } from "../../components/Badge";
import { Avatar } from "../../components/Avatar";

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "Active" | "Inactive";
  joinDate: string;
  totalPurchases: number;
}

export const CustomersList: React.FC = () => {
  const customers: Customer[] = [
    {
      id: "1",
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "+1 (555) 123-4567",
      status: "Active",
      joinDate: "2023-06-15",
      totalPurchases: 12,
    },
    {
      id: "2",
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "+1 (555) 234-5678",
      status: "Active",
      joinDate: "2023-08-20",
      totalPurchases: 8,
    },
    {
      id: "3",
      name: "Carol Davis",
      email: "carol@example.com",
      phone: "+1 (555) 345-6789",
      status: "Inactive",
      joinDate: "2023-03-10",
      totalPurchases: 3,
    },
  ];

  return (
    <ListScreen
      title="Customers"
      subtitle="Manage customer relationships and interactions"
      data={customers}
      columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone" },
        { key: "joinDate", label: "Join Date" },
        { key: "totalPurchases", label: "Purchases" },
        {
          key: "status",
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Active" ? "success" : "default"}>
              {value}
            </Badge>
          ),
        },
      ]}
      showSearch
      sidebarProps={{
        items: [
          { id: "dashboard", label: "Dashboard", icon: "📊" },
          { id: "products", label: "Products", icon: "📦" },
          { id: "customers", label: "Customers", icon: "👥", active: true },
          { id: "payments", label: "Payments", icon: "💳" },
        ],
      }}
    />
  );
};
