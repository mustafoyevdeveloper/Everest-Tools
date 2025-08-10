"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Grid, List, Star, Heart, ShoppingCart } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  const { t } = useLanguage()
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { id: "all", name: "Barcha mahsulotlar" },
    { id: "drilling", name: "Burg'ulash asboblari" },
    { id: "mixing", name: "Aralashtirish asboblari" },
    { id: "scaffolding", name: "Iskala tizimlari" },
    { id: "grinding", name: "Silliqlash asboblari" },
    { id: "measuring", name: "O'lchash asboblari" },
  ]

  // Mahsulotlar backenddan yoki contextdan olinadi. Statik mahsulotlar olib tashlandi.
  type Product = {
    id: number | string
    name: string
    category: string
    price: number
    originalPrice?: number | null
    image?: string
    rating: number
    reviews: number
    features: string[]
    inStock: boolean
    isNew?: boolean
    brand?: string
    description?: string
  }

  const products: Product[] = []

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 sm:mb-6">
              {t("nav.products")} <span className="text-yellow-400">Catalog</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 dark:text-gray-300 leading-relaxed px-4 sm:px-0">
              Professional construction tools for every project. Find the perfect equipment for your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 sm:py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-4 items-stretch">
            {/* Search and Filters Row */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Mahsulotlarni qidirish..."
                  className="pl-10 h-10 sm:h-11"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48 h-10 sm:h-11">
                  <SelectValue placeholder="Kategoriya" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48 h-10 sm:h-11">
                  <SelectValue placeholder="Saralash" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Nomi bo'yicha</SelectItem>
                  <SelectItem value="price-low">Arzon narx</SelectItem>
                  <SelectItem value="price-high">Qimmat narx</SelectItem>
                  <SelectItem value="rating">Reyting bo'yicha</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode and Results */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">{sortedProducts.length} ta mahsulot topildi</div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                  className={`h-9 w-9 ${viewMode === "grid" ? "bg-yellow-500 text-black hover:bg-yellow-600" : ""}`}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                  className={`h-9 w-9 ${viewMode === "list" ? "bg-yellow-500 text-black hover:bg-yellow-600" : ""}`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                : "flex flex-col gap-4 sm:gap-6"
            }
          >
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-full"
              >
                <Link href={`/products/${product.id}`} className="block">
                  <Card
                    className={`bg-card border-border hover:border-yellow-500/50 transition-all duration-300 overflow-hidden cursor-pointer hover:shadow-lg hover:scale-[1.02] ${
                      viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                    }`}
                  >
                    <CardContent className={`p-0 ${viewMode === "list" ? "flex flex-col sm:flex-row w-full" : ""}`}>
                      <div
                        className={`relative overflow-hidden ${
                          viewMode === "list" ? "w-full sm:w-48 md:w-64 flex-shrink-0" : ""
                        }`}
                      >
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={300}
                          className={`object-cover hover:scale-110 transition-transform duration-500 ${
                            viewMode === "list" ? "w-full h-48 sm:h-full" : "w-full h-48 sm:h-56 lg:h-64"
                          }`}
                        />
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-2">
                          {product.isNew && <Badge className="bg-yellow-500 text-black text-xs">NEW</Badge>}
                          {product.originalPrice && <Badge className="bg-red-500 text-white text-xs">SALE</Badge>}
                          {!product.inStock && <Badge className="bg-gray-500 text-white text-xs">TUGAGAN</Badge>}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-background/80 hover:bg-background text-muted-foreground hover:text-red-500 h-8 w-8 sm:h-9 sm:w-9"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            // Handle like functionality
                          }}
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className={`p-4 sm:p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                        <div className="mb-2">
                          <Badge variant="outline" className="text-yellow-400 border-yellow-400/50 mb-2 text-xs">
                            {product.brand}
                          </Badge>
                          <h3 className="text-lg sm:text-xl font-bold text-foreground hover:text-yellow-400 transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex text-yellow-400">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(product.rating) ? "fill-current" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs sm:text-sm text-muted-foreground">
                            {product.rating} ({product.reviews} ta sharh)
                          </span>
                        </div>

                        {viewMode === "list" && (
                          <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-2">
                            {product.description}
                          </p>
                        )}

                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.features.slice(0, viewMode === "list" ? 4 : 3).map((feature, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs bg-muted text-muted-foreground">
                              {feature}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xl sm:text-2xl font-bold text-yellow-400">${product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm sm:text-lg text-muted-foreground line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black text-sm h-9 sm:h-10"
                            disabled={!product.inStock}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              // Handle add to cart
                            }}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            <span className="hidden sm:inline">
                              {product.inStock ? "Savatga qo'shish" : "Xabar berish"}
                            </span>
                            <span className="sm:hidden">{product.inStock ? "Savat" : "Xabar"}</span>
                          </Button>
                          <Button
                            variant="outline"
                            className="border-border bg-transparent px-3 sm:px-4 h-9 sm:h-10 text-sm"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              window.location.href = `/products/${product.id}`
                            }}
                          >
                            Ko'rish
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Hech qanday mahsulot topilmadi</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
