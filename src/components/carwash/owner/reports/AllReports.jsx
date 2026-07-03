"use client";

import Card from "@/components/carwash/common/Card";
import Chart from "@/components/carwash/common/Charts";

const annualRevenue = [
    { month: "Jan", value: 4.2 },
    { month: "Feb", value: 4.8 },
    { month: "Mar", value: 5.6 },
    { month: "Apr", value: 6.1 },
    { month: "May", value: 6.8 },
    { month: "Jun", value: 7.8 },
    { month: "Jul", value: 7.2 },
    { month: "Aug", value: 8.2 },
    { month: "Sep", value: 8.9 },
    { month: "Oct", value: 9.4 },
    { month: "Nov", value: 10.1 },
    { month: "Dec", value: 11.7 },
];

const bookingsForecast = [
    { day: "Mon", value: 42 },
    { day: "Tue", value: 51 },
    { day: "Wed", value: 39 },
    { day: "Thu", value: 58 },
    { day: "Fri", value: 71 },
    { day: "Sat", value: 86 },
    { day: "Sun", value: 64 },
];

const branches = [
    {
        name: "SlotSync HQ — Bandra",
        revenue: "₹8,42,000",
        width: "100%",
    },
    {
        name: "SlotSync Andheri West",
        revenue: "₹6,12,000",
        width: "72%",
    },
    {
        name: "SlotSync Powai Lakeside",
        revenue: "₹5,38,000",
        width: "63%",
    },
    {
        name: "SlotSync Thane Hiranandani",
        revenue: "₹4,21,000",
        width: "49%",
    },
];

const services = [
    {
        name: "Paint Protection Film (Full)",
        growth: "+18%",
        revenue: "₹12,94,993",
    },
    {
        name: "Ceramic Coating 9H",
        growth: "+22.1%",
        revenue: "₹9,49,962",
    },
    {
        name: "Graphene Coating",
        growth: "+31.5%",
        revenue: "₹7,34,979",
    },
    {
        name: "Synthetic Oil Change",
        growth: "+5.6%",
        revenue: "₹7,10,297",
    },
    {
        name: "Interior Deep Clean",
        growth: "+11.2%",
        revenue: "₹4,79,808",
    },
    {
        name: "Battery Diagnostics & Swap",
        growth: "+3.1%",
        revenue: "₹4,15,936",
    },
];

export default function ReportsContent() {
    return (
        <div className="space-y-6 px-2 py-3">
            {/* Top Charts */}

            <div className="grid grid-cols-2 gap-6">
                {/* Annual Revenue */}

                <Chart
                    type="area"
                    title="Annual Revenue (₹ Lakhs)"
                    data={annualRevenue}
                    stroke="#06B6C9"
                    gradientId="annualRevenue"
                    xDataKey="month"
                    yDomain={[0, 12]}
                    ticks={[0, 3, 6, 9, 12]}
                    height="290px"
                />

                {/* Booking Forecast */}

                <Chart
                    type="line"
                    title="Bookings Forecast (Next 7 Days)"
                    data={bookingsForecast}
                    stroke="#4F56E5"
                    xDataKey="day"
                    yDomain={[0, 100]}
                    ticks={[0, 25, 50, 75, 100]}
                    height="290px"
                />
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-2 gap-6">
                {/* Branch Comparison */}

                <Card padding="p-6">
                    <h2 className="mb-3 text-[18px] font-semibold text-[#182230]">
                        Branch Comparison
                    </h2>

                    <div className="space-y-2">
                        {branches.map((branch) => (
                            <div
                                key={branch.name}
                                className="grid grid-cols-[1.4fr_1fr_auto] items-center gap-4"
                            >
                                <p className="text-[14px] font-medium text-[#182230]">
                                    {branch.name}
                                </p>

                                <div className="h-3 rounded-full bg-[#EEF2F6]">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-[#4F56E5] to-[#06B6C9]"
                                        style={{ width: branch.width }}
                                    />
                                </div>

                                <p className="text-[14px] font-semibold text-[#182230]">
                                    {branch.revenue}
                                </p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Service Performance */}

                <Card padding="p-6">
                    <h2 className="mb-3 text-[18px] font-semibold text-[#182230]">
                        Service Performance
                    </h2>

                    <div className="space-y-2">
                        {services.map((service) => (
                            <div
                                key={service.name}
                                className="grid grid-cols-[1fr_80px_120px] items-center gap-4"
                            >
                                <p className="text-[14px] font-medium text-[#182230]">
                                    {service.name}
                                </p>

                                <p className="text-right text-[14px] font-semibold text-[#12B76A]">
                                    {service.growth}
                                </p>

                                <p className="text-right text-[14px] font-semibold text-[#182230]">
                                    {service.revenue}
                                </p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>

    );
}