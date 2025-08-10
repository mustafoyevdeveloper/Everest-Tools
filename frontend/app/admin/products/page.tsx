"use client"

import { useState, useEffect } from "react"
import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const allProducts = [
    {
      id: 1,
      name: "ProDrill X1 Hammer",
      category: "drilling",
      categoryName: "Burg'ulash asboblari",
      model: "PD-X1-2024",
      price: "$299",
      stock: 45,
      status: "active",
      image: "/industrial-drill.png",
      sales: 145,
      rating: 4.8,
      brand: "ProTools",
      // Texnik xususiyatlar
      power: "800W",
      speed: "0-3000 RPM",
      weight: "2.1 kg",
      voltage: "18V",
      warranty: "24 oy",
      manufacturer: "ProTools Inc.",
    },
    {
      id: 2,
      name: "MixMaster Pro 2000",
      category: "mixing",
      categoryName: "Aralashtirish asboblari",
      model: "MMP-2000",
      price: "$459",
      stock: 23,
      status: "active",
      image: "/concrete-mixer.png",
      sales: 89,
      rating: 4.9,
      brand: "MixPro",
      // Texnik xususiyatlar
      power: "1200W",
      speed: "0-2500 RPM",
      weight: "3.8 kg",
      capacity: "120L",
      warranty: "36 oy",
      manufacturer: "MixPro Ltd.",
    },
    {
      id: 3,
      name: "FlexScaffold System",
      category: "scaffolding",
      categoryName: "Iskala tizimlari",
      model: "FSS-2024",
      price: "$1299",
      stock: 0,
      status: "out_of_stock",
      image: "/scaffolding-system.png",
      sales: 67,
      rating: 4.7,
      brand: "FlexBuild",
      // Texnik xususiyatlar
      weight: "25 kg",
      capacity: "500 kg/m²",
      warranty: "60 oy",
      manufacturer: "FlexBuild Corp.",
    },
    {
      id: 4,
      name: "GrindForce Angle Pro",
      category: "grinding",
      categoryName: "Silliqlash asboblari",
      model: "GFAP-125",
      price: "$189",
      stock: 67,
      status: "active",
      image: "/angle-grinder-sparks.png",
      sales: 203,
      rating: 4.6,
      brand: "GrindTech",
      // Texnik xususiyatlar
      power: "900W",
      speed: "11000 RPM",
      weight: "1.8 kg",
      voltage: "220V",
      warranty: "18 oy",
      manufacturer: "GrindTech Industries",
    },
    {
      id: 5,
      name: "PrecisionLevel Digital",
      category: "measuring",
      categoryName: "O'lchash asboblari",
      model: "PLD-600",
      price: "$89",
      stock: 156,
      status: "active",
      image: "/placeholder.svg?height=40&width=40&text=Level",
      sales: 234,
      rating: 4.5,
      brand: "LevelPro",
      // Texnik xususiyatlar
      weight: "0.8 kg",
      voltage: "9V",
      warranty: "12 oy",
      manufacturer: "LevelPro Systems",
    },
  ]

  const filteredProducts = allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const totalProducts = allProducts.length
  const activeProducts = allProducts.filter((p) => p.status === "active").length
  const outOfStockProducts = allProducts.filter((p) => p.status === "out_of_stock").length
  const totalSales = allProducts.reduce((sum, p) => sum + p.sales, 0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Mahsulotlar boshqaruvi</h1>
          <p className="text-muted-foreground">Barcha mahsulotlarni boshqaring va yangilarini qo'shing</p>
        </div>
        <Link href="/admin/products/add">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Plus className="w-4 h-4 mr-2" />
            Yangi mahsulot qo'shish
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Jami mahsulotlar</p>
                <p className="text-2xl font-bold">{totalProducts}</p>
              </div>
              <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Faol mahsulotlar</p>
                <p className="text-2xl font-bold">{activeProducts}</p>
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
                <p className="text-2xl font-bold">{outOfStockProducts}</p>
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
                <p className="text-2xl font-bold">{totalSales}</p>
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
                placeholder="Mahsulotlarni qidirish..."
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
          <CardTitle>Barcha mahsulotlar ro'yxati</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mahsulot</TableHead>
                <TableHead>Kategoriya</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Texnik ma'lumotlar</TableHead>
                <TableHead>Narx</TableHead>
                <TableHead>Ombor</TableHead>
                <TableHead>Sotildi</TableHead>
                <TableHead>Reyting</TableHead>
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
                        <div className="text-sm text-muted-foreground">{product.brand}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{product.categoryName}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.model}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-xs space-y-1">
                      {product.power && <div>Quvvat: {product.power}</div>}
                      {product.speed && <div>Tezlik: {product.speed}</div>}
                      {product.weight && <div>Og'irlik: {product.weight}</div>}
                      {product.capacity && <div>Sig'im: {product.capacity}</div>}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{product.price}</TableCell>
                  <TableCell>
                    <span className={product.stock === 0 ? "text-red-500" : ""}>{product.stock}</span>
                  </TableCell>
                  <TableCell>{product.sales}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">★</span>
                      <span>{product.rating}</span>
                    </div>
                  </TableCell>
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
