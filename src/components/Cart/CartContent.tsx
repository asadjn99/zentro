"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react"; 

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartContent = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/shop/monitor.png" }, 
    { id: 2, name: "H1 Gamepad", price: 550, quantity: 2, image: "/shop/gamepad.png" },
  ]);

  // FIX: Derived state. No useState or useEffect needed.
  // This calculates the total automatically every time the component renders.
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleQuantityChange = (id: number, value: number) => {
    if (value < 1) return; 
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: value } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="container-custom pt-10 pb-20">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
        <span>Home</span>
        <span>/</span>
        <span className="text-black font-medium">Cart</span>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 bg-white shadow-sm border border-gray-100 rounded-[4px] py-6 px-4 sm:px-10 mb-10 text-black font-medium text-sm sm:text-base">
        <span className="col-span-1">Product</span>
        <span className="col-span-1 text-center">Price</span>
        <span className="col-span-1 text-center">Quantity</span>
        <span className="col-span-1 text-right">Subtotal</span>
      </div>

      {/* Cart Rows */}
      <div className="flex flex-col gap-6 mb-10">
        {cartItems.map((item) => (
          <div 
            key={item.id} 
            className="grid grid-cols-4 items-center bg-white shadow-sm border border-gray-100 rounded-[4px] py-6 px-4 sm:px-10 text-sm sm:text-base"
          >
            
            {/* Column 1: Product */}
            <div className="col-span-1 flex flex-col sm:flex-row items-center gap-4 text-left">
              <div className="relative group">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                   <Image src={item.image} alt={item.name} fill className="object-contain" />
                </div>
                
                <button 
                  onClick={() => handleRemoveItem(item.id)}
                  className="absolute -top-2 -left-2 bg-btn-red text-white rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-600 transition shadow-md"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
              <span className="truncate max-w-[100px] sm:max-w-none">{item.name}</span>
            </div>

            {/* Column 2: Price */}
            <span className="col-span-1 text-center">${item.price}</span>

            {/* Column 3: Quantity */}
            <div className="col-span-1 flex justify-center">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                className="w-16 border border-gray-300 rounded px-2 py-1 outline-none focus:border-secondary text-center"
              />
            </div>

            {/* Column 4: Subtotal Row */}
            <span className="col-span-1 text-right font-medium">
              ${item.price * item.quantity}
            </span>

          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-20">
        <Link href="/">
          <button className="border border-gray-400 bg-white text-black px-8 py-3 rounded-[4px] font-medium hover:bg-black hover:text-white transition w-full sm:w-auto">
            Return To Shop
          </button>
        </Link>
        <button className="border border-gray-400 bg-white text-black px-8 py-3 rounded-[4px] font-medium hover:bg-black hover:text-white transition w-full sm:w-auto">
          Update Cart
        </button>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        
        {/* Coupon */}
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <input 
            type="text" 
            placeholder="Coupon Code" 
            className="border border-gray-300 rounded-[4px] px-6 py-3 outline-none focus:border-black w-full sm:w-[300px]"
          />
          <button className="bg-btn-red text-white px-8 py-3 rounded-[4px] hover:bg-btn-hover-red transition font-medium whitespace-nowrap">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="w-full lg:w-[470px] border border-black rounded-[4px] p-8">
          <h3 className="text-xl font-medium mb-6">Cart Total</h3>
          
          <div className="flex flex-col gap-4">
            <div className="flex justify-between border-b border-gray-300 pb-4 text-sm">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 pb-4 text-sm">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between pb-4 text-base font-medium">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
          </div>


            <div className="flex justify-center mt-4">
            <Link href="/checkout">
                <button className="bg-btn-red text-white px-10 py-4 rounded-[4px] hover:bg-btn-hover-red transition font-medium">
                Proceed to checkout  {/* Fixed typo from 'Procees' */}
                </button>
            </Link>
            </div>
        </div>

      </div>

    </div>
  );
};

export default CartContent;