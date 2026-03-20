"use client"

import { useState } from "react"
import ProductCard from "./ProductCard"
import { products } from "@/lib/data"

export default function Laptops() {
  const [visibleProducts, setVisibleProducts] = useState(12)

  const loadMore = () => {
    setVisibleProducts(prev => prev + 12)
  }

  return (
    <section className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[oklch(0.6232_0.1879_259.8)] text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Our Collection
          </p>
          <h1 className="text-4xl font-bold text-white">Available Laptops</h1>
          <p className="text-gray-400 mt-3 text-base max-w-xl mx-auto">
            {products.length} laptops in stock — new arrivals added regularly.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Load More */}
        {visibleProducts < products.length && (
          <div className="flex flex-col items-center mt-12 gap-3">
            <button
              onClick={loadMore}
              className="
                px-8 py-3 rounded-xl font-semibold text-white text-sm tracking-wide
                bg-[oklch(0.6232_0.1879_259.8)]
                hover:bg-[oklch(0.55_0.1879_259.8)]
                hover:shadow-[0_0_20px_oklch(0.6232_0.1879_259.8/0.5)]
                hover:-translate-y-0.5
                transition-all duration-300
              "
            >
              Load More
            </button>
            <p className="text-gray-500 text-sm">
              Showing {Math.min(visibleProducts, products.length)} of {products.length} laptops
            </p>
          </div>
        )}

      </div>
    </section>
  )
}