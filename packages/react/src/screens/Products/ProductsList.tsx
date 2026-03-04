import React, { useState } from "react";
import { ListScreen } from "../Common/ListScreen";
import { Badge } from "../../components/Badge";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "Active" | "Inactive";
  createdDate: string;
}

export const ProductsList: React.FC = () => {
  const [version, setVersion] = useState<1 | 2 | 3>(1);

  // Mock data - represents different list variations
  const products: Product[] = [
    {
      id: "1",
      name: "Wireless Headphones",
      category: "Electronics",
      price: 199.99,
      stock: 45,
      status: "Active",
      createdDate: "2024-01-15",
    },
    {
      id: "2",
      name: "USB-C Cable",
      category: "Accessories",
      price: 12.99,
      stock: 200,
      status: "Active",
      createdDate: "2024-01-10",
    },
    {
      id: "3",
      name: "Laptop Stand",
      category: "Office",
      price: 49.99,
      stock: 0,
      status: "Inactive",
      createdDate: "2023-12-20",
    },
  ];

  return (
    <ListScreen
      title="Products"
      subtitle={`Showing version ${version} of products list`}
      data={products}
      columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Product Name" },
        { key: "category", label: "Category" },
        {
          key: "price",
          label: "Price",
          render: (value) => `$${value.toFixed(2)}`,
        },
        { key: "stock", label: "Stock" },
        {
          key: "status",
          label: "Status",
          render: (value) => (
            <Badge variant={value === "Active" ? "mint" : "secondary"}>
              {value}
            </Badge>
          ),
        },
      ]}
      showSearch
      sidebarProps={{
        items: [
          { id: "dashboard", label: "Dashboard", icon: "📊" },
          { id: "products", label: "Products", icon: "📦", active: true },
          { id: "customers", label: "Customers", icon: "👥" },
          { id: "payments", label: "Payments", icon: "💳" },
        ],
      }}
    />
  );
};
