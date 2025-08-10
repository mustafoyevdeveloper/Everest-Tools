"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, Truck, Shield, ChevronLeft, Check, MapPin, Lock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"
import Link from "next/link"

export default function CheckoutPage() {
  const { t } = useLanguage()
  const [currentStep, setCurrentStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [shippingMethod, setShippingMethod] = useState("standard")
  const [isProcessing, setIsProcessing] = useState(false)

  const cartItems = [
    {
      id: 1,
      name: "ProDrill X1 Hammer",
      price: 299,
      quantity: 1,
      image: "/industrial-drill.png",
    },
    {
      id: 2,
      name: "MixMaster Pro 2000",
      price: 459,
      quantity: 2,
      image: "/concrete-mixer.png",
    },
    {
      id: 4,
      name: "GrindForce Angle Pro",
      price: 189,
      quantity: 1,
      image: "/angle-grinder-sparks.png",
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCost = shippingMethod === "express" ? 50 : shippingMethod === "standard" ? 25 : 0
  const tax = subtotal * 0.12
  const total = subtotal + shippingCost + tax

  const steps = [
    { id: 1, title: "Yetkazib berish", icon: Truck },
    { id: 2, title: "To'lov", icon: CreditCard },
    { id: 3, title: "Tasdiqlash", icon: Check },
  ]

  const handleProcessPayment = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsProcessing(false)
    // Redirect to success page or show success message
    alert("To'lov muvaffaqiyatli amalga oshirildi!")
  }

  const renderShippingStep = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Yetkazib berish manzili
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Ism</Label>
              <Input id="firstName" placeholder="Ismingizni kiriting" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Familiya</Label>
              <Input id="lastName" placeholder="Familiyangizni kiriting" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefon raqam</Label>
            <Input id="phone" placeholder="+998 90 123 45 67" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Manzil</Label>
            <Input id="address" placeholder="Ko'cha, uy raqami" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Shahar</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Shaharni tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tashkent">Toshkent</SelectItem>
                  <SelectItem value="samarkand">Samarqand</SelectItem>
                  <SelectItem value="bukhara">Buxoro</SelectItem>
                  <SelectItem value="andijan">Andijon</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="region">Viloyat</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Viloyatni tanlang" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tashkent">Toshkent viloyati</SelectItem>
                  <SelectItem value="samarkand">Samarqand viloyati</SelectItem>
                  <SelectItem value="bukhara">Buxoro viloyati</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">Pochta indeksi</Label>
              <Input id="zip" placeholder="100000" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="w-5 h-5" />
            Yetkazib berish usuli
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="pickup" id="pickup" />
              <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">O'zim olib ketaman</div>
                    <div className="text-sm text-muted-foreground">Do'kondan o'zingiz olib keting</div>
                  </div>
                  <div className="font-semibold text-green-600">Bepul</div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="standard" id="standard" />
              <Label htmlFor="standard" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Oddiy yetkazish</div>
                    <div className="text-sm text-muted-foreground">3-5 ish kuni</div>
                  </div>
                  <div className="font-semibold">$25</div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="express" id="express" />
              <Label htmlFor="express" className="flex-1 cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium">Tezkor yetkazish</div>
                    <div className="text-sm text-muted-foreground">1-2 ish kuni</div>
                  </div>
                  <div className="font-semibold">$50</div>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  )

  const renderPaymentStep = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            To'lov usuli
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5" />
                  <div>
                    <div className="font-medium">Bank kartasi</div>
                    <div className="text-sm text-muted-foreground">Visa, Mastercard, UzCard</div>
                  </div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="click" id="click" />
              <Label htmlFor="click" className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded"></div>
                  <div>
                    <div className="font-medium">Click</div>
                    <div className="text-sm text-muted-foreground">Click orqali to'lov</div>
                  </div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="payme" id="payme" />
              <Label htmlFor="payme" className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded"></div>
                  <div>
                    <div className="font-medium">Payme</div>
                    <div className="text-sm text-muted-foreground">Payme orqali to'lov</div>
                  </div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 p-4 border rounded-lg">
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash" className="flex-1 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-yellow-500 rounded"></div>
                  <div>
                    <div className="font-medium">Naqd pul</div>
                    <div className="text-sm text-muted-foreground">Yetkazib berganda to'lov</div>
                  </div>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {paymentMethod === "card" && (
        <Card>
          <CardHeader>
            <CardTitle>Karta ma'lumotlari</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Karta raqami</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Amal qilish muddati</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardName">Karta egasining ismi</Label>
              <Input id="cardName" placeholder="JOHN DOE" />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )

  const renderConfirmationStep = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Check className="w-5 h-5" />
            Buyurtmani tasdiqlash
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Yetkazib berish manzili</h4>
            <p className="text-sm text-muted-foreground">
              John Doe
              <br />
              john@example.com
              <br />
              +998 90 123 45 67
              <br />
              Toshkent, Mirzo Ulugbek tumani, Buyuk Ipak Yo'li 100
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Yetkazib berish usuli</h4>
            <p className="text-sm text-muted-foreground">
              {shippingMethod === "pickup" && "O'zim olib ketaman - Bepul"}
              {shippingMethod === "standard" && "Oddiy yetkazish - $25 (3-5 ish kuni)"}
              {shippingMethod === "express" && "Tezkor yetkazish - $50 (1-2 ish kuni)"}
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">To'lov usuli</h4>
            <p className="text-sm text-muted-foreground">
              {paymentMethod === "card" && "Bank kartasi"}
              {paymentMethod === "click" && "Click"}
              {paymentMethod === "payme" && "Payme"}
              {paymentMethod === "cash" && "Naqd pul (yetkazib berganda)"}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm">
              Men{" "}
              <Link href="/terms" className="text-yellow-400 hover:underline">
                foydalanish shartlari
              </Link>{" "}
              va{" "}
              <Link href="/privacy" className="text-yellow-400 hover:underline">
                maxfiylik siyosati
              </Link>{" "}
              bilan tanishdim va roziman
            </Label>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <Link href="/cart" className="inline-flex items-center text-yellow-400 hover:text-yellow-500">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Savatchaga qaytish
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">Buyurtma berish</h1>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-8">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.id
                        ? "bg-yellow-500 border-yellow-500 text-black"
                        : "border-muted-foreground text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.id ? <Check className="w-5 h-5" /> : <step.icon className="w-5 h-5" />}
                  </div>
                  <span
                    className={`ml-2 text-sm font-medium ${
                      currentStep >= step.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-4 ${currentStep > step.id ? "bg-yellow-500" : "bg-muted-foreground"}`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentStep === 1 && renderShippingStep()}
                {currentStep === 2 && renderPaymentStep()}
                {currentStep === 3 && renderConfirmationStep()}
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="bg-transparent"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Orqaga
                </Button>

                {currentStep < 3 ? (
                  <Button
                    onClick={() => setCurrentStep(Math.min(3, currentStep + 1))}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  >
                    Davom etish
                    <ChevronLeft className="w-4 h-4 ml-2 rotate-180" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleProcessPayment}
                    disabled={isProcessing}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black"
                  >
                    {isProcessing ? "Qayta ishlanmoqda..." : "Buyurtma berish"}
                    <Lock className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-32">
                <CardHeader>
                  <CardTitle>Buyurtma ma'lumotlari</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <div className="w-16 h-16 relative bg-muted rounded-md overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">Miqdor: {item.quantity}</p>
                        </div>
                        <div className="text-sm font-semibold">${item.price * item.quantity}</div>
                      </div>
                    ))}

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Jami mahsulotlar</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Yetkazib berish</span>
                        <span>${shippingCost.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Soliq</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Jami summa</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Shield className="w-4 h-4" />
                        <span>Xavfsiz to'lov SSL shifrlash bilan himoyalangan</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
