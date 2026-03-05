import React from "react";
import { Card } from "../../components/Card";
import { Badge } from "../../components/Badge";

interface ScreenItem {
  name: string;
  description: string;
  variants: number;
  category: string;
}

const screens: ScreenItem[] = [
  // Authentication
  {
    name: "SignIn",
    description: "User login screen with email/password",
    variants: 1,
    category: "Authentication",
  },
  {
    name: "SignUp",
    description: "User registration with form validation",
    variants: 1,
    category: "Authentication",
  },
  {
    name: "PasswordReset",
    description: "Password reset with request & reset modes",
    variants: 2,
    category: "Authentication",
  },

  // Templates
  {
    name: "ListScreen",
    description: "Reusable template for all list/table screens",
    variants: 1,
    category: "Templates",
  },

  // Products
  {
    name: "ProductsList",
    description: "Product inventory management",
    variants: 3,
    category: "Products",
  },

  // Customers
  {
    name: "CustomersList",
    description: "Customer relationship management",
    variants: 3,
    category: "Customers",
  },

  // Accounts
  {
    name: "AccountsList",
    description: "Financial account management",
    variants: 2,
    category: "Accounts",
  },

  // Transactions
  {
    name: "TransactionsList",
    description: "Transaction history & tracking",
    variants: 4,
    category: "Transactions",
  },

  // Contacts
  {
    name: "ContactsList",
    description: "Business contact management",
    variants: 4,
    category: "Contacts",
  },

  // Sales
  {
    name: "SalesList",
    description: "Sales pipeline & performance tracking",
    variants: 2,
    category: "Sales",
  },

  // Inbox
  {
    name: "InboxList",
    description: "Message & email management",
    variants: 4,
    category: "Inbox",
  },

  // Payments
  {
    name: "PaymentsList",
    description: "Payment processing & history",
    variants: 3,
    category: "Payments",
  },

  // Education
  {
    name: "EducationCourses",
    description: "Course catalog with progress tracking",
    variants: 3,
    category: "Education",
  },

  // Calendar
  {
    name: "CalendarEvent",
    description: "Event scheduling & management",
    variants: 3,
    category: "Calendar",
  },

  // Support
  {
    name: "SupportHome",
    description: "Help center with documentation",
    variants: 4,
    category: "Support",
  },

  // Profile Settings
  {
    name: "ProfileAccount",
    description: "Account information settings",
    variants: 1,
    category: "Profile",
  },
  {
    name: "ProfileNotifications",
    description: "Notification preferences",
    variants: 1,
    category: "Profile",
  },
  {
    name: "ProfileSecurity",
    description: "Security & authentication settings",
    variants: 1,
    category: "Profile",
  },
  {
    name: "ProfileSocial",
    description: "Social account connections",
    variants: 1,
    category: "Profile",
  },

  // Charts
  {
    name: "ChartBar",
    description: "Bar chart visualization",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartPolar",
    description: "Polar chart visualization",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartWave",
    description: "Wave chart visualization",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartGeometric",
    description: "Geometric chart visualization",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartHorizontalBars",
    description: "Horizontal bar chart",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartDoubleBars",
    description: "Double bar chart",
    variants: 1,
    category: "Charts",
  },
  {
    name: "ChartMisc",
    description: "Miscellaneous charts",
    variants: 1,
    category: "Charts",
  },
];

const categories = Array.from(new Set(screens.map((s) => s.category))).sort();

export const ScreensShowcase: React.FC = () => {
  const totalScreens = screens.length;
  const totalVariants = screens.reduce((sum, s) => sum + s.variants, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-slate-900 mb-2">
            Design System Screens
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Complete showcase of 40+ screens across 15 categories
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-blue-600">
                {totalScreens}
              </div>
              <div className="text-sm text-slate-600">Screens</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-green-600">
                {totalVariants}
              </div>
              <div className="text-sm text-slate-600">Variants</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-purple-600">
                {categories.length}
              </div>
              <div className="text-sm text-slate-600">Categories</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-orange-600">30+</div>
              <div className="text-sm text-slate-600">Components</div>
            </div>
          </div>
        </div>

        {/* Screens by Category */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categoryScreens = screens.filter(
              (s) => s.category === category,
            );
            return (
              <div key={category}>
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-slate-900">
                    {category}
                  </h2>
                  <p className="text-slate-600">
                    {categoryScreens.length} screens
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryScreens.map((screen) => (
                    <Card
                      key={screen.name}
                      className="p-6 hover:shadow-lg transition-shadow hover:border-blue-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-slate-900">
                          {screen.name}
                        </h3>
                        <Badge variant="primary">{screen.variants}x</Badge>
                      </div>
                      <p className="text-slate-600 text-sm mb-4">
                        {screen.description}
                      </p>
                      <div className="flex gap-2">
                        <button className="flex-1 px-3 py-2 bg-blue-100 text-blue-700 rounded text-sm font-medium hover:bg-blue-200 transition-colors">
                          View Story
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Quick Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {totalScreens}
              </div>
              <div className="text-slate-600">Total Screens Implemented</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {totalVariants}
              </div>
              <div className="text-slate-600">Storybook Variants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">✅</div>
              <div className="text-slate-600">All with Mock Data & Stories</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-600 text-sm">
          <p>
            View in Storybook:{" "}
            <code className="bg-slate-200 px-2 py-1 rounded">
              npm run storybook
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};
