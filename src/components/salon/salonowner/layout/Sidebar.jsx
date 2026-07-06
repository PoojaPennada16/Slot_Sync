"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, X } from "lucide-react";
import { SIDEBAR_MENU } from "./sidebarConfig";

export default function Sidebar({
  sidebarOpen = true,
  setSidebarOpen = () => {},
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[260px] bg-white z-50 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
              S
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-[#111827]">
                SlotSync
              </h2>

              <p className="text-[10px] tracking-[1px] text-gray-500">
                SALON ADMIN
              </p>
            </div>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu */}
        <div className="px-3 py-4">
          {SIDEBAR_MENU.map((section) => (
            <div
              key={section.title}
              className="mb-7"
            >
              <p className="text-[11px] tracking-[2px] text-gray-400 mb-2 px-2 font-semibold">
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  const active =
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/");

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`w-full flex items-center justify-between px-3 py-3 rounded-2xl transition-all duration-200 ${
                        active
                          ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md"
                          : "text-slate-600 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} />

                        <span className="text-[14px] font-medium">
                          {item.label}
                        </span>
                      </div>

                      {item.badge && (
                        <span className="w-6 h-6 rounded-full bg-[#F5B52E] text-white text-[11px] flex items-center justify-center font-semibold">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
                {/* User Card */}
        <div className="mt-auto p-3">
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-4">
            <p className="text-[11px] text-gray-500">
              Signed in as
            </p>

            <h4 className="mt-1 text-[13px] font-semibold text-[#111827]">
              owner@salon.app
            </h4>

            <p className="mt-1 text-[11px] font-medium text-indigo-600">
              SALON OWNER
            </p>

            <button
              type="button"
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-full border border-gray-200 py-2 text-[13px] font-medium hover:bg-white transition-all"
            >
              <LogOut size={15} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

