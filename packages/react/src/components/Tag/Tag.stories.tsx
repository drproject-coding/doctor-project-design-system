import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [undefined, "purple", "mint", "pink", "yellow", "grey"],
    },
    filled: { control: "boolean" },
    dark: { control: "boolean" },
    dot: { control: "boolean" },
    closeable: { control: "boolean" },
  },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: { children: "Tag" } };
export const Purple: Story = { args: { children: "Purple", color: "purple" } };
export const Mint: Story = { args: { children: "Success", color: "mint" } };
export const Pink: Story = { args: { children: "Error", color: "pink" } };
export const Filled: Story = {
  args: { children: "Filled", color: "purple", filled: true },
};
export const WithDot: Story = {
  args: { children: "Active", color: "mint", dot: true },
};
export const Closeable: Story = {
  args: { children: "Remove me", closeable: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Tag>Default</Tag>
      <Tag color="purple">Purple</Tag>
      <Tag color="mint">Mint</Tag>
      <Tag color="pink">Pink</Tag>
      <Tag color="yellow">Yellow</Tag>
      <Tag color="grey">Grey</Tag>
      <Tag color="purple" filled>
        Filled
      </Tag>
      <Tag color="mint" dot>
        With Dot
      </Tag>
      <Tag closeable>Closeable</Tag>
    </div>
  ),
};
