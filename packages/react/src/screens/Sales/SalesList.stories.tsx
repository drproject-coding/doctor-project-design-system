import { Meta, StoryObj } from "@storybook/react";
import { SalesList } from "./SalesList";

const meta: Meta<typeof SalesList> = {
  component: SalesList,
  title: "Screens/Sales/SalesList",
};

export default meta;
type Story = StoryObj<typeof SalesList>;

export const ListV1: Story = {};
export const ListV2: Story = {};
