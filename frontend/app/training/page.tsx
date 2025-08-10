"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Clock, Users, Star, BookOpen, Search } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function TrainingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { id: "all", name: "Barcha kurslar" },
    { id: "drilling", name: "Burg'ulash texnikasi" },
    { id: "mixing", name: "Aralashtirish usullari" },
    { id: "scaffolding", name: "Iskala o'rnatish" },
    { id: "grinding", name: "Silliqlash texnikalari" },
    { id: "safety", name: "Xavfsizlik qoidalari" },
  ]

  const levels = [
    { id: "all", name: "Barcha darajalar" },
    { id: "beginner", name: "Boshlang'ich" },
    { id: "intermediate", name: "O'rta" },
    { id: "advanced", name: "Yuqori" },
    { id: "expert", name: "Ekspert" },
  ]

  const courses = [
    {
      id: 1,
      title: "ProDrill X1 bilan professional ishlash",
      category: "drilling",
      level: "intermediate",
      instructor: "Aziz Karimov",
      duration: "2 soat 30 daqiqa",
      lessons: 12,
      students: 1234,
      rating: 4.9,
      price: 0,
      image: "/industrial-drill.png",
      description: "ProDrill X1 Hammer bilan professional darajada ishlashni o'rganing",
      skills: ["Burg'ulash texnikasi", "Xavfsizlik qoidalari", "Texnik xizmat"],
      featured: true,
    },
    {
      id: 2,
      title: "Qurilish xavfsizligi asoslari",
      category: "safety",
      level: "beginner",
      instructor: "Malika Tosheva",
      duration: "1 soat 45 daqiqa",
      lessons: 8,
      students: 2156,
      rating: 4.8,
      price: 0,
      image: "/placeholder.svg?height=300&width=400&text=Safety+Training",
      description: "Qurilish ishlarida xavfsizlik qoidalari va himoya vositalari",
      skills: ["Xavfsizlik qoidalari", "Himoya vositalari", "Birinchi yordam"],
      featured: false,
    },
    {
      id: 3,
      title: "MixMaster Pro bilan beton aralashtirish",
      category: "mixing",
      level: "intermediate",
      instructor: "Bobur Rahimov",
      duration: "3 soat 15 daqiqa",
      lessons: 15,
      students: 856,
      rating: 4.7,
      price: 0,
      image: "/concrete-mixer.png",
      description: "Professional beton aralashtirish texnikalari va usullari",
      skills: ["Beton aralashtirish", "Nisbatlar hisoblash", "Sifat nazorati"],
      featured: false,
    },
    {
      id: 4,
      title: "FlexScaffold tizimini o'rnatish",
      category: "scaffolding",
      level: "advanced",
      instructor: "Sardor Alimov",
      duration: "4 soat 20 daqiqa",
      lessons: 18,
      students: 567,
      rating: 4.9,
      price: 0,
      image: "/scaffolding-system.png",
      description: "Murakkab iskala tizimlarini xavfsiz o'rnatish va demontaj qilish",
      skills: ["Iskala o'rnatish", "Xavfsizlik tekshiruvi", "Demontaj"],
      featured: false,
    },
    {
      id: 5,
      title: "GrindForce bilan metal ishlov berish",
      category: "grinding",
      level: "intermediate",
      instructor: "Jasur Normatov",
      duration: "2 soat 45 daqiqa",
      lessons: 11,
      students: 743,
      rating: 4.6,
      price: 0,
      image: "/angle-grinder-sparks.png",
      description: "Metal yuzalarini silliqlash va ishlov berish texnikalari",
      skills: ["Metal silliqlash", "Disk tanlash", "Finishing texnikalari"],
      featured: false,
    },
    {
      id: 6,
      title: "Qurilish asboblarining texnik xizmati",
      category: "all",
      level: "expert",
      instructor: "Nilufar Saidova",
      duration: "5 soat 30 daqiqa",
      lessons: 25,
      students: 432,
      rating: 4.8,
      price: 0,
      image: "/placeholder.svg?height=300&width=400&text=Maintenance",
      description: "Barcha turdagi qurilish asboblarining texnik xizmati va ta'mirlash",
      skills: ["Diagnostika", "Ta'mirlash", "Profilaktika", "Ehtiyot qismlar"],
      featured: false,
    },
  ]

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel
    return matchesSearch && matchesCategory && matchesLevel
  })

  const featuredCourse = filteredCourses.find((course) => course.featured)
  const regularCourses = filteredCourses.filter((course) => !course.featured)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "text-green-500 border-green-500"
      case "intermediate":
        return "text-blue-500 border-blue-500"
      case "advanced":
        return "text-orange-500 border-orange-500"
      case "expert":
        return "text-red-500 border-red-500"
      default:
        return "text-gray-500 border-gray-500"
    }
  }

  const getLevelName = (level: string) => {
    return levels.find((l) => l.id === level)?.name || level
  }

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
              O'quv <span className="text-yellow-400">Kurslari</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Professional qurilish asboblari bilan ishlashni o'rganing. Bepul video kurslar va amaliy mashg'ulotlar
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
                  placeholder="Kurslar ichida qidirish..."
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

              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Daraja" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level.id} value={level.id}>
                      {level.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-muted-foreground self-end lg:self-auto">
              {filteredCourses.length} ta kurs topildi
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      {featuredCourse && (
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
              <Badge className="bg-yellow-500 text-black mb-4">Tavsiya etilgan kurs</Badge>
              <Card className="overflow-hidden hover:border-yellow-500/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative">
                      <Image
                        src={featuredCourse.image || "/placeholder.svg"}
                        alt={featuredCourse.title}
                        width={600}
                        height={400}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                          <Play className="w-6 h-6 mr-2" />
                          Kursni boshlash
                        </Button>
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline" className={getLevelColor(featuredCourse.level)}>
                          {getLevelName(featuredCourse.level)}
                        </Badge>
                        <Badge variant="outline" className="text-yellow-400 border-yellow-400/50">
                          Bepul
                        </Badge>
                      </div>

                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 hover:text-yellow-400 transition-colors">
                        {featuredCourse.title}
                      </h2>

                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{featuredCourse.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {featuredCourse.duration}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <BookOpen className="w-4 h-4" />
                          {featuredCourse.lessons} ta dars
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          {featuredCourse.students} ta talaba
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {featuredCourse.rating} reyting
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">O'rganadigan ko'nikmalar:</h4>
                        <div className="flex flex-wrap gap-2">
                          {featuredCourse.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <span>Instruktor:</span>
                        <span className="font-medium text-foreground">{featuredCourse.instructor}</span>
                      </div>

                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                        <Play className="w-4 h-4 mr-2" />
                        Kursni boshlash
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Courses */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-yellow-500/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                          <Play className="w-4 h-4 mr-2" />
                          Boshlash
                        </Button>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-background/80 text-foreground">Bepul</Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className={getLevelColor(course.level)}>
                          {getLevelName(course.level)}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 hover:text-yellow-400 transition-colors line-clamp-2">
                        {course.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

                      <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {course.lessons} dars
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {course.students}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          {course.rating}
                        </div>
                      </div>

                      <div className="mb-4">
                        <span className="text-sm text-muted-foreground">Instruktor: </span>
                        <span className="text-sm font-medium">{course.instructor}</span>
                      </div>

                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                        <Play className="w-4 h-4 mr-2" />
                        Kursni boshlash
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">Hech qanday kurs topilmadi</p>
            </div>
          )}
        </div>
      </section>

      {/* Training Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-muted-foreground">Video kurslar</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">10K+</div>
              <div className="text-muted-foreground">Talabalar</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">4.8</div>
              <div className="text-muted-foreground">O'rtacha reyting</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-muted-foreground">Bepul kurslar</div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
