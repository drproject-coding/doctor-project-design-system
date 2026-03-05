import React from "react";

// ─── Shared sidebar / top-bar / footer ───────────────────────────────────────

const BruddleSidebar: React.FC<{ activeItem: string }> = ({ activeItem }) => {
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
    { id: "sales", label: "Sales", badge: 14, badgeColor: "bg-green-500" },
    { id: "analytics", label: "Analytics" },
  ];

  const teamMembers = [
    { name: "Alexandre Paiva", initials: "AP", color: "bg-orange-400" },
    { name: "Thanawan Chadee", initials: "TC", color: "bg-teal-500" },
    { name: "Justine Robinson", initials: "JR", color: "bg-purple-500" },
  ];

  return (
    <div className="w-[200px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
      {/* Logo */}
      <div className="px-5 py-5">
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold text-white">Bruddle</span>
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
                  item.id === activeItem
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
                  {m.initials[0]}
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

const TopBar: React.FC<{ title?: string; showBack?: boolean }> = ({
  title = "Products",
  showBack,
}) => (
  <div className="flex items-center justify-between px-6 py-3 bg-[#f5efe6]">
    <div className="flex items-center gap-3">
      {showBack && (
        <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-black/10 text-gray-500 hover:bg-black/5">
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
        </button>
      )}
      <h1 className="text-2xl font-bold text-black">{title}</h1>
    </div>
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

// ─── Stock progress bar ───────────────────────────────────────────────────────

const StockBar: React.FC<{ value: number; max: number; color: string }> = ({
  value,
  max,
  color,
}) => {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="w-20 h-1.5 rounded-full bg-gray-200">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};

// ─── Product thumbnail placeholder ───────────────────────────────────────────

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

// ─── V1 – Image + description + sold/stock/price ─────────────────────────────

const v1Products = [
  {
    id: "1",
    name: "MacBook Pro 16, 2021",
    description:
      "We become what we think about. Winning isn't everything, but wanting to win is.",
    sold: 1313,
    stock: 2168,
    stockMax: 3000,
    stockColor: "bg-green-400",
    price: "$4,140",
    thumb: "bg-gray-200",
  },
  {
    id: "2",
    name: "MacBook Pro 13, 2021",
    description:
      "Either you run the day, or the day runs you. It does not matter how slowly you go.",
    sold: 4531,
    stock: 5506,
    stockMax: 6000,
    stockColor: "bg-yellow-400",
    price: "$2,148",
    thumb: "bg-blue-100",
  },
  {
    id: "3",
    name: "Dell XPS, 2021",
    description:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    sold: 3632,
    stock: 8522,
    stockMax: 10000,
    stockColor: "bg-green-400",
    price: "$3,680",
    thumb: "bg-slate-100",
  },
  {
    id: "4",
    name: "MacBook Pro 17, 2020",
    description:
      "I didn't fail the test. I just found 100 ways to do it wrong. When one door of happiness closes.",
    sold: 6818,
    stock: 6656,
    stockMax: 8000,
    stockColor: "bg-green-400",
    price: "$3,250",
    thumb: "bg-gray-100",
  },
  {
    id: "5",
    name: "IBM Workstation 2020",
    description:
      "Fall seven times and stand up eight. There is only one way to avoid criticism: do nothing.",
    sold: 6183,
    stock: 3678,
    stockMax: 8000,
    stockColor: "bg-red-400",
    price: "$1,800",
    thumb: "bg-amber-100",
  },
  {
    id: "6",
    name: "MacBook Air, 2021",
    description:
      "Winning isn't everything, but wanting to win is. Either write something worth reading.",
    sold: 1728,
    stock: 6619,
    stockMax: 8000,
    stockColor: "bg-yellow-400",
    price: "$2,900",
    thumb: "bg-indigo-100",
  },
];

const V1Content: React.FC = () => (
  <div className="flex-1 overflow-auto p-5">
    <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
      {/* Table header */}
      <div className="grid grid-cols-[2fr_3fr_1fr_1.5fr_1fr_40px] items-center px-4 py-3 border-b border-black/10 text-sm font-medium text-gray-600">
        <div>
          Name <SortIcon />
        </div>
        <div>
          Details <SortIcon />
        </div>
        <div>
          Sold <SortIcon />
        </div>
        <div>
          Stock <SortIcon />
        </div>
        <div>
          Price <SortIcon />
        </div>
        <div></div>
      </div>

      {v1Products.map((p) => (
        <div
          key={p.id}
          className="grid grid-cols-[2fr_3fr_1fr_1.5fr_1fr_40px] items-center px-4 py-3 border-b border-black/5 hover:bg-gray-50 transition-colors"
        >
          {/* Name + image */}
          <div className="flex items-center gap-3">
            <ProductThumb color={p.thumb} />
            <span className="text-sm font-medium text-black">{p.name}</span>
          </div>

          {/* Description */}
          <div className="text-sm text-gray-500 leading-snug pr-4">
            {p.description}
          </div>

          {/* Sold */}
          <div className="text-sm text-gray-700">{p.sold}</div>

          {/* Stock with progress bar */}
          <div className="flex flex-col gap-1">
            <StockBar value={p.stock} max={p.stockMax} color={p.stockColor} />
            <span className="text-xs text-gray-500">
              {p.stock.toLocaleString()}
            </span>
          </div>

          {/* Price */}
          <div className="text-sm font-semibold text-black">{p.price}</div>

          {/* Actions */}
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-black/10 text-gray-400 hover:text-gray-600 text-xs">
            ···
          </button>
        </div>
      ))}

      <TablePagination />
    </div>
  </div>
);

// ─── V2 – Filter bar + category pill + availability tag ──────────────────────

const v2Products = [
  {
    id: "1",
    name: "Camera",
    category: "Technology",
    sku: "8XXP",
    avl: "Tag",
    avlColor: "text-gray-500",
    color: "Black",
    sales: 140,
    price: "$25,00",
  },
  {
    id: "2",
    name: "Package",
    category: "Marketing",
    sku: "KSXU",
    avl: "Here",
    avlColor: "text-green-600",
    color: "Neutral",
    sales: 96,
    price: "$137,50",
  },
  {
    id: "3",
    name: "Architecture",
    category: "Marketing",
    sku: "BA2S",
    avl: "Low",
    avlColor: "text-red-500",
    color: "White",
    sales: 14,
    price: "$245,80",
  },
  {
    id: "4",
    name: "Sneakers",
    category: "Clothing",
    sku: "XG42",
    avl: "Tag",
    avlColor: "text-gray-500",
    color: "Multicolor",
    sales: 239,
    price: "$105,50",
  },
  {
    id: "5",
    name: "Watches",
    category: "Smart Wear",
    sku: "5WHL",
    avl: "Here",
    avlColor: "text-green-600",
    color: "White",
    sales: 38,
    price: "$295,00",
  },
  {
    id: "6",
    name: "Headphones",
    category: "Technology",
    sku: "VVD3",
    avl: "Tag",
    avlColor: "text-gray-500",
    color: "Black",
    sales: 155,
    price: "$95,00",
  },
  {
    id: "7",
    name: "Playstation",
    category: "Gifts & Toys",
    sku: "3L85",
    avl: "Low",
    avlColor: "text-red-500",
    color: "White",
    sales: 198,
    price: "$164,40",
  },
  {
    id: "8",
    name: "Gaming",
    category: "Gifts & Toys",
    sku: "QQ44",
    avl: "Tag",
    avlColor: "text-gray-500",
    color: "Multicolor",
    sales: 36,
    price: "$350,00",
  },
  {
    id: "9",
    name: "Clothing",
    category: "Clothing",
    sku: "XG42",
    avl: "Tag",
    avlColor: "text-gray-500",
    color: "Multicolor",
    sales: 239,
    price: "$105,50",
  },
];

const V2Content: React.FC = () => (
  <div className="flex-1 overflow-auto p-5">
    {/* Filter bar */}
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
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0014 14v4a1 1 0 01-.553.894l-4 2A1 1 0 018 20v-6a1 1 0 01.293-.707L14.586 6.7A1 1 0 0015 6V5H9v1a1 1 0 01-.293.707L2.293 13.12A1 1 0 002 13.828V19a1 1 0 001 1h0"
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

    <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
      {/* Table header */}
      <div className="grid grid-cols-[40px_2fr_1.5fr_1fr_1fr_1fr_1fr_1fr_40px] items-center px-4 py-3 border-b border-black/10 text-sm font-medium text-gray-600">
        <div>
          <input type="checkbox" className="rounded" />
        </div>
        <div>
          Product <SortIcon />
        </div>
        <div>
          Category <SortIcon />
        </div>
        <div>
          Id <SortIcon />
        </div>
        <div>
          Avl <SortIcon />
        </div>
        <div>
          Color <SortIcon />
        </div>
        <div>
          Sales <SortIcon />
        </div>
        <div>
          Price <SortIcon />
        </div>
        <div></div>
      </div>

      {v2Products.map((p) => (
        <div
          key={p.id}
          className="grid grid-cols-[40px_2fr_1.5fr_1fr_1fr_1fr_1fr_1fr_40px] items-center px-4 py-3 border-b border-black/5 hover:bg-gray-50 transition-colors"
        >
          <div>
            <input type="checkbox" className="rounded" />
          </div>

          {/* Product with image */}
          <div className="flex items-center gap-3">
            <ProductThumb />
            <span className="text-sm font-medium text-black">{p.name}</span>
          </div>

          {/* Category pill */}
          <div>
            <span className="px-3 py-1 border border-black/15 rounded-lg text-sm text-gray-700 bg-white">
              {p.category}
            </span>
          </div>

          {/* SKU */}
          <div className="text-sm text-gray-600">{p.sku}</div>

          {/* Availability */}
          <div>
            <span
              className={`px-2.5 py-1 border rounded-lg text-xs font-medium border-black/10 ${p.avlColor}`}
            >
              {p.avl}
            </span>
          </div>

          {/* Color */}
          <div className="text-sm text-gray-600">{p.color}</div>

          {/* Sales */}
          <div className="text-sm text-gray-700">{p.sales}</div>

          {/* Price */}
          <div className="text-sm font-semibold text-black">{p.price}</div>

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

// ─── V3 – Payment-style list: Name, Amount, Status (Paid/Pending), Rate, Service, Date, Source ──

const v3Products = [
  {
    id: "1",
    name: "Darius Cummings",
    amount: "$2,344",
    status: "Paid",
    rate: "$25,00",
    service: "Tag",
    date: "08 / 10 / 2022",
    source: "upwork.com",
  },
  {
    id: "2",
    name: "Sampson Totton",
    amount: "$5,220",
    status: "Pending",
    rate: "$35,00",
    service: "Design",
    date: "14 / 10 / 2022",
    source: "freelance.com",
  },
  {
    id: "3",
    name: "Jaroslav Brabec",
    amount: "$3,891",
    status: "Pending",
    rate: "$20,00",
    service: "Marketing",
    date: "15 / 10 / 2022",
    source: "fiverr.com",
  },
  {
    id: "4",
    name: "Olivia Eklund",
    amount: "$3,151",
    status: "Paid",
    rate: "$15,00",
    service: "Tag",
    date: "16 / 10 / 2022",
    source: "toptal.com",
  },
  {
    id: "5",
    name: "Leo Knight",
    amount: "$7,574",
    status: "Paid",
    rate: "$45,00",
    service: "Management",
    date: "16 / 10 / 2022",
    source: "jooble.com",
  },
  {
    id: "6",
    name: "Siri Jakobsson",
    amount: "$3,053",
    status: "Pending",
    rate: "$30,00",
    service: "Promotion",
    date: "18 / 10 / 2022",
    source: "upwork.com",
  },
  {
    id: "7",
    name: "Mariano Rasgado",
    amount: "$5,312",
    status: "Paid",
    rate: "$35,00",
    service: "Marketing",
    date: "19 / 10 / 2022",
    source: "flexjobs.com",
  },
  {
    id: "8",
    name: "Hugo Assunção",
    amount: "$6,366",
    status: "Paid",
    rate: "$25,00",
    service: "Tag",
    date: "23 / 10 / 2022",
    source: "toptal.com",
  },
  {
    id: "9",
    name: "Olivia Arribas",
    amount: "$1,432",
    status: "Paid",
    rate: "$15,00",
    service: "Marketing",
    date: "24 / 10 / 2022",
    source: "fiverr.com",
  },
];

const V3Content: React.FC = () => (
  <div className="flex-1 overflow-auto p-5">
    {/* Filter bar */}
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
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/10 text-sm rounded-lg text-gray-600 hover:bg-gray-50">
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
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          Group
        </button>
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-black/10 text-sm rounded-lg text-gray-600 hover:bg-gray-50">
          <svg
            className="w-3.5 h-3.5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
          Sort
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-white border border-black/10 rounded-lg text-gray-500 hover:bg-gray-50 text-xs">
          ···
        </button>
      </div>
      <button className="w-8 h-8 flex items-center justify-center bg-white border border-black/10 rounded-lg text-gray-500 hover:bg-gray-50">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>

    <div className="bg-white rounded-xl border border-black/10 overflow-hidden">
      {/* Table header */}
      <div className="grid grid-cols-[40px_2fr_1fr_1fr_1fr_1.5fr_1.5fr_1.5fr_40px] items-center px-4 py-3 border-b border-black/10 text-sm font-medium text-gray-600">
        <div>
          <input type="checkbox" className="rounded" />
        </div>
        <div>
          Name <SortIcon />
        </div>
        <div>
          Amount <SortIcon />
        </div>
        <div>
          Status <SortIcon />
        </div>
        <div>
          Rate <SortIcon />
        </div>
        <div>
          Service <SortIcon />
        </div>
        <div>
          Date <SortIcon />
        </div>
        <div>
          Source <SortIcon />
        </div>
        <div></div>
      </div>

      {v3Products.map((p) => (
        <div
          key={p.id}
          className="grid grid-cols-[40px_2fr_1fr_1fr_1fr_1.5fr_1.5fr_1.5fr_40px] items-center px-4 py-3 border-b border-black/5 hover:bg-gray-50 transition-colors"
        >
          <div>
            <input type="checkbox" className="rounded" />
          </div>

          {/* Name */}
          <div className="text-sm font-medium text-black">{p.name}</div>

          {/* Amount */}
          <div className="text-sm font-semibold text-black">{p.amount}</div>

          {/* Status badge */}
          <div>
            <span
              className={`px-3 py-1 rounded-md text-sm font-medium text-white ${p.status === "Paid" ? "bg-black" : "bg-black"}`}
            >
              {p.status}
            </span>
          </div>

          {/* Rate */}
          <div className="text-sm font-semibold text-black">{p.rate}</div>

          {/* Service pill */}
          <div>
            <span className="px-3 py-1 border border-black/15 rounded-lg text-sm text-gray-700 bg-white">
              {p.service}
            </span>
          </div>

          {/* Date */}
          <div className="text-sm text-gray-600">{p.date}</div>

          {/* Source */}
          <div className="text-sm text-gray-600">{p.source}</div>

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

// ─── Details screen ───────────────────────────────────────────────────────────

const DetailsContent: React.FC = () => (
  <div className="flex-1 overflow-auto p-5 flex gap-6">
    {/* Left panel */}
    <div className="w-[220px] flex-shrink-0">
      {/* Product image */}
      <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-pink-200 to-purple-200 mb-4 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-violet-100 to-pink-100" />
      </div>

      <h2 className="text-lg font-bold text-black leading-snug mb-1">
        Neoft UI Kit for NFT Marketplaces
      </h2>
      <p className="text-xs text-gray-500 mb-3">
        250 Pages and 320 symbols for NFT Marketplace UI design
      </p>

      <span className="px-3 py-1 border border-black/15 rounded-lg text-sm text-gray-700 bg-white">
        Template
      </span>

      <div className="mt-5 space-y-4">
        <div className="border-b border-dashed border-black/10 pb-4">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-2xl font-bold text-black">296</span>
            <span className="px-1.5 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded">
              8+
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">New sales</span>
            <svg
              className="w-3.5 h-3.5 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="border-b border-dashed border-black/10 pb-4">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-2xl font-bold text-black">18</span>
            <span className="px-1.5 py-0.5 bg-green-100 text-green-600 text-xs font-bold rounded">
              5
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Followers</span>
            <svg
              className="w-3.5 h-3.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
        </div>

        <div>
          <span className="text-lg font-bold text-black">$36</span>
          <div className="text-xs text-gray-500">Regular price</div>
        </div>
      </div>

      <button className="mt-4 flex items-center gap-2 px-3 py-2 border border-black/10 rounded-lg text-sm text-gray-600 hover:bg-gray-50 w-full">
        <svg
          className="w-4 h-4 text-purple-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add an update
        <span className="ml-auto flex gap-1">
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
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
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
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
        </span>
      </button>
    </div>

    {/* Right panel */}
    <div className="flex-1">
      {/* Tabs */}
      <div className="flex items-center gap-1 mb-5">
        <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg">
          General information
        </button>
        <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
          Pricing
        </button>
        <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
          Delivery
        </button>
        <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
          Returns
        </button>
        <div className="ml-auto">
          <button className="flex items-center gap-1 px-3 py-2 border border-black/15 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            --- Actions
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-black/10 p-5">
        <h3 className="text-base font-semibold text-black mb-5">
          General information
        </h3>

        {/* Images */}
        <div className="mb-5">
          <label className="text-sm text-gray-500 mb-2 block">Images</label>
          <div className="flex gap-2">
            {[
              "bg-pink-100",
              "bg-purple-100",
              "bg-blue-100",
              "bg-green-100",
              "bg-orange-100",
            ].map((c, i) => (
              <div
                key={i}
                className={`w-16 h-16 rounded-lg ${c} relative flex items-center justify-center flex-shrink-0`}
              >
                <button className="absolute top-1 right-1 w-4 h-4 bg-black/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-white"
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
            ))}
          </div>
        </div>

        {/* Product title + Category */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-500 mb-1.5 block">
              Product title
            </label>
            <input
              type="text"
              defaultValue="Dell XPS, 2021"
              className="w-full px-3 py-2 border border-black/15 rounded-lg text-sm text-black focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1.5 block">
              Category
            </label>
            <div className="relative">
              <select className="w-full px-3 py-2 border border-black/15 rounded-lg text-sm text-black focus:outline-none focus:ring-1 focus:ring-purple-500 appearance-none bg-white">
                <option>Laptops</option>
                <option>Electronics</option>
              </select>
              <svg
                className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
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
            </div>
          </div>
        </div>

        {/* SKU + Available */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-sm text-gray-500 mb-1.5 block">SKU</label>
            <input
              type="text"
              defaultValue="SKU: 34589-123"
              className="w-full px-3 py-2 border border-black/15 rounded-lg text-sm text-black focus:outline-none focus:ring-1 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1.5 block">
              Available
            </label>
            <div className="flex items-center border border-black/15 rounded-lg overflow-hidden">
              <span className="px-3 py-2 text-sm text-gray-600 bg-white flex-1">
                Primary warehouse
              </span>
              <button className="px-2 py-2 text-gray-400 hover:text-gray-600 border-l border-black/10">
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
                    d="M20 12H4"
                  />
                </svg>
              </button>
              <span className="px-2 py-2 text-sm font-medium text-black">
                248
              </span>
              <button className="px-2 py-2 text-gray-400 hover:text-gray-600 border-l border-black/10">
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
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-6">
          <label className="text-sm text-gray-500 mb-1.5 block">
            Specifications
          </label>
          <div className="flex flex-wrap gap-2 p-3 border border-black/15 rounded-lg min-h-[48px]">
            {["Digital", "UI / UX", "Web", "Theme"].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-sm text-gray-700"
              >
                {tag}
                <svg
                  className="w-3 h-3 text-gray-400 cursor-pointer hover:text-gray-600"
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
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 border border-black/15 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            Reset Changes
          </button>
          <button className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
            Update Settings
          </button>
        </div>
      </div>
    </div>
  </div>
);

// ─── Main export ──────────────────────────────────────────────────────────────

export interface ProductsListProps {
  theme?: "light" | "dark";
  variant?: "v1" | "v2" | "v3" | "details";
}

export const ProductsList: React.FC<ProductsListProps> = ({
  theme = "light",
  variant = "v1",
}) => {
  const isDetails = variant === "details";

  return (
    <div className="flex h-screen bg-[#f5efe6]">
      <BruddleSidebar activeItem="products" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          title={isDetails ? "Product details" : "Products"}
          showBack={isDetails}
        />
        {variant === "v1" && <V1Content />}
        {variant === "v2" && <V2Content />}
        {variant === "v3" && <V3Content />}
        {variant === "details" && <DetailsContent />}
        <Footer />
      </div>
    </div>
  );
};
