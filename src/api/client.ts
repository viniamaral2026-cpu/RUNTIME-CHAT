const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.runtime.sbs'

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
  conversations: {
    list: async () => {
      return responseHandler(await fetch(`${API_BASE}/conversations/`, { method: 'GET' }))
    },
    create: async (title: string) => {
      return responseHandler(await fetch(`${API_BASE}/conversations/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
      }))
    },
    detail: async (id: string) => {
      return responseHandler(await fetch(`${API_BASE}/conversations/${id}`, { method: 'GET' }))
    },
    rename: async (id: string, newTitle: string) => {
      return responseHandler(await fetch(`${API_BASE}/conversations/${id}/rename`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newTitle }),
      }))
    },
    archive: async (id: string) => {
      return responseHandler(await fetch(`${API_BASE}/conversations/${id}/archive`, { method: 'POST' }))
    },
    unarchive: async (id: string) => {
      return responseHandler(await fetch(`${API_BASE}/conversations/${id}/unarchive`, { method: 'POST' }))
    },
    pin: async (id: string) => {
      return responseHandler(await fetch(`${API_BASE}/conversations/${id}/pin`, { method: 'POST' }))
    },
    unpin: async (id: string) => {
      return responseHandler(await fetch(`${API_BASE}/conversations/${id}/unpin`, { method: 'POST' }))
    },
  },
  projects: {
    list: async () => {
      return responseHandler(await fetch(`${API_BASE}/projects/`, { method: 'GET' }))
    },
    create: async (name: string, protocol: string, description: string) => {
      return responseHandler(await fetch(`${API_BASE}/projects/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, protocol, description }),
      }))
    },
    detail: async (protocol: string) => {
      return responseHandler(await fetch(`${API_BASE}/projects/${protocol}`, { method: 'GET' }))
    },
  },
  files: {
    list: async () => {
      return responseHandler(await fetch(`${API_BASE}/files/`, { method: 'GET' }))
    },
    upload: async (file: File) => {
      const formData = new FormData()
      formData.append('file', file)
      return responseHandler(await fetch(`${API_BASE}/files/upload`, {
        method: 'POST',
        body: formData,
      }))
    },
    delete: async (id: string) => {
      return responseHandler(await fetch(`${API_BASE}/files/${id}`, { method: 'DELETE' }))
    },
  },
  codex: {
    list: async () => {
      return responseHandler(await fetch(`${API_BASE}/codex/`, { method: 'GET' }))
    },
    create: async (name: string, projectId: string | null) => {
      return responseHandler(await fetch(`${API_BASE}/codex/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, projectId }),
      }))
    },
    detail: async (id: string) => {
      return responseHandler(await fetch(`${API_BASE}/codex/${id}`, { method: 'GET' }))
    },
  },
}

