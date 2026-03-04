import { Meta, StoryObj } from "@storybook/react";
import { CalendarEvent } from "./CalendarEvent";

const meta: Meta<typeof CalendarEvent> = {
  component: CalendarEvent,
  title: "Screens/Calendar/Event",
};

export default meta;
type Story = StoryObj<typeof CalendarEvent>;

export const Default: Story = {};
