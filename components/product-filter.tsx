"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FilterOption {
  id: string
  label: string
  checked: boolean
}

export default function ProductFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [priceRange, setPriceRange] = useState([0, 500])
  const [categories, setCategories] = useState<FilterOption[]>([
    { id: "women", label: "Women", checked: false },
    { id: "men", label: "Men", checked: false },
    { id: "accessories", label: "Accessories", checked: false },
    { id: "shoes", label: "Shoes", checked: false },
  ])

  const [tags, setTags] = useState<FilterOption[]>([
    { id: "new", label: "New Arrivals", checked: false },
    { id: "sale", label: "Sale", checked: false },
    { id: "bestseller", label: "Bestsellers", checked: false },
    { id: "featured", label: "Featured", checked: false },
  ])

  const [sizes, setSizes] = useState<FilterOption[]>([
    { id: "xs", label: "XS", checked: false },
    { id: "s", label: "S", checked: false },
    { id: "m", label: "M", checked: false },
    { id: "l", label: "L", checked: false },
    { id: "xl", label: "XL", checked: false },
  ])

  const [colors, setColors] = useState<FilterOption[]>([
    { id: "black", label: "Black", checked: false },
    { id: "white", label: "White", checked: false },
    { id: "red", label: "Red", checked: false },
    { id: "blue", label: "Blue", checked: false },
    { id: "gray", label: "Gray", checked: false },
  ])

  const toggleCategory = (id: string) => {
    setCategories((prev) =>
      prev.map((category) => (category.id === id ? { ...category, checked: !category.checked } : category)),
    )
  }

  const toggleTag = (id: string) => {
    setTags((prev) => prev.map((tag) => (tag.id === id ? { ...tag, checked: !tag.checked } : tag)))
  }

  const toggleSize = (id: string) => {
    setSizes((prev) => prev.map((size) => (size.id === id ? { ...size, checked: !size.checked } : size)))
  }

  const toggleColor = (id: string) => {
    setColors((prev) => prev.map((color) => (color.id === id ? { ...color, checked: !color.checked } : color)))
  }

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams.toString())

    // Clear existing filter params
    params.delete("category")
    params.delete("tag")
    params.delete("size")
    params.delete("color")
    params.delete("minPrice")
    params.delete("maxPrice")

    // Add selected categories
    categories.filter((c) => c.checked).forEach((c) => params.append("category", c.id))

    // Add selected tags
    tags.filter((t) => t.checked).forEach((t) => params.append("tag", t.id))

    // Add selected sizes
    sizes.filter((s) => s.checked).forEach((s) => params.append("size", s.id))

    // Add selected colors
    colors.filter((c) => c.checked).forEach((c) => params.append("color", c.id))

    // Add price range
    params.set("minPrice", priceRange[0].toString())
    params.set("maxPrice", priceRange[1].toString())

    router.push(`/shop?${params.toString()}`)
  }

  const resetFilters = () => {
    setCategories(categories.map((c) => ({ ...c, checked: false })))
    setTags(tags.map((t) => ({ ...t, checked: false })))
    setSizes(sizes.map((s) => ({ ...s, checked: false })))
    setColors(colors.map((c) => ({ ...c, checked: false })))
    setPriceRange([0, 500])

    router.push("/shop")
  }

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-semibold">All Products</h2>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md overflow-y-auto">
          <SheetHeader className="mb-5">
            <SheetTitle>Filter Products</SheetTitle>
          </SheetHeader>

          <div className="space-y-6">
            <Accordion type="single" collapsible defaultValue="price" className="w-full">
              <AccordionItem value="price">
                <AccordionTrigger>Price Range</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 px-1">
                    <Slider
                      defaultValue={[0, 500]}
                      max={500}
                      step={10}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex items-center justify-between">
                      <p className="text-sm">₹{priceRange[0]}</p>
                      <p className="text-sm">₹{priceRange[1]}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="categories">
                <AccordionTrigger>Categories</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`category-${category.id}`}
                          checked={category.checked}
                          onCheckedChange={() => toggleCategory(category.id)}
                        />
                        <label
                          htmlFor={`category-${category.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tags">
                <AccordionTrigger>Product Tags</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {tags.map((tag) => (
                      <div key={tag.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`tag-${tag.id}`}
                          checked={tag.checked}
                          onCheckedChange={() => toggleTag(tag.id)}
                        />
                        <label
                          htmlFor={`tag-${tag.id}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {tag.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sizes">
                <AccordionTrigger>Sizes</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <div
                        key={size.id}
                        className={`
                          flex h-8 w-8 items-center justify-center rounded-md border text-sm cursor-pointer
                          ${size.checked ? "bg-primary text-white border-primary" : "border-input"}
                        `}
                        onClick={() => toggleSize(size.id)}
                      >
                        {size.label}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="colors">
                <AccordionTrigger>Colors</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-3">
                    {colors.map((color) => (
                      <div
                        key={color.id}
                        className={`
                          relative h-8 w-8 rounded-full cursor-pointer
                          ${color.checked ? "ring-2 ring-primary ring-offset-2" : ""}
                        `}
                        style={{ backgroundColor: color.id }}
                        onClick={() => toggleColor(color.id)}
                      >
                        {color.id === "white" && (
                          <div className="absolute inset-0 rounded-full border border-gray-200" />
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex items-center justify-between pt-4 border-t">
              <Button variant="outline" size="sm" onClick={resetFilters}>
                <X className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button size="sm" onClick={applyFilters}>
                Apply Filters
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

