// "use client";

// import Link from "next/link";
// import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
// import { useState } from "react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      
//       {/* LAYOUT STRATEGY:
//          - XL Screens (1280px+): Grid with 230px gutter (Your requested alignment)
//          - LG/MD Screens (1024px): Flexbox with padding (Prevents edge touching)
//       */}
//       <div className="container-custom h-[80px] flex justify-between items-center xl:grid xl:grid-cols-[230px_1fr_auto]">
        
//         {/* 1. Logo */}
//         <Link href="/" className="text-2xl font-bold text-black tracking-wide z-20">
//           Zentro
//         </Link>

//         {/* 2. Desktop Navigation (Hidden on Mobile) */}
//         <nav className="hidden lg:flex items-center gap-10 font-medium text-black xl:justify-start">
//           <Link href="/" className="border-b-2 border-gray-400">Home</Link>
//           <Link href="/contact" className="hover:text-text-accent transition">Contact</Link>
//           <Link href="/about" className="hover:text-text-accent transition">About</Link>
//           <Link href="/signup" className="hover:text-text-accent transition">Sign Up</Link>
//         </nav>

//         {/* 3. Search & Icons */}
//         <div className="flex items-center gap-4 justify-end">
          
//           {/* Desktop Search - Hidden on Mobile, Visible on Tablet/Desktop */}
//           <div className="hidden md:flex items-center bg-bg-secondary px-3 py-2 rounded shadow-sm w-[200px] lg:w-[240px]">
//             <input 
//               type="text" 
//               placeholder="What are you looking for?" 
//               className="bg-transparent outline-none text-xs w-full text-black placeholder:text-gray-500"
//             />
//             <Search className="w-5 h-5 text-black cursor-pointer" />
//           </div>

//           {/* Icons */}
//           <div className="flex items-center gap-4">
//             <button className="hover:text-red-500 transition hidden sm:block">
//               <Heart className="w-6 h-6 text-black" />
//             </button>
//             <button className="hover:text-red-500 transition">
//               <ShoppingCart className="w-6 h-6 text-black" />
//             </button>
            
//             {/* Hamburger Button - Visible only on Mobile/Small Tablet (< lg) */}
//             <button 
//               className="lg:hidden text-black focus:outline-none" 
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 4. Mobile Menu Overlay - Full Width */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white border-t border-gray-200 shadow-xl z-40 flex flex-col p-4">
          
//           {/* Mobile Search Bar (Included as requested) */}
//           <div className="flex items-center bg-bg-secondary px-3 py-2 rounded shadow-sm w-full mb-4">
//             <input 
//               type="text" 
//               placeholder="What are you looking for?" 
//               className="bg-transparent outline-none text-sm w-full text-black placeholder:text-gray-500"
//             />
//             <Search className="w-5 h-5 text-black" />
//           </div>

//           {/* Mobile Links */}
//           <nav className="flex flex-col gap-4 font-medium text-black">
//             <Link href="/" className="py-2 border-b border-gray-100 hover:text-text-accent" onClick={() => setIsMenuOpen(false)}>Home</Link>
//             <Link href="/contact" className="py-2 border-b border-gray-100 hover:text-text-accent" onClick={() => setIsMenuOpen(false)}>Contact</Link>
//             <Link href="/about" className="py-2 border-b border-gray-100 hover:text-text-accent" onClick={() => setIsMenuOpen(false)}>About</Link>
//             <Link href="/signup" className="py-2 hover:text-text-accent" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
//           </nav>

//           {/* Mobile Wishlist (Since we hid it in top bar on very small screens) */}
//           <div className="mt-4 flex items-center gap-2 text-sm font-medium text-black">
//             <Heart className="w-5 h-5" />
//             <span>Wishlist</span>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;







"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook to check current URL
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route (e.g., "/about")

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/auth/signup" },
  ];

  return (
    <header className="border-b border-gray-200 mb-0">
      {/* Top Banner */}
      <div className="bg-black text-white text-xs sm:text-sm py-3 text-center px-4">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="font-bold underline cursor-pointer ml-2">ShopNow</span>
        </p>
      </div>

      {/* Main Navigation */}
      <div className="container-custom py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-black">
          Zentro
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base transition-colors ${
                  isActive 
                    ? "text-black font-medium border-b border-gray-400" // Active Style
                    : "text-black hover:text-gray-600 hover:border-b hover:border-gray-300" // Inactive Style
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Section (Search + Icons) */}
        <div className="flex items-center gap-4">
          {/* Search Bar (Hidden on mobile) */}
          <div className="hidden sm:flex relative bg-gray-100 rounded px-4 py-2">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-transparent outline-none text-sm w-48 placeholder:text-gray-500"
            />
            <Search className="w-5 h-5 text-black cursor-pointer" />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/wishlist">
              <Heart className="w-6 h-6 cursor-pointer hover:text-secondary transition" />
            </Link>
            <Link href="/cart">
              <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-secondary transition" />
            </Link>
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm ${pathname === link.href ? "font-bold text-secondary" : "text-black"}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="relative bg-gray-100 rounded px-4 py-2 mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;