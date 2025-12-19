import Image from "next/image";
import CircularTimer from "./CircularTimer";

const MusicExperienceBanner = () => {
  return (
    <section className="mb-20">
      <div className="container-custom">
        
        <div className="w-full bg-black rounded-[4px] p-4 sm:p-10 lg:p-14">
          
          {/* Added items-center for mobile vertical alignment */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
            
            {/* Left Side - Text Content */}
            <div className="flex flex-col gap-8 flex-1 items-center text-center lg:items-start lg:text-left w-full">
              <span className="text-btn-green font-medium text-sm">Categories</span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-white leading-snug tracking-wide w-full max-w-[400px]">
                Enhance Your Music Experience
              </h2>

              {/* Insert Circular Timer */}
              <div className="mt-2 w-full flex justify-center lg:justify-start">
                 <CircularTimer />
              </div>

              {/* Green Buy Now Button */}
              <button className="bg-btn-green text-white px-10 py-4 rounded hover:opacity-90 transition font-medium mt-4">
                Buy Now!
              </button>
            </div>

            {/* Right Side - Product Image */}
            {/* lg:justify-end pushes the image to the right on desktop */}
            <div className="flex-1 relative w-full flex justify-center lg:justify-end items-center">
              
              {/* UPDATED DIMENSIONS:
                 - Mobile (default): w-full max-w-[320px] h-[240px] (Safe against overflow, good size)
                 - Tablet (sm): sm:w-[480px] sm:h-[340px] (Proportional increase)
                 - Desktop (lg): lg:w-[580px] lg:h-[420px] (MUCH BIGGER as requested)
              */}
              <div className="relative w-full max-w-[390px] h-[240px] sm:w-[480px] sm:h-[340px] lg:w-[580px] lg:h-[420px] z-10">
                  <Image 
                    src="/shop/speaker.png" 
                    alt="JBL Speaker" 
                    fill
                    className="object-contain drop-shadow-2xl" 
                  />
              </div>
              
              {/* Background Glow (Hidden on mobile) */}
              {/* Increased glow size slightly to match bigger image */}
              <div className="absolute w-[350px] h-[350px] bg-white opacity-30 blur-[100px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicExperienceBanner;