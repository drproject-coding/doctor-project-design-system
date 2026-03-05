import React from "react";

// ─── Sidebar ─────────────────────────────────────────────────────────────────

const SupportSidebar: React.FC = () => (
  <div className="w-[200px] min-h-screen bg-[#111111] flex flex-col text-white flex-shrink-0">
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
            { label: "Dashboard", badge: 15, badgeColor: "bg-purple-600" },
            { label: "Projects" },
            { label: "Tasks" },
            { label: "Kanban Desk", badge: 28, badgeColor: "bg-purple-600" },
            { label: "File Manager", badge: 14, badgeColor: "bg-green-500" },
            { label: "Calendar" },
            { label: "Inbox" },
          ].map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-gray-400 hover:text-white hover:bg-white/5"
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

// ─── Top Bar ──────────────────────────────────────────────────────────────────

const SupportTopBar: React.FC = () => (
  <div className="flex items-center justify-between px-6 py-3.5 border-b bg-white border-black/10">
    <h1 className="text-2xl font-bold text-black">Help Center</h1>
    <div className="flex items-center gap-3">
      {/* search */}
      <button className="text-gray-500">
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
      {/* bell */}
      <button className="text-gray-500">
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
      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-black/5">
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

// ─── Footer ───────────────────────────────────────────────────────────────────

const SupportFooter: React.FC = () => (
  <div className="flex items-center justify-between px-8 py-3 border-t bg-[#f5efe6] border-black/10 text-sm text-gray-500">
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

// ─── Hero / Search ────────────────────────────────────────────────────────────

interface SupportHeroProps {
  searchPlaceholder?: string;
  searchValue?: string;
}

const SupportHero: React.FC<SupportHeroProps> = ({
  searchPlaceholder = "Search help articles",
  searchValue,
}) => (
  <div
    className="relative mx-6 mt-6 rounded-2xl overflow-hidden px-8 py-10 mb-6"
    style={{
      background:
        "radial-gradient(ellipse at 70% 50%, rgba(180,120,255,0.35) 0%, transparent 65%), #f5efe6",
    }}
  >
    <h2
      className="text-4xl font-bold text-center text-black mb-6"
      style={{ letterSpacing: "-0.02em" }}
    >
      How can we help you?
    </h2>
    <div className="max-w-lg mx-auto relative mb-3">
      <input
        className="w-full px-4 py-2.5 pr-10 rounded-xl border border-black/20 bg-white text-black text-sm outline-none placeholder-gray-400"
        placeholder={searchPlaceholder}
        defaultValue={searchValue}
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
    <p className="text-center text-xs text-gray-500">
      For example: How to create an account
    </p>
  </div>
);

// ─── Product Category Icon ────────────────────────────────────────────────────

const ProductIcon: React.FC<{ letter: string; color: string }> = ({
  letter,
  color,
}) => (
  <div
    className={`w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${color}`}
  >
    {letter}
  </div>
);

// ─── Product Category Card ────────────────────────────────────────────────────

interface ProductCategoryProps {
  letter: string;
  color: string;
  title: string;
  description: string;
}

const ProductCategoryCard: React.FC<ProductCategoryProps> = ({
  letter,
  color,
  title,
  description,
}) => (
  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-black/10 cursor-pointer hover:shadow-sm transition-shadow">
    <ProductIcon letter={letter} color={color} />
    <div>
      <p className="font-semibold text-sm text-black">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">{description}</p>
    </div>
  </div>
);

// ─── Popular Help Article ─────────────────────────────────────────────────────

interface HelpArticleProps {
  title: string;
  category: string;
  description: string;
}

const HelpArticleCard: React.FC<HelpArticleProps> = ({
  title,
  category,
  description,
}) => (
  <div className="p-4 bg-white rounded-xl border border-black/10 cursor-pointer hover:shadow-sm transition-shadow">
    <span className="text-[10px] font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
      {category}
    </span>
    <p className="font-semibold text-sm text-black mt-2 mb-1">{title}</p>
    <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    <button className="text-xs text-purple-600 font-medium mt-2 hover:underline">
      Read more
    </button>
  </div>
);

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

const Breadcrumb: React.FC<{ items: string[] }> = ({ items }) => (
  <div className="flex items-center gap-1.5 text-sm text-gray-500 px-6 pt-4 pb-2">
    {items.map((item, i) => (
      <React.Fragment key={i}>
        {i > 0 && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        )}
        <span
          className={
            i === items.length - 1
              ? "text-black font-medium"
              : "hover:text-black cursor-pointer"
          }
        >
          {item}
        </span>
      </React.Fragment>
    ))}
  </div>
);

// ─── Article Sidebar ──────────────────────────────────────────────────────────

const ArticleSidebarNav: React.FC = () => {
  const items = [
    { label: "Getting started", active: true },
    { label: "Managing my account" },
    { label: "Trading and funding" },
    { label: "Taxes and financial services" },
    { label: "Privacy and security" },
    { label: "Other topics" },
    { label: "Asset Directory" },
    { label: "Top of mind" },
  ];

  return (
    <div className="w-48 flex-shrink-0 pt-2">
      <nav className="space-y-0.5">
        {items.map((item) => (
          <button
            key={item.label}
            className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
              item.active
                ? "text-purple-600 font-medium"
                : "text-gray-700 hover:text-black hover:bg-black/5"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

// ─── Related Article Row ──────────────────────────────────────────────────────

interface RelatedArticleProps {
  icon: string;
  iconBg: string;
  title: string;
  date: string;
  tag: string;
}

const RelatedArticleRow: React.FC<RelatedArticleProps> = ({
  icon,
  iconBg,
  title,
  date,
  tag,
}) => (
  <div className="flex items-center gap-4 p-4 border border-black/10 rounded-xl bg-white cursor-pointer hover:shadow-sm transition-shadow">
    <div
      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${iconBg}`}
    >
      <span className="text-base">{icon}</span>
    </div>
    <div>
      <p className="font-semibold text-sm text-black">{title}</p>
      <p className="text-xs text-gray-500 mt-0.5">
        {date} &bull; {tag}
      </p>
    </div>
  </div>
);

// ─── Search Result Row ────────────────────────────────────────────────────────

interface SearchResultProps {
  title: string;
  excerpt: string;
}

const SearchResultRow: React.FC<SearchResultProps> = ({ title, excerpt }) => (
  <div className="p-4 border border-black/10 rounded-xl bg-white cursor-pointer hover:shadow-sm transition-shadow">
    <p className="font-semibold text-sm text-black mb-1">{title}</p>
    <p className="text-xs text-gray-500 leading-relaxed">{excerpt}</p>
    <button className="text-xs text-purple-600 font-medium mt-2 hover:underline">
      See more articles
    </button>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export type SupportView = "home" | "categories" | "article" | "search";

export interface SupportHomeProps {
  view?: SupportView;
}

const products: ProductCategoryProps[] = [
  {
    letter: "W",
    color: "bg-blue-500",
    title: "Wallet",
    description: "The full Doctor Project wallet",
  },
  {
    letter: "C",
    color: "bg-green-500",
    title: "Commerce",
    description: "Accept payments from anyone",
  },
  {
    letter: "C",
    color: "bg-purple-500",
    title: "Cloud",
    description: "Scale the future of payments",
  },
  {
    letter: "O",
    color: "bg-orange-500",
    title: "Online Trading",
    description: "Grow your trading business",
  },
  {
    letter: "E",
    color: "bg-teal-500",
    title: "Exchange",
    description: "Global marketplace for trading",
  },
  {
    letter: "Q",
    color: "bg-pink-500",
    title: "Query & Transactions",
    description: "Stay on top of compliance",
  },
  {
    letter: "C",
    color: "bg-yellow-500",
    title: "Card",
    description: "Earn points and rewards",
  },
  {
    letter: "I",
    color: "bg-indigo-500",
    title: "Intelligence",
    description: "Automate your compliance",
  },
  {
    letter: "A",
    color: "bg-red-500",
    title: "Apps downloads",
    description: "More apps for your wallet",
  },
];

const popularArticles: HelpArticleProps[] = [
  {
    title: "Taxes and Fees",
    category: "Taxes and Fees",
    description:
      "What is an NFT? What if you don't always want to save more than $1M in the same accounts. Unfortunately, it can happen by accident. If you confirm you qualify for but didn't receive any in the weekly drop.",
  },
  {
    title: "Helpdesk",
    category: "Helpdesk",
    description:
      "How to verify your identity on our marketplace. Don't worry about not trading. You will NFT 1M of the same amounts. Unfortunately, it can happen by accident.",
  },
  {
    title: "Marketplace",
    category: "Marketplace",
    description:
      "Keep your account safe by adding an extra layer. It's not about not trading. You will NFT always want to save more than $1M in the same amounts. Unfortunately, it can happen.",
  },
];

const relatedArticles: RelatedArticleProps[] = [
  {
    icon: "✉",
    iconBg: "bg-gray-100",
    title:
      "Waiting period for first payout on our fintech platform for marketplaces",
    date: "31 Dec 2021",
    tag: "Payments",
  },
  {
    icon: "⏰",
    iconBg: "bg-gray-100",
    title: "Strong Customer Authentication-related preparations for businesses",
    date: "04 Sep 2020",
    tag: "Account and settings",
  },
  {
    icon: "▣",
    iconBg: "bg-gray-100",
    title:
      "Security, permissions, and access levels when connecting your account",
    date: "1 Feb 2022",
    tag: "Payments",
  },
];

const topCommunityPosts = [
  {
    icon: "✉",
    iconBg: "bg-gray-100",
    title:
      "Waiting period for first payout on our fintech platform for marketplaces",
    date: "31 Dec 2021",
    tag: "Payments",
  },
  {
    icon: "⏰",
    iconBg: "bg-gray-100",
    title: "Strong Customer Authentication-related preparations for businesses",
    date: "04 Sep 2020",
    tag: "Account and settings",
  },
  {
    icon: "▣",
    iconBg: "bg-gray-100",
    title:
      "Security, permissions, and access levels when connecting your account",
    date: "1 Feb 2022",
    tag: "Payments",
  },
];

const searchResults: SearchResultProps[] = [
  {
    title:
      "Access levels when connecting your account to a third-party platform",
    excerpt:
      "It's better than an NFT 1M of the same amounts. Unfortunately, it can happen by accident. It can happen if you confirm you qualify for but didn't receive any in the weekly drop.",
  },
  {
    title: "Setting up your Xero account with Stripe",
    excerpt:
      "It's better than an NFT 1M of the same amounts. Unfortunately, it can happen by accident. It can happen if you confirm you qualify for but didn't receive any in the weekly drop.",
  },
  {
    title:
      "Integrate your Corporate Card with QuickBooks Online or QuickBooks Desktop",
    excerpt:
      "In our accounting platform, portals and having lessons when you provide, you can NFT 1M of the same amounts. Unfortunately, it can happen by accident.",
  },
];

export const SupportHome: React.FC<SupportHomeProps> = ({ view = "home" }) => {
  return (
    <div className="flex h-screen">
      <SupportSidebar />

      <div className="flex-1 flex flex-col overflow-hidden bg-[#f5efe6]">
        <SupportTopBar />

        <div className="flex-1 overflow-auto">
          {view === "home" && (
            <>
              <SupportHero />
              <div className="px-6 pb-4">
                {/* Products */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Products
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {products.map((p) => (
                      <ProductCategoryCard
                        key={`${p.title}-${p.description}`}
                        {...p}
                      />
                    ))}
                  </div>
                </div>

                {/* Popular help topics */}
                <div>
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Popular help topics
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {popularArticles.map((a) => (
                      <HelpArticleCard key={a.title} {...a} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {view === "categories" && (
            <>
              <Breadcrumb items={["Help Center", "Categories", "..."]} />
              <SupportHero />
              <div className="px-6 pb-4">
                {/* Product categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Product categories
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        letter: "G",
                        color: "bg-blue-500",
                        title: "Getting started with platform",
                        description: "Verify my account\nManage my details",
                        articles: 3,
                      },
                      {
                        letter: "M",
                        color: "bg-green-500",
                        title: "Managing my account",
                        description:
                          "Not have any NFT 1M\nAdd a payment method\nManage my details",
                        articles: 3,
                      },
                      {
                        letter: "T",
                        color: "bg-purple-500",
                        title: "Trading and funding",
                        description:
                          "Buying, selling or transferring crypto\nUnderstanding crypto compliance",
                        articles: 3,
                      },
                    ].map((cat) => (
                      <div
                        key={cat.title}
                        className="p-4 bg-white rounded-xl border border-black/10 cursor-pointer hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${cat.color}`}
                          >
                            {cat.letter}
                          </div>
                          <div>
                            <p className="font-semibold text-sm text-black">
                              {cat.title}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-1 mb-3">
                          {cat.description.split("\n").map((line) => (
                            <p key={line} className="text-xs text-gray-500">
                              {line}
                            </p>
                          ))}
                        </div>
                        <button className="text-xs text-purple-600 font-medium hover:underline">
                          See more articles
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top community posts */}
                <div>
                  <h3 className="text-sm font-semibold text-black mb-3">
                    Top community posts
                  </h3>
                  <div className="space-y-2">
                    {topCommunityPosts.map((post) => (
                      <RelatedArticleRow key={post.title} {...post} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {view === "article" && (
            <>
              <Breadcrumb items={["Help Center", "Account", "Funds reports"]} />
              <div className="px-6 pb-4 flex gap-6">
                {/* Main article content */}
                <div className="flex-1 min-w-0">
                  <h1
                    className="text-4xl font-bold text-black mb-6"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Getting started: funds reports
                  </h1>
                  <div className="p-5 border border-black/10 rounded-xl bg-white mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      There is no better advertisement campaign that is low cost
                      and also successful at the same time. Great business ideas
                      when utilized effectively can save lots of money. This is
                      not only easy for those who work full-time as an
                      advertiser.
                    </p>
                    <div className="border border-dashed border-black/20 rounded-lg p-4 mb-4">
                      <ol className="space-y-1">
                        {[
                          "Fliers and business cards can be tacked on such bulletin boards.",
                          "But before doing so, check out with the human resource department",
                          "Parents are required to be in regular touch with the teachers to know",
                          "Do not miss this opportunity and spread the word. Hand them the business card",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="text-sm font-medium text-black"
                          >
                            {i + 1}. {item}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                      Get involved with fundraiser at schools, as it&apos;s a
                      nice approach to market business. Prior to handing out the
                      order received, collect all necessary information like
                      business card pack, fliers, with proper information.
                      Information can be based on what is the company about,
                      what are the products and services provided, or how to get
                      information in touch with the company. In each individual
                      order, carefully place all of them and seal the package
                      properly.
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Note: Voice mails can be put to good use, other than
                      recording messages. They can help to deliver the marketing
                      message. Greet with a brief message, following with
                      website and email address.
                    </p>
                  </div>

                  {/* Related */}
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-3">
                      This also may help you
                    </h3>
                    <div className="space-y-2">
                      {relatedArticles.map((a) => (
                        <RelatedArticleRow key={a.title} {...a} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Article nav sidebar */}
                <ArticleSidebarNav />
              </div>
            </>
          )}

          {view === "search" && (
            <>
              <SupportHero
                searchPlaceholder="Search help articles"
                searchValue="Account"
              />
              <div className="px-6 pb-4">
                <p className="text-sm font-semibold text-black mb-3">
                  Search results
                </p>
                <div className="space-y-3 mb-6">
                  {searchResults.map((r) => (
                    <SearchResultRow key={r.title} {...r} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between py-4 text-sm text-gray-500">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-black/20 rounded-lg text-xs text-gray-600 hover:bg-black/5">
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
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-black/20 rounded-lg text-xs text-gray-600 hover:bg-black/5">
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
              </div>
            </>
          )}
        </div>

        <SupportFooter />
      </div>
    </div>
  );
};
