"use client";

import Image from "next/image";
import logo from "../../public/images/logo.png";
import "../app/globals.css";
import { Phone, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="font-poppins">
      <nav className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-8 mt-8 gap-4 md:gap-0">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <Image src={logo} alt="Logo" width={50} height={12.5} />
          <Link
            href="/services"
            className="relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#B00000] after:transition-all after:duration-300 hover:after:w-full"
          >
            Our services
          </Link>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden ml-auto">
          <Menu size={28} onClick={() => setOpen(!open)} />
        </div>

        {/* Middle section */}
        <div
          className={`flex flex-col md:flex-row md:justify-around gap-2 md:gap-4 w-full md:w-auto items-center ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          <Link
            href="/about"
            className="relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#B00000] after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            href="/blog&news"
            className="relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#B00000] after:transition-all after:duration-300 hover:after:w-full"
          >
            Blog & News
          </Link>
          <Link
            href="/contact"
            className="relative cursor-pointer after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#B00000] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <div>Account</div>
          <div className="hidden md:block">|</div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-[#B00000]" />
            <span>+2349067322844</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
