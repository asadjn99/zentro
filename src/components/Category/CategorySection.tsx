"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CategoryCard from "./CategoryCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mock Data - Replace '/images/...' with your actual PNG paths
const categories = [
  { id: 1, label: "Phones", icon: "/category/Cellphone.png" },
  { id: 2, label: "Computers", icon: "/category/Computer.png" },
  { id: 3, label: "SmartWatch", icon: "/category/Smartwatch.png" },
  { id: 4, label: "Camera", icon: "/category/Camera.png", selected: true }, // Highlighted as per your image
  { id: 5, label: "HeadPhones", icon: "/category/Headphone.png" },
  { id: 6, label: "Gaming", icon: "/category/Gamepad.png" },
  { id: 7, label: "Phones", icon: "/category/Cellphone.png" }, // Duplicate for scrolling demo
];

const CategorySection = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } }, // Laptop
      { breakpoint: 1024, settings: { slidesToShow: 3 } }, // Tablet
      { breakpoint: 640, settings: { slidesToShow: 2 } },  // Mobile
    ],
  };

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  return (
    <section className="mb-20 pb-10 border-b border-gray-200"> {/* Added top border as seen in design */}
      <div className="container-custom">
        
        {/* 1. Header Section */}
        <div className="flex flex-col gap-6 mb-10">
          
          {/* Red Tag */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-secondary rounded-sm"></div>
            <span className="text-secondary font-semibold">Categories</span>
          </div>

          {/* Title & Arrows */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-2xl lg:text-4xl font-semibold tracking-wide">Browse By Category</h2>
            
            {/* Navigation Arrows */}
            <div className="flex gap-2">
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

        {/* 2. Carousel */}
        <div className="mx-[-15px]"> {/* Negative margin for spacing */}
          <Slider ref={sliderRef} {...settings}>
            {categories.map((cat) => (
              <div key={cat.id} className="px-[15px] py-2"> {/* Padding creates gap between cards */}
                <CategoryCard 
                  icon={cat.icon} 
                  label={cat.label} 
                  selected={cat.selected} 
                />
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default CategorySection;