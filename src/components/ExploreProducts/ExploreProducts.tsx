"use client";

import Link from "next/link";
import ProductCard from "../Product/ProductCard";

// Mock Data
const products = [
  { id: 1, title: "Breed Dry Dog Food", price: 100, discount: 0, rating: 3, reviews: 35, image: "/shop/dog-food.png" },
  { id: 2, title: "CANON EOS DSLR Camera", price: 360, discount: 0, rating: 4, reviews: 95, image: "/shop/dslr-camera.png" },
  { id: 3, title: "ASUS FHD Gaming Laptop", price: 700, discount: 0, rating: 5, reviews: 325, image: "/shop/laptop.png" },
  { id: 4, title: "Curology Product Set", price: 500, discount: 0, rating: 4, reviews: 145, image: "/shop/product-set.png" },
  { id: 5, title: "Kids Electric Car", price: 960, discount: 0, rating: 5, reviews: 65, isNew: true, colors: ["#DB4444", "#FF0000"], image: "/shop/kids-car.png" },
  { id: 6, title: "Jr. Zoom Soccer Cleats", price: 1160, discount: 0, rating: 5, reviews: 35, colors: ["#EEFF00", "#DB4444"], image: "/shop/soccer.png" },
  { id: 7, title: "GP11 Shooter USB Gamepad", price: 660, discount: 0, rating: 4.5, reviews: 55, isNew: true, colors: ["#000000", "#DB4444"], image: "/shop/usb-gampad.png" },
  { id: 8, title: "Quilted Satin Jacket", price: 660, discount: 0, rating: 4.5, reviews: 55, colors: ["#184A48", "#DB4444"], image: "/shop/jacket.png" },
];

const ExploreProducts = () => {
  return (
    <section className="mb-20">
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-secondary rounded-sm"></div>
            <span className="text-secondary font-semibold">Our Products</span>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">Explore Our Products</h2>
          </div>
        </div>

        {/* Product Grid */}
        {/* Mobile: 1 Col | Tablet: 2 Cols | Desktop: 4 Cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center sm:justify-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 flex justify-center">
          <Link href="/shop">
            <button className="bg-btn-red text-white px-12 py-4 rounded hover:bg-btn-hover-red transition font-medium">
              View All Products
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ExploreProducts;