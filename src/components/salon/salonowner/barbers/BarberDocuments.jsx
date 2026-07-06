"use client";

import React, { useRef, useState } from "react";
import { Upload } from "lucide-react";

const UploadBox = ({ title, accept }) => {
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div
      onClick={() => inputRef.current.click()}
      className="w-full h-[52px] border border-dashed border-[#D7DCE5] rounded-[14px] bg-[#FCFCFD] flex items-center px-3 cursor-pointer hover:border-[#5458E8] transition"
    >
      <Upload
        size={16}
        className="text-[#4F46E5] mr-3 flex-shrink-0"
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <span className="text-[10px] font-medium text-[#475467] truncate">
          {title}
        </span>

        {fileName && (
          <span className="text-[8px] text-[#5458E8] truncate">
            {fileName}
          </span>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
};

const BarberDocuments = () => {
  const [aadhaar, setAadhaar] = useState("");
  const [pan, setPan] = useState("");

  return (
    <div className="w-full">
      <div className="w-full max-w-[620px] bg-white rounded-[18px] p-4 shadow-sm">
        {/* Heading */}

        <h2 className="text-[14px] font-semibold text-[#111827] mb-4">
          Documents
        </h2>

        {/* Form */}

        <div className="grid grid-cols-2 gap-3">

          {/* Aadhaar */}

          <div>
            <label className="block text-[11px] text-[#667085] mb-2">
              Aadhaar #
            </label>

            <input
              type="text"
              value={aadhaar}
              onChange={(e) => setAadhaar(e.target.value)}
              placeholder="Enter Aadhaar Number"
              className="w-full h-[38px] rounded-full border border-[#E5E7EB] px-3 text-[11px] outline-none focus:border-[#5458E8]"
            />
          </div>

          {/* PAN */}

          <div>
            <label className="block text-[11px] text-[#667085] mb-2">
              PAN #
            </label>

            <input
              type="text"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              placeholder="Enter PAN Number"
              className="w-full h-[38px] rounded-full border border-[#E5E7EB] px-3 text-[11px] outline-none focus:border-[#5458E8]"
            />
          </div>

          {/* Upload Boxes */}

          <UploadBox
            title="Upload Photo"
            accept="image/*"
          />

          <UploadBox
            title="Upload ID Proof"
            accept=".pdf,image/*"
          />

          <UploadBox
            title="Upload Certificates"
            accept=".pdf,image/*"
          />

          <UploadBox
            title="Upload Portfolio"
            accept="image/*"
          />

        </div>
      </div>
    </div>
  );
};

export default BarberDocuments;