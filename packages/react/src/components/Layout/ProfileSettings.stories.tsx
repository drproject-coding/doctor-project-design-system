import type { Meta, StoryObj } from "@storybook/react";
import { AppShell, Sidebar, Topbar } from "./Layout";
import { Card, CardHeader } from "../Card/Card";
import { Badge } from "../Badge/Badge";
import { Avatar } from "../Avatar/Avatar";
import { Tag } from "../Tag/Tag";
import { Switch } from "../Switch/Switch";
import { Button } from "../Button/Button";
import { Divider } from "../Divider/Divider";
import { bankingNavItems, balances } from "../../data/banking";

const meta: Meta = {
  title: "Pages/Profile Settings",
  parameters: { layout: "fullscreen" },
};
export default meta;

/* ─── Shared Banking Layout Components ──────────────── */

const BankingSidebar = ({ activeLabel = "" }: { activeLabel?: string }) => (
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
      Bruddle
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

/* ─── Notification Settings Data ────────────────────── */

const notificationSettings = [
  {
    key: "product-updates",
    label: "Product updates",
    description: "Receive messages from our platform",
    defaultChecked: true,
  },
  {
    key: "reminders",
    label: "Reminders",
    description: "Receive notifications about upcoming events and deadlines",
    defaultChecked: true,
  },
  {
    key: "promotions",
    label: "Promotions and tips",
    description: "Receive coupons, promotions, and money-saving tips",
    defaultChecked: false,
  },
  {
    key: "policy",
    label: "Policy and community",
    description: "Receive updates about our policies and community guidelines",
    defaultChecked: false,
  },
  {
    key: "account-support",
    label: "Account support",
    description:
      "Receive notifications about your account activity and security",
    defaultChecked: true,
  },
];

/* ─── Trend Arrow Icons ─────────────────────────────── */

const TrendUpIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="#00AA00"
    strokeWidth="2"
  >
    <polyline points="1,10 5,6 8,8 13,3" />
    <polyline points="9,3 13,3 13,7" />
  </svg>
);

const TrendDownIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    stroke="#FF4444"
    strokeWidth="2"
  >
    <polyline points="1,4 5,8 8,6 13,11" />
    <polyline points="9,11 13,11 13,7" />
  </svg>
);

/* ─── Stories ───────────────────────────────────────── */

export const ProfileSettings: StoryObj = {
  render: () => (
    <div style={{ height: "100vh" }}>
      <AppShell
        sidebar={
          <Sidebar>
            <BankingSidebar activeLabel="" />
          </Sidebar>
        }
        topbar={
          <Topbar>
            <BankingTopbar title="Profile Settings" />
          </Topbar>
        }
        footer={<BankingFooter />}
      >
        <div
          style={{
            padding: "24px",
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* Left sidebar - Profile card */}
          <Card>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* Large avatar */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  background: "var(--drp-purple)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "28px",
                  fontFamily: "var(--drp-font-primary)",
                  border: "2px solid var(--drp-black)",
                  marginBottom: "16px",
                }}
              >
                LE
              </div>

              <p
                style={{
                  margin: "0 0 4px",
                  fontSize: "20px",
                  fontWeight: 700,
                  fontFamily: "var(--drp-font-primary)",
                }}
              >
                Laquita Elliott
              </p>
              <p
                style={{
                  margin: "0 0 12px",
                  fontSize: "14px",
                  color: "#999",
                  fontFamily: "var(--drp-font-primary)",
                }}
              >
                elliott.laquita@gmail.com
              </p>
              <p
                style={{
                  margin: "0 0 16px",
                  fontSize: "13px",
                  color: "#666",
                  fontFamily: "var(--drp-font-primary)",
                  lineHeight: "1.5",
                }}
              >
                Happiness is not something readymade. It comes from your own
                actions.
              </p>
              <Tag color="purple">Designer</Tag>
            </div>

            <div style={{ margin: "20px 0" }}>
              <Divider />
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Tasks stat */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
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
                      fontSize: "22px",
                      fontWeight: 800,
                      fontFamily: "var(--drp-font-primary)",
                    }}
                  >
                    296
                  </span>
                  <Badge variant="pink">-8</Badge>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      fontFamily: "var(--drp-font-primary)",
                    }}
                  >
                    New tasks
                  </span>
                  <TrendDownIcon />
                </div>
              </div>

              {/* Followers stat */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
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
                      fontSize: "22px",
                      fontWeight: 800,
                      fontFamily: "var(--drp-font-primary)",
                    }}
                  >
                    18
                  </span>
                  <Badge variant="mint">5</Badge>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      fontFamily: "var(--drp-font-primary)",
                    }}
                  >
                    Followers
                  </span>
                  <TrendUpIcon />
                </div>
              </div>

              {/* Hourly rate stat */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontWeight: 800,
                    fontFamily: "var(--drp-font-primary)",
                  }}
                >
                  $36
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    fontFamily: "var(--drp-font-primary)",
                  }}
                >
                  Hourly rate
                </span>
              </div>
            </div>
          </Card>

          {/* Main content - Notifications card */}
          <Card>
            <div
              style={{
                borderBottom: "3px solid var(--drp-black)",
                paddingBottom: "16px",
                marginBottom: "20px",
              }}
            >
              <CardHeader title="Notifications" />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {notificationSettings.map((setting, i) => (
                <div key={setting.key}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 0",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          margin: "0 0 2px",
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "#999",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {setting.label}
                      </p>
                      <p
                        style={{
                          margin: 0,
                          fontSize: "14px",
                          fontFamily: "var(--drp-font-primary)",
                          color: "#333",
                        }}
                      >
                        {setting.description}
                      </p>
                    </div>
                    <Switch
                      defaultChecked={setting.defaultChecked}
                      aria-label={setting.label}
                    />
                  </div>
                  {i < notificationSettings.length - 1 && <Divider />}
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "24px",
                justifyContent: "flex-end",
              }}
            >
              <Button variant="outline">Reset Changes</Button>
              <Button variant="primary">Update Settings</Button>
            </div>
          </Card>
        </div>
      </AppShell>
    </div>
  ),
};
