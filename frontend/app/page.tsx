"use client"

import { Suspense, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { motion } from "framer-motion"
import { ChevronRight, Shield, Truck, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { Package, Wrench, Headphones, Info, Phone, Sun, Moon, Heart, ShoppingCart, LogIn, UserPlus } from "lucide-react"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"

// 3D Tool Component
function Tool3D() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.5, 2, 8]} />
        <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.8, 0.4, 0.4]} />
        <meshStandardMaterial color="#2A2A2A" metalness={0.9} roughness={0.1} />
      </mesh>
    </Float>
  )
}

// Hero Section
function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none block">
        {/* Light mode: qora pattern, dark mode: avvalgidek */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000' fillOpacity='0.13'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FFD700' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      {/* Light mode: ko‘kimtir gradient shadow overlay */}
      <div className="absolute inset-0 pointer-events-none dark:hidden" style={{
        background: "linear-gradient(120deg, rgba(0,40,120,0.10) 0%, rgba(0,40,120,0.18) 100%)"
      }} />

      <div className="container mx-auto px-2 sm:px-4 pt-16 sm:pt-32 pb-8 sm:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-2 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
              >
                <Badge className="bg-yellow-500 text-black border-yellow-500 text-xs sm:text-sm shadow-sm font-semibold">
                  Professional Grade
                </Badge>
                <Badge className="bg-black text-yellow-500 border-black text-xs sm:text-sm shadow-sm font-semibold">
                  Industrial Quality
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white leading-tight"
              >
                PRECISION
                <span className="block text-yellow-500">TOOLS</span>
                <span className="block sm:inline text-black dark:text-white"> FOR PROS</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0"
              >
                {t("hero.subtitle")}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 sm:px-0 w-full"
            >
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg h-12 sm:h-auto shadow-md rounded-lg border-2 border-yellow-500 w-full sm:w-auto"
                >
                  {t("hero.explore")}
                  <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                className="border-black text-black hover:bg-yellow-50 dark:border-yellow-500 dark:text-yellow-400 dark:hover:bg-yellow-500/10 px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent h-12 sm:h-auto shadow-md rounded-lg font-bold w-full sm:w-auto"
              >
                {t("hero.demo")}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-2 sm:gap-8 pt-4 sm:pt-8 px-2 sm:px-0"
            >
              {[
                { icon: Shield, label: t("hero.warranty"), value: "Guaranteed" },
                { icon: Truck, label: t("hero.shipping"), value: "Worldwide" },
                { icon: Award, label: t("hero.certified"), value: "Quality" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-500 mx-auto mb-1 sm:mb-2" />
                  <div className="text-xs sm:text-sm text-gray-500">{item.label}</div>
                  <div className="text-xs sm:text-base text-gray-900 font-semibold">{item.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            id="demo"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-48 sm:h-64 lg:h-[600px] order-1 lg:order-2 flex items-center justify-center"
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Tool3D />
                <Environment preset="warehouse" />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
              </Suspense>
            </Canvas>

            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute top-2 sm:top-20 right-2 sm:right-10 bg-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-2 sm:p-4"
            >
              <div className="text-yellow-400 text-xs sm:text-sm font-semibold">LIVE DEMO</div>
              <div className="text-white text-xs">Interactive 3D Model</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute bottom-2 sm:bottom-20 left-2 sm:left-10 bg-black/80 backdrop-blur-sm border border-yellow-500/30 rounded-lg p-2 sm:p-4"
            >
              <div className="text-yellow-400 text-xs sm:text-sm font-semibold">PRECISION</div>
              <div className="text-white text-xs"> 0.1mm Accuracy</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Featured Products Section
function FeaturedProducts() {
  const { t } = useLanguage()

  const products = [
    {
      id: 1,
      name: "ProDrill X1 Hammer",
      category: "Drilling",
      price: 299,
      originalPrice: 399,
      image: "/industrial-drill.png",
      rating: 4.8,
      reviews: 124,
      features: ["Lightweight", "Cordless", "LED Light"],
      inStock: true,
      isNew: true,
    },
    {
      id: 2,
      name: "MixMaster Pro 2000",
      category: "Mixing",
      price: 459,
      originalPrice: null,
      image: "/concrete-mixer.png",
      rating: 4.9,
      reviews: 89,
      features: ["High Torque", "Variable Speed", "Ergonomic"],
      inStock: true,
      isNew: false,
    },
    {
      id: 3,
      name: "FlexScaffold System",
      category: "Scaffolding",
      price: 1299,
      originalPrice: 1499,
      image: "/scaffolding-system.png",
      rating: 4.7,
      reviews: 67,
      features: ["Modular", "Quick Setup", "Safety Certified"],
      inStock: false,
      isNew: false,
    },
    {
      id: 4,
      name: "GrindForce Angle Pro",
      category: "Grinding",
      price: 189,
      originalPrice: null,
      image: "/angle-grinder-sparks.png",
      rating: 4.6,
      reviews: 203,
      features: ["Dust Protection", "Anti-Vibration", "Quick Change"],
      inStock: true,
      isNew: true,
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("products.featured")} <span className="text-yellow-400">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            {t("products.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-card border-border hover:border-yellow-500/50 transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-col gap-2">
                      {product.isNew && <Badge className="bg-yellow-500 text-black text-xs">NEW</Badge>}
                      {product.originalPrice && <Badge className="bg-red-500 text-white text-xs">SALE</Badge>}
                      {!product.inStock && (
                        <Badge className="bg-gray-500 text-white text-xs">{t("products.outOfStock")}</Badge>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-sm">
                        {t("products.quickView")}
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <div className="mb-2">
                      <Badge variant="outline" className="text-yellow-400 border-yellow-400/50 mb-2 text-xs">
                        {product.category}
                      </Badge>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-yellow-400 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex text-yellow-400">{"★".repeat(Math.floor(product.rating))}</div>
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4 flex-1">
                      {product.features.map((feature, idx) => (
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
                        className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black text-sm"
                        disabled={!product.inStock}
                      >
                        {product.inStock ? t("products.addToCart") : t("products.notifyMe")}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="border-border text-muted-foreground hover:text-yellow-400 bg-transparent w-10 h-10"
                      >
                        ♡
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 bg-transparent px-6 sm:px-8 py-3 sm:py-4"
          >
            {t("products.viewAll")}
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Mobil menyu tugmalari: navbar ostida, sticky, faqat mobilda
const menuItems = [
  { key: "nav.products", href: "/products" },
  { key: "nav.services", href: "/services" },
  { key: "nav.support", href: "/support" },
  { key: "nav.about", href: "/about" },
  { key: "nav.contact", href: "/contact" },
]

export default function HomePage() {
  const { t } = useLanguage()
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Top icon bar: faqat mobil, navbar ostida, bir qatorda, faqat ikonka */}
      <div className="sticky top-[56px] z-40 bg-background border-b border-border flex justify-center gap-3 py-2 lg:hidden">
        <Link href="/products"><Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100"><Package /></Button></Link>
        <Link href="/services"><Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100"><Wrench /></Button></Link>
        <Link href="/support"><Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100"><Headphones /></Button></Link>
        <Link href="/about"><Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100"><Info /></Button></Link>
        <Link href="/contact"><Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100"><Phone /></Button></Link>
        <Link href="/auth/login"><Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100"><LogIn /></Button></Link>
        <Link href="/auth/signup"><Button variant="ghost" size="icon" className="rounded-full hover:bg-yellow-100"><UserPlus /></Button></Link>
      </div>
      <HeroSection />
      <FeaturedProducts />
      <Footer />
    </div>
  )
}
