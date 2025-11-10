const Footer = () => {
  return (
    <footer className="w-full px-8 md:px-16 lg:px-28 py-16 bg-[#000080]">
      <div className="w-full flex flex-col md:flex-row justify-between gap-16">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 text-white">
          <img src="/images/logo.svg" className="w-14" alt="Logo" />

          <h2 className="text-xl font-semibold">Why Book with Retreat Guru?</h2>

          <ul className="text-sm space-y-2">
            <li className="flex gap-2">
              <span className="text-xl leading-tight">•</span>
              <span>
                World’s largest collection of transformative experiences
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-xl leading-tight">•</span>
              <span>Conscious community of 500k+ retreat goers</span>
            </li>
            <li className="flex gap-2">
              <span className="text-xl leading-tight">•</span>
              <span>Trusted by 4,000+ centers & 10,000 teachers</span>
            </li>
          </ul>

          {/* MISSION */}
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center">
              <i className="ri-heart-line text-white text-lg"></i>
            </div>

            <span className="uppercase text-sm tracking-wide font-medium">
              Our mission is a{" "}
              <span className="text-[#6BA3CA] font-semibold">Wakeful</span>{" "}
              World
            </span>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-2">
            <a aria-label="facebook" href="#" className="hover:text-white">
              <svg
                className="w-7 h-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.41c0-2.507 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            <a aria-label="instagram" href="#" className="hover:text-[#4A7C9E]">
              <svg
                className="w-7 h-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zM18.5 6a1 1 0 11.001 2.001A1 1 0 0118.5 6z" />
              </svg>
            </a>

            <a aria-label="twitter" href="#" className="hover:text-[#4A7C9E]">
              <svg
                className="w-7 h-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 5.92c-.64.28-1.33.47-2.05.55a3.5 3.5 0 001.53-1.93 6.98 6.98 0 01-2.22.85 3.48 3.48 0 00-5.93 3.17A9.89 9.89 0 013 4.79a3.48 3.48 0 001.08 4.64 3.45 3.45 0 01-1.58-.44v.05a3.48 3.48 0 002.79 3.41c-.45.12-.92.14-1.4.05a3.49 3.49 0 003.25 2.42A6.99 6.99 0 012 19.54a9.86 9.86 0 005.34 1.56c6.42 0 9.94-5.32 9.94-9.94 0-.15-.01-.31-.02-.46.68-.5 1.27-1.12 1.74-1.83a6.93 6.93 0 01-2 .55z" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col gap-10 text-white">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Featured In</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                "https://d19sqpdbh9i274.cloudfront.net/images/logos/rollingstone.webp",
                "//d19sqpdbh9i274.cloudfront.net/images/logos/latimes.webp",
                "//d19sqpdbh9i274.cloudfront.net/images/logos/nytimes.webp",
                "//d19sqpdbh9i274.cloudfront.net/images/logos/capterra.webp",
              ].map((src, i) => (
                <div
                  key={i}
                  className="border border-[#1A3A52]/30 rounded-md px-4 py-2 flex items-center justify-center bg-[#E8F1F8]"
                >
                  <img
                    src={src}
                    className="h-6 object-contain"
                    alt={`logo-${i}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">Company</h4>
              <span className="hover:text-[#4A7C9E] cursor-pointer">
                About Us
              </span>
              <span className="hover:text-[#4A7C9E] cursor-pointer">
                Careers
              </span>
              <span className="hover:text-[#4A7C9E] cursor-pointer">Blog</span>
              <span className="hover:text-[#4A7C9E] cursor-pointer">
                Help & FAQ
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold">For Retreat Leaders</h4>
              <span className="hover:text-[#4A7C9E] cursor-pointer">Login</span>
              <span className="hover:text-[#4A7C9E] cursor-pointer">
                List a Retreat
              </span>
              <span className="hover:text-[#4A7C9E] cursor-pointer">
                Retreat Management System
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="hover:text-[#4A7C9E] cursor-pointer">
                Marketplace Host FAQ
              </span>
              <span className="hover:text-[#4A7C9E] cursor-pointer">
                Marketplace Host Policies
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full border-t border-white mt-12 pt-6 flex flex-col md:flex-row justify-end items-center text-sm text-white gap-6">
        <div className="flex gap-6 items-center">
          <span className="text-sm">
            Copyright © 2025 Retreat Guru. All Rights Reserved
          </span>
          <span className="cursor-pointer hover:text-[#6BA3CA]">
            Terms of Service
          </span>
          <span className="cursor-pointer hover:text-[#6BA3CA]">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
