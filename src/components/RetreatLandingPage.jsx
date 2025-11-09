import React, { useState, useEffect, useRef } from "react";
import { Search, Heart } from "lucide-react";
import DiscoverRetreatSection from "./DiscoverRetreatSection";
import RetreatSpotlight from "./RetreatSpotlight";
import ExploreRetreatType from "./ExploreRetreatType";
import StoriesSection from "./StoriesSection";
import AboutSection from "./AboutSection";
import IndexPage from "./IndexPage";
import Footer from "./Footer";

const RetreatLandingPage = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const heroSearchRef = useRef(null);

  // Add your videos here - just put video files in public/videos/ folder
  const videos = [
    "/videos/video1.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
  ];

  // Hero text that changes every 10 seconds
  const heroTexts = [
    "Find & Book Your Wellness Retreat",
    "Discover Your Perfect Escape",
    "Transform Your Mind & Body",
    "Experience Ultimate Relaxation",
    "Journey to Inner Peace",
    "Rejuvenate Your Soul Today",
  ];

  // Pick random video on page load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setCurrentVideoIndex(randomIndex);
  }, []);

  // Change text every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Handle scroll - move search bar to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Top Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#F8F9FA] shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="/images/logo.svg" alt="" />
              </div>
              <span
                className={`text-xl font-semibold transition-colors duration-300 ${
                  isScrolled ? "text-[#1A3A52]" : "text-[#F8F9FA]"
                }`}
              >
                retreat.guru
              </span>
            </div>

            {/* Search Bar (shows when scrolled) */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
                isScrolled
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="relative w-[500px]">
                <input
                  type="text"
                  placeholder="Search the World's Best Retreats"
                  className="w-full px-6 py-3 pr-14 rounded-full bg-[#E8F1F8] text-[#1A3A52] placeholder-[#4A7C9E] focus:outline-none focus:ring-2 focus:ring-[#6BA3CA]"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Search className="w-5 h-5 text-[#1A3A52]" />
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-6">
              <button
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-[#1A3A52]" : "text-[#F8F9FA]"
                }`}
              >
                <Heart
                  className="w-5 h-5"
                  fill={isScrolled ? "currentColor" : "none"}
                />
              </button>
              <button
                className={`font-medium transition-colors duration-300 ${
                  isScrolled ? "text-[#1A3A52]" : "text-[#F8F9FA]"
                }`}
              >
                RETREAT LEADERS
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <div className="relative h-screen">
        {/* Video Background */}
        <video
          key={currentVideoIndex}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#1A3A52]/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          {/* Changing Title */}
          <h1
            key={currentTextIndex}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F8F9FA] text-center mb-16 px-4 animate-fadeIn"
          >
            {heroTexts[currentTextIndex]}
          </h1>

          {/* Search Bar in Hero */}
          <div
            ref={heroSearchRef}
            className={`w-full max-w-3xl px-4 transition-opacity duration-500 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search the World's Best Retreats"
                className="w-full px-8 py-5 pr-16 rounded-full text-lg bg-[#F8F9FA]/95 text-[#4A7C9E] placeholder-[#4A7C9E] focus:outline-none focus:ring-2 focus:ring-[#6BA3CA] shadow-2xl"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2">
                <Search className="w-6 h-6 text-[#4A7C9E]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#F8F9FA] py-12 shadow-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            {/* Feature 1 */}
            <div className="relative group flex items-center justify-center space-x-4 overflow-visible">
              <div className="w-12 h-12 border-2 border-[#1A3A52] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#1A3A52]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-[#1A3A52] cursor-pointer">
                Best Price Guarantee
              </h3>

              {/* Tooltip */}
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 text-center z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#F8F9FA] text-[#4A7C9E] text-sm px-4 py-2 rounded-lg shadow-lg border border-[#E8F1F8] pointer-events-none">
                We guarantee you always get the lowest price — found cheaper
                elsewhere? We'll match it!
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative group flex items-center justify-center space-x-4 overflow-visible">
              <div className="w-12 h-12 border-2 border-[#1A3A52] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-10 h-10 text-[#1A3A52]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-[#1A3A52] cursor-pointer">
                4000+ Retreats Worldwide
              </h3>

              {/* Tooltip */}
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 text-center z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#F8F9FA] text-[#4A7C9E] text-sm px-4 py-2 rounded-lg shadow-lg border border-[#E8F1F8] pointer-events-none">
                We guarantee you always get the lowest price — found cheaper
                elsewhere? We'll match it!
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative group flex items-center justify-center space-x-4 overflow-visible">
              <div className="w-12 h-12 border-2 border-[#1A3A52] rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-10 h-10 text-[#1A3A52]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 3l-6 3v15l6-3 6 3 6-3V3l-6 3L9 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 3v15m6-12v15"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-[#1A3A52] cursor-pointer">
                Best Price Guarantee
              </h3>

              {/* Tooltip */}
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-64 text-center z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#F8F9FA] text-[#4A7C9E] text-sm px-4 py-2 rounded-lg shadow-lg border border-[#E8F1F8] pointer-events-none">
                We guarantee you always get the lowest price — found cheaper
                elsewhere? We'll match it!
              </div>
            </div>
          </div>
        </div>
      </div>
      <DiscoverRetreatSection />
      <RetreatSpotlight />
      <ExploreRetreatType />
      <StoriesSection />
      <IndexPage />
      <AboutSection />
      <Footer />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default RetreatLandingPage;