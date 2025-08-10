"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ChevronLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"

export default function CartPage() {
  const { t } = useLanguage()
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "ProDrill X1 Hammer",
      price: 299,
      quantity: 1,
      image: "/industrial-drill.png",
    },
    {
      id: 2,
      name: "MixMaster Pro 2000",
      price: 459,
      quantity: 2,
      image: "/concrete-mixer.png",
    },
    {
      id: 4,
      name: "GrindForce Angle Pro",
      price: 189,
      quantity: 1,
      image: "/angle-grinder-sparks.png",
    },
  ])

  const updateQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change)
          return { ...item, quantity: newQuantity }
        }
        return item
      }),
    )
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 25
  const tax = subtotal * 0.12
  const total = subtotal + shipping + tax

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
            <h1 className="text-3xl md:text-4xl font-bold mt-2 text-foreground dark:text-white">Savatcha</h1>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {cartItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="w-24 h-24 relative flex-shrink-0 bg-muted rounded-md overflow-hidden">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-lg text-foreground dark:text-white">{item.name}</h3>
                              <p className="text-yellow-400 font-semibold mt-1">${item.price}</p>
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent text-foreground dark:text-white"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-foreground dark:text-white">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 bg-transparent text-foreground dark:text-white"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-foreground dark:text-white">${item.price * item.quantity}</p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-500 hover:text-red-600 hover:bg-red-50 mt-1"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4 mr-1 text-foreground dark:text-white" />
                                <span className="sr-only sm:not-sr-only">O'chirish</span>
                              </Button>
                            </div>
                          </div>
                          {index < cartItems.length - 1 && <Separator className="my-6" />}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-foreground dark:text-white">Buyurtma ma'lumotlari</h2>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground dark:text-gray-300">Jami mahsulotlar ({cartItems.length})</span>
                        <span className="text-foreground dark:text-white">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground dark:text-gray-300">Yetkazib berish</span>
                        <span className="text-foreground dark:text-white">${shipping.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground dark:text-gray-300">Soliq</span>
                        <span className="text-foreground dark:text-white">${tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span className="text-foreground dark:text-white">Jami summa</span>
                        <span className="text-foreground dark:text-white">${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <Link href="/checkout">
                      <Button className="w-full mt-6 bg-yellow-500 hover:bg-yellow-600 text-black">
                        Buyurtma berish
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <div className="mt-6 text-center text-sm text-muted-foreground">
                      <p>Xavfsiz to'lov usullari</p>
                      <div className="flex justify-center gap-2 mt-2">
                        <div className="w-10 h-6 bg-muted rounded"></div>
                        <div className="w-10 h-6 bg-muted rounded"></div>
                        <div className="w-10 h-6 bg-muted rounded"></div>
                        <div className="w-10 h-6 bg-muted rounded"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 max-w-md mx-auto"
            >
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2 text-foreground dark:text-white">Savatingiz bo'sh</h2>
              <p className="text-muted-foreground dark:text-gray-300 mb-6">
                Hozircha savatingizda hech qanday mahsulot yo'q. Mahsulotlar katalogini ko'rib chiqing.
              </p>
              <Link href="/products">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  Xarid qilishni boshlash
                  <ArrowRight className="ml-2 h-4 w-4" />
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
