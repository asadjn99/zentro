"use client";

import ProductCard from "../Product/ProductCard";

// Mock Data for Best Selling
const bestSellingProducts = [
  { 
    id: 1, 
    title: "The north coat", 
    price: 260, 
    oldPrice: 360, 
    discount: 0, 
    rating: 5, 
    reviews: 65, 
    image: "/shop/coat.png" 
  },
  { 
    id: 2, 
    title: "Gucci duffle bag", 
    price: 960, 
    oldPrice: 1160, 
    discount: 0, 
    rating: 4.5, 
    reviews: 65, 
    image: "/shop/bag.png" 
  },
  { 
    id: 3, 
    title: "RGB liquid CPU Cooler", 
    price: 160, 
    oldPrice: 170, 
    discount: 0, 
    rating: 4.5, 
    reviews: 65, 
    image: "/shop/cooler.png" 
  },
  { 
    id: 4, 
    title: "Small BookSelf", 
    price: 360, 
    oldPrice: 0, 
    discount: 0, 
    rating: 5, 
    reviews: 65, 
    image: "/shop/shelf.png" 
  },
];

const BestSellingSection = () => {
  return (
    <section className="mb-20">
      <div className="container-custom">
        
        {/* 1. Section Header */}
        <div className="flex flex-col gap-6 mb-10">
          
          {/* Red Tag */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-secondary rounded-sm"></div>
            <span className="text-secondary font-semibold">This Month</span>
          </div>

          {/* Title & View All Button */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-2xl lg:text-4xl font-semibold tracking-wide">
              Best Selling Products
            </h2>
            
            <button className="bg-btn-red text-white px-4 md:px-8 py-2 md:py-3 rounded hover:bg-btn-hover-red transition text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        {/* 2. Product Grid */}
        {/* Changed gap-8 to gap-[30px]. 
            Math: (1170px container - 90px gap) / 4 = 270px per card.
            This matches the ProductCard's max-w-[270px] exactly. 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {bestSellingProducts.map((product) => (
            <div key={product.id} className="w-full">
               <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSellingSection;