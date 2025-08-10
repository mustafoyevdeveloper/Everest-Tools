"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Clock, CheckCircle, AlertCircle, Phone, Mail, FileText } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WarrantyPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const warrantyPeriods = [
    {
      category: "Burg'ulash asboblari",
      period: "2 yil",
      products: ["ProDrill X1", "PowerDrill Pro", "HeavyDuty Drill"],
      color: "text-blue-500",
    },
    {
      category: "Aralashtirish asboblari",
      period: "3 yil",
      products: ["MixMaster Pro", "PowerMix Concrete", "CompactMix"],
      color: "text-green-500",
    },
    {
      category: "Iskala tizimlari",
      period: "5 yil",
      products: ["FlexScaffold", "QuickSet Scaffold", "HeavyDuty Scaffold"],
      color: "text-purple-500",
    },
    {
      category: "Silliqlash asboblari",
      period: "18 oy",
      products: ["GrindForce Angle", "PowerGrind Heavy", "CompactGrind"],
      color: "text-orange-500",
    },
  ]

  const warrantySteps = [
    {
      step: 1,
      title: "Muammoni aniqlang",
      description: "Mahsulotdagi muammoni batafsil tavsiflang va rasm yuboring",
    },
    {
      step: 2,
      title: "Hujjatlarni tayyorlang",
      description: "Sotib olish cheki va kafolat guvohnomasini tayyorlang",
    },
    {
      step: 3,
      title: "Ariza yuboring",
      description: "Onlayn ariza yuboring yoki bizning xizmat markazimizga murojaat qiling",
    },
    {
      step: 4,
      title: "Tekshiruv",
      description: "Mutaxassislarimiz mahsulotni tekshiradi va xulosa beradi",
    },
    {
      step: 5,
      title: "Ta'mirlash yoki almashtirish",
      description: "Kafolat shartlariga ko'ra mahsulot ta'mirlanadi yoki almashtiriladi",
    },
  ]

  const excludedCases = [
    "Noto'g'ri foydalanish natijasida yuzaga kelgan shikastlanishlar",
    "Tabiiy eskirish va yeyilish",
    "Mexanik shikastlanishlar (tushirish, urish)",
    "Suvga tushirish yoki namlik ta'siri",
    "Ruxsatsiz ta'mirlash urinishlari",
    "Kafolat muddati tugagan mahsulotlar",
    "Sotib olish hujjatlari yo'q bo'lgan holda",
    "Ishlab chiqaruvchi ko'rsatmalariga rioya qilmaslik",
  ]

  const serviceLocations = [
    {
      city: "Toshkent",
      address: "Amir Temur ko'chasi, 15-uy",
      phone: "+998 71 123 45 67",
      hours: "Dush-Juma: 9:00-18:00, Shanba: 9:00-14:00",
    },
    {
      city: "Samarqand",
      address: "Registon ko'chasi, 8-uy",
      phone: "+998 66 234 56 78",
      hours: "Dush-Juma: 9:00-17:00",
    },
    {
      city: "Buxoro",
      address: "Mustaqillik ko'chasi, 22-uy",
      phone: "+998 65 345 67 89",
      hours: "Dush-Juma: 9:00-17:00",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Kafolat <span className="text-yellow-400">Xizmati</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              TOOLPRO mahsulotlari uchun keng qamrovli kafolat va professional xizmat ko'rsatish
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warranty Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Kafolat muddatlari</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Har bir mahsulot kategoriyasi uchun alohida kafolat muddatlari
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {warrantyPeriods.map((warranty, index) => (
              <motion.div
                key={warranty.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${warranty.color.replace("text-", "bg-").replace("-500", "-500/10")}`}
                    >
                      <Shield className={`w-8 h-8 ${warranty.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{warranty.category}</h3>
                    <div className="text-3xl font-bold text-yellow-400 mb-4">{warranty.period}</div>
                    <div className="space-y-1">
                      {warranty.products.map((product, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground">
                          {product}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Warranty Process */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Kafolat jarayoni</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {warrantySteps.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < warrantySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-muted transform translate-x-6" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warranty Details */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <Tabs defaultValue="coverage" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-muted">
              <TabsTrigger value="coverage">Kafolat qamrovi</TabsTrigger>
              <TabsTrigger value="exclusions">Istisno holatlari</TabsTrigger>
              <TabsTrigger value="claim">Ariza berish</TabsTrigger>
            </TabsList>

            <TabsContent value="coverage" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Kafolat qamrovi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Ishlab chiqarish nuqsonlari</h4>
                        <p className="text-muted-foreground">Material yoki ishlab chiqarish jarayonidagi xatolar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Elektr tizimi nosozliklari</h4>
                        <p className="text-muted-foreground">Motor, kontroller va boshqa elektr qismlar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Mexanik qismlar nosozligi</h4>
                        <p className="text-muted-foreground">
                          Tishli uzatmalar, podshipniklar va boshqa mexanik qismlar
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Bepul ta'mirlash</h4>
                        <p className="text-muted-foreground">Kafolat muddati davomida bepul ta'mirlash xizmati</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Ehtiyot qismlar</h4>
                        <p className="text-muted-foreground">Kafolat davomida zarur ehtiyot qismlar bepul</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="exclusions" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    Kafolat qamroviga kirmaydi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {excludedCases.map((exclusion, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{exclusion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="claim" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-500" />
                    Kafolat arizasi berish
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Kerakli hujjatlar:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Sotib olish cheki yoki faktura</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Kafolat guvohnomasi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Mahsulot rasmlari (nosozlik ko'rinishi)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Muammo tavsifi</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black">
                      <FileText className="w-4 h-4 mr-2" />
                      Onlayn ariza berish
                    </Button>
                    <Button variant="outline" className="flex-1 border-border bg-transparent">
                      <Phone className="w-4 h-4 mr-2" />
                      Telefon orqali
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Centers */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Xizmat markazlari</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              O'zbekiston bo'ylab joylashgan xizmat markazlarimiz
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceLocations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{location.city}</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{location.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-green-500" />
                        <span className="font-medium">{location.phone}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-blue-500 mt-0.5" />
                        <span className="text-muted-foreground">{location.hours}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-black">Bog'lanish</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Savolingiz bormi?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Kafolat xizmati haqida qo'shimcha ma'lumot olish uchun biz bilan bog'laning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Phone className="w-4 h-4 mr-2" />
                +998 90 123 45 67
              </Button>
              <Button variant="outline" className="border-border bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                warranty@toolpro.uz
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
