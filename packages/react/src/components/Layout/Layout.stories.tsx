import type { Meta, StoryObj } from "@storybook/react";
import { AppShell, Sidebar, Topbar } from "./Layout";
import { DashboardLayout } from "./DashboardLayout";
import { menuItems, stats } from "../../data/fake";

const meta: Meta<typeof AppShell> = {
  title: "Layout/AppShell",
  component: AppShell,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof AppShell>;

const SidebarContent = () => (
  <div style={{ padding: "16px" }}>
    <h2
      style={{
        fontSize: "18px",
        fontWeight: 800,
        marginBottom: "24px",
        fontFamily: "var(--drp-font-primary)",
      }}
    >
      DOCTOR PROJECT
    </h2>
    <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      {menuItems.map((item) => (
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
            <span
              className="drp-badge drp-badge--filled"
              style={{ marginLeft: "auto" }}
            >
              {item.badge}
            </span>
          )}
        </a>
      ))}
    </nav>
  </div>
);

const TopbarContent = () => (
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
      }}
    >
      Dashboard
    </h1>
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <span className="drp-badge drp-badge--filled">3</span>
      <div
        className="drp-avatar drp-avatar--sm"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          background: "var(--drp-purple-20)",
          color: "var(--drp-purple)",
          fontSize: "14px",
        }}
      >
        JD
      </div>
    </div>
  </div>
);

export const Default: Story = {
  render: () => (
    <div style={{ height: "600px" }}>
      <AppShell
        sidebar={
          <Sidebar>
            <SidebarContent />
          </Sidebar>
        }
        topbar={
          <Topbar>
            <TopbarContent />
          </Topbar>
        }
        footer={
          <span
            style={{
              padding: "0 24px",
              fontFamily: "var(--drp-font-primary)",
              fontSize: "12px",
              color: "#666",
            }}
          >
            © 2026 Doctor Project Design System
          </span>
        }
      >
        <div style={{ padding: "24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="drp-card drp-card--sm"
                style={{ padding: "16px" }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#666",
                    fontFamily: "var(--drp-font-primary)",
                    fontWeight: 600,
                  }}
                >
                  {s.label}
                </p>
                <p
                  style={{
                    margin: "4px 0",
                    fontSize: "28px",
                    fontWeight: 700,
                    fontFamily: "var(--drp-font-primary)",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    fontWeight: 600,
                    color: s.trend === "up" ? "#00AA00" : "#FF4444",
                  }}
                >
                  {s.change}
                </p>
              </div>
            ))}
          </div>
          <div className="drp-card" style={{ padding: "24px" }}>
            <h3
              style={{
                fontFamily: "var(--drp-font-primary)",
                fontWeight: 700,
                fontSize: "16px",
                marginBottom: "16px",
              }}
            >
              Recent Activity
            </h3>
            <p style={{ color: "#666", fontFamily: "var(--drp-font-primary)" }}>
              Dashboard content would go here — charts, tables, activity
              feeds...
            </p>
          </div>
        </div>
      </AppShell>
    </div>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <DashboardLayout
      sidebarProps={{
        items: [
          { id: "dashboard", label: "Dashboard", icon: "📊", active: true },
          { id: "products", label: "Products", icon: "📦" },
          { id: "customers", label: "Customers", icon: "👥" },
          { id: "payments", label: "Payments", icon: "💳" },
        ],
      }}
      topBarProps={{
        title: "Dashboard",
        breadcrumbs: [{ label: "Home", href: "/" }],
      }}
    >
      <div style={{ padding: "24px" }}>
        <h2 style={{ marginTop: 0 }}>Welcome to Dashboard</h2>
        <p>
          This is the DashboardLayout component combining TopBar and Sidebar.
        </p>
      </div>
    </DashboardLayout>
  ),
};
