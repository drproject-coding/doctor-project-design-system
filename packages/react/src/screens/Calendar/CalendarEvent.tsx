import React, { useState } from "react";

type CalendarView = "month" | "week" | "day";

const CalendarSidebar: React.FC = () => (
  <div className="w-[280px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
    <div className="px-6 py-5 border-b border-white/10">
      <div className="flex items-center gap-1">
        <span className="text-xl font-bold text-white">Bruddle</span>
        <span className="w-2 h-2 rounded-full bg-purple-500 mb-3"></span>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
          Navigation
        </p>
        <nav className="space-y-1">
          {[
            { label: "Dashboard", badge: 15, badgeColor: "bg-purple-600" },
            { label: "Projects" },
            { label: "Tasks" },
            { label: "Kanban Desk", badge: 28, badgeColor: "bg-purple-600" },
            { label: "File Manager", badge: 14, badgeColor: "bg-green-500" },
            { label: "Calendar", active: true },
            { label: "Inbox" },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                item.active
                  ? "bg-white/10 text-white font-medium"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span
                  className={`text-xs text-white px-1.5 py-0.5 rounded ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
          Team Members
        </p>
        <div className="space-y-1">
          {[
            { name: "Alexandre Paiva", color: "bg-orange-400" },
            { name: "Thanawan Chadee", color: "bg-purple-500" },
            { name: "Justine Robinson", color: "bg-blue-400" },
          ].map((member) => (
            <button
              key={member.name}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
            >
              <span
                className={`w-7 h-7 rounded-full ${member.color} flex-shrink-0`}
              ></span>
              <span>{member.name}</span>
            </button>
          ))}
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5">
            <span className="text-sm">∨ See More</span>
          </button>
        </div>
      </div>
    </div>

    <div className="px-4 py-4 border-t border-white/10">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
          <span className="text-sm text-gray-200">Henry Richardson</span>
        </div>
        <button className="text-gray-500 hover:text-white">···</button>
      </div>
    </div>
  </div>
);

const TopBar: React.FC = () => (
  <div className="flex items-center justify-between px-8 py-4 border-b bg-[#f5efe6] border-black/10">
    <h1 className="text-3xl font-bold text-black">Calendar</h1>
    <div className="flex items-center gap-4">
      <button className="text-gray-500 text-lg">···</button>
      <button className="text-gray-500 text-lg">···</button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-black/5">
        ··· Apps
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg">
        ··· Create new
      </button>
    </div>
  </div>
);

const CalendarNav: React.FC<{
  view: CalendarView;
  onViewChange: (v: CalendarView) => void;
  dateLabel: string;
}> = ({ view, onViewChange, dateLabel }) => (
  <div className="flex items-center justify-between px-6 py-4">
    <div className="flex items-center gap-3">
      <div className="flex border border-black/15 rounded-lg overflow-hidden">
        <button className="px-3 py-1.5 text-sm hover:bg-black/5">‹</button>
        <button className="px-3 py-1.5 text-sm border-l border-black/15 hover:bg-black/5">
          ›
        </button>
      </div>
      <span className="text-lg font-semibold text-black">{dateLabel}</span>
    </div>
    <div className="flex items-center gap-3">
      <div className="flex items-center">
        {(["Month", "Week", "Day"] as const).map((v) => (
          <button
            key={v}
            onClick={() => onViewChange(v.toLowerCase() as CalendarView)}
            className={`px-4 py-1.5 text-sm font-medium transition-colors ${
              view === v.toLowerCase()
                ? "bg-black text-white rounded-lg"
                : "text-gray-600 hover:text-black"
            }`}
          >
            {v}
          </button>
        ))}
      </div>
      <button className="flex items-center gap-2 px-4 py-1.5 border border-black/15 rounded-lg text-sm text-gray-700 hover:bg-black/5">
        ≡ Sort: A-Z
      </button>
    </div>
  </div>
);

type EventColor = "green" | "purple" | "yellow";

const EventPill: React.FC<{
  label: string;
  color: EventColor;
  small?: boolean;
}> = ({ label, color, small }) => {
  const cls = {
    green: "bg-green-50 text-green-700",
    purple: "bg-purple-50 text-purple-700",
    yellow: "bg-yellow-50 text-yellow-700",
  }[color];
  const dot = {
    green: "bg-green-400",
    purple: "bg-purple-400",
    yellow: "bg-yellow-400",
  }[color];
  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${cls} ${small ? "max-w-[100px]" : ""}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dot}`}></span>
      <span className="truncate">{label}</span>
    </div>
  );
};

const EventModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div
    className="fixed inset-0 bg-black/20 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <div
      className="bg-white rounded-2xl shadow-2xl w-[480px] p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold bg-black text-white px-2 py-0.5 rounded">
          7:30 am
        </span>
        <button className="text-gray-400 hover:text-gray-600 text-lg">
          ···
        </button>
      </div>
      <h2 className="text-2xl font-bold text-black mt-3 mb-1">
        Design a new dashboard for client
      </h2>
      <p className="text-sm text-gray-500 mb-5">Task created on 7 Jun 2022</p>

      <div className="flex gap-8 mb-5">
        <div>
          <p className="text-xs text-gray-500 mb-2">Assigned to</p>
          <div className="flex items-center">
            {[
              "bg-orange-400",
              "bg-purple-500",
              "bg-blue-400",
              "bg-green-400",
            ].map((c, i) => (
              <span
                key={i}
                className={`w-7 h-7 rounded-full ${c} border-2 border-white -ml-1 first:ml-0`}
              ></span>
            ))}
            <span className="w-7 h-7 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs -ml-1">
              +
            </span>
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">Due to</p>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 border border-black/15 rounded-lg text-sm font-medium">
              15 Aug 2023
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
              Business
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-black/10 pt-4 mb-4">
        <h3 className="text-sm font-semibold text-black mb-2">Description</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          When I first got into the online advertising business, I was looking
          for the magical combination that would put my website
        </p>
      </div>

      <div className="flex items-center gap-2 border border-black/15 rounded-xl px-3 py-2">
        <input
          className="flex-1 text-sm text-gray-400 outline-none bg-transparent"
          placeholder="Type to add your comment"
          readOnly
        />
        <button className="text-gray-400 text-lg">☺</button>
        <button className="text-gray-400 text-lg">+</button>
        <button className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
          ›
        </button>
      </div>
    </div>
  </div>
);

// Month view data
const weeks = [
  [
    { day: null, events: [] },
    { day: null, events: [] },
    { day: null, events: [] },
    { day: null, events: [] },
    {
      day: 30,
      events: [{ label: "Presentation", color: "yellow" as EventColor }],
    },
    { day: 1, events: [{ label: "Call", color: "green" as EventColor }] },
    { day: 2, events: [] },
  ],
  [
    {
      day: 5,
      events: [
        { label: "Meeting", color: "purple" as EventColor },
        { label: "Call", color: "green" as EventColor },
        { label: "+1 more", color: "purple" as EventColor },
      ],
    },
    { day: 6, events: [] },
    { day: 7, events: [] },
    { day: 8, events: [] },
    {
      day: 9,
      events: [{ label: "Presentation", color: "yellow" as EventColor }],
    },
    { day: 8, events: [{ label: "Meeting", color: "purple" as EventColor }] },
    { day: 9, events: [] },
  ],
  [
    { day: 12, events: [{ label: "Call", color: "green" as EventColor }] },
    { day: 13, events: [] },
    { day: 14, events: [] },
    { day: 15, events: [] },
    { day: 15, events: [] },
    {
      day: 15,
      events: [
        { label: "Meeting", color: "purple" as EventColor },
        { label: "Call", color: "green" as EventColor },
        { label: "+1 more", color: "purple" as EventColor },
      ],
    },
    { day: 16, events: [] },
  ],
  [
    {
      day: 19,
      events: [{ label: "Presentation", color: "yellow" as EventColor }],
    },
    { day: 20, events: [] },
    { day: 21, events: [] },
    { day: 22, events: [{ label: "Meeting", color: "purple" as EventColor }] },
    { day: 22, events: [] },
    { day: 22, events: [] },
    { day: 23, events: [] },
  ],
  [
    { day: 26, events: [{ label: "Meeting", color: "purple" as EventColor }] },
    {
      day: 27,
      events: [
        { label: "Call", color: "green" as EventColor },
        { label: "Meeting", color: "purple" as EventColor },
      ],
    },
    { day: 28, events: [] },
    { day: 29, events: [] },
    { day: 29, events: [] },
    {
      day: 30,
      events: [{ label: "Presentation", color: "yellow" as EventColor }],
    },
    { day: 30, events: [] },
  ],
];

const MonthView: React.FC<{ showModal: boolean; onToggle: () => void }> = ({
  showModal,
  onToggle,
}) => (
  <div className="flex-1 overflow-auto px-6 pb-6 relative">
    <div className="border border-black/10 rounded-xl overflow-hidden bg-white">
      <div className="grid grid-cols-7 border-b border-black/10">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div
            key={d}
            className="py-2 text-center text-xs font-medium text-gray-500"
          >
            {d}
          </div>
        ))}
      </div>
      {weeks.map((week, wi) => (
        <div
          key={wi}
          className="grid grid-cols-7 border-b last:border-b-0 border-black/10"
        >
          {week.map((cell, ci) => (
            <div
              key={ci}
              onClick={cell.day ? onToggle : undefined}
              className={`min-h-[90px] border-r last:border-r-0 border-black/10 p-2 ${cell.day ? "cursor-pointer hover:bg-gray-50" : "bg-gray-50/30"}`}
            >
              {cell.day && (
                <>
                  <div className="text-xs font-medium text-gray-600 mb-1">
                    {cell.day}
                  </div>
                  <div className="space-y-0.5">
                    {cell.events.map((e, ei) => (
                      <EventPill
                        key={ei}
                        label={e.label}
                        color={e.color}
                        small
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
    {showModal && <EventModal onClose={onToggle} />}
  </div>
);

const timeSlots = [
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "13am",
  "1pm",
  "2pm",
];

const dayEvents = [
  { time: "7:30 am", label: "Call", color: "green" as EventColor },
  { time: "8:30 am", label: "Meeting", color: "purple" as EventColor },
  { time: "9:00 am", label: "Meeting", color: "purple" as EventColor },
  { time: "10:30 am", label: "Call", color: "green" as EventColor },
  null,
  { time: "7:30 am", label: "Meeting", color: "yellow" as EventColor },
  null,
  { time: "7:30 am", label: "Call", color: "green" as EventColor },
  { time: "7:30 am", label: "Meeting", color: "purple" as EventColor },
];

const DayView: React.FC = () => (
  <div className="flex-1 overflow-auto px-6 pb-6">
    <div className="border border-black/10 rounded-xl overflow-hidden bg-white">
      <div className="py-3 px-4 border-b border-black/10 text-sm font-semibold text-gray-700 text-center">
        Monday, 3
      </div>
      {timeSlots.map((slot, i) => {
        const ev = dayEvents[i];
        return (
          <div
            key={slot}
            className="grid border-b last:border-b-0 border-black/10"
            style={{ gridTemplateColumns: "64px 1fr" }}
          >
            <div className="py-3 px-3 text-xs text-gray-500 text-right border-r border-black/10 self-center">
              {slot}
            </div>
            <div className="py-2 px-3 min-h-[44px] flex items-center">
              {ev && (
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg w-full ${
                    ev.color === "green"
                      ? "bg-green-50"
                      : ev.color === "purple"
                        ? "bg-purple-50"
                        : "bg-yellow-50"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      ev.color === "green"
                        ? "bg-green-400"
                        : ev.color === "purple"
                          ? "bg-purple-400"
                          : "bg-yellow-400"
                    }`}
                  ></span>
                  <span className="text-xs text-gray-500">{ev.time}</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {ev.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const weekCols = [
  {
    label: "Mon, 3",
    events: {
      0: { label: "Call", color: "green" as EventColor },
      2: { label: "Meeting", color: "purple" as EventColor },
      3: { label: "Call", color: "green" as EventColor },
      5: { label: "Present...", color: "yellow" as EventColor },
    },
  },
  {
    label: "Tue, 4",
    events: {
      1: { label: "Meeting", color: "purple" as EventColor },
      2: { label: "Call", color: "green" as EventColor },
      6: { label: "Meeting", color: "purple" as EventColor },
    },
  },
  {
    label: "Wed, 5",
    events: {
      0: { label: "Meeting", color: "purple" as EventColor },
      5: { label: "Meeting", color: "purple" as EventColor },
      6: { label: "Meeting", color: "purple" as EventColor },
    },
  },
  {
    label: "Thu, 6",
    events: {
      1: { label: "Present...", color: "yellow" as EventColor },
      5: { label: "Meeting", color: "purple" as EventColor },
    },
  },
  {
    label: "Fri, 7",
    events: {
      0: { label: "Call", color: "green" as EventColor },
      2: { label: "Present...", color: "yellow" as EventColor },
      5: { label: "Meeting", color: "purple" as EventColor },
    },
  },
  {
    label: "Sat, 8",
    events: {
      2: { label: "Meeting", color: "purple" as EventColor },
      3: { label: "Call", color: "green" as EventColor },
      6: { label: "Present...", color: "yellow" as EventColor },
    },
  },
  { label: "Sun, 9", events: {} },
];

const WeekView: React.FC = () => (
  <div className="flex-1 overflow-auto px-6 pb-6">
    <div className="border border-black/10 rounded-xl overflow-hidden bg-white">
      <div
        className="grid border-b border-black/10"
        style={{ gridTemplateColumns: "64px repeat(7, 1fr)" }}
      >
        <div className="border-r border-black/10"></div>
        {weekCols.map((d) => (
          <div
            key={d.label}
            className="py-2 text-center text-xs font-medium text-gray-500 border-r last:border-r-0 border-black/10"
          >
            {d.label}
          </div>
        ))}
      </div>
      {timeSlots.map((slot, si) => (
        <div
          key={slot}
          className="grid border-b last:border-b-0 border-black/10"
          style={{ gridTemplateColumns: "64px repeat(7, 1fr)" }}
        >
          <div className="py-3 px-3 text-xs text-gray-500 text-right border-r border-black/10">
            {slot}
          </div>
          {weekCols.map((day, di) => {
            const ev = (
              day.events as Record<number, { label: string; color: EventColor }>
            )[si];
            return (
              <div
                key={di}
                className="py-1 px-1 border-r last:border-r-0 border-black/10 min-h-[44px] flex items-start pt-2"
              >
                {ev && <EventPill label={ev.label} color={ev.color} small />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  </div>
);

const Footer: React.FC = () => (
  <div className="flex items-center justify-between px-8 py-3 border-t bg-[#f5efe6] border-black/10 text-sm text-gray-500">
    <div className="flex items-center gap-6">
      <button className="hover:opacity-80">··· English</button>
      <button className="hover:opacity-80">Privacy Policy</button>
      <button className="hover:opacity-80">License</button>
      <button className="hover:opacity-80">API</button>
    </div>
    <div className="flex items-center gap-2">
      <button className="px-2 py-1 rounded bg-purple-600 text-white text-xs">
        ···
      </button>
      <button className="px-2 py-1 rounded bg-black/10 text-xs">···</button>
    </div>
  </div>
);

export interface CalendarEventProps {
  defaultView?: CalendarView;
}

export const CalendarEvent: React.FC<CalendarEventProps> = ({
  defaultView = "month",
}) => {
  const [view, setView] = useState<CalendarView>(defaultView);
  const [showModal, setShowModal] = useState(defaultView === "month");

  const dateLabels: Record<CalendarView, string> = {
    month: "September 2022",
    week: "September 3 - 9, 2022",
    day: "September 3 - 9, 2022",
  };

  return (
    <div className="flex h-screen bg-[#f5efe6]">
      <CalendarSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        <CalendarNav
          view={view}
          onViewChange={(v) => {
            setView(v);
            setShowModal(v === "month");
          }}
          dateLabel={dateLabels[view]}
        />
        {view === "month" && (
          <MonthView
            showModal={showModal}
            onToggle={() => setShowModal((s) => !s)}
          />
        )}
        {view === "day" && <DayView />}
        {view === "week" && <WeekView />}
        <Footer />
      </div>
    </div>
  );
};
