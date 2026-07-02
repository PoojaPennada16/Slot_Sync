"use client";

import { useState } from "react";
import { X } from "lucide-react";

import StepOne from "./Step1";
import StepTwo from "./Step2";
import StepThree from "./Step3";
import StepFour from "./Step4";
import StepFive from "./Step5";

export default function NewBooking({ open, onClose }) {
    const [step, setStep] = useState(1);

    // Form State
    const [customer, setCustomer] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [service, setService] = useState("");
    const [branch, setBranch] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [technician, setTechnician] = useState("");

    // Validation Errors
    const [errors, setErrors] = useState({
        customer: "",
        vehicle: "",
        service: "",
        branch: "",
        date: "",
        time: "",
        technician: "",
    });

    if (!open) return null;

    const nextStep = () => {
        const newErrors = {
            customer: "",
            vehicle: "",
            service: "",
            branch: "",
            date: "",
            time: "",
            technician: "",
        };

        if (step === 1 && !customer) {
            newErrors.customer = "Please select a customer.";
        }

        if (step === 2 && !vehicle) {
            newErrors.vehicle = "Please select a vehicle.";
        }

        if (step === 3) {
            if (!service) newErrors.service = "Please select a service.";
            if (!branch) newErrors.branch = "Please select a branch.";
        }

        if (step === 4) {
            if (!date) newErrors.date = "Please select a booking date.";
            if (!time) newErrors.time = "Please select a time slot.";
        }

        if (step === 5 && !technician) {
            newErrors.technician = "Please assign a technician.";
        }

        setErrors(newErrors);

        if (Object.values(newErrors).some((item) => item !== "")) return;

        if (step < 5) {
            setStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        setErrors({
            customer: "",
            vehicle: "",
            service: "",
            branch: "",
            date: "",
            time: "",
            technician: "",
        });

        if (step > 1) {
            setStep((prev) => prev - 1);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <StepOne
                        customer={customer}
                        setCustomer={setCustomer}
                        error={errors.customer}
                    />
                );

            case 2:
                return (
                    <StepTwo
                        vehicle={vehicle}
                        setVehicle={setVehicle}
                        error={errors.vehicle}
                    />
                );

            case 3:
                return (
                    <StepThree
                        service={service}
                        setService={setService}
                        branch={branch}
                        setBranch={setBranch}
                        serviceError={errors.service}
                        branchError={errors.branch}
                    />
                );

            case 4:
                return (
                    <StepFour
                        date={date}
                        setDate={setDate}
                        time={time}
                        setTime={setTime}
                        dateError={errors.date}
                        timeError={errors.time}
                    />
                );

            case 5:
                return (
                    <StepFive
                        technician={technician}
                        setTechnician={setTechnician}
                        customer={customer}
                        vehicle={vehicle}
                        service={service}
                        branch={branch}
                        date={date}
                        time={time}
                        error={errors.technician}
                    />
                );

            default:
                return null;
        }
    };
    const handleCreateBooking = () => {
        // Final validation
        if (!technician) {
            setErrors((prev) => ({
                ...prev,
                technician: "Please assign a technician.",
            }));
            return;
        }

        // Booking data
        const bookingData = {
            customer,
            vehicle,
            service,
            branch,
            date,
            time,
            technician,
        };

        console.log("Booking Created:", bookingData);

        // TODO:
        // Call your API here

        // Reset form
        setStep(1);
        setCustomer("");
        setVehicle("");
        setService("");
        setBranch("");
        setDate("");
        setTime("");
        setTechnician("");

        setErrors({
            customer: "",
            vehicle: "",
            service: "",
            branch: "",
            date: "",
            time: "",
            technician: "",
        });

        onClose();
    };
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-2">
            <div className="relative w-full max-w-[480px] overflow-visible rounded-[24px] bg-[#F4F6FB] shadow-[0_20px_80px_rgba(15,23,42,0.22)]">
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-7 top-6 flex h-4 w-4 items-center justify-center rounded-full text-[#475467] transition hover:bg-white"
                >
                    <X size={24} />
                </button>

                <div className="px-9 pb-8 pt-8">
                    <h2 className="text-[18px] font-semibold tracking-[-0.03em] text-[#0F172A]">
                        New booking — step {step} of 5
                    </h2>

                    <div className="mt-3">{renderStep()}</div>

                    <div
                        className={`mt-3 flex ${step === 1 ? "justify-end" : "justify-end gap-4"
                            }`}
                    >
                        {step !== 1 && (
                            <button
                                onClick={prevStep}
                                className="inline-flex h-[33px] items-center justify-center rounded-xl border border-[#D7DDEA] bg-white px-4 text-[14px] font-semibold text-[#0F172A] shadow-[0_4px_12px_rgba(15,23,42,0.06)] transition hover:bg-[#F8FAFC]"
                            >
                                Back
                            </button>
                        )}

                        {step !== 5 ? (
                            <button
                                onClick={nextStep}
                                className="inline-flex h-[33px] items-center justify-center rounded-xl bg-gradient-to-r from-[#5B52EA] to-[#2F9BDB] px-4 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(91,82,234,0.24)] transition hover:opacity-95"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                onClick={handleCreateBooking}
                                className="inline-flex h-[33px] items-center justify-center rounded-xl bg-gradient-to-r from-[#5B52EA] to-[#2F9BDB] px-4 text-[14px] font-semibold text-white shadow-[0_10px_30px_rgba(91,82,234,0.24)] transition hover:opacity-95"
                            >
                                Create Booking
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}