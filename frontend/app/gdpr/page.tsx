"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Eye, Download, Trash2, Edit, Lock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function GDPRPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const userRights = [
    {
      icon: Eye,
      title: "Ko'rish huquqi",
      description: "Sizning shaxsiy ma'lumotlaringiz qanday ishlatilayotganini bilish huquqi",
      action: "Ma'lumotlarni ko'rish",
    },
    {
      icon: Edit,
      title: "Tuzatish huquqi",
      description: "Noto'g'ri yoki to'liq bo'lmagan ma'lumotlarni tuzatish huquqi",
      action: "Ma'lumotlarni tuzatish",
    },
    {
      icon: Trash2,
      title: "O'chirish huquqi",
      description: "Shaxsiy ma'lumotlaringizni o'chirish huquqi ('unutilish huquqi')",
      action: "Ma'lumotlarni o'chirish",
    },
    {
      icon: Download,
      title: "Ko'chirish huquqi",
      description: "Ma'lumotlaringizni boshqa xizmatga ko'chirish huquqi",
      action: "Ma'lumotlarni yuklab olish",
    },
    {
      icon: Lock,
      title: "Cheklash huquqi",
      description: "Ma'lumotlaringizni qayta ishlashni cheklash huquqi",
      action: "Qayta ishlashni cheklash",
    },
    {
      icon: Shield,
      title: "E'tiroz bildirish huquqi",
      description: "Ma'lumotlaringizni qayta ishlashga e'tiroz bildirish huquqi",
      action: "E'tiroz bildirish",
    },
  ]

  const dataTypes = [
    {
      category: "Shaxsiy identifikatsiya ma'lumotlari",
      items: ["Ism va familiya", "Email manzil", "Telefon raqami", "Manzil"],
    },
    {
      category: "Hisob ma'lumotlari",
      items: ["Foydalanuvchi nomi", "Parol (shifrlangan)", "Profil rasmi", "Sozlamalar"],
    },
    {
      category: "Buyurtma ma'lumotlari",
      items: ["Buyurtma tarixi", "Mahsulot ma'lumotlari", "To'lov ma'lumotlari", "Yetkazib berish manzili"],
    },
    {
      category: "Texnik ma'lumotlar",
      items: ["IP manzil", "Brauzer turi", "Qurilma ma'lumotlari", "Cookie-fayllar"],
    },
  ]

  const legalBases = [
    {
      title: "Shartnoma bajarish",
      description: "Sizning buyurtmalaringizni qayta ishlash va yetkazib berish uchun",
    },
    {
      title: "Qonuniy manfaatlar",
      description: "Xizmatlarimizni yaxshilash va xavfsizlikni ta'minlash uchun",
    },
    {
      title: "Rozilik",
      description: "Marketing xabarlari yuborish va analytics uchun",
    },
    {
      title: "Qonuniy majburiyat",
      description: "Soliq va buxgalteriya hisobotlari uchun",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              GDPR <span className="text-yellow-400">Muvofiqlik</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Sizning ma'lumotlaringiz himoyasi bizning ustuvor vazifamiz. GDPR talablariga to'liq muvofiqlik
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">GDPR nima?</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  General Data Protection Regulation (GDPR) - bu Yevropa Ittifoqining ma'lumotlar himoyasi qonuni
                  bo'lib, 2018-yil 25-maydan beri kuchga kirgan. Bu qonun shaxsiy ma'lumotlarni qayta ishlash va himoya
                  qilish bo'yicha qat'iy qoidalar belgilaydi.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  TOOLPRO sifatida biz GDPR talablariga to'liq rioya qilamiz va sizning shaxsiy ma'lumotlaringizni eng
                  yuqori standartlarda himoya qilamiz. Sizning huquqlaringizni hurmat qilish va ma'lumotlaringizni
                  xavfsiz saqlash bizning asosiy majburiyatimizdir.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* User Rights */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Sizning huquqlaringiz</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              GDPR ostida sizga berilgan huquqlar va ularni qanday amalga oshirish mumkinligi
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                      <right.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{right.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{right.description}</p>
                    <Button variant="outline" size="sm" className="w-full border-border bg-transparent">
                      {right.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Biz qanday ma'lumotlarni to'playmiz</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {dataTypes.map((dataType, index) => (
                <motion.div
                  key={dataType.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{dataType.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {dataType.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Basis */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Qayta ishlashning qonuniy asoslari</h2>

            <div className="space-y-4">
              {legalBases.map((basis, index) => (
                <motion.div
                  key={basis.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Shield className="w-4 h-4 text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{basis.title}</h3>
                          <p className="text-muted-foreground text-sm">{basis.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact DPO */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card>
              <CardContent className="p-8">
                <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold mb-4">Ma'lumotlar himoyasi bo'yicha mutaxassis</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  GDPR huquqlaringiz yoki ma'lumotlar himoyasi haqida savollaringiz bo'lsa, bizning Ma'lumotlar himoyasi
                  bo'yicha mutaxassisimiz bilan bog'laning.
                </p>
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    <strong>Email:</strong> dpo@toolpro.uz
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Telefon:</strong> +998 90 123 45 67
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Manzil:</strong> Toshkent, Amir Temur ko'chasi, 15-uy
                  </div>
                </div>
                <Separator className="my-6" />
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Bog'lanish</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
