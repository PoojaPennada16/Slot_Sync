"use client";

export default function AllBookings() {
  const columns = [
    {
      title: "PENDING",
      count: 6,
      bookings: [
        {
          name: "Aditya Joshi",
          service: "Bridal Grooming",
          date: "2026-06-24",
          time: "18:15",
          amount: "₹1234",
        },
        {
          name: "Diya Patel",
          service: "Classic Haircut",
          date: "2026-05-26",
          time: "12:15",
          amount: "₹805",
        },
        {
          name: "Rohan Verma",
          service: "Classic Haircut",
          date: "2026-06-08",
          time: "11:15",
          amount: "₹851",
        },
        {
          name: "Reyansh Reddy",
          service: "Shave Royale",
          date: "2026-06-03",
          time: "14:30",
          amount: "₹620",
        },
      ],
    },
    {
      title: "CONFIRMED",
      count: 6,
      bookings: [
        {
          name: "Priya Reddy",
          service: "Bridal Grooming",
          date: "2026-07-02",
          time: "16:15",
          amount: "₹1289",
        },
        {
          name: "Ayaan Khan",
          service: "Hair Spa",
          date: "2026-07-02",
          time: "15:30",
          amount: "₹1412",
        },
        {
          name: "Rohan Kapoor",
          service: "Scalp Therapy",
          date: "2026-05-26",
          time: "19:30",
          amount: "₹2944",
        },
      ],
    },
    {
      title: "IN-SERVICE",
      count: 0,
      bookings: [],
    },
    {
      title: "COMPLETED",
      count: 6,
      bookings: [
        {
          name: "Saanvi Mehta",
          service: "Head Massage",
          date: "2026-05-27",
          time: "19:30",
          amount: "₹1264",
        },
        {
          name: "Aarav Khan",
          service: "Premium Facial",
          date: "2026-05-30",
          time: "19:45",
          amount: "₹337",
        },
        {
          name: "Anika Reddy",
          service: "Hair Styling",
          date: "2026-06-24",
          time: "17:15",
          amount: "₹1696",
        },
      ],
    },
    {
      title: "CANCELLED",
      count: 6,
      bookings: [
        {
          name: "Vihaan Mehta",
          service: "Classic Haircut",
          date: "2026-06-02",
          time: "09:45",
          amount: "₹881",
        },
        {
          name: "Meera Singh",
          service: "Scalp Therapy",
          date: "2026-06-19",
          time: "13:00",
          amount: "₹2974",
        },
        {
          name: "Saanvi Verma",
          service: "Hair Spa",
          date: "2026-06-09",
          time: "16:30",
          amount: "₹1440",
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[32px] font-bold text-slate-900">
          Bookings
        </h1>

        <p className="text-[14px] text-slate-500 mt-1">
          80 bookings tracked
        </p>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        {columns.map((column, index) => (
          <div
            key={index}
            className="bg-white rounded-[22px] p-3 border border-slate-100"
          >
            {/* Column Header */}
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-[12px] tracking-wider text-slate-500 font-medium">
                {column.title}
              </h3>

              <div className="w-8 h-8 mr-7 rounded-full bg-slate-100 flex items-center justify-center text-[12px] text-slate-600 font-semibold">
                {column.count}
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-2">
              {column.bookings.map((booking, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-[18px] p-3 bg-white"
                >
                  <h4 className="text-[14px] font-semibold text-slate-800 leading-tight">
                    {booking.name}
                  </h4>

                  <p className="text-[11px] text-slate-500 mt-1">
                    {booking.service}
                  </p>

                  <div className="mt-3 flex justify-between items-end">
                    <div>
                      <p className="text-[11px] text-slate-700">
                        {booking.date}
                      </p>

                      <p className="text-[11px] text-slate-700">
                        {booking.time}
                      </p>
                    </div>

                    <p className="text-[12px] font-semibold text-slate-800">
                      {booking.amount}
                    </p>
                  </div>
                </div>
              ))}

              {column.bookings.length === 0 && (
                <div className="h-[500px]" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}