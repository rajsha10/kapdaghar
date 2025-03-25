"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/types/product"
import { useCart } from "@/hooks/use-cart"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { addItem } = useCart()

  const handleMouseEnter = () => {
    if (product.images.length > 1) {
      setCurrentImageIndex(1)
    }
  }

  const handleMouseLeave = () => {
    setCurrentImageIndex(0)
  }

  return (
    <div className="group relative product-card-hover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative aspect-square overflow-hidden rounded-md bg-gray-100 image-hover-zoom">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-all duration-300"
          />
        </Link>

        {/* Product badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.new && <Badge className="bg-primary text-white">New</Badge>}
          {product.sale && <Badge className="bg-destructive text-white">Sale</Badge>}
        </div>

        {/* Quick actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex justify-between items-center">
            <Button
              size="sm"
              className="bg-white text-black hover:bg-white/90 btn-hover"
              onClick={() => addItem(product)}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-accent hover:bg-transparent">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="text-sm font-medium group-hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {product.sale ? (
              <>
                <p className="text-sm font-semibold">₹{product.price.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground line-through">₹{product.originalPrice?.toFixed(2)}</p>
              </>
            ) : (
              <p className="text-sm font-semibold">₹{product.price.toFixed(2)}</p>
            )}
          </div>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="h-3 w-3 rounded-full border"
                style={{
                  backgroundColor: color.toLowerCase(),
                  borderColor: color.toLowerCase() === "white" ? "#e5e7eb" : "transparent",
                }}
              />
            ))}
            {product.colors.length > 3 && (
              <div className="text-xs text-muted-foreground">+{product.colors.length - 3}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

