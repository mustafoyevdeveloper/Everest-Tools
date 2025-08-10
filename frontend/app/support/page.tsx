"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Phone, Mail, MessageCircle, FileText, Video, Download, ChevronDown } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export default function SupportPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const supportOptions = [
    {
      icon: Phone,
      title: "Telefon orqali yordam",
      description: "To'g'ridan-to'g'ri mutaxassislar bilan gaplashing",
      action: "+998 90 123 45 67",
      color: "text-blue-500",
      available: "24/7",
    },
    {
      icon: Mail,
      title: "Email yordam",
      description: "Savolingizni email orqali yuboring",
      action: "support@toolpro.uz",
      color: "text-green-500",
      available: "24 soat ichida javob",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Onlayn chat orqali tezkor yordam",
      action: "Chatni boshlash",
      color: "text-purple-500",
      available: "9:00 - 18:00",
    },
    {
      icon: Video,
      title: "Video qo'llanma",
      description: "Video orqali ko'rsatmalar va yechimlar",
      action: "Videolarni ko'rish",
      color: "text-red-500",
      available: "Doimo mavjud",
    },
  ]

  const faqData = [
    {
      question: "Mahsulotlaringizga qancha muddat kafolat beriladi?",
      answer:
        "Barcha mahsulotlarimizga 5 yilgacha kafolat beramiz. Kafolat muddati mahsulot turiga qarab farq qiladi. Batafsil ma'lumot uchun mahsulot sahifasini ko'ring.",
    },
    {
      question: "Yetkazib berish qancha vaqt oladi?",
      answer:
        "Toshkent shahri bo'ylab 1-2 kun, viloyatlarga 3-5 kun ichida yetkazib beramiz. Tezkor yetkazish xizmati ham mavjud.",
    },
    {
      question: "Mahsulotni qaytarish mumkinmi?",
      answer: "Ha, 30 kun ichida mahsulotni qaytarish mumkin. Mahsulot ishlatilmagan va asl qadoqda bo'lishi kerak.",
    },
    {
      question: "To'lov usullari qanday?",
      answer: "Naqd pul, bank kartalari, Click, Payme, PayPal va boshqa to'lov usullarini qabul qilamiz.",
    },
    {
      question: "Texnik yordam qanday olish mumkin?",
      answer: "24/7 telefon yordam, email, live chat va video qo'llanmalar orqali yordam olishingiz mumkin.",
    },
    {
      question: "Chegirmalar va aksiyalar haqida qanday bilish mumkin?",
      answer:
        "Email ro'yxatimizga obuna bo'ling yoki ijtimoiy tarmoqlarda kuzatib boring. Yangi aksiyalar haqida birinchi bo'lib xabar beramiz.",
    },
  ]

  const resources = [
    {
      icon: FileText,
      title: "Foydalanuvchi qo'llanmalari",
      description: "Barcha mahsulotlar uchun batafsil qo'llanmalar",
      count: "50+ qo'llanma",
    },
    {
      icon: Video,
      title: "Video darsliklar",
      description: "Asboblardan foydalanish bo'yicha video ko'rsatmalar",
      count: "100+ video",
    },
    {
      icon: Download,
      title: "Dasturiy ta'minot",
      description: "Mahsulotlar uchun kerakli dasturlar va drayverlari",
      count: "20+ dastur",
    },
  ]

  const filteredFaq = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6">
              {t("nav.support")} <span className="text-yellow-400">Center</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Sizga yordam berish uchun har doim tayyormiz. Savolingiz bormi? Biz javob beramiz!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Biz bilan bog'laning</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Sizga qulay usulni tanlang va yordam oling
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <option.icon className={`w-8 h-8 ${option.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <Badge variant="outline" className="mb-4">
                      {option.available}
                    </Badge>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">{option.action}</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Tez-tez so'raladigan savollar</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Eng ko'p so'raladigan savollarga javoblar
            </p>

            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Savollarni qidirish..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaq.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-lg">{faq.question}</div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          expandedFaq === index ? "transform rotate-180" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>
                  {expandedFaq === index && (
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredFaq.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Hech qanday savol topilmadi</p>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Foydali resurslar</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Mahsulotlarimizdan maksimal foyda olish uchun
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <resource.icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <Badge className="mb-4">{resource.count}</Badge>
                    <Button variant="outline" className="w-full border-border bg-transparent">
                      Ko'rish
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
