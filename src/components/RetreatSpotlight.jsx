import React, { useState } from "react";
import {
  Star,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const retreats = [
  {
    id: 1,
    title: "1 to 1 Mushroom Session, near Barcelona, optional overnight stay",
    category: "Plant Medicine",
    date: "Package Dates",
    host: "After the Rains",
    location: "Alpens, Spain",
    price: "$490",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1603479439780-e190bed9f313?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=691",
  },
  {
    id: 2,
    title: "Traumadelics - Post Ceremony Stress Disorder Therapy",
    category: "Plant Medicine",
    date: "Flexible Dates",
    host: "Bernice Andersen IXCA",
    location: "Online",
    price: "From $111",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1761834614445-929699bf6174?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 3,
    title: "Yoga and Aerial Fitness",
    category: "Yoga",
    date: "Feb 14 - 21, 2026",
    host: "Sweet Retreats",
    location: "Barra de Navidad, Mexico",
    price: "From $2,000 / 8 days",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1741682044306-68905693a8e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 4,
    title: "Beginning Aerial Retreat",
    category: "Yoga",
    date: "Feb 28 - Mar 7, 2026",
    host: "Sweet Retreats",
    location: "Barra de Navidad, Mexico",
    price: "From $2,000 / 8 days",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000",
  },
  {
    id: 5,
    title: "Tropical Yoga Escape",
    category: "Yoga",
    date: "Apr 10 - 17, 2026",
    host: "Zen Balance",
    location: "Bali, Indonesia",
    price: "From $1,800 / 7 days",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1756390232263-751abad885c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 6,
    title: "Detox & Meditation Retreat",
    category: "Wellness",
    date: "Jun 1 - 7, 2026",
    host: "Calm Minds",
    location: "Goa, India",
    price: "$999",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1761939433931-4305ebba3ec9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175",
  },
  {
    id: 7,
    title: "Ayahuasca Healing Retreat",
    category: "Plant Medicine",
    date: "May 20 - 27, 2026",
    host: "Spirit Path",
    location: "Iquitos, Peru",
    price: "$1,500",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1761995912949-0a3473b32cb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 8,
    title: "Luxury Spa & Mindfulness Experience",
    category: "Wellness",
    date: "Jul 5 - 12, 2026",
    host: "Serenity Resorts",
    location: "Maldives",
    price: "From $3,200 / 7 days",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1759512909680-aeb5e7c23671?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
];

const RetreatSpotlight = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const totalPages = Math.ceil(retreats.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleRetreats = retreats.slice(startIndex, endIndex);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="w-full bg-[#E8F1F8] py-16 px-12 relative">
      {/* Header with pagination top-right */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-[#1A3A52]">
          Retreat Spotlight
        </h2>
        <div className="flex items-center gap-3 text-[#4A7C9E]">
          <p className="font-medium">
            {currentPage} / {totalPages}
          </p>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`w-9 h-9 flex items-center justify-center rounded-full border border-[#6BA3CA] hover:bg-[#6BA3CA] hover:text-[#F8F9FA] transition ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`w-9 h-9 flex items-center justify-center rounded-full border border-[#6BA3CA] hover:bg-[#6BA3CA] hover:text-[#F8F9FA] transition ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleRetreats.map((r) => (
          <div
            key={r.id}
            className="bg-[#F8F9FA] rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="relative">
              <img
                src={r.img}
                alt={r.title}
                className="w-full h-72 object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-[#1A3A52]/80 text-[#F8F9FA] text-xs px-3 py-1 rounded-full">
                {r.category}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-base font-semibold text-[#1A3A52] mb-2 line-clamp-2">
                {r.title}
              </h3>

              <div className="flex items-center text-[#4A7C9E] text-sm mb-2">
                <Calendar size={14} className="mr-2" />
                <span>{r.date}</span>
              </div>

              <div className="flex items-center text-[#4A7C9E] text-sm mb-2">
                <MapPin size={14} className="mr-2" />
                <span>
                  {r.host}, {r.location}
                </span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <p className="text-[#1A3A52] font-semibold">{r.price}</p>
                <span className="flex items-center text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <span className="text-[#1A3A52] ml-1">{r.rating}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination bottom-center */}
      {/* Pagination bottom full-width (left arrow, center number, right arrow) */}
      <div className="relative w-full mt-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`absolute left-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F9FA] shadow-md border border-[#6BA3CA] hover:bg-[#6BA3CA] hover:text-[#F8F9FA] transition ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronLeft size={18} />
        </button>

        {/* Page Indicator in Center */}
        <p className="text-center text-[#1A3A52] text-base font-medium">
          {currentPage} / {totalPages}
        </p>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`absolute right-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#F8F9FA] shadow-md border border-[#6BA3CA] hover:bg-[#6BA3CA] hover:text-[#F8F9FA] transition ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default RetreatSpotlight;