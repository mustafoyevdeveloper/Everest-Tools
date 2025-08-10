"use client"
import { motion } from "framer-motion"
import { DollarSign, ShoppingCart, Package, Users, TrendingUp, TrendingDown, Eye, Plus } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export default function AdminDashboard() {
  const { t } = useLanguage()

  const stats = [
    {
      title: "Jami daromad",
      value: "$0",
      change: "0%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      title: "Buyurtmalar",
      value: "0",
      change: "0%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-blue-500",
    },
    {
      title: "Mahsulotlar",
      value: "0",
      change: "0%",
      trend: "up",
      icon: Package,
      color: "text-yellow-500",
    },
    {
      title: "Faol foydalanuvchilar",
      value: "0",
      change: "0%",
      trend: "up",
      icon: Users,
      color: "text-purple-500",
    },
  ];

  const recentOrders = [];
  const topProducts = [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Boshqaruv paneli</h1>
        <p className="text-muted-foreground">Biznesingizning umumiy ko'rinishi</p>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Tezkor amallar</CardTitle>
          <CardDescription>Tez-tez ishlatiladigan funksiyalar</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button className="h-20 flex-col bg-yellow-500 hover:bg-yellow-600 text-black">
              <Plus className="w-6 h-6 mb-2" />
              Yangi mahsulot
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <ShoppingCart className="w-6 h-6 mb-2" />
              Buyurtmalarni ko'rish
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <Users className="w-6 h-6 mb-2" />
              Mijozlar
            </Button>
            <Button variant="outline" className="h-20 flex-col bg-transparent">
              <DollarSign className="w-6 h-6 mb-2" />
              Hisobotlar
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground flex items-center">
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 mr-1 text-red-500" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span> o'tgan
                  oyga nisbatan
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>So'nggi buyurtmalar</CardTitle>
            <CardDescription>Siz {recentOrders.length} ta buyurtma oldingiz.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.length === 0 && <div className="text-center text-muted-foreground">Buyurtmalar yo‘q</div>}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              <Eye className="w-4 h-4 mr-2" />
              Barcha buyurtmalarni ko'rish
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Eng ko'p sotiladigan mahsulotlar</CardTitle>
            <CardDescription>Ushbu oyning eng yaxshi mahsulotlari</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.length === 0 && <div className="text-center text-muted-foreground">Mahsulotlar yo‘q</div>}
            </div>
            <Button variant="outline" className="w-full mt-4 bg-transparent">
              <Package className="w-4 h-4 mr-2" />
              Barcha mahsulotlarni ko'rish
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
