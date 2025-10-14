import Image from "next/image";
import "../app/globals.css";
import cPanel from "../../public/images/cPanel.png";
import imunify360 from "../../public/images/imunify360.png";
import liteSpeed from "../../public/images/LiteSpeed.png";
import softaCulous from "../../public/images/SoftaCulous.png";
import wordPress from "../../public/images/WordPress.png";
import cloudFare from "../../public/images/CloudFare.png";
import uptime from "../../public/images/Uptime.png";
import blazing from "../../public/images/Blazing.png";
import freeCertificates from "../../public/images/FreeCertificates.png";
import allTime from "../../public/images/allTimeSupport.png";

export default function CloudHosting() {
  const logos = [
    { src: cPanel, alt: "cPanel" },
    { src: imunify360, alt: "Imunify360" },
    { src: liteSpeed, alt: "LiteSpeed" },
    { src: softaCulous, alt: "SoftaCulous" },
    { src: wordPress, alt: "WordPress" },
    { src: cloudFare, alt: "CloudFare" },
  ];

  const icons = [
    {
      src: uptime,
      heading: "99.9% Uptime",
      text: "We Keep Your Web build Online 24x7x365 Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
      alt: "Uptime",
    },
    {
      src: blazing,
      heading: "Blazing Fast Web Hosting",
      text: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
      alt: "Fast web Hosting",
    },
    {
      src: freeCertificates,
      heading: "Free SSL Certifications",
      text: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
      alt: "Free SSL Certifications",
    },
    {
      src: allTime,
      heading: "24x7 Friendly Support",
      text: "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
      alt: "All time support",
    },
  ];

  return (
    <div className="px-4 md:px-8">
      {/* Section 1: Cloud Hosting Info */}
      <div className="flex flex-col md:flex-row items-start justify-between mt-10 py-5 gap-8">
        {/* Text section */}
        <div className="md:w-1/2">
          <h1 className="font-poppins font-bold text-black text-2xl md:text-3xl">
            True Cloud Web Hosting
          </h1>
          <p className="text-gray-700 py-5 leading-relaxed text-sm md:text-base">
            True Cloud Web Hosting — all of the hosting packages we offer are
            deployed instantly on our SSD-powered cloud.
            <br />
            We don’t use dedicated servers that operate on single pieces of
            hardware.
            <br />
            Our entire infrastructure is built to be reliable, secure, and
            scalable.
          </p>
        </div>

        {/* Logos grid (2 rows × 3 columns) */}
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

      {/* Section 2: Feature Icons */}
      <div className="flex flex-wrap justify-center md:justify-around gap-8 mt-10 font-poppins">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="w-[252px] h-auto flex flex-col items-center text-center"
          >
            <div className="flex justify-center items-center mb-3">
              <Image
                src={icon.src}
                alt={icon.alt}
                width={63}
                height={18}
                className="object-contain"
              />
            </div>

            <h2 className="font-bold text-base md:text-lg">{icon.heading}</h2>
            <p className="text-gray-600 text-[12px] md:text-[14px] leading-relaxed mt-2">
              {icon.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
