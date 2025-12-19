"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart, Minus, Plus, Truck, RefreshCcw } from "lucide-react";
import ProductCard from "../Product/ProductCard";

const ProductDetailsContent = () => {
  // --- MOCK DATA ---
  const product = {
    title: "Havic HV G-92 Gamepad",
    rating: 4.0,
    reviews: 150,
    availability: "In Stock",
    price: 192.00,
    description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    colors: ["#A0BCE0", "#E07575"], // Blue, Red
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "/shop/gamepad.png", // Main image
      "/shop/gamepad.png",
      "/shop/gamepad.png",
      "/shop/gamepad.png",
    ]
  };

  const relatedProducts = [
    { id: 1, title: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: 40, rating: 5, reviews: 88, image: "/shop/gamepad.png" },
    { id: 2, title: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: 35, rating: 4, reviews: 75, image: "/shop/keyboard.png" },
    { id: 3, title: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: 30, rating: 5, reviews: 99, image: "/shop/monitor.png" },
    { id: 4, title: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, discount: 0, rating: 4.5, reviews: 65, image: "/shop/cooler.png" },
  ];
  // -----------------

  // State
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // Default to 'M'
  const [quantity, setQuantity] = useState(1);

  // Handlers
  const handleQuantityChange = (type: "inc" | "dec") => {
    if (type === "inc") setQuantity(prev => prev + 1);
    if (type === "dec" && quantity > 1) setQuantity(prev => prev - 1);
  };

  return (
    <div className="container-custom pt-10 pb-20">
      
      {/* 1. Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
        {/* <Link href="/" className="opacity-50 hover:opacity-100 transition">Account</Link>
        <span>/</span> */}
        <Link href="/" className="opacity-50 hover:opacity-100 transition">Home</Link>
        <span>/</span>
        <span className="text-black font-medium truncate">{product.title}</span>
      </div>

      {/* 2. Main Product Section */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-20">
        
        {/* Left: Image Gallery */}
        <div className="flex-1 flex flex-col-reverse lg:flex-row gap-4">
          {/* Thumbnails (Vertical on desktop, horizontal on mobile) */}
          <div className="flex lg:flex-col gap-4">
            {product.images.map((img, index) => (
              <div 
                key={index} 
                onClick={() => setMainImage(img)}
                className={`relative w-20 h-20 lg:w-32 lg:h-32 bg-bg-secondary rounded-[4px] cursor-pointer border-2 transition-all ${mainImage === img ? 'border-black' : 'border-transparent'}`}
              >
                <Image src={img} alt={`Thumbnail ${index}`} fill className="object-contain p-2" />
              </div>
            ))}
          </div>
          {/* Main Image */}
          <div className="relative flex-1 h-[300px] sm:h-[400px] lg:h-[500px] bg-bg-secondary rounded-[4px] flex items-center justify-center overflow-hidden">
             <Image src={mainImage} alt={product.title} fill className="object-contain p-8" />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Title & Rating */}
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold tracking-wide">{product.title}</h1>
            <div className="flex items-center gap-4 text-sm">
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-[#FFAD33] text-[#FFAD33]" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-gray-500">({product.reviews} Reviews)</span>
              <span className="text-gray-300">|</span>
              <span className="text-btn-green font-medium">{product.availability}</span>
            </div>
          </div>

          {/* Price */}
          <div className="text-2xl font-medium">${product.price.toFixed(2)}</div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed border-b border-gray-300 pb-6">
            {product.description}
          </p>

          {/* Colors */}
          <div className="flex items-center gap-6">
            <span className="text-lg font-medium">Colours:</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full cursor-pointer border-2 flex items-center justify-center ${selectedColor === color ? "border-black" : "border-transparent"}`}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex items-center gap-6">
            <span className="text-lg font-medium">Size:</span>
            <div className="flex items-center gap-2">
              {product.sizes.map((size, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded-[4px] border flex items-center justify-center text-sm font-medium cursor-pointer transition-all ${selectedSize === size ? "bg-btn-red text-white border-btn-red" : "border-gray-300 hover:border-black"}`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-4">
            {/* Quantity Counter */}
            <div className="flex items-center border border-gray-300 rounded-[4px]">
              <button onClick={() => handleQuantityChange("dec")} className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 border-r border-gray-300 transition">
                <Minus className="w-4 h-4" />
              </button>
              <div className="w-16 h-10 flex items-center justify-center font-medium text-lg">
                {quantity}
              </div>
              <button onClick={() => handleQuantityChange("inc")} className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 border-l border-gray-300 transition">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Buy Now Button */}
            <button className="bg-btn-red text-white px-10 py-3 rounded-[4px] hover:bg-btn-hover-red transition font-medium">
              Buy Now
            </button>

            {/* Wishlist Button */}
            <button className="w-10 h-10 border border-gray-300 rounded-[4px] flex items-center justify-center hover:bg-gray-100 transition">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery Info Box */}
          <div className="border border-gray-300 rounded-[4px] mt-4 divide-y divide-gray-300">
            {/* Free Delivery */}
            <div className="flex items-center gap-4 p-4">
              <Truck className="w-7 h-7 text-black" />
              <div className="flex flex-col">
                <h3 className="font-medium">Free Delivery</h3>
                <Link href="#" className="text-xs underline font-medium">Enter your postal code for Delivery Availability</Link>
              </div>
            </div>
            {/* Return Delivery */}
            <div className="flex items-center gap-4 p-4">
              <RefreshCcw className="w-7 h-7 text-black" />
              <div className="flex flex-col">
                <h3 className="font-medium">Return Delivery</h3>
                <p className="text-xs">Free 30 Days Delivery Returns. <Link href="#" className="underline font-medium">Details</Link></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Related Items Section */}
      <div className="flex flex-col gap-10">
        {/* Header with Red Block */}
        <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-secondary rounded-sm"></div>
            <h2 className="text-xl font-medium text-secondary">Related Item</h2>
         </div>
         
         {/* Related Products Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((item) => (
              <div key={item.id} className="w-full flex justify-center">
                {/* Use the new isRelated prop for white background styling */}
                <ProductCard product={item} isRelated={true} showAddToCart={true} /> 
              </div>
            ))}
         </div>
      </div>

    </div>
  );
};

export default ProductDetailsContent;