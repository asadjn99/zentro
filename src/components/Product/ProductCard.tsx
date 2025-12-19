import Image from "next/image";
import { Heart, Eye, Star, Trash2 } from "lucide-react"; // Import Trash2

interface ProductProps {
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  discount: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  colors?: string[];
}

// Added 'isWishlist' and 'onRemove' props
const ProductCard = ({ 
  product, 
  isWishlist = false, 
  onRemove 
}: { 
  product: ProductProps; 
  isWishlist?: boolean;
  onRemove?: () => void; 
}) => {
  return (
    <div className="group relative flex flex-col gap-4 max-w-[270px] mx-auto sm:mx-0">
      
      {/* 1. Image Container */}
      <div className="relative w-full h-[250px] bg-bg-secondary rounded-[4px] flex items-center justify-center overflow-hidden cursor-pointer">
        
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-secondary text-white text-xs px-3 py-1 rounded-[4px]">
            -{product.discount}%
          </div>
        )}

        {/* NEW Badge */}
        {product.isNew && product.discount === 0 && (
          <div className="absolute top-3 left-3 bg-btn-green text-white text-xs px-3 py-1 rounded-[4px]">
            NEW
          </div>
        )}

        {/* Action Buttons: Toggle between Default (Heart/Eye) and Wishlist (Trash) */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isWishlist ? (
             // Wishlist Mode: Show Trash Icon
             <button 
               onClick={onRemove}
               className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition"
             >
               <Trash2 className="w-4 h-4" />
             </button>
          ) : (
             // Default Mode: Show Heart & Eye
             <>
               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition">
                 <Heart className="w-4 h-4" />
               </button>
               <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition">
                 <Eye className="w-4 h-4" />
               </button>
             </>
          )}
        </div>

        {/* Product Image */}
        <div className="relative w-[170px] h-[150px]">
          <Image src={product.image} alt={product.title} fill className="object-contain" />
        </div>

        {/* Add To Cart Button */}
        <button className="absolute bottom-0 w-full bg-black text-white py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Add To Cart
        </button>
      </div>

      {/* 2. Product Details */}
      <div className="flex flex-col gap-2">
        <h3 className="font-medium text-black truncate">{product.title}</h3>
        
        <div className="flex gap-3 text-sm">
          <span className="text-secondary font-medium">${product.price}</span>
          {product.oldPrice && product.oldPrice > 0 && (
             <span className="text-gray-400 line-through decoration-gray-400">${product.oldPrice}</span>
          )}
        </div>
        
        {/* Rating / Colors */}
        {!isWishlist && ( // Hide ratings on wishlist page if preferred (optional)
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? "fill-[#FFAD33] text-[#FFAD33]" : "text-gray-300"}`} 
                  />
                ))}
              </div>
              <span className="text-gray-500 text-xs font-semibold">({product.reviews})</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;