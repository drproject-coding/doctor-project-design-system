import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { users } from "../../data/fake";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns: [
      { key: "name", header: "Name" },
      { key: "email", header: "Email" },
      { key: "role", header: "Role" },
      { key: "status", header: "Status" },
      { key: "joinDate", header: "Joined" },
    ],
    data: users.slice(0, 8) as Record<string, unknown>[],
  },
};

export const WithCustomRender: Story = {
  render: () => (
    <Table
      columns={[
        {
          key: "name",
          header: "Name",
          render: (row) => <strong>{String(row.name)}</strong>,
        },
        { key: "email", header: "Email" },
        {
          key: "role",
          header: "Role",
          render: (row) => (
            <span
              className="bru-tag bru-tag--purple"
              style={{ fontSize: "11px" }}
            >
              {String(row.role)}
            </span>
          ),
        },
        {
          key: "status",
          header: "Status",
          render: (row) => {
            const color =
              row.status === "Active"
                ? "mint"
                : row.status === "Pending"
                  ? "yellow"
                  : "pink";
            return (
              <span className={`bru-tag bru-tag--${color} bru-tag--dot`}>
                {String(row.status)}
              </span>
            );
          },
        },
      ]}
      data={users.slice(0, 6) as Record<string, unknown>[]}
    />
  ),
};
