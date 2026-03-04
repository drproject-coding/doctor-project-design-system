import { Meta, StoryObj } from "@storybook/react";
import { ContactsList } from "./ContactsList";

const meta: Meta<typeof ContactsList> = {
  component: ContactsList,
  title: "Screens/Contacts/ContactsList",
};

export default meta;
type Story = StoryObj<typeof ContactsList>;

export const ListV1: Story = {};
export const ListV2: Story = {};
export const NewContact: Story = {};
export const Empty: Story = {};
