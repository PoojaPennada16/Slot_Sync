import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="w-3 h-3 rounded-full " />

        <h1 className="text-xl font-bold text-slate-900">
          Doctor Portal
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="h-8 w-8 text-slate-800" />

          <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-semibold">
            1
          </span>
        </button>
      </div>
    </header>
  );
}