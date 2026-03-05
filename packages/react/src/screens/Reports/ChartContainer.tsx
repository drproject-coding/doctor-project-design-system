import React from "react";

// ─── Shared Layout Components ────────────────────────────────────────────────

const DoctorProjectSidebar: React.FC<{ active?: string }> = ({
  active = "Analytics",
}) => (
  <div className="w-[220px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
    {/* Logo */}
    <div className="px-6 py-5">
      <div className="flex items-center gap-1">
        <span className="text-xl font-bold text-white">Doctor Project</span>
        <span className="w-2 h-2 rounded-full bg-purple-500 mb-3 inline-block"></span>
      </div>
    </div>

    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-5">
      {/* Navigation */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
          Navigation
        </p>
        <nav className="space-y-0.5">
          {[
            {
              label: "Dashboard",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <rect
                    x="3"
                    y="3"
                    width="7"
                    height="7"
                    rx="1"
                    strokeWidth={2}
                  />
                  <rect
                    x="14"
                    y="3"
                    width="7"
                    height="7"
                    rx="1"
                    strokeWidth={2}
                  />
                  <rect
                    x="3"
                    y="14"
                    width="7"
                    height="7"
                    rx="1"
                    strokeWidth={2}
                  />
                  <rect
                    x="14"
                    y="14"
                    width="7"
                    height="7"
                    rx="1"
                    strokeWidth={2}
                  />
                </svg>
              ),
            },
            {
              label: "Products",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"
                  />
                </svg>
              ),
            },
            {
              label: "Contacts",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"
                  />
                </svg>
              ),
            },
            {
              label: "Customers",
              badge: 15,
              badgeColor: "bg-purple-600",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              ),
            },
            {
              label: "Sales",
              badge: 14,
              badgeColor: "bg-green-500",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              ),
            },
            {
              label: "Analytics",
              icon: (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              ),
            },
          ].map((item) => {
            const isActive = item.label === active;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-white/10 text-white font-medium"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-xs text-white px-1.5 py-0.5 rounded ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Team Members */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest px-2 mb-2">
          Team Members
        </p>
        <div className="space-y-0.5">
          {[
            { name: "Alexandre Paiva", color: "bg-orange-500" },
            { name: "Thanawan Chadee", color: "bg-rose-400" },
            { name: "Justine Robinson", color: "bg-amber-500" },
          ].map((member) => (
            <button
              key={member.name}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
            >
              <div
                className={`w-6 h-6 rounded-full ${member.color} flex-shrink-0`}
              ></div>
              <span className="text-sm">{member.name}</span>
            </button>
          ))}
          <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-500 hover:text-gray-300">
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span>See More</span>
          </button>
        </div>
      </div>
    </div>

    {/* User profile */}
    <div className="px-4 py-4 border-t border-white/10">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500"></div>
          <span className="text-sm text-gray-200">Henry Richardson</span>
        </div>
        <button className="text-gray-500 hover:text-white text-lg leading-none">
          ···
        </button>
      </div>
    </div>
  </div>
);

const TopBar: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center justify-between px-8 py-4 border-b border-black/10 bg-[#f5efe6]">
    <h1 className="text-3xl font-bold text-black">{title}</h1>
    <div className="flex items-center gap-3">
      <button className="p-2 rounded-lg hover:bg-black/5 text-gray-500">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button className="p-2 rounded-lg hover:bg-black/5 text-gray-500">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-black/5">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
          />
        </svg>
        Apps
      </button>
      <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v8M8 12h8"
          />
        </svg>
        Create new
      </button>
    </div>
  </div>
);

const Footer: React.FC = () => (
  <div className="flex items-center justify-between px-8 py-3 border-t border-black/10 text-sm text-gray-500 bg-[#f5efe6]">
    <div className="flex items-center gap-6">
      <button className="flex items-center gap-1.5 hover:opacity-80">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <path
            strokeLinecap="round"
            strokeWidth={2}
            d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
          />
        </svg>
        English
      </button>
      <button className="hover:opacity-80">Privacy Policy</button>
      <button className="hover:opacity-80">License</button>
      <button className="hover:opacity-80">API</button>
    </div>
    <div className="flex items-center gap-2">
      <button className="p-1.5 rounded bg-black/10">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </button>
      <button className="p-1.5 rounded bg-black/10">
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </div>
  </div>
);

const CalendarIcon: React.FC = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={2} />
    <path strokeLinecap="round" strokeWidth={2} d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);

// ─── Chart Card Wrapper ───────────────────────────────────────────────────────

interface ChartCardWrapperProps {
  title: string;
  children: React.ReactNode;
  legend?: Array<{ color: string; label: string }>;
  className?: string;
}

const ChartCardWrapper: React.FC<ChartCardWrapperProps> = ({
  title,
  children,
  legend,
  className = "",
}) => (
  <div
    className={`bg-white border border-black/10 rounded-xl overflow-hidden ${className}`}
  >
    <div className="flex items-center justify-between px-5 py-4 border-b border-black/5">
      <h2 className="text-base font-bold text-black">{title}</h2>
      <div className="flex items-center gap-4">
        {legend && (
          <div className="flex items-center gap-3">
            {legend.map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: l.color }}
                ></span>
                <span className="text-xs text-gray-500">{l.label}</span>
              </div>
            ))}
          </div>
        )}
        <CalendarIcon />
      </div>
    </div>
    <div className="p-4">{children}</div>
  </div>
);

// ─── SVG Bar Chart ────────────────────────────────────────────────────────────

interface BarChartSVGProps {
  data: number[];
  labels: string[];
  maxValue?: number;
  height?: number;
}

const BarChartSVG: React.FC<BarChartSVGProps> = ({
  data,
  labels,
  maxValue = 500,
  height = 200,
}) => {
  const svgWidth = 800;
  const svgHeight = height;
  const padLeft = 40;
  const padRight = 10;
  const padTop = 10;
  const padBottom = 30;
  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const barW = Math.floor(chartW / data.length) * 0.45;
  const gap = chartW / data.length;
  const yLines = [0, 100, 200, 300, 400, 500];

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="w-full"
      style={{ height }}
    >
      {/* Y-axis grid lines */}
      {yLines.map((v) => {
        const y = padTop + chartH - (v / maxValue) * chartH;
        return (
          <g key={v}>
            <line
              x1={padLeft}
              y1={y}
              x2={svgWidth - padRight}
              y2={y}
              stroke="#ccc"
              strokeWidth={0.5}
              strokeDasharray="4,3"
            />
            <text
              x={padLeft - 5}
              y={y + 4}
              textAnchor="end"
              fontSize={10}
              fill="#999"
            >
              {v}
            </text>
          </g>
        );
      })}
      {/* Bars */}
      {data.map((val, i) => {
        const barH = (val / maxValue) * chartH;
        const x = padLeft + i * gap + gap / 2 - barW / 2;
        const y = padTop + chartH - barH;
        const bgH = chartH;
        const bgY = padTop;
        return (
          <g key={i}>
            {/* Background bar (light purple) */}
            <rect
              x={x}
              y={bgY}
              width={barW}
              height={bgH}
              rx={3}
              fill="#e9d5ff"
              opacity={0.5}
            />
            {/* Foreground bar (purple) */}
            <rect
              x={x}
              y={y}
              width={barW}
              height={barH}
              rx={3}
              fill="#a855f7"
            />
            {/* X-axis label */}
            <text
              x={padLeft + i * gap + gap / 2}
              y={svgHeight - 5}
              textAnchor="middle"
              fontSize={10}
              fill="#999"
            >
              {labels[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// ─── SVG Horizontal Bar Chart ─────────────────────────────────────────────────

interface HBarChartSVGProps {
  data: Array<{ label: string; value: number; maxValue: number }>;
  height?: number;
}

const HBarChartSVG: React.FC<HBarChartSVGProps> = ({ data, height = 260 }) => {
  const svgWidth = 800;
  const svgHeight = height;
  const padLeft = 45;
  const padRight = 20;
  const padTop = 10;
  const padBottom = 25;
  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const rowH = chartH / data.length;
  const barH = rowH * 0.35;
  const absMax = Math.max(...data.map((d) => d.maxValue));
  const xTicks = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="w-full"
      style={{ height }}
    >
      {/* X grid lines */}
      {xTicks.map((v) => {
        const x = padLeft + (v / absMax) * chartW;
        return (
          <g key={v}>
            <line
              x1={x}
              y1={padTop}
              x2={x}
              y2={svgHeight - padBottom}
              stroke="#ccc"
              strokeWidth={0.5}
              strokeDasharray="3,3"
            />
            <text
              x={x}
              y={svgHeight - padBottom + 14}
              textAnchor="middle"
              fontSize={10}
              fill="#999"
            >
              {v}
            </text>
          </g>
        );
      })}
      {/* Bars */}
      {data.map((item, i) => {
        const y = padTop + i * rowH + rowH / 2 - barH / 2;
        const bgW = (item.maxValue / absMax) * chartW;
        const fgW = (item.value / absMax) * chartW;
        return (
          <g key={i}>
            <text
              x={padLeft - 5}
              y={y + barH / 2 + 4}
              textAnchor="end"
              fontSize={10}
              fill="#999"
            >
              {item.label}
            </text>
            {/* Separator line */}
            <line
              x1={padLeft}
              y1={padTop + i * rowH + rowH - 2}
              x2={svgWidth - padRight}
              y2={padTop + i * rowH + rowH - 2}
              stroke="#eee"
              strokeWidth={0.5}
              strokeDasharray="3,3"
            />
            {/* Background track */}
            <rect
              x={padLeft}
              y={y}
              width={bgW}
              height={barH}
              rx={3}
              fill="#e9d5ff"
              opacity={0.5}
            />
            {/* Foreground bar */}
            <rect
              x={padLeft}
              y={y}
              width={fgW}
              height={barH}
              rx={3}
              fill="#a855f7"
            />
          </g>
        );
      })}
    </svg>
  );
};

// ─── SVG Wave Chart ───────────────────────────────────────────────────────────

interface WaveChartSVGProps {
  dataBlue: number[];
  dataGreen: number[];
  labels: string[];
  maxValue?: number;
  height?: number;
  smooth?: boolean;
  showTooltip?: boolean;
}

function smoothPath(points: Array<{ x: number; y: number }>): string {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpX = (prev.x + curr.x) / 2;
    d += ` C ${cpX} ${prev.y}, ${cpX} ${curr.y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

function linePath(points: Array<{ x: number; y: number }>): string {
  return points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
}

const WaveChartSVG: React.FC<WaveChartSVGProps> = ({
  dataBlue,
  dataGreen,
  labels,
  maxValue = 500,
  height = 220,
  smooth = true,
  showTooltip = false,
}) => {
  const svgWidth = 800;
  const svgHeight = height;
  const padLeft = 40;
  const padRight = 10;
  const padTop = 20;
  const padBottom = 30;
  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const yLines = [0, 100, 200, 300, 400, 500];
  const n = dataBlue.length;

  const toPoint = (val: number, i: number) => ({
    x: padLeft + (i / (n - 1)) * chartW,
    y: padTop + chartH - (val / maxValue) * chartH,
  });

  const bluePoints = dataBlue.map(toPoint);
  const greenPoints = dataGreen.map(toPoint);

  const bluePath = smooth ? smoothPath(bluePoints) : linePath(bluePoints);
  const greenPath = smooth ? smoothPath(greenPoints) : linePath(greenPoints);

  // Area fill
  const blueAreaClose = `L ${bluePoints[n - 1].x} ${padTop + chartH} L ${bluePoints[0].x} ${padTop + chartH} Z`;
  const greenAreaClose = `L ${greenPoints[n - 1].x} ${padTop + chartH} L ${greenPoints[0].x} ${padTop + chartH} Z`;

  // Tooltip at middle point
  const tooltipIdx = Math.floor(n / 2);
  const tooltipPt = bluePoints[tooltipIdx];

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="w-full"
      style={{ height }}
    >
      <defs>
        <linearGradient id="waveBlueGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="waveGreenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86efac" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#86efac" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Y-grid */}
      {yLines.map((v) => {
        const y = padTop + chartH - (v / maxValue) * chartH;
        return (
          <g key={v}>
            <line
              x1={padLeft}
              y1={y}
              x2={svgWidth - padRight}
              y2={y}
              stroke="#ccc"
              strokeWidth={0.5}
              strokeDasharray="4,3"
            />
            <text
              x={padLeft - 5}
              y={y + 4}
              textAnchor="end"
              fontSize={10}
              fill="#999"
            >
              {v}
            </text>
          </g>
        );
      })}

      {/* Areas */}
      <path d={bluePath + blueAreaClose} fill="url(#waveBlueGrad)" />
      <path d={greenPath + greenAreaClose} fill="url(#waveGreenGrad)" />

      {/* Lines */}
      <path d={greenPath} fill="none" stroke="#86efac" strokeWidth={2} />
      <path d={bluePath} fill="none" stroke="#a855f7" strokeWidth={2} />

      {/* X labels */}
      {labels.map((lbl, i) => (
        <text
          key={i}
          x={padLeft + (i / (n - 1)) * chartW}
          y={svgHeight - 5}
          textAnchor="middle"
          fontSize={10}
          fill="#999"
        >
          {lbl}
        </text>
      ))}

      {/* Tooltip */}
      {showTooltip && (
        <g>
          <circle
            cx={tooltipPt.x}
            cy={tooltipPt.y}
            r={6}
            fill="#a855f7"
            stroke="white"
            strokeWidth={2}
          />
          <rect
            x={tooltipPt.x + 10}
            y={tooltipPt.y - 30}
            width={90}
            height={44}
            rx={6}
            fill="white"
            stroke="#e5e7eb"
            strokeWidth={1}
          />
          <text
            x={tooltipPt.x + 55}
            y={tooltipPt.y - 14}
            textAnchor="middle"
            fontSize={9}
            fill="#6b7280"
          >
            June 16
          </text>
          <text
            x={tooltipPt.x + 55}
            y={tooltipPt.y + 4}
            textAnchor="middle"
            fontSize={13}
            fontWeight="bold"
            fill="#111"
          >
            $14.800
          </text>
        </g>
      )}
    </svg>
  );
};

// ─── SVG Double Bar Chart ─────────────────────────────────────────────────────

interface DoubleBarChartSVGProps {
  dataGreen: number[];
  dataPurple: number[];
  labels: string[];
  maxValue?: number;
  height?: number;
}

const DoubleBarChartSVG: React.FC<DoubleBarChartSVGProps> = ({
  dataGreen,
  dataPurple,
  labels,
  maxValue = 500,
  height = 200,
}) => {
  const svgWidth = 800;
  const svgHeight = height;
  const padLeft = 40;
  const padRight = 10;
  const padTop = 10;
  const padBottom = 30;
  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const n = dataGreen.length;
  const slotW = chartW / n;
  const barW = slotW * 0.28;
  const yLines = [0, 100, 200, 300, 400, 500];

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className="w-full"
      style={{ height }}
    >
      {yLines.map((v) => {
        const y = padTop + chartH - (v / maxValue) * chartH;
        return (
          <g key={v}>
            <line
              x1={padLeft}
              y1={y}
              x2={svgWidth - padRight}
              y2={y}
              stroke="#ccc"
              strokeWidth={0.5}
              strokeDasharray="4,3"
            />
            <text
              x={padLeft - 5}
              y={y + 4}
              textAnchor="end"
              fontSize={10}
              fill="#999"
            >
              {v}
            </text>
          </g>
        );
      })}
      {dataGreen.map((gVal, i) => {
        const pVal = dataPurple[i];
        const gH = (gVal / maxValue) * chartH;
        const pH = (pVal / maxValue) * chartH;
        const centerX = padLeft + i * slotW + slotW / 2;
        const gX = centerX - barW - 2;
        const pX = centerX + 2;
        return (
          <g key={i}>
            <rect
              x={gX}
              y={padTop + chartH - gH}
              width={barW}
              height={gH}
              rx={2}
              fill="#86efac"
            />
            <rect
              x={pX}
              y={padTop + chartH - pH}
              width={barW}
              height={pH}
              rx={2}
              fill="#c4b5fd"
            />
            <text
              x={centerX}
              y={svgHeight - 5}
              textAnchor="middle"
              fontSize={10}
              fill="#999"
            >
              {labels[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

// ─── SVG Polar / Radar Chart ──────────────────────────────────────────────────

interface PolarChartSVGProps {
  variant?: "radar" | "segments";
  height?: number;
}

const PolarChartSVG: React.FC<PolarChartSVGProps> = ({
  variant = "radar",
  height = 300,
}) => {
  const cx = 160;
  const cy = 160;
  const maxR = 110;
  const rings = [0.2, 0.4, 0.6, 0.8, 1.0];
  const directions = [
    "North",
    "North\nEast",
    "East",
    "South\nEast",
    "South",
    "South\nWest",
    "West",
    "North\nWest",
  ];
  const n = directions.length;

  // Radar data (two series)
  const series1 = [0.95, 0.7, 0.55, 0.8, 0.45, 0.6, 0.9, 0.75];
  const series2 = [0.5, 0.85, 0.4, 0.6, 0.9, 0.35, 0.7, 0.5];

  const angleOffset = -Math.PI / 2;
  const getPoint = (r: number, i: number) => {
    const angle = angleOffset + (i / n) * 2 * Math.PI;
    return {
      x: cx + r * maxR * Math.cos(angle),
      y: cy + r * maxR * Math.sin(angle),
    };
  };

  const polyPath = (values: number[]) =>
    values
      .map((v, i) => {
        const pt = getPoint(v, i);
        return `${i === 0 ? "M" : "L"} ${pt.x} ${pt.y}`;
      })
      .join(" ") + " Z";

  if (variant === "segments") {
    // Pie-segment style polar chart
    const segmentColors = [
      "#fde68a",
      "#fca5a5",
      "#93c5fd",
      "#86efac",
      "#f9a8d4",
      "#c4b5fd",
    ];
    const segValues = [0.6, 0.45, 0.7, 0.5, 0.55, 0.65];
    const segN = segValues.length;
    const wedgeAngle = (2 * Math.PI) / segN;

    const segPaths = segValues.map((v, i) => {
      const startAngle = angleOffset + i * wedgeAngle;
      const endAngle = startAngle + wedgeAngle;
      const r = v * maxR;
      const x1 = cx + r * Math.cos(startAngle);
      const y1 = cy + r * Math.sin(startAngle);
      const x2 = cx + r * Math.cos(endAngle);
      const y2 = cy + r * Math.sin(endAngle);
      return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;
    });

    return (
      <svg viewBox="0 0 320 320" className="w-full" style={{ height }}>
        {/* Rings */}
        {rings.map((r) => (
          <circle
            key={r}
            cx={cx}
            cy={cy}
            r={r * maxR}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={0.8}
          />
        ))}
        {/* Spokes */}
        {Array.from({ length: segN }).map((_, i) => {
          const angle = angleOffset + (i / segN) * 2 * Math.PI;
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={cx + maxR * Math.cos(angle)}
              y2={cy + maxR * Math.sin(angle)}
              stroke="#d1d5db"
              strokeWidth={0.8}
              strokeDasharray="3,2"
            />
          );
        })}
        {/* Segments */}
        {segPaths.map((d, i) => (
          <path key={i} d={d} fill={segmentColors[i]} opacity={0.75} />
        ))}
        {/* Direction labels */}
        {directions.slice(0, 8).map((dir, i) => {
          const angle = angleOffset + (i / n) * 2 * Math.PI;
          const labelR = maxR + 22;
          const lx = cx + labelR * Math.cos(angle);
          const ly = cy + labelR * Math.sin(angle);
          const lines = dir.split("\n");
          return (
            <text
              key={i}
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={9}
              fill="#6b7280"
            >
              {lines.map((line, j) => (
                <tspan
                  key={j}
                  x={lx}
                  dy={j === 0 ? (lines.length > 1 ? -6 : 0) : 12}
                >
                  {line}
                </tspan>
              ))}
            </text>
          );
        })}
      </svg>
    );
  }

  // Radar variant
  return (
    <svg viewBox="0 0 320 320" className="w-full" style={{ height }}>
      {/* Rings */}
      {rings.map((r) => (
        <circle
          key={r}
          cx={cx}
          cy={cy}
          r={r * maxR}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={0.8}
        />
      ))}
      {/* Spokes */}
      {Array.from({ length: n }).map((_, i) => {
        const pt = getPoint(1, i);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={pt.x}
            y2={pt.y}
            stroke="#d1d5db"
            strokeWidth={0.8}
            strokeDasharray="3,2"
          />
        );
      })}
      {/* Series 2 (green, back) */}
      <path
        d={polyPath(series2)}
        fill="#86efac"
        fillOpacity={0.3}
        stroke="#86efac"
        strokeWidth={1.5}
      />
      {/* Series 1 (purple, front) */}
      <path
        d={polyPath(series1)}
        fill="#a855f7"
        fillOpacity={0.25}
        stroke="#a855f7"
        strokeWidth={1.5}
      />
      {/* Direction labels */}
      {directions.map((dir, i) => {
        const angle = angleOffset + (i / n) * 2 * Math.PI;
        const labelR = maxR + 22;
        const lx = cx + labelR * Math.cos(angle);
        const ly = cy + labelR * Math.sin(angle);
        const lines = dir.split("\n");
        return (
          <text
            key={i}
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={9}
            fill="#6b7280"
          >
            {lines.map((line, j) => (
              <tspan
                key={j}
                x={lx}
                dy={j === 0 ? (lines.length > 1 ? -6 : 0) : 12}
              >
                {line}
              </tspan>
            ))}
          </text>
        );
      })}
    </svg>
  );
};

// ─── Mini Sparkline ───────────────────────────────────────────────────────────

interface SparklineProps {
  color: string;
  values?: number[];
}

const Sparkline: React.FC<SparklineProps> = ({
  color,
  values = [40, 55, 35, 60, 45, 70, 55, 80],
}) => {
  const w = 100;
  const h = 40;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const points = values.map((v, i) => ({
    x: (i / (values.length - 1)) * w,
    y: h - ((v - min) / range) * h * 0.8 - h * 0.1,
  }));
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");
  const areaClose = `L ${points[points.length - 1].x} ${h} L 0 ${h} Z`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-20 h-10"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient
          id={`sparkGrad${color.replace("#", "")}`}
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d={d + areaClose}
        fill={`url(#sparkGrad${color.replace("#", "")})`}
      />
      <path d={d} fill="none" stroke={color} strokeWidth="2" />
    </svg>
  );
};

// ─── Mini Bar Sparkline ───────────────────────────────────────────────────────

interface BarSparklineProps {
  color: string;
  values?: number[];
}

const BarSparkline: React.FC<BarSparklineProps> = ({
  color,
  values = [30, 50, 70, 40, 60, 80, 50],
}) => {
  const w = 80;
  const h = 50;
  const max = Math.max(...values);
  const n = values.length;
  const bw = (w / n) * 0.55;
  const gap = w / n;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-20 h-12"
      preserveAspectRatio="none"
    >
      {values.map((v, i) => {
        const barH = (v / max) * h * 0.9;
        const x = i * gap + gap / 2 - bw / 2;
        return (
          <rect
            key={i}
            x={x}
            y={h - barH}
            width={bw}
            height={barH}
            rx={2}
            fill={color}
            opacity={0.8}
          />
        );
      })}
    </svg>
  );
};

// ─── Donut Chart ──────────────────────────────────────────────────────────────

interface DonutChartProps {
  segments: Array<{ color: string; pct: number; label?: string }>;
  label?: string;
  sublabel?: string;
  height?: number;
  showSegmentLabels?: boolean;
  emptyRings?: boolean;
}

const DonutChart: React.FC<DonutChartProps> = ({
  segments,
  label,
  sublabel,
  height = 200,
  showSegmentLabels = false,
  emptyRings = false,
}) => {
  const cx = 120;
  const cy = 120;
  const R = 90;
  const r = 55;

  if (emptyRings) {
    // Three concentric empty circles
    const colors = ["#a855f7", "#fbbf24", "#86efac"];
    const radii = [R, R - 20, R - 40];
    return (
      <svg viewBox="0 0 240 240" className="w-full" style={{ height }}>
        {radii.map((rad, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={rad}
            fill="none"
            stroke={colors[i]}
            strokeWidth={8}
          />
        ))}
        {label && (
          <>
            <text
              x={cx}
              y={cy - 8}
              textAnchor="middle"
              fontSize={18}
              fontWeight="bold"
              fill="#111"
            >
              {label}
            </text>
            {sublabel && (
              <text
                x={cx}
                y={cy + 12}
                textAnchor="middle"
                fontSize={11}
                fill="#6b7280"
              >
                {sublabel}
              </text>
            )}
          </>
        )}
      </svg>
    );
  }

  // Real donut
  let total = segments.reduce((s, seg) => s + seg.pct, 0);
  let currentAngle = -Math.PI / 2;

  const paths = segments.map((seg) => {
    const angle = (seg.pct / total) * 2 * Math.PI;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const x1 = cx + R * Math.cos(startAngle);
    const y1 = cy + R * Math.sin(startAngle);
    const x2 = cx + R * Math.cos(endAngle);
    const y2 = cy + R * Math.sin(endAngle);
    const ix1 = cx + r * Math.cos(endAngle);
    const iy1 = cy + r * Math.sin(endAngle);
    const ix2 = cx + r * Math.cos(startAngle);
    const iy2 = cy + r * Math.sin(startAngle);
    const large = angle > Math.PI ? 1 : 0;

    const midAngle = startAngle + angle / 2;
    const midR = (R + r) / 2;
    const lx = cx + midR * Math.cos(midAngle);
    const ly = cy + midR * Math.sin(midAngle);
    const pct = Math.round((seg.pct / total) * 100);

    return {
      d: `M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${r} ${r} 0 ${large} 0 ${ix2} ${iy2} Z`,
      color: seg.color,
      lx,
      ly,
      pct,
      showLabel: showSegmentLabels && pct > 5,
    };
  });

  return (
    <svg viewBox="0 0 240 240" className="w-full" style={{ height }}>
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.color} />
      ))}
      {paths.map(
        (p, i) =>
          p.showLabel && (
            <text
              key={i}
              x={p.lx}
              y={p.ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={9}
              fill="white"
              fontWeight="bold"
            >
              {p.pct}%
            </text>
          ),
      )}
      {label && (
        <>
          <text
            x={cx}
            y={cy - 8}
            textAnchor="middle"
            fontSize={18}
            fontWeight="bold"
            fill="#111"
          >
            {label}
          </text>
          {sublabel && (
            <text
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              fontSize={11}
              fill="#6b7280"
            >
              {sublabel}
            </text>
          )}
        </>
      )}
    </svg>
  );
};

// ─── World Map SVG (Simplified) ───────────────────────────────────────────────

const WorldMapSVG: React.FC = () => {
  // Highly simplified continent outlines
  return (
    <svg
      viewBox="0 0 800 420"
      className="w-full"
      style={{ height: 350 }}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Background */}
      <rect width="800" height="420" fill="#f5f0eb" />

      {/* Base continents (light beige) */}
      {/* North America (gray base) */}
      <path
        d="M 110 60 L 210 50 L 240 70 L 250 120 L 230 160 L 200 180 L 180 200 L 160 220 L 140 200 L 120 170 L 100 140 L 90 100 Z"
        fill="#d1c5b8"
        opacity={0.4}
      />
      {/* South America (gray base) */}
      <path
        d="M 180 230 L 220 220 L 240 250 L 250 300 L 240 350 L 210 380 L 185 370 L 170 340 L 165 290 L 170 260 Z"
        fill="#d1c5b8"
        opacity={0.4}
      />
      {/* Europe */}
      <path
        d="M 360 60 L 420 55 L 440 80 L 430 110 L 400 120 L 375 115 L 355 90 Z"
        fill="#d1c5b8"
        opacity={0.4}
      />
      {/* Africa */}
      <path
        d="M 360 130 L 420 125 L 445 160 L 440 230 L 410 290 L 380 310 L 355 280 L 340 230 L 345 170 Z"
        fill="#d1c5b8"
        opacity={0.4}
      />
      {/* Asia */}
      <path
        d="M 450 50 L 650 45 L 680 80 L 700 130 L 670 170 L 620 200 L 560 210 L 510 190 L 470 160 L 440 120 L 445 80 Z"
        fill="#d1c5b8"
        opacity={0.4}
      />
      {/* Australia */}
      <path
        d="M 600 280 L 680 265 L 720 290 L 720 340 L 690 365 L 640 360 L 600 340 L 590 310 Z"
        fill="#d1c5b8"
        opacity={0.4}
      />

      {/* Colored highlights */}
      {/* North America - Purple */}
      <path
        d="M 110 60 L 210 50 L 240 70 L 250 120 L 230 160 L 200 180 L 180 200 L 160 220 L 140 200 L 120 170 L 100 140 L 90 100 Z"
        fill="#a855f7"
        opacity={0.75}
      />
      {/* Mexico - Pink */}
      <path
        d="M 160 200 L 195 192 L 200 220 L 185 235 L 165 230 Z"
        fill="#ec4899"
        opacity={0.85}
      />
      {/* South America - Cyan */}
      <path
        d="M 180 230 L 220 220 L 240 250 L 250 300 L 240 350 L 210 380 L 185 370 L 170 340 L 165 290 L 170 260 Z"
        fill="#06b6d4"
        opacity={0.8}
      />
      {/* Europe small – green */}
      <path
        d="M 370 68 L 395 65 L 408 82 L 400 100 L 378 98 L 365 82 Z"
        fill="#22c55e"
        opacity={0.8}
      />
      {/* Asia - Gold/Orange */}
      <path
        d="M 480 58 L 640 52 L 670 90 L 655 150 L 600 185 L 540 190 L 500 165 L 468 130 L 462 90 Z"
        fill="#d97706"
        opacity={0.75}
      />
      {/* South East Asia small */}
      <path
        d="M 620 195 L 650 185 L 660 210 L 640 225 L 618 215 Z"
        fill="#7c3aed"
        opacity={0.7}
      />
      {/* Australia - Pink/Red */}
      <path
        d="M 600 280 L 680 265 L 720 290 L 720 340 L 690 365 L 640 360 L 600 340 L 590 310 Z"
        fill="#f87171"
        opacity={0.8}
      />

      {/* Tooltip */}
      <rect
        x="545"
        y="135"
        width="85"
        height="38"
        rx="6"
        fill="white"
        stroke="#e5e7eb"
        strokeWidth={1}
      />
      <text x="587" y="153" textAnchor="middle" fontSize={9} fill="#6b7280">
        $14.800
      </text>
      <polygon
        points="555,173 575,173 565,183"
        fill="white"
        stroke="#e5e7eb"
        strokeWidth={0.5}
      />

      {/* Legend */}
      {[
        { color: "#fbbf24", label: "Yellow", x: 230 },
        { color: "#a855f7", label: "Blue", x: 305 },
        { color: "#86efac", label: "Green", x: 370 },
        { color: "#f87171", label: "Red", x: 440 },
        { color: "#4f46e5", label: "Dark Blue", x: 508 },
      ].map((item) => (
        <g key={item.label}>
          <circle cx={item.x} cy={402} r={5} fill={item.color} />
          <text x={item.x + 10} y={406} fontSize={10} fill="#6b7280">
            {item.label}
          </text>
        </g>
      ))}
    </svg>
  );
};

// ─── Stat Cards ───────────────────────────────────────────────────────────────

interface StatCard1Props {
  label: string;
  value: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  trend?: "up" | "down";
}

const StatCard1: React.FC<StatCard1Props> = ({
  label,
  value,
  badge,
  badgeColor = "bg-green-100 text-green-700",
  description,
  trend = "up",
}) => (
  <div className="bg-white border border-black/10 rounded-xl p-4 flex-1">
    <div className="flex items-center justify-between mb-1">
      <span className="text-xs text-gray-500">{label}</span>
      <svg
        className="w-4 h-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={
            trend === "up"
              ? "M7 17L17 7M17 7H7M17 7v10"
              : "M7 7l10 10M17 17H7M17 17V7"
          }
        />
      </svg>
    </div>
    <div className="text-2xl font-bold text-black mb-0.5">{value}</div>
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-500">{description}</span>
      {badge && (
        <span
          className={`text-xs font-medium px-1.5 py-0.5 rounded ${badgeColor}`}
        >
          {badge}
        </span>
      )}
    </div>
  </div>
);

interface StatCard2Props {
  label: string;
  value: string;
  spent: string;
  left: string;
  barColor: string;
  pct: number;
}

const StatCard2: React.FC<StatCard2Props> = ({
  label,
  value,
  spent,
  left,
  barColor,
  pct,
}) => (
  <div className="bg-white border border-black/10 rounded-xl p-4 flex-1">
    <div className="text-xs text-gray-500 mb-0.5">{label}</div>
    <div className="text-2xl font-bold text-black mb-2">{value}</div>
    <div className="h-1.5 rounded-full bg-gray-100 mb-2">
      <div
        className="h-full rounded-full"
        style={{ width: `${pct}%`, backgroundColor: barColor }}
      ></div>
    </div>
    <div className="flex justify-between text-xs text-gray-500">
      <span>
        <span className="font-medium text-gray-800">{spent}</span> Spent
      </span>
      <span>
        <span className="font-medium text-gray-800">{left}</span> Left
      </span>
    </div>
  </div>
);

interface StatCard3Props {
  label: string;
  value: string;
  sub: string;
  change: string;
  changeColor: string;
  chartColor: string;
  chartValues?: number[];
}

const StatCard3: React.FC<StatCard3Props> = ({
  label,
  value,
  sub,
  change,
  changeColor,
  chartColor,
  chartValues,
}) => (
  <div className="bg-white border border-black/10 rounded-xl p-4 flex-1 flex items-center gap-4">
    <div className="flex-1">
      <div className="text-xs text-gray-500 mb-0.5">{label}</div>
      <div className="text-2xl font-bold text-black">{value}</div>
      <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
      <span className={`text-xs font-medium ${changeColor}`}>{change}</span>
    </div>
    <BarSparkline color={chartColor} values={chartValues} />
  </div>
);

interface StatCard4Props {
  icon: React.ReactNode;
  value: string;
  label: string;
  chartColor: string;
  chartValues?: number[];
}

const StatCard4: React.FC<StatCard4Props> = ({
  icon,
  value,
  label,
  chartColor,
  chartValues,
}) => (
  <div className="bg-white border border-black/10 rounded-xl p-4 flex-1 flex items-center gap-3">
    <div className="w-10 h-10 border border-black/10 rounded-lg flex items-center justify-center text-gray-500 flex-shrink-0">
      {icon}
    </div>
    <div className="flex-1">
      <div className="text-xl font-bold text-black">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
    <Sparkline color={chartColor} values={chartValues} />
  </div>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const MONTHS_12 = [
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
const MONTHS_8 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const MONTHS_4 = ["Jan", "Feb", "Mar", "Apr"];
const MONTHS_6 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const BAR_DATA_12 = [330, 210, 440, 490, 190, 260, 340, 300, 380, 220, 130, 90];
const BAR_DATA_8 = [330, 210, 440, 490, 190, 260, 340, 300];
const BAR_DATA_4 = [330, 210, 440, 490];

const HBAR_DATA_12 = [
  { label: "Jul", value: 870, maxValue: 980 },
  { label: "Jun", value: 720, maxValue: 950 },
  { label: "Apr", value: 640, maxValue: 900 },
  { label: "Mar", value: 310, maxValue: 820 },
  { label: "Feb", value: 700, maxValue: 870 },
  { label: "Jan", value: 810, maxValue: 940 },
];
const HBAR_DATA_8 = [
  { label: "Jul", value: 620, maxValue: 700 },
  { label: "Jun", value: 560, maxValue: 650 },
  { label: "Apr", value: 510, maxValue: 590 },
  { label: "Mar", value: 190, maxValue: 580 },
  { label: "Feb", value: 500, maxValue: 560 },
  { label: "Jan", value: 580, maxValue: 640 },
];
const HBAR_DATA_4 = [
  { label: "Jul", value: 280, maxValue: 320 },
  { label: "Jun", value: 230, maxValue: 290 },
  { label: "Apr", value: 200, maxValue: 250 },
  { label: "Mar", value: 75, maxValue: 210 },
  { label: "Feb", value: 110, maxValue: 200 },
  { label: "Jan", value: 220, maxValue: 270 },
];

const WAVE_BLUE_12 = [
  280, 330, 390, 420, 360, 290, 250, 270, 230, 320, 420, 460,
];
const WAVE_GREEN_12 = [
  100, 140, 200, 240, 270, 300, 350, 290, 330, 360, 340, 310,
];
const WAVE_BLUE_8 = [280, 330, 390, 420, 360, 290, 250, 270];
const WAVE_GREEN_8 = [100, 140, 200, 240, 270, 300, 350, 290];
const WAVE_BLUE_4 = [150, 200, 240, 210];
const WAVE_GREEN_4 = [80, 130, 180, 370];

// Geometric (jagged wave)
const GEO_BLUE_12 = [
  420, 350, 430, 380, 310, 330, 310, 290, 280, 240, 100, 120,
];
const GEO_GREEN_12 = [
  100, 140, 200, 200, 230, 330, 290, 310, 290, 340, 420, 380,
];
const GEO_BLUE_8 = [420, 350, 430, 380, 310, 330, 310, 400];
const GEO_GREEN_8 = [100, 150, 200, 220, 240, 320, 310, 100];
const GEO_BLUE_4 = [250, 200, 240, 210];
const GEO_GREEN_4 = [120, 180, 260, 380];

const DOUBLE_GREEN_12 = [
  220, 370, 340, 410, 100, 160, 10, 110, 200, 390, 200, 310,
];
const DOUBLE_PURPLE_12 = [
  210, 60, 400, 60, 60, 100, 30, 100, 190, 380, 370, 70,
];
const DOUBLE_GREEN_8 = [220, 370, 340, 410, 100, 160, 10, 110];
const DOUBLE_PURPLE_8 = [210, 60, 400, 60, 60, 100, 30, 100];
const DOUBLE_GREEN_4 = [220, 370, 340, 410];
const DOUBLE_PURPLE_4 = [210, 60, 400, 60];

// ─── Screen Layout Wrapper ────────────────────────────────────────────────────

interface ReportScreenProps {
  children: React.ReactNode;
  active?: string;
}

const ReportScreen: React.FC<ReportScreenProps> = ({
  children,
  active = "Analytics",
}) => (
  <div className="flex h-screen bg-[#f5efe6]">
    <DoctorProjectSidebar active={active} />
    <div className="flex-1 flex flex-col overflow-hidden">
      <TopBar title="Reports" />
      <div className="flex-1 overflow-auto p-6 space-y-4">{children}</div>
      <Footer />
    </div>
  </div>
);

// ─── 1. Bars Screen ───────────────────────────────────────────────────────────

export const BarsScreen: React.FC = () => (
  <ReportScreen>
    {/* Stat Cards */}
    <div className="flex gap-4">
      <StatCard1
        label="Balance"
        value="$80,470.50"
        badge="+10%"
        badgeColor="bg-green-100 text-green-700"
        description="Total remaining balance"
        trend="up"
      />
      <StatCard1
        label="Money in"
        value="$60,930.50"
        badge="-14%"
        badgeColor="bg-red-100 text-red-600"
        description="Total amount you gained"
        trend="down"
      />
      <StatCard1
        label="Money out"
        value="$42,890.30"
        badge="+16%"
        badgeColor="bg-green-100 text-green-700"
        description="Total amount you spent"
        trend="up"
      />
    </div>

    {/* Bars 12 cols */}
    <ChartCardWrapper title="Bars 12 columns">
      <BarChartSVG
        data={BAR_DATA_12}
        labels={MONTHS_12}
        maxValue={500}
        height={220}
      />
    </ChartCardWrapper>

    {/* Bars 12 cols (second) */}
    <ChartCardWrapper title="Bars 12 columns">
      <BarChartSVG
        data={BAR_DATA_12}
        labels={MONTHS_12}
        maxValue={500}
        height={220}
      />
    </ChartCardWrapper>

    {/* Bars 8 + 4 cols */}
    <div className="flex gap-4">
      <ChartCardWrapper title="Bars 8 columns" className="flex-1">
        <BarChartSVG
          data={BAR_DATA_8}
          labels={MONTHS_8}
          maxValue={500}
          height={200}
        />
      </ChartCardWrapper>
      <ChartCardWrapper title="Bars 4 columns" className="flex-1">
        <BarChartSVG
          data={BAR_DATA_4}
          labels={MONTHS_4}
          maxValue={500}
          height={200}
        />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 2. Bars Horizontal Screen ────────────────────────────────────────────────

export const BarsHorizontalScreen: React.FC = () => (
  <ReportScreen>
    {/* Stat Cards */}
    <div className="flex gap-4">
      <StatCard2
        label="Balance"
        value="$80,470.50"
        spent="1.345"
        left="1.345"
        barColor="#22c55e"
        pct={50}
      />
      <StatCard2
        label="Money in"
        value="$60,930.50"
        spent="1.345"
        left="1.345"
        barColor="#fbbf24"
        pct={50}
      />
      <StatCard2
        label="Money out"
        value="$42,890.30"
        spent="1.345"
        left="1.345"
        barColor="#f87171"
        pct={50}
      />
    </div>

    {/* Bars 12 cols */}
    <ChartCardWrapper title="Bars 12 columns">
      <HBarChartSVG data={HBAR_DATA_12} height={260} />
    </ChartCardWrapper>

    {/* Bars 8 + 4 cols */}
    <div className="flex gap-4">
      <ChartCardWrapper title="Bars 8 columns" className="flex-1">
        <HBarChartSVG data={HBAR_DATA_8} height={240} />
      </ChartCardWrapper>
      <ChartCardWrapper title="Bars 4 columns" className="flex-1">
        <HBarChartSVG data={HBAR_DATA_4} height={240} />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 3. Chart Geometric Screen ────────────────────────────────────────────────

export const ChartGeometricScreen: React.FC = () => (
  <ReportScreen>
    {/* Stat Cards with bar icons */}
    <div className="flex gap-4">
      {[
        { label: "Balance", value: "$80,470.50", color: "#22c55e" },
        { label: "Money in", value: "$60,930.50", color: "#fbbf24" },
        { label: "Money out", value: "$42,890.30", color: "#f87171" },
      ].map((s) => (
        <div
          key={s.label}
          className="bg-white border border-black/10 rounded-xl p-4 flex-1"
        >
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs text-gray-500 mb-0.5">{s.label}</div>
              <div className="text-2xl font-bold text-black">{s.value}</div>
            </div>
            <div className="w-6 h-6 text-gray-400">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </div>
          <div
            className="h-1 rounded-full mt-3"
            style={{ backgroundColor: s.color }}
          ></div>
        </div>
      ))}
    </div>

    {/* Wave 12 cols (Geometric / jagged) */}
    <ChartCardWrapper
      title="Wave 12 columns"
      legend={[
        { color: "#a855f7", label: "Blue Tag" },
        { color: "#86efac", label: "Green Tag" },
      ]}
    >
      <WaveChartSVG
        dataBlue={GEO_BLUE_12}
        dataGreen={GEO_GREEN_12}
        labels={MONTHS_12}
        maxValue={500}
        height={260}
        smooth={false}
        showTooltip
      />
    </ChartCardWrapper>

    {/* Wave 8 + 4 cols */}
    <div className="flex gap-4">
      <ChartCardWrapper
        title="Wave 8 columns"
        className="flex-1"
        legend={[
          { color: "#a855f7", label: "Blue Tag" },
          { color: "#86efac", label: "Green Tag" },
        ]}
      >
        <WaveChartSVG
          dataBlue={GEO_BLUE_8}
          dataGreen={GEO_GREEN_8}
          labels={MONTHS_8}
          maxValue={500}
          height={220}
          smooth={false}
          showTooltip
        />
      </ChartCardWrapper>
      <ChartCardWrapper title="Wave 4 columns" className="flex-1">
        <WaveChartSVG
          dataBlue={GEO_BLUE_4}
          dataGreen={GEO_GREEN_4}
          labels={MONTHS_4}
          maxValue={500}
          height={220}
          smooth={false}
          showTooltip
        />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 4. Chart Wave Screen ─────────────────────────────────────────────────────

export const ChartWaveScreen: React.FC = () => (
  <ReportScreen>
    {/* Stat Cards with bar sparklines */}
    <div className="flex gap-4">
      <StatCard3
        label="Dropbox"
        value="368.4 Gb"
        sub=""
        change="↑ +0.73%"
        changeColor="text-green-600"
        chartColor="#22c55e"
        chartValues={[30, 45, 40, 55, 50, 65, 60]}
      />
      <StatCard3
        label="Amazon AWS"
        value="82.6 Tb"
        sub=""
        change="↓ -0.73%"
        changeColor="text-red-500"
        chartColor="#fbbf24"
        chartValues={[60, 55, 50, 45, 40, 35, 38]}
      />
      <StatCard3
        label="Google Cloud"
        value="16.8 Gb"
        sub=""
        change="↑ +6.59%"
        changeColor="text-green-600"
        chartColor="#f87171"
        chartValues={[25, 30, 35, 40, 38, 45, 50]}
      />
    </div>

    {/* Wave 12 cols */}
    <ChartCardWrapper
      title="Wave 12 columns"
      legend={[
        { color: "#a855f7", label: "Blue Tag" },
        { color: "#86efac", label: "Green Tag" },
      ]}
    >
      <WaveChartSVG
        dataBlue={WAVE_BLUE_12}
        dataGreen={WAVE_GREEN_12}
        labels={MONTHS_12}
        maxValue={500}
        height={260}
        smooth
        showTooltip
      />
    </ChartCardWrapper>

    {/* Wave 8 + 4 cols */}
    <div className="flex gap-4">
      <ChartCardWrapper
        title="Wave 8 columns"
        className="flex-1"
        legend={[
          { color: "#a855f7", label: "Blue Tag" },
          { color: "#86efac", label: "Green Tag" },
        ]}
      >
        <WaveChartSVG
          dataBlue={WAVE_BLUE_8}
          dataGreen={WAVE_GREEN_8}
          labels={MONTHS_8}
          maxValue={500}
          height={220}
          smooth
          showTooltip
        />
      </ChartCardWrapper>
      <ChartCardWrapper title="Wave 4 columns" className="flex-1">
        <WaveChartSVG
          dataBlue={WAVE_BLUE_4}
          dataGreen={WAVE_GREEN_4}
          labels={MONTHS_4}
          maxValue={500}
          height={220}
          smooth
          showTooltip
        />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 5. Double Bars Screen ────────────────────────────────────────────────────

export const DoubleBarsScreen: React.FC = () => (
  <ReportScreen>
    {/* Double Bars 12 cols with stat row inside */}
    <ChartCardWrapper
      title="Bars 12 columns"
      legend={[
        { color: "#86efac", label: "Blue Tag" },
        { color: "#c4b5fd", label: "Green Tag" },
      ]}
    >
      {/* Mini stats inside */}
      <div className="flex gap-4 mb-4 border-b border-black/5 pb-4">
        {[
          {
            label: "Balance",
            value: "$80,470.50",
            change: "+10%",
            pos: true,
          },
          {
            label: "Money in",
            value: "$60,930.50",
            change: "-2%",
            pos: false,
          },
          {
            label: "Money out",
            value: "$42,890.30",
            change: "+10%",
            pos: true,
          },
        ].map((s) => (
          <div key={s.label} className="flex-1">
            <div className="text-xs text-gray-500">{s.label}</div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-black">{s.value}</span>
              <span
                className={`text-xs ${s.pos ? "text-green-600" : "text-red-500"}`}
              >
                {s.change}
              </span>
              <svg
                className={`w-3 h-3 ${s.pos ? "text-green-600" : "text-red-500"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    s.pos
                      ? "M7 17L17 7M17 7H7M17 7v10"
                      : "M7 7l10 10M17 17H7M17 17V7"
                  }
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      <DoubleBarChartSVG
        dataGreen={DOUBLE_GREEN_12}
        dataPurple={DOUBLE_PURPLE_12}
        labels={MONTHS_12}
        maxValue={500}
        height={220}
      />
    </ChartCardWrapper>

    {/* Bars 12 cols (plain) */}
    <ChartCardWrapper title="Bars 12 columns">
      <DoubleBarChartSVG
        dataGreen={DOUBLE_GREEN_12}
        dataPurple={DOUBLE_PURPLE_12}
        labels={MONTHS_12}
        maxValue={500}
        height={220}
      />
    </ChartCardWrapper>

    {/* Bars 8 + 4 cols */}
    <div className="flex gap-4">
      <ChartCardWrapper title="Bars 8 columns" className="flex-1">
        <DoubleBarChartSVG
          dataGreen={DOUBLE_GREEN_8}
          dataPurple={DOUBLE_PURPLE_8}
          labels={MONTHS_8}
          maxValue={500}
          height={200}
        />
      </ChartCardWrapper>
      <ChartCardWrapper title="Bars 4 columns" className="flex-1">
        <DoubleBarChartSVG
          dataGreen={DOUBLE_GREEN_4}
          dataPurple={DOUBLE_PURPLE_4}
          labels={MONTHS_4}
          maxValue={500}
          height={200}
        />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 6. Misc Screen ───────────────────────────────────────────────────────────

export const MiscScreen: React.FC = () => (
  <ReportScreen>
    {/* Map */}
    <ChartCardWrapper title="Map 12 columns">
      <WorldMapSVG />
    </ChartCardWrapper>

    {/* Pie chart 6 cols x2 */}
    <div className="flex gap-4">
      <ChartCardWrapper title="Pie chart 6 columns" className="flex-1">
        <div className="flex flex-col items-center">
          <DonutChart
            emptyRings
            label="$80,720.50"
            sublabel="from all accounts"
            height={200}
            segments={[]}
          />
          <div className="flex items-center gap-4 mt-2">
            {[
              { color: "#fbbf24", label: "Yellow Tag" },
              { color: "#a855f7", label: "Blue Tag" },
              { color: "#86efac", label: "Green Tag" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: l.color }}
                ></span>
                <span className="text-xs text-gray-500">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ChartCardWrapper>
      <ChartCardWrapper title="Pie chart 6 columns" className="flex-1">
        <div className="flex flex-col items-center">
          <DonutChart
            label="$80,720.50"
            sublabel="from all accounts"
            height={200}
            showSegmentLabels
            segments={[
              { color: "#fbbf24", pct: 8 },
              { color: "#a855f7", pct: 35 },
              { color: "#86efac", pct: 30 },
              { color: "#f87171", pct: 20 },
              { color: "#4f46e5", pct: 7 },
            ]}
          />
          <div className="flex items-center gap-4 mt-2">
            {[
              { color: "#fbbf24", label: "Yellow" },
              { color: "#a855f7", label: "Blue" },
              { color: "#86efac", label: "Green" },
              { color: "#f87171", label: "Red" },
              { color: "#4f46e5", label: "Dark Blue" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-1.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: l.color }}
                ></span>
                <span className="text-xs text-gray-500">{l.label}</span>
              </div>
            ))}
          </div>
        </div>
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── 7. Polar Chart Screen ────────────────────────────────────────────────────

export const PolarChartScreen: React.FC = () => (
  <ReportScreen>
    {/* Stat Cards with sparklines */}
    <div className="flex gap-4">
      {[
        {
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" strokeWidth={2} />
              <rect x="14" y="3" width="7" height="7" rx="1" strokeWidth={2} />
              <rect x="3" y="14" width="7" height="7" rx="1" strokeWidth={2} />
              <rect x="14" y="14" width="7" height="7" rx="1" strokeWidth={2} />
            </svg>
          ),
          value: "368.4 Gb",
          label: "Dropbox",
          color: "#a855f7",
          values: [30, 50, 35, 55, 45, 60, 55, 70],
        },
        {
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={2} />
              <path
                strokeLinecap="round"
                strokeWidth={2}
                d="M16 2v4M8 2v4M3 10h18"
              />
            </svg>
          ),
          value: "82.6 Tb",
          label: "Amazon AWS",
          color: "#a855f7",
          values: [55, 45, 60, 50, 65, 55, 70, 60],
        },
        {
          icon: (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          ),
          value: "16.8 Gb",
          label: "Google Cloud",
          color: "#a855f7",
          values: [40, 55, 45, 60, 50, 65, 55, 70],
        },
      ].map((s) => (
        <StatCard4
          key={s.label}
          icon={s.icon}
          value={s.value}
          label={s.label}
          chartColor={s.color}
          chartValues={s.values}
        />
      ))}
    </div>

    {/* Polar charts */}
    <div className="flex gap-4">
      <ChartCardWrapper title="Polar chart 6 columns" className="flex-1">
        <div className="flex justify-center">
          <PolarChartSVG variant="radar" height={320} />
        </div>
      </ChartCardWrapper>
      <ChartCardWrapper title="Polar chart 6 columns" className="flex-1">
        <div className="flex justify-center">
          <PolarChartSVG variant="segments" height={320} />
        </div>
      </ChartCardWrapper>
    </div>

    {/* Wave 6 cols x2 */}
    <div className="flex gap-4">
      <ChartCardWrapper title="Wave 6 columns" className="flex-1">
        <WaveChartSVG
          dataBlue={[280, 160, 130, 250, 290, 240]}
          dataGreen={[]}
          labels={MONTHS_6}
          maxValue={500}
          height={200}
          smooth
          showTooltip
        />
      </ChartCardWrapper>
      <ChartCardWrapper title="Wave 6 columns" className="flex-1">
        <WaveChartSVG
          dataBlue={[
            340, 280, 400, 360, 430, 370, 210, 310, 280, 440, 200, 300,
          ].slice(0, 6)}
          dataGreen={[]}
          labels={MONTHS_6}
          maxValue={500}
          height={200}
          smooth
          showTooltip
        />
      </ChartCardWrapper>
    </div>
  </ReportScreen>
);

// ─── Legacy / Compat Exports ──────────────────────────────────────────────────

export interface ChartContainerProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({
  title,
  subtitle,
  children,
}) => (
  <div className="max-w-6xl mx-auto p-6">
    <div className="mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">{children}</div>
  </div>
);

export const ChartBarVariant: React.FC = () => <BarsScreen />;
export const ChartPolarVariant: React.FC = () => <PolarChartScreen />;
export const ChartWaveVariant: React.FC = () => <ChartWaveScreen />;
export const ChartGeometricVariant: React.FC = () => <ChartGeometricScreen />;
export const ChartHorizontalBarsVariant: React.FC = () => (
  <BarsHorizontalScreen />
);
export const ChartDoubleBarsVariant: React.FC = () => <DoubleBarsScreen />;
export const ChartMiscVariant: React.FC = () => <MiscScreen />;
