import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"
import { AuthProvider } from "@/contexts/auth-context"
import { ScrollToTop } from "@/components/scroll-to-top"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Package, Wrench, Headphones, Info, Phone, LogIn, UserPlus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileTopBar } from "@/components/mobile-top-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EVEREST TOOLS - Professional Construction Tools",
  description: "EVEREST TOOLS kompaniyasi: professional qurilish asboblari va uskunalari",
  icons: {
    icon: '/Everest Tools.png', // public papkadagi fayl yo‘li
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <AuthProvider>
              <ScrollToTop />
              {/* Navigation bar */}
              {/* ... */}
              {/* Mobil ikon bar */}
              <MobileTopBar />
              {children}
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
