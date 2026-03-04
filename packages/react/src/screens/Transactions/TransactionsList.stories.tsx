import { Meta, StoryObj } from "@storybook/react";
import { TransactionsList } from "./TransactionsList";

const meta: Meta<typeof TransactionsList> = {
  component: TransactionsList,
  title: "Screens/Transactions/TransactionsList",
};

export default meta;
type Story = StoryObj<typeof TransactionsList>;

export const ListV1: Story = {};
export const ListV2: Story = {};
export const Invoice: Story = {};
export const Empty: Story = {};
