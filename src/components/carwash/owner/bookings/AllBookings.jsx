"use client";

const columns = [
    {
        title: "Confirmed",
        jobs: [
            {
                id: "JC-2406-0198",
                time: "14:00",
                service: "Interior Deep Clean",
                customer: "Anaya Kapadia",
                vehicle: "MH 14 BN 2211",
                technician: "Tara D'Souza",
                amount: "₹2,499",
            },
            {
                id: "JC-2406-0199",
                time: "16:30",
                service: "Synthetic Oil Change",
                customer: "Aryan Malhotra",
                vehicle: "MH 04 KL 9981",
                technician: "Unassigned",
                amount: "₹3,499",
            },
        ],
    },
    {
        title: "Checked-In",
        jobs: [
            {
                id: "JC-2406-0200",
                time: "10:00",
                service: "Express Car Wash",
                customer: "Rahul Sharma",
                vehicle: "MH 01 AA 1234",
                technician: "Vikram Singh",
                amount: "₹699",
            },
            {
                id: "JC-2406-0204",
                time: "11:15",
                service: "Wheel Balancing",
                customer: "Priya Shah",
                vehicle: "MH 02 JJ 9021",
                technician: "Sanjay More",
                amount: "₹1,199",
            },
        ],
    },
    {
        title: "Inspecting",
        jobs: [
            {
                id: "JC-2406-0201",
                time: "10:45",
                service: "Battery Health Check",
                customer: "Sneha Iyer",
                vehicle: "MH 12 RT 2345",
                technician: "Rahul Patil",
                amount: "₹899",
            },
            {
                id: "JC-2406-0205",
                time: "12:00",
                service: "Engine Diagnostics",
                customer: "Ritesh Kumar",
                vehicle: "MH 04 PP 3321",
                technician: "Harsh Vyas",
                amount: "₹1,499",
            },
        ],
    },
    {
        title: "Awaiting Approval",
        jobs: [
            {
                id: "JC-2406-0195",
                time: "11:45",
                service: "Vehicle Inspection (60-pt)",
                customer: "Ishita Nair",
                vehicle: "MH 47 GH 1122",
                technician: "Tara D'Souza",
                amount: "₹799",
            },
            {
                id: "JC-2406-0206",
                time: "01:15",
                service: "Brake Inspection",
                customer: "Deepak Jain",
                vehicle: "MH 10 KK 5612",
                technician: "Rahul Patil",
                amount: "₹999",
            },
        ],
    },
    {
        title: "Awaiting Bay",
        jobs: [
            {
                id: "JC-2406-0197",
                time: "12:30",
                service: "Premium Foam Wash",
                customer: "Rohan Desai",
                vehicle: "MH 02 RT 9090",
                technician: "Devansh Rao",
                amount: "₹899",
            },
            {
                id: "JC-2406-0207",
                time: "02:00",
                service: "Tyre Rotation",
                customer: "Siddharth Rao",
                vehicle: "MH 48 AS 6641",
                technician: "Harish Kumar",
                amount: "₹699",
            },
        ],
    },
    {
        title: "In Service",
        jobs: [
            {
                id: "JC-2406-0192",
                time: "09:30",
                service: "Ceramic Coating 9H",
                customer: "Aryan Malhotra",
                vehicle: "MH 02 AB 1234",
                technician: "Arjun Kapoor",
                amount: "₹24,999",
            },
            {
                id: "JC-2406-0194",
                time: "08:00",
                service: "PPF Full Body",
                customer: "Karan Verma",
                vehicle: "MH 12 CD 4521",
                technician: "Maya Pillai",
                amount: "₹1,84,999",
            },
            {
                id: "JC-2406-0196",
                time: "11:00",
                service: "Wheel Alignment & Balancing",
                customer: "Karan Verma",
                vehicle: "MH 02 PQ 3344",
                technician: "Imran Sayed",
                amount: "₹1,299",
            },
        ],
    },
    {
        title: "Quality Check",
        jobs: [
            {
                id: "JC-2406-0193",
                time: "10:15",
                service: "AC Service & Gas Top-Up",
                customer: "Riya Bhandari",
                vehicle: "MH 01 XY 7766",
                technician: "Vikram Singh",
                amount: "₹1,899",
            },
            {
                id: "JC-2406-0208",
                time: "03:30",
                service: "Interior Vacuum",
                customer: "Ashwin Nair",
                vehicle: "MH 05 YT 8822",
                technician: "Devansh Rao",
                amount: "₹599",
            },
        ],
    },
    {
        title: "Completed",
        jobs: [
            {
                id: "JC-2406-0202",
                time: "03:45",
                service: "Engine Oil Service",
                customer: "Aakash Mehta",
                vehicle: "MH 14 AZ 5512",
                technician: "Harish Kumar",
                amount: "₹2,999",
            },
            {
                id: "JC-2406-0209",
                time: "04:30",
                service: "Car Wash",
                customer: "Rohan Kulkarni",
                vehicle: "MH 20 AA 4500",
                technician: "Vikram Singh",
                amount: "₹499",
            },
        ],
    },
    {
        title: "Delivered",
        jobs: [
            {
                id: "JC-2406-0203",
                time: "05:30",
                service: "Full Car Detailing",
                customer: "Neha Sharma",
                vehicle: "MH 03 TT 4455",
                technician: "Rahul Naik",
                amount: "₹5,999",
            },
            {
                id: "JC-2406-0210",
                time: "06:15",
                service: "Paint Protection",
                customer: "Kishore Reddy",
                vehicle: "MH 11 EE 7744",
                technician: "Arjun Kapoor",
                amount: "₹9,999",
            },
        ],
    },
];

export default function AllBookings() {
    return (
        <div className="overflow-x-auto rounded-[18px] p-1">
            <div className="flex gap-3 pb-3 min-w-max">
                {columns.map((column) => (
                    <div
                        key={column.title}
                        className="w-[260px] min-h-full rounded-[22px] bg-white/80 p-4 shadow-md backdrop-blur"
                    >
                        <div className="mb-3 flex items-center justify-between">
                            <h3 className="text-[11px] font-bold text-[#1d2433]">
                                {column.title}
                            </h3>

                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#edf2ff] text-[11px] font-semibold text-[#1d2433]">
                                {column.jobs.length}
                            </div>
                        </div>

                        <div className="space-y-4">
                            {column.jobs.length === 0 ? (
                                <div className="flex h-[480px] items-start justify-center pt-8">
                                    <span className="text-[14px] italic text-[#667085]">empty</span>
                                </div>
                            ) : (
                                column.jobs.map((job) => (
                                    <div
                                        key={job.id}
                                        className="rounded-[18px] border border-[#edf0f5] bg-white p-3 shadow-xs transition-all hover:shadow-md"
                                    >
                                        <div className="mb-1 flex items-start justify-between">
                                            <span className="text-[11px] text-[#667085]">
                                                {job.id}
                                            </span>

                                            <span className="text-[11px] font-bold text-[#1d2433]">
                                                {job.time}
                                            </span>
                                        </div>

                                        <h4 className="mb-1 text-[14px] font-bold leading-4 text-[#1d2433]">
                                            {job.service}
                                        </h4>

                                        <p className="mb-1 text-[12px] text-[#667085]">
                                            {job.customer} • {job.vehicle}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-[12px] text-[#667085]">
                                                {job.technician}
                                            </span>

                                            <span className="text-[13px] font-bold text-[#3f6ee8]">
                                                {job.amount}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}