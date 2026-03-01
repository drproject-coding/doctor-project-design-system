import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: "Role",
    children: [
      <option key="" value="">
        Select a role...
      </option>,
      <option key="admin" value="admin">
        Admin
      </option>,
      <option key="editor" value="editor">
        Editor
      </option>,
      <option key="viewer" value="viewer">
        Viewer
      </option>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    label: "Locked",
    disabled: true,
    children: <option>Cannot change</option>,
  },
};
