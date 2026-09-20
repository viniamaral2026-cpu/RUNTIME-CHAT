import React, { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { HeaderDesktop } from './HeaderDesktop'
import { SidebarDesktop, SidebarCollapsed } from './SidebarDesktop'

interface AppLayoutProps {
  children: React.ReactNode
  title: string
  userName: string
}

interface PageRoute {
  key: string
  href: string
  title: string
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  title,
  userName,
}) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'projects' | 'conversations' | 'files' | 'codex' | 'settings'>(
    'dashboard'
  )

  const pageRoutes: PageRoute[] = [
    { key: 'dashboard', href: '/dashboard', title: 'Dashboard' },
    { key: 'projects', href: '/projects', title: 'Projetos' },
    { key: 'conversations', href: '/conversations', title: 'Conversas' },
    { key: 'files', href: '/files', title: 'Arquivos' },
    { key: 'codex', href: '/codex', title: 'Codex' },
    { key: 'settings', href: '/settings', title: 'Configurações' },
  ]

  const onPageSelect = (page: string) => {
    setCurrentPage(page as 'dashboard' | 'projects' | 'conversations' | 'files' | 'codex' | 'settings')
    console.log('Selecting page:', page)
  }

  const handleSearch = (query: string) => {
    console.log('Searching:', query)
  }

  const handleNotifications = () => {
    console.log('Opening notifications')
  }

  return (
    <div className="min-h-screen">
      {/* Header - Desktop visible, Mobile hidden */}
      <HeaderDesktop
        title={title}
        userName={userName}
        onSearch={handleSearch}
        onNotifications={handleNotifications}
        onMenuToggle={() => setIsMenuCollapsed((prev) => !prev)}
        isMenuOpen={isMenuCollapsed}
        currentPage={currentPage}
        onPageChange={onPageSelect}
      />

      {/* Sidebar - Desktop version based on collapse state */}
      <SidebarDesktop
        isCollapsed={isMenuCollapsed}
        onToggleCollapse={() => setIsMenuCollapsed((prev) => !prev)}
        currentPage={currentPage}
        onPageSelect={onPageSelect}
      />

      {/* Main content area */}
      <div className="flex flex-col lg:flex-start">
        {/* Mobile sidebar toggle button */}
        <button
          className="lg:hidden w-6 h-6 p-2 rounded-md hover:bg-primary-100 transition-colors"
          onClick={() => setIsMenuCollapsed((prev) => !prev)}
          aria-label="Abrir menu lateral"
        >
          {isMenuCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>

        {/* Content area */}
        <div className="flex-1 p-6 overflow-x-auto">
          {children}
        </div>
      </div>
    </div>
  )
}