import React from "react";
import { ListScreen } from "../Common/ListScreen";
import { Badge } from "../../components/Badge";

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: string;
  status: "Completed" | "Pending" | "Failed";
  type: "Income" | "Expense";
}

export const TransactionsList: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: "1",
      description: "Salary Deposit",
      amount: 5000.0,
      date: "2024-01-20",
      status: "Completed",
      type: "Income",
    },
    {
      id: "2",
      description: "Grocery Shopping",
      amount: 125.5,
      date: "2024-01-19",
      status: "Completed",
      type: "Expense",
    },
    {
      id: "3",
      description: "Pending Transfer",
      amount: 500.0,
      date: "2024-01-20",
      status: "Pending",
      type: "Expense",
    },
  ];

  return (
    <ListScreen
      title="Transactions"
      subtitle="View all transaction history"
      data={transactions}
      columns={[
        { key: "id", label: "ID" },
        { key: "description", label: "Description" },
        {
          key: "amount",
          label: "Amount",
          render: (value) => `$${value.toFixed(2)}`,
        },
        { key: "date", label: "Date" },
        { key: "type", label: "Type" },
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
          { id: "accounts", label: "Accounts", icon: "🏦" },
          {
            id: "transactions",
            label: "Transactions",
            icon: "💹",
            active: true,
          },
          { id: "payments", label: "Payments", icon: "💳" },
        ],
      }}
    />
  );
};
