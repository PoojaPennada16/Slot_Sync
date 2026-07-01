"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarPlus,
  UserPlus,
  ListOrdered,
  LogIn,
  RefreshCcw,
  Stethoscope,
  ClipboardList,
  FlaskConical,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const menuSections = [
  {
    label: "Overview",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, href: "/Reception/dashboard" },
    ],
  },
  {
    label: "Patients",
    items: [
      { name: "Book Appointment", icon: CalendarPlus, href: "/Reception/bookappointment" },
      { name: "Walk-in Registration", icon: UserPlus, href: "/Reception/walkin" },
      { name: "Patient Check-in", icon: LogIn, href: "/Reception/checkin" },
      { name: "Queue Management", icon: ListOrdered, href: "/Reception/queue" },
    ],
  },
  {
    label: "Coordination",
    items: [
      { name: "Doctor Availability", icon: Stethoscope, href: "/Reception/doctoravailability" },
      { name: "Follow-up Center", icon: RefreshCcw, href: "/Reception/followups" },
      { name: "Prescription Handoff", icon: ClipboardList, href: "/Reception/prescriptions" },
      { name: "Lab & Diagnostics", icon: FlaskConical, href: "/Reception/lab" },
      {
        name: "Notifications",
        icon: Bell,
        href: "/Reception/notifications",
        badge: 3,
      },
    ],
  },
];

export default function ReceptionSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-white border-r border-slate-100 flex flex-col sticky top-0">
      {/* Header */}
      <Link href="/home">
        <div className="flex items-center gap-3 px-5 py-5 border-b border-slate-100">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
            M
          </div>
          <div className="min-w-0">
            <h2 className="text-sm font-bold text-slate-900 truncate">
              Reception
            </h2>
            <p className="text-xs text-slate-400 truncate">Front Desk</p>
          </div>
        </div>
      </Link>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto hide-scrollbar">
        {menuSections.map((section) => (
          <div key={section.label} className="mb-5">
            <p className="px-3 mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors duration-150
                      ${
                        active
                          ? "bg-indigo-50 text-indigo-700 font-semibold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                      }`}
                  >
                    <Icon
                      size={18}
                      className={`shrink-0 ${
                        active ? "text-indigo-600" : "text-slate-400"
                      }`}
                    />
                    <span className="truncate flex-1">{item.name}</span>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer / profile */}
      <Link href="/Reception/settings">
        <div className="flex items-center gap-3 px-5 py-4 border-t border-slate-100 hover:bg-slate-50 transition-colors">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
            <Settings size={16} className="text-slate-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-slate-900 truncate">
              Front Desk
            </p>
            <p className="text-xs text-slate-400 truncate">Settings</p>
          </div>
          <LogOut size={16} className="text-slate-300 shrink-0" />
        </div>
      </Link>
    </aside>
  );
}