"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, Download, FileText, Video, ImageIcon, Eye, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { id: "all", name: "Barcha kategoriyalar" },
    { id: "drilling", name: "Burg'ulash asboblari" },
    { id: "mixing", name: "Aralashtirish asboblari" },
    { id: "scaffolding", name: "Iskala tizimlari" },
    { id: "grinding", name: "Silliqlash asboblari" },
    { id: "measuring", name: "O'lchash asboblari" },
  ]

  const documentTypes = [
    { id: "all", name: "Barcha turlar" },
    { id: "manual", name: "Foydalanuvchi qo'llanmasi" },
    { id: "technical", name: "Texnik hujjatlar" },
    { id: "video", name: "Video qo'llanma" },
    { id: "certificate", name: "Sertifikatlar" },
    { id: "warranty", name: "Kafolat hujjatlari" },
  ]

  const documents = [
    {
      id: 1,
      title: "ProDrill X1 Hammer - Foydalanuvchi qo'llanmasi",
      category: "drilling",
      type: "manual",
      format: "PDF",
      size: "2.4 MB",
      pages: 24,
      language: "O'zbek",
      version: "v2.1",
      date: "2024-01-15",
      downloads: 1234,
      description: "ProDrill X1 Hammer burg'ulash asbobining to'liq foydalanuvchi qo'llanmasi",
      icon: FileText,
    },
    {
      id: 2,
      title: "MixMaster Pro 2000 - Texnik spetsifikatsiya",
      category: "mixing",
      type: "technical",
      format: "PDF",
      size: "1.8 MB",
      pages: 16,
      language: "O'zbek",
      version: "v1.5",
      date: "2024-01-12",
      downloads: 856,
      description: "MixMaster Pro 2000 aralashtirish asbobining texnik xususiyatlari",
      icon: FileText,
    },
    {
      id: 3,
      title: "FlexScaffold System - O'rnatish video qo'llanmasi",
      category: "scaffolding",
      type: "video",
      format: "MP4",
      size: "45.2 MB",
      duration: "12:34",
      language: "O'zbek",
      version: "v1.0",
      date: "2024-01-10",
      downloads: 567,
      description: "FlexScaffold tizimini to'g'ri o'rnatish bo'yicha video qo'llanma",
      icon: Video,
    },
    {
      id: 4,
      title: "GrindForce Angle Pro - Xavfsizlik ko'rsatmalari",
      category: "grinding",
      type: "manual",
      format: "PDF",
      size: "3.1 MB",
      pages: 18,
      language: "O'zbek",
      version: "v2.0",
      date: "2024-01-08",
      downloads: 743,
      description: "GrindForce Angle Pro bilan xavfsiz ishlash bo'yicha ko'rsatmalar",
      icon: FileText,
    },
    {
      id: 5,
      title: "PrecisionLevel Digital - Kalibrlash qo'llanmasi",
      category: "measuring",
      type: "technical",
      format: "PDF",
      size: "1.2 MB",
      pages: 8,
      language: "O'zbek",
      version: "v1.3",
      date: "2024-01-05",
      downloads: 432,
      description: "PrecisionLevel Digital o'lchash asbobini kalibrlash qo'llanmasi",
      icon: FileText,
    },
    {
      id: 6,
      title: "TOOLPRO Mahsulotlari - ISO Sertifikatlari",
      category: "all",
      type: "certificate",
      format: "PDF",
      size: "5.7 MB",
      pages: 32,
      language: "Ingliz",
      version: "v3.0",
      date: "2024-01-01",
      downloads: 298,
      description: "TOOLPRO mahsulotlarining ISO sertifikatlari to'plami",
      icon: FileText,
    },
  ]

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory
    const matchesType = selectedType === "all" || doc.type === selectedType
    return matchesSearch && matchesCategory && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video
      case "certificate":
        return ImageIcon
      default:
        return FileText
    }
  }

  const getFormatColor = (format: string) => {
    switch (format) {
      case "PDF":
        return "bg-red-500"
      case "MP4":
        return "bg-blue-500"
      case "DOC":
        return "bg-blue-600"
      default:
        return "bg-gray-500"
    }
  }

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
              Hujjatlar va <span className="text-yellow-400">Qo'llanmalar</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Barcha mahsulotlar uchun texnik hujjatlar, foydalanuvchi qo'llanmalari va video darsliklar
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
              <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Hujjatlar ichida qidirish..."
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

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Tur" />
                </SelectTrigger>
                <SelectContent>
                  {documentTypes.map((type) => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-muted-foreground self-end lg:self-auto">
              {filteredDocuments.length} ta hujjat topildi
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-6">
            {filteredDocuments.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Document Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                          <doc.icon className="w-8 h-8 text-muted-foreground" />
                        </div>
                      </div>

                      {/* Document Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start gap-3 mb-3">
                          <h3 className="text-xl font-semibold text-foreground hover:text-yellow-400 transition-colors">
                            {doc.title}
                          </h3>
                          <div className="flex gap-2">
                            <Badge className={`${getFormatColor(doc.format)} text-white text-xs`}>{doc.format}</Badge>
                            <Badge variant="outline" className="text-yellow-400 border-yellow-400/50">
                              {documentTypes.find((t) => t.id === doc.type)?.name}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">{doc.description}</p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-muted-foreground mb-4">
                          <div>
                            <span className="font-medium">Hajm:</span> {doc.size}
                          </div>
                          {doc.pages && (
                            <div>
                              <span className="font-medium">Sahifalar:</span> {doc.pages}
                            </div>
                          )}
                          {doc.duration && (
                            <div>
                              <span className="font-medium">Davomiyligi:</span> {doc.duration}
                            </div>
                          )}
                          <div>
                            <span className="font-medium">Til:</span> {doc.language}
                          </div>
                          <div>
                            <span className="font-medium">Versiya:</span> {doc.version}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(doc.date).toLocaleDateString("uz-UZ")}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Eye className="w-4 h-4" />
                          <span>{doc.downloads} marta yuklab olingan</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                          <Download className="w-4 h-4 mr-2" />
                          Yuklab olish
                        </Button>
                        <Button variant="outline" className="border-border bg-transparent">
                          <Eye className="w-4 h-4 mr-2" />
                          Ko'rish
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredDocuments.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">Hech qanday hujjat topilmadi</p>
            </div>
          )}
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Tezkor kirish</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eng ko'p ishlatiladigan hujjatlarga tezkor kirish
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentTypes.slice(1, 5).map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:border-yellow-500/50 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{type.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {documents.filter((d) => d.type === type.id).length} ta hujjat
                    </p>
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
