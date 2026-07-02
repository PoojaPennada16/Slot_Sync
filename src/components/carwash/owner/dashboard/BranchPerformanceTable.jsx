"use client";

export default function BranchPerformanceTable() {
  const rows = [
    {
      branch: "SlotSync HQ — Bandra",
      status: "Approved",
      statusBg: "bg-[#cfeee0]",
      statusText: "text-[#20c26b]",
      revenue: "₹8,42,000",
      bookings: 312,
      bays: 2,
      util: "100%",
    },
    {
      branch: "SlotSync Andheri West",
      status: "Approved",
      statusBg: "bg-[#cfeee0]",
      statusText: "text-[#20c26b]",
      revenue: "₹6,12,000",
      bookings: 248,
      bays: 2,
      util: "0%",
    },
    {
      branch: "SlotSync Powai Lakeside",
      status: "Approved",
      statusBg: "bg-[#cfeee0]",
      statusText: "text-[#20c26b]",
      revenue: "₹5,38,000",
      bookings: 201,
      bays: 2,
      util: "100%",
    },
    {
      branch: "SlotSync Thane Hiranandani",
      status: "Pending Approval",
      statusBg: "bg-[#f6e2b6]",
      statusText: "text-[#1f2937]",
      revenue: "₹4,21,000",
      bookings: 176,
      bays: 2,
      util: "100%",
    },
  ];

  return (
    <div className="rounded-3xl bg-[#f6fffe] border border-white/70 shadow-[0_10px_40px_rgba(130,130,170,0.08)] shadow-md px-6 py-4">
      <h2 className="text-[18px] font-bold text-[#0f172a]">
        Branch performance
      </h2>

      <div className="mt-1 overflow-x-auto">
        <table className="w-full min-w-[100px] border-collapse table-fixed">
          <thead>
            <tr className="border-b border-[#e5e7eb]">
              <th className="w-[30%] text-left text-[12px] font-semibold text-[#667085] pb-2">
                BRANCH
              </th>
              <th className="w-[22%] text-left text-[12px] font-semibold text-[#667085] pb-2">
                STATUS
              </th>
              <th className="w-[16%] text-right text-[12px] font-semibold text-[#667085] pb-2">
                REVENUE
              </th>
              <th className="w-[12%] text-right text-[12px] font-semibold text-[#667085] pb-2">
                BOOKINGS
              </th>
              <th className="w-[8%] text-right text-[12px] font-semibold text-[#667085] pb-2">
                BAYS
              </th>
              <th className="w-[12%] text-right text-[12px] font-semibold text-[#667085] pb-2">
                UTIL
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={index !== rows.length - 1 ? "border-b border-[#eef2f7]" : ""}
              >
                <td className="py-1 text-[13px] font-semibold text-[#111827]">
                  {row.branch}
                </td>

                <td className="py-1">
                  <span
                    className={`inline-flex rounded-full px-2 py-1 text-[11px] font-semibold ${row.statusBg} ${row.statusText}`}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="py-1 text-right text-[11px] font-bold text-[#111827]">
                  {row.revenue}
                </td>

                <td className="py-1 text-right text-[11px] text-[#111827]">
                  {row.bookings}
                </td>

                <td className="py-1 text-right text-[11px] text-[#111827]">
                  {row.bays}
                </td>

                <td className="py-1 text-right text-[11px] font-semibold text-[#111827]">
                  {row.util}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}