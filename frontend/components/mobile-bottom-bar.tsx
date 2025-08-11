"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, Package, Heart, ShoppingCart, User } from "lucide-react"

export function MobileBottomBar() {
  const pathname = usePathname()

  const items = [
    { href: "/", Icon: Home, label: "Bosh sahifa" },
    { href: "/products", Icon: Package, label: "Mahsulotlar" },
    { href: "/liked", Icon: Heart, label: "Sevimli" },
    { href: "/cart", Icon: ShoppingCart, label: "Savatcha" },
    { href: "/auth/login", Icon: User, label: "Profil" },
  ] as const

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border/50 shadow-lg lg:hidden"
    >
      <div className="flex justify-around items-center py-3 px-4">
        {items.map(({ href, Icon, label }, index) => (
          <Link key={href} href={href} className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -4, 
                scale: 1.15,
                rotate: 5
              }}
              whileTap={{ 
                y: 0, 
                scale: 0.9,
                rotate: -5
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center py-2 relative"
            >
              <div className="relative">
                <motion.div
                  animate={isActive(href) ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Icon 
                    className={`w-6 h-6 mb-1 transition-colors duration-300 ${
                      isActive(href) ? "text-yellow-500" : "text-muted-foreground"
                    }`} 
                  />
                </motion.div>

                {/* Active indicator with pulse effect */}
                <AnimatePresence>
                  {isActive(href) && (
                    <>
                      <motion.div
                        layoutId="bottomActiveIndicator"
                        className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"
                        animate={{ 
                          scale: [1, 1.8, 1],
                          opacity: [1, 0.2, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </>
                  )}
                </AnimatePresence>

                {/* Hover background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-xl -m-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              <motion.span 
                className={`text-xs font-medium transition-colors duration-300 relative z-10 ${
                  isActive(href) ? "text-yellow-500" : "text-muted-foreground"
                }`}
                animate={isActive(href) ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {label}
              </motion.span>

              {/* Active background for entire item */}
              <AnimatePresence>
                {isActive(href) && (
                  <motion.div
                    className="absolute inset-0 bg-yellow-50 dark:bg-yellow-950/20 rounded-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
