import { Meta, StoryObj } from "@storybook/react";
import { ProductsList } from "./ProductsList";

const meta: Meta<typeof ProductsList> = {
  component: ProductsList,
  title: "Screens/Products/ProductsList",
};

export default meta;
type Story = StoryObj<typeof ProductsList>;

export const ListV1: Story = {};
export const ListV2: Story = {};
export const ListV3: Story = {};
