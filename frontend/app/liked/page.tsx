"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ShoppingCart, Trash2, ChevronLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"

export default function LikedPage() {
  const { t } = useLanguage()
  const [likedItems, setLikedItems] = useState([
    {
      id: 1,
      name: "ProDrill X1 Hammer",
      price: 299,
      originalPrice: 399,
      image: "/industrial-drill.png",
      category: "Drilling",
      inStock: true,
    },
    {
      id: 3,
      name: "FlexScaffold System",
      price: 1299,
      originalPrice: 1499,
      image: "/scaffolding-system.png",
      category: "Scaffolding",
      inStock: false,
    },
  ])

  const removeItem = (id: number) => {
    setLikedItems(likedItems.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-yellow-400 hover:text-yellow-500">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Mahsulotlarga qaytish
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-2 text-foreground dark:text-white">Yoqtirilgan mahsulotlar</h1>
          </div>

          {likedItems.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {likedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:border-yellow-500/50 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 bg-background/80 hover:bg-background text-red-500"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                        <div className="absolute top-2 left-2">
                          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                            {item.category}
                          </Badge>
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 text-foreground dark:text-white">{item.name}</h3>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xl font-bold text-yellow-400">${item.price}</span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground dark:text-gray-300 line-through">${item.originalPrice}</span>
                          )}
                        </div>

                        <div className="flex gap-2">
                          <Button
                            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black dark:bg-yellow-500 dark:text-black"
                            disabled={!item.inStock}
                          >
                            <ShoppingCart className="w-4 h-4 mr-2 text-foreground dark:text-white" />
                            {item.inStock ? "Savatga qo'shish" : "Tugagan"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 max-w-md mx-auto"
            >
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-foreground dark:text-white">Yoqtirilgan mahsulotlar yo'q</h2>
              <p className="text-muted-foreground dark:text-gray-300 mb-6">
                Siz hali hech qanday mahsulotni yoqtirmadingiz. Mahsulotlar katalogini ko'rib chiqing va yoqtirgan
                mahsulotlaringizni qo'shing.
              </p>
              <Link href="/products">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Mahsulotlarni ko'rish
                  <ChevronLeft className="ml-2 h-4 w-4 rotate-180" />
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
