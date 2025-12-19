"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // 1. Import useRouter




const CheckoutContent = () => {
  const router = useRouter(); // 2. Initialize router
  const cartItems = [
    { id: 1, name: "LCD Monitor", price: 650, image: "/shop/monitor.png" },
    { id: 2, name: "H1 Gamepad", price: 1100, image: "/shop/gamepad.png" },
  ];

  const subtotal = 1750;
  const shipping = "Free";
  const total = 1750;

  const [paymentMethod, setPaymentMethod] = useState("cod"); // Default to Cash on Delivery

const handlePlaceOrder = () => {
    // In a real app, We would validate forms and send data to backend ... ham dlat
    router.push("/checkout/success");
  };


  return (
    <div className="container-custom pt-10 pb-20">
      
      {/* 1. Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
        <Link href="/" className="opacity-50 hover:opacity-100 transition">
          Home
        </Link>
        <span>/</span>
        <Link href="/cart" className="opacity-50 hover:opacity-100 transition">
          Cart
        </Link>
        <span>/</span>
        <span className="text-black font-medium">CheckOut</span>
      </div>

      <h1 className="text-3xl font-medium tracking-wide mb-10">Billing Details</h1>

      <div className="flex flex-col lg:flex-row gap-20 items-start">
        
        {/* --- LEFT COLUMN: BILLING FORM --- */}
        <div className="flex-1 w-full flex flex-col gap-8">
          
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm">First Name<span className="text-btn-red">*</span></label>
            <input type="text" className="w-full bg-gray-100 rounded-[4px] h-[50px] px-4 outline-none focus:ring-1 focus:ring-gray-300 transition" required />
          </div>

          {/* Company Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm">Company Name</label>
            <input type="text" className="w-full bg-gray-100 rounded-[4px] h-[50px] px-4 outline-none focus:ring-1 focus:ring-gray-300 transition" />
          </div>

          {/* Street Address */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm">Street Address<span className="text-btn-red">*</span></label>
            <input type="text" className="w-full bg-gray-100 rounded-[4px] h-[50px] px-4 outline-none focus:ring-1 focus:ring-gray-300 transition" required />
          </div>

          {/* Apartment */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm">Apartment, floor, etc. (optional)</label>
            <input type="text" className="w-full bg-gray-100 rounded-[4px] h-[50px] px-4 outline-none focus:ring-1 focus:ring-gray-300 transition" />
          </div>

          {/* Town/City */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm">Town/City<span className="text-btn-red">*</span></label>
            <input type="text" className="w-full bg-gray-100 rounded-[4px] h-[50px] px-4 outline-none focus:ring-1 focus:ring-gray-300 transition" required />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm">Phone Number<span className="text-btn-red">*</span></label>
            <input type="tel" className="w-full bg-gray-100 rounded-[4px] h-[50px] px-4 outline-none focus:ring-1 focus:ring-gray-300 transition" required />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm">Email Address<span className="text-btn-red">*</span></label>
            <input type="email" className="w-full bg-gray-100 rounded-[4px] h-[50px] px-4 outline-none focus:ring-1 focus:ring-gray-300 transition" required />
          </div>

          {/* Save Info Checkbox */}
          <div className="flex items-center gap-4 mt-2">
            <div className="relative flex items-center">
              <input 
                type="checkbox" 
                id="save-info" 
                className="peer h-6 w-6 cursor-pointer appearance-none rounded border border-gray-300 checked:bg-btn-red checked:border-btn-red transition-all"
              />
              <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white" viewBox="0 0 14 14" fill="none">
                <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <label htmlFor="save-info" className="text-sm sm:text-base cursor-pointer select-none">
              Save this information for faster check-out next time
            </label>
          </div>

        </div>

        {/* --- RIGHT COLUMN: ORDER SUMMARY --- */}
        <div className="flex-1 w-full max-w-[500px] flex flex-col gap-8 mt-10 lg:mt-0">
          
          {/* Product List */}
          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12">
                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                  </div>
                  <span className="text-sm sm:text-base">{item.name}</span>
                </div>
                <span className="text-sm sm:text-base">${item.price}</span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
            <div className="flex justify-between text-sm sm:text-base">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-sm sm:text-base">
              <span>Shipping:</span>
              <span>{shipping}</span>
            </div>
          </div>
          <div className="flex justify-between text-base font-medium">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col gap-4">
            
            {/* 1. Bank Option */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <input 
                    type="radio" 
                    name="payment" 
                    id="bank" 
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    className="w-5 h-5 accent-black cursor-pointer" 
                  />
                  <label htmlFor="bank" className="cursor-pointer text-sm sm:text-base">Bank</label>
                </div>
                {/* Payment Logos */}
                <div className="flex gap-2">
                   <div className="w-10 h-6 bg-white border border-gray-200 relative">
                     <Image src="/icons/Visa.png" alt="Visa" fill className="object-contain p-1" />
                   </div>
                   <div className="w-10 h-6 bg-white border border-gray-200 relative">
                     <Image src="/icons/Mastercard.png" alt="Mastercard" fill className="object-contain p-1" />
                   </div>
                </div>
              </div>

              {/* CREDIT CARD DETAILS (Only shows if Bank is selected) */}
              {paymentMethod === "bank" && (
                <div className="flex flex-col gap-3 pl-2 sm:pl-9 transition-all duration-300 ease-in-out">
                  {/* Card Number */}
                  <input 
                    type="text" 
                    placeholder="Card Number" 
                    className="w-full bg-white border border-gray-300 rounded-[4px] px-4 py-2 text-sm outline-none focus:border-black transition" 
                  />
                  
                  {/* Expiry Date & CVC */}
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-1/2 bg-white border border-gray-300 rounded-[4px] px-4 py-2 text-sm outline-none focus:border-black transition" 
                    />
                    <input 
                      type="text" 
                      placeholder="CVC" 
                      maxLength={3}
                      className="w-1/2 bg-white border border-gray-300 rounded-[4px] px-4 py-2 text-sm outline-none focus:border-black transition" 
                    />
                  </div>
                </div>
              )}
            </div>

            {/* 2. Cash On Delivery Option */}
            <div className="flex items-center gap-4">
              <input 
                type="radio" 
                name="payment" 
                id="cod" 
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className="w-5 h-5 accent-black cursor-pointer" 
              />
              <label htmlFor="cod" className="cursor-pointer text-sm sm:text-base">Cash on delivery</label>
            </div>
          </div>

          {/* Coupon Code Row */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <input 
              type="text" 
              placeholder="Coupon Code" 
              className="border border-gray-300 rounded-[4px] px-6 py-3 outline-none focus:border-black w-full"
            />
            <button className="bg-btn-red text-white px-8 py-3 rounded-[4px] hover:bg-btn-hover-red transition font-medium whitespace-nowrap">
              Apply Coupon
            </button>
          </div>

          {/* Place Order Button */}
          <button 
            onClick={handlePlaceOrder}
            className="bg-btn-red text-white w-full sm:w-fit px-12 py-4 rounded-[4px] hover:bg-btn-hover-red transition font-medium mt-4"
          >
            Place Order
          </button>

        </div>
      </div>

    </div>
  );
};

export default CheckoutContent;