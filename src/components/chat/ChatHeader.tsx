import React, { useState } from 'react'
import { Search, Menu, LogOut, Plus } from 'lucide-react'

interface ChatHeaderProps {
  conversationTitle: string
  isPinned: boolean
  isArchived: boolean
  onRename: (newTitle: string) => void
  onArchive: () => void
  onTogglePin: () => void
  onImportToCodex: () => void
  onDelete: () => void
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  conversationTitle,
  isPinned,
  isArchived,
  onRename,
  onArchive,
  onTogglePin,
  onImportToCodex,
  onDelete,
}) => {
  const [importModal, setImportModal] = useState(false)

  return (
    <div className="p-4 border-b border-primary-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Menu className="w-5 h-5" />
          <h2 className="text-lg font-medium text-primary-900">
            {conversationTitle}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {isPinned && (
            <svg
              className="w-4 h-4 text-primary-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a4.957 4.957 0 0 1-3.307 1.43L12 20.45 4.707 11.82A4.958 4.958 0 0 1 2 12a4.957 4.957 0 0 1 2.083-4.47l2.38 2.38A4.956 4.956 0 0 1 7.5 12a4.956 4.956 0 0 1 1.665 3.15L12 21.58l7.793-7.793A4.957 4.957 0 0 1 22 11.08Z" />
            </svg>
          )}
          {!isPinned && (
            <svg
              className="w-4 h-4 text-primary-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5M7 14l5-5 5 5M7 14l1 1m0 0l1-1m-1-1v2m2-2v-2m7 1l1 1m0 0l-1-1m1-1v2m2-2v-2m-7-1l-1 1m0 0l1-1m1 1v2m2-2v-2m-7-1l-1 1m0 0l1-1m1 1v2m2-2v-2"/>
            </svg>
          )}
          {isPinned ? null : (
            <svg
              className="w-4 h-4 text-primary-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7 10l5 5 5-5M7 14l5-5 5 5M7 14l1 1m0 0l1-1m-1-1v2m2-2v-2m7 1l1 1m0 0l-1-1m1-1v2m2-2v-2m-7-1l-1 1m0 0l1-1m1 1v2m2-2v-2"/>
            </svg>
          )}
          <button
            onClick={() => setImportModal(true)}
            className="p-1 rounded-md hover:bg-primary-100 transition-colors"
            aria-label="Importar para Codex"
          >
            <Plus className="w-4 h-4 text-primary-600" />
          </button>
          <button
            onClick={onDelete}
            className="p-1 rounded-md hover:bg-red-100 transition-colors"
            aria-label="Excluir conversa"
          >
            <svg
              className="w-4 h-4 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
          {importModal && (
            <button
              type="button"
              onClick={() => setImportModal(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
              aria-label="Fechar"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}