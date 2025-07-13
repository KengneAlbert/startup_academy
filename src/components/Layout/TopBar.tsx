import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Menu,
  X,
  GraduationCap,
  MessageCircle,
  User,
  Plus,
  Home,
  BookOpen,
  Users,
  Library,
  Target,
  Calendar
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface TopBarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onToggleMobileMenu: () => void;
  isMobileMenuOpen: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ 
  currentPage, 
  onPageChange, 
  onToggleMobileMenu,
  isMobileMenuOpen 
}) => {
  const { user } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);

  const mobileNavigationItems = [
    { id: 'dashboard', label: 'Accueil', icon: Home },
    { id: 'courses', label: 'Formations', icon: BookOpen },
    { id: 'projects', label: 'Projets', icon: Target },
    { id: 'events', label: 'Événements', icon: Calendar },
    { id: 'feed', label: 'Actualités', icon: Plus },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  const notifications = [
    { id: 1, title: 'Nouvelle formation disponible', time: '5 min', unread: true },
    { id: 2, title: 'Message de Marcus Chen', time: '1h', unread: true },
    { id: 3, title: 'Votre profil a été consulté', time: '2h', unread: false },
  ];

  return (
    <>
      {/* Desktop Top Bar */}
      <div className="hidden md:block bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2.5 text-gray-400 hover:text-primary-900 rounded-xl hover:bg-gray-50 transition-all duration-300 relative group"
                >
                  <Bell className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-error-500 to-error-600 rounded-full animate-pulse-soft"></span>
                </button>

                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-large border border-gray-100 py-2 animate-slide-down">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto scrollbar-hide">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${notification.unread ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
                            <div className="flex-1">
                              <p className="text-sm text-gray-900">{notification.title}</p>
                              <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* User Avatar */}
              <div className="flex items-center space-x-3">
                <img
                  src={user?.avatar || 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-soft"
                />
                <div className="hidden lg:block">
                  <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                  <div className="text-xs text-gray-500 capitalize">{user?.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100 sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary-900" />
    </>
  );
};

export default TopBar;