import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 parallax-bg">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="About Hero"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl animate-fade-in text-shadow">
            Our Story
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl animate-slide-up delay-100 text-shadow">
            Crafting premium fashion with passion and purpose since 2010
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                At KapdaGhar, our mission is to create timeless, high-quality garments that empower individuals to
                express their unique style with confidence. We believe that fashion should be both beautiful and
                responsible.
              </p>
              <p className="text-muted-foreground">
                Every piece in our collection is thoughtfully designed and meticulously crafted using premium materials
                sourced from ethical suppliers around the world. We are committed to sustainable practices and fair
                labor standards throughout our supply chain.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg image-hover-zoom">
              <Image src="/placeholder.svg?height=800&width=600" alt="Our Mission" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm hover-scale">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Craftsmanship</h3>
              <p className="text-muted-foreground">
                We believe in creating garments that stand the test of time, both in style and durability. Each piece is
                crafted with meticulous attention to detail.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm hover-scale">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Ethical Production</h3>
              <p className="text-muted-foreground">
                We are committed to ethical manufacturing practices and fair wages for all workers involved in creating
                our products.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm hover-scale">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We strive to minimize our environmental impact through responsible material sourcing, waste reduction,
                and eco-friendly packaging.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm hover-scale">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Timeless Design</h3>
              <p className="text-muted-foreground">
                We create pieces that transcend seasonal trends, focusing on elegant silhouettes and versatile styles
                that remain relevant year after year.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm hover-scale">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">05</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Customer Experience</h3>
              <p className="text-muted-foreground">
                We are dedicated to providing exceptional service and creating meaningful connections with our community
                of customers.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm hover-scale">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary text-xl font-bold">06</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Inclusivity</h3>
              <p className="text-muted-foreground">
                We celebrate diversity and create clothing that empowers individuals of all backgrounds, body types, and
                personal styles to feel confident and beautiful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center md:items-end">
                <div className="text-primary font-bold text-xl">2010</div>
                <div className="h-full w-px bg-border hidden md:block mt-2"></div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                <p className="text-muted-foreground">
                  KapdaGhar was founded with a vision to create timeless, high-quality garments that would stand apart
                  from fast fashion. Our first collection featured just 12 meticulously crafted pieces.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center md:items-end">
                <div className="text-primary font-bold text-xl">2015</div>
                <div className="h-full w-px bg-border hidden md:block mt-2"></div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Expanding Our Vision</h3>
                <p className="text-muted-foreground">
                  After five years of steady growth, we expanded our collection to include accessories and footwear,
                  maintaining our commitment to quality and ethical production.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center md:items-end">
                <div className="text-primary font-bold text-xl">2018</div>
                <div className="h-full w-px bg-border hidden md:block mt-2"></div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Sustainability Pledge</h3>
                <p className="text-muted-foreground">
                  We formalized our commitment to sustainability with a comprehensive pledge to reduce our environmental
                  footprint and increase transparency in our supply chain.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center md:items-end">
                <div className="text-primary font-bold text-xl">2020</div>
                <div className="h-full w-px bg-border hidden md:block mt-2"></div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Global Presence</h3>
                <p className="text-muted-foreground">
                  KapdaGhar expanded to international markets, bringing our vision of elegant, sustainable fashion to
                  customers around the world through our online platform.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center md:items-end">
                <div className="text-primary font-bold text-xl">Today</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Looking Forward</h3>
                <p className="text-muted-foreground">
                  Today, KapdaGhar continues to grow while staying true to our founding principles. We're constantly
                  innovating to create beautiful, responsible fashion for the modern individual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg overflow-hidden hover-scale">
              <div className="aspect-[3/4] relative">
                <Image src="/placeholder.svg?height=600&width=450" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Sophia Chen</h3>
                <p className="text-primary mb-2">Founder & Creative Director</p>
                <p className="text-muted-foreground text-sm">
                  With over 15 years of experience in luxury fashion, Sophia brings her vision and expertise to every
                  KapdaGhar collection.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden hover-scale">
              <div className="aspect-[3/4] relative">
                <Image src="/placeholder.svg?height=600&width=450" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Marcus Johnson</h3>
                <p className="text-primary mb-2">Head of Design</p>
                <p className="text-muted-foreground text-sm">
                  Marcus leads our design team with a focus on creating timeless pieces that blend classic elegance with
                  contemporary sensibilities.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden hover-scale">
              <div className="aspect-[3/4] relative">
                <Image src="/placeholder.svg?height=600&width=450" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Aisha Patel</h3>
                <p className="text-primary mb-2">Sustainability Director</p>
                <p className="text-muted-foreground text-sm">
                  Aisha ensures that our commitment to ethical and sustainable practices is implemented throughout our
                  entire production process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Journey</h2>
            <p className="text-gray-300">
              Experience the KapdaGhar difference for yourself. Explore our collection of thoughtfully designed,
              ethically produced fashion.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white btn-hover" asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

