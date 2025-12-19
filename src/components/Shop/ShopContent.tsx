"use client";

import Link from "next/link";
import ProductCard from "../Product/ProductCard";
import { useState } from "react";

const ShopContent = () => {
  // Mock Products Data
  const products = [
    { id: 1, title: "Havic HV G-92 Gamepad", price: 120, discount: 40, rating: 5, reviews: 88, image: "/shop/gamepad-red.png" },
    { id: 2, title: "AK-900 Wired Keyboard", price: 960, discount: 35, rating: 4, reviews: 75, image: "/shop/keyboard.png" },
    { id: 3, title: "IPS LCD Gaming Monitor", price: 370, discount: 30, rating: 5, reviews: 99, image: "/shop/monitor.png" },
    { id: 4, title: "RGB liquid CPU Cooler", price: 160, discount: 0, rating: 4.5, reviews: 65, image: "/shop/cooler.png" },
    { id: 5, title: "ASUS FHD Gaming Laptop", price: 700, discount: 0, rating: 5, reviews: 325, image: "/shop/laptop.png" },
    { id: 6, title: "Breed Dry Dog Food", price: 100, discount: 0, rating: 3, reviews: 35, image: "/shop/dog-food.png" },
    { id: 7, title: "Canon EOS DSLR Camera", price: 360, discount: 0, rating: 4, reviews: 95, image: "/shop/camera.png" },
    { id: 8, title: "ASUS FHD Gaming Laptop", price: 700, discount: 0, rating: 5, reviews: 325, image: "/shop/laptop.png" },
    { id: 9, title: "Curology Product Set", price: 500, discount: 0, rating: 4, reviews: 145, image: "/shop/curology.png" },
  ];

  const categories = ["Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"];
  const colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"]; // Black, Red, Green, Blue, Yellow, Purple

  // State for Price Range (Visual only for now)
  const [priceRange, setPriceRange] = useState(1000);

  return (
    <div className="container-custom pt-10 pb-20">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
        <Link href="/" className="opacity-50 hover:opacity-100 transition">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">Shop</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* --- LEFT SIDEBAR: FILTERS --- */}
        <div className="w-full lg:w-[250px] flex flex-col gap-10">
          
          {/* Category Filter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Category</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-600">
              {categories.map((cat, index) => (
                <li key={index} className="flex items-center gap-2 cursor-pointer hover:text-btn-red transition">
                  <input type="checkbox" id={`cat-${index}`} className="accent-btn-red" />
                  <label htmlFor={`cat-${index}`} className="cursor-pointer">{cat}</label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg">Price</h3>
            <div className="flex flex-col gap-2">
               <input 
                 type="range" 
                 min="0" 
                 max="2000" 
                 value={priceRange} 
                 onChange={(e) => setPriceRange(parseInt(e.target.value))}
                 className="w-full accent-btn-red cursor-pointer" 
               />
               <div className="flex justify-between text-sm text-gray-600 font-medium">
                  <span>$0</span>
                  <span>${priceRange}</span>
               </div>
            </div>
          </div>

          {/* Color Filter */}
          <div className="flex flex-col gap-4">
             <h3 className="font-bold text-lg">Colors</h3>
             <div className="flex flex-wrap gap-3">
               {colors.map((color, index) => (
                 <div 
                   key={index} 
                   className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer hover:scale-110 transition shadow-sm"
                   style={{ backgroundColor: color }}
                 ></div>
               ))}
             </div>
          </div>

        </div>

        {/* --- RIGHT SIDE: PRODUCT GRID --- */}
        <div className="flex-1">
          
          {/* Header: Total Products & Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
             <p className="text-gray-500 text-sm">Showing <span className="text-black font-medium">1–9</span> of {products.length} results</p>
             <select className="border border-gray-300 rounded-[4px] px-4 py-2 text-sm outline-none focus:border-black cursor-pointer">
               <option>Sort by: Popularity</option>
               <option>Sort by: Newest</option>
               <option>Sort by: Price Low to High</option>
               <option>Sort by: Price High to Low</option>
             </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {products.map((item) => (
               <div key={item.id} className="flex justify-center">
                 {/* Reusing your existing ProductCard */}
                 <ProductCard product={item} showAddToCart={false} /> 
               </div>
            ))}
          </div>

          {/* Pagination (Static UI) */}
          <div className="flex justify-center mt-14 gap-4">
            <button className="w-10 h-10 border border-gray-300 rounded hover:bg-btn-red hover:text-white hover:border-btn-red transition">1</button>
            <button className="w-10 h-10 border   rounded bg-btn-red text-white border-btn-red">2</button>
            <button className="w-10 h-10 border border-gray-300 rounded hover:bg-btn-red hover:text-white hover:border-btn-red transition">3</button>
            <button className="w-10 h-10 border border-gray-300 rounded hover:bg-btn-red hover:text-white hover:border-btn-red transition">Next</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ShopContent;