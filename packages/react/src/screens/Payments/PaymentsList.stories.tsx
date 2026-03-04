import { Meta, StoryObj } from "@storybook/react";
import { PaymentsList } from "./PaymentsList";

const meta: Meta<typeof PaymentsList> = {
  component: PaymentsList,
  title: "Screens/Payments/PaymentsList",
};

export default meta;
type Story = StoryObj<typeof PaymentsList>;

export const Default: Story = {};
export const LightTheme: Story = {};
export const DarkTheme: Story = {};
