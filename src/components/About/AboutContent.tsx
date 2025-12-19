"use client";

import Image from "next/image";
import { Twitter, Instagram, Linkedin, Store, DollarSign, ShoppingBag } from "lucide-react";
import ServiceFeatures from "../Footer/ServiceFeatures"; // Reusing the component we made earlier

const AboutContent = () => {
  
  // 1. Stats Data
  const stats = [
    { id: 1, number: "10.5k", label: "Sellers active our site", icon: <Store className="w-6 h-6" /> },
    { id: 2, number: "33k", label: "Mopnthly Produduct Sale", icon: <DollarSign className="w-6 h-6" />, active: true }, // 'active' creates the red highlight style
    { id: 3, number: "45.5k", label: "Customer active in our site", icon: <ShoppingBag className="w-6 h-6" /> },
    { id: 4, number: "25k", label: "Anual gross sale in our site", icon: <DollarSign className="w-6 h-6" /> },
  ];

  // 2. Team Data (Customized)
  const team = [
    {
      id: 1,
      name: "Asad Ullah",
      role: "Founder & Chairman",
      image: "/images/founder.png", 
      socials: { twitter: "asadjn99", instagram: "asadjn99", linkedin: "asad-jn99" }
    },
    {
      id: 2,
      name: "Emma Watson",
      role: "Managing Director",
      image: "/images/md.png", 
      socials: { twitter: "#", instagram: "#", linkedin: "#" }
    },
    {
      id: 3,
      name: "Will Smith",
      role: "Product Designer",
      image: "/images/designer.png", 
      socials: { twitter: "#", instagram: "#", linkedin: "#" }
    },
  ];

  return (
    <div className="pt-10">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-10">
          <span>Home</span>
          <span>/</span>
          <span className="text-black font-medium">About</span>
        </div>

        {/* --- SECTION 1: OUR STORY --- */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-32">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-justify lg:text-left">Our Story</h1>
            <div className="flex flex-col gap-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify lg:text-left">
              <p>
                Launced in 2015, Zentro is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data and service solutions, Zentro has 10,500 sellers and 300 brands and serves 3 millioons customers across the region.
              </p>
              <p>
                Zentro has more than 1 Million products to offer, growing at a very fast. Zentro offers a diverse assotment in categories ranging  from consumer.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[4px] overflow-hidden">
             {/* Replace with a generic 'shopping women' image or your own brand image */}
            <Image 
              src="/images/about-hero.png" 
              alt="Our Story" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* --- SECTION 2: STATS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`
                group flex flex-col items-center justify-center gap-4 p-8 border rounded-[4px] transition-all duration-300
                ${stat.active 
                  ? "bg-secondary border-secondary text-white" 
                  : "bg-white border-gray-200 text-black hover:bg-secondary hover:border-secondary hover:text-white"
                }
              `}
            >
              {/* Icon Circle */}
              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center border-[8px] transition-all duration-300
                ${stat.active
                  ? "bg-white text-black border-white/30" 
                  : "bg-black text-white border-gray-300 group-hover:bg-white group-hover:text-black group-hover:border-white/30"
                }
              `}>
                {stat.icon}
              </div>

              {/* Number & Label */}
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-2xl font-bold tracking-wide">{stat.number}</h3>
                <p className="text-sm font-normal text-center">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- SECTION 3: TEAM --- */}
        <div className="mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col gap-4">
                {/* Image Card */}
                <div className="relative w-full h-[350px] sm:h-[400px] bg-gray-100 rounded-[4px] overflow-hidden pt-8 px-8 flex items-end justify-center">
                  <div className="relative w-full h-full">
                    <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-contain object-bottom"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-medium tracking-wide">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  
                  {/* Social Icons */}
                  <div className="flex gap-4 mt-1">
                    <a href={`https://twitter.com/${member.socials.twitter}`} target="_blank" rel="noreferrer">
                      <Twitter className="w-5 h-5 text-black hover:text-secondary transition" />
                    </a>
                    <a href={`https://instagram.com/${member.socials.instagram}`} target="_blank" rel="noreferrer">
                      <Instagram className="w-5 h-5 text-black hover:text-secondary transition" />
                    </a>
                    <a href={`https://linkedin.com/in/${member.socials.linkedin}`} target="_blank" rel="noreferrer">
                      <Linkedin className="w-5 h-5 text-black hover:text-secondary transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slider Dots (Static visual representation for grid) */}
          <div className="flex justify-center gap-3 mt-10">
            <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-transparent hover:bg-secondary hover:border-white cursor-pointer transition"></div>
            <div className="w-3 h-3 rounded-full bg-secondary border-2 border-white ring-1 ring-secondary cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-transparent hover:bg-secondary hover:border-white cursor-pointer transition"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-transparent hover:bg-secondary hover:border-white cursor-pointer transition"></div>
          </div>
        </div>

      </div>

      {/* --- SECTION 4: SERVICES page-Reusing --- */}
      <ServiceFeatures />
    </div>
  );
};

export default AboutContent;