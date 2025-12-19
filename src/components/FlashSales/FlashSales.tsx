"use client";

import Link from "next/link";
import CountdownTimer from "./CountdownTimer";
import ProductCard from "../Product/ProductCard";

// Mock Data
const products = [
  { id: 1, title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: 40, rating: 5, reviews: 88, image: "/shop/gamepad.png" },
  { id: 2, title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: 35, rating: 4, reviews: 75, image: "/shop/keyboard.png" },
  { id: 3, title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: 30, rating: 5, reviews: 99, image: "/shop/monitor.png" },
  { id: 4, title: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: 25, rating: 4, reviews: 99, image: "/shop/chair.png" },
  // Note: I limited this to 4 items for a perfect row. 
  // If you add more, they will simply wrap to the next line nicely.
];

const FlashSales = () => {
  return (
    <section className="mt-10 sm:mt-20 mb-10">
      <div className="container-custom">
        
        {/* 1. Section Header */}
        <div className="flex flex-col gap-6 mb-10">
          
          {/* Red Tag */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-secondary rounded-sm"></div>
            <span className="text-secondary font-semibold">Today&apos;s</span>
          </div>

          {/* Title & Timer */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-14 md:gap-20">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide">Flash Sales</h2>
              <CountdownTimer />
            </div>
          </div>
        </div>

        {/* 2. Product Grid (Replaced Slider) */}
        {/* Mobile: 1 Col | Small Tablet: 2 Col | Laptop: 3 Col | Desktop: 4 Col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((item) => (
            <div key={item.id} className="flex justify-center sm:justify-start">
              <ProductCard product={item} />
            </div>
          ))}
        </div>

        {/* 3. Bottom Button */}
        <div className="mt-14 flex justify-center pb-14 border-b border-gray-200">
          <Link href="/shop">
            <button className="bg-btn-red text-white px-12 py-4 rounded hover:bg-btn-hover-red transition font-medium">
              View All Products
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FlashSales;