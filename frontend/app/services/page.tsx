"use client"

import { motion } from "framer-motion"
import { Wrench, Shield, Truck, Clock, Users, Award, Phone, Mail } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Wrench,
      title: "Ta'mirlash xizmati",
      description: "Professional asboblaringizni ta'mirlash va texnik xizmat ko'rsatish",
      features: ["Tez ta'mirlash", "Kafolat", "Original qismlar", "Malakali mutaxassislar"],
      price: "50$",
      color: "text-blue-500",
    },
    {
      icon: Shield,
      title: "Kengaytirilgan kafolat",
      description: "Mahsulotlaringiz uchun qo'shimcha himoya va kafolat",
      features: ["5 yilgacha kafolat", "Bepul ta'mirlash", "Almashtirish", "24/7 yordam"],
      price: "99$",
      color: "text-green-500",
    },
    {
      icon: Truck,
      title: "Yetkazib berish",
      description: "Tez va ishonchli yetkazib berish xizmati",
      features: ["Bir kunda yetkazish", "Bepul yetkazish", "Kuzatish", "Xavfsiz qadoqlash"],
      price: "Bepul",
      color: "text-purple-500",
    },
    {
      icon: Clock,
      title: "Texnik yordam",
      description: "24/7 texnik yordam va maslahat xizmati",
      features: ["24/7 yordam", "Telefon orqali", "Online chat", "Video qo'llanma"],
      price: "Bepul",
      color: "text-orange-500",
    },
    {
      icon: Users,
      title: "O'qitish kurslari",
      description: "Asboblardan to'g'ri foydalanish bo'yicha o'qitish",
      features: ["Praktik mashg'ulotlar", "Sertifikat", "Guruh va individual", "Online kurslar"],
      price: "199$",
      color: "text-red-500",
    },
    {
      icon: Award,
      title: "Konsultatsiya",
      description: "Loyihangiz uchun eng mos asboblarni tanlash bo'yicha maslahat",
      features: ["Bepul maslahat", "Loyiha tahlili", "Narx hisoblash", "Yechim taklifi"],
      price: "Bepul",
      color: "text-yellow-500",
    },
  ]

  const stats = [
    { number: "5000+", label: "Ta'mirlangan asboblar" },
    { number: "24/7", label: "Yordam xizmati" },
    { number: "98%", label: "Mijozlar mamnunligi" },
    { number: "50+", label: "Xizmat ko'rsatish markazlari" },
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-6">
              {t("nav.services")} <span className="text-yellow-400">& Support</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 leading-relaxed">
              Mahsulotlarimizdan maksimal foyda olishingiz uchun keng ko'lamli xizmatlar taklif etamiz
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Bizning xizmatlarimiz</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional asboblaringiz uchun to'liq xizmat spektri
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-yellow-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4`}>
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Buyurtma berish</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Yordam kerakmi?</h2>
            <p className="text-muted-foreground mb-8">
              Bizning mutaxassislarimiz sizga yordam berishga tayyor. Biz bilan bog'laning!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                <Phone className="w-4 h-4 mr-2" />
                +998 90 123 45 67
              </Button>
              <Button variant="outline" className="border-border bg-transparent">
                <Mail className="w-4 h-4 mr-2" />
                info@toolpro.uz
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
