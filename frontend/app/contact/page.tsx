"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()
  const [isLoading, setIsLoading] = useState(false)

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+998 90 123 45 67", "+998 71 123 45 67"],
      color: "text-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@toolpro.uz", "support@toolpro.uz"],
      color: "text-green-500",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Tashkent, Uzbekistan", "Mirzo Ulugbek District"],
      color: "text-red-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 - 18:00", "Sat: 9:00 - 14:00"],
      color: "text-purple-500",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground dark:text-white mb-6">
              {t("nav.contact")} <span className="text-yellow-400">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground dark:text-gray-300 leading-relaxed">
              Get in touch with our team. We're here to help you find the perfect tools for your projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <info.icon className={`w-8 h-8 ${info.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">First Name</label>
                        <Input placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Last Name</label>
                        <Input placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input type="tel" placeholder="+998 90 123 45 67" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input placeholder="How can we help you?" required />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea placeholder="Tell us more about your inquiry..." className="min-h-[120px]" required />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose TOOLPRO?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Expert Support</h4>
                      <p className="text-muted-foreground">Our team of construction experts is ready to help you.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Fast Response</h4>
                      <p className="text-muted-foreground">We respond to all inquiries within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold">Custom Solutions</h4>
                      <p className="text-muted-foreground">Tailored recommendations for your specific needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-semibold mb-2">Need immediate assistance?</h4>
                <p className="text-muted-foreground mb-4">
                  For urgent inquiries, call us directly or visit our showroom.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <MapPin className="w-4 h-4 mr-2" />
                    Visit Store
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
