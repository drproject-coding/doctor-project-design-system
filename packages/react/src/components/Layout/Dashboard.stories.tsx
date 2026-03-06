import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppShell, Sidebar, Topbar } from "./Layout";
import { Card, CardHeader } from "../Card/Card";
import { Table } from "../Table/Table";
import { Pagination } from "../Pagination/Pagination";
import { Tabs } from "../Tabs/Tabs";
import { Badge } from "../Badge/Badge";
import { Tag } from "../Tag/Tag";
import { Avatar } from "../Avatar/Avatar";
import { StatusDot } from "../StatusDot/StatusDot";
import { Switch } from "../Switch/Switch";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { Button } from "../Button/Button";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Modal } from "../Modal/Modal";
import { users, stats, chartData, menuItems } from "../../data/fake";

const meta: Meta = {
  title: "Pages/Dashboard",
  parameters: { layout: "fullscreen" },
};
export default meta;

const SidebarNav = () => (
  <div style={{ padding: "16px", height: "100%" }}>
    <h2
      style={{
        fontSize: "18px",
        fontWeight: 800,
        marginBottom: "32px",
        fontFamily: "var(--drp-font-primary)",
        letterSpacing: "0.08em",
      }}
    >
      DOCTOR PROJECT
    </h2>
    <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {menuItems.map((item, i) => (
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
            background: i === 0 ? "rgba(99,29,237,0.08)" : "transparent",
            borderLeft:
              i === 0 ? "3px solid var(--drp-purple)" : "3px solid transparent",
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
      ))}
    </nav>
  </div>
);

const TopbarNav = () => (
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
      Dashboard
    </h1>
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Badge variant="primary">3</Badge>
      <Avatar size="sm" initials="JD" />
    </div>
  </div>
);

export const DashboardPage: StoryObj = {
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const pagedUsers = users.slice((page - 1) * pageSize, page * pageSize);

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <SidebarNav />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <TopbarNav />
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
            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {stats.map((s) => (
                <Card
                  key={s.label}
                  variant="sm"
                  accent={
                    s.label.includes("Revenue")
                      ? "purple"
                      : s.label.includes("Users")
                        ? "mint"
                        : s.label.includes("Orders")
                          ? "pink"
                          : "yellow"
                  }
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
                </Card>
              ))}
            </div>

            {/* Charts row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <Card>
                <CardHeader
                  title="Revenue Overview"
                  subtitle="Monthly revenue for 2026"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "6px",
                    height: "180px",
                    padding: "8px 0",
                  }}
                >
                  {chartData.revenue.map((val, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        background: "var(--drp-purple)",
                        height: `${(val / 60000) * 100}%`,
                        minHeight: "4px",
                        border: "1px solid var(--drp-black)",
                      }}
                      title={`${chartData.labels[i]}: $${val.toLocaleString()}`}
                    />
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "8px",
                    fontSize: "10px",
                    color: "#999",
                    fontFamily: "var(--drp-font-primary)",
                  }}
                >
                  {chartData.labels.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </div>
              </Card>

              <Card>
                <CardHeader title="Performance" />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    marginTop: "8px",
                  }}
                >
                  <ProgressBar value={85} label="CPU Usage" />
                  <ProgressBar value={62} color="mint" label="Memory" />
                  <ProgressBar value={91} color="pink" label="Disk" />
                  <ProgressBar value={34} color="yellow" label="Network" />
                </div>
              </Card>
            </div>

            {/* Users table */}
            <Card>
              <CardHeader
                title="Recent Users"
                subtitle={`Showing ${pagedUsers.length} of ${users.length}`}
                action={
                  <Tag color="purple" filled>
                    Active
                  </Tag>
                }
              />
              <Table
                columns={[
                  {
                    key: "name",
                    header: "User",
                    render: (row) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <Avatar
                          size="sm"
                          initials={String(row.name)
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        />
                        <div>
                          <div style={{ fontWeight: 600 }}>
                            {String(row.name)}
                          </div>
                          <div style={{ fontSize: "12px", color: "#999" }}>
                            {String(row.email)}
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "role",
                    header: "Role",
                    render: (row) => (
                      <Tag color="purple">{String(row.role)}</Tag>
                    ),
                  },
                  {
                    key: "status",
                    header: "Status",
                    render: (row) => {
                      const color =
                        row.status === "Active"
                          ? "mint"
                          : row.status === "Pending"
                            ? "yellow"
                            : "pink";
                      return (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <StatusDot
                            color={color}
                            pulse={row.status === "Active"}
                            aria-hidden={true}
                          />
                          <span>{String(row.status)}</span>
                        </div>
                      );
                    },
                  },
                  { key: "joinDate", header: "Joined" },
                ]}
                data={pagedUsers}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "16px",
                }}
              >
                <Pagination
                  currentPage={page}
                  totalPages={Math.ceil(users.length / pageSize)}
                  onPageChange={setPage}
                />
              </div>
            </Card>
          </div>
        </AppShell>
      </div>
    );
  },
};

export const SettingsPage: StoryObj = {
  render: () => (
    <div style={{ height: "100vh" }}>
      <AppShell
        sidebar={
          <Sidebar>
            <SidebarNav />
          </Sidebar>
        }
        topbar={
          <Topbar>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 24px",
                width: "100%",
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
                Settings
              </h1>
            </div>
          </Topbar>
        }
      >
        <div style={{ padding: "24px", maxWidth: "640px" }}>
          <Tabs
            items={[
              { label: "General", key: "general" },
              { label: "Notifications", key: "notifs" },
              { label: "Security", key: "security" },
              { label: "Billing", key: "billing" },
            ]}
            variant="underline"
          />

          <div style={{ marginTop: "24px" }}>
            <Card>
              <CardHeader
                title="Profile"
                subtitle="Update your personal information"
              />
              <div className="drp-form-stack">
                <div className="drp-form-row">
                  <Input label="First Name" placeholder="John" />
                  <Input label="Last Name" placeholder="Doe" />
                </div>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                />
                <Select label="Timezone">
                  <option value="utc">UTC</option>
                  <option value="est">Eastern (EST)</option>
                  <option value="pst">Pacific (PST)</option>
                  <option value="cet">Central European (CET)</option>
                </Select>
              </div>
            </Card>

            <Card style={{ marginTop: "16px" }}>
              <CardHeader
                title="Notifications"
                subtitle="Manage your notification preferences"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <Switch label="Email notifications" defaultChecked />
                <Switch label="Push notifications" defaultChecked />
                <Switch label="Marketing emails" />
                <Switch label="Weekly digest" defaultChecked />
              </div>
            </Card>

            <div className="drp-form-actions" style={{ marginTop: "24px" }}>
              <Button variant="primary">Save Changes</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </div>
        </div>
      </AppShell>
    </div>
  ),
};

export const UserListPage: StoryObj = {
  render: () => {
    const [page, setPage] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <SidebarNav />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 24px",
                  width: "100%",
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
                  Users
                </h1>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setModalOpen(true)}
                >
                  + Add User
                </Button>
              </div>
            </Topbar>
          }
        >
          <div style={{ padding: "24px" }}>
            <Card>
              <CardHeader
                title="All Users"
                subtitle={`${users.length} total users`}
                action={
                  <div style={{ display: "flex", gap: "8px" }}>
                    <Tag color="mint" dot>
                      Active:{" "}
                      {users.filter((u) => u.status === "Active").length}
                    </Tag>
                    <Tag color="yellow" dot>
                      Pending:{" "}
                      {users.filter((u) => u.status === "Pending").length}
                    </Tag>
                    <Tag color="pink" dot>
                      Inactive:{" "}
                      {users.filter((u) => u.status === "Inactive").length}
                    </Tag>
                  </div>
                }
              />
              <Table
                columns={[
                  {
                    key: "name",
                    header: "User",
                    render: (row) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <Avatar
                          size="sm"
                          initials={String(row.name)
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        />
                        <div>
                          <div style={{ fontWeight: 600 }}>
                            {String(row.name)}
                          </div>
                          <div style={{ fontSize: "12px", color: "#999" }}>
                            {String(row.email)}
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "role",
                    header: "Role",
                    render: (row) => (
                      <Tag
                        color={
                          row.role === "Admin"
                            ? "purple"
                            : row.role === "Editor"
                              ? "mint"
                              : "grey"
                        }
                      >
                        {String(row.role)}
                      </Tag>
                    ),
                  },
                  {
                    key: "status",
                    header: "Status",
                    render: (row) => {
                      const color =
                        row.status === "Active"
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
                  { key: "joinDate", header: "Joined" },
                  { key: "lastActive", header: "Last Active" },
                ]}
                data={users.slice((page - 1) * 6, page * 6)}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "16px",
                }}
              >
                <Pagination
                  currentPage={page}
                  totalPages={Math.ceil(users.length / 6)}
                  onPageChange={setPage}
                />
              </div>
            </Card>
          </div>

          <Modal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            title="Add New User"
            footer={
              <>
                <Button variant="outline" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setModalOpen(false)}>
                  Create User
                </Button>
              </>
            }
          >
            <div className="drp-form-stack">
              <Input label="Full Name" placeholder="Enter full name" />
              <Input
                label="Email"
                type="email"
                placeholder="user@example.com"
              />
              <Select label="Role">
                <option value="viewer">Viewer</option>
                <option value="editor">Editor</option>
                <option value="admin">Admin</option>
              </Select>
            </div>
          </Modal>
        </AppShell>
      </div>
    );
  },
};
