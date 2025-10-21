"use client";
import { useState } from "react";

export default function Package() {
  const [isMonthly, setIsMonthly] = useState(true);
  const plans = [
    {
      header: "Starter",
      legend: "with all your customers via all conversation channels in one central dashboard." ,
      price: "2.80",
      frequency: "Per month",
      buttonText: "Choose the Plan",
      listItems: {
        item1:"2GB SSD",
        item2:"10GB Bandwidth",
        item3:"15 Email Accounts",
        item4:"4 Subdomains",
        item5:"1 Parked domain",
        item6:"2 Websites",
        item7:"Free SSL",
        item8:"Softaculous"
        
      }

    },
       {
      header: "Standard",
      legend:"with all your customers via all conversation channels in one central dashboard." ,
      price:"4.20" ,
      frequency: "Per month",
      buttonText:"Choose this plan" ,
      listItems: {
           item1:"2GB SSD",
        item2:"10GB Bandwidth",
        item3:"15 Email Accounts",
        item4:"4 Subdomains",
        item5:"1 Parked domain",
        item6:"2 Websites",
        item7:"Free SSL",
        item8:"Softaculous"
        
      }

    },
       {
      header: "Suprem",
      legend: "with all your customers via all conversation channels in one central dashboard.",
      price: "7.00",
      frequency:"Per month" ,
      buttonText:"Choose this plan " ,
      listItems: {
            item1:"2GB SSD",
        item2:"10GB Bandwidth",
        item3:"15 Email Accounts",
        item4:"4 Subdomains",
        item5:"1 Parked domain",
        item6:"2 Websites",
        item7:"Free SSL",
        item8:"Softaculous"
        
      }

    },
  ]

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
          <div className="flex gap-8 w-[900px] h-[716]px mx-auto mt-7">
          {plans.map((plan,index)=>(
            <div
            key={index}
            className="border-1  rounded border-gray-400  px-4 "
            >
              <h1 className="mt-5 mb-3 font-bold text-2xl">{plan.header}</h1>
              <p className="text-gray-400 mb-6 ">{plan.legend}</p>
              <h1 className="font-bold text-2xl">${plan.price}</h1>
              <p className="text-gray-400 text-[12px]">{plan.frequency}</p>
              <button className="border border-black font-poppins text-black w-full h-12 px-4 rounded-2xl my-3 font-bold">

                    {plan.buttonText}
                </button>
                <ul className="">
                  <li>{plan.listItems.item1}</li>
                  <li>{plan.listItems.item2}</li>
                  <li>{plan.listItems.item3}</li>
                  <li>{plan.listItems.item4}</li>
                  <li>{plan.listItems.item5}</li>
                  <li>{plan.listItems.item6}</li>
                  <li>{plan.listItems.item7}</li>
                  <li>{plan.listItems.item8}</li>
                </ul>
            </div>
          ))}

            
          </div >
      </div>
    </div>
  );
}
