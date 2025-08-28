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
  Bell,
  Search,
  GraduationCap,
  ChevronDown,
  Plus
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../assets/startup_logo.jpg'

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: Home },
    { id: 'courses', label: 'Formations', icon: BookOpen },
    { id: 'library', label: 'Bibliothèque', icon: Library },
    { id: 'members', label: 'Membres', icon: Users },
    { id: 'feed', label: 'Actualités', icon: MessageCircle },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
  ];

  const mobileNavigationItems = [
    { id: 'dashboard', label: 'Accueil', icon: Home },
    { id: 'courses', label: 'Formations', icon: BookOpen },
    { id: 'feed', label: 'Actualités', icon: Plus },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'profile', label: 'Profil', icon: User },
  ];
  const notifications = [
    { id: 1, title: 'Nouvelle formation disponible', time: '5 min', unread: true },
    { id: 2, title: 'Message de Marcus Chen', time: '1h', unread: true },
    { id: 3, title: 'Votre profil a été consulté', time: '2h', unread: false },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center group cursor-pointer">
              <div className="relative">
                <img src={Logo} alt="Startup Academy Logo" className="h-8 w-auto" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-gold-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-primary-900 to-primary-700 bg-clip-text text-transparent">
                Startup Academy
              </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => onPageChange(item.id)}
                      className={`group relative flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-900 shadow-glow'
                          : 'text-gray-600 hover:text-primary-900 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`h-4 w-4 mr-2 transition-transform duration-300 ${
                        isActive ? 'scale-110' : 'group-hover:scale-105'
                      }`} />
                      {item.label}
                      {isActive && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right side - Search, Notifications, Profile */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="relative group">
                <button className="p-2.5 text-gray-400 hover:text-primary-900 rounded-xl hover:bg-gray-50 transition-all duration-300 group-hover:shadow-soft">
                  <Search className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </button>
              </div>

              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2.5 text-gray-400 hover:text-primary-900 rounded-xl hover:bg-gray-50 transition-all duration-300 relative group hover:shadow-soft"
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
                    <div className="max-h-64 overflow-y-auto">
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
              
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-all duration-300 group hover:shadow-soft"
                >
                  <div className="relative">
                    <img
                      src={user?.avatar || 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
                      alt={user?.name}
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-transparent group-hover:ring-primary-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="hidden lg:flex flex-col text-left">
                    <span className="text-sm font-medium text-gray-900">{user?.name}</span>
                    <span className="text-xs text-gray-500 capitalize">{user?.role}</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Profile Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-large border border-gray-100 py-2 animate-slide-down">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user?.avatar || 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
                          alt={user?.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                          <div className="text-xs text-gray-500 capitalize">{user?.role}</div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        onPageChange('profile');
                        setShowProfileMenu(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2"
                    >
                      <User className="h-4 w-4" />
                      <span>Mon Profil</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2">
                      <Settings className="h-4 w-4" />
                      <span>Paramètres</span>
                    </button>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <button
                        onClick={logout}
                        className="w-full px-4 py-2 text-left text-sm text-error-600 hover:bg-error-50 transition-colors flex items-center space-x-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Déconnexion</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <nav className="md:hidden bg-white/95 backdrop-blur-md shadow-soft border-b border-gray-100 sticky top-0 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-primary-900" />
              <span className="text-lg font-bold text-primary-900">Startup Academy</span>
            </div>
            
            {/* Right actions */}
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-primary-900 rounded-lg transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-400 hover:text-primary-900 rounded-lg transition-colors relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-error-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Notifications Dropdown */}
        {showNotifications && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-large animate-slide-down z-40 scrollbar-hide">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
            </div>
            <div className="max-h-64 overflow-y-auto scrollbar-hide">
              {notifications.map((notification) => (
                <div key={notification.id} className="px-4 py-3 hover:bg-gray-50 transition-colors">
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
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-large">
          <div className="flex items-center justify-around py-2">
            {mobileNavigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              const hasNotification = item.id === 'messages' && true; // Mock notification
              
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 min-w-0 flex-1 ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-gray-500 hover:text-primary-600'
                  }`}
                >
                  <div className="relative">
                    <Icon className={`h-6 w-6 transition-all duration-300 ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`} />
                    {hasNotification && !isActive && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-error-500 rounded-full animate-pulse"></div>
                    )}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full"></div>
                    )}
                  </div>
                  <span className={`text-xs mt-1 font-medium transition-all duration-300 ${
                    isActive ? 'text-primary-600' : 'text-gray-500'
                  }`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* Overlay for dropdowns */}
      {(showProfileMenu || showNotifications) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setShowProfileMenu(false);
            setShowNotifications(false);
          }}
        />
      )}
    </>
  );
};

export default Navigation;