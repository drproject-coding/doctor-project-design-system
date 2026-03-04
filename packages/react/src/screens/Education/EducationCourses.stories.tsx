import { Meta, StoryObj } from "@storybook/react";
import { EducationCourses } from "./EducationCourses";

const meta: Meta<typeof EducationCourses> = {
  component: EducationCourses,
  title: "Screens/Education/Courses",
};

export default meta;
type Story = StoryObj<typeof EducationCourses>;

export const Default: Story = {};
export const LightTheme: Story = {};
export const DarkTheme: Story = {};
