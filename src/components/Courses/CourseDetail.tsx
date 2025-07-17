import React, { useState } from 'react';
import { Play, Clock, Users, Star, BookOpen, CheckCircle, Lock, Download, Share2, Heart, MessageCircle, ArrowLeft, ChevronRight, Award, Target, TrendingUp, User, Calendar, Globe, FileText, Video, Pizza as Quiz, Code, Lightbulb } from 'lucide-react';

interface CourseDetailProps {
  courseId: string;
  onBack: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ courseId, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [completedLessons, setCompletedLessons] = useState<Set<number>>(new Set([1, 2, 3]));
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handlePlaylistItemClick = (item: any) => {
    if (item.type === 'video') {
      setSelectedVideo(item);
      setShowVideoPlayer(true);
    } else if (item.type === 'document') {
      // Handle document download
      window.open(item.fileUrl, '_blank');
    }
  };

  // Mock course data - in real app, fetch by courseId
  const course = {
    id: 1,
    title: 'Introduction au Business Model Canvas',
    instructor: {
      name: 'Marcus Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Expert en stratégie business avec 15 ans d\'expérience',
      rating: 4.9,
      students: 2340,
      courses: 12
    },
    description: 'Apprenez à créer et valider votre modèle économique avec le Business Model Canvas. Cette formation complète vous guidera à travers tous les blocs du canvas avec des exemples pratiques et des exercices concrets.',
    longDescription: 'Le Business Model Canvas est un outil stratégique essentiel pour tout entrepreneur. Dans cette formation, vous découvrirez comment structurer votre idée d\'entreprise, identifier vos segments de clientèle, définir votre proposition de valeur unique, et construire un modèle économique viable. Chaque module inclut des études de cas réels, des templates téléchargeables et des exercices pratiques pour appliquer immédiatement les concepts appris.',
    duration: '2h 30m',
    level: 'beginner',
    category: 'business',
    rating: 4.8,
    studentsCount: 156,
    progress: 37.5, // 3/8 lessons completed
    thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    enrolled: true,
    price: 'Gratuit',
    language: 'Français',
    lastUpdated: '2024-01-15',
    certificate: true,
    downloadable: true,
    lifetime: true,
    totalVideos: 8,
    totalDocuments: 5,
    totalDuration: '2h 30m',
    objectives: [
      'Maîtriser les 9 blocs du Business Model Canvas',
      'Analyser des modèles économiques existants',
      'Créer votre propre Business Model Canvas',
      'Valider votre modèle avec des méthodes éprouvées',
      'Identifier les risques et opportunités',
      'Présenter votre modèle de manière convaincante'
    ],
    requirements: [
      'Aucune expérience préalable requise',
      'Avoir une idée d\'entreprise (même vague)',
      'Motivation pour apprendre et pratiquer',
      'Accès à un ordinateur et internet'
    ],
    playlist: [
      {
        id: 1,
        title: 'Qu\'est-ce que le Business Model Canvas ?',
        duration: '12:30',
        type: 'video',
        thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        description: 'Introduction complète au Business Model Canvas, son histoire et ses applications pratiques.',
        views: 1247,
        likes: 89,
        completed: true,
        preview: true,
        uploadDate: '2024-01-15'
      },
      {
        id: 2,
        title: 'Histoire et évolution du Canvas',
        duration: '8:45',
        type: 'video',
        thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        description: 'Découvrez l\'histoire du Business Model Canvas et son évolution depuis sa création.',
        views: 892,
        likes: 67,
        completed: true,
        preview: false,
        uploadDate: '2024-01-16'
      },
      {
        id: 3,
        title: 'Template Business Model Canvas',
        duration: null,
        type: 'document',
        thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        fileUrl: '#',
        description: 'Template PDF téléchargeable pour créer votre propre Business Model Canvas.',
        downloads: 456,
        likes: 34,
        completed: false,
        preview: false,
        uploadDate: '2024-01-17',
        fileSize: '2.3 MB',
        fileType: 'PDF'
      },
      {
        id: 4,
        title: 'Les 9 blocs du Canvas - Partie 1',
        duration: '15:20',
        type: 'video',
        thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        description: 'Exploration détaillée des premiers blocs : segments de clientèle, proposition de valeur.',
        views: 734,
        likes: 52,
        completed: false,
        preview: false,
        uploadDate: '2024-01-18'
      },
      {
        id: 5,
        title: 'Les 9 blocs du Canvas - Partie 2',
        duration: '18:15',
        type: 'video',
        thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        description: 'Suite de l\'exploration : canaux, relations clients, sources de revenus.',
        views: 623,
        likes: 41,
        completed: false,
        preview: false,
        uploadDate: '2024-01-19'
      },
      {
        id: 6,
        title: 'Exemples de Canvas célèbres',
        duration: null,
        type: 'document',
        thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        fileUrl: '#',
        description: 'Collection d\'exemples de Business Model Canvas d\'entreprises connues.',
        downloads: 289,
        likes: 28,
        completed: false,
        preview: false,
        uploadDate: '2024-01-20',
        fileSize: '1.8 MB',
        fileType: 'PDF'
      },
      {
        id: 7,
        title: 'Validation de votre modèle',
        duration: '16:30',
        type: 'video',
        thumbnail: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        description: 'Méthodes pour tester et valider votre Business Model Canvas.',
        views: 512,
        likes: 38,
        completed: false,
        preview: false,
        uploadDate: '2024-01-21'
      },
      {
        id: 8,
        title: 'Checklist de validation',
        duration: null,
        type: 'document',
        thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        fileUrl: '#',
        description: 'Checklist complète pour valider chaque bloc de votre canvas.',
        downloads: 178,
        likes: 19,
        completed: false,
        preview: false,
        uploadDate: '2024-01-22',
        fileSize: '0.9 MB',
        fileType: 'PDF'
      }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: 'Alice Johnson',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        rating: 5,
        comment: 'Formation excellente ! Les explications sont claires et les exercices très pratiques. J\'ai pu créer mon premier canvas en suivant les étapes.',
        date: '2024-01-18'
      },
      {
        id: 2,
        user: {
          name: 'Thomas Dubois',
          avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        rating: 5,
        comment: 'Marcus explique très bien les concepts. Les exemples concrets m\'ont aidé à mieux comprendre chaque bloc du canvas.',
        date: '2024-01-16'
      },
      {
        id: 3,
        user: {
          name: 'Sophie Laurent',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        rating: 4,
        comment: 'Très bonne formation pour débuter. J\'aurais aimé plus d\'exemples de startups tech, mais le contenu reste très utile.',
        date: '2024-01-14'
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Aperçu', icon: BookOpen },
    { id: 'playlist', label: 'Playlist', icon: Play },
    { id: 'instructor', label: 'Instructeur', icon: User },
    { id: 'reviews', label: 'Avis', icon: Star }
  ];

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'document': return FileText;
      default: return FileText;
    }
  };

  const getItemTypeLabel = (type: string) => {
    switch (type) {
      case 'video': return 'Vidéo';
      case 'document': return 'Document';
      default: return 'Contenu';
    }
  };

  const totalItems = course.playlist.length;
  const totalVideos = course.playlist.filter(item => item.type === 'video').length;
  const totalDocuments = course.playlist.filter(item => item.type === 'document').length;
  const completedCount = completedLessons.size;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors group"
      >
        <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        <span>Retour aux formations</span>
      </button>

      {/* Course Header */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-8 animate-fade-in-up">
        <div className="relative h-64 md:h-80">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center space-x-2 mb-3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                {course.category}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                {course.level}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">{course.title}</h1>
            <p className="text-lg opacity-90 mb-4">{course.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{course.instructor.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{course.studentsCount} étudiants</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-current" />
                <span>{course.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Course Actions */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex-1">
              {course.enrolled && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Progression: {completedCount}/{totalLessons} leçons
                    </span>
                    <span className="text-sm font-medium text-primary-600">
                      {Math.round(course.progress)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-lg font-bold text-gray-900">{course.price}</div>
                  <div className="text-xs text-gray-600">Prix</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-lg font-bold text-gray-900">{course.language}</div>
                  <div className="text-xs text-gray-600">Langue</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-lg font-bold text-gray-900">{totalVideos}</div>
                  <div className="text-xs text-gray-600">Vidéos</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="text-lg font-bold text-gray-900">{totalDocuments}</div>
                  <div className="text-xs text-gray-600">Documents</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center justify-center space-x-1">
                    {course.certificate && <Award className="h-4 w-4 text-gold-600" />}
                    {course.downloadable && <Download className="h-4 w-4 text-blue-600" />}
                    {course.lifetime && <Globe className="h-4 w-4 text-green-600" />}
                  </div>
                  <div className="text-xs text-gray-600">Avantages</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 lg:ml-6">
              {course.enrolled ? (
                <button 
                  onClick={() => onLessonClick && onLessonClick(courseId, '1')}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium transform hover:scale-105"
                >
                  <Play className="h-5 w-5" />
                  <span>Continuer la formation</span>
                </button>
              ) : (
                <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium transform hover:scale-105">
                  <BookOpen className="h-5 w-5" />
                  <span>S'inscrire</span>
                </button>
              )}
              
              <div className="flex space-x-2">
                <button className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600 bg-primary-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{course.longDescription}</p>
                
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Ce que vous apprendrez</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">Prérequis</h2>
                <div className="space-y-3">
                  {course.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Target className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">Informations</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Niveau</span>
                    <span className="font-medium capitalize">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Durée</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Dernière mise à jour</span>
                    <span className="font-medium">{new Date(course.lastUpdated).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificat</span>
                    <span className="font-medium">{course.certificate ? 'Oui' : 'Non'}</span>
                  </div>
                </div>
              </div>

              {/* Instructor Preview */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">Instructeur</h3>
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{course.instructor.name}</div>
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Star className="h-3 w-3 text-gold-500 fill-current" />
                      <span>{course.instructor.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{course.instructor.bio}</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{course.instructor.students}</div>
                    <div className="text-xs text-gray-600">Étudiants</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">{course.instructor.courses}</div>
                    <div className="text-xs text-gray-600">Formations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Curriculum Tab */}
        {activeTab === 'curriculum' && (
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-primary-900">Programme de la formation</h2>
              <div className="text-sm text-gray-600">
                {completedCount}/{totalLessons} leçons terminées
              </div>
            </div>

            <div className="space-y-6">
              {course.modules.map((module, moduleIndex) => (
                <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900">
                      Module {moduleIndex + 1}: {module.title}
                    </h3>
                    <div className="text-sm text-gray-600 mt-1">
                      {module.lessons.length} leçons
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const Icon = getLessonIcon(lesson.type);
                      const isCompleted = completedLessons.has(lesson.id);
                      const isLocked = !lesson.preview && !course.enrolled;
                      
                      return (
                        <div
                          key={lesson.id}
                          className={`px-6 py-4 flex items-center space-x-4 ${
                            isLocked ? 'opacity-60' : 'hover:bg-gray-50'
                          } transition-colors`}
                        >
                          <div className="flex-shrink-0">
                            {isCompleted ? (
                              <CheckCircle className="h-5 w-5 text-success-600" />
                            ) : isLocked ? (
                              <Lock className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Icon className="h-5 w-5 text-primary-600" />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-medium text-gray-900 truncate">
                                {lesson.title}
                              </h4>
                              {lesson.preview && (
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                  Aperçu
                                </span>
                              )}
                            </div>
                            <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                              <span>{getLessonTypeLabel(lesson.type)}</span>
                              <span>{lesson.duration}</span>
                            </div>
                          </div>
                          
                          <div className="flex-shrink-0">
                            {!isLocked && (
                              <button className="p-2 text-gray-400 hover:text-primary-600 rounded-lg transition-colors">
                                <Play className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructor Tab */}
        {activeTab === 'instructor' && (
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="flex items-center space-x-6 mb-8">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-large"
              />
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-2">{course.instructor.name}</h2>
                <p className="text-gray-600 mb-4">{course.instructor.bio}</p>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-gold-500 fill-current" />
                    <span className="font-medium">{course.instructor.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-5 w-5 text-gray-400" />
                    <span>{course.instructor.students} étudiants</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-5 w-5 text-gray-400" />
                    <span>{course.instructor.courses} formations</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <TrendingUp className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-sm text-gray-600">Années d'expérience</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Award className="h-8 w-8 text-gold-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
                <div className="text-sm text-gray-600">Startups accompagnées</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <Target className="h-8 w-8 text-success-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">€2M+</div>
                <div className="text-sm text-gray-600">Fonds levés</div>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold text-primary-900">Avis des étudiants</h2>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <span className="text-lg font-bold">{course.rating}</span>
                <span className="text-gray-600">({course.studentsCount} avis)</span>
              </div>
            </div>

            <div className="space-y-6">
              {course.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <img
                      src={review.user.avatar}
                      alt={review.user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{review.user.name}</h4>
                        <span className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString('fr-FR')}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'text-gold-500 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;