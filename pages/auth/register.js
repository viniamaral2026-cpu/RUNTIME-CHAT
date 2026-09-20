import React, { useState, useEffect } from 'react'
import { apiClient } from '@/api/client'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [redirectAfterRegister, setRedirectAfterRegister] = useState('/chat')

  useEffect(() => {
    // Check if already authenticated
    const token = typeof document !== 'undefined' ? document.cookie.replace(/(?:(?:^|^|\s)session-token\s*=\s*([^;]*).*$)|^.*$/, '$1') : ''
    if (token) {
      window.location.href = '/chat'
    }
  }, [])

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    if (password !== confirmPassword) {
      setError('As senhas não coincidem')
      setLoading(false)
      return
    }
    
    if (!name || !email || !password) {
      setError('Preencha todos os campos')
      setLoading(false)
      return
    }
    
    try {
      const data = await apiClient.auth.register(name, email, password)
      // Set auth cookie from backend response
      if (data?.session_token) {
        document.cookie = `session-token=${data.session_token}; path=/; max-age=86400`
      }
      setRedirectAfterRegister('/auth/login')
      setLoading(false)
      window.location.href = '/auth/login'
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar conta')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-primary-900">Cadastro</h2>
        
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            placeholder="Nome completo"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary"
          />
          
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary"
          />
          
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary"
          />
          
          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary"
          />
          
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {loading ? 'Criando conta...' : 'Criar conta'}
          </button>
          
          <div className="text-sm text-muted-foreground">
            <a href="/auth/login">Já tem uma conta? Entrar</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register