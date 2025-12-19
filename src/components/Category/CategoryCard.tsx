import Image from "next/image";

interface CategoryCardProps {
  icon: string;
  label: string;
  selected?: boolean;
}

const CategoryCard = ({ icon, label, selected = false }: CategoryCardProps) => {
  return (
    <div
      className={`
        group flex flex-col items-center justify-center gap-2 sm:gap-4 
        /* RESPONSIVE DIMENSIONS: 
           Mobile: 130px width, 120px height
           Tablet/Desktop (sm+): 170px width, 145px height 
        */
        w-[130px] h-[120px] sm:w-[170px] sm:h-[145px]
        border rounded-[4px] cursor-pointer transition-all duration-300
        ${
          selected
            ? "bg-secondary border-secondary text-white" 
            : "bg-white border-gray-300 text-black hover:bg-secondary hover:border-secondary hover:text-white hover:shadow-lg"
        }
      `}
    >
      {/* Icon Container */}
      <div className="relative w-9 h-9 sm:w-14 sm:h-14">
        <Image
          src={icon}
          alt={label}
          fill
          className={`object-contain transition-all duration-300 ${
             selected ? "brightness-0 invert" : "group-hover:brightness-0 group-hover:invert"
          }`}
        />
      </div>

      {/* Label - Responsive Text Size */}
      <span className="text-sm sm:text-base font-medium">{label}</span>
    </div>
  );
};

export default CategoryCard;