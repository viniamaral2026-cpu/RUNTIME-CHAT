import React from 'react'

const Projects = () => {
  const [projects, setProjects] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setProjects([
      { id: '1', name: 'RUNTIME-ADM', description: 'Painel de administração', status: 'ACTIVE' },
      { id: '2', name: 'RUNTIME-CLIENTE', description: 'Painel de cliente', status: 'ACTIVE' },
      { id: '3', name: 'RUNTIME-CODEX', description: 'Workspace de desenvolvimento', status: 'ACTIVE' },
    ])
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="p-8">Carregando projetos...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Meus Projetos</h1>

      {projects.length === 0 && (
        <div className="empty-state">
          <p>Nenhum projeto encontrado.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors">
            Criar primeiro projeto
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div
            key={project.id}
            className="group border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-medium text-primary-900 group-hover:text-primary-700 transition-colors">
              {project.name}
            </h3>
            <p className="text-text-muted mt-2 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-4">
              <button className="px-4 py-2 bg-primary-100 text-primary-800 rounded-md hover:bg-primary-200 transition-colors">
                Entrar no Projeto
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects