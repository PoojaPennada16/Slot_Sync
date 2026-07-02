"use client";

const Card = ({ title, value }) => (
  <div className="rounded-[22px] border border-white/60 bg-white/70 px-3 py-4  shadow-[0_8px_30px_rgba(31,41,55,0.06)] backdrop-blur-sm">
    <p className="text-sm text-[#667085]">
      {title}
    </p>

    <h2 className="mt-3 text-[22px] font-semibold leading-none tracking-[-0.03em] text-[#101828]">
      {value}
    </h2>
  </div>
);

export default function ServiceStats({
  bookings,
  revenue,
  popularity,
  rating,
}) {
  return (
    <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
      <Card
        title="Bookings"
        value={bookings}
      />

      <Card
        title="Revenue"
        value={revenue}
      />

      <Card
        title="Popularity"
        value={popularity}
      />

      <Card
        title="Rating"
        value={rating}
      />
    </div>
  );
}