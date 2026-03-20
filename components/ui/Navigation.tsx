"use client";

import { NavItems } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl font-serif font-bold text-[oklch(0.6232_0.1879_259.8)] tracking-wide">
              Dolly<span className="text-white">Tech</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                  after:bg-[oklch(0.6232_0.1879_259.8)] after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {NavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-gray-300 hover:text-[oklch(0.6232_0.1879_259.8)] transition-colors duration-200 py-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}