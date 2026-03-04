import { Meta, StoryObj } from "@storybook/react";
import { InboxList } from "./InboxList";

const meta: Meta<typeof InboxList> = {
  component: InboxList,
  title: "Screens/Inbox/InboxList",
};

export default meta;
type Story = StoryObj<typeof InboxList>;

export const Default: Story = {};
