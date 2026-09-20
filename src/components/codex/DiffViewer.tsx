import React from 'react'
import { RefreshCw, Loader2, Check, X } from 'lucide-react'

interface CodeChange {
  id: string
  filePath: string
  operation: 'CREATE' | 'UPDATE' | 'DELETE' | 'RENAME'
  oldContent: string
  newContent: string
  status: 'PROPOSED' | 'APPROVED' | 'REJECTED' | 'APPLIED' | 'FAILED'
  createdAt: Date
}

interface DiffViewerProps {
  change: CodeChange | null
  onApprove: (changeId: string) => void
  onReject: (changeId: string) => void
  onApply: (changeId: string) => void
}

export const DiffViewer: React.FC<DiffViewerProps> = ({
  change,
  onApprove,
  onReject,
  onApply,
}) => {
  const [loading, setLoading] = React.useState(false)
  const [showDiff, setShowDiff] = React.useState(false)

  if (!change) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">Nenhuma alteração para visualizar</p>
      </div>
    )
  }

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-2xl font-bold text-primary-900 mb-6">
        Diff - {change.filePath}
      </h1>

      <div className="mb-4">
        <p className="text-sm text-gray-500">
          Operação: {change.operation}
          {' '}
          <span
            className={`px-2 py-0.5 text-xs rounded ${change.status}`
          }>
            {change.status}
          </span>
        </p>
        <p className="text-xs text-gray-400">
          Criado em {change.createdAt.toLocaleDateString()}
        </p>
      </div>

      {showDiff ? (
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-primary-900 mb-3">Antes</h2>
          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            {change.oldContent}
          </pre>

          <h2 className="text-lg font-medium text-primary-900 mb-3">Depois</h2>
          <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
            {change.newContent}
          </pre>
        </div>
      ) : (
        <div>
          <p className="text-gray-400">Clique em "Mostrar Diff" para visualizar as alterações</p>
        </div>
      )}

      <div className="mt-6 flex gap-2">
        <button
          onClick={() => setShowDiff(true)}
          className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          Mostrar Diff
        </button>
        {change.status === 'PROPOSED' && (
          <>
            <button
              onClick={() => onApprove(change.id)}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              disabled={loading}
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2" /> : 'Aprovar'}
            </button>
            <button
              onClick={() => onReject(change.id)}
              className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              disabled={loading}
            >
              {loading ? <Loader2 className="w-4 h-4 mr-2" /> : 'Rejeitar'}
            </button>
          </>
        )}
        {change.status === 'APPROVED' && (
          <button
            onClick={() => onApply(change.id)}
            className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
            disabled={loading}
          >
            {loading ? <Loader2 className="w-4 h-4 mr-2" /> : 'Aplicar'}
          </button>
        )}
        <button
          onClick={() => setShowDiff(false)}
          className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          Fechar
        </button>
      </div>
    </div>
  )
}
