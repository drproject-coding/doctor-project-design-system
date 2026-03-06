import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: "Navigation/Sidebar",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const sampleSections = [
  {
    label: "Navigation",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: <span>◎</span>,
        active: true,
      },
      { id: "accounts", label: "Accounts", icon: <span>▣</span> },
      { id: "transactions", label: "Transactions", icon: <span>⇄</span> },
      {
        id: "crypto",
        label: "Crypto Assets",
        icon: <span>◎</span>,
        badge: 28,
        badgeVariant: "purple" as const,
      },
      { id: "payments", label: "Payments", icon: <span>▦</span>, badge: 14 },
      { id: "reports", label: "Reports", icon: <span>▤</span> },
    ],
  },
];

const sampleTeam = [
  { name: "Alice Johnson", initials: "AJ" },
  { name: "Bob Smith", initials: "BS" },
  { name: "Carol Davis", initials: "CD" },
];

export const Default: Story = {
  args: {
    sections: sampleSections,
    teamMembers: sampleTeam,
  },
};

export const Collapsed: Story = {
  args: {
    sections: sampleSections,
    collapsed: true,
  },
};

export const WithBadges: Story = {
  args: {
    sections: sampleSections,
    teamMembers: sampleTeam,
  },
};
