import React from "react";

// ─── Shared sidebar / top-bar / footer ───────────────────────────────────────

const DoctorProjectSidebar: React.FC = () => {
  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "products", label: "Products" },
    { id: "contacts", label: "Contacts" },
    {
      id: "customers",
      label: "Customers",
      badge: 15,
      badgeColor: "bg-purple-600",
    },
    {
      id: "sales",
      label: "Sales",
      active: true,
      badge: 14,
      badgeColor: "bg-green-500",
    },
    { id: "analytics", label: "Analytics" },
  ];

  const teamMembers = [
    { name: "Alexandre Paiva", color: "bg-orange-400" },
    { name: "Thanawan Chadee", color: "bg-teal-500" },
    { name: "Justine Robinson", color: "bg-purple-500" },
  ];

  return (
    <div className="w-[200px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
      {/* Logo */}
      <div className="px-5 py-5">
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold text-white">Doctor Project</span>
          <span className="w-2 h-2 rounded-full bg-purple-500 mb-3 flex-shrink-0"></span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-5">
        {/* Navigation */}
        <div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest px-2 mb-2">
            Navigation
          </p>
          <nav className="space-y-0.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  item.active
                    ? "bg-white/10 text-white font-medium"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
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
            ))}
          </nav>
        </div>

        {/* Team Members */}
        <div>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest px-2 mb-2">
            Team Members
          </p>
          <div className="space-y-0.5">
            {teamMembers.map((m) => (
              <button
                key={m.name}
                className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
              >
                <div
                  className={`w-6 h-6 rounded-full ${m.color} flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0`}
                >
                  {m.name[0]}
                </div>
                <span className="truncate">{m.name}</span>
              </button>
            ))}
            <button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-500 hover:text-gray-300">
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
      <div className="px-3 py-4 border-t border-white/10">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex-shrink-0"></div>
            <span className="text-sm text-gray-200 truncate">
              Henry Richardson
            </span>
          </div>
          <button className="text-gray-500 hover:text-white text-xs">
            ···
          </button>
        </div>
      </div>
    </div>
  );
};

const TopBar: React.FC = () => (
  <div className="flex items-center justify-between px-6 py-3 bg-[#f5efe6]">
    <h1 className="text-2xl font-bold text-black">Sales</h1>
    <div className="flex items-center gap-2">
      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
        ···
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
        ···
      </button>
      <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:bg-black/5 rounded-lg">
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
      <button className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
        <span className="text-base leading-none">+</span>
        Create new
      </button>
    </div>
  </div>
);

const Footer: React.FC = () => (
  <div className="flex items-center justify-between px-6 py-3 border-t border-black/10 bg-[#f5efe6] text-sm text-gray-500">
    <div className="flex items-center gap-5">
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
      <button className="p-1.5 rounded bg-black/10 hover:bg-black/20">
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
      <button className="p-1.5 rounded bg-black/10 hover:bg-black/20">
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

const SortIcon: React.FC = () => (
  <svg
    className="w-3 h-3 inline-block ml-1 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
    />
  </svg>
);

const TablePagination: React.FC = () => (
  <div className="flex items-center justify-between px-4 py-3 border-t border-black/10">
    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/10 text-sm text-gray-600 hover:bg-black/5">
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
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Prev
    </button>
    <span className="text-sm text-gray-500">Page 1 of 10</span>
    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-black/10 text-sm text-gray-600 hover:bg-black/5">
      Next
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
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
);

const FilterBar: React.FC = () => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-2">
      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 text-sm rounded-lg font-medium">
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0014 14v4a1 1 0 01-.553.894l-4 2A1 1 0 018 20v-6a1 1 0 01.293-.707L2.293 13.12A1 1 0 002 13.828V19a1 1 0 001 1h0"
          />
        </svg>
        All Filters
      </button>
      <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-black/10 text-sm rounded-lg text-gray-600 hover:bg-gray-50">
        All Customers
        <svg
          className="w-3 h-3 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-black/10 text-sm rounded-lg text-gray-600 hover:bg-gray-50">
        A-Z
        <svg
          className="w-3 h-3 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <button className="flex items-center gap-2 px-4 py-1.5 bg-white border border-black/10 text-sm rounded-lg text-gray-600 hover:bg-gray-50 min-w-[100px]">
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      Search
    </button>
  </div>
);

const ProductThumb: React.FC<{ color?: string }> = ({
  color = "bg-gray-200",
}) => (
  <div
    className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}
  >
    <svg
      className="w-5 h-5 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
);

// ─── V1 – Date, Product (image), Type, Qty, Amount, Status ───────────────────

const v1Sales = [
  {
    id: "1",
    date: "10 Jan 2023",
    product: "Camera",
    type: "Black",
    qty: 3,
    amount: "$25,00",
    status: "Tag",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-gray-200",
  },
  {
    id: "2",
    date: "10 Jan 2023",
    product: "Package",
    type: "Neutral",
    qty: 96,
    amount: "$137,50",
    status: "Pending",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-yellow-100",
  },
  {
    id: "3",
    date: "12 Jan 2023",
    product: "Architecture",
    type: "White",
    qty: 14,
    amount: "$245,80",
    status: "Tag",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-slate-200",
  },
  {
    id: "4",
    date: "13 Jan 2023",
    product: "Sneakers",
    type: "Multicolor",
    qty: 239,
    amount: "$105,50",
    status: "Pending",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-pink-100",
  },
  {
    id: "5",
    date: "16 Jan 2023",
    product: "Watches",
    type: "White",
    qty: 38,
    amount: "$295,00",
    status: "Pending",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-blue-100",
  },
  {
    id: "6",
    date: "16 Jan 2023",
    product: "Headphones",
    type: "Black",
    qty: 155,
    amount: "$95,00",
    status: "Tag",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-amber-100",
  },
  {
    id: "7",
    date: "17 Jan 2023",
    product: "Playstation",
    type: "White",
    qty: 198,
    amount: "$164,40",
    status: "Tag",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-indigo-100",
  },
  {
    id: "8",
    date: "19 Jan 2023",
    product: "Gaming",
    type: "Multicolor",
    qty: 36,
    amount: "$350,00",
    status: "Tag",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-emerald-100",
  },
  {
    id: "9",
    date: "23 Jan 2023",
    product: "Clothing",
    type: "Multicolor",
    qty: 239,
    amount: "$105,50",
    status: "Tag",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-rose-100",
  },
];

const V1Content: React.FC = () => (
  <div className="flex-1 overflow-auto p-5">
    <FilterBar />

    <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
      {/* Table header */}
      <div className="grid grid-cols-[40px_1.2fr_2fr_1fr_1fr_1fr_1fr_40px] items-center px-4 py-3 border-b border-black/10 text-sm font-medium text-gray-600">
        <div>
          <input type="checkbox" className="rounded" />
        </div>
        <div>
          Date <SortIcon />
        </div>
        <div>
          Product <SortIcon />
        </div>
        <div>
          Type <SortIcon />
        </div>
        <div>
          Qty. <SortIcon />
        </div>
        <div>
          Amount <SortIcon />
        </div>
        <div>
          Status <SortIcon />
        </div>
        <div></div>
      </div>

      {v1Sales.map((s) => (
        <div
          key={s.id}
          className="grid grid-cols-[40px_1.2fr_2fr_1fr_1fr_1fr_1fr_40px] items-center px-4 py-3 border-b border-black/5 hover:bg-gray-50 transition-colors"
        >
          <div>
            <input type="checkbox" className="rounded" />
          </div>

          {/* Date */}
          <div className="text-sm text-gray-600">{s.date}</div>

          {/* Product with image */}
          <div className="flex items-center gap-3">
            <ProductThumb color={s.thumb} />
            <span className="text-sm font-medium text-black">{s.product}</span>
          </div>

          {/* Type */}
          <div className="text-sm text-gray-600">{s.type}</div>

          {/* Qty */}
          <div className="text-sm text-gray-700">{s.qty}</div>

          {/* Amount */}
          <div className="text-sm font-semibold text-black">{s.amount}</div>

          {/* Status badge */}
          <div>
            <span
              className={`px-3 py-1 rounded-lg text-xs font-medium ${s.statusStyle}`}
            >
              {s.status}
            </span>
          </div>

          {/* Actions */}
          <button className="text-gray-400 hover:text-gray-600 text-xs">
            ···
          </button>
        </div>
      ))}

      <TablePagination />
    </div>
  </div>
);

// ─── V2 – Date, Product + Order#, Customer + email, Amount + Tax, Status ─────

const v2Sales = [
  {
    id: "1",
    date: "16 Jan 2023",
    product: "Camera",
    order: "Order #: 7697-98",
    customer: "Benedita Tavares",
    email: "krueger@yahoo.com",
    amount: "$2,880,00",
    tax: "Tax: $79.0",
    status: "Tag",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-gray-200",
  },
  {
    id: "2",
    date: "16 Jan 2023",
    product: "Package",
    order: "Order #: 7690-43",
    customer: "Balveer Bhadiar",
    email: "cantu@verizon.net",
    amount: "$3,600,00",
    tax: "Tax: $99.0",
    status: "Tag",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-yellow-100",
  },
  {
    id: "3",
    date: "16 Jan 2023",
    product: "Architecture",
    order: "Order #: 3421-77",
    customer: "Yamaha Toshinobu",
    email: "cremonini@outlook.com",
    amount: "$2,860,00",
    tax: "Tax: $72.9",
    status: "Tag",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-slate-200",
  },
  {
    id: "4",
    date: "16 Jan 2023",
    product: "Sneakers",
    order: "Order #: 8654-55",
    customer: "Jushawn McDowell",
    email: "sequin@verizon.net",
    amount: "$2,880,00",
    tax: "Tax: $79.0",
    status: "Tag",
    statusStyle: "bg-green-100 text-green-700",
    thumb: "bg-pink-100",
  },
  {
    id: "5",
    date: "16 Jan 2023",
    product: "Watches",
    order: "Order #: 0987-32",
    customer: "Ivan Magalhães",
    email: "hedwig@mac.com",
    amount: "$3,600,00",
    tax: "Tax: $99.0",
    status: "Shipped",
    statusStyle: "bg-green-400 text-white",
    thumb: "bg-blue-100",
  },
  {
    id: "6",
    date: "16 Jan 2023",
    product: "Headphones",
    order: "Order #: 6552-70",
    customer: "Merrile Burgett",
    email: "pappp@optonline.net",
    amount: "$2,860,00",
    tax: "Tax: $72.9",
    status: "Shipped",
    statusStyle: "bg-green-400 text-white",
    thumb: "bg-amber-100",
  },
  {
    id: "7",
    date: "16 Jan 2023",
    product: "Gaming",
    order: "Order #: 6539-90",
    customer: "Merrile Burgett",
    email: "pappp@optonline.net",
    amount: "$2,860,00",
    tax: "Tax: $72.9",
    status: "Shipped",
    statusStyle: "bg-green-400 text-white",
    thumb: "bg-indigo-100",
  },
];

const V2Content: React.FC = () => (
  <div className="flex-1 overflow-auto p-5">
    <FilterBar />

    <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
      {/* Table header */}
      <div className="grid grid-cols-[40px_1.2fr_2fr_2fr_1.5fr_1fr_40px] items-center px-4 py-3 border-b border-black/10 text-sm font-medium text-gray-600">
        <div>
          <input type="checkbox" className="rounded" />
        </div>
        <div>
          Date <SortIcon />
        </div>
        <div>
          Product <SortIcon />
        </div>
        <div>
          Customer <SortIcon />
        </div>
        <div>
          Amount <SortIcon />
        </div>
        <div>
          Status <SortIcon />
        </div>
        <div></div>
      </div>

      {v2Sales.map((s) => (
        <div
          key={s.id}
          className="grid grid-cols-[40px_1.2fr_2fr_2fr_1.5fr_1fr_40px] items-center px-4 py-3 border-b border-black/5 hover:bg-gray-50 transition-colors"
        >
          <div>
            <input type="checkbox" className="rounded" />
          </div>

          {/* Date */}
          <div className="text-sm text-gray-600">{s.date}</div>

          {/* Product with image + order number */}
          <div className="flex items-center gap-3">
            <ProductThumb color={s.thumb} />
            <div>
              <div className="text-sm font-medium text-black">{s.product}</div>
              <div className="text-xs text-gray-400">{s.order}</div>
            </div>
          </div>

          {/* Customer + email */}
          <div>
            <div className="text-sm font-medium text-black">{s.customer}</div>
            <div className="text-xs text-gray-400">{s.email}</div>
          </div>

          {/* Amount + Tax */}
          <div>
            <div className="text-sm font-semibold text-black">{s.amount}</div>
            <div className="text-xs text-gray-400">{s.tax}</div>
          </div>

          {/* Status badge */}
          <div>
            <span
              className={`px-3 py-1 rounded-lg text-xs font-medium ${s.statusStyle}`}
            >
              {s.status}
            </span>
          </div>

          {/* Actions */}
          <button className="text-gray-400 hover:text-gray-600 text-xs">
            ···
          </button>
        </div>
      ))}

      <TablePagination />
    </div>
  </div>
);

// ─── Main export ──────────────────────────────────────────────────────────────

export interface SalesListProps {
  theme?: "light" | "dark";
  variant?: "v1" | "v2";
}

export const SalesList: React.FC<SalesListProps> = ({
  theme = "light",
  variant = "v1",
}) => (
  <div className="flex h-screen bg-[#f5efe6]">
    <DoctorProjectSidebar />
    <div className="flex-1 flex flex-col overflow-hidden">
      <TopBar />
      {variant === "v1" ? <V1Content /> : <V2Content />}
      <Footer />
    </div>
  </div>
);
