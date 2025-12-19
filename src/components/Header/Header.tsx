"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingCart, Menu, X, User, ShoppingBag, Star, LogOut, XCircle } from "lucide-react"; 
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false); 
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/auth/signup" },
  ];

  return (
    <header className="border-b border-gray-200 mb-0 relative z-50">
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
                    ? "text-black font-medium border-b border-gray-400" 
                    : "text-black hover:text-gray-600 hover:border-b hover:border-gray-300" 
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Section (Search + Icons) */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
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
              <Heart className={`w-6 h-6 cursor-pointer transition ${pathname === '/wishlist' ? 'text-secondary fill-secondary' : 'hover:text-secondary'}`} />
            </Link>
            <Link href="/cart">
              <ShoppingCart className={`w-6 h-6 cursor-pointer transition ${pathname === '/cart' ? 'text-secondary' : 'hover:text-secondary'}`} />
            </Link>
            
            {/* USER ICON WITH DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition ${isUserDropdownOpen || pathname === '/account' ? 'bg-secondary text-white' : 'hover:bg-secondary hover:text-white'}`}
              >
                <User className="w-5 h-5" />
              </button>

              {/* Dropdown Menu */}
              {isUserDropdownOpen && (
                <div className="absolute right-0 top-full mt-3 w-[250px] bg-black/40 backdrop-blur-md rounded-[4px] p-5 flex flex-col gap-4 text-white shadow-lg z-50 border border-white/10">
                    
                    {/* Manage Account */}
                    <Link href="/account" className="flex items-center gap-3 hover:opacity-80 transition" onClick={() => setIsUserDropdownOpen(false)}>
                      <User className="w-5 h-5" />
                      <span className="text-sm">Manage My Account</span>
                    </Link>

                    {/* My Order */}
                    <Link href="#" className="flex items-center gap-3 hover:opacity-80 transition" onClick={() => setIsUserDropdownOpen(false)}>
                      <ShoppingBag className="w-5 h-5" />
                      <span className="text-sm">My Order</span>
                    </Link>

                    {/* My Cancellations */}
                    <Link href="#" className="flex items-center gap-3 hover:opacity-80 transition" onClick={() => setIsUserDropdownOpen(false)}>
                      <XCircle className="w-5 h-5" />
                      <span className="text-sm">My Cancellations</span>
                    </Link>

                    {/* My Reviews */}
                    <Link href="#" className="flex items-center gap-3 hover:opacity-80 transition" onClick={() => setIsUserDropdownOpen(false)}>
                      <Star className="w-5 h-5" />
                      <span className="text-sm">My Reviews</span>
                    </Link>

                    {/* Logout */}
                    <Link href="#" className="flex items-center gap-3 hover:opacity-80 transition mt-1" onClick={() => setIsUserDropdownOpen(false)}>
                      <LogOut className="w-5 h-5" />
                      <span className="text-sm">Logout</span>
                    </Link>

                </div>
              )}
            </div>

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
          {/* Mobile Search */}
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