import React from "react";
import { ListScreen } from "../Common/ListScreen";
import { Badge } from "../../components/Badge";

export interface Account {
  id: string;
  accountName: string;
  accountType: string;
  balance: number;
  status: "Active" | "Inactive";
  lastUpdate: string;
}

export const AccountsList: React.FC = () => {
  const accounts: Account[] = [
    {
      id: "1",
      accountName: "Checking Account",
      accountType: "Checking",
      balance: 5234.5,
      status: "Active",
      lastUpdate: "2024-01-20",
    },
    {
      id: "2",
      accountName: "Savings Account",
      accountType: "Savings",
      balance: 25000.0,
      status: "Active",
      lastUpdate: "2024-01-19",
    },
    {
      id: "3",
      accountName: "Investment Account",
      accountType: "Investment",
      balance: 50000.0,
      status: "Inactive",
      lastUpdate: "2023-12-15",
    },
  ];

  return (
    <ListScreen
      title="Accounts"
      subtitle="Manage your financial accounts"
      data={accounts}
      columns={[
        { key: "id", label: "ID" },
        { key: "accountName", label: "Account Name" },
        { key: "accountType", label: "Type" },
        {
          key: "balance",
          label: "Balance",
          render: (value) => `$${value.toFixed(2)}`,
        },
        { key: "lastUpdate", label: "Last Update" },
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
          { id: "accounts", label: "Accounts", icon: "🏦", active: true },
          { id: "transactions", label: "Transactions", icon: "💹" },
          { id: "payments", label: "Payments", icon: "💳" },
        ],
      }}
    />
  );
};
