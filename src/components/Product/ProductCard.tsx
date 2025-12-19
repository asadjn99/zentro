import Image from "next/image";
import { Heart, Eye, Star, Trash2, ShoppingCart } from "lucide-react"; // Import ShoppingCart

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

const ProductCard = ({ 
  product, 
  isWishlist = false, 
  onRemove,
  showAddToCart = false // New prop to force the button to be visible
}: { 
  product: ProductProps; 
  isWishlist?: boolean;
  onRemove?: () => void;
  showAddToCart?: boolean; 
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

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isWishlist ? (
             // Wishlist Mode: Trash Icon
             <button 
               onClick={onRemove}
               className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition"
             >
               <Trash2 className="w-4 h-4" />
             </button>
          ) : (
             // Default Mode: Heart & Eye
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
        <div className="relative w-[170px] h-[150px] mb-8"> {/* Added margin-bottom to clear the button */}
          <Image src={product.image} alt={product.title} fill className="object-contain" />
        </div>

        {/* Add To Cart Button - Matches Image Design */}
        <button 
          className={`
            absolute bottom-0 w-full bg-black text-white py-2.5 text-xs font-medium flex items-center justify-center gap-2 transition-opacity duration-300
            ${showAddToCart ? "opacity-100" : "opacity-0 group-hover:opacity-100"} 
          `}
        >
          <ShoppingCart className="w-5 h-5" />
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
        
        {/* Rating - Hidden on Wishlist items, Visible on 'Just For You' */}
        {!isWishlist && (
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
        )}
      </div>
    </div>
  );
};

export default ProductCard;