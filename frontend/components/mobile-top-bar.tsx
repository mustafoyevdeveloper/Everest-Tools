"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Package, Wrench, Headphones, Info, Phone, LogIn, UserPlus } from "lucide-react"
import { useEffect, useState } from "react"

export function MobileTopBar() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [prevPathname, setPrevPathname] = useState(pathname)

  // Sahifa o'zgarganda animatsiya (tez)
  useEffect(() => {
    if (prevPathname !== pathname) {
      setIsVisible(false)
      const timer = setTimeout(() => {
        setIsVisible(true)
        setPrevPathname(pathname)
      }, 25)
      return () => clearTimeout(timer)
    }
  }, [pathname, prevPathname])

  const items = [
    { href: "/products", Icon: Package, label: "Mahsulotlar" },
    { href: "/services", Icon: Wrench, label: "Xizmatlar" },
    { href: "/support", Icon: Headphones, label: "Yordam" },
    { href: "/about", Icon: Info, label: "Haqida" },
    { href: "/contact", Icon: Phone, label: "Aloqa" },
    { href: "/auth/login", Icon: LogIn, label: "Kirish" },
    { href: "/auth/signup", Icon: UserPlus, label: "Ro'yxat" },
  ] as const

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={pathname}
          initial={{ y: -30, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -30, opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1, ease: "easeOut", type: "spring", stiffness: 300, damping: 8 }}
          className="sticky top-[56px] z-40 bg-background/95 backdrop-blur-lg border-b border-border flex justify-center gap-2 py-3 lg:hidden no-tap-highlight"
        >
          {items.map(({ href, Icon, label }, index) => (
            <Link key={href} href={href}>
              <motion.div
                initial={{ opacity: 0, y: -15, rotate: -5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -3, scale: 1.1, rotate: 5 }}
                whileTap={{ y: 0, scale: 0.9, rotate: -5 }}
                transition={{ 
                  duration: 0.08, 
                  delay: index * 0.02, 
                  ease: "easeOut", 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 12 
                }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`relative overflow-hidden ${
                    isActive(href)
                      ? "text-yellow-500 bg-yellow-50 dark:bg-yellow-950/20"
                      : "text-muted-foreground hover:text-foreground"
                  } !rounded-xl !hover:bg-transparent !hover:text-inherit active:bg-transparent focus:bg-transparent focus-visible:ring-0 transition-all duration-75`}
                  aria-label={label}
                >
                  <motion.div animate={isActive(href) ? { rotate: 360 } : { rotate: 0 }} transition={{ duration: 0.15, ease: "easeInOut" }}>
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl"
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.05 }}
                  />
                </Button>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}


