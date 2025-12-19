"use client";

import { useState } from "react";
import ProductCard from "../Product/ProductCard";

const WishlistContent = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, title: "Gucci duffle bag", price: 960, oldPrice: 1160, discount: 35, rating: 4.5, reviews: 65, image: "/shop/bag.png" },
    { id: 2, title: "RGB liquid CPU Cooler", price: 1960, discount: 0, rating: 4.5, reviews: 65, image: "/shop/cooler.png" },
    { id: 3, title: "GP11 Shooter USB Gamepad", price: 550, discount: 0, rating: 4.5, reviews: 65, image: "/shop/gamepad.png" },
    { id: 4, title: "Quilted Satin Jacket", price: 750, discount: 0, rating: 4.5, reviews: 65, image: "/shop/jacket.png" },
  ]);

  const justForYouItems = [
    { id: 5, title: "ASUS FHD Gaming Laptop", price: 960, oldPrice: 1160, discount: 35, rating: 5, reviews: 65, image: "/shop/laptop.png", isNew: true },
    { id: 6, title: "IPS LCD Gaming Monitor", price: 1160, discount: 0, rating: 5, reviews: 65, image: "/shop/monitor.png" },
    { id: 7, title: "HAVIT HV-G92 Gamepad", price: 560, discount: 0, rating: 5, reviews: 65, image: "/shop/gamepad.png", isNew: true },
    { id: 8, title: "AK-900 Wired Keyboard", price: 200, discount: 0, rating: 5, reviews: 65, image: "/shop/keyboard.png" },
  ];

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveAllToBag = () => {
    alert("All items moved to bag!");
  };

  return (
    <div className="container-custom pt-20 pb-20">
      
      {/* 1. Wishlist Header (Plain Text) */}
      <div className="flex items-center justify-between mb-14">
        <h2 className="text-xl font-medium">Wishlist ({wishlistItems.length})</h2>
        <button 
          onClick={moveAllToBag}
          className="border border-gray-400 bg-white text-black px-10 py-3 rounded-[4px] font-medium hover:bg-gray-50 transition"
        >
          Move All To Bag
        </button>
      </div>

      {/* 2. Wishlist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {wishlistItems.map((item) => (
          <div key={item.id} className="w-full flex justify-center">
            <ProductCard 
              product={item} 
              isWishlist={true} 
              onRemove={() => removeFromWishlist(item.id)}
              showAddToCart={true} // Forces the black 'Add To Cart' bar to be visible
            />
          </div>
        ))}
      </div>

      {/* 3. Just For You Header (With Red Block) */}
      <div className="flex items-center justify-between mb-14">
         <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-secondary rounded-sm"></div>
            <h2 className="text-xl font-medium">Just For You</h2>
         </div>
         <button className="border border-gray-400 bg-white text-black px-10 py-3 rounded-[4px] font-medium hover:bg-gray-50 transition">
           See All
         </button>
      </div>

      {/* Just For You Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {justForYouItems.map((item) => (
          <div key={item.id} className="w-full flex justify-center">
            {/* showAddToCart={true} makes the buttons static as seen in the image */}
            <ProductCard product={item} showAddToCart={true} /> 
          </div>
        ))}
      </div>

    </div>
  );
};

export default WishlistContent;