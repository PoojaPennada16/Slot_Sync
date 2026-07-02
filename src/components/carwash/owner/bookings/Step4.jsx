"use client";

export default function Step4({
  date,
  setDate,
  time,
  setTime,
  dateError,
  timeError,
}) {
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
  ];

  return (
    <div className="mt-1 space-y-3">
      {/* Booking Date */}
      <div>
        <label className="mb-2 ml-2 block text-[12px] font-semibold text-[#0F172A]">
          Booking Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="h-[32px] w-full rounded-xl border border-[#D7DDEA] bg-white px-5 text-[13px] text-[#0F172A] shadow-[0_3px_10px_rgba(15,23,42,0.06)] outline-none focus:border-[#5B52EA]"
        />

        {dateError && (
          <p className="mt-2 ml-2 text-[13px] font-medium text-[#E5484D]">
            {dateError}
          </p>
        )}
      </div>

      {/* Time Slots */}
      <div>
        <label className="mb-3 ml-2 block text-[12px] font-semibold text-[#0F172A]">
          Available Time Slots
        </label>

        <div className="grid grid-cols-5 gap-2">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setTime(slot)}
              className={`h-[32px] rounded-xl border text-[11px] font-semibold transition-all ${
                time === slot
                  ? "border-[#5B52EA] bg-gradient-to-r from-[#5B52EA] to-[#2F9BDB] text-white shadow-lg"
                  : "border-[#D7DDEA] bg-indigo-50 text-[#344054] hover:border-[#5B52EA]"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>

        {timeError && (
          <p className="mt-2 ml-2 text-[13px] font-medium text-[#E5484D]">
            {timeError}
          </p>
        )}
      </div>
    </div>
  );
}