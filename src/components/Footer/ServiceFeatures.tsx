"use client";
import Image from "next/image";
import { ArrowUp } from "lucide-react"; // Importing ArrowUp for the scroll button

const services = [
  {
    id: 1,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: "/icons/delivery.png", // Replace with your icon path
  },
  {
    id: 2,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: "/icons/customer.png", 
  },
  {
    id: 3,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: "/icons/secure.png", 
  },
];

const ServiceFeatures = () => {
  // Simple scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 mb-10">
      <div className="container-custom relative">
        
        {/* Service Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          {services.map((service) => (
            <div key={service.id} className="flex flex-col items-center text-center gap-4">
              
              {/* Icon Container (Circle in Circle Design) */}
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center border-[10px] border-gray-200">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <div className="relative w-8 h-8">
                    <Image 
                      src={service.icon} 
                      alt={service.title} 
                      fill 
                      className="object-contain invert brightness-0" // Makes black icons white
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-sm sm:text-base text-black uppercase">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll To Top Button (Absolute Positioned to Right) */}
        {/* Only visible on larger screens usually, but we can keep it for all */}
        <div className="flex justify-end mt-10 md:mt-0 md:absolute md:bottom-0 md:right-0">
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition shadow-sm"
          >
            <ArrowUp className="w-5 h-5 text-black" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServiceFeatures;