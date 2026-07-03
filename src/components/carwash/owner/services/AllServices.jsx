"use client";

import {
  MoreVertical,
  Star,
  Trash2,
  Pencil,
  Ban,
} from "lucide-react";
import {
  useMemo,
  useState,
  useRef,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import SearchService from "./SearchService";
import CardMenu from "@/components/carwash/common/CardMenu";

const servicesData = [
  {
    id: 1,
    category: "Car Wash",
    name: "Premium Foam Wash",
    price: "₹899",
    duration: "45m",
    bookings: 412,
    revenue: "₹3,70,388",
    rating: 4.7,
    status: "Active",
  },
  {
    id: 2,
    category: "Coating",
    name: "Ceramic Coating 9H",
    price: "₹24,999",
    duration: "8.0h",
    bookings: 38,
    revenue: "₹9,49,962",
    rating: 4.9,
    status: "Active",
  },
  {
    id: 3,
    category: "Coating",
    name: "Graphene Coating",
    price: "₹34,999",
    duration: "9.0h",
    bookings: 21,
    revenue: "₹7,34,979",
    rating: 4.9,
    status: "Active",
  },
  {
    id: 4,
    category: "PPF",
    name: "Paint Protection Film (Full)",
    price: "₹1,84,999",
    duration: "24.0h",
    bookings: 7,
    revenue: "₹12,94,993",
    rating: 5.0,
    status: "Active",
  },
  {
    id: 5,
    category: "Detailing",
    name: "Interior Deep Clean",
    price: "₹2,499",
    duration: "3.0h",
    bookings: 192,
    revenue: "₹4,79,808",
    rating: 4.6,
    status: "Active",
  },
  {
    id: 6,
    category: "Detailing",
    name: "Engine Bay Detailing",
    price: "₹1,499",
    duration: "1.5h",
    bookings: 84,
    revenue: "₹1,25,916",
    rating: 4.5,
    status: "Active",
  },
  {
    id: 7,
    category: "Mechanical",
    name: "Wheel Alignment & Balancing",
    price: "₹1,299",
    duration: "1.0h",
    bookings: 156,
    revenue: "₹2,02,644",
    rating: 4.4,
    status: "Active",
  },
  {
    id: 8,
    category: "Mechanical",
    name: "AC Service & Gas Top-Up",
    price: "₹1,899",
    duration: "1.3h",
    bookings: 121,
    revenue: "₹2,29,779",
    rating: 4.6,
    status: "Active",
  },
  {
    id: 9,
    category: "Mechanical",
    name: "Synthetic Oil Change",
    price: "₹3,499",
    duration: "45m",
    bookings: 203,
    revenue: "₹7,10,297",
    rating: 4.7,
    status: "Active",
  },
  {
    id: 10,
    category: "Inspection",
    name: "Vehicle Inspection (60-pt)",
    price: "₹799",
    duration: "40m",
    bookings: 287,
    revenue: "₹2,29,313",
    rating: 4.8,
    status: "Active",
  },
  {
    id: 11,
    category: "Mechanical",
    name: "Battery Diagnostics & Swap",
    price: "₹6,499",
    duration: "30m",
    bookings: 64,
    revenue: "₹4,15,936",
    rating: 4.5,
    status: "Active",
  },
  {
    id: 12,
    category: "Coating",
    name: "Teflon Coating Express",
    price: "₹4,999",
    duration: "2.0h",
    bookings: 47,
    revenue: "₹2,34,953",
    rating: 4.4,
    status: "Active",
  },
];

function ServiceCard({ item }) {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const menuItems = [
    {
      label: "Edit",
      icon: <Pencil size={15} />,
      onClick: () => {
        console.log("Edit");
        setOpenMenu(false);
      },
    },
    {
      label: "Deactivate",
      icon: <Ban size={15} />,
      divider: true,
      onClick: () => {
        console.log("Deactivate");
        setOpenMenu(false);
      },
    },
    {
      label: "Delete",
      icon: <Trash2 size={15} />,
      variant: "delete",
      onClick: () => {
        console.log("Delete");
        setOpenMenu(false);
      },
    },
  ];

  return (
    <div
      onClick={() =>
        router.push(`/carwash/owner/services/${item.id}`)
      }
      className="cursor-pointer rounded-2xl border border-white/60 bg-white/70 p-4 shadow-[0_8px_30px_rgba(31,41,55,0.06)] backdrop-blur-sm transition hover:-translate-y-1"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-[#1F2937]">
          {item.category}
        </div>

        <div
          className="relative flex items-center gap-4"
          onClick={(e) => e.stopPropagation()}
          ref={menuRef}
        >
          <span className="rounded-full bg-[#DDF5E8] px-2 py-1 text-xs font-semibold text-[#1DBF73] shadow-sm">
            {item.status}
          </span>

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-[#111827]"
          >
            <MoreVertical size={14} strokeWidth={2.5} />
          </button>

          {openMenu && (
            <CardMenu
              items={menuItems}
              className="absolute right-0 top-8 z-50 w-[190px]"
            />
          )}
        </div>
      </div>

      <h3 className="min-h-[42px] text-[15px] font-semibold leading-none tracking-[-0.02em] text-slate-800">
        {item.name}
      </h3>

      <div className="-mt-3 flex items-end justify-between gap-6">
        <div>
          <p className="mb-1 text-sm text-[#667085]">Price</p>
          <p className="text-lg font-semibold leading-none tracking-[-0.02em] text-[#3F7AE0]">
            {item.price}
          </p>
        </div>

        <div className="text-right">
          <p className="mb-1 text-sm text-[#667085]">Duration</p>
          <p className="text-lg font-semibold leading-none text-slate-700">
            {item.duration}
          </p>
        </div>
      </div>

      <div className="my-4 h-px bg-slate-100" />

      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-xs text-[#667085]">Bookings</p>
          <p className="text-sm font-semibold text-slate-700">
            {item.bookings}
          </p>
        </div>

        <div>
          <p className="text-xs text-[#667085]">Revenue</p>
          <p className="text-sm font-semibold text-slate-700">
            {item.revenue}
          </p>
        </div>

        <div>
          <p className="text-xs text-[#667085]">Rating</p>
          <p className="flex items-center justify-center gap-1 text-sm font-semibold text-slate-700">
            <Star size={13} fill="currentColor" strokeWidth={0} />
            {item.rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AllServices() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredServices = useMemo(() => {
    return servicesData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div>
      <SearchService
        search={search}
        setSearch={setSearch}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredServices.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}