import React from "react";
import { Card } from "../../components/Card";
import { ChartCard } from "../../components/Chart";

export interface ChartContainerProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">{children}</div>
    </div>
  );
};

export const ChartBarVariant: React.FC = () => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Bar Chart</h3>
    <p className="text-gray-600">Bar chart visualization with mock data</p>
  </Card>
);

export const ChartPolarVariant: React.FC = () => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Polar Chart</h3>
    <p className="text-gray-600">Polar chart visualization with mock data</p>
  </Card>
);

export const ChartWaveVariant: React.FC = () => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Wave Chart</h3>
    <p className="text-gray-600">Wave chart visualization with mock data</p>
  </Card>
);

export const ChartGeometricVariant: React.FC = () => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Geometric Chart</h3>
    <p className="text-gray-600">
      Geometric chart visualization with mock data
    </p>
  </Card>
);

export const ChartHorizontalBarsVariant: React.FC = () => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Horizontal Bars</h3>
    <p className="text-gray-600">
      Horizontal bar chart visualization with mock data
    </p>
  </Card>
);

export const ChartDoubleBarsVariant: React.FC = () => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Double Bars</h3>
    <p className="text-gray-600">
      Double bar chart visualization with mock data
    </p>
  </Card>
);

export const ChartMiscVariant: React.FC = () => (
  <Card className="p-6">
    <h3 className="text-lg font-semibold mb-4">Misc Chart</h3>
    <p className="text-gray-600">
      Miscellaneous chart visualization with mock data
    </p>
  </Card>
);
