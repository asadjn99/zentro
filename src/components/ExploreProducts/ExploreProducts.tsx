"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductCard from "../Product/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mock Data
const products = [
  { id: 1, title: "Breed Dry Dog Food", price: 100, discount: 0, rating: 3, reviews: 35, image: "/shop/dog-food.png" },
  { id: 2, title: "CANON EOS DSLR Camera", price: 360, discount: 0, rating: 4, reviews: 95, image: "/shop/dslr-camera.png" },
  { id: 3, title: "ASUS FHD Gaming Laptop", price: 700, discount: 0, rating: 5, reviews: 325, image: "/shop/laptop.png" },
  { id: 4, title: "Curology Product Set", price: 500, discount: 0, rating: 4, reviews: 145, image: "/shop/product-set.png" },
  { id: 5, title: "Kids Electric Car", price: 960, discount: 0, rating: 5, reviews: 65, isNew: true, colors: ["#DB4444", "#FF0000"], image: "/shop/kids-car.png" },
  { id: 6, title: "Jr. Zoom Soccer Cleats", price: 1160, discount: 0, rating: 5, reviews: 35, colors: ["#EEFF00", "#DB4444"], image: "/shop/soccer.png" },
  { id: 7, title: "GP11 Shooter USB Gamepad", price: 660, discount: 0, rating: 4.5, reviews: 55, isNew: true, colors: ["#000000", "#DB4444"], image: "/shop/usb-gampad.png" },
  { id: 8, title: "Quilted Satin Jacket", price: 660, discount: 0, rating: 4.5, reviews: 55, colors: ["#184A48", "#DB4444"], image: "/shop/jacket.png" },
//   // ... duplicates for demo
  { id: 9, title: "Keyboard - RGB", price: 100, discount: 0, rating: 3, reviews: 35, image: "/shop/keyboard.png" },
  { id: 10, title: "Kids Coat", price: 360, discount: 0, rating: 4, reviews: 95, image: "/shop/coat.png" },
];

const ExploreProducts = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);


  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    chunkedProducts.push(products.slice(i, i + 2));
  }

  const customDotStyles = {
    appendDots: (dots: React.ReactNode) => (
      <div style={{ marginTop: "30px" }}> 
        <ul style={{ margin: "0px", padding: "0px", display: "flex", justifyContent: "center", gap: "12px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: i === currentSlide ? "#DB4444" : "#D9D9D9",
          border: i === currentSlide ? "2px solid #DB4444" : "none", 
          opacity: i === currentSlide ? 1 : 0.5,
          transition: "all 0.3s ease"
        }}
      ></div>
    ),
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1, // IMPORTANT: Set rows back to 1. We handle rows manually now.
    arrows: false,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
    responsive: [
      { 
        breakpoint: 1280, 
        settings: { slidesToShow: 3, dots: true, ...customDotStyles } 
      }, 
      { 
        breakpoint: 1024, 
        settings: { slidesToShow: 2, dots: true, ...customDotStyles } 
      }, 
      { 
        breakpoint: 640, 
        settings: { slidesToShow: 1, dots: true, ...customDotStyles } 
      },  
    ],
  };

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  return (
    <section className="mb-20">
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-secondary rounded-sm"></div>
            <span className="text-secondary font-semibold">Our Products</span>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">Explore Our Products</h2>
            
            <div className="hidden md:flex gap-2">
              <button onClick={previous} className="w-[46px] h-[46px] bg-bg-secondary rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <ArrowLeft className="w-5 h-5 text-black" />
              </button>
              <button onClick={next} className="w-[46px] h-[46px] bg-bg-secondary rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Slider Grid */}
        <div className="mx-[-15px]"> 
          <Slider ref={sliderRef} {...settings}>
            {/* 2. SOLVED: Map through the CHUNKED pairs */}
            {chunkedProducts.map((pair, index) => (
              <div key={index} className="px-[15px]">
                {/* 3. SOLVED: This Flex Column acts as the "Row" logic.
                   'gap-8' creates a physical space between the top and bottom card.
                   If the top card grows (colors/new tag), it simply pushes the bottom one down.
                */}
                <div className="flex flex-col gap-8 pb-4">
                  {/* Top Card */}
                  <ProductCard product={pair[0]} />
                  
                  {/* Bottom Card (Conditional check in case of odd total numbers) */}
                  {pair[1] && <ProductCard product={pair[1]} />}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <button className="bg-btn-red text-white px-12 py-4 rounded hover:bg-btn-hover-red transition font-medium">
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExploreProducts;