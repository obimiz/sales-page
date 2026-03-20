import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="relative w-full min-h-[90vh]">

        {/* Background Image */}
        <Image
          src="/images/Hero-Laptop.png"
          alt="Laptop"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[90vh] flex items-center">
          <div className="max-w-xl flex flex-col gap-6">
            <p className="text-[oklch(0.6232_0.1879_259.8)] text-sm font-semibold tracking-[0.25em] uppercase">
              Best Deals &amp; Latest Models
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Find Your <br />
              <span className="text-[oklch(0.6232_0.1879_259.8)]">Perfect Laptop</span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-md">
              Explore top brands like HP, Dell, Apple, Lenovo and more —
              backed by expert after-care service.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <Link
                href="/laptops"
                className="
                  px-8 py-3 rounded-xl font-semibold text-white text-sm tracking-wide
                  bg-[oklch(0.6232_0.1879_259.8)]
                  hover:bg-[oklch(0.55_0.1879_259.8)]
                  hover:shadow-[0_0_20px_oklch(0.6232_0.1879_259.8/0.5)]
                  hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}