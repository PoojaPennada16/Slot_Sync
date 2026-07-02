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
  const stats = [
    {
      label: "Total Appointments",
      value: "2,100",
      icon: <Calendar className="w-5 h-5 text-indigo-600" />,
      iconBg: "bg-indigo-50",
      change: "+8%",
    },
    {
      label: "Today's Patients",
      value: "10",
      icon: <Users className="w-5 h-5 text-cyan-500" />,
      iconBg: "bg-cyan-50",
      change: "+5%",
    },
    {
      label: "Active Doctors",
      value: "26",
      icon: <Stethoscope className="w-5 h-5 text-green-500" />,
      iconBg: "bg-green-50",
      change: "+2%",
    },
    {
      label: "Monthly Revenue",
      value: "₹2,40,400",
      icon: <Wallet className="w-5 h-5 text-orange-500" />,
      iconBg: "bg-orange-50",
      change: "+12%",
    },
    {
      label: "Cancellation Rate",
      value: "13%",
      icon: <XCircle className="w-5 h-5 text-red-500" />,
      iconBg: "bg-red-50",
      change: "-3%",
    },
    {
      label: "Follow-up Rate",
      value: "13%",
      icon: <RefreshCcw className="w-5 h-5 text-yellow-500" />,
      iconBg: "bg-yellow-50",
      change: "+4%",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((item) => (
        <PortalCard
          key={item.label}
          variant="stat"
          label={item.label}
          value={item.value}
          icon={item.icon}
          iconBg={item.iconBg}
          change={item.change} // if your PortalCard supports it
        />
      ))}
    </div>
  );
}