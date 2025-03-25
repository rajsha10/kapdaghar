import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { products } from "@/lib/products"

export default function Home() {
  //products
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4)

  //bestsellers
  const bestsellers = products.filter((product) => product.bestseller).slice(0, 4)

  //arrivals
  const newArrivals = products.filter((product) => product.new).slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 parallax-bg">
          <Image
            src="/hero.gif?height=1080&width=1920"
            alt="Hero Image"
            fill
            priority
            // className="object-cover"
          />
        </div>
        <div className="absolute inset-0 0" />
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl animate-fade-in text-shadow">
            Elegance in Every Thread
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl animate-slide-up delay-100 text-shadow">
            Discover our premium collection of luxury fashion designed for the modern individual
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-slide-up delay-200">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 btn-hover" asChild>
              <Link href="/shop">Shop Collection</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10 btn-hover" asChild>
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Collection</h2>
              <p className="text-muted-foreground mt-2">Handpicked pieces for the season</p>
            </div>
            <Link
              href="/shop"
              className="mt-4 md:mt-0 flex items-center text-sm font-medium hover:text-primary transition-colors"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 border border-primary text-primary text-sm font-medium">
                NEW SEASON
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Elevate Your Style</h2>
              <p className="text-gray-300 max-w-md">
                Our latest collection brings together timeless elegance and contemporary design for the modern wardrobe.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white btn-hover" asChild>
                <Link href="/shop?category=new">Explore New Arrivals</Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg image-hover-zoom">
              <Image src="/placeholder.svg?height=800&width=600" alt="New Collection" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Bestsellers</h2>
              <p className="text-muted-foreground mt-2">Our most loved pieces</p>
            </div>
            <Link
              href="/shop?tag=bestseller"
              className="mt-4 md:mt-0 flex items-center text-sm font-medium hover:text-primary transition-colors"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=1000&width=800" alt="Brand Story" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                KapdaGhar was founded with a vision to create timeless pieces that blend luxury with everyday
                wearability. Our commitment to quality craftsmanship and sustainable practices defines everything we do.
              </p>
              <p className="text-muted-foreground">
                Each piece in our collection is thoughtfully designed and meticulously crafted using the finest
                materials sourced from around the world.
              </p>
              <Button variant="outline" className="btn-hover" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">New Arrivals</h2>
              <p className="text-muted-foreground mt-2">Fresh additions to our collection</p>
            </div>
            <Link
              href="/shop?tag=new"
              className="mt-4 md:mt-0 flex items-center text-sm font-medium hover:text-primary transition-colors"
            >
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Community</h2>
            <p className="text-gray-300">
              Subscribe to our newsletter for exclusive offers, early access to new collections, and styling
              inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white btn-hover">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

