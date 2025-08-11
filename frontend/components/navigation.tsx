"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Search,
  ShoppingCart,
  User,
  Globe,
  Zap,
  Menu,
  X,
  Sun,
  Moon,
  Heart,
  LogIn,
  UserPlus,
  Phone,
  Info,
  Package,
  Wrench,
  Headphones,
  LogOut,
  Settings,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "@/contexts/theme-context"
import { useLanguage } from "@/contexts/language-context"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const { user, logout, isAdmin } = useAuth()
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const pathname = usePathname()

  const languages = [
    { code: "uz" as const, name: "O'zbek", flag: "🇺🇿" },
    { code: "en" as const, name: "English", flag: "🇺🇸" },
    { code: "ru" as const, name: "Русский", flag: "🇷🇺" },
  ]

  const menuItems = [
    { key: "nav.products", href: "/products", icon: Package },
    { key: "nav.services", href: "/services", icon: Wrench },
    { key: "nav.support", href: "/support", icon: Headphones },
    { key: "nav.about", href: "/about", icon: Info },
    { key: "nav.contact", href: "/contact", icon: Phone },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm"
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm no-tap-highlight"
    >
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                EVEREST TOOLS
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 flex-shrink min-w-0">
            {menuItems.map((item) => (
              <Link key={item.key} href={item.href} className="truncate">
                <motion.div
                  className="px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 font-medium min-w-0"
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                >
                  {t(item.key)}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Qidiruv va ikonlar */}
          <div className="flex items-center gap-1 xl:gap-2 min-w-0 flex-shrink">
            {/* Til va tema */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Til tanlash"
                  className="!hover:bg-transparent !hover:text-inherit active:bg-transparent focus:bg-transparent focus-visible:ring-0 md:hover:bg-accent md:hover:text-accent-foreground"
                >
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)}>
                    <span className="mr-2">{lang.flag}</span> {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Tema almashtirish"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="!hover:bg-transparent !hover:text-inherit active:bg-transparent focus:bg-transparent focus-visible:ring-0 md:hover:bg-accent md:hover:text-accent-foreground"
            >
              {mounted ? (theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />) : null}
            </Button>
            {/* Like va savatcha */}
            <Link href="/liked" aria-label="Liked">
              <Button
                variant="ghost"
                size="icon"
                className={
                  `relative !hover:bg-transparent !hover:text-inherit active:bg-transparent focus:bg-transparent focus-visible:ring-0 md:hover:bg-accent md:hover:text-accent-foreground ${pathname.startsWith("/liked") ? "text-yellow-500" : ""}`
                }
              >
                <Heart className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 text-xs bg-red-500">2</Badge>
              </Button>
            </Link>
            <Link href="/cart" aria-label="Savatcha">
              <Button
                variant="ghost"
                size="icon"
                className={
                  `relative !hover:bg-transparent !hover:text-inherit active:bg-transparent focus:bg-transparent focus-visible:ring-0 md:hover:bg-accent md:hover:text-accent-foreground ${pathname.startsWith("/cart") ? "text-yellow-500" : ""}`
                }
              >
                <ShoppingCart className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 text-xs bg-yellow-500">3</Badge>
              </Button>
            </Link>
            {/* Kirish va Ro‘yxatdan o‘tish */}
            <Link href="/auth/login" className="hidden md:inline-block">
              <Button variant="ghost" size="sm" className="font-medium">
                <LogIn className="w-4 h-4 mr-1" /> {t("nav.login")}
              </Button>
            </Link>
            <Link href="/auth/signup" className="hidden md:inline-block">
              <Button variant="default" size="sm" className="font-medium">
                <UserPlus className="w-4 h-4 mr-1" /> {t("nav.signup")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
