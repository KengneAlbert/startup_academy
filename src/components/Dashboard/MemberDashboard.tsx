import React from 'react';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  Star, 
  Clock, 
  Play,
  ChevronRight,
  Award,
  Target,
  User,
  Zap,
  Calendar,
  MessageSquare,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const MemberDashboard: React.FC = () => {
  const { user } = useAuth();

  const recentCourses = [
    {
      id: 1,
      title: 'Introduction au Business Model Canvas',
      progress: 75,
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '2h 30m',
      nextLesson: 'Segment de clientèle',
      instructor: 'Marcus Chen',
      difficulty: 'Débutant'
    },
    {
      id: 2,
      title: 'Stratégies de Financement pour Startups',
      progress: 40,
      thumbnail: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '3h 15m',
      nextLesson: 'Préparer un pitch deck',
      instructor: 'Sarah Williams',
      difficulty: 'Intermédiaire'
    },
    {
      id: 3,
      title: 'Marketing Digital pour Entrepreneurs',
      progress: 90,
      thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      duration: '4h 00m',
      nextLesson: 'Analyse des performances',
      instructor: 'Julie Martin',
      difficulty: 'Avancé'
    }
  ];

  const suggestedProfiles = [
    {
      id: 1,
      name: 'Julie Martin',
      profession: 'Product Manager',
      location: 'Lyon, France',
      skills: ['Product Design', 'UX/UI', 'Agile'],
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      matchPercentage: 85,
      isOnline: true
    },
    {
      id: 2,
      name: 'Thomas Dubois',
      profession: 'Tech Lead',
      location: 'Marseille, France',
      skills: ['React', 'Node.js', 'DevOps'],
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      matchPercentage: 78,
      isOnline: false
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      profession: 'Business Developer',
      location: 'Nice, France',
      skills: ['Sales', 'Partnerships', 'Strategy'],
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      matchPercentage: 82,
      isOnline: true
    }
  ];

  const stats = [
    { 
      label: 'Formations suivies', 
      value: '12', 
      icon: BookOpen, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      change: '+3 ce mois'
    },
    { 
      label: 'Heures d\'apprentissage', 
      value: '48h', 
      icon: Clock, 
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      change: '+12h cette semaine'
    },
    { 
      label: 'Certificats obtenus', 
      value: '3', 
      icon: Award, 
      color: 'from-gold-500 to-gold-600',
      bgColor: 'from-gold-50 to-gold-100',
      change: '+1 récemment'
    },
    { 
      label: 'Connexions réseau', 
      value: '24', 
      icon: Users, 
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      change: '+5 cette semaine'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Webinaire: Lever des fonds en 2024',
      date: '15 Jan',
      time: '14:00',
      attendees: 156
    },
    {
      id: 2,
      title: 'Networking: Entrepreneurs Tech',
      date: '18 Jan',
      time: '18:30',
      attendees: 89
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 space-y-6 md:space-y-8">
      {/* Welcome Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white animate-fade-in-up">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-gold-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Bonjour {user?.name} ! 👋
              </h1>
              <p className="text-primary-100 mt-1 text-sm md:text-base">
                Continuez votre parcours entrepreneurial avec nos formations personnalisées
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
            <button className="bg-white/10 backdrop-blur-sm text-white px-4 md:px-6 py-3 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 group text-sm md:text-base">
              <Target className="h-4 w-4" />
              <span>Définir mes objectifs</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button className="bg-gold-500 text-white px-4 md:px-6 py-3 rounded-xl hover:bg-gold-600 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-glow-gold text-sm md:text-base">
              <Zap className="h-4 w-4" />
              <span>Découvrir les nouveautés</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="group relative overflow-hidden bg-white rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-500 hover:scale-105">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-soft`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Courses */}
        <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Formations en cours</h2>
                  <p className="text-sm text-gray-500 mt-1">Continuez là où vous vous êtes arrêté</p>
                </div>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center space-x-1 group">
                  <span>Voir tout</span>
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              {recentCourses.map((course, index) => (
                <div key={course.id} className="group border border-gray-100 rounded-2xl p-4 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
                  {/* Mobile Layout */}
                  <div className="block md:hidden">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="relative flex-shrink-0">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-16 h-16 rounded-xl object-cover shadow-soft"
                        />
                        <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Play className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">{course.title}</h3>
                          <span className={`ml-2 px-2 py-1 text-xs rounded-full flex-shrink-0 ${getDifficultyColor(course.difficulty)}`}>
                            {course.difficulty}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-gray-500 mb-2">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span className="truncate">{course.instructor}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-sm text-gray-600 mb-2">
                        Prochaine leçon: <span className="font-medium">{course.nextLesson}</span>
                      </p>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-primary-600 flex-shrink-0">
                          {course.progress}%
                        </span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105 flex items-center justify-center space-x-2">
                      <Play className="h-4 w-4" />
                      <span>Continuer</span>
                    </button>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-20 h-20 rounded-xl object-cover shadow-soft"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900 truncate">{course.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getDifficultyColor(course.difficulty)}`}>
                          {course.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Prochaine leçon: <span className="font-medium">{course.nextLesson}</span>
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{course.instructor}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-primary-600">
                          {course.progress}%
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105">
                      <Play className="h-4 w-4" />
                      <span>Continuer</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {/* Suggested Profiles */}
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Profils suggérés</h2>
              <p className="text-sm text-gray-500 mt-1">Connectez-vous avec des entrepreneurs</p>
            </div>
            
            <div className="p-6 space-y-4">
              {suggestedProfiles.map((profile, index) => (
                <div key={profile.id} className="group border border-gray-100 rounded-2xl p-4 hover:border-primary-200 hover:bg-primary-50/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="relative">
                      <img
                        src={profile.avatar}
                        alt={profile.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-soft"
                      />
                      {profile.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{profile.name}</h3>
                      <p className="text-sm text-gray-600 truncate">{profile.profession}</p>
                      <p className="text-xs text-gray-500 truncate">{profile.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-gold-500 fill-current" />
                        <span className="text-sm font-medium text-gray-700">
                          {profile.matchPercentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {profile.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 text-sm font-medium shadow-soft hover:shadow-medium transform hover:scale-105">
                    Se connecter
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">Événements à venir</h2>
              <p className="text-sm text-gray-500 mt-1">Ne manquez rien</p>
            </div>
            
            <div className="p-6 space-y-4 scrollbar-hide">
              {upcomingEvents.map((event, index) => (
                <div key={event.id} className="group border border-gray-100 rounded-2xl p-4 hover:border-gold-200 hover:bg-gold-50/50 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="flex items-start space-x-3">
                    <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white p-2 rounded-xl shadow-soft">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{event.date} à {event.time}</span>
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;