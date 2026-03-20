import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" }
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Laptops", href: "/laptops" },
  { name: "Categories", href: "/categories" },
  { name: "After-care Services", href: "/after-care-services" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">

          {/* Brands */}
          <div className="text-muted-foreground">
            <h4 className="font-semibold text-gray-300 mb-4">Brands</h4>
            <ul className="space-y-1">
              <li className="text-gray-300 text-base">Hp</li>
              <li className="text-gray-300 text-base">Dell</li>
              <li className="text-gray-300 text-base">Lenovo</li>
              <li className="text-gray-300 text-base">Apple Macbook</li>
              <li className="text-gray-300 text-base">Asus</li>
              <li className="text-gray-300 text-base">Acer</li>
              <li className="text-gray-300 text-base">Samsung</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[oklch(0.6232_0.1879_259.8)] transition-colors duration-300 text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Laptop Types */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-300">Laptop Types</h3>
            <ul className="space-y-1">
              <li className="text-gray-300 text-base">Gaming Laptops</li>
              <li className="text-gray-300 text-base">Office & Business Laptops</li>
              <li className="text-gray-300 text-base">Content Creation Laptops</li>
              <li className="text-gray-300 text-base">2-in-1 / Convertible Laptops</li>
              <li className="text-gray-300 text-base">Everyday/Budget Laptops</li>
              <li className="text-gray-300 text-base">Chromebooks</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="w-full">
            <h3 className="font-semibold mb-4 text-gray-300">Contact Details</h3>
            <p className="text-gray-300 text-base">
              07030616144 <br />
              08179329620
            </p>
            <p className="text-gray-300 text-base mt-2">
              15 Onawale Street, <br />
              off Ire-akari estate road,<br />
              Isolo, Lagos.
            </p>
          </div>

        </div>

        {/* Social Links Row */}
        <div className="mt-10 pt-8 border-t border-border/50 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  aria-label={link.label}
                  className="
                    group flex items-center justify-center
                    w-10 h-10 rounded-full
                    border border-gray-700
                    text-gray-400
                    transition-all duration-300
                    hover:border-[oklch(0.6232_0.1879_259.8)]
                    hover:text-[oklch(0.6232_0.1879_259.8)]
                    hover:shadow-[0_0_12px_oklch(0.6232_0.1879_259.8/0.45)]
                    hover:-translate-y-1
                  "
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <p className="text-base text-gray-300">
            © {new Date().getFullYear()} Dollytech. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}