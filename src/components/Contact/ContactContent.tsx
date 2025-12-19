"use client";

import { Phone, Mail } from "lucide-react";

const ContactContent = () => {
  return (
    <div className="container-custom pt-10 pb-20">
      
      {/* 1. Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
        <span >Home</span>
        <span>/</span>
        <span className="text-black font-medium">Contact</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 2. Left Side - Contact Info Panel */}
        <div className="bg-white shadow-sm border border-gray-100 rounded-[4px] p-6 sm:p-8 flex flex-col justify-between h-full">
          
          {/* Call To Us Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium">Call To Us</h3>
            </div>
            <div className="flex flex-col gap-2 text-sm text-black">
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +92-3075993029</p>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-gray-300 my-8" />

          {/* Write To Us Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-medium">Write To Us</h3>
            </div>
            <div className="flex flex-col gap-2 text-sm text-black">
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@zentro.com</p>
              <p>Emails: support@ezentr.com</p>
            </div>
          </div>

        </div>

        {/* 3. Right Side - Contact Form */}
        <div className="lg:col-span-2 bg-white shadow-sm border border-gray-100 rounded-[4px] p-6 sm:p-8">
          <form className="flex flex-col gap-8">
            
            {/* Input Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="Your Name *" 
                className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition"
                required
              />
              <input 
                type="email" 
                placeholder="Your Email *" 
                className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition"
                required
              />
              <input 
                type="tel" 
                placeholder="Your Phone *" 
                className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition"
                required
              />
            </div>

            {/* Message Textarea */}
            <textarea 
              placeholder="Your Message" 
              rows={8}
              className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition resize-none"
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button 
                type="submit"
                className="bg-btn-red text-white px-12 py-4 rounded-[4px] hover:bg-btn-hover-red transition font-medium text-sm"
              >
                Send Massage
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactContent;