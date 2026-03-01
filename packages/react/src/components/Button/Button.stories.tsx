import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        undefined,
        "primary",
        "outline",
        "ghost",
        "ghost-bordered",
        "danger",
        "secondary",
        "dark",
      ],
    },
    size: { control: "select", options: [undefined, "sm", "lg"] },
    block: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { children: "Button" } };
export const Primary: Story = {
  args: { variant: "primary", children: "Primary" },
};
export const Outline: Story = {
  args: { variant: "outline", children: "Outline" },
};
export const Ghost: Story = { args: { variant: "ghost", children: "Ghost" } };
export const GhostBordered: Story = {
  args: { variant: "ghost-bordered", children: "Ghost Bordered" },
};
export const Danger: Story = {
  args: { variant: "danger", children: "Danger" },
};
export const Secondary: Story = {
  args: { variant: "secondary", children: "Secondary" },
};
export const Dark: Story = { args: { variant: "dark", children: "Dark" } };
export const Small: Story = {
  args: { variant: "primary", size: "sm", children: "Small" },
};
export const Large: Story = {
  args: { variant: "primary", size: "lg", children: "Large" },
};
export const Block: Story = {
  args: { variant: "primary", block: true, children: "Full Width" },
};
export const Disabled: Story = {
  args: { variant: "primary", disabled: true, children: "Disabled" },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="ghost-bordered">Ghost Bordered</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="dark">Dark</Button>
    </div>
  ),
};
