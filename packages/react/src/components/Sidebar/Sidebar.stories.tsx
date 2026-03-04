import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Navigation/Sidebar",
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const sampleItems = [
  { id: "1", label: "Dashboard", icon: "📊" },
  { id: "2", label: "Products", icon: "📦" },
  { id: "3", label: "Customers", icon: "👥" },
  { id: "4", label: "Payments", icon: "💳" },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const Collapsed: Story = {
  args: {
    items: sampleItems,
    collapsed: true,
  },
};
