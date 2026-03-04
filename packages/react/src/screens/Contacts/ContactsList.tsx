import React from "react";
import { ListScreen } from "../Common/ListScreen";
import { Badge } from "../../components/Badge";

export interface Contact {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  lastContact: string;
  status: "Active" | "Inactive";
}

export const ContactsList: React.FC = () => {
  const contacts: Contact[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@company.com",
      company: "Tech Corp",
      phone: "+1 (555) 123-4567",
      lastContact: "2024-01-15",
      status: "Active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@startup.com",
      company: "StartUp Inc",
      phone: "+1 (555) 234-5678",
      lastContact: "2024-01-10",
      status: "Active",
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@oldco.com",
      company: "Old Company",
      phone: "+1 (555) 345-6789",
      lastContact: "2023-11-20",
      status: "Inactive",
    },
  ];

  return (
    <ListScreen
      title="Contacts"
      subtitle="Manage your business contacts"
      data={contacts}
      columns={[
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "company", label: "Company" },
        { key: "phone", label: "Phone" },
        { key: "lastContact", label: "Last Contact" },
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
          { id: "contacts", label: "Contacts", icon: "📇", active: true },
          { id: "sales", label: "Sales", icon: "📈" },
        ],
      }}
    />
  );
};
