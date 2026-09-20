import React, { useState, useEffect } from 'react'
import { apiClient } from '@/api/client'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [redirectAfterLogin, setRedirectAfterLogin] = useState('/chat')

  useEffect(() => {
    // Check if already authenticated via cookie/session
    const token = document.cookie.replace(/(?:(?:^|.*)\s*session-token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    if (token) {
      window.location.href = '/chat'
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const data = await apiClient.auth.login(email, password)
      // Set auth cookie from backend response
      if (data?.session_token) {
        document.cookie = `session-token=${data.session_token}; path=/; max-age=86400`
      }
      setRedirectAfterLogin('/chat')
      window.location.href = '/chat'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'E-mail ou senha inválidos')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background p-8 flex items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-primary-900">Entrar</h2>
        
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary"
          />
          
          <div className="flex items-center justify-between">
            <input
              type={showPassword ? 'password' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm text-primary-600 underline"
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
          
          <div className="text-sm text-muted-foreground">
            <a href="/auth/register">Criar conta</a>
            <span>&nbsp;|&nbsp;</span>
            <a href="/auth/forgot-password">Esqueci minha senha</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login