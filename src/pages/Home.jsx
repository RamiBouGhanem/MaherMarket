// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/background.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br
                       from-green-950/90 via-green-900/70 to-green-800/80
                       mix-blend-overlay" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-transparent bg-clip-text
                        bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-md">
          Welcome to Maher’s Minimarket
        </h1>

        <p className="mt-4 sm:mt-5 text-base sm:text-xl lg:text-3xl font-medium text-white/90 drop-shadow-sm">
          Local • Fresh • Everyday Needs
        </p>

        {/* Primary CTA Button */}
        <Link
          to="/products"
          className="mt-8 sm:mt-10 inline-block px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold text-green-900 bg-yellow-400 rounded-lg shadow-md
                      hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4
                      focus:ring-yellow-500/50"
        >
          View All Products
        </Link>

        {/* Professional Contact Information - Streamlined and Visible */}
        <p className="mt-6 sm:mt-8 text-base sm:text-xl lg:text-2xl font-semibold text-white/90 drop-shadow-sm">
          Questions? Call us at:{" "}
          <a
            href="tel:+96181074852" // Using tel: protocol with country code for universal dialing
            className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded-md"
            aria-label="Call us at 81074852" // Good for accessibility
          >
            81 074 852
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;