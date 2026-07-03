import AllReports from "@/components/carwash/owner/reports/AllReports";

export default function ReportsPage() {
    return (
        <div className="space-y-5">
            {/* Keep heading only here */}
            <div className="ml-1">
                <h1 className="text-3xl leading-none font-bold bg-gradient-to-r from-[#5563f0] to-[#2aa8df] bg-clip-text text-transparent">
                    Reports & Forecasts
                </h1>
                <p className="mt-2 text-base text-[#667085]">
                    Revenue, growth, branch comparison and service-level analytics.
                </p>

            </div>
            <AllReports />
        </div>
    );
}