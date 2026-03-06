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
import { ProgressBar } from "../ProgressBar/ProgressBar";
import {
  cards,
  transactions,
  balances,
  limits,
  bankingNavItems,
  type BankMenuItem,
} from "../../data/banking";

const meta: Meta = {
  title: "Pages/Accounts",
  parameters: { layout: "fullscreen" },
};
export default meta;

/* ─── Shared Banking Sidebar ────────────────── */

const BankingSidebar = ({
  activeItem = "Accounts",
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
      Doctor Project
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

/* ─── Styled Credit Card Component ──────────── */

const CreditCardDisplay = ({
  card,
  large = false,
}: {
  card: (typeof cards)[0];
  large?: boolean;
}) => (
  <div
    style={{
      background: card.color,
      color: "#fff",
      padding: large ? "28px 32px" : "20px 24px",
      width: large ? "380px" : "320px",
      minHeight: large ? "220px" : "180px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontFamily: "var(--drp-font-primary)",
      border: "2px solid var(--drp-black)",
      position: "relative",
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <span
        style={{
          fontSize: "12px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          opacity: 0.8,
        }}
      >
        {card.type === "debit" ? "Debit" : "Credit"}
      </span>
      <span style={{ fontSize: "11px", opacity: 0.7 }}>Doctor Project</span>
    </div>
    <div
      style={{
        fontSize: large ? "18px" : "16px",
        letterSpacing: "0.15em",
        fontWeight: 600,
      }}
    >
      {card.number}
    </div>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <div>
        <div style={{ fontSize: "10px", opacity: 0.7, marginBottom: "2px" }}>
          Card Holder
        </div>
        <div style={{ fontSize: "13px", fontWeight: 600 }}>{card.holder}</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontSize: "10px", opacity: 0.7, marginBottom: "2px" }}>
          Valid Thru
        </div>
        <div style={{ fontSize: "13px", fontWeight: 600 }}>{card.valid}</div>
      </div>
      {/* Mastercard-like circles */}
      <div style={{ display: "flex", gap: "-6px", position: "relative" }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.6)",
          }}
        />
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.35)",
            marginLeft: "-10px",
          }}
        />
      </div>
    </div>
  </div>
);

/* ─── Limits Panel ──────────────────────────── */

const LimitsPanel = () => (
  <div
    style={{
      width: "280px",
      minWidth: "280px",
      borderLeft: "2px solid var(--drp-black)",
      padding: "24px",
      fontFamily: "var(--drp-font-primary)",
    }}
  >
    <h3
      style={{
        fontSize: "16px",
        fontWeight: 700,
        marginBottom: "24px",
        margin: "0 0 24px",
      }}
    >
      Your limits
    </h3>
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {limits.map((limit) => {
        const percent = Math.round((limit.spent / limit.total) * 100);
        const left = limit.total - limit.spent;
        return (
          <div key={limit.label}>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 600,
                marginBottom: "8px",
              }}
            >
              {limit.label}
            </div>
            <div
              style={{
                height: "8px",
                background: "rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${percent}%`,
                  background: limit.color,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "4px",
                fontSize: "11px",
                color: "#666",
              }}
            >
              <span>Spent ${limit.spent.toLocaleString()}</span>
              <span>Left ${left.toLocaleString()}</span>
            </div>
          </div>
        );
      })}
    </div>
    <Button variant="primary" block style={{ marginTop: "24px" }}>
      Setup limits
    </Button>
  </div>
);

/* ─── Transfer Row ──────────────────────────── */

const TransferRow = ({ tx }: { tx: (typeof transactions)[0] }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 0",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      fontFamily: "var(--drp-font-primary)",
    }}
  >
    <div
      style={{
        width: 36,
        height: 36,
        background: tx.iconBg,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: "14px",
        flexShrink: 0,
      }}
    >
      {tx.icon}
    </div>
    <div style={{ flex: 1, minWidth: 0 }}>
      <div
        style={{
          fontSize: "13px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {tx.description}
      </div>
      <div style={{ fontSize: "11px", color: "#999" }}>{tx.type}</div>
    </div>
    <div style={{ textAlign: "right", minWidth: "90px" }}>
      <div
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: tx.amount > 0 ? "#00AA00" : "inherit",
        }}
      >
        {tx.amount > 0 ? "+" : ""}
        {tx.amount.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}{" "}
        USD
      </div>
      <div style={{ fontSize: "11px", color: "#999" }}>{tx.date}</div>
    </div>
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
  </div>
);

/* ─── Story: AccountsList (List v.1) ────────── */

export const AccountsList: StoryObj = {
  name: "List v.1",
  render: () => {
    const card = cards[0];
    const depositData = [
      {
        name: "Savings Deposit",
        rate: "4.5%",
        term: "12 months",
        amount: "$15,000",
      },
      {
        name: "Fixed Deposit",
        rate: "5.2%",
        term: "24 months",
        amount: "$25,000",
      },
      {
        name: "Flexible Deposit",
        rate: "3.8%",
        term: "6 months",
        amount: "$8,500",
      },
    ];

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <BankingSidebar activeItem="Accounts" />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <BankingTopbar title="Accounts" />
            </Topbar>
          }
        >
          <div style={{ display: "flex", height: "100%" }}>
            {/* Main content */}
            <div style={{ flex: 1, padding: "24px", overflow: "auto" }}>
              {/* Your cards section */}
              <Card>
                <CardHeader
                  title="Your cards"
                  action={
                    <Tabs
                      items={[
                        { label: "Overview", key: "overview" },
                        { label: "Currency", key: "currency" },
                        { label: "Statement", key: "statement" },
                      ]}
                    />
                  }
                />
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "flex-start",
                    padding: "16px 0",
                  }}
                >
                  {/* Credit card display */}
                  <CreditCardDisplay card={card} />
                  {/* Card details alongside */}
                  <div
                    style={{
                      flex: 1,
                      fontFamily: "var(--drp-font-primary)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "28px",
                        fontWeight: 700,
                        marginBottom: "4px",
                      }}
                    >
                      {card.balance.toLocaleString()} USD
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        marginBottom: "16px",
                      }}
                    >
                      Available amount
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "#666",
                        marginBottom: "4px",
                      }}
                    >
                      Account number
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        marginBottom: "16px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {card.number}
                    </div>
                    <Button variant="outline" size="sm">
                      Get card details
                    </Button>
                  </div>
                </div>
                {/* Dot pagination */}
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    justifyContent: "center",
                    padding: "8px 0",
                  }}
                >
                  {cards.map((c, i) => (
                    <div
                      key={c.id}
                      style={{
                        width: i === 0 ? 20 : 8,
                        height: 8,
                        background:
                          i === 0 ? "var(--drp-purple)" : "rgba(0,0,0,0.15)",
                      }}
                    />
                  ))}
                </div>
              </Card>

              {/* Latest transfers */}
              <Card style={{ marginTop: "16px" }}>
                <CardHeader title="Latest transfers" />
                <div>
                  {transactions.slice(0, 6).map((tx) => (
                    <TransferRow key={tx.id} tx={tx} />
                  ))}
                </div>
              </Card>

              {/* Your deposits */}
              <Card style={{ marginTop: "16px" }}>
                <CardHeader title="Your deposits" />
                <Table
                  columns={[
                    { key: "name", header: "Deposit" },
                    { key: "rate", header: "Interest Rate" },
                    { key: "term", header: "Term" },
                    { key: "amount", header: "Amount" },
                  ]}
                  data={depositData}
                />
              </Card>
            </div>

            {/* Right sidebar panel */}
            <LimitsPanel />
          </div>
        </AppShell>
      </div>
    );
  },
};

/* ─── Story: AccountsDetail (List v.2) ──────── */

export const AccountsDetail: StoryObj = {
  name: "List v.2",
  render: () => {
    const card = cards[0];

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <BankingSidebar activeItem="Accounts" />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <BankingTopbar title="Accounts" />
            </Topbar>
          }
        >
          <div style={{ display: "flex", height: "100%" }}>
            {/* Main content */}
            <div style={{ flex: 1, padding: "24px", overflow: "auto" }}>
              {/* Large card display with details */}
              <Card>
                <CardHeader title="Card Details" />
                <div
                  style={{
                    display: "flex",
                    gap: "32px",
                    alignItems: "flex-start",
                    padding: "16px 0",
                  }}
                >
                  <CreditCardDisplay card={card} large />
                  <div
                    style={{
                      flex: 1,
                      fontFamily: "var(--drp-font-primary)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: 700,
                        marginBottom: "4px",
                      }}
                    >
                      {card.balance.toLocaleString()} USD
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        marginBottom: "20px",
                      }}
                    >
                      Available amount
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "16px",
                        marginBottom: "20px",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "#999",
                            marginBottom: "2px",
                          }}
                        >
                          Card Number
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {card.number}
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "#999",
                            marginBottom: "2px",
                          }}
                        >
                          Status
                        </div>
                        <Tag color="mint" filled>
                          {card.status}
                        </Tag>
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "#999",
                            marginBottom: "2px",
                          }}
                        >
                          Blocked Amount
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: 600 }}>
                          ${card.blockedAmount.toLocaleString()}
                        </div>
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "#999",
                            marginBottom: "2px",
                          }}
                        >
                          Valid Thru
                        </div>
                        <div style={{ fontSize: "14px", fontWeight: 600 }}>
                          {card.valid}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <Button variant="primary" size="sm">
                        Get card details
                      </Button>
                      <Button variant="outline" size="sm">
                        Block card
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Latest transfers */}
              <Card style={{ marginTop: "16px" }}>
                <CardHeader title="Latest transfers" />
                <div>
                  {transactions.slice(0, 8).map((tx) => (
                    <TransferRow key={tx.id} tx={tx} />
                  ))}
                </div>
              </Card>
            </div>

            {/* Right sidebar panel */}
            <LimitsPanel />
          </div>
        </AppShell>
      </div>
    );
  },
};
