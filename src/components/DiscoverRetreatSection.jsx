import React from "react";

const DiscoverRetreatSection = () => {
  const retreats = [
    {
      title: "Upcoming Retreats",
      image:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
    },
    {
      title: "Retreats Near Me",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      title: "Affordable Retreats",
      image:
        "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Luxury Retreats",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=799",
    },
    {
      title: "Weekend Retreats",
      image:
        "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Top-Rated Retreats",
      image:
        "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1026",
    },
  ];

  return (
    <section className="py-16 px-8 bg-[#E8F1F8]">
      <h2 className="text-3xl font-semibold mb-10 text-[#1A3A52]">
        Discover Your Retreat
      </h2>

      {/* Retreat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {retreats.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-[#F8F9FA] font-semibold text-lg drop-shadow-lg">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscoverRetreatSection;
