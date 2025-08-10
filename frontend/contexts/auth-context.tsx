"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isAdmin: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock user data
    const mockUser: User = {
      id: "1",
      name: email.includes("admin") ? "Admin User" : "John Doe",
      email: email,
      role: email.includes("admin") ? "admin" : "user",
      avatar: "/placeholder.svg?height=40&width=40&text=User",
    }

    setUser(mockUser)
  }

  const logout = () => {
    setUser(null)
  }

  const isAdmin = user?.role === "admin"
  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, isAuthenticated }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
