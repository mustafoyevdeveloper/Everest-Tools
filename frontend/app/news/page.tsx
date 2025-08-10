"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, User, Search, ArrowRight, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "Barcha yangiliklar" },
    { id: "product", name: "Mahsulotlar" },
    { id: "company", name: "Kompaniya" },
    { id: "industry", name: "Sanoat" },
    { id: "technology", name: "Texnologiya" },
  ]

  const newsArticles = [
    {
      id: 1,
      title: "TOOLPRO yangi ProDrill X2 seriyasini taqdim etdi",
      excerpt: "Yangi avlod burg'ulash asboblari bozorga chiqarildi. Yuqori quvvat va uzoq ishlash muddati.",
      content: "TOOLPRO kompaniyasi o'zining eng so'nggi innovatsiyasi ProDrill X2 seriyasini e'lon qildi...",
      category: "product",
      author: "Aziz Karimov",
      date: "2024-01-15",
      readTime: "5 daqiqa",
      image: "/industrial-drill.png",
      featured: true,
      tags: ["Mahsulot", "Innovatsiya", "Burg'ulash"],
    },
    {
      id: 2,
      title: "Kompaniya 2024-yilda 50% o'sishni qayd etdi",
      excerpt: "TOOLPRO o'tgan yilda rekord darajadagi o'sishni ko'rsatdi va yangi bozorlarni egalladi.",
      content: "2024-yil TOOLPRO uchun muvaffaqiyatli yil bo'ldi. Kompaniya 50% o'sishni qayd etdi...",
      category: "company",
      author: "Malika Tosheva",
      date: "2024-01-10",
      readTime: "3 daqiqa",
      image: "/placeholder.svg?height=300&width=400&text=Company+Growth",
      featured: false,
      tags: ["Biznes", "O'sish", "Statistika"],
    },
    {
      id: 3,
      title: "Qurilish sanoatida AI texnologiyalarining roli",
      excerpt: "Sun'iy intellekt qurilish sohasini qanday o'zgartirayotgani haqida batafsil tahlil.",
      content: "Sun'iy intellekt texnologiyalari qurilish sanoatida tobora muhim rol o'ynayapti...",
      category: "technology",
      author: "Bobur Rahimov",
      date: "2024-01-08",
      readTime: "7 daqiqa",
      image: "/placeholder.svg?height=300&width=400&text=AI+Technology",
      featured: false,
      tags: ["AI", "Texnologiya", "Kelajak"],
    },
    {
      id: 4,
      title: "Ekologik toza qurilish asboblari tendentsiyasi",
      excerpt: "Atrof-muhitga zarar bermaydigan qurilish asboblari bozorida yangi yo'nalishlar.",
      content: "Ekologik masalalar tobora muhim bo'lib borayotgan bir paytda...",
      category: "industry",
      author: "Nilufar Saidova",
      date: "2024-01-05",
      readTime: "4 daqiqa",
      image: "/placeholder.svg?height=300&width=400&text=Eco+Tools",
      featured: false,
      tags: ["Ekologiya", "Innovatsiya", "Sanoat"],
    },
    {
      id: 5,
      title: "TOOLPRO Toshkentda yangi zavod ochdi",
      excerpt: "Kompaniya O'zbekistonda ishlab chiqarish quvvatlarini kengaytirdi.",
      content: "TOOLPRO kompaniyasi Toshkent shahrida yangi zamonaviy zavod ochdi...",
      category: "company",
      author: "Sardor Alimov",
      date: "2024-01-03",
      readTime: "6 daqiqa",
      image: "/placeholder.svg?height=300&width=400&text=New+Factory",
      featured: false,
      tags: ["Zavod", "Kengayish", "O'zbekiston"],
    },
    {
      id: 6,
      title: "2024-yil qurilish bozori prognozlari",
      excerpt: "Ekspertlar 2024-yil uchun qurilish bozori rivojlanish yo'nalishlarini baholaydi.",
      content: "Qurilish sanoati ekspertlari 2024-yil uchun ijobiy prognozlar bermoqda...",
      category: "industry",
      author: "Jasur Normatov",
      date: "2024-01-01",
      readTime: "8 daqiqa",
      image: "/placeholder.svg?height=300&width=400&text=Market+Forecast",
      featured: false,
      tags: ["Prognoz", "Bozor", "Tahlil"],
    },
  ]

  const filteredNews = newsArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredArticle = filteredNews.find((article) => article.featured)
  const regularArticles = filteredNews.filter((article) => !article.featured)

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
              Yangiliklar va <span className="text-yellow-400">Maqolalar</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              TOOLPRO dunyosidan so'nggi yangiliklar, mahsulot yangiliklari va sanoat tendentsiyalari
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Yangiliklar ichida qidirish..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Kategoriya" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-muted-foreground self-end lg:self-auto">
              {filteredNews.length} ta yangilik topildi
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <Badge className="bg-yellow-500 text-black mb-4">Asosiy yangilik</Badge>
              <Card className="overflow-hidden hover:border-yellow-500/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                      <Image
                        src={featuredArticle.image || "/placeholder.svg"}
                        alt={featuredArticle.title}
                        width={600}
                        height={400}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    <div className="lg:w-1/2 p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {featuredArticle.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-yellow-400 border-yellow-400/50">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-yellow-400 transition-colors">
                        {featuredArticle.title}
                      </h2>

                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{featuredArticle.excerpt}</p>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredArticle.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredArticle.date).toLocaleDateString("uz-UZ")}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredArticle.readTime}
                        </div>
                      </div>

                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                        To'liq o'qish
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-yellow-500/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/80 text-foreground">
                          {categories.find((cat) => cat.id === article.category)?.name}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {article.tags.slice(0, 2).map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 hover:text-yellow-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {new Date(article.date).toLocaleDateString("uz-UZ")}
                        </span>
                        <Button variant="outline" size="sm" className="border-border bg-transparent">
                          O'qish
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">Hech qanday yangilik topilmadi</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
