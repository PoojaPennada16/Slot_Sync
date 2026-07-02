"use client";

export default function InServiceNowCard() {
  const items = [
    {
      regNo: "MH 02 AB 1234",
      service: "Ceramic Coating 9H",
      technician: "Arjun Kapoor",
      status: "In Service",
      statusBg: "bg-[#e6e3ff]",
      statusText: "text-[#5b5ce9]",
    },
    {
      regNo: "MH 01 XY 7766",
      service: "AC Service & Gas Top-Up",
      technician: "Vikram Singh",
      status: "Quality Check",
      statusBg: "bg-[#f5ddff]",
      statusText: "text-[#1f2937]",
    },
    {
      regNo: "MH 12 CD 4521",
      service: "PPF Full Body",
      technician: "Maya Pillai",
      status: "In Service",
      statusBg: "bg-[#e6e3ff]",
      statusText: "text-[#5b5ce9]",
    },
    {
      regNo: "MH 02 PQ 3344",
      service: "Wheel Alignment & Balancing",
      technician: "Imran Sayed",
      status: "In Service",
      statusBg: "bg-[#e6e3ff]",
      statusText: "text-[#5b5ce9]",
    },
  ];

  return (
    <div className="rounded-[38px] bg-[#f6fffe] border border-white/70 shadow-[0_10px_40px_rgba(130,130,170,0.08)] shadow-md  px-4 pt-7 pb-6 h-full">
      <h2 className="text-[18px] font-bold text-[#0f172a]">In-service now</h2>

      <div className="mt-3 space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-xl bg-[#f4f7fb] px-3 py-2"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-[12px] leading-none font-bold text-[#111827]">
                  {item.regNo}
                </h3>
                <p className="mt-2 text-[11px] leading-[1.35] text-[#667085]">
                  {item.service} · {item.technician}
                </p>
              </div>

              <div
                className={`shrink-0 rounded-full px-4 py-1 text-[10px] font-semibold ${item.statusBg} ${item.statusText}`}
              >
                {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}