import React, { useState } from 'react'
import { Menu, ChevronDown, ChevronUp } from 'lucide-react'
import { HeaderDesktop } from './HeaderDesktop'
import { SidebarDesktop, SidebarCollapsed } from './SidebarDesktop'

interface AppLayoutProps {
  children: React.ReactNode
  title: string
  userName: string
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  title,
  userName,
}) => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header - mobile tem toggle, desktop continua visível */}
      <HeaderDesktop
        title={title}
        userName={userName}
        onMenuToggle={() => setIsMenuCollapsed((prev) => !prev)}
        isMenuOpen={isMenuCollapsed}
        currentPage="dashboard"
        onPageChange={() => {}}
        onSearch={() => {}}
        onNotifications={() => {}}
      />

      {/* Sidebar - mobile: drawer via transform, desktop: sidebar fixo */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 bg-background transform translate-x-full duration-300 ease-in-out ${
            isMenuCollapsed ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-full`}
      >
        <SidebarDesktop
          isCollapsed={isMenuCollapsed}
          onToggleCollapse={() => setIsMenuCollapsed((prev) => !prev)}
          currentPage="dashboard"
          onPageSelect={() => {}}
        />
      </aside>

      {/* Main content area */}
      <div className="flex flex-col lg:flex-start overflow-x-hidden">
        {/* Mobile menu toggle - só aparece em telas < lg */}
        <button
          className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 p-2 rounded-md hover:bg-primary-100 transition-colors"
          onClick={() => setIsMenuCollapsed((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {isMenuCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </button>

        {/* Content area - em mobile ocupa 100%, em desktop lado a lado com sidebar */}
        <div className="flex flex-col lg:flex-start w-full">
          {/* Mobile: content full width with reduced padding when sidebar open */}
          {isMenuCollapsed ? (
            <div className="p-4">{children}</div>
          ) : (
            <div className="flex-1 p-6 overflow-x-auto">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}