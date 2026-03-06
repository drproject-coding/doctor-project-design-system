import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppShell, Sidebar, Topbar } from "./Layout";
import { Card, CardHeader } from "../Card/Card";
import { Badge } from "../Badge/Badge";
import { Avatar } from "../Avatar/Avatar";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { Divider } from "../Divider/Divider";
import {
  bankingNavItems,
  balances,
  contacts,
  transactions,
  serviceProviders,
  paymentCategories,
} from "../../data/banking";

const meta: Meta = {
  title: "Pages/Payments",
  parameters: { layout: "fullscreen" },
};
export default meta;

/* ─── Shared Banking Layout Components ──────────────── */

const BankingSidebar = ({
  activeLabel = "Payments",
}: {
  activeLabel?: string;
}) => (
  <div
    style={{
      padding: "16px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <h2
      style={{
        fontSize: "18px",
        fontWeight: 800,
        marginBottom: "32px",
        fontFamily: "var(--drp-font-primary)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      Doctor Project
    </h2>

    {/* Navigation */}
    <p
      style={{
        fontSize: "11px",
        fontWeight: 600,
        color: "#999",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        margin: "0 0 8px 12px",
        fontFamily: "var(--drp-font-primary)",
      }}
    >
      Navigation
    </p>
    <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {bankingNavItems.map((item) => {
        const active = item.label === activeLabel;
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
              background: active ? "rgba(99,29,237,0.08)" : "transparent",
              borderLeft: active
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
    <p
      style={{
        fontSize: "11px",
        fontWeight: 600,
        color: "#999",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        margin: "24px 0 8px 12px",
        fontFamily: "var(--drp-font-primary)",
      }}
    >
      Cards
    </p>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        padding: "0 12px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          fontFamily: "var(--drp-font-primary)",
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
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "13px",
          fontFamily: "var(--drp-font-primary)",
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
      </div>
      <a
        href="#"
        style={{
          fontSize: "12px",
          color: "var(--drp-purple)",
          textDecoration: "none",
          fontWeight: 600,
          fontFamily: "var(--drp-font-primary)",
          marginTop: "4px",
        }}
      >
        + Open a card
      </a>
    </div>

    {/* Balances section */}
    <p
      style={{
        fontSize: "11px",
        fontWeight: 600,
        color: "#999",
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        margin: "24px 0 8px 12px",
        fontFamily: "var(--drp-font-primary)",
      }}
    >
      Balances
    </p>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        padding: "0 12px",
      }}
    >
      {balances.map((b) => (
        <div
          key={b.currency}
          style={{
            fontSize: "13px",
            fontFamily: "var(--drp-font-primary)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>{b.flag}</span>
          <span>
            {b.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}{" "}
            {b.currency}
          </span>
        </div>
      ))}
      <a
        href="#"
        style={{
          fontSize: "12px",
          color: "var(--drp-purple)",
          textDecoration: "none",
          fontWeight: 600,
          fontFamily: "var(--drp-font-primary)",
          marginTop: "4px",
        }}
      >
        + Open a balance
      </a>
    </div>

    {/* User at bottom */}
    <div
      style={{
        marginTop: "auto",
        padding: "16px 12px 0",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Avatar size="sm" initials="HR" />
      <span
        style={{
          fontSize: "13px",
          fontWeight: 600,
          fontFamily: "var(--drp-font-primary)",
        }}
      >
        Henry Richardson
      </span>
    </div>
  </div>
);

const BankingTopbar = ({
  title,
  leftContent,
}: {
  title: string;
  leftContent?: React.ReactNode;
}) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "0 24px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {leftContent}
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
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      {/* Search icon */}
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
      {/* Bell icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M10 2a6 6 0 016 6v3l2 2H2l2-2V8a6 6 0 016-6z" />
        <path d="M8 17a2 2 0 004 0" />
      </svg>
      {/* Apps with star */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "13px",
          fontWeight: 600,
          fontFamily: "var(--drp-font-primary)",
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M7 1L8.7 5.2H13L9.5 7.8L10.8 12L7 9.4L3.2 12L4.5 7.8L1 5.2H5.3L7 1Z"
            fill="currentColor"
          />
        </svg>
        Apps
      </div>
      <Button variant="primary" size="sm">
        + Create new
      </Button>
    </div>
  </div>
);

const BankingFooter = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "0 24px",
      fontFamily: "var(--drp-font-primary)",
      fontSize: "12px",
      color: "#999",
    }}
  >
    <div style={{ display: "flex", gap: "16px" }}>
      <a href="#" style={{ color: "#999", textDecoration: "none" }}>
        English
      </a>
      <a href="#" style={{ color: "#999", textDecoration: "none" }}>
        Privacy Policy
      </a>
      <a href="#" style={{ color: "#999", textDecoration: "none" }}>
        License
      </a>
      <a href="#" style={{ color: "#999", textDecoration: "none" }}>
        API
      </a>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {/* Settings icon */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="#999"
        strokeWidth="1.5"
      >
        <circle cx="8" cy="8" r="3" />
        <path d="M8 1v2m0 10v2m-5-7H1m14 0h-2m-1.3-4.7l1.4-1.4M3.9 12.1l-1.4 1.4m0-11l1.4 1.4m8.2 8.2l1.4 1.4" />
      </svg>
      {/* Dark mode toggle */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="#999"
        strokeWidth="1.5"
      >
        <path d="M14 8.5A6 6 0 117.5 2a4.5 4.5 0 006.5 6.5z" />
      </svg>
    </div>
  </div>
);

/* ─── Stories ───────────────────────────────────────── */

export const PaymentsList: StoryObj = {
  render: () => {
    const latestTransfers = transactions.slice(0, 5);
    const recentContacts = contacts.slice(0, 6);

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <BankingSidebar activeLabel="Payments" />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <BankingTopbar title="Payments" />
            </Topbar>
          }
          footer={<BankingFooter />}
        >
          <div
            style={{
              padding: "24px",
              display: "grid",
              gridTemplateColumns: "1fr 320px",
              gap: "24px",
            }}
          >
            {/* Main content */}
            <Card>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                }}
              >
                <CardHeader title="Make a payment" />
                <Input
                  placeholder="Search payments..."
                  style={{ maxWidth: "220px" }}
                />
              </div>

              {/* Payment categories */}
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#999",
                  margin: "0 0 12px 0",
                  fontFamily: "var(--drp-font-primary)",
                }}
              >
                Payment categories
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "28px",
                }}
              >
                {paymentCategories.map((cat) => (
                  <div
                    key={cat.id}
                    style={{
                      border: "2px dashed var(--drp-black)",
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      cursor: "pointer",
                    }}
                  >
                    <span style={{ fontSize: "28px" }}>{cat.icon}</span>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          fontWeight: 700,
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {cat.name}
                      </p>
                      <p
                        style={{
                          margin: "4px 0 0",
                          fontSize: "12px",
                          color: "#999",
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {cat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service providers */}
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#999",
                  margin: "0 0 12px 0",
                  fontFamily: "var(--drp-font-primary)",
                }}
              >
                Service providers
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "28px",
                }}
              >
                {serviceProviders.map((sp) => (
                  <div
                    key={sp.id}
                    style={{
                      border: "2px dashed var(--drp-black)",
                      padding: "20px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "rgba(99,29,237,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        flexShrink: 0,
                      }}
                    >
                      {sp.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          fontWeight: 700,
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {sp.name}
                      </p>
                      <p
                        style={{
                          margin: "4px 0 0",
                          fontSize: "12px",
                          color: "#999",
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {sp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Latest transfers */}
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#999",
                  margin: "0 0 12px 0",
                  fontFamily: "var(--drp-font-primary)",
                }}
              >
                Latest transfers
              </p>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {latestTransfers.map((tx) => (
                  <div key={tx.id}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 0",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            background: tx.iconBg,
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: 700,
                            fontSize: "14px",
                            fontFamily: "var(--drp-font-primary)",
                          }}
                        >
                          {tx.icon}
                        </div>
                        <div>
                          <p
                            style={{
                              margin: 0,
                              fontSize: "13px",
                              fontWeight: 600,
                              fontFamily: "var(--drp-font-primary)",
                            }}
                          >
                            {tx.description}
                          </p>
                          <p
                            style={{
                              margin: "2px 0 0",
                              fontSize: "11px",
                              color: "#999",
                              fontFamily: "var(--drp-font-primary)",
                            }}
                          >
                            {tx.type} &middot; {tx.date}
                          </p>
                        </div>
                      </div>
                      <span
                        style={{
                          fontWeight: 700,
                          fontSize: "14px",
                          fontFamily: "var(--drp-font-primary)",
                          color: tx.amount >= 0 ? "#00AA00" : "inherit",
                        }}
                      >
                        {tx.amount >= 0 ? "+" : ""}
                        {tx.amount.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{" "}
                        USD
                      </span>
                    </div>
                    <Divider />
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "16px", textAlign: "center" }}>
                <Button variant="outline">See all transactions</Button>
              </div>
            </Card>

            {/* Right sidebar */}
            <Card>
              <CardHeader title="Recent transfers" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "16px",
                }}
              >
                {recentContacts.map((c) => (
                  <div key={c.id}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 0",
                      }}
                    >
                      <Avatar
                        size="sm"
                        initials={c.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      />
                      <div style={{ flex: 1 }}>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "13px",
                            fontWeight: 600,
                            fontFamily: "var(--drp-font-primary)",
                          }}
                        >
                          {c.name}
                        </p>
                        <p
                          style={{
                            margin: "2px 0 0",
                            fontSize: "11px",
                            color: "#999",
                            fontFamily: "var(--drp-font-primary)",
                          }}
                        >
                          **** {c.accountEnding}
                        </p>
                      </div>
                      <span
                        style={{
                          fontSize: "12px",
                          fontFamily: "var(--drp-font-primary)",
                          color: "#666",
                        }}
                      >
                        {c.currency === "USD"
                          ? "🇺🇸"
                          : c.currency === "EUR"
                            ? "🇪🇺"
                            : "🇬🇧"}{" "}
                        {c.currency}
                      </span>
                    </div>
                    <Divider />
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "12px", textAlign: "center" }}>
                <Button variant="outline" size="sm">
                  See all contacts
                </Button>
              </div>
            </Card>
          </div>
        </AppShell>
      </div>
    );
  },
};

export const PaymentsSendMoney: StoryObj = {
  render: () => (
    <div style={{ height: "100vh" }}>
      <AppShell
        sidebar={
          <Sidebar>
            <BankingSidebar activeLabel="Payments" />
          </Sidebar>
        }
        topbar={
          <Topbar>
            <BankingTopbar
              title="Send Money"
              leftContent={
                <a
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    color: "inherit",
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
                    <polyline points="12,4 6,10 12,16" />
                  </svg>
                </a>
              }
            />
          </Topbar>
        }
        footer={<BankingFooter />}
      >
        <div
          style={{
            padding: "32px 24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "100%", maxWidth: "500px" }}>
            <Card>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Select label="Select recipient">
                  <option value="rustem">Rustem Tolstobrov</option>
                  <option value="john">John Anderson</option>
                  <option value="sarah">Sarah Mitchell</option>
                </Select>

                <Select label="Select payment account">
                  <option value="debit">Debit Card **** 7890</option>
                  <option value="credit">Credit Card **** 4340</option>
                </Select>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "6px",
                      fontFamily: "var(--drp-font-primary)",
                    }}
                  >
                    You will send
                  </label>
                  <div style={{ position: "relative" }}>
                    <Input
                      placeholder="0.00"
                      defaultValue="1,290.00"
                      style={{ paddingRight: "50px" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        right: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "#666",
                        fontFamily: "var(--drp-font-primary)",
                      }}
                    >
                      USD
                    </span>
                  </div>
                </div>

                {/* Fee breakdown */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    fontSize: "13px",
                    fontFamily: "var(--drp-font-primary)",
                    color: "#666",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        background: "#999",
                        display: "inline-block",
                      }}
                    />
                    Conversion fee 9.50 USD
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        background: "#999",
                        display: "inline-block",
                      }}
                    />
                    Transfer fee 5.50 USD
                  </div>
                </div>

                <Input
                  label="Delivery time"
                  defaultValue="Standard Transfer 1-3 days"
                  disabled
                />

                <p
                  style={{
                    margin: 0,
                    fontSize: "11px",
                    color: "#999",
                    fontFamily: "var(--drp-font-primary)",
                    lineHeight: "1.5",
                  }}
                >
                  By clicking &quot;Continue&quot;, you agree to our terms and
                  conditions. The transfer amount and fees are subject to change
                  based on exchange rates at the time of processing.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    marginTop: "8px",
                  }}
                >
                  <Button variant="outline" style={{ flex: 1 }}>
                    Cancel
                  </Button>
                  <Button variant="primary" style={{ flex: 1 }}>
                    Continue
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AppShell>
    </div>
  ),
};

export const PaymentsDetails: StoryObj = {
  render: () => {
    const [modalOpen, setModalOpen] = useState(true);

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <BankingSidebar activeLabel="Payments" />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <BankingTopbar title="Payments" />
            </Topbar>
          }
          footer={<BankingFooter />}
        >
          {/* Background content (same as PaymentsList but dimmed by modal) */}
          <div style={{ padding: "24px", opacity: 0.3 }}>
            <Card>
              <CardHeader title="Make a payment" />
            </Card>
          </div>

          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Recipient details"
            footer={
              <>
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Send Funds
                </Button>
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Edit Details
                </Button>
              </>
            }
          >
            {/* Purple header area */}
            <div
              style={{
                background: "var(--drp-purple)",
                margin: "-16px -16px 0 -16px",
                padding: "24px 16px 40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "20px",
                  fontFamily: "var(--drp-font-primary)",
                  color: "var(--drp-purple)",
                  border: "3px solid #fff",
                }}
              >
                RT
              </div>
              <p
                style={{
                  margin: "12px 0 2px",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "var(--drp-font-primary)",
                }}
              >
                Rustem Tolstobrov
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "var(--drp-font-primary)",
                }}
              >
                Account ending in 3456
              </p>
            </div>

            {/* Info rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0",
                marginTop: "20px",
              }}
            >
              {[
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="9" cy="5" r="3" />
                      <path d="M3 16c0-3 2.5-5 6-5s6 2 6 5" />
                    </svg>
                  ),
                  label: "Account holder name",
                  value: "Rustem Tolstobrov",
                },
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M2 4h14v10H2z" />
                      <path d="M5 8h4" />
                    </svg>
                  ),
                  label: "Routing number",
                  value: "021000021",
                },
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect x="2" y="4" width="14" height="10" />
                      <line x1="2" y1="8" x2="16" y2="8" />
                    </svg>
                  ),
                  label: "Account number",
                  value: "**** **** 3456",
                },
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <path d="M6 9h6M9 6v6" />
                    </svg>
                  ),
                  label: "Currency",
                  value: "USD 🇺🇸",
                },
                {
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <polyline points="4,9 7,12 14,5" />
                    </svg>
                  ),
                  label: "Account type",
                  value: "Checking",
                },
              ].map((row, i) => (
                <div key={i}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 0",
                    }}
                  >
                    <span style={{ color: "#999", display: "flex" }}>
                      {row.icon}
                    </span>
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "11px",
                          color: "#999",
                          fontFamily: "var(--drp-font-primary)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {row.label}
                      </p>
                      <p
                        style={{
                          margin: "2px 0 0",
                          fontSize: "14px",
                          fontWeight: 600,
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {row.value}
                      </p>
                    </div>
                  </div>
                  {i < 4 && <Divider />}
                </div>
              ))}
            </div>
          </Modal>
        </AppShell>
      </div>
    );
  },
};
