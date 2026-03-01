import type { Meta, StoryObj } from "@storybook/react";
import { StatusDot } from "./StatusDot";

const meta: Meta<typeof StatusDot> = {
  title: "Components/StatusDot",
  component: StatusDot,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [undefined, "purple", "mint", "pink", "yellow"],
    },
    pulse: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof StatusDot>;

export const Default: Story = {};
export const Purple: Story = { args: { color: "purple" } };
export const Mint: Story = { args: { color: "mint" } };
export const Pink: Story = { args: { color: "pink" } };
export const Pulsing: Story = { args: { color: "mint", pulse: true } };

export const StatusList: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StatusDot color="mint" pulse /> Online
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StatusDot color="yellow" /> Away
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StatusDot color="pink" /> Busy
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <StatusDot /> Offline
      </div>
    </div>
  ),
};
