import { notFound } from "next/navigation"
import { Truck, ShieldCheck, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCard from "@/components/product-card"
import AddToCartButton from "./add-to-cart-button"
import ProductImageGallery from "./product-image-gallery"
import { products } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <Link
          href="/shop"
          className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <ProductImageGallery images={product.images} />

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.new && <Badge className="bg-primary text-white">New</Badge>}
                {product.sale && <Badge className="bg-destructive text-white">Sale</Badge>}
                {product.bestseller && <Badge variant="outline">Bestseller</Badge>}
              </div>

              <h1 className="text-3xl font-bold">{product.name}</h1>

              <div className="flex items-center gap-2 mt-2">
                {product.sale ? (
                  <>
                    <span className="text-2xl font-semibold">₹{product.price.toFixed(2)}</span>
                    <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice?.toFixed(2)}
                    </span>
                  </>
                ) : (
                  <span className="text-2xl font-semibold">₹{product.price.toFixed(2)}</span>
                )}
              </div>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Colors</h3>
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="relative h-8 w-8 rounded-full cursor-pointer border border-input"
                      style={{ backgroundColor: color.toLowerCase() }}
                    >
                      {color.toLowerCase() === "white" && (
                        <div className="absolute inset-0 rounded-full border border-gray-200" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Sizes</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <div
                      key={index}
                      className="flex h-9 min-w-9 items-center justify-center rounded-md border border-input bg-background px-3 text-sm"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Separator />

            <AddToCartButton product={product} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-2">
                <Truck className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">Free Shipping</h4>
                  <p className="text-xs text-muted-foreground">On orders over ₹100</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium">2 Year Warranty</h4>
                  <p className="text-xs text-muted-foreground">Quality guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="w-full justify-start border-b rounded-none">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Product Details</h3>
                <p className="text-muted-foreground">
                  {product.description} Our commitment to quality ensures that each piece is crafted with attention to
                  detail and made to last.
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Premium quality materials</li>
                  <li>Ethically manufactured</li>
                  <li>Designed for comfort and style</li>
                  <li>Versatile for various occasions</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Shipping Information</h3>
                <p className="text-muted-foreground">
                  We offer free standard shipping on all orders over ₹100. Orders are typically processed within 1-2
                  business days.
                </p>
                <h3 className="text-lg font-medium">Return Policy</h3>
                <p className="text-muted-foreground">
                  If you're not completely satisfied with your purchase, you can return it within 30 days for a full
                  refund or exchange. Items must be unworn and in original condition with tags attached.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="care" className="pt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Care Instructions</h3>
                <p className="text-muted-foreground">
                  To ensure the longevity of your garment, please follow these care instructions:
                </p>
                <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                  <li>Machine wash cold with similar colors</li>
                  <li>Use mild detergent</li>
                  <li>Do not bleach</li>
                  <li>Tumble dry low</li>
                  <li>Iron on low heat if needed</li>
                  <li>Do not dry clean</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

