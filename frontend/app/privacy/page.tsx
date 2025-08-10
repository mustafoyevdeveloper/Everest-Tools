"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Kirish",
      content:
        "TOOLPRO veb-saytidan foydalanganingiz uchun rahmat. Ushbu Maxfiylik siyosati sizning shaxsiy ma'lumotlaringizni qanday to'plashimiz, foydalanishimiz va himoya qilishimizni tushuntiradi. Bizning veb-saytimizdan foydalanish orqali siz ushbu siyosatda ko'rsatilgan amaliyotlarga rozilik bildirasiz.",
    },
    {
      title: "To'planadigan ma'lumotlar",
      content:
        "Biz quyidagi ma'lumotlarni to'playmiz: Shaxsiy ma'lumotlar (ism, manzil, elektron pochta, telefon raqami), to'lov ma'lumotlari, qurilma ma'lumotlari va foydalanish ma'lumotlari. Bu ma'lumotlar sizga xizmat ko'rsatish, buyurtmalarni qayta ishlash va xavfsizlikni ta'minlash uchun zarur.",
    },
    {
      title: "Ma'lumotlardan foydalanish",
      content:
        "Biz sizning ma'lumotlaringizdan quyidagi maqsadlarda foydalanamiz: buyurtmalarni qayta ishlash, hisob-kitoblarni yuritish, xizmatlarimizni yaxshilash, marketing va reklama, qonuniy majburiyatlarni bajarish. Biz sizning ma'lumotlaringizni faqat zarur bo'lganda va qonuniy asoslar mavjud bo'lganda ishlatamiz.",
    },
    {
      title: "Ma'lumotlarni saqlash",
      content:
        "Biz sizning ma'lumotlaringizni xavfsiz serverlarda saqlaymiz va ularni ruxsatsiz kirish, o'zgartirish yoki oshkor qilishdan himoya qilish uchun tegishli xavfsizlik choralarini ko'ramiz. Ma'lumotlar qonuniy va biznes maqsadlari uchun zarur bo'lgan muddatga saqlanadi.",
    },
    {
      title: "Ma'lumotlarni uzatish",
      content:
        "Biz sizning ma'lumotlaringizni quyidagi tomonlarga uzatishimiz mumkin: to'lov protsessorlari, yetkazib berish xizmatlari, marketing hamkorlari va qonun bilan talab qilingan hollarda davlat organlari. Biz ma'lumotlaringizni himoya qilish uchun barcha hamkorlarimiz bilan tegishli shartnomalar tuzamiz.",
    },
    {
      title: "Foydalanuvchi huquqlari",
      content:
        "Siz quyidagi huquqlarga egasiz: ma'lumotlaringizga kirish, noto'g'ri ma'lumotlarni tuzatish, ma'lumotlarni o'chirish, ma'lumotlarni qayta ishlashni cheklash, ma'lumotlarni ko'chirish va e'tiroz bildirish. Ushbu huquqlarni amalga oshirish uchun bizga murojaat qiling.",
    },
    {
      title: "Cookie-fayllar",
      content:
        "Biz veb-saytimizda cookie-fayllardan foydalanamiz. Cookie-fayllar - bu kichik fayl bo'lib, u sizning qurilmangizga yuklanadi va veb-saytdan foydalanish tajribangizni yaxshilash uchun ishlatiladi. Siz brauzeringiz sozlamalarida cookie-fayllarni bloklash yoki o'chirishingiz mumkin.",
    },
    {
      title: "Bolalar maxfiyligi",
      content:
        "Bizning xizmatlarimiz 18 yoshdan kichik bolalarga mo'ljallanmagan. Biz ongli ravishda 18 yoshdan kichik bolalardan shaxsiy ma'lumotlarni to'plamaymiz. Agar siz 18 yoshdan kichik boladan ma'lumot to'plaganligimizni aniqlasangiz, iltimos, bizga xabar bering.",
    },
    {
      title: "Siyosatga o'zgartirishlar",
      content:
        "Biz ushbu Maxfiylik siyosatini vaqti-vaqti bilan yangilashimiz mumkin. Har qanday o'zgarishlar ushbu sahifada e'lon qilinadi. Siyosatdagi muhim o'zgarishlar haqida sizga xabar beramiz.",
    },
    {
      title: "Biz bilan bog'lanish",
      content:
        "Agar sizda maxfiylik siyosatimiz yoki ma'lumotlaringizni qayta ishlash bo'yicha savollar yoki tashvishlar bo'lsa, iltimos, bizga quyidagi manzil orqali murojaat qiling: privacy@toolpro.uz yoki +998 90 123 45 67.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Maxfiylik siyosati</h1>
            <p className="text-muted-foreground mb-8">Oxirgi yangilanish: 15 Iyul, 2024</p>

            <Card>
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
                    <p className="text-muted-foreground">{section.content}</p>
                    {index < sections.length - 1 && <Separator className="mt-6" />}
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>
                Agar sizda savollar bo'lsa, iltimos{" "}
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
