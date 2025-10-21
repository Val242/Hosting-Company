"use client";

import Image from "next/image";
import HeroImage from "../../public/images/HeroImage.png";
import "../app/globals.css"; // Make sure Poppins is imported in your globals.css

export default function Hero() {
  const services = ["Hosting", "Domain", "SEO", "Email"];

  return (
    <div className="flex flex-col md:flex-row mx-4 mt-8 gap-8 items-start">
      {/* Left side: Hero options/text */}
      <div className="w-full md:w-1/2 flex flex-col justify-start gap-6">
        {/* Services options */}
        <div className="flex gap-6">
          {services.map((service) => (
            <p
              key={service}
              className="relative cursor-pointer text-[#D6D4D4] hover:text-[#B00000] transition-colors duration-200
                         after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#B00000] 
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {service}
            </p>
          ))}
        </div>

        {/* Hero heading */}
        <h1 className="text-4xl md:text-6xl font-poppins font-bold text-[#000000] leading-tight">
          Premium Web <br /> Hosting for <br /> Your Website
        </h1>

        <p className="text-[#D6D4D4]">Blazing fast web hosting for individuals and <br /> 
            businesses of all sizes backed by 24x7x365 Support.</p>


            <div className="flex gap-3">
                <button className="bg-red-800 text-white font-poppins w-[160px] h-[48px] px-6 rounded-2xl shadow-[0_4px_20px_rgba(176,0,0,0.3)] hover:shadow-[0_6px_25px_rgba(176,0,0,0.4)] transition-all duration-300">
  Create Account
</button>

               <button className="border border-black font-poppins text-black w-[160px] h-[48] px-4 rounded-2xl">
                    Choose your plan
                </button>
            </div>
      </div>

      {/* Right side: Hero image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src={HeroImage}
          alt="Hero"
          width={552}
          height={504}
          className="object-contain"
        />
      </div>
    </div>
  );
}
