"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, Heart, ShoppingCart, Share2, Truck, Shield, RotateCcw, Phone, Plus, Minus, Check, X } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function ProductDetailPage() {
  const params = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isLiked, setIsLiked] = useState(false)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Mock product data - in real app, fetch by ID
  const products = [
    {
      id: 1,
      name: "ProDrill X1 Hammer",
      brand: "ProTools",
      model: "PD-X1-2024",
      price: 299,
      originalPrice: 399,
      discount: 25,
      rating: 4.8,
      reviews: 124,
      inStock: true,
      stockCount: 45,
      description:
        "Professional hammer drill with LED light and cordless design. Perfect for heavy-duty construction work.",
      images: [
        "/industrial-drill.png",
        "/placeholder.svg?height=500&width=500&text=Drill+Side+View",
        "/placeholder.svg?height=500&width=500&text=Drill+Parts",
        "/placeholder.svg?height=500&width=500&text=Drill+In+Use",
      ],
      features: [
        "Lightweight design",
        "Cordless operation",
        "LED work light",
        "Variable speed control",
        "Anti-vibration system",
        "Quick-change chuck",
      ],
      specifications: {
        Quvvat: "800W",
        Tezlik: "0-3000 RPM",
        "Og'irlik": "2.1 kg",
        Batareya: "18V Li-ion",
        "Ish vaqti": "4-6 soat",
        "Zaryad vaqti": "1 soat",
        Kafolat: "2 yil",
        "Ishlab chiqaruvchi": "ProTools",
      },
      included: [
        "ProDrill X1 Hammer",
        "18V Li-ion batareya",
        "Zaryadlovchi",
        "Plastik quti",
        "Foydalanuvchi qo'llanmasi",
        "Kafolat guvohnomasi",
      ],
      shipping: {
        free: true,
        days: "1-2 kun",
        cost: 0,
      },
      warranty: "2 yil kafolat",
      returnPolicy: "30 kun ichida qaytarish",
    },
    {
      id: 2,
      name: "MixMaster Pro 2000",
      brand: "MixPro",
      model: "MP-2000-2024",
      price: 459,
      originalPrice: null,
      discount: 0,
      rating: 4.9,
      reviews: 89,
      inStock: true,
      stockCount: 23,
      description: "High-torque concrete mixer for professional use. Built for heavy-duty construction projects.",
      images: [
        "/concrete-mixer.png",
        "/placeholder.svg?height=500&width=500&text=Mixer+Side+View",
        "/placeholder.svg?height=500&width=500&text=Mixer+Parts",
        "/placeholder.svg?height=500&width=500&text=Mixer+In+Use",
      ],
      features: [
        "High torque motor",
        "Variable speed control",
        "Ergonomic design",
        "Durable construction",
        "Easy maintenance",
        "Professional grade",
      ],
      specifications: {
        Quvvat: "1200W",
        Tezlik: "0-2500 RPM",
        "Og'irlik": "3.8 kg",
        "Sig'im": "120L",
        "Ish vaqti": "Uzluksiz",
        Kuchlanish: "220V",
        Kafolat: "3 yil",
        "Ishlab chiqaruvchi": "MixPro",
      },
      included: [
        "MixMaster Pro 2000",
        "Aralashtirish pallasi",
        "Qo'llanma",
        "Kafolat guvohnomasi",
        "Texnik xizmat ko'rsatish kartasi",
      ],
      shipping: {
        free: true,
        days: "2-3 kun",
        cost: 0,
      },
      warranty: "3 yil kafolat",
      returnPolicy: "30 kun ichida qaytarish",
    },
  ]

  // Find product by ID
  const product = products.find((p) => p.id === Number.parseInt(params.id as string)) || products[0]

  const relatedProducts = [
    {
      id: 2,
      name: "MixMaster Pro 2000",
      price: 459,
      image: "/concrete-mixer.png",
      rating: 4.9,
    },
    {
      id: 3,
      name: "GrindForce Angle Pro",
      price: 189,
      image: "/angle-grinder-sparks.png",
      rating: 4.6,
    },
    {
      id: 4,
      name: "FlexScaffold System",
      price: 1299,
      image: "/scaffolding-system.png",
      rating: 4.7,
    },
  ].filter((p) => p.id !== product.id)

  const reviews = [
    {
      id: 1,
      user: "Aziz Karimov",
      rating: 5,
      date: "2024-01-15",
      comment: "Juda yaxshi mahsulot! Ishlatishga qulay va kuchli. Tavsiya qilaman.",
      verified: true,
    },
    {
      id: 2,
      user: "Malika Tosheva",
      rating: 4,
      date: "2024-01-10",
      comment: "Yaxshi sifat, lekin narxi biroz qimmat. Umuman olganda mamnunman.",
      verified: true,
    },
    {
      id: 3,
      user: "Bobur Rahimov",
      rating: 5,
      date: "2024-01-08",
      comment: "Professional darajada mahsulot. Barcha xususiyatlari ishlamoqda.",
      verified: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-yellow-400">
              Bosh sahifa
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-yellow-400">
              Mahsulotlar
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {product.discount > 0 && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">-{product.discount}%</Badge>
                )}
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square bg-muted rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-yellow-500" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="text-yellow-400 border-yellow-400/50 mb-2">
                  {product.brand}
                </Badge>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-muted-foreground">Model: {product.model}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} ta sharh)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-yellow-400">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-green-500">Omborda mavjud ({product.stockCount} ta)</span>
                  </>
                ) : (
                  <>
                    <X className="w-5 h-5 text-red-500" />
                    <span className="text-red-500">Omborda yo'q</span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Features */}
              <div>
                <h3 className="font-semibold mb-3">Asosiy xususiyatlar:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Miqdor:</span>
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      disabled={quantity >= product.stockCount}
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black" disabled={!product.inStock}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Savatga qo'shish
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? "text-red-500 border-red-500" : ""}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-medium">Bepul yetkazib berish</div>
                    <div className="text-sm text-muted-foreground">{product.shipping.days} ichida</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">{product.warranty}</div>
                    <div className="text-sm text-muted-foreground">Rasmiy kafolat</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="font-medium">{product.returnPolicy}</div>
                    <div className="text-sm text-muted-foreground">Pulsiz qaytarish</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="specifications" className="mb-16">
            <TabsList className="grid w-full grid-cols-4 bg-muted">
              <TabsTrigger value="specifications">Texnik xususiyatlar</TabsTrigger>
              <TabsTrigger value="included">Komplektatsiya</TabsTrigger>
              <TabsTrigger value="reviews">Sharhlar ({product.reviews})</TabsTrigger>
              <TabsTrigger value="qa">Savol-javob</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="included" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Komplektga kiradi:</h3>
                  <div className="space-y-3">
                    {product.included.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">{review.user}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                                Tasdiqlangan
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString("uz-UZ")}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="qa" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <Phone className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Savolingiz bormi?</h3>
                    <p className="text-muted-foreground mb-4">
                      Mahsulot haqida qo'shimcha ma'lumot olish uchun biz bilan bog'laning
                    </p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      <Phone className="w-4 h-4 mr-2" />
                      +998 90 123 45 67
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-8">O'xshash mahsulotlar</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/products/${relatedProduct.id}`}>
                    <Card className="hover:border-yellow-500/50 transition-all duration-300 cursor-pointer">
                      <CardContent className="p-4">
                        <div className="relative aspect-square bg-muted rounded-lg overflow-hidden mb-4">
                          <Image
                            src={relatedProduct.image || "/placeholder.svg"}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 33vw"
                          />
                        </div>
                        <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-yellow-400">${relatedProduct.price}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm">{relatedProduct.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
