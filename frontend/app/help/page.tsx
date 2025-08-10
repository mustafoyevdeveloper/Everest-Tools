"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Phone, Mail, MessageCircle, Users, BookOpen, Video } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function HelpCenterPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const helpCategories = [
    {
      icon: BookOpen,
      title: "Mahsulot qo'llanmalari",
      description: "Barcha mahsulotlar uchun batafsil qo'llanmalar",
      articles: 45,
      color: "text-blue-500",
    },
    {
      icon: Video,
      title: "Video darsliklar",
      description: "Amaliy video ko'rsatmalar va maslahatlar",
      articles: 28,
      color: "text-green-500",
    },
    {
      icon: Users,
      title: "Texnik yordam",
      description: "Texnik muammolar va ularning yechimlari",
      articles: 67,
      color: "text-purple-500",
    },
    {
      icon: MessageCircle,
      title: "FAQ",
      description: "Tez-tez beriladigan savollar va javoblar",
      articles: 89,
      color: "text-orange-500",
    },
  ]

  const popularArticles = [
    {
      title: "ProDrill X1 qanday ishlatiladi?",
      category: "Mahsulot qo'llanmasi",
      views: 1234,
      helpful: 89,
    },
    {
      title: "Kafolat shartlari va qaytarish tartibi",
      category: "Umumiy",
      views: 987,
      helpful: 76,
    },
    {
      title: "Buyurtma holati qanday tekshiriladi?",
      category: "Buyurtma",
      views: 856,
      helpful: 92,
    },
    {
      title: "To'lov usullari va xavfsizlik",
      category: "To'lov",
      views: 743,
      helpful: 84,
    },
  ]

  const contactOptions = [
    {
      icon: Phone,
      title: "Telefon qo'ng'irog'i",
      description: "Dushanba-Juma: 9:00-18:00",
      contact: "+998 90 123 45 67",
      action: "Qo'ng'iroq qilish",
    },
    {
      icon: Mail,
      title: "Email yordam",
      description: "24 soat ichida javob beramiz",
      contact: "support@toolpro.uz",
      action: "Email yuborish",
    },
    {
      icon: MessageCircle,
      title: "Jonli chat",
      description: "Darhol javob olish",
      contact: "Online",
      action: "Chatni boshlash",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-6">
              Yordam <span className="text-yellow-400">Markazi</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 leading-relaxed mb-8">
              Sizga kerakli javoblarni toping yoki bizning mutaxassislarimiz bilan bog'laning
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Savolingizni yozing..."
                className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20"
              />
              <Button className="absolute right-2 top-2 bg-yellow-500 hover:bg-yellow-600 text-black">Qidirish</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Yordam bo'limlari</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Kerakli ma'lumotni toping yoki to'g'ridan-to'g'ri mutaxassis bilan gaplashing
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:border-yellow-500/50 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${category.color.replace("text-", "bg-").replace("-500", "-500/10")}`}
                    >
                      <category.icon className={`w-8 h-8 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <Badge variant="outline" className="text-yellow-400 border-yellow-400/50">
                      {category.articles} ta maqola
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Popular Articles */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Mashhur maqolalar</h3>
            <div className="grid gap-4">
              {popularArticles.map((article, index) => (
                <Card key={index} className="hover:border-yellow-500/50 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2 hover:text-yellow-400 transition-colors">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="outline">{article.category}</Badge>
                          <span>{article.views} ta ko'rilgan</span>
                          <span>{article.helpful}% foydali</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-border bg-transparent">
                        O'qish
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Biz bilan bog'laning</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Javob topa olmadingizmi? Bizning mutaxassislar jamoasi sizga yordam berishga tayyor
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <option.icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    <p className="font-medium text-foreground mb-6">{option.contact}</p>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">{option.action}</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-muted-foreground">Yordam xizmati</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-muted-foreground">Mijoz mamnunligi</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">{"<"}2h</div>
              <div className="text-muted-foreground">O'rtacha javob vaqti</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-muted-foreground">Yordam maqolalari</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
