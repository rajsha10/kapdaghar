"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [isPromoApplied, setIsPromoApplied] = useState(false)

  const shipping = 0 // Free shipping
  const discount = isPromoApplied ? subtotal * 0.1 : 0 // 10% discount if promo applied
  const total = subtotal - discount + shipping

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setIsPromoApplied(true)
    }
  }

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16">
        <div className="container max-w-4xl">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild>
              <Link href="/shop">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <Link
            href="/shop"
            className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 py-4 border-b">
                <div className="relative aspect-square h-24 w-24 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={item.product.images[0] || "/placeholder.svg"}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium">
                        <Link href={`/product/${item.product.id}`} className="hover:text-primary transition-colors">
                          {item.product.name}
                        </Link>
                      </h3>
                      <div className="mt-1 flex items-center text-sm text-muted-foreground">
                        <span className="mr-2">Color: Black</span>
                        <span>Size: M</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-medium">₹{(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded-md">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-none h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-none h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= item.product.stock}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => removeItem(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-end">
              <Button variant="outline" size="sm" className="text-muted-foreground" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-lg border p-6 space-y-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                {isPromoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-₹{discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping.toFixed(2)}`}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="promo">Promo Code</Label>
                <div className="flex gap-2">
                  <Input
                    id="promo"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={isPromoApplied}
                  />
                  <Button variant="outline" onClick={handleApplyPromo} disabled={isPromoApplied || !promoCode}>
                    Apply
                  </Button>
                </div>
                {isPromoApplied && <p className="text-xs text-green-600">Promo code applied successfully!</p>}
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 btn-hover">Proceed to Checkout</Button>

              <p className="text-xs text-center text-muted-foreground">
                Taxes calculated at checkout. Shipping calculated based on delivery address.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

