"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useTheme } from "@/contexts/theme-context"
import Link from "next/link"

export function Footer() {
  const { t } = useLanguage()
  const { theme } = useTheme()

  const footerSections = [
    {
      title: "Kompaniya",
      links: [
        { name: "Biz haqimizda", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "/news" },
        { name: "Investors", href: "/investors" },
      ],
    },
    {
      title: "Mahsulotlar",
      links: [
        { name: "Drills", href: "/products?category=drilling" },
        { name: "Mixers", href: "/products?category=mixing" },
        { name: "Scaffolding", href: "/products?category=scaffolding" },
        { name: "Grinders", href: "/products?category=grinding" },
      ],
    },
    {
      title: "Yordam",
      links: [
        { name: "Help Center", href: "/support" },
        { name: "Documentation", href: "/docs" },
        { name: "Training", href: "/training" },
        { name: "Warranty", href: "/warranty" },
      ],
    },
    {
      title: "Huquqiy",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
        { name: "GDPR", href: "/gdpr" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/toolpro", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/toolpro", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/toolpro", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/toolpro", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/toolpro", label: "YouTube" },
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: "+998 90 123 45 67",
      href: "tel:+998901234567",
    },
    {
      icon: Mail,
      text: "info@toolpro.uz",
      href: "mailto:info@toolpro.uz",
    },
    {
      icon: MapPin,
      text: "Toshkent, O'zbekiston",
      href: "https://maps.google.com",
    },
  ]

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-lg">T</span>
                </div>
                <span className="text-xl sm:text-2xl font-bold text-foreground">TOOLPRO</span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Professional qurilish asboblari ishlab chiqaruvchisi. 15 yildan ortiq tajriba bilan dunyoning 30+
                mamlakatida xizmat ko'rsatamiz.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-yellow-400 transition-colors group"
                  >
                    <contact.icon className="w-4 h-4 group-hover:text-yellow-400 flex-shrink-0" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 pt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 bg-muted hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-black transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <div key={section.title} className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-foreground font-semibold text-base">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-yellow-400 transition-colors text-sm block py-1 hover:translate-x-1 transition-transform duration-200"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-foreground font-semibold text-lg mb-2">
                Yangiliklar va aksiyalardan xabardor bo'ling
              </h3>
              <p className="text-muted-foreground text-sm">
                Email manzilingizni qoldiring va eng so'nggi yangiliklar haqida birinchi bo'lib bilib oling
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-96">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-foreground placeholder:text-muted-foreground text-sm"
              />
              <button className="px-4 sm:px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-medium rounded-lg transition-colors whitespace-nowrap text-sm">
                Obuna bo'lish
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-center lg:text-left">
              <p className="text-muted-foreground text-sm">© 2024 TOOLPRO. Barcha huquqlar himoyalangan.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
              <Link href="/sitemap" className="text-muted-foreground hover:text-yellow-400 transition-colors">
                Sayt xaritasi
              </Link>
              <Link href="/accessibility" className="text-muted-foreground hover:text-yellow-400 transition-colors">
                Accessibility
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Til:</span>
                <select className="bg-background border border-border rounded px-2 py-1 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-yellow-500">
                  <option value="uz">O'zbek</option>
                  <option value="ru">Русский</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
