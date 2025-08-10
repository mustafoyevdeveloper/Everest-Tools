"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Reply,
  Archive,
  Trash2,
  MessageSquare,
  Mail,
  MailOpen,
  Clock,
  User,
  Phone,
  Send,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null)

  const messages = [
    {
      id: "MSG-001",
      sender: "John Doe",
      email: "john@example.com",
      phone: "+998 90 123 45 67",
      subject: "ProDrill X1 haqida savol",
      message: "Salom! ProDrill X1 Hammer asbobining kafolat muddati qancha? Va qo'shimcha aksessuarlar mavjudmi?",
      status: "unread",
      priority: "high",
      date: "2024-01-15 14:30",
      category: "product_inquiry",
    },
    {
      id: "MSG-002",
      sender: "Jane Smith",
      email: "jane@example.com",
      phone: "+998 91 234 56 78",
      subject: "Yetkazib berish haqida",
      message: "Buyurtmam qachon yetib keladi? Tracking raqami: ORD-002",
      status: "read",
      priority: "medium",
      date: "2024-01-14 16:45",
      category: "shipping",
    },
    {
      id: "MSG-003",
      sender: "Bob Johnson",
      email: "bob@example.com",
      phone: "+998 93 345 67 89",
      subject: "Mahsulotni qaytarish",
      message: "FlexScaffold System mahsulotini qaytarmoqchiman. Qanday jarayon?",
      status: "replied",
      priority: "high",
      date: "2024-01-13 10:15",
      category: "return",
    },
    {
      id: "MSG-004",
      sender: "Alice Brown",
      email: "alice@example.com",
      phone: "+998 94 456 78 90",
      subject: "Texnik yordam",
      message: "GrindForce Angle Pro ishlamayapti. Qanday tuzatish mumkin?",
      status: "unread",
      priority: "urgent",
      date: "2024-01-12 09:20",
      category: "technical_support",
    },
    {
      id: "MSG-005",
      sender: "Mike Wilson",
      email: "mike@example.com",
      phone: "+998 95 567 89 01",
      subject: "Chegirma haqida",
      message: "Katta hajmdagi buyurtma uchun chegirma bormi?",
      status: "read",
      priority: "low",
      date: "2024-01-11 11:30",
      category: "pricing",
    },
  ]

  const statusConfig = {
    unread: { label: "O'qilmagan", color: "bg-blue-500", icon: Mail },
    read: { label: "O'qilgan", color: "bg-gray-500", icon: MailOpen },
    replied: { label: "Javob berilgan", color: "bg-green-500", icon: Reply },
  }

  const priorityConfig = {
    low: { label: "Past", color: "bg-gray-400" },
    medium: { label: "O'rta", color: "bg-yellow-500" },
    high: { label: "Yuqori", color: "bg-orange-500" },
    urgent: { label: "Shoshilinch", color: "bg-red-500" },
  }

  const categoryConfig = {
    product_inquiry: "Mahsulot haqida",
    shipping: "Yetkazib berish",
    return: "Qaytarish",
    technical_support: "Texnik yordam",
    pricing: "Narx",
  }

  const stats = [
    {
      title: "Jami xabarlar",
      value: "1,247",
      change: "+8%",
      icon: MessageSquare,
      color: "text-blue-500",
    },
    {
      title: "O'qilmagan",
      value: "23",
      change: "+12%",
      icon: Mail,
      color: "text-red-500",
    },
    {
      title: "Bugun kelgan",
      value: "45",
      change: "+5%",
      icon: Clock,
      color: "text-green-500",
    },
    {
      title: "Javob kutayotgan",
      value: "12",
      change: "-3%",
      icon: Reply,
      color: "text-yellow-500",
    },
  ]

  const filteredMessages = messages.filter((message) => {
    const matchesSearch =
      message.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      message.message.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || message.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Xabarlar</h1>
          <p className="text-muted-foreground">Mijozlar xabarlarini boshqaring</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <Send className="w-4 h-4 mr-2" />
          Yangi xabar
        </Button>
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
                      o'tgan haftaga nisbatan
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
                placeholder="Xabarlarni qidirish..."
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
                <SelectItem value="unread">O'qilmagan</SelectItem>
                <SelectItem value="read">O'qilgan</SelectItem>
                <SelectItem value="replied">Javob berilgan</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-background border-border">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Messages Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Xabarlar ro'yxati</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="min-w-[150px]">Yuboruvchi</TableHead>
                  <TableHead className="min-w-[200px]">Mavzu</TableHead>
                  <TableHead className="min-w-[120px] hidden sm:table-cell">Kategoriya</TableHead>
                  <TableHead className="min-w-[100px]">Muhimlik</TableHead>
                  <TableHead className="min-w-[120px]">Holat</TableHead>
                  <TableHead className="min-w-[120px] hidden md:table-cell">Sana</TableHead>
                  <TableHead className="text-right min-w-[80px]">Amallar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMessages.map((message) => {
                  const StatusIcon = statusConfig[message.status as keyof typeof statusConfig].icon
                  return (
                    <TableRow key={message.id} className="border-border">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-yellow-500" />
                          </div>
                          <div>
                            <div className="font-medium">{message.sender}</div>
                            <div className="text-sm text-muted-foreground hidden sm:block">{message.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-[200px]">
                          <div className="font-medium truncate">{message.subject}</div>
                          <div className="text-sm text-muted-foreground truncate hidden sm:block">
                            {message.message}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <Badge variant="outline" className="border-border">
                          {categoryConfig[message.category as keyof typeof categoryConfig]}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${priorityConfig[message.priority as keyof typeof priorityConfig].color} text-white`}
                        >
                          {priorityConfig[message.priority as keyof typeof priorityConfig].label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`${statusConfig[message.status as keyof typeof statusConfig].color} text-white`}
                        >
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {statusConfig[message.status as keyof typeof statusConfig].label}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-sm text-muted-foreground">
                        {message.date}
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
                              O'qish
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Reply className="mr-2 h-4 w-4" />
                              Javob berish
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Phone className="mr-2 h-4 w-4" />
                              Qo'ng'iroq qilish
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Archive className="mr-2 h-4 w-4" />
                              Arxivlash
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="mr-2 h-4 w-4" />
                              O'chirish
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
