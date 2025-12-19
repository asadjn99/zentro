"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Github, Linkedin, Globe } from "lucide-react";

const IntroBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the banner in this session
    const hasSeenBanner = sessionStorage.getItem("hasSeenIntroBanner");
    
    // If not, show it after a small delay (0.5s) for smooth entrance
    if (!hasSeenBanner) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("hasSeenIntroBanner", "true"); // Mark as seen
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      
      {/* Banner Card */}
      <div className="relative bg-white w-full max-w-[600px] rounded-lg shadow-2xl overflow-hidden flex flex-col md:flex-row animate-scale-up">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 p-1 bg-white/80 rounded-full hover:bg-gray-100 transition"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Left Side: Image */}
        <div className="w-full md:w-2/5 h-[250px] md:h-auto relative bg-gray-100">
          <Image 
            src="/icons/asad.jpg" // Ensure this image exists!
            alt="Asad Ullah"
            fill
            className="object-cover object-left"
          />
          {/* Overlay Gradient for text readability if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden"></div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-3/5 p-8 flex flex-col justify-center gap-4">
          
          <div>
            <span className="inline-block bg-btn-red text-white text-xs font-bold px-2 py-1 rounded mb-2">
              Developer Spotlight
            </span>
            <h2 className="text-2xl font-bold text-black">
              Hi, I am <span className="text-btn-red">Asad Ullah</span>
            </h2>
            <p className="text-sm font-medium text-gray-500">
              @asadjn99
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed text-justify">
            Welcome to <b>Zentro</b>! I built this e-commerce platform to showcase modern web development using <b>Next.js</b>, <b>TypeScript</b>, and <b>Tailwind CSS</b>. 
            <br /><br />
            Feel free to explore the features, animations, and responsive design!
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            <a href="https://github.com/asadjn99" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-black transition">
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/asad-jn99" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-blue-600 transition">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://asadjn99.netlify.app" className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-btn-red transition">
              <Globe className="w-4 h-4" />
              Portfolio
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default IntroBanner;