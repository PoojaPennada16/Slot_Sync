import PortalCard from "../common/card";
import {
  Calendar,
  Users,
  Stethoscope,
  Wallet,
  XCircle,
  RefreshCcw,
} from "lucide-react";

export default function DashboardCards() {
  const cards = [
    {
      id: "appointments",
      title: "Total Appointments",
      value: "2,100",
      icon: <Calendar className="w-5 h-5 text-indigo-600" />,
      iconBg: "bg-indigo-50",
      change: "+8%",
    },
    {
      id: "patients",
      title: "Today's Patients",
      value: "10",
      icon: <Users className="w-5 h-5 text-cyan-500" />,
      iconBg: "bg-cyan-50",
      change: "+5%",
    },
    {
      id: "doctors",
      title: "Active Doctors",
      value: "26",
      icon: <Stethoscope className="w-5 h-5 text-green-500" />,
      iconBg: "bg-green-50",
      change: "+2%",
    },
    {
      id: "revenue",
      title: "Monthly Revenue",
      value: "₹2,40,400",
      icon: <Wallet className="w-5 h-5 text-orange-500" />,
      iconBg: "bg-orange-50",
      change: "+12%",
    },
    {
      id: "cancellation",
      title: "Cancellation Rate",
      value: "13%",
      icon: <XCircle className="w-5 h-5 text-red-500" />,
      iconBg: "bg-red-50",
      change: "-3%",
    },
    {
      id: "followups",
      title: "Follow-up Rate",
      value: "13%",
      icon: <RefreshCcw className="w-5 h-5 text-yellow-500" />,
      iconBg: "bg-yellow-50",
      change: "+4%",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.map((item) => {
        const isPositive = item.change.startsWith("+");

        return (
          <PortalCard
            key={item.id}
            href={`/dashboard/${item.id}`}
            badgeText={item.title}
            badgeColor="bg-slate-100 text-slate-700"
            title={item.value}
            description={
              <div className="mt-1">
                <span
                  className={`text-sm font-semibold ${
                    isPositive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {item.change}
                </span>

                <span className="text-xs text-gray-400 ml-1">
                  vs last period
                </span>
              </div>
            }
            icon={item.icon}
            iconBg={item.iconBg}
          />
        );
      })}
    </div>
  );
}