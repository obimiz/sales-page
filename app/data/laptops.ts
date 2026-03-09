export interface Laptop {
  id: number;
  brand: string;
  model: string;
  generation: string;
  inches: number;
  ram: string;
  storage: string;
  batteryHealth: string;
  price: string;
  image: string;
  whatsappNumber: string;
  whatsappMessage: string;
}

export const laptops: Laptop[] = [
  {
    id: 1,
    brand: "Dell Latitude",
    model: "550",
    generation: "6th",
    inches: 14,
    ram: "8GB",
    storage: "256GB SSD",
    batteryHealth: "Excellent",
    price: "₦120,000",
    image: "/images/laptops/laptop-1.jpg",
    whatsappNumber: "2348000000000",
    whatsappMessage:
      "Hello, I'm interested in the Dell Latitude 550 (6th Gen, 8GB RAM, 256GB SSD) listed on your sales page. Is it still available?",
  },
  {
    id: 2,
    brand: "HP EliteBook",
    model: "840 G3",
    generation: "6th",
    inches: 14,
    ram: "8GB",
    storage: "256GB SSD",
    batteryHealth: "Excellent",
    price: "₦130,000",
    image: "/images/laptops/laptop-2.jpg",
    whatsappNumber: "2348000000000",
    whatsappMessage:
      "Hello, I'm interested in the HP EliteBook 840 G3 (6th Gen, 8GB RAM, 256GB SSD) listed on your sales page. Is it still available?",
  },
  {
    id: 3,
    brand: "Lenovo ThinkPad",
    model: "T460",
    generation: "6th",
    inches: 14,
    ram: "16GB",
    storage: "512GB SSD",
    batteryHealth: "Good",
    price: "₦150,000",
    image: "/images/laptops/laptop-3.jpg",
    whatsappNumber: "2348000000000",
    whatsappMessage:
      "Hello, I'm interested in the Lenovo ThinkPad T460 (6th Gen, 16GB RAM, 512GB SSD) listed on your sales page. Is it still available?",
  },
  {
    id: 4,
    brand: "Dell Latitude",
    model: "E7470",
    generation: "7th",
    inches: 14,
    ram: "8GB",
    storage: "512GB SSD",
    batteryHealth: "Excellent",
    price: "₦160,000",
    image: "/images/laptops/laptop-4.jpg",
    whatsappNumber: "2348000000000",
    whatsappMessage:
      "Hello, I'm interested in the Dell Latitude E7470 (7th Gen, 8GB RAM, 512GB SSD) listed on your sales page. Is it still available?",
  },
  {
    id: 5,
    brand: "HP ProBook",
    model: "640 G2",
    generation: "6th",
    inches: 14,
    ram: "8GB",
    storage: "256GB SSD",
    batteryHealth: "Good",
    price: "₦110,000",
    image: "/images/laptops/laptop-5.jpg",
    whatsappNumber: "2348000000000",
    whatsappMessage:
      "Hello, I'm interested in the HP ProBook 640 G2 (6th Gen, 8GB RAM, 256GB SSD) listed on your sales page. Is it still available?",
  },
  {
    id: 6,
    brand: "Lenovo ThinkPad",
    model: "X260",
    generation: "6th",
    inches: 12.5,
    ram: "8GB",
    storage: "256GB SSD",
    batteryHealth: "Excellent",
    price: "₦105,000",
    image: "/images/laptops/laptop-6.jpg",
    whatsappNumber: "2348000000000",
    whatsappMessage:
      "Hello, I'm interested in the Lenovo ThinkPad X260 (6th Gen, 8GB RAM, 256GB SSD) listed on your sales page. Is it still available?",
  },
];
