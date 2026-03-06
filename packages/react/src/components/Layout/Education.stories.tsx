import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AppShell, Sidebar, Topbar } from "./Layout";
import { Card, CardHeader } from "../Card/Card";
import { Badge } from "../Badge/Badge";
import { Tag } from "../Tag/Tag";
import { Avatar } from "../Avatar/Avatar";
import { Button } from "../Button/Button";
import { Pagination } from "../Pagination/Pagination";
import {
  educationNavItems,
  teamMembers,
  courses,
  generateCourses,
} from "../../data/banking";

const meta: Meta = {
  title: "Pages/Education",
  parameters: { layout: "fullscreen" },
};
export default meta;

/* ─── Sidebar ──────────────────────────────── */

const EducationSidebar = () => (
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
      }}
    >
      Doctor Project
    </h2>
    <nav style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
      {educationNavItems.map((item) => {
        const isActive = item.label === "Explore Courses";
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

    {/* Team Members */}
    <div style={{ marginTop: "32px" }}>
      <p
        style={{
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "#999",
          marginBottom: "12px",
          fontFamily: "var(--drp-font-primary)",
        }}
      >
        Team Members
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {teamMembers.map((m) => (
          <div
            key={m.name}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Avatar size="sm" src={m.avatar} />
            <span
              style={{
                fontSize: "13px",
                fontWeight: 600,
                fontFamily: "var(--drp-font-primary)",
              }}
            >
              {m.name}
            </span>
          </div>
        ))}
        <a
          href="#"
          style={{
            fontSize: "12px",
            color: "var(--drp-purple)",
            fontWeight: 600,
            textDecoration: "none",
            fontFamily: "var(--drp-font-primary)",
          }}
        >
          See More
        </a>
      </div>
    </div>

    {/* User at bottom */}
    <div
      style={{
        marginTop: "auto",
        paddingTop: "16px",
        borderTop: "1px solid #eee",
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

/* ─── Topbar ───────────────────────────────── */

const EducationTopbar = () => (
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
      Courses
    </h1>
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Badge variant="primary">2</Badge>
      <Avatar size="sm" initials="HR" />
    </div>
  </div>
);

/* ─── Hero Section ─────────────────────────── */

interface HeroSectionProps {
  heading: string;
  searchPlaceholder: string;
  searchValue?: string;
  helperText: string;
}

const HeroSection = ({
  heading,
  searchPlaceholder,
  searchValue,
  helperText,
}: HeroSectionProps) => (
  <div
    style={{
      background:
        "linear-gradient(135deg, #631DED 0%, #FF6C01 50%, #FAE8A4 100%)",
      padding: "48px 32px",
      marginBottom: "24px",
      border: "2px solid var(--drp-black)",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "36px",
        fontWeight: 800,
        fontFamily: "var(--drp-font-primary)",
        color: "#fff",
        margin: "0 0 24px",
      }}
    >
      {heading}
    </h2>
    <div
      style={{
        maxWidth: "520px",
        margin: "0 auto",
        display: "flex",
        gap: "0",
      }}
    >
      <input
        className="drp-input"
        placeholder={searchPlaceholder}
        defaultValue={searchValue}
        style={{
          flex: 1,
          border: "2px solid var(--drp-black)",
          borderRight: "none",
          padding: "12px 16px",
          fontSize: "14px",
          fontFamily: "var(--drp-font-primary)",
        }}
      />
      <button
        style={{
          background: "var(--drp-purple)",
          border: "2px solid var(--drp-black)",
          color: "#fff",
          padding: "12px 20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
        dangerouslySetInnerHTML={{
          __html: `<svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="9" r="7"/><line x1="14" y1="14" x2="18" y2="18"/></svg>`,
        }}
      />
    </div>
    <p
      style={{
        color: "rgba(255,255,255,0.85)",
        fontSize: "13px",
        fontFamily: "var(--drp-font-primary)",
        marginTop: "12px",
      }}
      dangerouslySetInnerHTML={{ __html: helperText }}
    />
  </div>
);

/* ─── Course Trend Card ────────────────────── */

const trendingTopics = [
  {
    title: "Data Science",
    count: 64,
    duration: "3-6 months",
    color: "#631DED",
  },
  {
    title: "Business Management",
    count: 48,
    duration: "4-8 months",
    color: "#FF6C01",
  },
  {
    title: "Development",
    count: 72,
    duration: "2-6 months",
    color: "#98E9AB",
  },
  {
    title: "Technologies",
    count: 39,
    duration: "3-5 months",
    color: "#E99898",
  },
  {
    title: "Computer Science",
    count: 56,
    duration: "6-12 months",
    color: "#FAE8A4",
  },
  {
    title: "Digital Marketing",
    count: 31,
    duration: "2-4 months",
    color: "#C4A0FF",
  },
];

/* ─── Story: CoursesExplore ────────────────── */

export const CoursesExplore: StoryObj = {
  render: () => {
    const [page, setPage] = useState(1);

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <EducationSidebar />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <EducationTopbar />
            </Topbar>
          }
        >
          <div style={{ padding: "24px" }}>
            {/* Hero */}
            <HeroSection
              heading="Explore Topics and Skills"
              searchPlaceholder="What do you want to learn?"
              helperText="For example: <strong>UI and UX development</strong>"
            />

            {/* Trending today */}
            <div style={{ marginBottom: "32px" }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  fontFamily: "var(--drp-font-primary)",
                  marginBottom: "16px",
                }}
              >
                Trending today
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                }}
              >
                {trendingTopics.map((topic) => (
                  <Card key={topic.title}>
                    <div
                      style={{
                        height: "120px",
                        background: topic.color,
                        border: "1px solid var(--drp-black)",
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "flex-start",
                        padding: "10px",
                      }}
                    >
                      <Badge variant="filled">{topic.count} Courses</Badge>
                    </div>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        fontFamily: "var(--drp-font-primary)",
                        margin: "0 0 4px",
                      }}
                    >
                      {topic.title}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        fontFamily: "var(--drp-font-primary)",
                        margin: 0,
                      }}
                    >
                      {topic.duration}
                    </p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Earn Your Degree */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  fontFamily: "var(--drp-font-primary)",
                  marginBottom: "16px",
                }}
              >
                Earn Your Degree
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {courses.map((course) => (
                  <Card key={course.id}>
                    <div
                      style={{
                        height: "140px",
                        background: `url(${course.image}) center/cover`,
                        border: "1px solid var(--drp-black)",
                        marginBottom: "12px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        fontFamily: "var(--drp-font-primary)",
                        margin: "0 0 4px",
                        lineHeight: 1.3,
                      }}
                    >
                      {course.title}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        fontFamily: "var(--drp-font-primary)",
                        margin: "0 0 8px",
                      }}
                    >
                      {course.institution}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Tag color="purple" filled>
                        {course.type}
                      </Tag>
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#999",
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {course.duration}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Pagination
                  currentPage={page}
                  totalPages={5}
                  onPageChange={setPage}
                />
              </div>
            </div>
          </div>
        </AppShell>
      </div>
    );
  },
};

/* ─── Story: CoursesCategory ───────────────── */

const suggestedTags = [
  "Frontend",
  "Development & Operations",
  "Mobile Design",
  "Backend",
  "UI/UX",
  "React",
  "Cloud Computing",
  "DevOps",
];

export const CoursesCategory: StoryObj = {
  render: () => {
    const [page, setPage] = useState(1);
    const categoryCourses = generateCourses(6);

    return (
      <div style={{ height: "100vh" }}>
        <AppShell
          sidebar={
            <Sidebar>
              <EducationSidebar />
            </Sidebar>
          }
          topbar={
            <Topbar>
              <EducationTopbar />
            </Topbar>
          }
        >
          <div style={{ padding: "24px" }}>
            {/* Hero */}
            <HeroSection
              heading="Software Development"
              searchPlaceholder="What do you want to learn?"
              searchValue="Mobile and Web Design"
              helperText="For example: <strong>UI and UX development</strong>"
            />

            {/* Suggested courses searching */}
            <div style={{ marginBottom: "24px" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "var(--drp-font-primary)",
                  color: "#999",
                  marginBottom: "10px",
                }}
              >
                Suggested courses searching
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {suggestedTags.map((t) => (
                  <Tag key={t} color="light">
                    {t}
                  </Tag>
                ))}
              </div>
            </div>

            {/* Earn Your Degree */}
            <div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  fontFamily: "var(--drp-font-primary)",
                  marginBottom: "16px",
                }}
              >
                Earn Your Degree
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {categoryCourses.map((course) => (
                  <Card key={course.id}>
                    <div
                      style={{
                        height: "140px",
                        background: `url(${course.image}) center/cover`,
                        border: "1px solid var(--drp-black)",
                        marginBottom: "12px",
                      }}
                    />
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        fontFamily: "var(--drp-font-primary)",
                        margin: "0 0 4px",
                        lineHeight: 1.3,
                      }}
                    >
                      {course.title}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        fontFamily: "var(--drp-font-primary)",
                        margin: "0 0 8px",
                      }}
                    >
                      {course.institution}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Tag color="purple" filled>
                        {course.type}
                      </Tag>
                      <span
                        style={{
                          fontSize: "11px",
                          color: "#999",
                          fontFamily: "var(--drp-font-primary)",
                        }}
                      >
                        {course.duration}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Pagination
                  currentPage={page}
                  totalPages={4}
                  onPageChange={setPage}
                />
              </div>
            </div>
          </div>
        </AppShell>
      </div>
    );
  },
};
