"use client";

import Image from "next/image";
import { Laptop } from "../data/laptops";
import { useState } from "react";

interface LaptopCardProps {
  laptop: Laptop;
}

export default function LaptopCard({ laptop }: LaptopCardProps) {
  const [imgSrc, setImgSrc] = useState(laptop.image);
  const whatsappUrl = `https://wa.me/${laptop.whatsappNumber}?text=${encodeURIComponent(laptop.whatsappMessage)}`;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Laptop Image */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={imgSrc}
          alt={`${laptop.brand} ${laptop.model}`}
          fill
          className="object-cover"
          onError={() => setImgSrc("/images/laptops/placeholder.png")}
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-1">
          {laptop.brand} {laptop.model}
        </h2>

        {/* Price */}
        <p className="text-2xl font-extrabold text-blue-600 mb-3">
          {laptop.price}
        </p>

        {/* Specs */}
        <ul className="text-sm text-gray-600 space-y-1 flex-1">
          <li className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium text-gray-700">Brand</span>
            <span>{laptop.brand}</span>
          </li>
          <li className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium text-gray-700">Model</span>
            <span>{laptop.model}</span>
          </li>
          <li className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium text-gray-700">Generation</span>
            <span>{laptop.generation} Gen</span>
          </li>
          <li className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium text-gray-700">Screen</span>
            <span>{laptop.inches}&quot;</span>
          </li>
          <li className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium text-gray-700">RAM</span>
            <span>{laptop.ram}</span>
          </li>
          <li className="flex justify-between border-b border-gray-100 pb-1">
            <span className="font-medium text-gray-700">Storage</span>
            <span>{laptop.storage}</span>
          </li>
          <li className="flex justify-between pb-1">
            <span className="font-medium text-gray-700">Battery Health</span>
            <span
              className={
                laptop.batteryHealth === "Excellent"
                  ? "text-green-600 font-semibold"
                  : "text-yellow-600 font-semibold"
              }
            >
              {laptop.batteryHealth}
            </span>
          </li>
        </ul>

        {/* WhatsApp CTA Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200"
          aria-label={`Chat on WhatsApp about ${laptop.brand} ${laptop.model}`}
        >
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
