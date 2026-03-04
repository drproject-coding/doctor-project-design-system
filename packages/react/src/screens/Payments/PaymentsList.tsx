import React from "react";
import { ListScreen } from "../Common/ListScreen";
import { Badge } from "../../components/Badge";

export interface Payment {
  id: string;
  method: string;
  amount: number;
  date: string;
  recipient: string;
  status: "Completed" | "Pending" | "Failed";
}

export const PaymentsList: React.FC = () => {
  const payments: Payment[] = [
    {
      id: "1",
      method: "Credit Card",
      amount: 250.0,
      date: "2024-01-20",
      recipient: "Online Store",
      status: "Completed",
    },
    {
      id: "2",
      method: "Bank Transfer",
      amount: 1500.0,
      date: "2024-01-18",
      recipient: "Company Inc",
      status: "Completed",
    },
    {
      id: "3",
      method: "Digital Wallet",
      amount: 75.5,
      date: "2024-01-20",
      recipient: "Service Provider",
      status: "Pending",
    },
  ];

  return (
    <ListScreen
      title="Payments"
      subtitle="View and manage all payments"
      data={payments}
      columns={[
        { key: "id", label: "ID" },
        { key: "method", label: "Payment Method" },
        {
          key: "amount",
          label: "Amount",
          render: (value) => `$${value.toFixed(2)}`,
        },
        { key: "date", label: "Date" },
        { key: "recipient", label: "Recipient" },
        {
          key: "status",
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Completed" ? "mint" : "secondary"}>
              {value}
            </Badge>
          ),
        },
      ]}
      showSearch
      sidebarProps={{
        items: [
          { id: "payments", label: "Payments", icon: "💳", active: true },
          { id: "send-money", label: "Send Money", icon: "💸" },
        ],
      }}
    />
  );
};
