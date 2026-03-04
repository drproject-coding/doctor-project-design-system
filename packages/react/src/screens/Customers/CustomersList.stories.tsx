import { Meta, StoryObj } from "@storybook/react";
import { CustomersList } from "./CustomersList";

const meta: Meta<typeof CustomersList> = {
  component: CustomersList,
  title: "Screens/Customers/CustomersList",
};

export default meta;
type Story = StoryObj<typeof CustomersList>;

export const ListV1: Story = {};
export const ListV2: Story = {};
export const ListV3: Story = {};
