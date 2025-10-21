import Image from "next/image";
import Crypto from "../../public/images/Crypto.png";
import JPNL from "../../public/images/JPNL.png";
import LeevOn from "../../public/images/LeeveOn.png";
import Korane from "../../public/images/Korane.png";
import Nadine from "../../public/images/Nadine.png";
import Jrango from "../../public/images/Jrango.png";
import QuoteMark from "../../public/images/Quote Mark.png";

export default function RealStories() {
  const logos = [
    { src: JPNL, alt: "JPNL" },
    { src: Korane, alt: "Korane" },
    { src: Nadine, alt: "Nadine" },
    { src: LeevOn, alt: "LeevOn" },
    { src: Jrango, alt: "Jrango" },
    { src: Crypto, alt: "Crypto" },
  ];

  return (
    <>
      {/* Top section */}
      <div className="flex flex-col lg:flex-row px-4 md:px-8 lg:px-12 gap-6 mt-5">
        {/* Left Column */}
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <div className="relative">
            {/* Quote mark background */}
            <Image
              src={QuoteMark}
              alt="quote"
              width={120}
              height={120}
                className="absolute top-0 left-0 -translate-x-4 -translate-y-2 opacity-30 saturate-200 sepia-[1] hue-rotate-[330deg] brightness-75 select-none pointer-events-none"
            />

            <h1 className="font-bold text-2xl md:text-3xl relative z-10">
              Real Stories from <br /> Real Customers
            </h1>
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Get inspired by these stories
          </p>

          <div className="px-4 py-6 bg-white shadow-lg rounded-2xl md:h-[70%]">
            <Image
              src={Crypto}
              alt="CLI"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elem Floyd
              Miles Vice President, CLI
            </p>
            <p className="font-bold mt-3">Floyd Miles</p>
            <p className="text-gray-500 text-[14px] md:text-[16px]">
              Vice President, CLI
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="px-4 py-6 bg-white shadow-lg rounded-2xl">
            <Image
              src={JPNL}
              alt="JPNL"
              width={80}
              height={50}
              className="mb-3"
            />
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elem Floyd
              Miles Vice President, CLI
            </p>
            <p className="font-bold mt-3">Jane Cooper</p>
            <p className="text-gray-500 text-[14px] md:text-[16px]">CEO, JPNL</p>
          </div>

          <div className="pt-6 pb-3 pl-6 pr-3 bg-white shadow-lg rounded-2xl w-full sm:w-[85%]">
            <Image
              src={LeevOn}
              alt="Leevon"
              width={110}
              height={50}
              className="mb-3"
            />
            <p className="text-gray-700 text-sm md:text-base">
              LemonWares saved our time <br /> in Hosting my company page.
            </p>
            <p className="font-bold mt-3">Kristin Watson</p>
            <p className="text-gray-500 text-[14px] md:text-[16px]">
              Co-Founder, LeeveOn Building
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-4 md:px-8 mt-10">
        <div className="flex flex-col md:flex-row items-start justify-between py-5 gap-8">
          {/* Text section */}
          <div className="md:w-1/2">
            <h1 className="font-poppins font-bold text-black text-2xl md:text-3xl">
              We serve over 100 <br /> Nigerian Websites
            </h1>
            <p className="text-gray-700 py-5 leading-relaxed text-sm md:text-base">
              Connect LemonWares with your favourite tools that <br /> you use
              daily and keep things on track.
            </p>
          </div>

          {/* Logos grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 grid-rows-2 gap-6 md:w-1/2 place-items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex justify-center items-center hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
