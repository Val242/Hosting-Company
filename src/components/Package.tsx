"use client";
import { useState } from "react";

export default function Package() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="py-4">
      <div>
        <h1 className="font-poppins font-bold text-center text-3xl">
          Ready to get started with <br /> Lemon Wares?
        </h1>

        <p className="text-center py-8">
          Choose the package that suits you
        </p>

        <div className="flex gap-3 justify-center items-center">
          <p className={`${isMonthly ? "font-semibold text-black" : "text-gray-500"}`}>
            Monthly
          </p>

          {/* 🔴 Toggle Switch */}
          <button
            onClick={() => setIsMonthly(!isMonthly)}
            className={`relative w-[50px] h-[25px] rounded-full transition-all duration-300 ${
              isMonthly ? "bg-red-800" : "bg-red-300"
            }`}
          >
            <span
              className={`absolute top-[3px] left-[3px] w-[19px] h-[19px] bg-white rounded-full transition-all duration-300 ${
                isMonthly ? "translate-x-0" : "translate-x-[25px]"
              }`}
            ></span>
          </button>

          <p className={`${!isMonthly ? "font-semibold text-black" : "text-gray-500"}`}>
            Yearly
          </p>

          <button className="text-black bg-[#FFE87A] w-[100px] h-[30px] rounded-2xl text-[12px]">
            20% discount
          </button>
        </div>
      </div>
    </div>
  );
}
