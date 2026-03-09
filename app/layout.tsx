import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaptopHub — Quality Laptops for Sale",
  description:
    "Browse our selection of quality refurbished and brand-new laptops. Chat directly on WhatsApp to place your order.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
