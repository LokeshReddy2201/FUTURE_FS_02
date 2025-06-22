
import { Product } from '../context/CartContext';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 24999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.",
    rating: 4.8,
    reviews: 342,
    inStock: true
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 20799,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Electronics",
    description: "Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and 7-day battery life.",
    rating: 4.6,
    reviews: 128,
    inStock: true
  },
  {
    id: 3,
    name: "Minimalist Backpack",
    price: 7499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Fashion",
    description: "Sleek and functional backpack perfect for daily commute or travel. Made with sustainable materials.",
    rating: 4.7,
    reviews: 89,
    inStock: true
  },
  {
    id: 4,
    name: "Organic Coffee Beans",
    price: 2079,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500",
    category: "Food",
    description: "Premium organic coffee beans sourced directly from sustainable farms. Rich, full-bodied flavor profile.",
    rating: 4.9,
    reviews: 256,
    inStock: true
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    price: 33299,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    category: "Furniture",
    description: "Comfortable ergonomic office chair with lumbar support and adjustable height. Perfect for long work sessions.",
    rating: 4.5,
    reviews: 94,
    inStock: false
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    price: 4159,
    image: "https://images.unsplash.com/photo-1609592062458-c371b9462633?w=500",
    category: "Electronics",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicators.",
    rating: 4.4,
    reviews: 167,
    inStock: true
  },
  {
    id: 7,
    name: "Handcrafted Ceramic Mug",
    price: 1665,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=500",
    category: "Home",
    description: "Beautiful handcrafted ceramic mug perfect for your morning coffee or tea. Each piece is unique.",
    rating: 4.8,
    reviews: 73,
    inStock: true
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 10819,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    category: "Electronics",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures.",
    rating: 4.6,
    reviews: 203,
    inStock: true
  }
];
