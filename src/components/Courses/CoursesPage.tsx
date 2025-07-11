import React, { useState } from 'react';
import { 
  Play, 
  BookOpen, 
  Clock, 
  Star, 
  Filter,
  Search,
  ChevronDown,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Introduction au Business Model Canvas',
      instructor: 'Marcus Chen',
      description: 'Apprenez à créer et valider votre modèle économique avec le Business Model Canvas',
      duration: '2h 30m',
      level: 'beginner',
      category: 'business',
      rating: 4.8,
      students: 156,
      progress: 75,
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      enrolled: true,
      lessons: 8,
      completedLessons: 6
    },
    {
      id: 2,
      title: 'Stratégies de Financement pour Startups',
      instructor: 'Sarah Williams',
      description: 'Découvrez les différentes sources de financement et préparez votre levée de fonds',
      duration: '3h 15m',
      level: 'intermediate',
      category: 'finance',
      rating: 4.9,
      students: 89,
      progress: 40,
      thumbnail: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      enrolled: true,
      lessons: 12,
      completedLessons: 5
    },
    {
      id: 3,
      title: 'Marketing Digital pour Entrepreneurs',
      instructor: 'Julie Martin',
      description: 'Maîtrisez les outils du marketing digital pour développer votre startup',
      duration: '4h 00m',
      level: 'intermediate',
      category: 'marketing',
      rating: 4.7,
      students: 203,
      progress: 90,
      thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      enrolled: true,
      lessons: 15,
      completedLessons: 14
    },
    {
      id: 4,
      title: 'Développement d\'Applications Web',
      instructor: 'Thomas Dubois',
      description: 'Créez des applications web modernes avec React et Node.js',
      duration: '6h 45m',
      level: 'advanced',
      category: 'tech',
      rating: 4.6,
      students: 127,
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      enrolled: false,
      lessons: 20,
      completedLessons: 0
    },
    {
      id: 5,
      title: 'Leadership et Gestion d\'Équipe',
      instructor: 'Antoine Moreau',
      description: 'Développez vos compétences en leadership pour diriger efficacement',
      duration: '2h 15m',
      level: 'intermediate',
      category: 'business',
      rating: 4.8,
      students: 94,
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      enrolled: false,
      lessons: 9,
      completedLessons: 0
    },
    {
      id: 6,
      title: 'Comptabilité et Gestion Financière',
      instructor: 'Marie Dubois',
      description: 'Gérez efficacement les finances de votre entreprise',
      duration: '3h 30m',
      level: 'beginner',
      category: 'finance',
      rating: 4.5,
      students: 156,
      progress: 0,
      thumbnail: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      enrolled: false,
      lessons: 11,
      completedLessons: 0
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les catégories' },
    { id: 'business', name: 'Business' },
    { id: 'finance', name: 'Finance' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'tech', name: 'Technologie' }
  ];

  const levels = [
    { id: 'all', name: 'Tous les niveaux' },
    { id: 'beginner', name: 'Débutant' },
    { id: 'intermediate', name: 'Intermédiaire' },
    { id: 'advanced', name: 'Avancé' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'beginner': return 'Débutant';
      case 'intermediate': return 'Intermédiaire';
      case 'advanced': return 'Avancé';
      default: return level;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6 md:mb-8 animate-fade-in-up">
        <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
          Formations
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Développez vos compétences entrepreneuriales avec nos formations expertisées
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-4 md:p-6 mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une formation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
            />
          </div>

          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white transition-all duration-300"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white transition-all duration-300"
            >
              {levels.map(level => (
                <option key={level.id} value={level.id}>
                  {level.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {filteredCourses.map((course) => (
          <div key={course.id} className="group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium transition-all duration-500 hover:scale-105 animate-slide-up">
            <div className="relative">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                  {getLevelLabel(course.level)}
                </span>
              </div>
              {course.enrolled && (
                <div className="absolute top-3 right-3">
                  <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow-soft">
                    Inscrit
                  </div>
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-large">
                  <Play className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">
                {course.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.lessons} leçons</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-gold-500 fill-current" />
                  <span className="text-sm font-medium">{course.rating}</span>
                </div>
                <span className="text-sm text-gray-500">
                  par {course.instructor}
                </span>
              </div>

              {course.enrolled && course.progress > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progression</span>
                    <span className="text-sm font-medium text-primary-600">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}

              <button className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium transform hover:scale-105 ${
                course.enrolled
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800'
                  : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300'
              }`}>
                <Play className="h-4 w-4" />
                <span>
                  {course.enrolled
                    ? (course.progress > 0 ? 'Continuer' : 'Commencer')
                    : 'S\'inscrire'
                  }
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucune formation trouvée
          </h3>
          <p className="text-gray-500">
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}
    </div>
  );
};

export default CoursesPage;