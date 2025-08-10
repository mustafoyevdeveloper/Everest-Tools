"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ArrowLeft, Upload, X, Plus, Save, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"

export default function AddProductPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    // MAJBURIY MAYDONLAR
    name: "",
    description: "",
    price: "",
    rating: "",
    category: "",
    images: [] as string[],

    // IXTIYORIY MAYDONLAR
    shortDescription: "",
    brand: "",
    model: "",
    originalPrice: "",
    color: "",
    material: "",
    dimensions: "",
    weight: "",
    sku: "",
    barcode: "",
    stock: "",

    // Texnik xususiyatlar (ixtiyoriy)
    power: "",
    speed: "",
    capacity: "",
    workTime: "",
    voltage: "",
    warranty: "",
    manufacturer: "",

    // SEO va boshqalar
    seoTitle: "",
    seoDescription: "",
    tags: [] as string[],
    status: "active",
    featured: false,
    inStock: true,
  })

  const [currentTag, setCurrentTag] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const categories = [
    { id: "drilling", name: "Burg'ulash asboblari" },
    { id: "mixing", name: "Aralashtirish asboblari" },
    { id: "scaffolding", name: "Iskala tizimlari" },
    { id: "grinding", name: "Silliqlash asboblari" },
    { id: "measuring", name: "O'lchash asboblari" },
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // MAJBURIY MAYDONLAR TEKSHIRUVI
    if (!formData.name.trim()) {
      newErrors.name = "Mahsulot nomi majburiy!"
    }
    if (!formData.description.trim()) {
      newErrors.description = "Mahsulot tavsifi majburiy!"
    }
    if (!formData.price || Number.parseFloat(formData.price) <= 0) {
      newErrors.price = "To'g'ri narx kiriting!"
    }
    if (!formData.rating || Number.parseFloat(formData.rating) < 1 || Number.parseFloat(formData.rating) > 5) {
      newErrors.rating = "Reyting 1-5 orasida bo'lishi kerak!"
    }
    if (!formData.category) {
      newErrors.category = "Kategoriya tanlash majburiy!"
    }
    if (formData.images.length === 0) {
      newErrors.images = "Kamida 1 ta rasm yuklash majburiy!"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Mahsulot ma'lumotlari:", formData)
      alert("Mahsulot muvaffaqiyatli qo'shildi!")
      // Bu yerda API ga ma'lumot yuborish kerak
    } else {
      alert("Iltimos, majburiy maydonlarni to'ldiring!")
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...newImages],
      }))
    }
  }

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }))
  }

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()],
      }))
      setCurrentTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/products">
            <Button variant="outline" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Yangi mahsulot qo'shish</h1>
            <p className="text-muted-foreground">Barcha kerakli ma'lumotlarni kiriting</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            Ko'rib chiqish
          </Button>
          <Button onClick={handleSubmit} className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Save className="w-4 h-4 mr-2" />
            Saqlash
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ASOSIY MA'LUMOTLAR */}
        <div className="lg:col-span-2 space-y-6">
          {/* MAJBURIY ASOSIY MA'LUMOTLAR */}
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-red-700">Asosiy ma'lumotlar (Majburiy)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-red-700">
                  Mahsulot nomi *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Masalan: ProDrill X1 Hammer"
                  className={`border-red-300 ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <Label htmlFor="description" className="text-red-700">
                  Batafsil tavsif *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Mahsulot haqida batafsil ma'lumot..."
                  rows={4}
                  className={`border-red-300 ${errors.description ? "border-red-500" : ""}`}
                />
                {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price" className="text-red-700">
                    Narx (USD) *
                  </Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                    placeholder="299"
                    className={`border-red-300 ${errors.price ? "border-red-500" : ""}`}
                  />
                  {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                </div>

                <div>
                  <Label htmlFor="rating" className="text-red-700">
                    Reyting (1-5) *
                  </Label>
                  <Input
                    id="rating"
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    value={formData.rating}
                    onChange={(e) => setFormData((prev) => ({ ...prev, rating: e.target.value }))}
                    placeholder="4.8"
                    className={`border-red-300 ${errors.rating ? "border-red-500" : ""}`}
                  />
                  {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="category" className="text-red-700">
                  Kategoriya *
                </Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                >
                  <SelectTrigger className={`border-red-300 ${errors.category ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Kategoriya tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>
            </CardContent>
          </Card>

          {/* IXTIYORIY QOSHIMCHA MA'LUMOTLAR */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-blue-700">Qo'shimcha ma'lumotlar (Ixtiyoriy)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="shortDescription" className="text-blue-700">
                  Qisqa tavsif
                </Label>
                <Input
                  id="shortDescription"
                  value={formData.shortDescription}
                  onChange={(e) => setFormData((prev) => ({ ...prev, shortDescription: e.target.value }))}
                  placeholder="Professional hammer drill with LED light"
                  className="border-blue-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="brand" className="text-blue-700">
                    Brend
                  </Label>
                  <Input
                    id="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData((prev) => ({ ...prev, brand: e.target.value }))}
                    placeholder="ProTools"
                    className="border-blue-300"
                  />
                </div>

                <div>
                  <Label htmlFor="model" className="text-blue-700">
                    Model
                  </Label>
                  <Input
                    id="model"
                    value={formData.model}
                    onChange={(e) => setFormData((prev) => ({ ...prev, model: e.target.value }))}
                    placeholder="PD-X1-2024"
                    className="border-blue-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="color" className="text-blue-700">
                    Rang
                  </Label>
                  <Input
                    id="color"
                    value={formData.color}
                    onChange={(e) => setFormData((prev) => ({ ...prev, color: e.target.value }))}
                    placeholder="Qora"
                    className="border-blue-300"
                  />
                </div>

                <div>
                  <Label htmlFor="material" className="text-blue-700">
                    Material
                  </Label>
                  <Input
                    id="material"
                    value={formData.material}
                    onChange={(e) => setFormData((prev) => ({ ...prev, material: e.target.value }))}
                    placeholder="Metall"
                    className="border-blue-300"
                  />
                </div>

                <div>
                  <Label htmlFor="weight" className="text-blue-700">
                    Og'irlik (kg)
                  </Label>
                  <Input
                    id="weight"
                    value={formData.weight}
                    onChange={(e) => setFormData((prev) => ({ ...prev, weight: e.target.value }))}
                    placeholder="2.1"
                    className="border-blue-300"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TEXNIK XUSUSIYATLAR (IXTIYORIY) */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-blue-700">Texnik xususiyatlar (Ixtiyoriy)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="power" className="text-blue-700">
                    Quvvat (W)
                  </Label>
                  <Input
                    id="power"
                    value={formData.power}
                    onChange={(e) => setFormData((prev) => ({ ...prev, power: e.target.value }))}
                    placeholder="800"
                    className="border-blue-300"
                  />
                </div>

                <div>
                  <Label htmlFor="speed" className="text-blue-700">
                    Tezlik (rpm)
                  </Label>
                  <Input
                    id="speed"
                    value={formData.speed}
                    onChange={(e) => setFormData((prev) => ({ ...prev, speed: e.target.value }))}
                    placeholder="0-3000"
                    className="border-blue-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="capacity" className="text-blue-700">
                    Sig'im (L)
                  </Label>
                  <Input
                    id="capacity"
                    value={formData.capacity}
                    onChange={(e) => setFormData((prev) => ({ ...prev, capacity: e.target.value }))}
                    placeholder="120"
                    className="border-blue-300"
                  />
                </div>

                <div>
                  <Label htmlFor="workTime" className="text-blue-700">
                    Ish vaqti (soat)
                  </Label>
                  <Input
                    id="workTime"
                    value={formData.workTime}
                    onChange={(e) => setFormData((prev) => ({ ...prev, workTime: e.target.value }))}
                    placeholder="4-6"
                    className="border-blue-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="voltage" className="text-blue-700">
                    Kuchlanish (V)
                  </Label>
                  <Input
                    id="voltage"
                    value={formData.voltage}
                    onChange={(e) => setFormData((prev) => ({ ...prev, voltage: e.target.value }))}
                    placeholder="18"
                    className="border-blue-300"
                  />
                </div>

                <div>
                  <Label htmlFor="warranty" className="text-blue-700">
                    Kafolat (oy)
                  </Label>
                  <Input
                    id="warranty"
                    value={formData.warranty}
                    onChange={(e) => setFormData((prev) => ({ ...prev, warranty: e.target.value }))}
                    placeholder="24"
                    className="border-blue-300"
                  />
                </div>

                <div>
                  <Label htmlFor="manufacturer" className="text-blue-700">
                    Ishlab chiqaruvchi
                  </Label>
                  <Input
                    id="manufacturer"
                    value={formData.manufacturer}
                    onChange={(e) => setFormData((prev) => ({ ...prev, manufacturer: e.target.value }))}
                    placeholder="ProTools Inc."
                    className="border-blue-300"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* YON PANEL */}
        <div className="space-y-6">
          {/* MAJBURIY RASMLAR */}
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-red-700">Mahsulot rasmlari (Majburiy) *</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className={`border-2 border-dashed border-red-300 rounded-lg p-6 text-center ${errors.images ? "border-red-500 bg-red-100" : ""}`}
              >
                <Upload className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <p className="text-sm text-red-600 mb-2">Rasmlarni yuklang</p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <Label htmlFor="image-upload" className="cursor-pointer">
                  <Button type="button" variant="outline" className="border-red-300 text-red-700 bg-transparent">
                    Rasm tanlash
                  </Button>
                </Label>
              </div>
              {errors.images && <p className="text-red-500 text-sm">{errors.images}</p>}

              {formData.images.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Product ${index + 1}`}
                        width={100}
                        height={100}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-1 right-1 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeImage(index)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* IXTIYORIY SOZLAMALAR */}
          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-blue-700">Sozlamalar (Ixtiyoriy)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="originalPrice" className="text-blue-700">
                  Eski narx (USD)
                </Label>
                <Input
                  id="originalPrice"
                  type="number"
                  value={formData.originalPrice}
                  onChange={(e) => setFormData((prev) => ({ ...prev, originalPrice: e.target.value }))}
                  placeholder="399"
                  className="border-blue-300"
                />
              </div>

              <div>
                <Label htmlFor="stock" className="text-blue-700">
                  Ombor miqdori
                </Label>
                <Input
                  id="stock"
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData((prev) => ({ ...prev, stock: e.target.value }))}
                  placeholder="45"
                  className="border-blue-300"
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="inStock" className="text-blue-700">
                  Omborda mavjud
                </Label>
                <Switch
                  id="inStock"
                  checked={formData.inStock}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, inStock: checked }))}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="featured" className="text-blue-700">
                  Tavsiya etilgan
                </Label>
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, featured: checked }))}
                />
              </div>

              <Separator />

              <div>
                <Label className="text-blue-700">Teglar</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    placeholder="Teg qo'shish"
                    className="border-blue-300"
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                  />
                  <Button type="button" onClick={addTag} variant="outline" className="border-blue-300 bg-transparent">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700">
                      {tag}
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="ml-1 h-auto p-0 text-blue-700"
                        onClick={() => removeTag(tag)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>
    </div>
  )
}
