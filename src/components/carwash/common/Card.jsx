"use client";

export default function Card({
  children,
  className = "",
  padding = "",
}) {
  return (
    <div
      className={`rounded-3xl border border-[#E6EAF2] bg-white shadow-lg ${padding} ${className}`}
    >
      {children}
    </div>
  );
}