"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "uz" | "en" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  uz: {
    // Navigation
    "nav.products": "Mahsulotlar",
    "nav.solutions": "Yechimlar",
    "nav.services": "Xizmatlar",
    "nav.support": "Yordam",
    "nav.about": "Biz haqimizda",
    "nav.contact": "Aloqa",
    "nav.profile": "Profil",
    "nav.liked": "Yoqtirilganlar",
    "nav.cart": "Savatcha",
    "nav.login": "Kirish",
    "nav.signup": "Ro'yxatdan o'tish",

    // Hero Section
    "hero.title": "PROFESSIONAL ASBOBLAR",
    "hero.subtitle":
      "Professionallar uchun mo'ljallangan yuqori sifatli, yengil qo'l asboblari to'plamini kashf eting.",
    "hero.explore": "Katalogni ko'rish",
    "hero.demo": "Demo ko'rish",
    "hero.warranty": "5 yillik kafolat",
    "hero.shipping": "Bepul yetkazib berish",
    "hero.certified": "ISO sertifikati",

    // Products
    "products.featured": "Mashhur mahsulotlar",
    "products.subtitle": "Eng mashhur professional qurilish asboblarini kashf eting",
    "products.addToCart": "Savatga qo'shish",
    "products.quickView": "Tez ko'rish",
    "products.viewAll": "Barchasini ko'rish",
    "products.outOfStock": "Tugagan",
    "products.notifyMe": "Xabar berish",

    // Admin Panel
    "admin.dashboard": "Boshqaruv paneli",
    "admin.products": "Mahsulotlar",
    "admin.orders": "Buyurtmalar",
    "admin.payments": "To'lovlar",
    "admin.messages": "Xabarlar",
    "admin.users": "Foydalanuvchilar",
    "admin.settings": "Sozlamalar",

    // Footer
    "footer.company": "Kompaniya",
    "footer.products": "Mahsulotlar",
    "footer.support": "Yordam",
    "footer.legal": "Huquqiy",
    "footer.newsletter": "Yangiliklar",
    "footer.subscribe": "Obuna bo'lish",

    // Search
    "search.placeholder": "Qidirish...",
  },
  en: {
    // Navigation
    "nav.products": "Products",
    "nav.solutions": "Solutions",
    "nav.services": "Services",
    "nav.support": "Support",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.profile": "Profile",
    "nav.liked": "Liked",
    "nav.cart": "Cart",
    "nav.login": "Login",
    "nav.signup": "Sign Up",

    // Hero Section
    "hero.title": "PRECISION TOOLS FOR PROS",
    "hero.subtitle":
      "Discover our premium collection of lightweight, hand-operated construction tools. Built for professionals who demand excellence.",
    "hero.explore": "Explore Catalog",
    "hero.demo": "Watch Demo",
    "hero.warranty": "5 Year Warranty",
    "hero.shipping": "Free Shipping",
    "hero.certified": "ISO Certified",

    // Products
    "products.featured": "Featured Products",
    "products.subtitle": "Discover our most popular professional-grade construction tools",
    "products.addToCart": "Add to Cart",
    "products.quickView": "Quick View",
    "products.viewAll": "View All Products",
    "products.outOfStock": "OUT OF STOCK",
    "products.notifyMe": "Notify Me",

    // Admin Panel
    "admin.dashboard": "Dashboard",
    "admin.products": "Products",
    "admin.orders": "Orders",
    "admin.payments": "Payments",
    "admin.messages": "Messages",
    "admin.users": "Users",
    "admin.settings": "Settings",

    // Footer
    "footer.company": "Company",
    "footer.products": "Products",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.newsletter": "Newsletter",
    "footer.subscribe": "Subscribe",

    // Search
    "search.placeholder": "Search...",
  },
  ru: {
    // Navigation
    "nav.products": "Продукты",
    "nav.solutions": "Решения",
    "nav.services": "Услуги",
    "nav.support": "Поддержка",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "nav.profile": "Профиль",
    "nav.liked": "Избранное",
    "nav.cart": "Корзина",
    "nav.login": "Войти",
    "nav.signup": "Регистрация",

    // Hero Section
    "hero.title": "ТОЧНЫЕ ИНСТРУМЕНТЫ ДЛЯ ПРОФИ",
    "hero.subtitle":
      "Откройте для себя нашу премиальную коллекцию легких ручных строительных инструментов. Созданы для профессионалов, которые требуют совершенства.",
    "hero.explore": "Изучить каталог",
    "hero.demo": "Смотреть демо",
    "hero.warranty": "5 лет гарантии",
    "hero.shipping": "Бесплатная доставка",
    "hero.certified": "ISO сертификат",

    // Products
    "products.featured": "Рекомендуемые продукты",
    "products.subtitle": "Откройте для себя наши самые популярные профессиональные строительные инструменты",
    "products.addToCart": "В корзину",
    "products.quickView": "Быстрый просмотр",
    "products.viewAll": "Посмотреть все продукты",
    "products.outOfStock": "НЕТ В НАЛИЧИИ",
    "products.notifyMe": "Уведомить меня",

    // Admin Panel
    "admin.dashboard": "Панель управления",
    "admin.products": "Продукты",
    "admin.orders": "Заказы",
    "admin.payments": "Платежи",
    "admin.messages": "Сообщения",
    "admin.users": "Пользователи",
    "admin.settings": "Настройки",

    // Footer
    "footer.company": "Компания",
    "footer.products": "Продукты",
    "footer.support": "Поддержка",
    "footer.legal": "Правовая информация",
    "footer.newsletter": "Новости",
    "footer.subscribe": "Подписаться",

    // Search
    "search.placeholder": "Поиск...",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("uz")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
