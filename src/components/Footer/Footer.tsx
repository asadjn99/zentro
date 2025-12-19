import Image from "next/image";
import Link from "next/link";
import { Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Column 1: Exclusive (Subscribe) */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-wide">Zentro</h2>
          <h3 className="text-lg font-medium">Subscribe</h3>
          <p className="text-sm text-gray-300">Get 10% off your first order</p>
          
          {/* Email Input */}
          <div className="relative w-full max-w-[250px]">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-transparent border border-white rounded py-2.5 px-4 text-sm outline-none placeholder:text-gray-500"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Column 2: Support */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Support</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li className="max-w-[180px]">25000 EncoderBytes, IT Park Peshawar, Pakistan.</li>
            <li>asadjn99@gmail.com</li>
            <li>+92-3075993029</li>
          </ul>
        </div>

        {/* Column 3: Account */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Account</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li><Link href="/account" className="hover:text-white transition">My Account</Link></li>
            <li><Link href="/auth/login" className="hover:text-white transition">Login / Register</Link></li>
            <li><Link href="/cart" className="hover:text-white transition">Cart</Link></li>
            <li><Link href="/wishlist" className="hover:text-white transition">Wishlist</Link></li>
            <li><Link href="/shop" className="hover:text-white transition">Shop</Link></li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Quick Link</h3>
          <ul className="flex flex-col gap-3 text-sm text-gray-300">
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms Of Use</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column 5: Download App */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-medium">Download App</h3>
          <p className="text-xs text-gray-400">Save $3 with App New User Only</p>
          
          <div className="flex items-center gap-2">
            {/* QR Code */}
            <div className="relative w-20 h-20 bg-white p-1">
               {/* Replace with your actual QR code image path */}
               <Image src="/icons/qr.png" alt="QR Code" fill className="object-contain"/> 
            </div>
            
            {/* App Stores */}
            <div className="flex flex-col gap-2">
               <div className="relative w-28 h-7">
                  {/* Replace with Google Play image */}
                  <Image src="/icons/playstore.png" alt="Google Play" fill className="object-contain"/>
               </div>
               <div className="relative w-auto h-8">
                  {/* Replace with App Store image */}
                  <Image src="/icons/appstore.png" alt="App Store" fill className="object-contain"/>
               </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-2">
             <a href="https://www.facebook.com/asadjn99" target="_blank"> <Facebook className="w-5 h-5 cursor-pointer hover:text-gray-400 transition " /></a>
            <a href="https://www.facebook.com/asadjn99" target="_blank"><Twitter className="w-5 h-5 cursor-pointer hover:text-gray-400 transition" /></a>
             <a href="https://www.instagram.com/asadjn99" target="_blank"><Instagram className="w-5 h-5 cursor-pointer hover:text-gray-400 transition" /></a>
             <a href="https://www.linkedin.com/in/asad-jn99" target="_blank"><Linkedin className="w-5 h-5 cursor-pointer hover:text-gray-400 transition" /></a>
          </div>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="mt-16 border-t border-gray-800 pt-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; Copyright asadjn99 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;