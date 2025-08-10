"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  UserPlus,
  Users,
  UserCheck,
  UserX,
  Crown,
  Mail,
  Phone,
  Shield,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")

  const users = [
    {
      id: "USR-001",
      name: "John Doe",
      email: "john@example.com",
      phone: "+998 90 123 45 67",
      role: "customer",
      status: "active",
      joinDate: "2024-01-15",
      lastLogin: "2024-01-20 14:30",
      orders: 5,
      totalSpent: "$1,247.00",
      avatar: "/placeholder.svg?height=32&width=32&text=JD",
    },
    {
      id: "USR-002",
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+998 91 234 56 78",
      role: "customer",
      status: "active",
      joinDate: "2024-01-10",
      lastLogin: "2024-01-19 16:45",
      orders: 3,
      totalSpent: "$892.00",
      avatar: "/placeholder.svg?height=32&width=32&text=JS",
    },
    {
      id: "USR-003",
      name: "Bob Johnson",
      email: "bob@example.com",
      phone: "+998 93 345 67 89",
      role: "customer",
      status: "inactive",
      joinDate: "2023-12-20",
      lastLogin: "2024-01-05 10:15",
      orders: 8,
      totalSpent: "$2,156.00",
      avatar: "/placeholder.svg?height=32&width=32&text=BJ",
    },
    {
      id: "USR-004",
      name: "Alice Brown",
      email: "alice@example.com",
      phone: "+998 94 456 78 90",
      role: "admin",
      status: "active",
      joinDate: "2023-11-01",
      lastLogin: "2024-01-20 09:20",
      orders: 0,
      totalSpent: "$0.00",
      avatar: "/placeholder.svg?height=32&width=32&text=AB",
    },
    {
      id: "USR-005",
      name: "Mike Wilson",
      email: "mike@example.com",
      phone: "+998 95 567 89 01",
      role: "customer",
      status: "suspended",
      joinDate: "2023-10-15",
      lastLogin: "2024-01-18 11:30",
      orders: 12,
      totalSpent: "$3,421.00",
      avatar: "/placeholder.svg?height=32&width=32&text=MW",
    },
  ]

  const roleConfig = {
    customer: { label: "Mijoz", color: "bg-blue-500", icon: Users },
    admin: { label: "Admin", color: "bg-purple-500", icon: Crown },
    moderator: { label: "Moderator", color: "bg-green-500", icon: Shield },
  }

  const statusConfig = {
    active: { label: "Faol", color: "bg-green-500", icon: UserCheck },
    inactive: { label: "Nofaol", color: "bg-gray-500", icon: UserX },
    suspended: { label: "To'xtatilgan", color: "bg-red-500", icon: UserX },
  }

  const stats = [
    {
      title: "Jami foydalanuvchilar",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Faol foydalanuvchilar",
      value: "2,156",
      change: "+8%",
      icon: UserCheck,
      color: "text-green-500",
    },
    {
      title: "Yangi ro'yxatdan o'tganlar",
      value: "45",
      change: "+23%",
      icon: UserPlus,
      color: "text-purple-500",
    },
    {
      title: "To'xtatilgan",
      value: "12",
      change: "-15%",
      icon: UserX,
      color: "text-red-500",
    },
  ]

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role === roleFilter
    return matchesSearch && matchesRole
  })

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Foydalanuvchilar</h1>
          <p className="text-muted-foreground">Barcha foydalanuvchilarni boshqaring</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <UserPlus className="w-4 h-4 mr-2" />
          Yangi foydalanuvchi
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
                placeholder="Foydalanuvchilarni qidirish..."
                className="pl-10 bg-background border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full sm:w-48 bg-background border-border">
                <SelectValue placeholder="Rol" />
              </SelectTrigger>
              <SelectContent className="bg-background border-border">
                <SelectItem value="all">Barcha rollar</SelectItem>
                <SelectItem value="customer">Mijoz</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="moderator">Moderator</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-background border-border">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>Foydalanuvchilar ro'yxati</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="min-w-[200px]">Foydalanuvchi</TableHead>
                  <TableHead className="min-w-[150px] hidden sm:table-cell">Aloqa</TableHead>
                  <TableHead className="min-w-[100px]">Rol</TableHead>
                  <TableHead className="min-w-[100px]">Holat</TableHead>
                  <TableHead className="min-w-[120px] hidden md:table-cell">Buyurtmalar</TableHead>
                  <TableHead className="min-w-[120px] hidden lg:table-cell">Jami xarid</TableHead>
                  <TableHead className="text-right min-w-[80px]">Amallar</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((user) => {
                  const RoleIcon = roleConfig[user.role as keyof typeof roleConfig].icon
                  const StatusIcon = statusConfig[user.status as keyof typeof statusConfig].icon
                  return (
                    <TableRow key={user.id} className="border-border">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback className="bg-yellow-500/10 text-yellow-600">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">ID: {user.id}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-3 h-3 text-muted-foreground" />
                            {user.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Phone className="w-3 h-3" />
                            {user.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${roleConfig[user.role as keyof typeof roleConfig].color} text-white`}>
                          <RoleIcon className="w-3 h-3 mr-1" />
                          {roleConfig[user.role as keyof typeof roleConfig].label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${statusConfig[user.status as keyof typeof statusConfig].color} text-white`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {statusConfig[user.status as keyof typeof statusConfig].label}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <div className="text-center">
                          <div className="font-medium">{user.orders}</div>
                          <div className="text-xs text-muted-foreground">buyurtma</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        <div className="font-medium text-green-600">{user.totalSpent}</div>
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
                              Profil
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Tahrirlash
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              Xabar yuborish
                            </DropdownMenuItem>
                            {user.status === "active" ? (
                              <DropdownMenuItem className="text-red-600">
                                <UserX className="mr-2 h-4 w-4" />
                                To'xtatish
                              </DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem className="text-green-600">
                                <UserCheck className="mr-2 h-4 w-4" />
                                Faollashtirish
                              </DropdownMenuItem>
                            )}
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
