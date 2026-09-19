import React from 'react';
import styles from '../styles/globals.css';

const Sidebar = ({ 
  isMobile,
  navItems,
  onNavItemClick,
  currentPage,
  toggleSidebar,
  showUserMenu = true
}) => {
  return (
    <aside className={`sidebar ${isMobile ? 'mobile-sidebar' : 'desktop-sidebar'}`}>
      <div className="sidebar-header">
        {showUserMenu && (
          <div>
            <h2 className="font-semibold">RUNTIME-CHAT</h2>
            <p className="text-xs text-muted-foreground">Plataforma IA</p>
          </div>
        )}
      </div>
      
      <nav>
        {navItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onNavItemClick(item.id)}
            className={`nav-item ${currentPage === item.id ? 'active' : ''} p-3 rounded-md hover:bg-hover transition-colors`}
          >
            {item.icon && <span className="sidebar-icon mr-2">{item.icon}</span>}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
      
      {showUserMenu && (
        <div className="sidebar-footer pt-4">
          <button onClick={toggleSidebar} className="w-full text-sm text-muted-foreground">
            Ver mais
          </button>
        </div>
      )}
    </aside>
  );
};

Sidebar.defaultProps = {
  isMobile: false,
  navItems: [],
  onNavItemClick: () => {},
  currentPage: '',
};

export default Sidebar;
