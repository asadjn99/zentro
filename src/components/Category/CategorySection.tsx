"use client";

import CategoryCard from "./CategoryCard";

// Mock Data
const categories = [
  { id: 1, label: "Phones", icon: "/category/Cellphone.png" },
  { id: 2, label: "Computers", icon: "/category/Computer.png" },
  { id: 3, label: "SmartWatch", icon: "/category/Smartwatch.png" },
  { id: 4, label: "Camera", icon: "/category/Camera.png", selected: true }, // Highlighted
  { id: 5, label: "HeadPhones", icon: "/category/Headphone.png" },
  { id: 6, label: "Gaming", icon: "/category/Gamepad.png" },
];

const CategorySection = () => {
  return (
    <section className="mb-20 pb-10 border-b border-gray-200">
      <div className="container-custom">
        
        {/* 1. Header Section */}
        <div className="flex flex-col gap-6 mb-10">
          
          {/* Red Tag */}
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-secondary rounded-sm"></div>
            <span className="text-secondary font-semibold">Categories</span>
          </div>

          {/* Title */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">Browse By Category</h2>
          </div>
        </div>

        {/* 2. Category Grid */}
        {/* Mobile: 2 Cols | Tablet: 3 Cols | Desktop: 6 Cols */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="flex justify-center">
              <CategoryCard 
                icon={cat.icon} 
                label={cat.label} 
                selected={cat.selected} 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;