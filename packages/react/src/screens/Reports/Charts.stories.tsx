import { Meta, StoryObj } from "@storybook/react";
import {
  ChartContainer,
  ChartBarVariant,
  ChartPolarVariant,
  ChartWaveVariant,
  ChartGeometricVariant,
  ChartHorizontalBarsVariant,
  ChartDoubleBarsVariant,
  ChartMiscVariant,
} from "./ChartContainer";

const meta: Meta<typeof ChartContainer> = {
  component: ChartContainer,
  title: "Screens/Reports/Charts",
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

export const BarChart: Story = {
  args: {
    title: "Bar Charts",
    subtitle: "Revenue and sales data visualization",
    children: <ChartBarVariant />,
  },
};

export const PolarChart: Story = {
  args: {
    title: "Polar Charts",
    children: <ChartPolarVariant />,
  },
};

export const WaveChart: Story = {
  args: {
    title: "Wave Charts",
    children: <ChartWaveVariant />,
  },
};

export const GeometricChart: Story = {
  args: {
    title: "Geometric Charts",
    children: <ChartGeometricVariant />,
  },
};

export const HorizontalBars: Story = {
  args: {
    title: "Horizontal Bar Charts",
    children: <ChartHorizontalBarsVariant />,
  },
};

export const DoubleBars: Story = {
  args: {
    title: "Double Bar Charts",
    children: <ChartDoubleBarsVariant />,
  },
};

export const MiscChart: Story = {
  args: {
    title: "Miscellaneous Charts",
    children: <ChartMiscVariant />,
  },
};
