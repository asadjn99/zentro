"use client";

import Image from "next/image";
import Link from "next/link";

const LoginContent = () => {
  return (
    <div className="pt-10 pb-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* Left Side - Image (Same image usually) */}
        <div className="hidden lg:block w-full lg:w-1/2 relative h-[600px] bg-[#CBE4E8]">
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
              <h1 className="text-3xl sm:text-4xl font-medium tracking-wide">Log in to Zentro</h1>
              <p className="text-sm sm:text-base text-gray-600">Enter your details below</p>
            </div>

            <form className="flex flex-col gap-8 mt-4">
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

              <div className="flex items-center justify-between mt-2">
                <button className="bg-btn-red text-white px-10 py-4 rounded-[4px] hover:bg-btn-hover-red transition font-medium">
                  Log In
                </button>
                <Link href="#" className="text-btn-red text-sm sm:text-base hover:opacity-80 transition">
                  Forget Password?
                </Link>
              </div>

              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base mt-4">
                <span>Dont have an account?</span>
                <Link href="/auth/signup" className="text-black font-medium border-b border-black pb-0.5 hover:opacity-70 transition">
                  Sign Up
                </Link>
              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginContent;