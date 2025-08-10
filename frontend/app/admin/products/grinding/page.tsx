"use client"

import { useState } from "react"
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye, Wrench } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export default function GrindingProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const grindingProducts = [
    {
      id: 4,
      name: "GrindForce Angle Pro",
      model: "GFAP-125",
      price: "$189",
      stock: 67,
      status: "active",
      image: "/angle-grinder-sparks.png",
      sales: 203,
      discSize: "125mm",
      power: "900W",
    },
    {
      id: 14,
      name: "PowerGrind Heavy 230",
      model: "PGH-230",
      price: "$299",
      stock: 34,
      status: "active",
      image: "/placeholder.svg?height=40&width=40&text=Grinder",
      sales: 145,
      discSize: "230mm",
      power: "2000W",
    },
    {
      id: 15,
      name: "CompactGrind Mini 115",
      model: "CGM-115",
      price: "$129",
      stock: 89,
      status: "active",
      image: "/placeholder.svg?height=40&width=40&text=Grinder",
      sales: 267,
      discSize: "115mm",
      power: "650W",
    },
    {
      id: 16,
      name: "IndustrialGrind Max 300",
      model: "IGM-300",
      price: "$599",
      stock: 12,
      status: "active",
      image: "/placeholder.svg?height=40&width=40&text=Grinder",
      sales: 78,
      discSize: "300mm",
      power: "3000W",
    },
  ]

  const filteredProducts = grindingProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Wrench className="w-8 h-8 text-yellow-500" />
            Silliqlash asboblari
          </h1>
          <p className="text-muted-foreground">Silliqlash asboblarini boshqaring</p>
        </div>
        <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Yangi silliqlash asbobini qo'shish
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Jami silliqlash asboblari</p>
                <p className="text-2xl font-bold">20</p>
              </div>
              <Wrench className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Faol mahsulotlar</p>
                <p className="text-2xl font-bold">20</p>
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
                <p className="text-2xl font-bold">0</p>
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
                <p className="text-2xl font-bold">693</p>
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
                placeholder="Silliqlash asboblarini qidirish..."
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
          <CardTitle>Silliqlash asboblari ro'yxati</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mahsulot</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Disk o'lchami</TableHead>
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
                  <TableCell>{product.discSize}</TableCell>
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
