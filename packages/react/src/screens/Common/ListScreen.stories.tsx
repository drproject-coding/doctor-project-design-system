import { Meta, StoryObj } from "@storybook/react";
import { ListScreen } from "./ListScreen";

const meta: Meta<typeof ListScreen> = {
  component: ListScreen,
  title: "Screens/Common/ListScreen",
};

export default meta;
type Story = StoryObj<typeof ListScreen>;

const sampleData = [
  { id: "1", name: "Product A", status: "Active", price: "$99.99" },
  { id: "2", name: "Product B", status: "Active", price: "$149.99" },
  { id: "3", name: "Product C", status: "Inactive", price: "$79.99" },
];

export const Default: Story = {
  args: {
    title: "Products",
    subtitle: "Manage your product inventory",
    data: sampleData,
    columns: [
      { key: "id", label: "ID" },
      { key: "name", label: "Product Name" },
      { key: "status", label: "Status" },
      { key: "price", label: "Price" },
    ],
  },
};
