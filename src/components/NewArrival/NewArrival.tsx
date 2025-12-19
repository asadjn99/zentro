import Link from "next/link";
import Image from "next/image";

// FIX: ContentBlock is now defined OUTSIDE the main component
const ContentBlock = ({ title, description }: { title: string; description: string }) => (
  <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-20 flex flex-col gap-2 sm:gap-4">
    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">{title}</h3>
    <p className="text-xs sm:text-sm text-gray-300 max-w-[250px]">{description}</p>
    <Link 
      href="/shop" 
      className="text-white text-sm sm:text-base font-medium underline hover:opacity-80 transition-opacity w-fit"
    >
      Shop Now
    </Link>
  </div>
);

const NewArrival = () => {
  return (
    <section className="mb-20">
      <div className="container-custom">
        
        {/* 1. Section Header */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-secondary rounded-sm"></div>
            <span className="text-secondary font-semibold">Featured</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide">New Arrival</h2>
        </div>

        {/* 2. Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-8 h-auto lg:h-[500px]">
          
          {/* Item 1: PlayStation 5 (Large Left Block) */}
          <div className="relative bg-black rounded-[4px] overflow-hidden lg:col-span-2 lg:row-span-2 h-[300px] sm:h-[400px] lg:h-full">
            <Image 
              src="/shop/playstation.png" 
              alt="PlayStation 5" 
              fill 
              className="object-fill opacity-80"
            />
            <ContentBlock 
              title="PlayStation 5" 
              description="Black and White version of the PS5 coming out on sale." 
            />
          </div>

          {/* Item 2: Women's Collections (Top Right, Wide Block) */}
          <div className="relative bg-black rounded-[4px] overflow-hidden lg:col-span-2 h-[250px] sm:h-[300px] lg:h-full">
            <Image 
              src="/shop/women.png" 
              alt="Women's Collections" 
              fill 
              className="object-fill opacity-80"
            />
            <ContentBlock 
              title="Women’s Collections" 
              description="Featured woman collections that give you another vibe." 
            />
          </div>

          {/* Item 3: Speakers (Bottom Right, Left Small Block) */}
          <div className="relative bg-black rounded-[4px] overflow-hidden h-[250px] sm:h-[300px] lg:h-full">
            <Image 
              src="/shop/amazon-speaker.png" 
              alt="Speakers" 
              fill 
              className="object-fill opacity-80"
            />
            <ContentBlock 
              title="Speakers" 
              description="Amazon wireless speakers" 
            />
          </div>

          {/* Item 4: Perfume (Bottom Right, Right Small Block) */}
          <div className="relative bg-black rounded-[4px] overflow-hidden h-[250px] sm:h-[300px] lg:h-full">
            <Image 
              src="/shop/perfume.png" 
              alt="Perfume" 
              fill 
              className="object-fill opacity-80"
            />
            <ContentBlock 
              title="Perfume" 
              description="GUCCI INTENSE OUD EDP" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewArrival;