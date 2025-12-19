"use client";

import Link from "next/link";

const AccountContent = () => {
  return (
    <div className="container-custom pt-10 pb-20">
      
      {/* 1. Header Section */}
      <div className="flex justify-between items-center mb-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="opacity-50 hover:opacity-100 transition">Home</Link>
          <span>/</span>
          <span className="text-black font-medium">My Account</span>
        </div>
        {/* Welcome Message */}
        <div className="text-sm">
          Welcome! <span className="text-btn-red font-medium">Asad Ullah</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-20">
        
        {/* 2. Sidebar Menu */}
        <div className="w-full lg:w-[250px] flex flex-col gap-6">
          
          {/* Group 1: Manage My Account */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-base">Manage My Account</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm pl-4">
              <li className="text-btn-red font-medium cursor-pointer">My Profile</li>
              <li className="hover:text-black cursor-pointer transition">Address Book</li>
              <li className="hover:text-black cursor-pointer transition">My Payment Options</li>
            </ul>
          </div>

          {/* Group 2: My Orders */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-base">My Orders</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm pl-4">
              <li className="hover:text-black cursor-pointer transition">My Returns</li>
              <li className="hover:text-black cursor-pointer transition">My Cancellations</li>
            </ul>
          </div>

          {/* Group 3: Wishlist */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-base">My WishList</h3>
          </div>
        </div>

        {/* 3. Main Content: Edit Profile Form */}
        <div className="flex-1 bg-white shadow-sm border border-gray-100 rounded-[4px] p-8 sm:p-14">
          <h2 className="text-xl font-medium text-btn-red mb-8">Edit Your Profile</h2>
          
          <form className="flex flex-col gap-6">
            
            {/* Row 1: Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">First Name</label>
                <input 
                  type="text" 
                  defaultValue="Asad" 
                  className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Last Name</label>
                <input 
                  type="text" 
                  defaultValue="Ullah" 
                  className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition"
                />
              </div>
            </div>

            {/* Row 2: Email & Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  defaultValue="asadjn99@gmail.com" 
                  className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Address</label>
                <input 
                  type="text" 
                  defaultValue="Peshawar, Pakistan" 
                  className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition"
                />
              </div>
            </div>

            {/* Password Changes */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Password Changes</label>
                <input 
                  type="password" 
                  placeholder="Current Password" 
                  className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition"
                />
              </div>
              <input 
                type="password" 
                placeholder="New Password" 
                className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition"
              />
              <input 
                type="password" 
                placeholder="Confirm New Password" 
                className="w-full bg-gray-100 rounded-[4px] px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-secondary/50 transition"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end items-center gap-8 mt-4">
              <button type="button" className="text-black hover:text-gray-600 transition text-sm font-medium">
                Cancel
              </button>
              <button type="submit" className="bg-btn-red text-white px-8 py-4 rounded-[4px] hover:bg-btn-hover-red transition font-medium text-sm">
                Save Changes
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default AccountContent;