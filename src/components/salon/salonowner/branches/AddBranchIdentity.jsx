"use client";

import React from "react";
import { MapPin } from "lucide-react";

const AddBranchIdentity = () => {
  return (
    <div className="space-y-5">
      {/* Branch Identity Card */}

      <div className="bg-white rounded-[24px] p-6 shadow-sm">
        <h2 className="text-[18px] font-semibold text-slate-900 mb-5">
          Branch Identity
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-[13px] text-slate-600">
              Branch Name
            </label>

            <input
              type="text"
              placeholder="SlotSync Lounge Pune"
              className="w-full h-11 mt-2 px-4 rounded-full border border-slate-200 outline-none text-[13px]"
            />
          </div>

          <div>
            <label className="text-[13px] text-slate-600">
              Branch Code
            </label>

            <input
              type="text"
              placeholder="PUN001"
              className="w-full h-11 mt-2 px-4 rounded-full border border-slate-200 outline-none text-[13px]"
            />
          </div>

          <div>
            <label className="text-[13px] text-slate-600">
              Manager Name
            </label>

            <input
              type="text"
              placeholder="Aditi Singh"
              className="w-full h-11 mt-2 px-4 rounded-full border border-slate-200 outline-none text-[13px]"
            />
          </div>

          <div>
            <label className="text-[13px] text-slate-600">
              Manager Mobile
            </label>

            <input
              type="text"
              placeholder="+91 9876543210"
              className="w-full h-11 mt-2 px-4 rounded-full border border-slate-200 outline-none text-[13px]"
            />
          </div>

          <div className="md:col-span-2">
            <label className="text-[13px] text-slate-600">
              Manager Email
            </label>

            <input
              type="email"
              placeholder="manager@slotsync.com"
              className="w-full h-11 mt-2 px-4 rounded-full border border-slate-200 outline-none text-[13px]"
            />
          </div>
        </div>
      </div>

      {/* Location Card */}

      <div className="bg-white rounded-[24px] p-6 shadow-sm">
        <h2 className="text-[18px] font-semibold text-slate-900 mb-5">
          Location
        </h2>

        <div className="space-y-4">
          <div>
            <label className="text-[13px] text-slate-600">
              Address
            </label>

            <input
              type="text"
              placeholder="Enter Address"
              className="w-full h-11 mt-2 px-4 rounded-full border border-slate-200 outline-none text-[13px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[13px] text-slate-600">
                City
              </label>

              <input
                type="text"
                placeholder="City"
                className="w-full h-11 mt-2 px-4 rounded-full border border-slate-200 outline-none text-[13px]"
              />
            </div>

            <div>
              <label className="text-[13px] text-slate-600">
                State
              </label>

              <input
                type="text"
                placeholder="State"
                className="w-full h-11 mt-2 px-4 rounded-full border border-slate-200 outline-none text-[13px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[13px] text-slate-600">
                Pincode
              </label>

              <input
                type="text"
                placeholder="Pincode"
                className="w-full h-11 mt-2 px-4 rounded-full border border-slate-200 outline-none text-[13px]"
              />
            </div>

            <div>
              <label className="text-[13px] text-slate-600">
                Map Location
              </label>

              <button className="w-full h-11 mt-2 rounded-full border border-dashed border-slate-300 flex items-center justify-center gap-2 text-[13px] text-slate-600">
                <MapPin size={14} />
                Pin Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBranchIdentity;