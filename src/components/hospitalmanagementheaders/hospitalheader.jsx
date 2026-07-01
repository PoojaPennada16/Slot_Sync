import { Bell } from "lucide-react";

export default function Header() {
  return (
    <div className="w-full h-16 bg-white flex items-center justify-between px-6 py-5">
      
      {/* Left Title */}
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Hospital Admin</h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        
        {/* Notification */}
        <div className="relative">
          <Bell className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            1
          </span>
        </div>

        {/* Profile */}
        <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center">
          A
        </div>
      </div>
    </div>
  );
}