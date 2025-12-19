"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Slider from "react-slick";
// Import necessary CSS for the carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample Data for the Slides
const slides = [
  {
    id: 1,
    title: "Up to 10% off Voucher",
    subtitle: "iPhone 14 Series",
    logo: "/images/iphone-logo.png",
    image: "/images/hero.png",
    link: "/shop",
    bgColor: "bg-black",
  },
  {
    id: 2,
    title: "Up to 12% off Voucher",
    subtitle: "Bose QuietComfort Ultra",
    logo: "/images/iphone-logo.png",
    image: "/images/hero2.jpg",
    link: "/shop",
    bgColor: "bg-black",
  },
  {
    id: 3,
    title: "Up to 5% off Voucher",
    subtitle: "MacBook Pro",
    logo: "/images/iphone-logo.png",
    image: "/images/hero-1.jpg",
    link: "/shop",
    bgColor: "bg-black",
  },
  {
    id: 4,
    title: "Up to 8% off Voucher",
    subtitle: "iPhone 17 Pro Max",
    logo: "/images/iphone-logo.png",
    image: "/images/hero5.jpg",
    link: "/shop",
    bgColor: "bg-black",
  },
  {
    id: 5,
    title: "Up to 8% off Voucher",
    subtitle: "Sony Camera",
    logo: "/images/iphone-logo.png",
    image: "/images/hero6.jpeg",
    link: "/shop",
    bgColor: "bg-black",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "20px" }}> {/* Adjusted bottom position */}
        <ul style={{ margin: "0px", padding: "0px", display: "flex", justifyContent: "center", gap: "10px" }}> 
          {dots} 
        </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: i === currentSlide ? "12px" : "10px",
          height: i === currentSlide ? "12px" : "10px",
          borderRadius: "50%",
          backgroundColor: i === currentSlide ? "#DB4444" : "#D9D9D9",
          border: i === currentSlide ? "2px solid white" : "none",
        }}
      ></div>
    ),
  };

  return (
    // Added pb-6 on mobile to ensure dots don't overlap content
    <div className="flex-1 pt-4 lg:pt-10 lg:pl-8 overflow-hidden w-full">
      <Slider {...settings} className="hero-slider">
        {slides.map((slide) => (
          <div key={slide.id} className="outline-none"> {/* Wrapper to fix slick-slide focus ring */}
            
            {/* Updates:
              1. min-h-[350px]: Allows growth on mobile
              2. md:h-[400px]: Fixed height on desktop
              3. pb-12: Padding bottom on mobile to clear the dots
            */}
            <div 
              className={`relative w-full min-h-[350px] md:h-[400px] ${slide.bgColor} text-white flex flex-col justify-center pb-12 md:pb-0 rounded-lg overflow-hidden`}
            >
              <div className="flex flex-col-reverse md:flex-row items-center justify-between h-full px-6 md:px-12">
                
                {/* Left Side - Text Content */}
                <div className="flex flex-col gap-3 md:gap-4 z-10 items-start pt-6 md:pt-0 w-full md:w-1/2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 relative">
                       <Image src={slide.logo} alt="logo" fill className="object-contain"/>
                    </div>
                    <span className="text-xs md:text-base font-light">{slide.subtitle}</span>
                  </div>
                  
                  {/* Fluid text size for mobile */}
                  <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-wide">
                    {slide.title}
                  </h1>
                  
                  <Link href={slide.link} className="flex items-center gap-2 border-b border-white pb-1 hover:opacity-80 transition mt-2">
                    <span className="text-sm md:text-base font-medium">Shop Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Right Side - Product Image */}
                <div className="relative w-full md:w-1/2 h-[180px] md:h-full flex justify-center md:justify-end items-center mt-4 md:mt-0">
                   {/* Mobile: Controlled height (180px) and fit
                     Desktop: Larger specific width/height 
                   */}
                  <div className="relative w-[200px] h-[160px] md:w-[400px] md:h-[350px] lg:w-[500px] lg:h-[400px]">
                     <Image 
                      src={slide.image} 
                      alt={slide.title} 
                      fill
                      className="object-contain"
                      priority={slide.id === 1}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;