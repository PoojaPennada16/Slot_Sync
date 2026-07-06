import {
  LayoutDashboard,
  User,
  Calendar,
  ClipboardList,
  Clock3,
  Building2,
  Scissors,
  Sparkles,
  Users,
  PlaneTakeoff,
  BarChart3,
  Star,
  Megaphone,
  Bell,
  FileText,
  Settings,
} from "lucide-react";

const BASE = "/salon/salonowner";

export const SIDEBAR_MENU = [
  {
    title: "OVERVIEW",
    items: [
      {
        label: "Dashboard",
        href: `${BASE}/dashboard`,
        icon: LayoutDashboard,
      },
      {
        label: "Salon Profile",
        href: `${BASE}/salonprofile`,
        icon: User,
      },
    ],
  },

  {
    title: "OPERATIONS",
    items: [
      {
        label: "Quick Book",
        href: `${BASE}/quickbook`,
        icon: Calendar,
      },
      {
        label: "Bookings",
        href: `${BASE}/bookings`,
        icon: ClipboardList,
      },
      {
        label: "Pending Approvals",
        href: `${BASE}/pending-approvals`,
        icon: ClipboardList,
      },
      {
        label: "Slot Management",
        href: `${BASE}/slotmanagement`,
        icon: Clock3,
      },
      {
        label: "Leave Management",
        href: `${BASE}/leaves`,
        icon: PlaneTakeoff,
      },
    ],
  },

  {
    title: "NETWORK",
    items: [
      {
        label: "Branches",
        href: `${BASE}/branches`,
        icon: Building2,
      },
      {
        label: "Barbers",
        href: `${BASE}/barbers`,
        icon: Scissors,
      },
      {
        label: "Services",
        href: `${BASE}/services`,
        icon: Sparkles,
      },
      {
        label: "Customers",
        href: `${BASE}/customers`,
        icon: Users,
      },
    ],
  },

  {
    title: "INSIGHTS",
    items: [
      {
        label: "Analytics",
        href: `${BASE}/analytics`,
        icon: BarChart3,
      },
      {
        label: "Reviews",
        href: `${BASE}/reviews`,
        icon: Star,
      },
      {
        label: "Marketing",
        href: `${BASE}/marketing`,
        icon: Megaphone,
      },
    ],
  },

  {
    title: "SYSTEM",
    items: [
      {
        label: "Notifications",
        href: `${BASE}/notifications`,
        icon: Bell,
      },
      {
        label: "Audit Logs",
        href: `${BASE}/audit-logs`,
        icon: FileText,
      },
      {
        label: "Settings",
        href: `${BASE}/settings`,
        icon: Settings,
      },
    ],
  },
];

export default SIDEBAR_MENU;