import React from "react";
import { ListScreen } from "../Common/ListScreen";
import { Badge } from "../../components/Badge";

export interface Sale {
  id: string;
  customer: string;
  amount: number;
  date: string;
  status: "Completed" | "Pending" | "Cancelled";
  salesperson: string;
}

export const SalesList: React.FC = () => {
  const sales: Sale[] = [
    {
      id: "1",
      customer: "Tech Corp",
      amount: 15000.0,
      date: "2024-01-20",
      status: "Completed",
      salesperson: "Alice Chen",
    },
    {
      id: "2",
      customer: "StartUp Inc",
      amount: 8500.0,
      date: "2024-01-18",
      status: "Completed",
      salesperson: "Bob Wilson",
    },
    {
      id: "3",
      customer: "Enterprise Ltd",
      amount: 25000.0,
      date: "2024-01-20",
      status: "Pending",
      salesperson: "Carol Davis",
    },
  ];

  return (
    <ListScreen
      title="Sales"
      subtitle="Track sales pipeline and performance"
      data={sales}
      columns={[
        { key: "id", label: "ID" },
        { key: "customer", label: "Customer" },
        {
          key: "amount",
          label: "Amount",
          render: (value) => `$${value.toFixed(2)}`,
        },
        { key: "date", label: "Date" },
        { key: "salesperson", label: "Salesperson" },
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
          { id: "contacts", label: "Contacts", icon: "📇" },
          { id: "sales", label: "Sales", icon: "📈", active: true },
        ],
      }}
    />
  );
};
