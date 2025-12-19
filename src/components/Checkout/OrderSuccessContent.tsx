"use client";

import Link from "next/link";
import { CheckCircle, ShoppingBag } from "lucide-react";

const OrderSuccessContent = () => {
  return (
    <div className="container-custom pt-20 pb-20 flex flex-col items-center justify-center text-center">
      
      {/* Icon with animation effect */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-75"></div>
        <div className="relative bg-white p-4 rounded-full">
           <CheckCircle className="w-24 h-24 text-btn-green" />
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-medium tracking-wide mb-4">Thank you for your order!</h1>
      <p className="text-gray-500 max-w-[500px] mb-10 text-sm sm:text-base">
        Your order has been placed successfully. We have sent an email to <span className="font-medium text-black">asadjn99@gmail.com</span> with your order details.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* View Order Button */}
        <Link href="/account">
           <button className="border border-gray-300 text-black px-10 py-4 rounded-[4px] hover:bg-black hover:text-white transition font-medium flex items-center justify-center gap-2">
             <ShoppingBag className="w-5 h-5" />
             View Order
           </button>
        </Link>

        {/* Continue Shopping Button */}
        <Link href="/shop">
           <button className="bg-btn-red text-white px-12 py-4 rounded-[4px] hover:bg-btn-hover-red transition font-medium">
             Continue Shopping
           </button>
        </Link>
      </div>

    </div>
  );
};

export default OrderSuccessContent;