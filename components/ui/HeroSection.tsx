import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="relative w-full min-h-[90vh]">

        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Laptop"
          fill
          priority
          className="object-cover object-center sm:object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/90 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/55 sm:to-black/20" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 h-full min-h-[90vh] flex items-center">
          <div className="w-full sm:max-w-2xl flex flex-col gap-5">
            <p className="text-[oklch(0.6232_0.1879_259.8)] text-sm sm:text-base font-semibold tracking-[0.25em] uppercase">
              Best Deals &amp; Latest Models
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight">
              Find Your <br />
              <span className="text-[oklch(0.6232_0.1879_259.8)]">Perfect Laptop</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg">
              Explore top brands like HP, Dell, Apple, Lenovo and more —
              backed by expert after-care service.
            </p>

            <div className="flex items-center gap-4 mt-8">
              <Link
                href="/laptops"
                className="
                  w-full sm:w-72 text-center
                  px-8 py-4 rounded-xl font-semibold text-white text-lg tracking-wide
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