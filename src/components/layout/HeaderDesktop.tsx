import React from 'react'
import { Menu, Search, User } from 'lucide-react'

interface HeaderDesktopProps {
  title: string
  userName: string
  onSearch: (query: string) => void
  onNotifications: () => void
  onMenuToggle: () => void
  isMenuOpen: boolean
  currentPage: string
  onPageChange: (page: string) => void
}

export const HeaderDesktop: React.FC<HeaderDesktopProps> = ({
  title,
  userName,
  onSearch,
  onNotifications,
  onMenuToggle,
  isMenuOpen,
  currentPage,
  onPageChange,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-background border-b border-border z-50 flex items-center px-6 sm:px-8 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Menu className="w-5 h-5 text-primary-600" />
          <h1 className="text-xl font-bold text-text-primary truncate">
            {title}
          </h1>
        </div>

        <button
          onClick={onMenuToggle}
          className="md:hidden p-2 rounded-md hover:bg-primary-100 transition-colors"
          aria-label="Abrir menu"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-3 ml-6">
        {/* User profile */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary-100 text-sm">
          <User className="w-4 h-4 shrink-0" />
          <span className="text-text-secondary truncate">{userName}</span>
        </div>

        {/* Notifications */}
        <button
          onClick={onNotifications}
          className="relative p-2 rounded-md hover:bg-primary-100 transition-colors"
          aria-label="Notificações"
        >
          <svg
            className="w-5 h-5 text-primary-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 23c1.1 0 2-.9 2-2h-2c0 1.1.89 2 2 2m0-16c1.1 0 2-.9 2-2h2c0 1.1-.89 2-2 2H12c-1.1 0-2 .9-2 2m0-7a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11" />
          </svg>
        </button>

        {/* Search */}
        <button
          onClick={() => onSearch('')}
          className="hidden md:block p-2 rounded-md hover:bg-primary-100 transition-colors"
          aria-label="Buscar"
        >
          <Search className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}