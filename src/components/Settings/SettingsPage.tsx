import React, { useState } from 'react';
import {
  User,
  Bell,
  Shield,
  Globe,
  Palette,
  Database,
  Download,
  Trash2,
  Eye,
  EyeOff,
  Save,
  X,
  Check,
  AlertTriangle,
  Info,
  Lock,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Camera,
  Key,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  Wifi,
  HardDrive,
  FileText,
  Settings as SettingsIcon,
  ChevronRight,
  Toggle,
  Sliders,
  Languages,
  Calendar,
  Clock,
  CreditCard,
  LogOut,
  UserX,
  RefreshCw,
  Upload,
  Link,
  Share2,
  MessageSquare,
  Heart,
  Star,
  Target,
  Zap,
  Award,
  TrendingUp,
  Filter,
  Search,
  BookOpen,
  Users,
  Building,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const SettingsPage: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('profile');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: true,
    courses: true,
    messages: true,
    events: true,
    projects: false,
  });
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showPhone: false,
    showLocation: true,
    allowMessages: true,
    showActivity: true,
    searchable: true,
  });
  const [language, setLanguage] = useState('fr');
  const [timezone, setTimezone] = useState('Africa/Douala');

  const settingsSections = [
    {
      id: 'profile',
      title: 'Profil',
      icon: User,
      description: 'Informations personnelles et professionnelles'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      description: 'Préférences de notifications'
    },
    {
      id: 'privacy',
      title: 'Confidentialité',
      icon: Shield,
      description: 'Contrôle de la visibilité de vos données'
    },
    {
      id: 'security',
      title: 'Sécurité',
      icon: Lock,
      description: 'Mot de passe et authentification'
    },
    {
      id: 'preferences',
      title: 'Préférences',
      icon: Sliders,
      description: 'Langue, thème et personnalisation'
    },
    {
      id: 'data',
      title: 'Données',
      icon: Database,
      description: 'Export et suppression des données'
    }
  ];

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const timezones = [
    { value: 'Africa/Douala', label: 'Douala (GMT+1)' },
    { value: 'Africa/Yaoundé', label: 'Yaoundé (GMT+1)' },
    { value: 'Europe/Paris', label: 'Paris (GMT+1)' },
    { value: 'America/New_York', label: 'New York (GMT-5)' },
  ];

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handlePrivacyChange = (key: string, value: boolean) => {
    setPrivacy(prev => ({ ...prev, [key]: value }));
  };

  const handleSaveSettings = () => {
    // Logic to save settings
    console.log('Saving settings...');
  };

  const handleExportData = () => {
    // Logic to export user data
    console.log('Exporting data...');
  };

  const handleDeleteAccount = () => {
    // Logic to delete account
    console.log('Deleting account...');
    setShowDeleteModal(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6 md:mb-8 animate-fade-in-up">
        <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
          Paramètres
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Gérez vos préférences et paramètres de compte
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-4 animate-fade-in-up">
            <nav className="space-y-1">
              {settingsSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-50 to-primary-100 text-primary-900 shadow-glow'
                        : 'text-gray-600 hover:text-primary-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? 'text-primary-600' : 'text-gray-400'}`} />
                    <div className="flex-1">
                      <div className="font-medium">{section.title}</div>
                      <div className="text-xs text-gray-500 hidden lg:block">
                        {section.description}
                      </div>
                    </div>
                    <ChevronRight className={`h-4 w-4 ${isActive ? 'text-primary-600' : 'text-gray-400'}`} />
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            
            {/* Profile Settings */}
            {activeSection === 'profile' && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-primary-900">Informations du profil</h2>
                  <button
                    onClick={handleSaveSettings}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center space-x-2 shadow-soft"
                  >
                    <Save className="h-4 w-4" />
                    <span>Sauvegarder</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Avatar */}
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <img
                        src={user?.avatar || 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
                        alt={user?.name}
                        className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white shadow-soft"
                      />
                      <button className="absolute -bottom-2 -right-2 bg-primary-600 text-white p-2 rounded-xl hover:bg-primary-700 transition-colors shadow-soft">
                        <Camera className="h-4 w-4" />
                      </button>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Photo de profil</h3>
                      <p className="text-sm text-gray-600 mb-3">Formats acceptés: JPG, PNG (max 5MB)</p>
                      <div className="flex space-x-3">
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                          Changer
                        </button>
                        <button className="text-error-600 hover:text-error-700 px-4 py-2 rounded-lg hover:bg-error-50 transition-colors text-sm">
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Profession
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.profession}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Localisation
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.location}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Biographie
                    </label>
                    <textarea
                      rows={4}
                      defaultValue={user?.bio}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Parlez-nous de vous..."
                    />
                  </div>

                  {/* Skills */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Compétences
                    </label>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {user?.skills?.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full flex items-center space-x-2"
                        >
                          <span>{skill}</span>
                          <button className="text-primary-600 hover:text-primary-800">
                            <X className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                    <input
                      type="text"
                      placeholder="Ajouter une compétence..."
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Réseaux sociaux</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Link className="h-5 w-5 text-blue-600" />
                        </div>
                        <input
                          type="url"
                          placeholder="https://linkedin.com/in/votre-profil"
                          defaultValue={user?.socialLinks?.linkedin}
                          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-sky-100 p-2 rounded-lg">
                          <Share2 className="h-5 w-5 text-sky-600" />
                        </div>
                        <input
                          type="url"
                          placeholder="https://twitter.com/votre-compte"
                          defaultValue={user?.socialLinks?.twitter}
                          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <Globe className="h-5 w-5 text-green-600" />
                        </div>
                        <input
                          type="url"
                          placeholder="https://votre-site-web.com"
                          defaultValue={user?.socialLinks?.website}
                          className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeSection === 'notifications' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-6">Préférences de notifications</h2>
                
                <div className="space-y-6">
                  {/* Email Notifications */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications par email</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Notifications générales</div>
                          <div className="text-sm text-gray-600">Recevoir les notifications importantes</div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('email', !notifications.email)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.email ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.email ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Nouvelles formations</div>
                          <div className="text-sm text-gray-600">Être notifié des nouvelles formations</div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('courses', !notifications.courses)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.courses ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.courses ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Messages privés</div>
                          <div className="text-sm text-gray-600">Nouveaux messages et réponses</div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('messages', !notifications.messages)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.messages ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.messages ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Événements</div>
                          <div className="text-sm text-gray-600">Nouveaux événements et rappels</div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('events', !notifications.events)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.events ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.events ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Marketing</div>
                          <div className="text-sm text-gray-600">Newsletters et promotions</div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('marketing', !notifications.marketing)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.marketing ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.marketing ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Push Notifications */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications push</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Notifications push</div>
                          <div className="text-sm text-gray-600">Recevoir des notifications sur votre appareil</div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('push', !notifications.push)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.push ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.push ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">SMS</div>
                          <div className="text-sm text-gray-600">Notifications importantes par SMS</div>
                        </div>
                        <button
                          onClick={() => handleNotificationChange('sms', !notifications.sms)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            notifications.sms ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              notifications.sms ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Settings */}
            {activeSection === 'privacy' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-6">Paramètres de confidentialité</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Visibilité du profil</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Profil public</div>
                          <div className="text-sm text-gray-600">Votre profil est visible par tous les membres</div>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('profileVisible', !privacy.profileVisible)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacy.profileVisible ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacy.profileVisible ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Afficher l'email</div>
                          <div className="text-sm text-gray-600">Votre email est visible sur votre profil</div>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('showEmail', !privacy.showEmail)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacy.showEmail ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacy.showEmail ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Autoriser les messages</div>
                          <div className="text-sm text-gray-600">Les membres peuvent vous envoyer des messages</div>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('allowMessages', !privacy.allowMessages)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacy.allowMessages ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacy.allowMessages ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Afficher l'activité</div>
                          <div className="text-sm text-gray-600">Votre dernière activité est visible</div>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('showActivity', !privacy.showActivity)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacy.showActivity ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacy.showActivity ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Recherche</div>
                          <div className="text-sm text-gray-600">Votre profil apparaît dans les résultats de recherche</div>
                        </div>
                        <button
                          onClick={() => handlePrivacyChange('searchable', !privacy.searchable)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            privacy.searchable ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              privacy.searchable ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeSection === 'security' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-6">Sécurité du compte</h2>
                
                <div className="space-y-6">
                  {/* Password */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Mot de passe</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Changer le mot de passe</div>
                        <div className="text-sm text-gray-600">Dernière modification il y a 3 mois</div>
                      </div>
                      <button
                        onClick={() => setShowPasswordModal(true)}
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Modifier
                      </button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Authentification à deux facteurs</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">2FA par SMS</div>
                          <div className="text-sm text-gray-600">Code de vérification par SMS</div>
                        </div>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                          Configurer
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Application d'authentification</div>
                          <div className="text-sm text-gray-600">Google Authenticator, Authy, etc.</div>
                        </div>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                          Configurer
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Active Sessions */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Sessions actives</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Monitor className="h-5 w-5 text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900">Chrome sur Windows</div>
                            <div className="text-sm text-gray-600">Douala, Cameroun • Maintenant</div>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-success-100 text-success-800 text-xs rounded-full">
                          Actuelle
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Smartphone className="h-5 w-5 text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900">Safari sur iPhone</div>
                            <div className="text-sm text-gray-600">Yaoundé, Cameroun • Il y a 2h</div>
                          </div>
                        </div>
                        <button className="text-error-600 hover:text-error-700 text-sm">
                          Déconnecter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Settings */}
            {activeSection === 'preferences' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-6">Préférences</h2>
                
                <div className="space-y-6">
                  {/* Language & Region */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Langue et région</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Langue
                        </label>
                        <select
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          {languages.map((lang) => (
                            <option key={lang.code} value={lang.code}>
                              {lang.flag} {lang.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Fuseau horaire
                        </label>
                        <select
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          {timezones.map((tz) => (
                            <option key={tz.value} value={tz.value}>
                              {tz.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Theme */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Apparence</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Mode sombre</div>
                          <div className="text-sm text-gray-600">Interface avec thème sombre</div>
                        </div>
                        <button
                          onClick={() => setIsDarkMode(!isDarkMode)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                            isDarkMode ? 'bg-primary-600' : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              isDarkMode ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <button className="p-4 border-2 border-primary-600 rounded-xl bg-white">
                          <Sun className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                          <div className="text-sm font-medium text-gray-900">Clair</div>
                        </button>
                        <button className="p-4 border-2 border-gray-200 rounded-xl bg-gray-900">
                          <Moon className="h-6 w-6 text-white mx-auto mb-2" />
                          <div className="text-sm font-medium text-white">Sombre</div>
                        </button>
                        <button className="p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-br from-white to-gray-900">
                          <Monitor className="h-6 w-6 text-gray-600 mx-auto mb-2" />
                          <div className="text-sm font-medium text-gray-900">Auto</div>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content Preferences */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Préférences de contenu</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Domaines d'intérêt
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {['Business', 'Tech', 'Marketing', 'Finance', 'Design'].map((interest) => (
                            <button
                              key={interest}
                              className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full hover:bg-primary-200 transition-colors"
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Data Settings */}
            {activeSection === 'data' && (
              <div className="p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-6">Gestion des données</h2>
                
                <div className="space-y-6">
                  {/* Export Data */}
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-xl">
                        <Download className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Exporter mes données</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Téléchargez une copie de toutes vos données (profil, messages, formations, etc.)
                        </p>
                        <button
                          onClick={handleExportData}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                        >
                          <Download className="h-4 w-4" />
                          <span>Exporter</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Storage Usage */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Utilisation du stockage</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-700">Documents</span>
                        </div>
                        <span className="text-sm text-gray-600">2.3 MB</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Camera className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-700">Images</span>
                        </div>
                        <span className="text-sm text-gray-600">5.7 MB</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-700">Messages</span>
                        </div>
                        <span className="text-sm text-gray-600">1.2 MB</span>
                      </div>
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center justify-between font-semibold">
                          <span className="text-gray-900">Total utilisé</span>
                          <span className="text-primary-600">9.2 MB / 100 MB</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-primary-600 h-2 rounded-full" style={{ width: '9.2%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delete Account */}
                  <div className="bg-error-50 rounded-xl p-6 border border-error-200">
                    <div className="flex items-start space-x-4">
                      <div className="bg-error-100 p-3 rounded-xl">
                        <AlertTriangle className="h-6 w-6 text-error-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Supprimer le compte</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          Cette action est irréversible. Toutes vos données seront définitivement supprimées.
                        </p>
                        <button
                          onClick={() => setShowDeleteModal(true)}
                          className="bg-error-600 text-white px-4 py-2 rounded-lg hover:bg-error-700 transition-colors flex items-center space-x-2"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span>Supprimer le compte</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-primary-900">
                Changer le mot de passe
              </h3>
              <button
                onClick={() => setShowPasswordModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe actuel
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 px-4 py-3 text-gray-700 bg-gray-200 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 px-4 py-3 text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-soft hover:shadow-medium"
                >
                  Modifier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-error-900">
                Supprimer le compte
              </h3>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-error-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-error-600" />
              </div>
              <p className="text-gray-700 mb-4">
                Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.
              </p>
              <div className="bg-error-50 border border-error-200 rounded-lg p-4 text-left">
                <h4 className="font-semibold text-error-900 mb-2">Conséquences :</h4>
                <ul className="text-sm text-error-700 space-y-1">
                  <li>• Suppression définitive de votre profil</li>
                  <li>• Perte de toutes vos formations en cours</li>
                  <li>• Suppression de vos messages et connexions</li>
                  <li>• Annulation de vos inscriptions aux événements</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tapez "SUPPRIMER" pour confirmer
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-error-500 focus:border-transparent"
                  placeholder="SUPPRIMER"
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-3 text-gray-700 bg-gray-200 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleDeleteAccount}
                  className="flex-1 px-4 py-3 text-white bg-error-600 rounded-xl hover:bg-error-700 transition-colors"
                >
                  Supprimer définitivement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPage;