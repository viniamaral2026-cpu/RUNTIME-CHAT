import React, { useState, useEffect } from 'react'
import { apiClient } from '@/api/client'

const Conversations = () => {
  const [conversations, setConversations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadConversations() {
      try {
        const data = await apiClient.conversations.list()
        setConversations(data || [])
        setLoading(false)
      } catch (err) {
        console.error('Erro ao carregar conversas:', err)
        setError('Erro ao carregar conversas')
        setLoading(false)
      }
    }
    loadConversations()
  }, [])

  if (loading) {
    return <div className="p-8">Carregando conversas...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Minhas Conversas</h1>

      {error && (
        <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4">
          {error}
        </div>
      )}

      {conversations.length === 0 && (
        <div className="empty-state">
          <p>Nenhuma conversa encontrada.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors">
            Nova Conversa
          </button>
        </div>
      )}

      <div className="space-y-4">
        {conversations.map(conversation => (
          <div key={conversation.id} className="group border rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-medium text-primary-900 group-hover:text-primary-700 transition-colors">
                {conversation.title}
              </h3>
              <span className="text-sm text-text-muted status-badge status-{conversation.status.toLowerCase()}">
                {conversation.status}
              </span>
            </div>
            <p className="text-text-muted mt-1 line-clamp-2">
              {conversation.lastActivity || 'Atividade recente'}
            </p>
            <div>
              <button className="px-3 py-1 bg-primary-100 text-primary-800 rounded-xs text-xs hover:bg-primary-200 transition-colors">
                Abrir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Conversations