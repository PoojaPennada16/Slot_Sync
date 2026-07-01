import DashboardCards from "@/components/hospitaldashboard/dashboardcards";
import DashboardAnalytics from "@/components/hospitaldashboard/dashboardanalytics";

export default function App() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-full">

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 space-y-6">

        {/* Header */}
        <div className="mb-2">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Real-time practice performance metrics and growth trends.
          </p>
        </div>

        {/* KPI Cards */}
        <section>
          <DashboardCards />
        </section>

        {/* Analytics */}
        <section>
          <DashboardAnalytics />
        </section>

      </div>
    </div>
  );
}