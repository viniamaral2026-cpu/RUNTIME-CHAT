import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

export interface User {
  id: string
  email: string
  name: string | null
  avatarUrl: string | null
  role: string
  status: string
}

export interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let token = ''
    if (typeof document !== 'undefined') {
      const cookies = document.cookie.split(';')
      for (const cookie of cookies) {
        if (cookie.trim().startsWith('session-token=')) {
          token = cookie.trim().replace('session-token=', '')
        }
      }
    }
    if (token) {
      setUser({ id: '1', email: 'user@example.com', name: 'Vini Amaral', avatarUrl: null, role: 'USER', status: 'ACTIVE' })
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 500))
    setUser({ id: '1', email, name: 'Vini Amaral', avatarUrl: null, role: 'USER', status: 'ACTIVE' })
    document.cookie = 'session-token=demo-token; path=/; max-age=86400'
    setLoading(false)
  }

  const register = async (name: string, email: string, password: string) => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 500))
    setUser({ id: '1', email, name, avatarUrl: null, role: 'USER', status: 'ACTIVE' })
    setLoading(false)
  }

  const logout = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 500))
    setUser(null)
    document.cookie = 'session=; path=/; max-age=0'
    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}
