"use client"

import { useState } from "react"
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { Product } from "@/types/product"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-none h-10 w-10"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-none h-10 w-10"
            onClick={increaseQuantity}
            disabled={quantity >= product.stock}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="ml-4 text-sm text-muted-foreground">{product.stock} items available</div>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <Button className="flex-1 bg-primary hover:bg-primary/90 btn-hover" onClick={handleAddToCart}>
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button variant="outline" className="flex-1 btn-hover">
          <Heart className="mr-2 h-4 w-4" />
          Add to Wishlist
        </Button>
      </div>
    </div>
  )
}

