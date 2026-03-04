import { Meta, StoryObj } from "@storybook/react";
import { TopBar } from "./TopBar";

const meta: Meta<typeof TopBar> = {
  component: TopBar,
  title: "Navigation/TopBar",
  argTypes: {
    theme: { control: "radio", options: ["light", "dark"] },
  },
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  args: {
    title: "Page Title",
    showIcon: true,
  },
};

export const WithBreadcrumbs: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Details" },
    ],
  },
};

export const DarkTheme: Story = {
  args: {
    title: "Dark Theme Example",
    theme: "dark",
  },
};
