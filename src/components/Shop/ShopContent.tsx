"use client";

import Link from "next/link";
import ProductCard from "../Product/ProductCard";
import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react"; // Import Icons

const ShopContent = () => {
  // Mock Products Data
  const products = [
    { id: 1, title: "Havic HV G-92 Gamepad", price: 120, discount: 40, rating: 5, reviews: 88, image: "/shop/gamepad-red.png" },
    { id: 2, title: "AK-900 Wired Keyboard", price: 960, discount: 35, rating: 4, reviews: 75, image: "/shop/keyboard.png" },
    { id: 3, title: "IPS LCD Gaming Monitor", price: 370, discount: 30, rating: 5, reviews: 99, image: "/shop/monitor.png" },
    { id: 4, title: "RGB liquid CPU Cooler", price: 160, discount: 0, rating: 4.5, reviews: 65, image: "/shop/cooler.png" },
    { id: 5, title: "ASUS FHD Gaming Laptop", price: 700, discount: 0, rating: 5, reviews: 325, image: "/shop/laptop.png" },
    { id: 6, title: "Breed Dry Dog Food", price: 100, discount: 0, rating: 3, reviews: 35, image: "/shop/dog-food.png" },
    { id: 7, title: "Canon EOS DSLR Camera", price: 360, discount: 0, rating: 4, reviews: 95, image: "/shop/dslr-camera.png" },
    { id: 8, title: "ASUS FHD Gaming Laptop", price: 700, discount: 0, rating: 5, reviews: 325, image: "/shop/laptop.png" },
    { id: 9, title: "Curology Product Set", price: 500, discount: 0, rating: 4, reviews: 145, image: "/shop/product-set.png" },
  ];

  const categories = ["Woman's Fashion", "Men's Fashion", "Electronics", "Home & Lifestyle", "Medicine", "Sports & Outdoor", "Baby's & Toys", "Groceries & Pets", "Health & Beauty"];
  const colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"]; 

  // State
  const [priceRange, setPriceRange] = useState(1000);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Mobile sidebar state

  return (
    <div className="container-custom pt-6 pb-20">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 sm:mb-10">
        <Link href="/" className="opacity-50 hover:opacity-100 transition">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">Shop</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 relative">
        
        {/* --- MOBILE FILTER TOGGLE BUTTON --- */}
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md w-fit hover:bg-gray-50 transition"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm font-medium">Filters</span>
        </button>

        {/* --- SIDEBAR (Responsive) --- */}
        {/* Overlay for mobile when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        <div className={`
          fixed inset-y-0 left-0 z-50 w-[280px] bg-white p-6 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto
          lg:static lg:transform-none lg:w-[250px] lg:shadow-none lg:p-0 lg:bg-transparent lg:block
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          
          {/* Mobile Header (Close Btn) */}
          <div className="flex justify-between items-center lg:hidden mb-6">
            <h2 className="text-xl font-bold">Filters</h2>
            <button onClick={() => setIsSidebarOpen(false)}>
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          
          <div className="flex flex-col gap-8">
            {/* Category Filter */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">Category</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-600">
                {categories.map((cat, index) => (
                  <li key={index} className="flex items-center gap-2 cursor-pointer hover:text-btn-red transition">
                    <input type="checkbox" id={`cat-${index}`} className="accent-btn-red w-4 h-4 cursor-pointer" />
                    <label htmlFor={`cat-${index}`} className="cursor-pointer select-none">{cat}</label>
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

        </div>

        {/* --- RIGHT SIDE: PRODUCT GRID --- */}
        <div className="flex-1">
          
          {/* Header: Total Products & Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
             <p className="text-gray-500 text-sm">Showing <span className="text-black font-medium">1–9</span> of {products.length} results</p>
             
             <div className="flex items-center gap-2 self-end sm:self-auto">
               <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
               <select className="border border-gray-300 rounded-[4px] px-3 py-2 text-sm outline-none focus:border-black cursor-pointer bg-white">
                 <option>Popularity</option>
                 <option>Newest</option>
                 <option>Price: Low to High</option>
                 <option>Price: High to Low</option>
               </select>
             </div>
          </div>

          {/* Grid: 1 Col Mobile -> 2 Col Tablet -> 3 Col Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {products.map((item) => (
               <div key={item.id} className="flex justify-center sm:justify-start">
                 <ProductCard product={item} showAddToCart={false} /> 
               </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-14 gap-2 sm:gap-4">
            <button className="w-9 h-9 sm:w-10 sm:h-10 text-sm border border-gray-300 rounded hover:bg-btn-red hover:text-white hover:border-btn-red transition">1</button>
            <button className="w-9 h-9 sm:w-10 sm:h-10 text-sm border rounded bg-btn-red text-white border-btn-red">2</button>
            <button className="w-9 h-9 sm:w-10 sm:h-10 text-sm border border-gray-300 rounded hover:bg-btn-red hover:text-white hover:border-btn-red transition">3</button>
            <button className="w-9 h-9 sm:w-10 sm:h-10 text-sm border border-gray-300 rounded hover:bg-btn-red hover:text-white hover:border-btn-red transition px-2 sm:px-0">Next</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ShopContent;