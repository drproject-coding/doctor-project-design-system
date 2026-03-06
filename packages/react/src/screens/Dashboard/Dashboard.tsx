import { useState } from "react";
import { faker } from "@faker-js/faker";
import { AppShell, Sidebar, Topbar } from "../../components/Layout";
import { Card, CardHeader } from "../../components/Card";
import { Table } from "../../components/Table";
import { Avatar } from "../../components/Avatar";
import { Badge } from "../../components/Badge";
import { Tag } from "../../components/Tag";
import { StatusDot } from "../../components/StatusDot";
import { Button } from "../../components/Button";
import { ProgressBar } from "../../components/ProgressBar";
import { Pagination } from "../../components/Pagination";
import { StatCard } from "../../components/StatCard";
import { Tabs } from "../../components/Tabs";
import { Alert } from "../../components/Alert";

faker.seed(99);

// ─── Mock Data ────────────────────────────────────────────────────────────────

const stats = [
  {
    label: "Total Patients",
    value: "3,842",
    change: "+6.2%",
    trend: "up" as const,
    accent: "purple" as const,
  },
  {
    label: "Appointments Today",
    value: "47",
    change: "+3",
    trend: "up" as const,
    accent: "mint" as const,
  },
  {
    label: "Pending Reviews",
    value: "12",
    change: "-4",
    trend: "down" as const,
    accent: "yellow" as const,
  },
  {
    label: "Avg. Satisfaction",
    value: "4.8/5",
    change: "+0.2",
    trend: "up" as const,
    accent: "pink" as const,
  },
];

const appointments = Array.from({ length: 20 }, (_, i) => ({
  id: faker.string.uuid(),
  patient: faker.person.fullName(),
  doctor: `Dr. ${faker.person.lastName()}`,
  type: faker.helpers.arrayElement([
    "Consultation",
    "Follow-up",
    "Checkup",
    "Procedure",
  ]),
  time: faker.date
    .soon({ days: 1 })
    .toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
  status: faker.helpers.arrayElement([
    "Confirmed",
    "Pending",
    "Cancelled",
  ] as const),
}));

const activity = Array.from({ length: 6 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  action: faker.helpers.arrayElement([
    "booked an appointment",
    "updated medical records",
    "completed consultation",
    "requested prescription refill",
    "uploaded lab results",
  ]),
  time: `${faker.number.int({ min: 1, max: 59 })}m ago`,
  status: faker.helpers.arrayElement(["active", "idle", "offline"] as const),
}));

const revenueData = [
  38000, 42000, 35000, 51000, 48000, 56000, 61000, 58000, 63000, 70000, 68000,
  75000,
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const maxRevenue = Math.max(...revenueData);

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const navItems = [
  { label: "Dashboard", icon: "◎", active: true },
  { label: "Patients", icon: "♥" },
  { label: "Appointments", icon: "📅", badge: 4 },
  { label: "Prescriptions", icon: "💊" },
  { label: "Billing", icon: "💳" },
  { label: "Reports", icon: "📊" },
  { label: "Messages", icon: "💬", badge: 7 },
  { label: "Settings", icon: "⚙" },
];

const DashboardSidebar = () => (
  <div
    style={{
      padding: "20px 16px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div style={{ marginBottom: 32 }}>
      <div
        style={{
          fontFamily: "var(--drp-font-primary)",
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: "0.08em",
        }}
      >
        DOCTOR PROJECT
      </div>
      <div
        style={{
          fontFamily: "var(--drp-font-mono)",
          fontSize: 11,
          color: "var(--drp-text-muted)",
          marginTop: 2,
        }}
      >
        Medical Practice OS
      </div>
    </div>

    <nav style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
      {navItems.map((item) => (
        <button
          key={item.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            background: item.active ? "rgba(99,29,237,0.08)" : "transparent",
            border: "none",
            borderLeft: item.active
              ? "3px solid var(--drp-purple)"
              : "3px solid transparent",
            cursor: "pointer",
            width: "100%",
            textAlign: "left",
            fontFamily: "var(--drp-font-primary)",
            fontSize: 14,
            fontWeight: 600,
            color: item.active ? "var(--drp-purple)" : "inherit",
          }}
        >
          <span style={{ fontSize: 16, width: 20, textAlign: "center" }}>
            {item.icon}
          </span>
          <span style={{ flex: 1 }}>{item.label}</span>
          {item.badge && <Badge variant="filled">{item.badge}</Badge>}
        </button>
      ))}
    </nav>

    <div
      style={{ borderTop: "var(--drp-border)", paddingTop: 16, marginTop: 16 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Avatar size="sm" initials="JD" />
        <div>
          <div
            style={{
              fontFamily: "var(--drp-font-primary)",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Dr. Jane Doe
          </div>
          <div
            style={{
              fontFamily: "var(--drp-font-mono)",
              fontSize: 11,
              color: "var(--drp-text-muted)",
            }}
          >
            General Practitioner
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Topbar ───────────────────────────────────────────────────────────────────

const DashboardTopbar = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      width: "100%",
    }}
  >
    <div>
      <h1
        style={{
          margin: 0,
          fontFamily: "var(--drp-font-primary)",
          fontSize: 16,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        Dashboard
      </h1>
      <p
        style={{
          margin: 0,
          fontFamily: "var(--drp-font-mono)",
          fontSize: 11,
          color: "var(--drp-text-muted)",
        }}
      >
        Monday, 6 March 2026
      </p>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Button variant="primary" size="sm">
        + New Appointment
      </Button>
      <div style={{ position: "relative" }}>
        <Badge variant="filled">3</Badge>
      </div>
      <Avatar size="sm" initials="JD" />
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export function Dashboard() {
  const [page, setPage] = useState(1);
  const [activeTab, setActiveTab] = useState("all");
  const pageSize = 6;

  const filteredAppts =
    activeTab === "all"
      ? appointments
      : appointments.filter((a) => a.status.toLowerCase() === activeTab);

  const pagedAppts = filteredAppts.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  return (
    <div style={{ height: "100vh" }}>
      <AppShell
        sidebar={
          <Sidebar>
            <DashboardSidebar />
          </Sidebar>
        }
        topbar={
          <Topbar>
            <DashboardTopbar />
          </Topbar>
        }
        footer={
          <span
            style={{
              padding: "0 24px",
              fontFamily: "var(--drp-font-mono)",
              fontSize: 11,
              color: "var(--drp-text-muted)",
            }}
          >
            © 2026 Doctor Project — v1.0.0
          </span>
        }
      >
        <div
          style={{
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* Alert */}
          <Alert variant="info" title="System update scheduled">
            Maintenance window tonight 02:00–03:00 UTC. No downtime expected.
          </Alert>

          {/* Stats row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
          >
            {stats.map((s) => (
              <StatCard key={s.label} label={s.label} value={s.value} />
            ))}
          </div>

          {/* Charts + Activity */}
          <div
            style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16 }}
          >
            {/* Revenue chart */}
            <Card>
              <CardHeader
                title="Revenue Overview"
                subtitle="Monthly revenue — 2026"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 6,
                  height: 160,
                  padding: "8px 0",
                }}
              >
                {revenueData.map((val, i) => (
                  <div
                    key={i}
                    title={`${months[i]}: $${val.toLocaleString()}`}
                    style={{
                      flex: 1,
                      background:
                        i === revenueData.length - 1
                          ? "var(--drp-purple)"
                          : "var(--drp-cream)",
                      height: `${(val / maxRevenue) * 100}%`,
                      border: "1px solid var(--drp-black)",
                      minHeight: 4,
                      cursor: "default",
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 8,
                }}
              >
                {months.map((m) => (
                  <span
                    key={m}
                    style={{
                      fontFamily: "var(--drp-font-mono)",
                      fontSize: 10,
                      color: "var(--drp-text-muted)",
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Card>

            {/* Activity feed */}
            <Card>
              <CardHeader title="Recent Activity" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  marginTop: 8,
                }}
              >
                {activity.map((a) => (
                  <div
                    key={a.id}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div style={{ position: "relative", flexShrink: 0 }}>
                      <Avatar
                        size="sm"
                        initials={a.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      />
                      <div
                        style={{ position: "absolute", bottom: 0, right: 0 }}
                      >
                        <StatusDot
                          color={
                            a.status === "active"
                              ? "mint"
                              : a.status === "idle"
                                ? "yellow"
                                : "pink"
                          }
                          pulse={a.status === "active"}
                        />
                      </div>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: "var(--drp-font-primary)",
                          fontSize: 12,
                          fontWeight: 600,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {a.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--drp-font-mono)",
                          fontSize: 11,
                          color: "var(--drp-text-muted)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {a.action}
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--drp-font-mono)",
                        fontSize: 10,
                        color: "var(--drp-text-muted)",
                        flexShrink: 0,
                      }}
                    >
                      {a.time}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Clinic performance */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            <Card>
              <CardHeader
                title="Clinic Performance"
                subtitle="This month vs last month"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  marginTop: 8,
                }}
              >
                <ProgressBar value={92} label="Patient Satisfaction" />
                <ProgressBar
                  value={78}
                  color="mint"
                  label="Appointment Fill Rate"
                />
                <ProgressBar
                  value={65}
                  color="yellow"
                  label="Prescription Fulfillment"
                />
                <ProgressBar
                  value={88}
                  color="pink"
                  label="Follow-up Compliance"
                />
              </div>
            </Card>

            <Card>
              <CardHeader title="Appointments by Type" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginTop: 8,
                }}
              >
                {[
                  {
                    label: "Consultation",
                    count: 18,
                    pct: 38,
                    color: "var(--drp-purple)",
                  },
                  {
                    label: "Follow-up",
                    count: 14,
                    pct: 30,
                    color: "var(--drp-mint)",
                  },
                  {
                    label: "Checkup",
                    count: 9,
                    pct: 19,
                    color: "var(--drp-yellow)",
                  },
                  {
                    label: "Procedure",
                    count: 6,
                    pct: 13,
                    color: "var(--drp-pink)",
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        background: row.color,
                        border: "1px solid var(--drp-black)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        flex: 1,
                        fontFamily: "var(--drp-font-primary)",
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {row.label}
                    </span>
                    <Tag color="grey">{row.count}</Tag>
                    <span
                      style={{
                        fontFamily: "var(--drp-font-mono)",
                        fontSize: 11,
                        color: "var(--drp-text-muted)",
                        width: 32,
                        textAlign: "right",
                      }}
                    >
                      {row.pct}%
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Appointments table */}
          <Card>
            <CardHeader
              title="Today's Appointments"
              subtitle={`${appointments.length} total`}
              action={
                <Button variant="outline" size="sm">
                  Export
                </Button>
              }
            />
            <Tabs
              items={[
                { label: "All", key: "all" },
                { label: "Confirmed", key: "confirmed" },
                { label: "Pending", key: "pending" },
                { label: "Cancelled", key: "cancelled" },
              ]}
              activeKey={activeTab}
              onChange={(key) => {
                setActiveTab(key);
                setPage(1);
              }}
              variant="underline"
            />
            <Table
              columns={[
                {
                  key: "patient",
                  header: "Patient",
                  render: (row) => (
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <Avatar
                        size="sm"
                        initials={String(row.patient)
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      />
                      <span style={{ fontWeight: 600 }}>
                        {String(row.patient)}
                      </span>
                    </div>
                  ),
                },
                { key: "doctor", header: "Doctor" },
                {
                  key: "type",
                  header: "Type",
                  render: (row) => <Tag color="purple">{String(row.type)}</Tag>,
                },
                { key: "time", header: "Time" },
                {
                  key: "status",
                  header: "Status",
                  render: (row) => {
                    const color =
                      row.status === "Confirmed"
                        ? "mint"
                        : row.status === "Pending"
                          ? "yellow"
                          : "pink";
                    return (
                      <Tag color={color} dot filled>
                        {String(row.status)}
                      </Tag>
                    );
                  },
                },
                {
                  key: "id",
                  header: "",
                  render: () => (
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  ),
                },
              ]}
              data={pagedAppts}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 16,
              }}
            >
              <Pagination
                currentPage={page}
                totalPages={Math.ceil(filteredAppts.length / pageSize)}
                onPageChange={setPage}
              />
            </div>
          </Card>
        </div>
      </AppShell>
    </div>
  );
}
