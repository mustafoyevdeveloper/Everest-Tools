"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Download,
  CreditCard,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  AlertTriangle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PaymentsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const payments = [
    {
      id: "PAY-001",
      orderId: "ORD-001",
      customer: "John Doe",
      amount: "$329.00",
      method: "Credit Card",
      status: "completed",
      date: "2024-01-15",
      transactionId: "txn_1234567890",
      fee: "$9.87",
    },
    {
      id: "PAY-002",
      orderId: "ORD-002",
      customer: "Jane Smith",
      amount: "$459.00",
      method: "PayPal",
      status: "pending",
      date: "2024-01-14",
      transactionId: "txn_0987654321",
      fee: "$13.77",
    },
    {
      id: "PAY-003",
      orderId: "ORD-003",
      customer: "Bob Johnson",
      amount: "$1,349.00",
      method: "Bank Transfer",
      status: "processing",
      date: "2024-01-13",
      transactionId: "txn_1122334455",
      fee: "$40.47",
    },
    {
      id: "PAY-004",
      orderId: "ORD-004",
      customer: "Alice Brown",
      amount: "$189.00",
      method: "Credit Card",
      status: "completed",
      date: "2024-01-12",
      transactionId: "txn_5566778899",
      fee: "$5.67",
    },
    {
      id: "PAY-005",
      orderId: "ORD-005",
      customer: "Mike Wilson",
      amount: "$128.00",
      method: "Credit Card",
      status: "failed",
      date: "2024-01-11",
      transactionId: "txn_9988776655",
      fee: "$0.00",
    },
  ]

  const statusConfig = {
    pending: { label: "Kutilmoqda", color: "bg-yellow-500", icon: Clock },
    processing: { label: "Jarayonda", color: "bg-blue-500", icon: AlertTriangle },
    completed: { label: "Tugallandi", color: "bg-green-500", icon: CheckCircle },
    failed: { label: "Muvaffaqiyatsiz", color: "bg-red-500", icon: XCircle },
  }

  const stats = [
    {
      title: "Jami daromad",
      value: "$45,231.89",
      change: "+20.1%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      title: "Bugungi to'lovlar",
      value: "$2,847.00",
      change: "+12.5%",
      trend: "up",
      icon: TrendingUp,
      color: "text-blue-500",
    },
    {
      title: "Kutilayotgan to'lovlar",
      value: "$1,459.00",
      change: "-5.2%",
      trend: "down",
      icon: Clock,
      color: "text-yellow-500",
    },
    {
      title: "Muvaffaqiyatsiz to'lovlar",
      value: "$234.00",
      change: "-15.8%",
      trend: "down",
      icon: XCircle,
      color: "text-red-500",
    },
  ]

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || payment.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">To'lovlar</h1>
          <p className="text-muted-foreground">Barcha to'lovlarni boshqaring</p>
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
                    <p className="text-xs text-muted-foreground flex items-center">
                      {stat.trend === "up" ? (
                        <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1 text-red-500" />
                      )}
                      <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>{" "}
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
                placeholder="To'lovlarni qidirish..."
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
                <SelectItem value="completed">Tugallandi</SelectItem>
                <SelectItem value="failed">Muvaffaqiyatsiz</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-background border-border">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>To'lovlar ro'yxati</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="min-w-[120px]">To'lov ID</TableHead>
                  <TableHead className="min-w-[120px]">Buyurtma ID</TableHead>
                  <TableHead className="min-w-[150px]">Mijoz</TableHead>
                  <TableHead className="min-w-[100px]">Summa</TableHead>
                  <TableHead className="min-w-[120px] hidden sm:table-cell">Usul</TableHead>
                  <TableHead className="min-w-[120px]">Holat</TableHead>
                  <TableHead className="min-w-[100px] hidden md:table-cell">Sana</TableHead>
                  <TableHead className="text-right min-w-[80px]">Amallar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPayments.map((payment) => {
                  const StatusIcon = statusConfig[payment.status as keyof typeof statusConfig].icon
                  return (
                    <TableRow key={payment.id} className="border-border">
                      <TableCell className="font-medium">{payment.id}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-border">
                          {payment.orderId}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium">{payment.customer}</TableCell>
                      <TableCell className="font-medium text-green-600">{payment.amount}</TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4 text-muted-foreground" />
                          {payment.method}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${statusConfig[payment.status as keyof typeof statusConfig].color} text-white`}
                        >
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {statusConfig[payment.status as keyof typeof statusConfig].label}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                        {payment.date}
                      </TableCell>
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
                              Batafsil
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Chek
                            </DropdownMenuItem>
                            {payment.status === "failed" && (
                              <DropdownMenuItem>
                                <AlertTriangle className="mr-2 h-4 w-4" />
                                Qayta urinish
                              </DropdownMenuItem>
                            )}
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
