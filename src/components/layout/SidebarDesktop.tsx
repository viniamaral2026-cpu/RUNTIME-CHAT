import React from 'react'
import { Home, Server, Code2, Folder, Users, Settings, LogOut, ChevronDown, ChevronUp } from 'lucide-react'

interface SidebarNavItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  active: boolean
  disabled?: boolean
  submenu?: SidebarNavItem[]
}

// Type narrowing helper
type NavItem = SidebarNavItem & { submenu?: SidebarNavItem[] }

const sidebarItems: NavItem[] = [
  { label: 'Novo Chat', href: '/conversations/new', icon: Home, active: false },
  { label: 'Chat', href: '/conversations', icon: Server, active: false },
  { label: 'Codex', href: '/codex', icon: Code2, active: false },
  {
    label: 'Projetos',
    href: '/projects',
    icon: Users,
    active: false,
    submenu: [
      { label: 'Todos', href: '/projects', active: false },
      { label: 'Recentes', href: '/projects/recent', active: false },
      { label: 'Favoritos', href: '/projects/favorites', active: false },
    ],
  },
  { label: 'Arquivos', href: '/files', active: false },
  { label: 'Configurações', href: '/settings', active: false },
]

const collapsedItems = [
  { label: 'Novo Chat', href: '/conversations/new', icon: Home, active: false, tooltip: 'Novo Chat' },
  { label: 'Chat', href: '/conversations', icon: Server, active: false, tooltip: 'Chat' },
  { label: 'Codex', href: '/codex', icon: Code2, active: false, tooltip: 'Codex' },
  { label: 'Projetos', href: '/projects', icon: Users, active: false, tooltip: 'Projetos' },
  { label: 'Arquivos', href: '/files', icon: Folder, active: false, tooltip: 'Arquivos' },
  { label: 'Configurações', href: '/settings', icon: Settings, active: false, tooltip: 'Configurações' },
]

export const SidebarDesktop: React.FC<{
  isCollapsed: boolean
  onToggleCollapse: () => void
  currentPage: string
  onPageSelect: (page: string) => void
}> = ({
  isCollapsed,
  onToggleCollapse,
  currentPage,
  onPageSelect,
}) => {
  return (
    <aside
      className={`
        w-64 h-full bg-background border-r border-border z-50 fixed left-0 top-0 bottom-0 pt-6 
        transition-transform transform-gpu duration-300 ease-in-out ${
          isCollapsed ? 'md:block md:transform-none' : '-translate-x-full'
        }`}
    >
      <div className="space-y-2 px-2">
        {sidebarItems.map((item) => {
          // Use type assertion to handle optional icon and submenu
          const navItem = item as SidebarNavItem
          if (navItem.submenu && navItem.submenu.length > 0) {
            return renderSubmenu(navItem, currentPage, onPageSelect)
          }
          return renderSidebarItem(navItem, currentPage, onPageSelect)
        })}
      </div>
    </aside>
  )
}

const renderSubmenu = (
  item: SidebarNavItem,
  currentPage: string,
  onPageSelect: (page: string) => void
) => {
  const isActive = item.submenu?.some(
    (sub) => sub.href === `#${currentPage}` || item.href === currentPage
  )
  return (
    <div key={item.label} className="group">
      <button
        onClick={() => console.log('toggle submenu:', item.label)}
        className="w-full flex items-center gap-3 rounded-md hover:bg-primary-100 transition-colors px-3 py-2 text-left text-sm ${
          isActive ? 'bg-primary-100 text-primary-800' : 'text-text-secondary'
        }"
      >
        {item.icon && <item.icon className="w-4 h-5 shrink-0" />}
        <span className="truncate min-w-[120px]">{item.label}</span>
        <ChevronDown className="w-3 h-3 ml-2 text-gray-400 group-hover:text-primary-600 transition-colors" />
      </button>
      <div className="mt-1 pt-1 border-t border-border text-xs text-text-muted">
        {item.submenu!.map((sub) => (
          <a
            key={sub.href}
            href={sub.href}
            className={`block px-3 py-1 rounded-md hover:bg-primary-100 ${
              sub.active ? 'bg-primary-100 text-primary-800' : 'text-text-secondary'}
            `}
          >
            {sub.label}
          </a>
        ))}
      </div>
    </div>
  )
}

const renderSidebarItem = (
  item: SidebarNavItem,
  currentPage: string,
  onPageSelect: (page: string) => void
) => {
  const isActive = item.href === currentPage
  return (
    <button
      onClick={() => onPageSelect(item.href)}
      className="flex items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
        isActive ? 'bg-primary-100 text-primary-800' : 'text-text-secondary hover:bg-primary-100'
      }"
    >
      {item.icon && <item.icon className="w-4 h-5 shrink-0" />}
      <span className="truncate min-w-[140px]">{item.label}</span>
    </button>
  )
}

export const SidebarCollapsed: React.FC<{
  isCollapsed: boolean
  onToggleCollapse: () => void
  currentPage: string
  onPageSelect: (page: string) => void
}> = ({
  isCollapsed,
  onToggleCollapse,
  currentPage,
  onPageSelect,
}) => {
  return (
    <aside
      className={`
        w-16 h-full bg-background border-r border-border z-50 fixed left-0 top-0 bottom-0 flex flex-col items-center pt-6 gap-2 
        transition-transform transform-gpu duration-300 ease-in-out ${
          isCollapsed ? 'transform-none' : '-translate-x-full'
        }`}
    >
      {collapsedItems.map((item) => (
        <button
          key={item.label}
          onClick={() => onPageSelect(item.href)}
          className="flex flex-col items-center gap-1 rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
            item.active ? 'bg-primary-100 text-primary-800' : 'text-text-secondary hover:bg-primary-100'
          }"
          title={item.tooltip}
        >
          {item.icon && <item.icon className="w-4 h-5" />}
          <span className="hidden md:block capitalize text-[0.65rem]">{item.label}</span>
        </button>
      ))}
    </aside>
  )
}