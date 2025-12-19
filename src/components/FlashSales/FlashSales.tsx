"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import ProductCard from "../Product/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mock Data (Replace with real data later)
const products = [
  { id: 1, title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: 40, rating: 5, reviews: 88, image: "/shop/gamepad.png" },
  { id: 2, title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: 35, rating: 4, reviews: 75, image: "/shop/keyboard.png" },
  { id: 3, title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: 30, rating: 5, reviews: 99, image: "/shop/monitor.png" },
  { id: 4, title: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: 25, rating: 4, reviews: 99, image: "/shop/chair.png" },
  { id: 5, title: "PlayStation 5 Console", price: 499, oldPrice: 550, discount: 10, rating: 5, reviews: 150, image: "/shop/playstation.webp" }, // Duplicate for testing scroll
];

const FlashSales = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // We use custom arrows
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // Laptop
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablet
      { breakpoint: 640, settings: { slidesToShow: 1 } },  // Mobile
    ],
  };

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  return (
    <section className="mt-20 mb-10">
      <div className="container-custom">
        
        {/* 1. Section Header */}
        <div className="flex flex-col gap-6 mb-10">
          
          {/* Red Tag */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-secondary rounded-sm"></div>
            <span className="text-secondary font-semibold">Today&apos;s</span>
          </div>

          {/* Title & Timer & Arrows */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-0">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-20">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide">Flash Sales</h2>
              <CountdownTimer />
            </div>

            {/* Custom Arrows */}
            <div className="flex gap-2 self-end sm:self-auto">
              <button 
                onClick={previous} 
                className="w-[46px] h-[46px] bg-bg-secondary rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              >
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>
              <button 
                onClick={next} 
                className="w-[46px] h-[46px] bg-bg-secondary rounded-full flex items-center justify-center hover:bg-gray-200 transition"
              >
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Product Carousel */}
        <div className="mx-[-10px]"> {/* Negative margin to offset slide padding */}
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-[10px]"> {/* Padding creates the gap between cards */}
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>

        {/* 3. Bottom Button */}
        <div className="mt-14 flex justify-center pb-14 border-b border-gray-200">
          <button className="bg-btn-red text-white px-12 py-3 rounded hover:bg-btn-hover-red transition font-medium">
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default FlashSales;