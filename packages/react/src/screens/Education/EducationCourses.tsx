import React from "react";

// ─── Sidebar ─────────────────────────────────────────────────────────────────

const EducationSidebar: React.FC<{ theme?: "light" | "dark" }> = ({
  theme = "light",
}) => {
  const bg = theme === "dark" ? "bg-[#111111]" : "bg-[#111111]";
  return (
    <div
      className={`w-[200px] min-h-screen ${bg} flex flex-col text-white flex-shrink-0`}
    >
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-white">Doctor Project</span>
          <span className="w-2 h-2 rounded-full bg-purple-500 mb-3"></span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
        <div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest px-2 mb-2">
            Navigation
          </p>
          <nav className="space-y-0.5">
            {[
              { label: "Explore Courses", active: true },
              { label: "Degrees" },
              { label: "Students" },
              { label: "Universities" },
              { label: "Schedule", badge: "PR", badgeColor: "bg-purple-600" },
              { label: "Knowledge Base" },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                  item.active
                    ? "bg-purple-600 text-white font-medium"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] text-white px-1.5 py-0.5 rounded ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Team Members */}
        <div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest px-2 mb-2">
            Team Members
          </p>
          <div className="space-y-0.5">
            {[
              { name: "Alexandre Paiva", color: "bg-orange-400" },
              { name: "Thanawan Chadee", color: "bg-purple-500" },
              { name: "Justine Robinson", color: "bg-blue-400" },
            ].map((member) => (
              <button
                key={member.name}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-white/5"
              >
                <span
                  className={`w-6 h-6 rounded-full ${member.color} flex-shrink-0`}
                ></span>
                <span>{member.name}</span>
              </button>
            ))}
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/5">
              <span className="text-xs">&#8964; See More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer user */}
      <div className="px-3 py-4 border-t border-white/10">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
            <span className="text-xs text-gray-200">Henry Richardson</span>
          </div>
          <button className="text-gray-500 hover:text-white text-xs">
            &middot;&middot;&middot;
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── Top Bar ──────────────────────────────────────────────────────────────────

const EducationTopBar: React.FC<{ theme?: "light" | "dark" }> = ({
  theme = "light",
}) => {
  const bg =
    theme === "dark"
      ? "bg-[#0d0d0d] border-white/10"
      : "bg-white border-black/10";
  const text = theme === "dark" ? "text-white" : "text-black";
  const iconColor = theme === "dark" ? "text-gray-400" : "text-gray-500";
  const appsBtn =
    theme === "dark"
      ? "text-gray-300 hover:bg-white/10"
      : "text-gray-700 hover:bg-black/5";
  return (
    <div
      className={`flex items-center justify-between px-6 py-3.5 border-b ${bg}`}
    >
      <h1 className={`text-2xl font-bold ${text}`}>Courses</h1>
      <div className="flex items-center gap-3">
        {/* search icon */}
        <button className={`${iconColor}`}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
        {/* bell icon */}
        <button className={`${iconColor}`}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
        {/* Apps */}
        <button
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium ${appsBtn}`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="2" width="9" height="9" rx="1" />
            <rect x="13" y="2" width="9" height="9" rx="1" />
            <rect x="2" y="13" width="9" height="9" rx="1" />
            <rect x="13" y="13" width="9" height="9" rx="1" />
          </svg>
          Apps
        </button>
        {/* Create new */}
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M8 12h8" />
          </svg>
          Create new
        </button>
      </div>
    </div>
  );
};

// ─── Footer ───────────────────────────────────────────────────────────────────

const EducationFooter: React.FC<{ theme?: "light" | "dark" }> = ({
  theme = "light",
}) => {
  const bg =
    theme === "dark"
      ? "bg-[#0d0d0d] border-white/10"
      : "bg-[#f5efe6] border-black/10";
  const textColor = theme === "dark" ? "text-gray-400" : "text-gray-500";
  return (
    <div
      className={`flex items-center justify-between px-8 py-3 border-t ${bg} text-sm ${textColor}`}
    >
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-1.5 hover:opacity-80">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          English
        </button>
        <button className="hover:opacity-80">Privacy Policy</button>
        <button className="hover:opacity-80">License</button>
        <button className="hover:opacity-80">API</button>
      </div>
      <div className="flex items-center gap-2">
        <button className="w-7 h-7 rounded flex items-center justify-center bg-purple-600 text-white">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a9 9 0 1 0 9 9H12z" />
          </svg>
        </button>
        <button className="w-7 h-7 rounded flex items-center justify-center bg-black/10">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// ─── Course Image Placeholders ────────────────────────────────────────────────

const courseImages: Record<string, string> = {
  "data-science":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=70",
  "business-management":
    "https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=400&q=70",
  development:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=70",
  technologies:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=70",
  "computer-science":
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=70",
  mba: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=70",
  "computer-science-online":
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=70",
  "global-public-health":
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=70",
};

// ─── Trending Card (large left) ───────────────────────────────────────────────

interface TrendingCardProps {
  title: string;
  duration: string;
  courseCount: number;
  imageKey: string;
  large?: boolean;
  theme?: "light" | "dark";
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  title,
  duration,
  courseCount,
  imageKey,
  large,
  theme = "light",
}) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden cursor-pointer ${large ? "row-span-2" : ""}`}
      style={{ minHeight: large ? 220 : 100 }}
    >
      <img
        src={courseImages[imageKey]}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {/* badge top-right */}
      <div className="absolute top-2 right-2">
        <span className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
          {courseCount} Courses
        </span>
      </div>
      {/* bottom text */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white font-semibold text-sm leading-tight">
          {title}
        </p>
        <p className="text-gray-300 text-[11px] mt-0.5">{duration}</p>
      </div>
    </div>
  );
};

// ─── Degree Card ──────────────────────────────────────────────────────────────

interface DegreeCardProps {
  title: string;
  university: string;
  mode: string;
  icon?: React.ReactNode;
  imageKey: string;
  theme?: "light" | "dark";
}

const DegreeCard: React.FC<DegreeCardProps> = ({
  title,
  university,
  mode,
  icon,
  imageKey,
  theme = "light",
}) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const titleColor = theme === "dark" ? "text-white" : "text-black";
  const subtitleColor = theme === "dark" ? "text-gray-400" : "text-gray-500";
  const modeBtnBg =
    theme === "dark"
      ? "border-white/20 text-gray-300"
      : "border-black/20 text-gray-600";

  return (
    <div
      className={`rounded-xl overflow-hidden border ${cardBg} cursor-pointer hover:shadow-md transition-shadow`}
    >
      <div className="h-36 overflow-hidden">
        <img
          src={courseImages[imageKey]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <p className={`font-semibold text-sm leading-tight mb-1 ${titleColor}`}>
          {title}
        </p>
        <p className={`text-[11px] mb-2 ${subtitleColor}`}>{university}</p>
        <div className="flex items-center justify-between">
          <button
            className={`text-[11px] px-2.5 py-1 rounded border ${modeBtnBg}`}
          >
            {mode}
          </button>
          {icon && <span className={`${subtitleColor} text-base`}>{icon}</span>}
        </div>
      </div>
    </div>
  );
};

// ─── Pagination ───────────────────────────────────────────────────────────────

const CoursePagination: React.FC<{ theme?: "light" | "dark" }> = ({
  theme = "light",
}) => {
  const btnBase =
    theme === "dark"
      ? "border-white/20 text-gray-300 hover:bg-white/10"
      : "border-black/20 text-gray-600 hover:bg-black/5";
  const textColor = theme === "dark" ? "text-gray-400" : "text-gray-500";
  return (
    <div
      className={`flex items-center justify-between py-4 px-1 ${textColor} text-sm`}
    >
      <button
        className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs ${btnBase}`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Prev
      </button>
      <span className="text-xs">Page 1 of 10</span>
      <button
        className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-lg text-xs ${btnBase}`}
      >
        Next
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

// ─── Hero Section (Courses main page) ────────────────────────────────────────

const CoursesHero: React.FC<{ theme?: "light" | "dark" }> = ({
  theme = "light",
}) => {
  const headingColor = theme === "dark" ? "text-white" : "text-black";
  const inputBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/20 text-white placeholder-gray-500"
      : "bg-white border-black/20 text-black placeholder-gray-400";
  const hintColor = theme === "dark" ? "text-gray-400" : "text-gray-500";

  return (
    <div
      className="relative mx-6 mt-6 rounded-2xl overflow-hidden px-8 py-10 mb-6"
      style={{
        background:
          theme === "dark"
            ? "radial-gradient(ellipse at 70% 50%, rgba(120,60,200,0.35) 0%, transparent 65%), #0d0d0d"
            : "radial-gradient(ellipse at 70% 50%, rgba(180,120,255,0.35) 0%, transparent 65%), #f5efe6",
      }}
    >
      <h2
        className={`text-4xl font-bold text-center mb-6 ${headingColor}`}
        style={{ letterSpacing: "-0.02em" }}
      >
        Explore Topics and Skills
      </h2>
      <div className="max-w-lg mx-auto relative mb-3">
        <input
          className={`w-full px-4 py-2.5 pr-10 rounded-xl border text-sm outline-none ${inputBg}`}
          placeholder="What do you want to learn?"
          readOnly
        />
        <button className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>
      <p className={`text-center text-xs ${hintColor}`}>
        For example: UI and UX development
      </p>
    </div>
  );
};

// ─── Category View (Courses Category screen) ─────────────────────────────────

interface CourseCategoryCardProps {
  title: string;
  university: string;
  duration: string;
  type: "Course" | "Specialization";
  imageKey: string;
  theme?: "light" | "dark";
}

const CourseCategoryCard: React.FC<CourseCategoryCardProps> = ({
  title,
  university,
  duration,
  type,
  imageKey,
  theme = "light",
}) => {
  const cardBg =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/10"
      : "bg-white border-black/10";
  const titleColor = theme === "dark" ? "text-white" : "text-black";
  const subtitleColor = theme === "dark" ? "text-gray-400" : "text-gray-500";
  const typeBtnBg =
    theme === "dark"
      ? "border-white/20 text-gray-300"
      : "border-black/20 text-gray-600";

  return (
    <div
      className={`rounded-xl overflow-hidden border ${cardBg} cursor-pointer hover:shadow-md transition-shadow`}
    >
      <div className="h-36 overflow-hidden">
        <img
          src={courseImages[imageKey]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <p className={`font-semibold text-sm leading-tight mb-1 ${titleColor}`}>
          {title}
        </p>
        <p className={`text-[11px] mb-2 ${subtitleColor}`}>{university}</p>
        <div className="flex items-center gap-2">
          <span
            className={`text-[10px] px-2 py-0.5 border rounded ${typeBtnBg}`}
          >
            {type}
          </span>
          <span className={`text-[10px] ${subtitleColor}`}>{duration}</span>
        </div>
      </div>
    </div>
  );
};

const categorySpecializations = [
  {
    title: "Developing Applications with Google Cloud Platform",
    university: "University of Illinois Urbana-Champaign",
    duration: "3-6 Weeks",
    type: "Course" as const,
    imageKey: "mba",
  },
  {
    title: "Full Stack Web Development with Angular Specialization",
    university: "The Hong Kong University of Science and Business",
    duration: "3 Weeks",
    type: "Course" as const,
    imageKey: "computer-science-online",
  },
  {
    title: "Web Design for Everybody: Basics of Web Development",
    university: "University of Michigan",
    duration: "4-6 Weeks",
    type: "Course" as const,
    imageKey: "global-public-health",
  },
  {
    title: "Responsive Development and Design Specialization",
    university: "University of London",
    duration: "3-5 Weeks",
    type: "Course" as const,
    imageKey: "development",
  },
  {
    title: "Web Applications for Everybody Specialization",
    university: "University of Illinois Urbana-Champaign",
    duration: "1 Week",
    type: "Course" as const,
    imageKey: "technologies",
  },
  {
    title: "Development and Design Specialization",
    university: "University of London",
    duration: "4-6 Weeks",
    type: "Course" as const,
    imageKey: "data-science",
  },
];

// ─── Suggested Course Searches ────────────────────────────────────────────────

const SuggestedSearches: React.FC<{ theme?: "light" | "dark" }> = ({
  theme = "light",
}) => {
  const labelColor = theme === "dark" ? "text-gray-400" : "text-gray-500";
  const activePill = "bg-purple-600 text-white";
  const inactivePill =
    theme === "dark"
      ? "bg-[#1a1a1a] border-white/20 text-gray-300 hover:bg-white/10"
      : "bg-white border-black/15 text-gray-600 hover:bg-black/5";

  const searches = [
    { label: "Frontend", active: false },
    { label: "JavaScript", active: true },
    { label: "Brand creation", active: false },
    { label: "Dropshipping in medicine", active: false },
    { label: "Founding partner", active: false },
    { label: "Project manager", active: false },
    { label: "Developer", active: false },
    { label: "Managing director", active: false },
  ];

  return (
    <div className="mb-5">
      <p className={`text-xs mb-2 ${labelColor}`}>Suggested course searches</p>
      <div className="flex flex-wrap gap-2">
        {searches.map((s) => (
          <button
            key={s.label}
            className={`text-xs px-3 py-1.5 rounded-full border ${s.active ? activePill : inactivePill}`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export type EducationView = "courses" | "category";

export interface EducationCoursesProps {
  theme?: "light" | "dark";
  view?: EducationView;
}

export const EducationCourses: React.FC<EducationCoursesProps> = ({
  theme = "light",
  view = "courses",
}) => {
  const contentBg = theme === "dark" ? "bg-[#0d0d0d]" : "bg-[#f5efe6]";
  const sectionTitleColor = theme === "dark" ? "text-white" : "text-black";
  const subtitleColor = theme === "dark" ? "text-gray-400" : "text-gray-500";

  const trendingCards = [
    {
      title: "Data Science",
      duration: "14 - 18 months",
      courseCount: 64,
      imageKey: "data-science",
      large: true,
    },
    {
      title: "Business Management",
      duration: "14 - 18 months",
      courseCount: 56,
      imageKey: "business-management",
    },
    {
      title: "Development",
      duration: "17 - 24 months",
      courseCount: 78,
      imageKey: "development",
    },
    {
      title: "Technologies",
      duration: "12 months",
      courseCount: 35,
      imageKey: "technologies",
    },
    {
      title: "Computer Science",
      duration: "12 - 36 months",
      courseCount: 46,
      imageKey: "computer-science",
    },
  ];

  const degreeCards = [
    {
      title: "Master of Business Administration",
      university: "University of Urbana-Champaign",
      mode: "Remote",
      icon: "G",
      imageKey: "mba",
    },
    {
      title: "Online Master of Computer Science",
      university: "Arizona State University",
      mode: "Remote",
      icon: "⚙",
      imageKey: "computer-science-online",
    },
    {
      title: "Global Master of Public Health and Science",
      university: "Imperial College London",
      mode: "Remote",
      icon: "♦",
      imageKey: "global-public-health",
    },
  ];

  return (
    <div className="flex h-screen">
      <EducationSidebar theme={theme} />

      <div className={`flex-1 flex flex-col overflow-hidden ${contentBg}`}>
        <EducationTopBar theme={theme} />

        <div className="flex-1 overflow-auto">
          {view === "courses" ? (
            <>
              <CoursesHero theme={theme} />

              <div className="px-6 pb-2">
                {/* Trending Today */}
                <div className="mb-6">
                  <h3
                    className={`text-sm font-semibold mb-3 ${sectionTitleColor}`}
                  >
                    Trending today
                  </h3>
                  {/* Mosaic grid: large left, 2x2 right */}
                  <div
                    className="grid gap-3"
                    style={{
                      gridTemplateColumns: "1fr 1fr 1fr",
                      gridTemplateRows: "auto auto",
                    }}
                  >
                    {/* Large card spans 2 rows */}
                    <div style={{ gridRow: "1 / 3" }}>
                      <TrendingCard {...trendingCards[0]} theme={theme} large />
                    </div>
                    <TrendingCard {...trendingCards[1]} theme={theme} />
                    <TrendingCard {...trendingCards[2]} theme={theme} />
                    <TrendingCard {...trendingCards[3]} theme={theme} />
                    <TrendingCard {...trendingCards[4]} theme={theme} />
                  </div>
                </div>

                {/* Earn Your Degree */}
                <div className="mb-4">
                  <h3
                    className={`text-sm font-semibold mb-3 ${sectionTitleColor}`}
                  >
                    Earn Your Degree
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {degreeCards.map((card) => (
                      <DegreeCard key={card.title} {...card} theme={theme} />
                    ))}
                  </div>
                </div>

                <CoursePagination theme={theme} />
              </div>
            </>
          ) : (
            /* Category view */
            <>
              <div
                className="relative mx-6 mt-6 rounded-2xl overflow-hidden px-8 py-10 mb-6"
                style={{
                  background:
                    theme === "dark"
                      ? "radial-gradient(ellipse at 70% 50%, rgba(120,60,200,0.35) 0%, transparent 65%), #0d0d0d"
                      : "radial-gradient(ellipse at 70% 50%, rgba(180,120,255,0.35) 0%, transparent 65%), #f5efe6",
                }}
              >
                <h2
                  className={`text-4xl font-bold text-center mb-6 ${sectionTitleColor}`}
                  style={{ letterSpacing: "-0.02em" }}
                >
                  Software Development
                </h2>
                <div className="max-w-lg mx-auto relative mb-3">
                  <input
                    className={`w-full px-4 py-2.5 pr-10 rounded-xl text-sm outline-none ${
                      theme === "dark"
                        ? "bg-[#1a1a1a] border border-white/20 text-white placeholder-gray-500"
                        : "bg-white border border-black/20 text-black placeholder-gray-400"
                    }`}
                    placeholder="Mobile and Web Design"
                    readOnly
                  />
                  <button className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-purple-600 rounded-lg flex items-center justify-center">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="px-6 pb-2">
                <SuggestedSearches theme={theme} />

                <div className="mb-3">
                  <h3
                    className={`text-sm font-semibold mb-3 ${sectionTitleColor}`}
                  >
                    Earn Your Degree
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {categorySpecializations.map((card) => (
                      <CourseCategoryCard
                        key={card.title}
                        {...card}
                        theme={theme}
                      />
                    ))}
                  </div>
                </div>

                <CoursePagination theme={theme} />
              </div>
            </>
          )}
        </div>

        <EducationFooter theme={theme} />
      </div>
    </div>
  );
};
