"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  CreditCard,
  MessageSquare,
  Users,
  Settings,
  ChevronDown,
  ChevronRight,
  Drill,
  MonitorSpeakerIcon as Mixer,
  Building,
  Disc,
  Ruler,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const menuItems = [
  {
    title: "Boshqaruv paneli",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Mahsulotlar",
    icon: Package,
    children: [
      { title: "Barcha mahsulotlar", href: "/admin/products" },
      { title: "Burg'ulash asboblari", href: "/admin/products/drilling", icon: Drill },
      { title: "Aralashtirish asboblari", href: "/admin/products/mixing", icon: Mixer },
      { title: "Iskala tizimlari", href: "/admin/products/scaffolding", icon: Building },
      { title: "Silliqlash asboblari", href: "/admin/products/grinding", icon: Disc },
      { title: "O'lchash asboblari", href: "/admin/products/measuring", icon: Ruler },
    ],
  },
  {
    title: "Buyurtmalar",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "To'lovlar",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    title: "Xabarlar",
    href: "/admin/messages",
    icon: MessageSquare,
  },
  {
    title: "Foydalanuvchilar",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Sozlamalar",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const [openItems, setOpenItems] = useState<string[]>(["Mahsulotlar"])

  const toggleItem = (title: string) => {
    setOpenItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="admin-sidebar w-64 h-full bg-card border-r border-border p-4 overflow-y-auto">
      <div className="space-y-2">
        {menuItems.map((item) => {
          if (item.children) {
            const isOpen = openItems.includes(item.title)
            const hasActiveChild = item.children.some((child) => isActive(child.href))

            return (
              <Collapsible key={item.title} open={isOpen} onOpenChange={() => toggleItem(item.title)}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-between hover:bg-accent hover:text-accent-foreground",
                      (isOpen || hasActiveChild) && "bg-accent text-accent-foreground",
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </div>
                    {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 mt-1">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "w-full justify-start pl-8 hover:bg-accent hover:text-accent-foreground",
                          isActive(child.href) && "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20",
                        )}
                      >
                        {child.icon && <child.icon className="w-4 h-4 mr-2" />}
                        {child.title}
                      </Button>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )
          }

          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start hover:bg-accent hover:text-accent-foreground",
                  isActive(item.href) && "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20",
                )}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.title}
              </Button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
