"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function CookiePolicyPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      title: "Cookie-fayllar nima?",
      content: `Cookie-fayllar - bu siz veb-saytga tashrif buyurganingizda brauzeringizga saqlanadigan kichik matn fayllari. Ular saytning to'g'ri ishlashi, foydalanuvchi tajribasini yaxshilash va sayt statistikasini to'plash uchun ishlatiladi. Cookie-fayllar sizning shaxsiy ma'lumotlaringizni o'z ichiga olmaydi.`,
    },
    {
      title: "Cookie-fayllar turlari",
      content: `Biz turli xil cookie-fayllardan foydalanamiz: Zaruriy cookie-fayllar - saytning asosiy funksiyalari uchun; Analitik cookie-fayllar - sayt foydalanishini tahlil qilish uchun; Funksional cookie-fayllar - foydalanuvchi tajribasini yaxshilash uchun; Marketing cookie-fayllar - moslashtirilgan reklama ko'rsatish uchun.`,
    },
    {
      title: "Biz qanday cookie-fayllardan foydalanamiz",
      content: `TOOLPRO saytida quyidagi cookie-fayllar ishlatiladi: Sessiya cookie-faylari - sayt bo'ylab harakatlanish uchun; Xavfsizlik cookie-fayllari - hisobingizni himoya qilish uchun; Til sozlamalari - tanlangan tilni eslab qolish uchun; Savatcha ma'lumotlari - tanlangan mahsulotlarni saqlash uchun; Google Analytics - sayt statistikasi uchun.`,
    },
    {
      title: "Cookie-fayllarni boshqarish",
      content: `Siz cookie-fayllarni qabul qilish yoki rad etish huquqiga egasiz. Brauzer sozlamalarida cookie-fayllarni o'chirish, bloklash yoki ularni qabul qilish haqida ogohlantirish olish mumkin. Lekin shuni yodda tutingki, ba'zi cookie-fayllarni o'chirish saytning to'g'ri ishlashiga ta'sir qilishi mumkin.`,
    },
  ]

  const cookieTypes = [
    {
      name: "Zaruriy cookie-fayllar",
      description: "Saytning asosiy funksiyalari uchun zarur",
      required: true,
      enabled: true,
    },
    {
      name: "Analitik cookie-fayllar",
      description: "Sayt foydalanishini tahlil qilish uchun",
      required: false,
      enabled: true,
    },
    {
      name: "Funksional cookie-fayllar",
      description: "Foydalanuvchi tajribasini yaxshilash uchun",
      required: false,
      enabled: true,
    },
    {
      name: "Marketing cookie-fayllar",
      description: "Moslashtirilgan reklama ko'rsatish uchun",
      required: false,
      enabled: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Cookie-fayllar siyosati</h1>
            <p className="text-muted-foreground mb-8">Oxirgi yangilanish: 15 Yanvar, 2024</p>

            <Card className="mb-8">
              <CardContent className="p-6 md:p-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6"
                  >
                    <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    {index < sections.length - 1 && <Separator className="mt-6" />}
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            {/* Cookie Settings */}
            <Card>
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-6">Cookie sozlamalari</h2>
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => (
                    <motion.div
                      key={cookie.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border border-border rounded-lg"
                    >
                      <div className="flex-1">
                        <Label htmlFor={`cookie-${index}`} className="text-base font-medium cursor-pointer">
                          {cookie.name}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">{cookie.description}</p>
                        {cookie.required && (
                          <p className="text-xs text-yellow-600 mt-1">Zaruriy - o'chirib bo'lmaydi</p>
                        )}
                      </div>
                      <Switch
                        id={`cookie-${index}`}
                        checked={cookie.enabled}
                        disabled={cookie.required}
                        className="ml-4"
                      />
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Sozlamalarni saqlash</Button>
                  <Button variant="outline" className="border-border bg-transparent">
                    Barchasini qabul qilish
                  </Button>
                  <Button variant="outline" className="border-border bg-transparent">
                    Barchasini rad etish
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                Cookie-fayllar haqida qo'shimcha savollar bo'lsa,{" "}
                <a href="/contact" className="text-yellow-400 hover:underline">
                  biz bilan bog'laning
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
