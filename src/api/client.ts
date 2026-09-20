const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api'

const responseHandler = async (response: Response) => {
  const data = await response.json()

  if (!response.ok) {
    const error: any = new Error(data.error?.message || 'Erro na requisição')
    error.status = response.status
    error.code = data.error?.code
    error.details = data.error?.details
    throw error
  }

  return data.success ? data.data : data
}

export const apiClient = {
  auth: {
    register: async (name: string, email: string, password: string) => {
      return responseHandler(await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      }))
    },
    login: async (email: string, password: string, remember: boolean = false) => {
      return responseHandler(await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, remember }),
      }))
    },
    logout: async () => {
      return responseHandler(await fetch(`${API_BASE}/auth/logout`, { method: 'POST' }))
    },
    session: async () => {
      return responseHandler(await fetch(`${API_BASE}/auth/session`))
    },
    forgotPassword: async (email: string) => {
      return responseHandler(await fetch(`${API_BASE}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      }))
    },
    resetPassword: async (token: string, newPassword: string) => {
      return responseHandler(await fetch(`${API_BASE}/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword }),
      }))
    },
    changePassword: async (oldPassword: string, newPassword: string) => {
      return responseHandler(await fetch(`${API_BASE}/auth/change-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oldPassword, newPassword }),
      }))
    },
    sessions: async () => {
      return responseHandler(await fetch(`${API_BASE}/auth/sessions`))
    },
    revokeSession: async (sessionId: string) => {
      return responseHandler(await fetch(`${API_BASE}/auth/sessions/${sessionId}`, { method: 'DELETE' }))
    },
    revokeAll: async () => {
      return responseHandler(await fetch(`${API_BASE}/auth/sessions/revoke-all`, { method: 'POST' }))
    },
  },
}