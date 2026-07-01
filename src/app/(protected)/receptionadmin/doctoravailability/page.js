"use client";

import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import { Calendar } from "lucide-react";

const doctors = [
  {
    name: "Dr. Riya Joshi",
    specialty: "ENT",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Riya&backgroundColor=ffd5dc",
    status: "available",
    slots: 1,
    nextAvailable: "17:00",
  },
  {
    name: "Dr. Aarav Reddy",
    specialty: "Cardiology",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aarav&backgroundColor=c0aede",
    status: "available",
    slots: 6,
    nextAvailable: "09:00",
  },
  {
    name: "Dr. Reyansh Sharma",
    specialty: "Pediatrics",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Reyansh&backgroundColor=d1d4f9",
    status: "limited",
    slots: 8,
    nextAvailable: "09:00",
  },
  {
    name: "Dr. Dev Iyer",
    specialty: "Cardiology",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Dev&backgroundColor=ffd5dc",
    status: "available",
    slots: 8,
    nextAvailable: "09:00",
  },
  {
    name: "Dr. Tara Chopra",
    specialty: "Dermatology",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Tara&backgroundColor=ffd5dc",
    status: "blocked",
    slots: 8,
    nextAvailable: "09:00",
  },
  {
    name: "Dr. Aarav Malhotra",
    specialty: "Dermatology",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Malhotra&backgroundColor=ffdfbf",
    status: "holiday",
    slots: 7,
    nextAvailable: "09:00",
  },
];

const statusStyles = {
  available: "bg-emerald-50 text-emerald-600",
  limited: "bg-amber-50 text-amber-600",
  blocked: "bg-red-50 text-red-500",
  holiday: "bg-slate-100 text-slate-600",
};

const bookableStatuses = ["available", "limited"];

export default function DoctorAvailability() {
  const handleQuickBook = (name) => console.log("quick book", name);

  return (
    <main className="min-h-screen w-full bg-[#f4f5fb] px-6 py-8 md:px-4">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
          Doctor Availability
        </h1>
        <p className="text-slate-500 text-base mb-8">
          Live availability and one-click booking
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((doc, idx) => {
            const isBookable = bookableStatuses.includes(doc.status);
            return (
              <PortalCard
                key={idx}
                className="bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)] !flex-col !items-stretch p-6"
                leading={
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={doc.avatar}
                        alt={doc.name}
                        className="w-12 h-12 rounded-full bg-slate-100 shrink-0"
                      />
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-slate-900 truncate">
                          {doc.name}
                        </h3>
                        <p className="text-sm text-slate-400 truncate">
                          {doc.specialty}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-full ${statusStyles[doc.status]}`}
                      >
                        {doc.status}
                      </span>
                      <span className="text-sm text-slate-500">
                        {doc.slots} slots left
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 mb-5">
                      Next available:{" "}
                      <span className="font-bold text-slate-900">
                        {doc.nextAvailable}
                      </span>
                    </p>

                    <Button
                      variant="primary"
                      size="md"
                      disabled={!isBookable}
                      onClick={() => handleQuickBook(doc.name)}
                      className={`w-full rounded-xl mt-auto ${
                        isBookable
                          ? "bg-indigo-600 hover:bg-indigo-700"
                          : "bg-indigo-300 hover:bg-indigo-300 cursor-not-allowed"
                      }`}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Quick Book
                    </Button>
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}