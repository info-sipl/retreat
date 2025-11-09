

import React from "react";

const retreatTypes = [
  {
    id: 1,
    title: "Yoga Retreats",
    img: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764",
    color: "bg-[#1A3A52]/80",
  },
  {
    id: 2,
    title: "Psychedelic Retreats",
    img: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "bg-[#1A3A52]/80",
  },
  {
    id: 3,
    title: "Meditation Retreats",
    img: "https://images.unsplash.com/photo-1761846532727-2313b72dfe23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    color: "bg-[#1A3A52]/80",
  },
  {
    id: 4,
    title: "Ayahuasca Retreats",
    img: "https://plus.unsplash.com/premium_photo-1761351502734-52260d0d0969?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=736",
    color: "bg-[#1A3A52]/80",
  },
  {
    id: 5,
    title: "Health & Wellness Retreats",
    img: "https://images.unsplash.com/photo-1761880611426-47653ee787b6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1177",
    color: "bg-[#1A3A52]/80",
  },
];

const promoteCards = [
  {
    id: 1,
    title: "List a Retreat",
    subtitle: "Promote your Event",
    description:
      "Retreat Guru has the largest collection of transformative experiences. List your event on Retreat Guru's retreat marketplace today and unlock exposure to hundreds of thousands of highly engaged retreat-seekers globally.",
    img: "https://plus.unsplash.com/premium_photo-1760453184957-b7ae59315880?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 2,
    title: "The Journey Within: Synthesis Circles",
    subtitle: "Free Online Experience",
    description:
      "Join a live event including a psychedelic Q&A, plus guided sound healing and breathwork to deepen awareness, connection, and integration.",
    img: "https://images.unsplash.com/photo-1761864534000-337153e88c92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 3,
    title: "Retreat Guru RMS",
    subtitle: "The All-In-One Solution",
    description:
      "Streamline and simplify the running of your retreats, with our fully integrated and unified Retreat Management System built exclusively for retreat centers.",
    img: "https://images.unsplash.com/photo-1761851102539-8f0f00d535dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
];

const ExploreRetreatType = () => {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 px-10">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-[#1A3A52] mb-10">
        Explore by Retreat Type
      </h2>

      {/* Retreat Type Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
        {retreatTypes.map((r) => (
          <div
            key={r.id}
            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={r.img}
              alt={r.title}
              className="w-full h-80 object-cover"
            />
            <div
              className={`absolute bottom-4 left-4 right-4 ${r.color} text-[#F8F9FA] px-4 py-2 rounded-lg flex items-center justify-between`}
            >
              <span className="font-medium text-base">{r.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Promote Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {promoteCards.map((p) => (
          <div
            key={p.id}
            className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-[480px]"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A52]/90 via-[#1A3A52]/70 to-transparent flex flex-col justify-end p-10 text-[#F8F9FA]">
              <p className="text-lg font-semibold opacity-90 mb-2">
                {p.subtitle}
              </p>
              <h3 className="text-4xl font-bold mb-4 leading-snug">
                {p.title}
              </h3>
              <p className="text-base opacity-90 mb-6 leading-relaxed">
                {p.description}
              </p>
              <button className="border-2 border-[#F8F9FA] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#F8F9FA] hover:text-[#1A3A52] transition">
                LEARN MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreRetreatType;