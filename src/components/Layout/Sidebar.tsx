import React from 'react';
import { 
  Home, 
  BookOpen, 
  Users, 
  MessageCircle, 
  Library, 
  User,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Plus,
  Target,
  Calendar
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../assets/startup_logo.jpg'

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentPage, 
  onPageChange, 
  isCollapsed, 
  onToggleCollapse 
}) => {
  const { user, logout } = useAuth();

  const navigationItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: Home, category: 'main' },
    { id: 'courses', label: 'Formations', icon: BookOpen, category: 'main' },
    { id: 'projects', label: 'Projets', icon: Target, category: 'main' },
    { id: 'events', label: 'Événements', icon: Calendar, category: 'main' },
    { id: 'library', label: 'Bibliothèque', icon: Library, category: 'main' },
    { id: 'members', label: 'Membres', icon: Users, category: 'main' },
    { id: 'feed', label: 'Actualités', icon: Plus, category: 'social' },
    { id: 'messages', label: 'Messages', icon: MessageCircle, category: 'social', hasNotification: true },
  ];

  const bottomItems = [
    { id: 'profile', label: 'Mon Profil', icon: User },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  return (
    <div className={`hidden md:flex flex-col bg-white border-r border-gray-200 shadow-soft transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } h-screen sticky top-0 z-40`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        {!isCollapsed && (
            <div className="flex items-center space-x-2">
            <img src={Logo} alt="Startup Academy" className="h-8 w-auto" />
            <span className="text-lg font-bold bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
              Startup Academy
            </span>
            </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-300"
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* User Profile */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={user?.avatar || 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
              alt={user?.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-soft"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success-500 rounded-full border-2 border-white"></div>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{user?.name}</div>
              <div className="text-xs text-gray-500 capitalize truncate">{user?.role}</div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto scrollbar-hide py-4">
        <nav className="space-y-1 px-3">
          {/* Main Navigation */}
          <div className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Principal
                </h3>
              </div>
            )}
            {navigationItems.filter(item => item.category === 'main').map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`group relative flex items-center w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-900 shadow-glow'
                      : 'text-gray-600 hover:text-primary-900 hover:bg-gray-50'
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className={`h-5 w-5 transition-transform duration-300 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  } ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                  {!isCollapsed && (
                    <>
                      <span className="truncate">{item.label}</span>
                      {item.hasNotification && (
                        <div className="ml-auto w-2 h-2 bg-error-500 rounded-full animate-pulse"></div>
                      )}
                    </>
                  )}
                  {isActive && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-primary-600 rounded-l-full"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Social Navigation */}
          <div className="space-y-1 pt-4">
            {!isCollapsed && (
              <div className="px-3 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Social
                </h3>
              </div>
            )}
            {navigationItems.filter(item => item.category === 'social').map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`group relative flex items-center w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-900 shadow-glow'
                      : 'text-gray-600 hover:text-primary-900 hover:bg-gray-50'
                  }`}
                  title={isCollapsed ? item.label : undefined}
                >
                  <Icon className={`h-5 w-5 transition-transform duration-300 ${
                    isActive ? 'scale-110' : 'group-hover:scale-105'
                  } ${isCollapsed ? 'mx-auto' : 'mr-3'}`} />
                  {!isCollapsed && (
                    <>
                      <span className="truncate">{item.label}</span>
                      {item.hasNotification && (
                        <div className="ml-auto w-2 h-2 bg-error-500 rounded-full animate-pulse"></div>
                      )}
                    </>
                  )}
                  {isActive && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-primary-600 rounded-l-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="border-t border-gray-100 p-3 space-y-1">
        {bottomItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`group relative flex items-center w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-900'
                  : 'text-gray-600 hover:text-primary-900 hover:bg-gray-50'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-105 ${
                isCollapsed ? 'mx-auto' : 'mr-3'
              }`} />
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
        
        <button
          onClick={logout}
          className={`group flex items-center w-full px-3 py-2.5 rounded-xl text-sm font-medium text-error-600 hover:text-error-700 hover:bg-error-50 transition-all duration-300`}
          title={isCollapsed ? 'Déconnexion' : undefined}
        >
          <LogOut className={`h-5 w-5 transition-transform duration-300 group-hover:scale-105 ${
            isCollapsed ? 'mx-auto' : 'mr-3'
          }`} />
          {!isCollapsed && <span>Déconnexion</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;