"use client";

import Image from "next/image";
import Link from "next/link";
// import { Google } from "lucide-react"; // You might need a Google icon SVG component effectively, but lucide doesn't have a perfect Google G. using a text placeholder or generic icon for now, or just text. Let's use a simple text or an Image if you have the google logo. I will use text for simplicity or a placeholder icon.

const SignupContent = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* Left Side - Image (Hidden on mobile) */}
        <div className="hidden lg:block w-full lg:w-1/2 relative h-[600px] bg-[#CBE4E8]">
           {/* Replace with your auth side image */}
           <Image 
             src="/icons/auth-img.png" 
             alt="Shopping" 
             fill 
             className="object-contain object-center"
           />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:pr-20 lg:pl-0 max-w-[500px] lg:max-w-none mx-auto">
          <div className="flex flex-col gap-6">
            
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl sm:text-4xl font-medium tracking-wide">Create an account</h1>
              <p className="text-sm sm:text-base text-gray-600">Enter your details below</p>
            </div>

            <form className="flex flex-col gap-8 mt-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="border-b border-gray-300 py-2 outline-none focus:border-black transition text-sm sm:text-base"
              />
              <input 
                type="text" 
                placeholder="Email or Phone Number" 
                className="border-b border-gray-300 py-2 outline-none focus:border-black transition text-sm sm:text-base"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="border-b border-gray-300 py-2 outline-none focus:border-black transition text-sm sm:text-base"
              />

              <div className="flex flex-col gap-4">
                <button className="bg-btn-red text-white py-4 rounded-[4px] hover:bg-btn-hover-red transition font-medium">
                  Create Account
                </button>
                
                <button 
                  type="button"
                  className="border border-gray-300 py-4 rounded-[4px] flex items-center justify-center gap-3 hover:bg-gray-50 transition font-medium"
                >
                  {/* Google Icon Placeholder */}
                  <div className="relative w-6 h-6">
                    <Image src="/icons/icon-google.png" alt="Google" fill className="object-contain" />
                  </div>
                  Sign up with Google
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base">
                <span>Already have account?</span>
                <Link href="/auth/login" className="text-black font-medium border-b border-black pb-0.5 hover:opacity-70 transition">
                  Log in
                </Link>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SignupContent;