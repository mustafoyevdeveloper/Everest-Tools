"use client"

import { useState } from "react"
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function MixingProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const mixingProducts = [
    {
      id: 2,
      name: "MixMaster Pro 2000",
      model: "MMP-2000",
      price: "$459",
      stock: 23,
      status: "active",
      image: "/concrete-mixer.png",
      sales: 89,
      capacity: "120L",
      power: "1500W",
    },
    {
      id: 8,
      name: "PowerMix Concrete 3000",
      model: "PMC-3000",
      price: "$699",
      stock: 15,
      status: "active",
      image: "/placeholder.svg?height=40&width=40&text=Mixer",
      sales: 67,
      capacity: "200L",
      power: "2200W",
    },
    {
      id: 9,
      name: "CompactMix 500",
      model: "CM-500",
      price: "$299",
      stock: 8,
      status: "active",
      image: "/placeholder.svg?height=40&width=40&text=Mixer",
      sales: 134,
      capacity: "50L",
      power: "800W",
    },
    {
      id: 10,
      name: "HeavyMix Industrial",
      model: "HMI-5000",
      price: "$1299",
      stock: 0,
      status: "out_of_stock",
      image: "/placeholder.svg?height=40&width=40&text=Mixer",
      sales: 23,
      capacity: "500L",
      power: "3500W",
    },
  ]

  const filteredProducts = mixingProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-500" />
            Aralashtirish asboblari
          </h1>
          <p className="text-muted-foreground">Aralashtirish asboblarini boshqaring</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Yangi aralashtirish asbobini qo'shish
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Jami aralashtirish asboblari</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Zap className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Faol mahsulotlar</p>
                <p className="text-2xl font-bold">7</p>
              </div>
              <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tugagan mahsulotlar</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Jami sotildi</p>
                <p className="text-2xl font-bold">313</p>
              </div>
              <div className="w-8 h-8 bg-yellow-500/10 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Aralashtirish asboblarini qidirish..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Aralashtirish asboblari ro'yxati</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mahsulot</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Hajm</TableHead>
                <TableHead>Quvvat</TableHead>
                <TableHead>Narx</TableHead>
                <TableHead>Ombor</TableHead>
                <TableHead>Sotildi</TableHead>
                <TableHead>Holat</TableHead>
                <TableHead className="text-right">Amallar</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 relative bg-muted rounded-md overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm text-muted-foreground">ID: {product.id}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.model}</Badge>
                  </TableCell>
                  <TableCell>{product.capacity}</TableCell>
                  <TableCell>{product.power}</TableCell>
                  <TableCell className="font-medium">{product.price}</TableCell>
                  <TableCell>
                    <span className={product.stock === 0 ? "text-red-500" : ""}>{product.stock}</span>
                  </TableCell>
                  <TableCell>{product.sales}</TableCell>
                  <TableCell>
                    <Badge variant={product.status === "active" ? "default" : "destructive"}>
                      {product.status === "active" ? "Faol" : "Tugagan"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Ko'rish
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Tahrirlash
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          O'chirish
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
