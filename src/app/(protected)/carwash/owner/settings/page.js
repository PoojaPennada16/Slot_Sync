import AllSettings from "@/components/carwash/owner/settings/AllSettings";

export default function SettingsPage() {
    return (
        <div className="space-y-5">
            {/* Keep heading only here */}
            <div className="ml-1">
                <h1 className="text-3xl leading-none font-bold bg-gradient-to-r from-[#5563f0] to-[#2aa8df] bg-clip-text text-transparent">
                    Settings
                </h1>
                <p className="mt-2 text-base text-[#667085]">
                    Business profile, tax rules, permissions and notification preferences.
                </p>

            </div>
            <AllSettings />
        </div>
    );
}