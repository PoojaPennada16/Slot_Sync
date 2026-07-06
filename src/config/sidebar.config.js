import {
  LayoutGrid,
  Building2,
  Wrench,
  Car,
  Users,
  Hammer,
  Calendar,
  CalendarCog,
  Tag,
  ClipboardCheck,
  Boxes,
  Receipt,
  Briefcase,
  BarChart3,
  Settings,
} from "lucide-react";

export const SIDEBAR_CONFIG = {
  OWNER: {
    title: "Executive",
    profileRole: "Super Admin",
    items: [
      { label: "Executive", href: "/carwash/owner/dashboard", icon: LayoutGrid },
      { label: "Branches", href: "/carwash/owner/branches", icon: Building2 },
      { label: "Services", href: "/carwash/owner/services", icon: Wrench },
      { label: "Vehicles", href: "/carwash/owner/vehicles", icon: Car },
      { label: "Customers", href: "/carwash/owner/customers", icon: Users },
      { label: "Technicians", href: "/carwash/owner/technicians", icon: Hammer },
      { label: "Bookings", href: "/carwash/owner/bookings", icon: Calendar },
      { label: "Slot Mgmt",href: "/carwash/owner/slot-mgmt", icon: CalendarCog,},
      { label: "Marketing", href: "/carwash/owner/marketing", icon: Tag },
      { label: "Reports", href: "/carwash/owner/reports", icon: BarChart3 },
      { label: "Settings", href: "/carwash/owner/settings", icon: Settings },
    ],
  },

  MANAGER: {
    title: "Operations",
    profileRole: "Branch Manager",
    items: [
      { label: "Operations", href: "/carwash/manager/dashboard", icon: LayoutGrid },
      { label: "Bookings", href: "/carwash/manager/bookings", icon: Calendar },
      { label: "Inspections", href: "/carwash/manager/inspections", icon: ClipboardCheck },
      { label: "Bay Floor", href: "/carwash/manager/bay-floor", icon: Boxes },
      { label: "Slot Mgmt", href: "/carwash/manager/slot-management", icon: Calendar },
      { label: "Technicians", href: "/carwash/manager/technicians", icon: Hammer },
      { label: "Vehicles", href: "/carwash/manager/vehicles", icon: Car },
      { label: "Customers", href: "/carwash/manager/customers", icon: Users },
      { label: "Coupons", href: "/carwash/manager/coupons", icon: Tag },
      { label: "Invoices", href: "/carwash/manager/invoices", icon: Receipt },
    ],
  },

  TECHNICIAN: {
    title: "Technician",
    profileRole: "Technician",
    items: [
      { label: "My Day", href: "/carwash/technician/dashboard", icon: LayoutGrid },
      { label: "My Jobs", href: "/carwash/technician/jobs", icon: Briefcase },
      { label: "Inspections", href: "/carwash/technician/inspections", icon: ClipboardCheck },
      { label: "Bays", href: "/carwash/technician/bays", icon: Boxes },
    ],
  },
};