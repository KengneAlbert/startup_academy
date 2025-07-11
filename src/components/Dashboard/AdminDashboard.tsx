import React, { useState } from 'react';
import { 
  Users, 
  Shield, 
  Activity, 
  TrendingUp,
  Settings,
  UserPlus,
  UserMinus,
  Edit,
  Trash2,
  Calendar,
  BarChart3,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('users');

  const stats = [
    { label: 'Utilisateurs totaux', value: '1,234', icon: Users, color: 'text-blue-600', trend: '+12%' },
    { label: 'Membres actifs', value: '987', icon: Activity, color: 'text-green-600', trend: '+8%' },
    { label: 'Coordinateurs', value: '15', icon: Shield, color: 'text-purple-600', trend: '+2' },
    { label: 'Formations publiées', value: '156', icon: TrendingUp, color: 'text-gold-600', trend: '+25%' }
  ];

  const users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'member',
      status: 'active',
      joinDate: '2024-01-15',
      lastActivity: '2024-01-20'
    },
    {
      id: 2,
      name: 'Marcus Chen',
      email: 'marcus@example.com',
      role: 'coordinator',
      status: 'active',
      joinDate: '2023-08-10',
      lastActivity: '2024-01-19'
    },
    {
      id: 3,
      name: 'Sarah Williams',
      email: 'sarah@example.com',
      role: 'administrator',
      status: 'active',
      joinDate: '2023-05-01',
      lastActivity: '2024-01-20'
    },
    {
      id: 4,
      name: 'Thomas Dubois',
      email: 'thomas@example.com',
      role: 'member',
      status: 'inactive',
      joinDate: '2024-01-10',
      lastActivity: '2024-01-12'
    }
  ];

  const activityLogs = [
    {
      id: 1,
      user: 'Alice Johnson',
      action: 'Inscription à la formation "Business Model Canvas"',
      timestamp: '2024-01-20 14:30',
      type: 'course_enrollment'
    },
    {
      id: 2,
      user: 'Marcus Chen',
      action: 'Création d\'une nouvelle formation',
      timestamp: '2024-01-20 12:15',
      type: 'content_creation'
    },
    {
      id: 3,
      user: 'Sarah Williams',
      action: 'Modification des paramètres système',
      timestamp: '2024-01-20 11:45',
      type: 'system_config'
    },
    {
      id: 4,
      user: 'Julie Martin',
      action: 'Publication d\'un nouveau post',
      timestamp: '2024-01-20 10:20',
      type: 'social_activity'
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'administrator': return 'bg-red-100 text-red-800';
      case 'coordinator': return 'bg-blue-100 text-blue-800';
      case 'member': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'text-green-600' : 'text-red-600';
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'course_enrollment': return <Users className="h-4 w-4 text-blue-600" />;
      case 'content_creation': return <UserPlus className="h-4 w-4 text-green-600" />;
      case 'system_config': return <Settings className="h-4 w-4 text-purple-600" />;
      case 'social_activity': return <Activity className="h-4 w-4 text-gold-600" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-900 mb-2">
          Administration
        </h1>
        <p className="text-gray-600">
          Gérez les utilisateurs, les rôles et surveillez l'activité de la plateforme
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <Icon className={`h-8 w-8 ${stat.color}`} />
                <span className="text-sm font-medium text-green-600">{stat.trend}</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('users')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'users'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Gestion des utilisateurs
            </button>
            <button
              onClick={() => setActiveTab('roles')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'roles'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Gestion des rôles
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'activity'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Logs d'activité
            </button>
          </nav>
        </div>

        <div className="p-6">
          {/* Users Tab */}
          {activeTab === 'users' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-primary-900">
                  Gestion des utilisateurs
                </h2>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-2">
                  <UserPlus className="h-4 w-4" />
                  <span>Ajouter un utilisateur</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Utilisateur</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Rôle</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Inscription</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Dernière activité</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div>
                            <div className="font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getRoleColor(user.role)}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-1">
                            {user.status === 'active' ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-red-600" />
                            )}
                            <span className={`text-sm font-medium ${getStatusColor(user.status)}`}>
                              {user.status}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {new Date(user.joinDate).toLocaleDateString('fr-FR')}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">
                          {new Date(user.lastActivity).toLocaleDateString('fr-FR')}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex space-x-2">
                            <button className="text-primary-600 hover:text-primary-700">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Roles Tab */}
          {activeTab === 'roles' && (
            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-6">
                Gestion des rôles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">Membre</h3>
                      <p className="text-sm text-gray-600">Utilisateur standard</p>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Accès aux formations</li>
                    <li>• Participation aux discussions</li>
                    <li>• Accès à la bibliothèque</li>
                    <li>• Profil professionnel</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">Coordinateur</h3>
                      <p className="text-sm text-gray-600">Créateur de contenu</p>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Toutes les permissions membre</li>
                    <li>• Création de formations</li>
                    <li>• Ajout de livres</li>
                    <li>• Statistiques de participation</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Settings className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary-900">Administrateur</h3>
                      <p className="text-sm text-gray-600">Contrôle total</p>
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Toutes les permissions</li>
                    <li>• Gestion des utilisateurs</li>
                    <li>• Gestion des rôles</li>
                    <li>• Logs d'activité</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <div>
              <h2 className="text-xl font-semibold text-primary-900 mb-6">
                Logs d'activité
              </h2>
              
              <div className="space-y-4">
                {activityLogs.map((log) => (
                  <div key={log.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      {getActivityIcon(log.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-900">{log.user}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">{log.action}</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {log.timestamp}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;