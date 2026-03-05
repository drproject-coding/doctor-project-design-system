import React, { useState } from "react";

// ─── Sidebar ────────────────────────────────────────────────────────────────

const InboxSidebar: React.FC = () => (
  <div className="w-[200px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
    <div className="px-5 py-5 border-b border-white/10">
      <div className="flex items-center gap-0.5">
        <span className="text-xl font-bold text-white">Bruddle</span>
        <span className="w-2 h-2 rounded-full bg-purple-500 mb-3 flex-shrink-0"></span>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5">
      <div>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest px-2 mb-2">
          Navigation
        </p>
        <nav className="space-y-0.5">
          {[
            { label: "Dashboard", badge: 15, badgeColor: "bg-purple-600" },
            { label: "Projects" },
            { label: "Tasks" },
            { label: "Kanban Desk", badge: 28, badgeColor: "bg-purple-600" },
            { label: "File Manager", badge: 14, badgeColor: "bg-green-500" },
            { label: "Calendar" },
            { label: "Inbox", active: true },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                item.active
                  ? "bg-white/10 text-white font-medium"
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
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-gray-300 hover:text-white hover:bg-white/5"
            >
              <span
                className={`w-6 h-6 rounded-full ${member.color} flex-shrink-0`}
              ></span>
              <span className="truncate">{member.name}</span>
            </button>
          ))}
          <button className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/5">
            <span>∨ See More</span>
          </button>
        </div>
      </div>
    </div>

    <div className="px-3 py-4 border-t border-white/10">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex-shrink-0"></div>
          <span className="text-xs text-gray-200 truncate">
            Henry Richardson
          </span>
        </div>
        <button className="text-gray-500 hover:text-white text-sm flex-shrink-0">
          ···
        </button>
      </div>
    </div>
  </div>
);

// ─── Top Bar ─────────────────────────────────────────────────────────────────

const InboxTopBar: React.FC<{ showBack?: boolean }> = ({
  showBack = false,
}) => (
  <div className="flex items-center justify-between px-6 py-3 border-b bg-[#f5efe6] border-black/10 flex-shrink-0">
    <div className="flex items-center gap-3">
      {showBack && (
        <button className="flex items-center justify-center w-8 h-8 border border-black/15 rounded-lg text-gray-600 hover:bg-black/5 text-sm">
          ←
        </button>
      )}
      <h1 className="text-2xl font-bold text-black">Inbox</h1>
    </div>
    <div className="flex items-center gap-3">
      <button className="text-gray-500 text-sm hover:text-gray-700">···</button>
      <button className="text-gray-500 text-sm hover:text-gray-700">···</button>
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:bg-black/5 border border-black/10">
        ··· Apps
      </button>
      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium rounded-lg">
        ··· Create new
      </button>
    </div>
  </div>
);

// ─── Footer ───────────────────────────────────────────────────────────────────

const InboxFooter: React.FC = () => (
  <div className="flex items-center justify-between px-6 py-2.5 border-t bg-[#f5efe6] border-black/10 text-xs text-gray-500 flex-shrink-0">
    <div className="flex items-center gap-5">
      <button className="hover:opacity-80 flex items-center gap-1">
        ··· English
      </button>
      <button className="hover:opacity-80">Privacy Policy</button>
      <button className="hover:opacity-80">License</button>
      <button className="hover:opacity-80">API</button>
    </div>
    <div className="flex items-center gap-1.5">
      <button className="px-2 py-1 rounded bg-purple-600 text-white text-xs">
        ···
      </button>
      <button className="px-2 py-1 rounded bg-black/10 text-xs">···</button>
    </div>
  </div>
);

// ─── Avatar ───────────────────────────────────────────────────────────────────

const avatarColors: Record<string, string> = {
  "Helena Chavez": "bg-rose-400",
  "Sallie Wade": "bg-purple-500",
  "Blake Howard": "bg-green-500",
  "Devin Williams": "bg-blue-500",
  "Raymond Gomez": "bg-orange-400",
  "Daya Chitanis": "bg-teal-500",
  "Samuil Sadovsky": "bg-orange-400",
  "Ishaaq El Vohra": "bg-purple-400",
  "Jaquon Hart": "bg-blue-500",
  "Sebastian Bennett": "bg-rose-400",
  "Anaru Hakopa": "bg-green-500",
  "Rey Milbourne": "bg-teal-500",
  "Fua Lamba": "bg-yellow-500",
  "Sang Young-Il": "bg-indigo-500",
  "Gladys Kanyinda": "bg-teal-400",
  "Gabriela Pires": "bg-orange-400",
};

const Avatar: React.FC<{ name: string; size?: "sm" | "md" | "lg" }> = ({
  name,
  size = "md",
}) => {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  const color = avatarColors[name] ?? "bg-gray-400";
  const sizeClass =
    size === "sm"
      ? "w-6 h-6 text-[10px]"
      : size === "lg"
        ? "w-9 h-9 text-sm"
        : "w-8 h-8 text-xs";
  return (
    <div
      className={`${sizeClass} ${color} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}
    >
      {initials}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT: Mail List
// ─────────────────────────────────────────────────────────────────────────────

type MailTab = "Incoming" | "Sent" | "Drafts" | "Deleted";

const mailItems = [
  {
    id: "1",
    sender: "Samuil Sadovsky",
    title: "Title",
    subtitle: "Subtitle",
    time: "28 days ago",
    starred: false,
    attachments: [],
  },
  {
    id: "2",
    sender: "Ishaaq El Vohra",
    title: "Re: Canada Tries to Turn Ideas Into Dollars",
    subtitle: "Driver Messages That Drive",
    time: "23 hours ago",
    starred: false,
    attachments: [],
  },
  {
    id: "3",
    sender: "Jaquon Hart",
    title: "Re: Damaging Your Phone, Accidentally",
    subtitle: "Daily Report: Silicon Valley Losing",
    time: "6 days ago",
    starred: false,
    attachments: [
      { name: "app design.sketch", color: "bg-orange-400" },
      { name: "spendings.pdf", color: "bg-red-400" },
    ],
  },
  {
    id: "4",
    sender: "Sebastian Bennett",
    title: "Re: Tesla, Reporting Bigger Gains in Production",
    subtitle: "Evidence That Robots",
    time: "5 months ago",
    starred: true,
    attachments: [],
  },
  {
    id: "5",
    sender: "Anaru Hakopa",
    title: "The New Meaning of Fast Fashion",
    subtitle: "Detailing Amazon's Custom-Clothing",
    time: "58 mins ago",
    starred: true,
    attachments: [],
  },
  {
    id: "6",
    sender: "Rey Milbourne",
    title: "Lawyers to Review Mergers",
    subtitle: "Takes On the Flying Car Detailing Amazon's",
    time: "7 days ago",
    starred: false,
    attachments: [
      { name: "money transfer.pdf", color: "bg-red-400" },
      { name: "work scope.xls", color: "bg-green-500" },
      { name: "content articles.docx", color: "bg-blue-400" },
    ],
  },
  {
    id: "7",
    sender: "Fua Lamba",
    title: "Trump Appoints One of His Lawyers to Review",
    subtitle: "No Longer a Dream",
    time: "7 days ago",
    starred: true,
    attachments: [],
  },
  {
    id: "8",
    sender: "Sang Young-Il",
    title: "Re: Sleepy Behind the Wheel?",
    subtitle: "Changes to Tech Worker Visas Are Cosmetic",
    time: "2 weeks ago",
    starred: false,
    attachments: [],
  },
];

const MailListVariant: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MailTab>("Incoming");
  const tabs: MailTab[] = ["Incoming", "Sent", "Drafts", "Deleted"];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <InboxTopBar />
      <div className="flex-1 overflow-auto px-5 py-4">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-2 border border-black/15 rounded-lg text-xs font-medium text-gray-700 hover:bg-black/5 bg-white">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Compose Email
            </button>
            {/* Tabs */}
            <div className="flex items-center rounded-lg overflow-hidden border border-black/10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-black text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 border border-black/15 rounded-lg bg-white">
            <svg
              className="w-3 h-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Type to search..."
              className="text-xs text-gray-400 bg-transparent outline-none w-36"
              readOnly
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
          {mailItems.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors ${
                idx !== mailItems.length - 1 ? "border-b border-black/5" : ""
              }`}
            >
              {/* Checkbox */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="w-4 h-4 border border-gray-300 rounded"></div>
                <button className="text-gray-300 hover:text-gray-500 text-xs">
                  ···
                </button>
              </div>
              {/* Star */}
              {item.starred ? (
                <svg
                  className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ) : (
                <div className="w-3.5 h-3.5 flex-shrink-0"></div>
              )}
              {/* Avatar */}
              <Avatar name={item.sender} size="md" />
              {/* Sender */}
              <span className="text-sm font-semibold text-gray-900 w-32 flex-shrink-0 truncate">
                {item.sender}
              </span>
              {/* Title + subtitle */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="text-sm text-gray-800 font-medium truncate">
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="text-sm text-gray-400 truncate hidden md:block">
                    {item.subtitle}
                  </span>
                )}
              </div>
              {/* Attachments */}
              {item.attachments.length > 0 && (
                <div className="flex items-center gap-1 flex-shrink-0">
                  {item.attachments.map((att) => (
                    <span
                      key={att.name}
                      className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-[10px] text-gray-600"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${att.color}`}
                      ></span>
                      {att.name}
                    </span>
                  ))}
                </div>
              )}
              {/* Time */}
              <span className="text-xs text-gray-400 flex-shrink-0 w-20 text-right">
                {item.time}
              </span>
              <button className="text-gray-300 hover:text-gray-500 text-xs flex-shrink-0">
                ···
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <button className="flex items-center gap-1 px-3 py-1.5 border border-black/15 rounded-lg text-xs text-gray-700 hover:bg-black/5 bg-white">
            ‹ Prev
          </button>
          <span className="text-xs text-gray-500">Page 1 of 10</span>
          <button className="flex items-center gap-1 px-3 py-1.5 border border-black/15 rounded-lg text-xs text-gray-700 hover:bg-black/5 bg-white">
            Next ›
          </button>
        </div>
      </div>
      <InboxFooter />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT: Chat
// ─────────────────────────────────────────────────────────────────────────────

const chatMessages = [
  {
    id: "1",
    sender: "Helena Chavez",
    subject: "Leaving Fingerprints on the iPhone",
    preview: "I want to talk about things that are",
    time: "11:52AM",
  },
  {
    id: "2",
    sender: "Sallie Wade",
    subject: "Microsoft Looks to Regain",
    preview: "I want to talk about things that are",
    time: "10:04AM",
  },
  {
    id: "3",
    sender: "Blake Howard",
    subject: "Tech Roundup: Things Learned",
    preview: "I want to talk about things that are",
    time: "08:31AM",
  },
  {
    id: "4",
    sender: "Devin Williams",
    subject: "Tesla, Reporting Bigger Loss",
    preview: "I want to talk about things that are",
    time: "08:01PM",
  },
  {
    id: "5",
    sender: "Raymond Gomez",
    subject: "Just What Was in That System?",
    preview: "I want to talk about things that are",
    time: "12:54AM",
  },
  {
    id: "6",
    sender: "Devin Williams",
    subject: "Tesla, Reporting Bigger Loss",
    preview: "I want to talk about things that are",
    time: "08:01PM",
  },
  {
    id: "7",
    sender: "Daya Chitanis",
    subject: "Things Learned",
    preview: "Leaving Fingerprints on the iPhone",
    time: "08:01PM",
  },
];

const ChatVariant: React.FC = () => (
  <div className="flex-1 flex flex-col overflow-hidden">
    <InboxTopBar />
    <div className="flex-1 flex overflow-hidden px-5 py-4 gap-4">
      {/* Left Panel: Message List */}
      <div className="w-[280px] flex-shrink-0 bg-white rounded-xl border border-black/10 flex flex-col overflow-hidden">
        {/* Compose + Filter/Search */}
        <div className="flex items-center justify-between p-3 border-b border-black/8">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 text-white text-xs font-medium rounded-lg hover:bg-purple-700">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
            Compose
          </button>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"
                />
              </svg>
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Message items */}
        <div className="flex-1 overflow-y-auto">
          {chatMessages.map((msg, idx) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 px-3 py-2.5 cursor-pointer hover:bg-gray-50 transition-colors ${
                idx !== chatMessages.length - 1 ? "border-b border-black/5" : ""
              }`}
            >
              <Avatar name={msg.sender} size="md" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <span className="text-xs font-semibold text-gray-900 truncate">
                    {msg.sender}
                  </span>
                  <span className="text-[10px] text-gray-400 flex-shrink-0 ml-1">
                    {msg.time}
                  </span>
                </div>
                <p className="text-xs font-medium text-gray-700 truncate">
                  {msg.subject}
                </p>
                <p className="text-[10px] text-gray-400 truncate">
                  {msg.preview}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel: Chat Conversation */}
      <div className="flex-1 bg-white rounded-xl border border-black/10 flex flex-col overflow-hidden">
        {/* Chat header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-black/8">
          <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-black/10 hover:bg-gray-50 text-gray-500 text-sm">
            ‹
          </button>
          <div className="flex items-center gap-2">
            <Avatar name="Sallie Wade" size="sm" />
            <span className="text-sm font-semibold text-gray-900">
              Sallie Wade
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 text-sm">
              ···
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* 48 Messages divider */}
          <div className="flex justify-center">
            <span className="px-3 py-1 bg-gray-800 text-white text-[10px] rounded-full">
              48 Messages
            </span>
          </div>

          {/* Message: Gabriela (right) */}
          <div className="flex items-end justify-end gap-2">
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400">
                  8:20 PM Gabriela Pires
                </span>
                <Avatar name="Gabriela Pires" size="sm" />
              </div>
              <div className="bg-purple-600 text-white text-xs px-3 py-2 rounded-xl rounded-tr-sm max-w-[200px]">
                Freelance Design Tricks
              </div>
            </div>
          </div>

          {/* Message: Sallie (left) */}
          <div className="flex items-start gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Avatar name="Sallie Wade" size="sm" />
                <span className="text-[10px] text-gray-400">
                  Sallie Wade 8:35 PM
                </span>
              </div>
              <div className="bg-gray-100 text-gray-800 text-xs px-3 py-2 rounded-xl rounded-tl-sm max-w-[250px]">
                Some graphic designers always manage to produce
              </div>
              {/* Image attachments */}
              <div className="flex gap-2 mt-1">
                <div className="w-20 h-14 bg-gradient-to-br from-purple-300 to-indigo-400 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="w-full h-full opacity-70 bg-gradient-to-tr from-purple-200 to-blue-300"></div>
                </div>
                <div className="w-20 h-14 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="w-full h-full opacity-70 bg-gradient-to-tr from-blue-200 to-teal-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Message: Gabriela (right) */}
          <div className="flex items-end justify-end gap-2">
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-gray-400">
                  8:40 PM Gabriela Pires
                </span>
                <Avatar name="Gabriela Pires" size="sm" />
              </div>
              <div className="bg-purple-600 text-white text-xs px-3 py-2 rounded-xl rounded-tr-sm max-w-[260px]">
                Attending a trade show can be a very effective method
              </div>
            </div>
          </div>

          {/* Message: Sallie (left) */}
          <div className="flex items-start gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Avatar name="Sallie Wade" size="sm" />
                <span className="text-[10px] text-gray-400">
                  Sallie Wade 8:50 PM
                </span>
              </div>
              <div className="bg-gray-100 text-gray-800 text-xs px-3 py-2 rounded-xl rounded-tl-sm max-w-[200px]">
                Advertising on a budget part
              </div>
            </div>
          </div>

          {/* Message: Sallie typing */}
          <div className="flex items-start gap-2">
            <Avatar name="Sallie Wade" size="sm" />
            <div className="bg-gray-100 text-gray-800 text-xs px-3 py-2 rounded-xl rounded-tl-sm">
              <div className="flex items-center gap-1">
                <span
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></span>
                <span
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></span>
                <span
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></span>
              </div>
            </div>
          </div>
        </div>

        {/* Compose bar */}
        <div className="px-4 py-3 border-t border-black/8">
          <div className="flex items-center gap-2 bg-gray-50 border border-black/10 rounded-xl px-3 py-2">
            <Avatar name="Gabriela Pires" size="sm" />
            <input
              type="text"
              placeholder="Type to add something"
              className="flex-1 text-xs text-gray-400 bg-transparent outline-none"
              readOnly
            />
            <button className="text-gray-400 text-sm">···</button>
            <button className="text-gray-400 text-sm">···</button>
            <button className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center text-white">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <InboxFooter />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT: Mail Compose (Thread / Detail View)
// ─────────────────────────────────────────────────────────────────────────────

const MailComposeVariant: React.FC = () => (
  <div className="flex-1 flex flex-col overflow-hidden">
    <InboxTopBar showBack />
    <div className="flex-1 overflow-auto px-5 py-4">
      {/* Action bar */}
      <div className="flex items-center justify-between mb-4">
        <button className="flex items-center gap-1.5 px-3 py-2 border border-black/15 rounded-lg text-xs font-medium text-gray-700 hover:bg-black/5 bg-white">
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
            />
          </svg>
          Save as draft
        </button>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-black/15 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            Forward
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-black/15 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>

      {/* Email thread */}
      <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
        {/* Email subject */}
        <div className="px-5 py-4 border-b border-black/8">
          <h2 className="text-base font-bold text-gray-900">
            Re: Solar experiment lets trade energy among themselves
          </h2>
        </div>

        {/* First email */}
        <div className="px-5 py-4 border-b border-black/8">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <Avatar name="Helena Chavez" size="lg" />
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Helena Chavez
                </p>
                <p className="text-xs text-gray-400">
                  helena.chavez89@outlook.com{" "}
                  <span className="text-gray-300">to</span>{" "}
                  <span className="text-gray-500">me</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-400 flex-shrink-0">
              <span>18 January 2022</span>
              <span>·</span>
              <span>11:52AM</span>
            </div>
          </div>
          <div className="text-sm text-gray-700 leading-relaxed mb-4">
            <p>
              Working outside the office should help de-escalate workplace
              toxicity. But in reality, dysfunctional workplace culture may
              actually get worse when you're at home. Instead, her supervisor
              found new ways to monitor the team virtually
            </p>
            <br />
            <p>Best Regards,</p>
            <p>Helena Chavez</p>
          </div>
          {/* Image attachments */}
          <div className="flex gap-3">
            {[
              "from-purple-300 to-indigo-400",
              "from-blue-300 to-cyan-400",
              "from-rose-300 to-pink-400",
            ].map((gradient, i) => (
              <div
                key={i}
                className={`w-28 h-20 bg-gradient-to-br ${gradient} rounded-lg flex-shrink-0`}
              ></div>
            ))}
          </div>
        </div>

        {/* 5 replies divider */}
        <div className="flex items-center justify-center py-2 border-b border-black/8">
          <span className="w-6 h-6 flex items-center justify-center bg-purple-600 text-white text-[10px] rounded-full font-semibold">
            5
          </span>
        </div>

        {/* Second email reply */}
        <div className="px-5 py-4 border-b border-black/8">
          <div className="flex items-start gap-3">
            <Avatar name="Gladys Kanyinda" size="lg" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-900">
                  Gladys Kanyinda
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>13 January 2022</span>
                  <span>·</span>
                  <span>10:45AM</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                Toxic work cultures can have major impacts on employee wellbeing
              </p>
            </div>
          </div>
        </div>

        {/* Compose bar */}
        <div className="px-5 py-4">
          <div className="flex items-center gap-3 bg-gray-50 border border-black/10 rounded-xl px-4 py-2.5">
            <Avatar name="Helena Chavez" size="sm" />
            <input
              type="text"
              placeholder="Type to add something"
              className="flex-1 text-sm text-gray-400 bg-transparent outline-none"
              readOnly
            />
            <button className="text-gray-400 text-sm">···</button>
            <button className="text-gray-400 text-sm">···</button>
            <button className="w-6 h-6 bg-purple-600 rounded-lg flex items-center justify-center text-white">
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <InboxFooter />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT: Empty
// ─────────────────────────────────────────────────────────────────────────────

const EmptyVariant: React.FC = () => (
  <div className="flex-1 flex flex-col overflow-hidden">
    <InboxTopBar />
    <div className="flex-1 flex items-center justify-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/4 w-64 h-64 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-48 h-48 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full opacity-40 blur-3xl"></div>

      {/* Empty state content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Doodle/icon */}
        <div className="w-16 h-16 mb-4">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M12 28 C10 20, 16 12, 24 10 C28 9, 36 10, 40 14 C44 8, 52 8, 56 14 C60 20, 58 28, 52 32 L32 52 L12 32 C8 28, 8 24, 12 28 Z"
              stroke="#111"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M44 20 C46 16, 50 16, 52 20"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          No messages found?
        </h2>
        <p className="text-sm text-gray-500 mb-6 max-w-xs">
          Try to add more contacts from your personal account or start new
          discussion
        </p>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-xl transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create a message
        </button>
      </div>
    </div>
    <InboxFooter />
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main Export
// ─────────────────────────────────────────────────────────────────────────────

export type InboxVariant = "mail-list" | "chat" | "mail-compose" | "empty";

export interface InboxListProps {
  theme?: "light" | "dark";
  variant?: InboxVariant;
}

export const InboxList: React.FC<InboxListProps> = ({
  theme = "light",
  variant = "mail-list",
}) => {
  const renderContent = () => {
    switch (variant) {
      case "chat":
        return <ChatVariant />;
      case "mail-compose":
        return <MailComposeVariant />;
      case "empty":
        return <EmptyVariant />;
      case "mail-list":
      default:
        return <MailListVariant />;
    }
  };

  return (
    <div
      className={`flex h-screen ${theme === "dark" ? "dark" : ""} bg-[#f5efe6]`}
    >
      <InboxSidebar />
      {renderContent()}
    </div>
  );
};
