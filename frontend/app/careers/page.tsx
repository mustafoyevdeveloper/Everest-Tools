"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Users, Briefcase, Heart, Star, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Sog'liqni saqlash",
      description: "To'liq tibbiy sug'urta va wellness dasturlari",
    },
    {
      icon: Clock,
      title: "Moslashuvchan ish vaqti",
      description: "Hybrid ish rejimi va moslashuvchan jadval",
    },
    {
      icon: Star,
      title: "Professional rivojlanish",
      description: "O'qitish kurslari va sertifikatlash dasturlari",
    },
    {
      icon: Users,
      title: "Jamoa ruhi",
      description: "Do'stona muhit va jamoaviy tadbirlar",
    },
  ]

  const openPositions = [
    {
      title: "Senior Frontend Developer",
      department: "IT",
      location: "Toshkent",
      type: "To'liq vaqt",
      experience: "3+ yil",
      description: "React va Next.js bilan ishlash tajribasi talab qilinadi",
      requirements: ["React/Next.js", "TypeScript", "Tailwind CSS", "Git"],
    },
    {
      title: "Product Manager",
      department: "Mahsulot",
      location: "Toshkent",
      type: "To'liq vaqt",
      experience: "5+ yil",
      description: "Mahsulot strategiyasi va rivojlanishini boshqarish",
      requirements: ["Product Management", "Analytics", "Leadership", "Agile"],
    },
    {
      title: "Sales Representative",
      department: "Sotuv",
      location: "Samarqand",
      type: "To'liq vaqt",
      experience: "2+ yil",
      description: "B2B sotuv va mijozlar bilan ishlash tajribasi",
      requirements: ["Sales", "CRM", "Communication", "Negotiation"],
    },
    {
      title: "Quality Assurance Engineer",
      department: "Sifat nazorati",
      location: "Toshkent",
      type: "To'liq vaqt",
      experience: "3+ yil",
      description: "Mahsulot sifatini nazorat qilish va test qilish",
      requirements: ["Testing", "Quality Control", "Documentation", "Attention to Detail"],
    },
  ]

  const stats = [
    { number: "200+", label: "Xodimlar" },
    { number: "15+", label: "Mamlakatlar" },
    { number: "95%", label: "Xodimlar mamnunligi" },
    { number: "4.8", label: "Glassdoor reytingi" },
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bizga <span className="text-yellow-400">Qo'shiling</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              TOOLPRO jamoasida karyerangizni boshlang. Innovatsion loyihalarda ishtirok eting va professional
              rivojlanishingizni ta'minlang.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg px-8 py-3">
              Ochiq pozitsiyalarni ko'rish
            </Button>
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Nima uchun TOOLPRO?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Xodimlarimiz uchun eng yaxshi sharoitlar yaratamiz
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ochiq pozitsiyalar</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Sizga mos kelgan ishni toping va ariza yuboring
            </p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-xl font-semibold text-foreground">{position.title}</h3>
                          <Badge variant="outline" className="text-yellow-400 border-yellow-400/50">
                            {position.department}
                          </Badge>
                        </div>

                        <p className="text-muted-foreground mb-4">{position.description}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {position.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {position.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {position.experience}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {position.requirements.map((req, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 lg:flex-col">
                        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                          Ariza yuborish
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline" className="border-border bg-transparent">
                          Batafsil
                        </Button>
                      </div>
                    </div>
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
