import React, { useState } from 'react'
import { Folder, Search, Check, X } from 'lucide-react'

interface ImportChatToCodexProps {
  conversationId: string
  conversationTitle: string
  onClose: () => void
  onImport: (workspaceId: string, projectId: string | null) => void
}

export const ImportChatToCodex: React.FC<ImportChatToCodexProps> = ({
  conversationId,
  conversationTitle,
  onClose,
  onImport,
}) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | undefined>(undefined)
  const [selectedWorkspace, setSelectedWorkspace] = useState<string | undefined>(undefined)
  const [projects] = useState([
    { id: '1', name: 'RUNTIME-ADM', description: 'Painel de administração' },
    { id: '2', name: 'RUNTIME-CLIENTE', description: 'Painel de cliente' },
  ])
  const [workspaces] = useState([
    { id: '1', name: 'RUNTIME-ADM Codex', description: 'Workspace do painel admin' },
    { id: '2', name: 'RUNTIME-CLIENTE Codex', description: 'Workspace do painel cliente' },
  ])

  const handleImport = () => {
    if (!selectedProject || !selectedWorkspace) return
    onImport(selectedWorkspace, selectedProject)
    setShowModal(false)
  }

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur sm:inset-0 sm:fixed z-50">
          <div className="relative w-full max-w-md mx-auto mt-20 overflow-y-auto sm:mt-0 rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5">
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
              onClick={onClose}
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-semibold text-primary-900 text-center mb-4">
              Importar Conversa para Codex
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Projeto
                </label>
                <select
                  value={selectedProject}
                  onChange={(e) => setSelectedProject(e.target.value as string | undefined)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500"
                >
                  <option value="">Selecione um projeto</option>
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Workspace Codex
                </label>
                <select
                  value={selectedWorkspace}
                  onChange={(e) => setSelectedWorkspace(e.target.value as string | undefined)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500"
                >
                  <option value="">Selecione um workspace</option>
                  {workspaces.map((workspace) => (
                    <option key={workspace.id} value={workspace.id}>
                      {workspace.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  A conversa "{conversationTitle}" será importada com suas mensagens,
                  arquivos e contexto para o workspace selecionado.
                </p>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 rounded-md"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={handleImport}
                  className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
                >
                  Importar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="fixed inset-0 bg-gray-500/50 hidden z-40"
        onClick={() => setShowModal(false)}
      />
      <button
        className="relative z-10 inline-flex items-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
        onClick={() => setShowModal(true)}
        aria-label="Importar conversa para Codex"
      >
        <Folder className="mr-2 w-4 h-4" />
        Importar para Codex
      </button>
    </div>
  )
}