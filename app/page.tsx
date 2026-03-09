import LaptopCard from "./components/LaptopCard";
import { laptops } from "./data/laptops";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-12 px-4 text-center shadow-md">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          💻 LaptopHub
        </h1>
        <p className="text-lg font-medium opacity-90 max-w-xl mx-auto">
          Quality laptops at unbeatable prices. Chat us on WhatsApp to order
          instantly!
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Available Laptops
          </h2>
          <p className="text-gray-500 mt-1">
            All laptops are tested and verified. Click &quot;Chat on WhatsApp&quot; to
            inquire or order.
          </p>
        </div>

        {/* Laptop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {laptops.map((laptop) => (
            <LaptopCard key={laptop.id} laptop={laptop} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-sm text-center py-6 mt-12">
        <p>
          © {new Date().getFullYear()} LaptopHub. All rights reserved.
        </p>
        <p className="mt-1">
          Have questions? Chat us on{" "}
          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline"
          >
            WhatsApp
          </a>
        </p>
      </footer>
    </div>
  );
}
