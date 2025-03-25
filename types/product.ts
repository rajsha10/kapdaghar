export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  tags: string[]
  colors: string[]
  sizes: string[]
  featured?: boolean
  bestseller?: boolean
  new?: boolean
  sale?: boolean
  stock: number
}

