"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "admin" | "user"
  avatar?: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isAdmin: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    try {
      const storedToken = typeof window !== "undefined" ? localStorage.getItem("auth_token") : null
      const storedUser = typeof window !== "undefined" ? localStorage.getItem("auth_user") : null
      if (storedToken) setToken(storedToken)
      if (storedUser) setUser(JSON.parse(storedUser))
    } catch {
      // ignore
    }
  }, [])

  const persistAuth = (nextToken: string, apiUser: { id: string; name: string; email: string; isAdmin?: boolean }) => {
    const mappedUser: User = {
      id: apiUser.id,
      name: apiUser.name,
      email: apiUser.email,
      role: apiUser.isAdmin ? "admin" : "user",
    }
    setUser(mappedUser)
    setToken(nextToken)
    try {
      localStorage.setItem("auth_token", nextToken)
      localStorage.setItem("auth_user", JSON.stringify(mappedUser))
    } catch {
      // ignore
    }
  }

  const login = async (email: string, password: string) => {
    const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data?.message || "Kirishda xatolik")
    }
    persistAuth(data.token, data.user)
  }

  const signup = async (name: string, email: string, password: string) => {
    const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    })
    const data = await res.json()
    if (!res.ok) {
      throw new Error(data?.message || "Ro‘yxatdan o‘tishda xatolik")
    }
    // Signup muvaffaqiyatli bo‘lsa ham foydalanuvchini avtomatik kiritishimiz mumkin
    persistAuth(data.token, data.user)
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    try {
      localStorage.removeItem("auth_token")
      localStorage.removeItem("auth_user")
    } catch {
      // ignore
    }
  }

  const isAdmin = user?.role === "admin"
  const isAuthenticated = !!user && !!token

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, isAdmin, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
