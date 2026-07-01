"use client";

import PortalCard from "@/components/common/card";
import Button from "@/components/common/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const appointments = [
  {
    name: "Pari Chopra",
    time: "10:00",
    doctor: "Dr. Riya Joshi",
    type: "Physical",
    status: "checked-in",
    token: 6,
    queueStatus: "waiting",
  },
  {
    name: "Pari Chopra",
    time: "09:00",
    doctor: "Dr. Riya Joshi",
    type: "Physical",
    status: "pending",
  },
  {
    name: "Vihaan Desai",
    time: "15:00",
    doctor: "Dr. Meera Gupta",
    type: "Video",
    status: "pending",
  },
  {
    name: "Kabir Sharma",
    time: "15:00",
    doctor: "Dr. Meera Gupta",
    type: "Video",
    status: "pending",
  },
  {
    name: "Neil Rao",
    time: "09:30",
    doctor: "Dr. Zara Gupta",
    type: "Video",
    status: "pending",
  },
];

export default function PatientCheckIn() {
  const handleCheckIn = (name) => {
    console.log("check in", name);
  };

  return (
    <main className="min-h-screen w-full bg-[#f4f5fb] px-6 py-8 md:px-2">
      <div className="max-w-5xl mx-auto w-full">
        <h1 className="text-2xl font-extrabold text-slate-900 mb-1">
          Patient Check-in
        </h1>
        <p className="text-slate-500 text-base mb-8">
          Mark arrivals and generate queue tokens
        </p>

        <div className="flex flex-col gap-4">
          {appointments.map((appt, idx) => (
            <PortalCard
              key={idx}
              title={appt.name}
              description={`${appt.time} · ${appt.doctor} · ${appt.type}`}
              className="bg-white shadow-[0_2px_12px_rgba(15,23,42,0.04)]"
            >
              {appt.status === "checked-in" ? (
                <div className="flex items-center gap-2.5 shrink-0">
                  <Button
                    variant="success"
                    size="sm"
                    className="rounded-full !bg-emerald-50 !text-emerald-600 hover:!bg-emerald-100 font-semibold"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-1.5" />
                    Token #{appt.token}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold"
                  >
                    {appt.queueStatus}
                  </Button>
                </div>
              ) : (
                <Button
                  variant="primary"
                  size="md"
                  className="rounded-full shrink-0 font-semibold"
                  onClick={() => handleCheckIn(appt.name)}
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Check In
                </Button>
              )}
            </PortalCard>
          ))}
        </div>
      </div>
    </main>
  );
}