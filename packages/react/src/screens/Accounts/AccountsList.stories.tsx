import { Meta, StoryObj } from "@storybook/react";
import { AccountsList } from "./AccountsList";

const meta: Meta<typeof AccountsList> = {
  component: AccountsList,
  title: "Screens/Accounts/AccountsList",
};

export default meta;
type Story = StoryObj<typeof AccountsList>;

export const ListV1: Story = {};
export const ListV2: Story = {};
