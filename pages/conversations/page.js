import React from 'react'

const Conversations = () => {
  const [conversations, setConversations] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setConversations([
      { id: '1', title: 'API Design', lastActivity: 'Hoje', status: 'ACTIVE' },
      { id: '2', title: 'Projeto RUNTIME', lastActivity: 'Ontem', status: 'ACTIVE' },
      { id: '3', title: 'Chat com IA', lastActivity: '02/09', status: 'ACTIVE' },
    ])
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="p-8">Carregando conversas...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Minhas Conversas</h1>

      {conversations.length === 0 && (
        <div className="empty-state">
          <p>Nenhuma conversa encontrada.</p>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-200 transition-colors">
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
              <span className="text-sm text-muted-foreground status-badge status-{conversation.status.toLowerCase()}">
                {conversation.status}
              </span>
            </div>
            <p className="text-muted-foreground mt-1 line-clamp-2">
              {conversation.lastActivity}
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