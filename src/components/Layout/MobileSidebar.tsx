import React from 'react';
import { 
  X,
  Home,
  BookOpen,
  Target,
  Calendar,
  Users,
  Library,
  Plus,
  MessageCircle,
  User,
  Settings,
  LogOut,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onPageChange: (page: string) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ 
  isOpen, 
  onClose, 
  currentPage, 
  onPageChange 
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

  const handlePageChange = (pageId: string) => {
    onPageChange(pageId);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-large z-50 transform transition-transform duration-300 ease-in-out md:hidden animate-slide-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <GraduationCap className="h-8 w-8 text-primary-900" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-gold-500 rounded-full opacity-20 blur"></div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
              Startup Academy
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* User Profile */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={user?.avatar || 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
                alt={user?.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-soft"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate">{user?.name}</div>
              <div className="text-xs text-gray-500 capitalize truncate">{user?.role}</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto scrollbar-hide py-4">
          <nav className="space-y-1 px-3">
            {/* Main Navigation */}
            <div className="space-y-1">
              <div className="px-3 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Principal
                </h3>
              </div>
              {navigationItems.filter(item => item.category === 'main').map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    className={`group relative flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-900 shadow-glow'
                        : 'text-gray-600 hover:text-primary-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-5 w-5 transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`} />
                      <span className="truncate">{item.label}</span>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${
                      isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-600'
                    }`} />
                    {isActive && (
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-primary-600 rounded-l-full"></div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Social Navigation */}
            <div className="space-y-1 pt-4">
              <div className="px-3 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Social
                </h3>
              </div>
              {navigationItems.filter(item => item.category === 'social').map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handlePageChange(item.id)}
                    className={`group relative flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-900 shadow-glow'
                        : 'text-gray-600 hover:text-primary-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-5 w-5 transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`} />
                      <span className="truncate">{item.label}</span>
                      {item.hasNotification && (
                        <div className="w-2 h-2 bg-error-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${
                      isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-600'
                    }`} />
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
          <button
            onClick={() => handlePageChange('profile')}
            className={`group relative flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
              currentPage === 'profile'
                ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-900'
                : 'text-gray-600 hover:text-primary-900 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
              <span className="truncate">Mon Profil</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
          </button>
          
          <button
            onClick={() => handlePageChange('settings')}
            className="group flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-primary-900 hover:bg-gray-50 transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <Settings className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
              <span className="truncate">Paramètres</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
          </button>
          
          <button
            onClick={logout}
            className="group flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium text-error-600 hover:text-error-700 hover:bg-error-50 transition-all duration-300"
          >
            <div className="flex items-center space-x-3">
              <LogOut className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
              <span>Déconnexion</span>
            </div>
            <ChevronRight className="h-4 w-4 text-error-500" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;