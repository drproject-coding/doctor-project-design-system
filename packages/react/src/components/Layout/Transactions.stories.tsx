import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppShell, Sidebar, Topbar } from "./Layout";
import { Card, CardHeader } from "../Card/Card";
import { Table } from "../Table/Table";
import { Tabs } from "../Tabs/Tabs";
import { Badge } from "../Badge/Badge";
import { Tag } from "../Tag/Tag";
import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { EmptyState } from "../EmptyState/EmptyState";
import {
  transactions,
  balances,
  bankingNavItems,
  type BankMenuItem,
} from "../../data/banking";

const meta: Meta = {
  title: "Pages/Transactions",
  parameters: { layout: "fullscreen" },
};
export default meta;

/* ─── Shared Banking Sidebar ────────────────── */

const BankingSidebar = ({
  activeItem = "Transactions",
}: {
  activeItem?: string;
}) => (
  <div
    style={{
      padding: "16px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* Logo */}
    <h2
      style={{
        fontSize: "18px",
        fontWeight: 800,
        marginBottom: "32px",
        fontFamily: "var(--drp-font-primary)",
        letterSpacing: "0.08em",
      }}
    >
      BRUDDLE
    </h2>

    {/* Navigation */}
    <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {bankingNavItems.map((item: BankMenuItem) => {
        const isActive = item.label === activeItem;
        return (
          <a
            key={item.label}
            href={item.href}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 12px",
              textDecoration: "none",
              color: "inherit",
              fontFamily: "var(--drp-font-primary)",
              fontSize: "14px",
              fontWeight: 600,
              background: isActive ? "rgba(99,29,237,0.08)" : "transparent",
              borderLeft: isActive
                ? "3px solid var(--drp-purple)"
                : "3px solid transparent",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              dangerouslySetInnerHTML={{ __html: item.iconSvg }}
            />
            <span>{item.label}</span>
            {item.badge && (
              <Badge variant="filled" className="drp-badge--filled">
                {item.badge}
              </Badge>
            )}
          </a>
        );
      })}
    </nav>

    {/* Cards section */}
    <div style={{ marginTop: "24px" }}>
      <p
        style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#999",
          fontFamily: "var(--drp-font-primary)",
          fontWeight: 700,
          marginBottom: "8px",
          padding: "0 12px",
        }}
      >
        Cards
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            textDecoration: "none",
            color: "inherit",
            fontFamily: "var(--drp-font-primary)",
            fontSize: "13px",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              background: "#631DED",
              display: "inline-block",
            }}
          />
          Debit Card **** 7890
        </a>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 12px",
            textDecoration: "none",
            color: "inherit",
            fontFamily: "var(--drp-font-primary)",
            fontSize: "13px",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              background: "#FF6C01",
              display: "inline-block",
            }}
          />
          Credit Card **** 4340
        </a>
        <a
          href="#"
          style={{
            padding: "8px 12px",
            textDecoration: "none",
            color: "var(--drp-purple)",
            fontFamily: "var(--drp-font-primary)",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          + Open a card
        </a>
      </div>
    </div>

    {/* Balances section */}
    <div style={{ marginTop: "20px" }}>
      <p
        style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#999",
          fontFamily: "var(--drp-font-primary)",
          fontWeight: 700,
          marginBottom: "8px",
          padding: "0 12px",
        }}
      >
        Balances
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {balances.map((b) => (
          <div
            key={b.currency}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              fontFamily: "var(--drp-font-primary)",
              fontSize: "13px",
            }}
          >
            <span>{b.flag}</span>
            <span style={{ fontWeight: 600 }}>
              {b.amount.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <span style={{ color: "#999" }}>{b.currency}</span>
          </div>
        ))}
        <a
          href="#"
          style={{
            padding: "8px 12px",
            textDecoration: "none",
            color: "var(--drp-purple)",
            fontFamily: "var(--drp-font-primary)",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          + Open a balance
        </a>
      </div>
    </div>

    {/* User at bottom */}
    <div
      style={{
        marginTop: "auto",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px",
        borderTop: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <Avatar size="sm" initials="HR" />
      <div>
        <div
          style={{
            fontFamily: "var(--drp-font-primary)",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          Henry Richardson
        </div>
        <div
          style={{
            fontFamily: "var(--drp-font-primary)",
            fontSize: "11px",
            color: "#999",
          }}
        >
          Personal account
        </div>
      </div>
    </div>
  </div>
);

/* ─── Shared Banking Topbar ─────────────────── */

const BankingTopbar = ({ title }: { title: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "0 24px",
    }}
  >
    <h1
      style={{
        fontSize: "16px",
        fontWeight: 700,
        fontFamily: "var(--drp-font-primary)",
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        margin: 0,
      }}
    >
      {title}
    </h1>
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {/* Search icon */}
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "6px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="9" cy="9" r="6" />
          <line x1="14" y1="14" x2="18" y2="18" />
        </svg>
      </button>
      {/* Bell icon */}
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "6px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 8a6 6 0 0 1 12 0c0 3 1.5 5 2 6H2c.5-1 2-3 2-6z" />
          <path d="M8 16a2 2 0 0 0 4 0" />
        </svg>
      </button>
      {/* Apps button */}
      <Button variant="outline" size="sm">
        Apps
      </Button>
      {/* Create new */}
      <Button variant="primary" size="sm">
        Create new
      </Button>
    </div>
  </div>
);

/* ─── SVG Icon Helpers ──────────────────────── */

const FilterIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M2 3h12M4 6.5h8M6 10h4M7 13.5h2" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M8 2v9M4 8l4 4 4-4M2 13h12" />
  </svg>
);

const SortIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M3 4l3-3 3 3M3 8l3 3 3-3" />
  </svg>
);

/* ─── Story: TransactionsList ───────────────── */

export const TransactionsList: StoryObj = {
  name: "TransactionsList",
  render: () => {
    const [page, setPage] = useState(1);
    const totalPages = 10;

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <BankingSidebar activeItem="Transactions" />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <BankingTopbar title="Transactions" />
            </Topbar>
          }
        >
          <div style={{ padding: "24px" }}>
            {/* Tabs and actions row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <Tabs
                items={[
                  { label: "All Accounts", key: "all" },
                  { label: "USD Account", key: "usd" },
                  { label: "EUR Account", key: "eur" },
                  { label: "GBP Account", key: "gbp" },
                ]}
              />
              <div style={{ display: "flex", gap: "8px" }}>
                <Button variant="outline" size="sm" iconLeft={<FilterIcon />}>
                  Apply Filter
                </Button>
                <Button variant="outline" size="sm" iconLeft={<DownloadIcon />}>
                  Export to CSV
                </Button>
              </div>
            </div>

            {/* Transactions table */}
            <Card>
              <Table
                columns={[
                  {
                    key: "dateTime",
                    header: "Date & Time",
                    render: (row) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        <span style={{ fontSize: "13px" }}>
                          {String(row.date)}
                        </span>
                        <span style={{ fontSize: "11px", color: "#999" }}>
                          {String(row.time)}
                        </span>
                        <SortIcon />
                      </div>
                    ),
                  },
                  {
                    key: "payment",
                    header: "Payment",
                    render: (row) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            background: String(row.iconBg),
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700,
                            fontSize: "12px",
                            flexShrink: 0,
                          }}
                        >
                          {String(row.icon)}
                        </div>
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            fontFamily: "var(--drp-font-primary)",
                          }}
                        >
                          {String(row.description)}
                        </span>
                      </div>
                    ),
                  },
                  {
                    key: "type",
                    header: "Service",
                    render: (row) => (
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#666",
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {String(row.type)}
                      </span>
                    ),
                  },
                  {
                    key: "fee",
                    header: "Fee",
                    render: (row) => (
                      <span
                        style={{
                          fontSize: "13px",
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        ${Number(row.fee).toFixed(2)}
                      </span>
                    ),
                  },
                  {
                    key: "amount",
                    header: "Price",
                    render: (row) => {
                      const amt = Number(row.amount);
                      return (
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            fontFamily: "var(--drp-font-primary)",
                            color: amt > 0 ? "#00AA00" : "inherit",
                          }}
                        >
                          {amt > 0 ? "+" : ""}
                          {amt.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}{" "}
                          USD
                        </span>
                      );
                    },
                  },
                  {
                    key: "actions",
                    header: "",
                    render: () => (
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "18px",
                          color: "#999",
                          padding: "4px 8px",
                        }}
                      >
                        ...
                      </button>
                    ),
                  },
                ]}
                data={transactions}
              />

              {/* Pagination */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  padding: "16px 0",
                  fontFamily: "var(--drp-font-primary)",
                  fontSize: "13px",
                }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Prev
                </Button>
                <span style={{ color: "#666" }}>
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </div>
            </Card>
          </div>
        </AppShell>
      </div>
    );
  },
};

/* ─── Story: TransactionsTable (v.2) ────────── */

export const TransactionsTable: StoryObj = {
  name: "TransactionsTable",
  render: () => {
    const [page, setPage] = useState(1);
    const totalPages = 10;

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <BankingSidebar activeItem="Transactions" />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <BankingTopbar title="Transactions" />
            </Topbar>
          }
        >
          <div style={{ padding: "24px" }}>
            {/* Tabs and actions row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <Tabs
                items={[
                  { label: "All Accounts", key: "all" },
                  { label: "USD Account", key: "usd" },
                  { label: "EUR Account", key: "eur" },
                  { label: "GBP Account", key: "gbp" },
                ]}
              />
              <div style={{ display: "flex", gap: "8px" }}>
                {/* Date range picker */}
                <Button variant="outline" size="sm">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    style={{ marginRight: "6px" }}
                  >
                    <rect x="1" y="2" width="12" height="11" />
                    <line x1="1" y1="5" x2="13" y2="5" />
                    <line x1="4" y1="0.5" x2="4" y2="3.5" />
                    <line x1="10" y1="0.5" x2="10" y2="3.5" />
                  </svg>
                  August 2023
                </Button>
                <Button variant="outline" size="sm" iconLeft={<FilterIcon />}>
                  Apply Filter
                </Button>
                <Button variant="outline" size="sm" iconLeft={<DownloadIcon />}>
                  Export to CSV
                </Button>
              </div>
            </div>

            {/* Detailed transactions table */}
            <Card>
              <Table
                columns={[
                  {
                    key: "dateTime",
                    header: "Date & Time",
                    render: (row) => (
                      <div style={{ fontFamily: "var(--drp-font-primary)" }}>
                        <div style={{ fontSize: "13px", fontWeight: 600 }}>
                          {String(row.date)}
                        </div>
                        <div style={{ fontSize: "11px", color: "#999" }}>
                          {String(row.time)}
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "payment",
                    header: "Payment",
                    render: (row) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            background: String(row.iconBg),
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700,
                            fontSize: "13px",
                            flexShrink: 0,
                          }}
                        >
                          {String(row.icon)}
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 600,
                              fontFamily: "var(--drp-font-primary)",
                            }}
                          >
                            {String(row.description)}
                          </div>
                          <div
                            style={{
                              fontSize: "11px",
                              color: "#999",
                              fontFamily: "var(--drp-font-primary)",
                            }}
                          >
                            {String(row.type)}
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "type",
                    header: "Service",
                    render: (row) => <Tag color="grey">{String(row.type)}</Tag>,
                  },
                  {
                    key: "fee",
                    header: "Fee",
                    render: (row) => (
                      <span
                        style={{
                          fontSize: "13px",
                          fontFamily: "var(--drp-font-primary)",
                          color: "#666",
                        }}
                      >
                        ${Number(row.fee).toFixed(2)}
                      </span>
                    ),
                  },
                  {
                    key: "amount",
                    header: "Price",
                    render: (row) => {
                      const amt = Number(row.amount);
                      return (
                        <div style={{ textAlign: "right" }}>
                          <span
                            style={{
                              fontSize: "13px",
                              fontWeight: 700,
                              fontFamily: "var(--drp-font-primary)",
                              color: amt > 0 ? "#00AA00" : "inherit",
                            }}
                          >
                            {amt > 0 ? "+" : ""}
                            {amt.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}{" "}
                            USD
                          </span>
                        </div>
                      );
                    },
                  },
                  {
                    key: "actions",
                    header: "",
                    render: () => (
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "18px",
                          color: "#999",
                          padding: "4px 8px",
                        }}
                      >
                        ...
                      </button>
                    ),
                  },
                ]}
                data={transactions}
              />

              {/* Pagination */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  padding: "16px 0",
                  fontFamily: "var(--drp-font-primary)",
                  fontSize: "13px",
                }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Prev
                </Button>
                <span style={{ color: "#666" }}>
                  Page {page} of {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </Button>
              </div>
            </Card>
          </div>
        </AppShell>
      </div>
    );
  },
};

/* ─── Story: TransactionInvoice ─────────────── */

export const TransactionInvoice: StoryObj = {
  name: "TransactionInvoice",
  render: () => {
    const [modalOpen, setModalOpen] = useState(true);

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <BankingSidebar activeItem="Transactions" />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <BankingTopbar title="Transactions" />
            </Topbar>
          }
        >
          <div style={{ padding: "24px" }}>
            {/* Transaction list in background */}
            <Card>
              <CardHeader title="All Transactions" />
              <Table
                columns={[
                  {
                    key: "dateTime",
                    header: "Date & Time",
                    render: (row) => (
                      <span
                        style={{
                          fontSize: "13px",
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {String(row.date)} {String(row.time)}
                      </span>
                    ),
                  },
                  {
                    key: "description",
                    header: "Payment",
                    render: (row) => (
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {String(row.description)}
                      </span>
                    ),
                  },
                  {
                    key: "amount",
                    header: "Price",
                    render: (row) => {
                      const amt = Number(row.amount);
                      return (
                        <span
                          style={{
                            fontSize: "13px",
                            fontWeight: 700,
                            fontFamily: "var(--drp-font-primary)",
                            color: amt > 0 ? "#00AA00" : "inherit",
                          }}
                        >
                          {amt > 0 ? "+" : ""}
                          {amt.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}{" "}
                          USD
                        </span>
                      );
                    },
                  },
                ]}
                data={transactions.slice(0, 5)}
              />
            </Card>
          </div>

          {/* Modal overlay */}
          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Transaction details"
            footer={
              <div style={{ display: "flex", gap: "8px", width: "100%" }}>
                <Button variant="outline" style={{ flex: 1 }}>
                  Print
                </Button>
                <Button variant="outline" style={{ flex: 1 }}>
                  Issue Refund
                </Button>
              </div>
            }
          >
            <div style={{ fontFamily: "var(--drp-font-primary)" }}>
              {/* Purple header area */}
              <div
                style={{
                  background: "#631DED",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "-16px -16px 16px -16px",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  >
                    <path d="M4 14l8 8L24 6" />
                  </svg>
                </div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: "24px",
                    fontWeight: 700,
                    marginBottom: "4px",
                  }}
                >
                  2,702.12 USD
                </div>
                <div
                  style={{ color: "rgba(255,255,255,0.8)", fontSize: "14px" }}
                >
                  to James Dean
                </div>
              </div>

              {/* Completion status */}
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    color: "#666",
                    marginBottom: "6px",
                  }}
                >
                  Completed Thursday 29 April
                </div>
                <Tag color="mint" filled>
                  Paid
                </Tag>
              </div>

              {/* Details sections */}
              <div
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                  paddingTop: "16px",
                }}
              >
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#999",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    Send To
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      Name
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>
                      James Dean
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      Email
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>
                      james.dean@email.com
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      Amount
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>
                      2,702.12 USD
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.1)",
                    paddingTop: "16px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#999",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    Bank Details
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      IBAN
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>
                      GB29 NWBK 6016 1331 9268 19
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      SWIFT code
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>
                      NWBKGB2L
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "4px",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      Transfer number
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>
                      #TXN-2023-04-29-001
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ fontSize: "13px", color: "#666" }}>
                      Exchange Rate
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: 600 }}>
                      1 USD = 0.82 GBP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </AppShell>
      </div>
    );
  },
};

/* ─── Story: TransactionsEmpty ──────────────── */

export const TransactionsEmpty: StoryObj = {
  name: "TransactionsEmpty",
  render: () => (
    <div style={{ height: "100vh" }}>
      <AppShell
        sidebar={
          <Sidebar>
            <BankingSidebar activeItem="Transactions" />
          </Sidebar>
        }
        topbar={
          <Topbar>
            <BankingTopbar title="Transactions" />
          </Topbar>
        }
      >
        <div
          style={{
            padding: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "calc(100vh - 80px)",
          }}
        >
          <EmptyState
            title="No transactions found?"
            description="You don't have any transactions yet. Create a new account to get started with your first transaction."
            action={<Button variant="primary">Create a new account</Button>}
          />
        </div>
      </AppShell>
    </div>
  ),
};
