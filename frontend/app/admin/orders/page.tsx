"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Truck,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  Download,
  Calendar,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const orders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      email: "john@example.com",
      products: ["ProDrill X1 Hammer", "Safety Gloves"],
      total: "$329",
      status: "completed",
      date: "2024-01-15",
      paymentMethod: "Card",
      shippingAddress: "123 Main St, Tashkent",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      email: "jane@example.com",
      products: ["MixMaster Pro 2000"],
      total: "$459",
      status: "processing",
      date: "2024-01-14",
      paymentMethod: "PayPal",
      shippingAddress: "456 Oak Ave, Samarkand",
    },
    {
      id: "ORD-003",
      customer: "Bob Johnson",
      email: "bob@example.com",
      products: ["FlexScaffold System", "Safety Helmet"],
      total: "$1349",
      status: "pending",
      date: "2024-01-13",
      paymentMethod: "Bank Transfer",
      shippingAddress: "789 Pine St, Bukhara",
    },
    {
      id: "ORD-004",
      customer: "Alice Brown",
      email: "alice@example.com",
      products: ["GrindForce Angle Pro"],
      total: "$189",
      status: "shipped",
      date: "2024-01-12",
      paymentMethod: "Card",
      shippingAddress: "321 Elm St, Andijan",
    },
    {
      id: "ORD-005",
      customer: "Mike Wilson",
      email: "mike@example.com",
      products: ["PrecisionLevel Digital", "Measuring Tape"],
      total: "$128",
      status: "cancelled",
      date: "2024-01-11",
      paymentMethod: "Card",
      shippingAddress: "654 Maple Dr, Namangan",
    },
  ]

  const statusConfig = {
    pending: { label: "Kutilmoqda", color: "bg-yellow-500", icon: Clock },
    processing: { label: "Jarayonda", color: "bg-blue-500", icon: Package },
    shipped: { label: "Yuborildi", color: "bg-purple-500", icon: Truck },
    completed: { label: "Tugallandi", color: "bg-green-500", icon: CheckCircle },
    cancelled: { label: "Bekor qilindi", color: "bg-red-500", icon: XCircle },
  }

  const stats = [
    {
      title: "Jami buyurtmalar",
      value: "2,350",
      change: "+12%",
      icon: Package,
      color: "text-blue-500",
    },
    {
      title: "Kutilayotgan",
      value: "45",
      change: "+5%",
      icon: Clock,
      color: "text-yellow-500",
    },
    {
      title: "Tugallangan",
      value: "1,890",
      change: "+18%",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Bekor qilingan",
      value: "23",
      change: "-8%",
      icon: XCircle,
      color: "text-red-500",
    },
  ]

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Buyurtmalar</h1>
          <p className="text-muted-foreground">Barcha buyurtmalarni boshqaring</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Button variant="outline" className="bg-background">
            <Download className="w-4 h-4 mr-2" />
            Eksport
          </Button>
          <Button variant="outline" className="bg-background">
            <Calendar className="w-4 h-4 mr-2" />
            Hisobot
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">
                      <span className={stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                        {stat.change}
                      </span>{" "}
                      o'tgan oyga nisbatan
                    </p>
                  </div>
                  <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <Card className="bg-card border-border">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buyurtmalarni qidirish..."
                className="pl-10 bg-background border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-48 bg-background border-border">
                <SelectValue placeholder="Holat" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border">
                <SelectItem value="all">Barcha holatlar</SelectItem>
                <SelectItem value="pending">Kutilmoqda</SelectItem>
                <SelectItem value="processing">Jarayonda</SelectItem>
                <SelectItem value="shipped">Yuborildi</SelectItem>
                <SelectItem value="completed">Tugallandi</SelectItem>
                <SelectItem value="cancelled">Bekor qilindi</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-background border-border">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Buyurtmalar ro'yxati</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="min-w-[120px]">Buyurtma ID</TableHead>
                  <TableHead className="min-w-[150px]">Mijoz</TableHead>
                  <TableHead className="min-w-[200px] hidden sm:table-cell">Mahsulotlar</TableHead>
                  <TableHead className="min-w-[100px]">Jami</TableHead>
                  <TableHead className="min-w-[120px]">Holat</TableHead>
                  <TableHead className="min-w-[100px] hidden md:table-cell">Sana</TableHead>
                  <TableHead className="text-right min-w-[80px]">Amallar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredOrders.map((order) => {
                  const StatusIcon = statusConfig[order.status as keyof typeof statusConfig].icon
                  return (
                    <TableRow key={order.id} className="border-border">
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.customer}</div>
                          <div className="text-sm text-muted-foreground hidden sm:block">{order.email}</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <div className="space-y-1">
                          {order.products.slice(0, 2).map((product, idx) => (
                            <div key={idx} className="text-sm">
                              {product}
                            </div>
                          ))}
                          {order.products.length > 2 && (
                            <div className="text-xs text-muted-foreground">+{order.products.length - 2} boshqa</div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{order.total}</TableCell>
                      <TableCell>
                        <Badge
                          className={`${statusConfig[order.status as keyof typeof statusConfig].color} text-white`}
                        >
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {statusConfig[order.status as keyof typeof statusConfig].label}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-sm text-muted-foreground">{order.date}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-background border-border">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              Ko'rish
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Tahrirlash
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Truck className="mr-2 h-4 w-4" />
                              Yetkazish
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
