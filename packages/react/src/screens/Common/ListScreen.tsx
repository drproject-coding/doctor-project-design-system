import React, { useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Table } from "../../components/Table";
import { Pagination } from "../../components/Pagination";
import {
  DashboardLayout,
  DashboardLayoutProps,
} from "../../components/Layout/DashboardLayout";

export interface ListScreenProps extends Omit<
  DashboardLayoutProps,
  "children"
> {
  title: string;
  subtitle?: string;
  data: any[];
  columns: Array<{
    key: string;
    label: string;
    render?: (value: any) => React.ReactNode;
  }>;
  onAddClick?: () => void;
  onRowClick?: (row: any) => void;
  showSearch?: boolean;
  itemsPerPage?: number;
}

export const ListScreen: React.FC<ListScreenProps> = ({
  title,
  subtitle,
  data,
  columns,
  onAddClick,
  onRowClick,
  showSearch = true,
  itemsPerPage = 10,
  ...layoutProps
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIdx, startIdx + itemsPerPage);

  return (
    <DashboardLayout
      {...layoutProps}
      topBarProps={{
        title,
        actions: onAddClick && (
          <Button onClick={onAddClick} className="drp-btn drp-btn--primary">
            + Add New
          </Button>
        ),
        ...layoutProps.topBarProps,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--drp-space-6)",
        }}
      >
        {subtitle && <p className="drp-caption">{subtitle}</p>}

        {showSearch && (
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        )}

        <Table
          columns={columns.map((col) => ({
            key: col.key,
            header: col.label,
            render: col.render
              ? (row: any) => col.render!(row[col.key])
              : undefined,
          }))}
          data={paginatedData}
        />

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </DashboardLayout>
  );
};
