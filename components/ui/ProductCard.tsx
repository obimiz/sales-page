"use client"

import Image from "next/image"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

type ProductCardProps = {
  images: string[]
  brand: string
  model: string
  price: number
  processor: string
  processorGeneration: string
  ram: string
  storage: string
  batteryHealth: string
  webcam: string
  bluetooth: string
  screenSize: string
  touchscreen: string
  keyboardLight: string
}

export default function ProductCard({
  images,
  brand,
  model,
  price,
  processor,
  processorGeneration,
  ram,
  storage,
  batteryHealth,
  webcam,
  bluetooth,
  screenSize,
  touchscreen,
  keyboardLight,
}: ProductCardProps) {

  const [currentImage, setCurrentImage] = useState(0)
  const phone = "2347014064141"
  const message = `Hello, I'm interested in the ${brand} ${model}`
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentImage((prev) => prev === 0 ? images.length - 1 : prev - 1)

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">

      {/* Image Slider */}
      <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-4 p-3">
        <Image
          src={images[currentImage]}
          alt={model}
          fill
          className="object-contain"
        />

        {/* Only show buttons if more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 w-7 h-7 rounded-full shadow flex items-center justify-center text-xs transition"
            >
              ◀
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 w-7 h-7 rounded-full shadow flex items-center justify-center text-xs transition"
            >
              ▶
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-1.5 h-1.5 rounded-full transition ${
                  i === currentImage ? "bg-gray-700" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <h3 className="font-semibold text-sm">{brand} {model}</h3>
      <p className="text-sm text-gray-600 mt-1">{processor}</p>
      <p className="text-sm text-gray-600 mt-1">Processor Generation: {processorGeneration}</p>
      <p className="text-sm text-gray-600 mt-1">Ram: {ram}</p>
      <p className="text-sm text-gray-600 mt-1">Storage: {storage}</p>
      <p className="text-sm text-gray-600 mt-1">Battery Health: {batteryHealth}</p>
      <p className="text-sm text-gray-600 mt-1">Webcam: {webcam}</p>
      <p className="text-sm text-gray-600 mt-1">Bluetooth: {bluetooth}</p>
      <p className="text-sm text-gray-600 mt-1">Screen: {screenSize}</p>
      <p className="text-sm text-gray-600 mt-1">Touchscreen: {touchscreen}</p>
      <p className="text-sm text-gray-600 mt-1">Keyboard Light: {keyboardLight}</p>

      <p className="text-[oklch(0.6232_0.1879_259.8)] font-bold mt-2">
        ₦{price.toLocaleString()}
      </p>

      
        <a href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
      >
        <FaWhatsapp />
        Order via WhatsApp
      </a>

    </div>
  )
}