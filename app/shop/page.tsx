import { Suspense } from "react"
import ProductCard from "@/components/product-card"
import ProductFilter from "@/components/product-filter"
import ProductSort from "@/components/product-sort"
import { products } from "@/lib/products"

interface SearchParams {
  category?: string | string[]
  tag?: string | string[]
  size?: string | string[]
  color?: string | string[]
  minPrice?: string
  maxPrice?: string
  sort?: string
}

export default function ShopPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  // Filter products based on search params
  let filteredProducts = [...products]

  // Filter by category
  if (searchParams.category) {
    const categories = Array.isArray(searchParams.category) ? searchParams.category : [searchParams.category]

    filteredProducts = filteredProducts.filter((product) => categories.includes(product.category))
  }

  // Filter by tag
  if (searchParams.tag) {
    const tags = Array.isArray(searchParams.tag) ? searchParams.tag : [searchParams.tag]

    filteredProducts = filteredProducts.filter((product) =>
      tags.some((tag) => {
        if (tag === "new") return product.new
        if (tag === "sale") return product.sale
        if (tag === "bestseller") return product.bestseller
        if (tag === "featured") return product.featured
        return false
      }),
    )
  }

  // Filter by size
  if (searchParams.size) {
    const sizes = Array.isArray(searchParams.size) ? searchParams.size : [searchParams.size]

    filteredProducts = filteredProducts.filter((product) =>
      product.sizes.some((size) => sizes.includes(size.toLowerCase())),
    )
  }

  // Filter by color
  if (searchParams.color) {
    const colors = Array.isArray(searchParams.color) ? searchParams.color : [searchParams.color]

    filteredProducts = filteredProducts.filter((product) =>
      product.colors.some((color) => colors.includes(color.toLowerCase())),
    )
  }

  // Filter by price range
  if (searchParams.minPrice || searchParams.maxPrice) {
    const minPrice = searchParams.minPrice ? Number.parseFloat(searchParams.minPrice) : 0
    const maxPrice = searchParams.maxPrice ? Number.parseFloat(searchParams.maxPrice) : Number.POSITIVE_INFINITY

    filteredProducts = filteredProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice)
  }

  // Sort products
  if (searchParams.sort) {
    switch (searchParams.sort) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case "newest":
        filteredProducts = filteredProducts.filter((product) => product.new)
        break
      case "bestselling":
        filteredProducts = filteredProducts.filter((product) => product.bestseller)
        break
      default:
        break
    }
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <ProductFilter />
          <ProductSort />
        </div>

        <Suspense fallback={<div>Loading products...</div>}>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters to find what you're looking for.</p>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  )
}

