"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsOfServicePage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    {
      title: "1. Umumiy qoidalar",
      content: `Ushbu Foydalanish shartlari (keyingi o'rinlarda "Shartlar") TOOLPRO veb-saytidan (toolpro.uz) foydalanish qoidalarini belgilaydi. Saytdan foydalanish orqali siz ushbu shartlarga to'liq rozilik bildirasiz. Agar siz ushbu shartlarga rozi bo'lmasangiz, iltimos saytdan foydalanmang.`,
    },
    {
      title: "2. Foydalanuvchi majburiyatlari",
      content: `Foydalanuvchi sifatida siz quyidagilarga majbursiz: to'g'ri va aniq ma'lumotlar berish, boshqa foydalanuvchilarning huquqlarini hurmat qilish, saytdan faqat qonuniy maqsadlarda foydalanish, zararli dasturlar yoki viruslar yuklash yoki tarqatmaslik, boshqa foydalanuvchilarni bezovta qilmaslik yoki ularga zarar yetkazmaslik.`,
    },
    {
      title: "3. Mahsulotlar va xizmatlar",
      content: `TOOLPRO professional qurilish asboblari va ularning ehtiyot qismlarini taklif etadi. Barcha mahsulotlar rasmiy kafolat bilan ta'minlanadi. Mahsulot narxlari va mavjudligi o'zgarishi mumkin. Biz mahsulot tavsiflarining to'g'riligini ta'minlashga harakat qilamiz, lekin kichik xatolar bo'lishi mumkin.`,
    },
    {
      title: "4. Buyurtma berish va to'lov",
      content: `Buyurtma berish orqali siz mahsulotni sotib olish bo'yicha qonuniy shartnoma tuzasiz. To'lov turli usullar orqali amalga oshirilishi mumkin: bank kartalari, Click, Payme va boshqalar. Barcha to'lovlar xavfsiz tarzda qayta ishlanadi. Buyurtma tasdiqlanganidan keyin uni bekor qilish cheklangan.`,
    },
    {
      title: "5. Yetkazib berish",
      content: `Yetkazib berish O'zbekiston bo'ylab amalga oshiriladi. Yetkazib berish muddatlari va narxlari mahsulot va manzilga bog'liq. Biz yetkazib berish vaqtlarini bajarishga harakat qilamiz, lekin kechikishlar uchun javobgar emasmiz. Mahsulotni qabul qilishda uni tekshirib ko'ring.`,
    },
    {
      title: "6. Qaytarish va almashtirish",
      content: `Mahsulotni 30 kun ichida qaytarish yoki almashtirish mumkin, agar u ishlatilmagan va asl qadoqda bo'lsa. Qaytarish uchun sotib olish cheki talab qilinadi. Maxsus buyurtma bo'yicha tayyorlangan mahsulotlar qaytarilmaydi. Qaytarish xarajatlari mijoz tomonidan to'lanadi.`,
    },
    {
      title: "7. Kafolat",
      content: `Barcha mahsulotlar ishlab chiqaruvchi kafolati bilan ta'minlanadi. Kafolat muddati mahsulot turiga bog'liq (18 oydan 5 yilgacha). Kafolat faqat ishlab chiqarish nuqsonlariga taalluqlidir. Noto'g'ri foydalanish natijasida yuzaga kelgan shikastlanishlar kafolat qamroviga kirmaydi.`,
    },
    {
      title: "8. Intellektual mulk",
      content: `Saytdagi barcha kontent (matnlar, rasmlar, logotiplar, dizayn) TOOLPRO kompaniyasining intellektual mulki hisoblanadi. Ushbu kontentni ruxsatsiz nusxalash, tarqatish yoki tijoriy maqsadlarda foydalanish taqiqlanadi. Foydalanuvchilar faqat shaxsiy foydalanish uchun kontentni ko'rishi mumkin.`,
    },
    {
      title: "9. Maxfiylik",
      content: `Biz foydalanuvchilarning shaxsiy ma'lumotlarini himoya qilishga majburmiz. Ma'lumotlar faqat xizmat ko'rsatish maqsadida ishlatiladi va uchinchi shaxslarga berilmaydi. Batafsil ma'lumot uchun Maxfiylik siyosatini o'qing. Foydalanuvchilar o'z ma'lumotlarini o'zgartirish yoki o'chirish huquqiga ega.`,
    },
    {
      title: "10. Javobgarlik cheklovi",
      content: `TOOLPRO saytdan foydalanish natijasida yuzaga kelishi mumkin bo'lgan zararlar uchun javobgar emas. Biz sayt ishlashining uzluksizligini kafolatlamaydi. Foydalanuvchilar saytdan o'z mas'uliyati ostida foydalanadi. Bizning javobgarligimiz sotilgan mahsulot qiymati bilan cheklanadi.`,
    },
    {
      title: "11. Shartlarni o'zgartirish",
      content: `TOOLPRO ushbu shartlarni istalgan vaqtda o'zgartirish huquqiga ega. O'zgarishlar saytda e'lon qilinadi va darhol kuchga kiradi. Foydalanuvchilar muntazam ravishda shartlarni tekshirib turishlari kerak. Shartlar o'zgarganidan keyin saytdan foydalanish yangi shartlarga rozilik bildiradi.`,
    },
    {
      title: "12. Nizolarni hal qilish",
      content: `Barcha nizolar birinchi navbatda muzokaralar orqali hal qilinishiga harakat qilinadi. Agar kelishuvga erishib bo'lmasa, nizolar O'zbekiston Respublikasining qonunlariga muvofiq hal qilinadi. Sud yurisdiktsiyasi Toshkent shahri bo'yicha belgilanadi. Ushbu shartlar O'zbekiston qonunlari bilan tartibga solinadi.`,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Foydalanish shartlari</h1>
            <p className="text-muted-foreground mb-8">Oxirgi yangilanish: 15 Yanvar, 2024</p>

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
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
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
