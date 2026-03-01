import { faker } from "@faker-js/faker";

faker.seed(42);

export interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Active" | "Inactive" | "Pending";
  avatar: string;
  joinDate: string;
  lastActive: string;
}

export interface StatCard {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface MenuItem {
  label: string;
  href: string;
  badge?: number;
  icon: string;
}

export function generateUsers(count = 12): User[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(["Admin", "Editor", "Viewer"] as const),
    status: faker.helpers.arrayElement([
      "Active",
      "Inactive",
      "Pending",
    ] as const),
    avatar: faker.image.avatar(),
    joinDate: faker.date
      .past({ years: 2 })
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    lastActive: faker.date
      .recent({ days: 30 })
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
  }));
}

export function generateStats(): StatCard[] {
  return [
    { label: "Total Revenue", value: "$48,290", change: "+12.5%", trend: "up" },
    { label: "Active Users", value: "2,847", change: "+8.2%", trend: "up" },
    { label: "New Orders", value: "384", change: "-3.1%", trend: "down" },
    { label: "Conversion Rate", value: "3.24%", change: "+0.8%", trend: "up" },
  ];
}

export function generateChartData() {
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
  return {
    labels: months,
    revenue: months.map(() => faker.number.int({ min: 20000, max: 60000 })),
    users: months.map(() => faker.number.int({ min: 500, max: 3000 })),
    orders: months.map(() => faker.number.int({ min: 100, max: 500 })),
  };
}

export function generateMenuItems(): MenuItem[] {
  return [
    { label: "Dashboard", href: "#", icon: "◉" },
    { label: "Analytics", href: "#", icon: "◈", badge: 3 },
    { label: "Users", href: "#", icon: "◎" },
    { label: "Orders", href: "#", icon: "◇", badge: 12 },
    { label: "Products", href: "#", icon: "◆" },
    { label: "Settings", href: "#", icon: "⚙" },
  ];
}

export const users = generateUsers();
export const stats = generateStats();
export const chartData = generateChartData();
export const menuItems = generateMenuItems();
