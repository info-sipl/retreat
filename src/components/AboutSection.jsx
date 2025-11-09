import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#F8F9FA] py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT - VIDEO */}
        <div className="w-full">
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-xl shadow-lg">
            <video
              autoPlay
              loop
              muted
              src="/videos/video4.mp4"
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></video>
          </div>
        </div>

        {/* RIGHT - TEXT */}
        <div className="flex flex-col justify-center text-[#1A3A52]">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Who is Retreat Guru?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            We're a team of 30 people who've been on countless retreats. Our
            experiences have been so profound that we built this site to help
            people like you find authentic, safe retreats worldwide.
          </p>

          <button className="border border-[#1A3A52] rounded-full px-6 py-3 text-base font-medium hover:bg-[#1A3A52] hover:text-[#F8F9FA] transition-all w-fit">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* GROUP PHOTO */}
      <div className="mt-16 w-full rounded-xl overflow-hidden shadow-md">
        <img
          src="https://images.unsplash.com/photo-1680816739813-f939ab78e84f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1175"
          alt="Team retreat group"
          className="w-full h-[350px] md:h-[700px] object-cover object-center"
        />
      </div>
    </section>
  );
}