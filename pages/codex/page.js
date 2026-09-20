import React from 'react'

const Codex = () => {
  const [workspaces, setWorkspaces] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setWorkspaces([
      { id: '1', name: 'RUNTIME-ADM', status: 'ACTIVE', projectId: '1' },
      { id: '2', name: 'Novo Projeto', status: 'PAUSED', projectId: null },
    ])
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="p-8">Carregando workspaces...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Codex Workspaces</h1>

      {workspaces.length === 0 && (
        <div className="empty-state">
          <p>Nenhum workspace encontrado.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors">
            Criar Workspace
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workspaces.map(workspace => (
          <div
            key={workspace.id}
            className="group border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-medium text-primary-900 group-hover:text-primary-700 transition-colors">
              {workspace.name}
            </h3>
            <p className="text-text-muted mt-1">
              Status: <span className={workspace.status === 'ACTIVE' ? 'text-success' : 'text-warning'}>
                {workspace.status}
              </span>
            </p>
            <div className="mt-4">
              <button className="px-3 py-1 bg-primary-100 text-primary-800 rounded-xs text-xs">
                Abrir Workspace
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Codex