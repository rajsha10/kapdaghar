import type { Product } from "@/types/product"

export const products: Product[] = [
  {
    id: "1",
    name: "Elegance Silk Blouse",
    description:
      "A luxurious silk blouse with a relaxed fit and elegant drape. Perfect for both formal and casual occasions.",
    price: 11308,
    originalPrice: 13919,
    images: [
      "/products/silk_blouse_1.avif?height=600&width=400",
      "/products/silk_blouse_3.jpg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "women",
    tags: ["blouse", "silk", "elegant"],
    colors: ["White", "Black", "Red"],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    bestseller: true,
    sale: true,
    stock: 15,
  },
  {
    id: "2",
    name: "Classic Tailored Blazer",
    description:
      "A timeless tailored blazer crafted from premium wool blend. Features a slim fit and subtle detailing.",
    price: 21755,
    images: [
      "/products/tailored_blazor_1.webp?height=600&width=400",
      "/products/tailored_blazor_2.webp?height=600&width=400",
      "/products/tailored_blazor_3.webp?height=600&width=400",
    ],
    category: "women",
    tags: ["blazer", "tailored", "formal"],
    colors: ["Black", "Navy", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    bestseller: false,
    new: true,
    stock: 10,
  },
  {
    id: "3",
    name: "Premium Denim Jeans",
    description:
      "High-quality denim jeans with a perfect fit. Made from sustainable materials with attention to detail.",
    price: 15659,
    images: [
      "/products/denim_jeans_1.webp?height=600&width=400",
      "/products/denim_jeans_1.webp?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "women",
    tags: ["jeans", "denim", "casual"],
    colors: ["Blue", "Black", "Gray"],
    sizes: ["24", "26", "28", "30", "32"],
    bestseller: true,
    stock: 25,
  },
  {
    id: "4",
    name: "Cashmere Sweater",
    description: "Luxuriously soft cashmere sweater with ribbed details. Provides exceptional warmth without bulk.",
    price: 17404,
    originalPrice: 21755,
    images: [
      "/products/sweater_1.webp?height=600&width=400",
      "/products/sweater_2.jpg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "women",
    tags: ["sweater", "cashmere", "winter"],
    colors: ["Cream", "Gray", "Black", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sale: true,
    stock: 8,
  },
  {
    id: "5",
    name: "Structured Wool Coat",
    description:
      "A sophisticated wool coat with a structured silhouette. Features a double-breasted front and belt detail.",
    price: 30457,
    images: [
      "/products/wool_coat_1.avif?height=600&width=400",
      "/products/wool_coat_2.webp?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "women",
    tags: ["coat", "wool", "winter"],
    colors: ["Camel", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    new: true,
    stock: 12,
  },
  {
    id: "6",
    name: "Leather Ankle Boots",
    description: "Handcrafted leather ankle boots with a stacked heel. Versatile and comfortable for all-day wear.",
    price: 25228,
    images: [
      "/products/boots_1.webp?height=600&width=400",
      "/products/boots_2.avif?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "shoes",
    tags: ["boots", "leather", "shoes"],
    colors: ["Black", "Brown", "Tan"],
    sizes: ["36", "37", "38", "39", "40", "41"],
    bestseller: true,
    stock: 18,
  },
  {
    id: "7",
    name: "Pleated Midi Skirt",
    description: "An elegant pleated midi skirt with fluid movement. Perfect for creating sophisticated looks.",
    price: 13919,
    originalPrice: 16511,
    images: [
      "/products/skirt_1.jpg?height=600&width=400",
      "/products/skirt_2.webp?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "women",
    tags: ["skirt", "pleated", "midi"],
    colors: ["Black", "Navy", "Emerald"],
    sizes: ["XS", "S", "M", "L", "XL"],
    sale: true,
    stock: 14,
  },
  {
    id: "8",
    name: "Slim Fit Dress Shirt",
    description:
      "A premium cotton dress shirt with a slim fit. Features mother-of-pearl buttons and single-needle tailoring.",
    price: 11308,
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "men",
    tags: ["shirt", "formal", "cotton"],
    colors: ["White", "Light Blue", "Pink", "Black"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    new: true,
    stock: 20,
  },
  {
    id: "9",
    name: "Structured Shoulder Bag",
    description:
      "A sophisticated structured shoulder bag crafted from premium leather. Features gold-tone hardware and multiple compartments.",
    price: 28689,
    originalPrice: 33042,
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "accessories",
    tags: ["bag", "leather", "accessories"],
    colors: ["Black", "Tan", "Red"],
    sizes: ["One Size"],
    sale: true,
    stock: 7,
  },
  {
    id: "10",
    name: "Wool Blend Trousers",
    description:
      "Tailored wool blend trousers with a contemporary fit. Perfect for creating polished, professional looks.",
    price: 16511,
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "men",
    tags: ["trousers", "wool", "formal"],
    colors: ["Black", "Navy", "Gray"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    bestseller: true,
    stock: 15,
  },
  {
    id: "11",
    name: "Silk Evening Dress",
    description:
      "An exquisite silk evening dress with delicate embellishments. Designed to create a stunning silhouette.",
    price: 34807,
    images: [
      "/products/evening_!.jpg?height=600&width=400",
      "/products/evening_2.jpg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "women",
    tags: ["dress", "silk", "evening"],
    colors: ["Black", "Navy", "Burgundy"],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
    new: true,
    stock: 5,
  },
  {
    id: "12",
    name: "Merino Wool Scarf",
    description: "A luxuriously soft merino wool scarf with fringed edges. Provides exceptional warmth and comfort.",
    price: 7829,
    originalPrice: 9553,
    images: [
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
      "/placeholder.svg?height=600&width=400",
    ],
    category: "accessories",
    tags: ["scarf", "wool", "winter"],
    colors: ["Camel", "Gray", "Black", "Red"],
    sizes: ["One Size"],
    sale: true,
    stock: 22,
  },
];

