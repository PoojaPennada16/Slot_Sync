import StatsCardsGrid from "@/components/carwash/owner/dashboard/StatsCardsGrid";
import QuickStatsRow from "@/components/carwash/owner/dashboard/QuickStatsRow";
import RevenueChartCard from "@/components/carwash/owner/dashboard/RevenueChartCard";
import InServiceNowCard from "@/components/carwash/owner/dashboard/InServiceNowCard";
import BranchPerformanceTable from "@/components/carwash/owner/dashboard/BranchPerformanceTable";

export default function OwnerDashboardPage() {
  return (
    <div className="space-y-5">
      {/* Keep heading only here */}
      <div className="ml-1">
        <h1 className="text-3xl leading-none font-bold bg-gradient-to-r from-[#5563f0] to-[#2aa8df] bg-clip-text text-transparent">
          Executive Dashboard
        </h1>
        <p className="mt-2 text-base text-[#667085]">
          Live revenue, bay utilization, queue and growth.
        </p>
        
      </div>

      <StatsCardsGrid />

      <QuickStatsRow />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 xl:col-span-7">
          <RevenueChartCard />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <InServiceNowCard />
        </div>
      </div>

      <BranchPerformanceTable />
    </div>
  );
}