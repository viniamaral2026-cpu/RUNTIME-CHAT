import React from 'react'

const Files = () => {
  const [files, setFiles] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setFiles([
      { id: '1', name: 'documento.pdf', type: 'PDF', size: '2.3 MB', status: 'READY' },
      { id: '2', name: 'projeto.js', type: 'CODE', size: '15.6 KB', status: 'READY' },
      { id: '3', name: 'imagem.png', type: 'IMAGE', size: '450 KB', status: 'READY' },
    ])
    setLoading(false)
  }, [])

  if (loading) {
    return <div className="p-8">Carregando arquivos...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-primary-900 mb-6">Arquivos</h1>

      {files.length === 0 && (
        <div className="empty-state">
          <p>Nenhum arquivo encontrado.</p>
          <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors">
            Enviar arquivo
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {files.map(file => (
          <div
            key={file.id}
            className="group border rounded-lg p-6 hover:shadow-md transition-shadow flex items-start"
          >
            <div className="w-12 h-12 rounded-md bg-primary-100 flex items-center justify-center shrink-0 group-hover:bg-primary-200 transition-colors">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-5.658-5.658a3 3 0 014.243 0L19.723 7H7v5h3a3 3 0 013 3v3m2.832-2.832a3 3 0 004.243 0L23 14H5l.911-1.413zM12 19a7 7 0 00-.091-11.999L2 3.918a7 7 0 017.908 7H12z" />
              </svg>
            </div>
            <div className="ml-4 flex-1 min-w-0">
              <h3 className="text-sm font-medium text-primary-900 group-hover:text-primary-700 transition-colors line-clamp-1">
                {file.name}
              </h3>
              <p className="text-xs text-text-muted mt-1">
                {file.type} • {file.size}
              </p>
            </div>
            <div className="ml-4 flex shrink-0">
              <button className="px-3 py-1 bg-primary-100 text-primary-800 rounded-xs text-xs hover:bg-primary-200 transition-colors">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Files