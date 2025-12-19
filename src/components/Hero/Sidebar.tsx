import { ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Woman's Fashion", hasSubmenu: true },
  { name: "Men's Fashion", hasSubmenu: true },
  { name: "Electronics", hasSubmenu: false },
  { name: "Home & Lifestyle", hasSubmenu: false },
  { name: "Medicine", hasSubmenu: false },
  { name: "Sports & Outdoor", hasSubmenu: false },
  { name: "Baby's & Toys", hasSubmenu: false },
  { name: "Groceries & Pets", hasSubmenu: false },
  { name: "Health & Beauty", hasSubmenu: false },
];

const Sidebar = () => {
  return (
    // Hidden on mobile/tablet, visible on laptop (lg+)
    // Fixed width, right border for the separator line
    <aside className="hidden lg:flex flex-col w-[230px] border-r border-gray-200 pt-10 pb-4 pr-4">
      <ul className="flex flex-col gap-4">
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between items-center cursor-pointer group">
            <Link href={`/category/${category.name.toLowerCase().replace(/ /g, "-")}`} className="text-sm text-black whitespace-nowrap group-hover:text-text-accent transition">
              {category.name}
            </Link>
            {/* Show arrow only if it has a submenu */}
            {category.hasSubmenu && <ChevronRight className="w-5 h-5 text-black group-hover:text-text-accent transition" />}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;