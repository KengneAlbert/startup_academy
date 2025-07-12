import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';
import { 
  Search, 
  Filter, 
  Calendar, 
  Users, 
  Star, 
  ExternalLink,
  Github,
  Globe,
  ChevronDown,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Award,
  TrendingUp,
  Code,
  Briefcase,
  Target,
  Clock,
  MapPin,
  Tag,
  Plus,
  BookOpen,
  Zap
} from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentView, setCurrentView] = useState<'list' | 'detail'>('list');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'EcoTrack - Suivi Carbone Personnel',
      description: 'Application mobile pour suivre et réduire son empreinte carbone quotidienne avec gamification et conseils personnalisés.',
      category: 'mobile',
      status: 'active',
      stage: 'MVP',
      team: [
        {
          id: 1,
          name: 'Alice Johnson',
          role: 'Product Owner',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          id: 2,
          name: 'Thomas Dubois',
          role: 'Tech Lead',
          avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          id: 3,
          name: 'Sophie Laurent',
          role: 'Marketing',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        }
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
      startDate: '2024-01-15',
      funding: '€50,000',
      investors: 3,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      links: {
        website: 'https://ecotrack.app',
        github: 'https://github.com/startup-academy/ecotrack',
        demo: 'https://demo.ecotrack.app'
      },
      metrics: {
        users: 1250,
        revenue: '€12,000',
        growth: '+45%'
      },
      tags: ['Environnement', 'Mobile', 'B2C', 'Gamification'],
      featured: true,
      likes: 89,
      views: 2341,
      comments: 23
    },
    {
      id: 2,
      title: 'FinanceFlow - Gestion PME',
      description: 'Plateforme SaaS de gestion financière simplifiée pour les PME avec tableaux de bord intelligents et prévisions automatisées.',
      category: 'saas',
      status: 'active',
      stage: 'Growth',
      team: [
        {
          id: 4,
          name: 'Marcus Chen',
          role: 'CEO',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        {
          id: 5,
          name: 'Marie Dubois',
          role: 'CFO',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        }
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'Docker'],
      startDate: '2023-08-10',
      funding: '€200,000',
      investors: 5,
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      links: {
        website: 'https://financeflow.pro',
        demo: 'https://demo.financeflow.pro'
      },
      metrics: {
        users: 450,
        revenue: '€45,000',
        growth: '+120%'
      },
      tags: ['FinTech', 'B2B', 'SaaS', 'Analytics'],
      featured: true,
      likes: 156,
      views: 4567,
      comments: 34
    },
    {
      id: 3,
      title: 'SkillBridge - Formation Professionnelle',
      description: 'Marketplace de formations professionnelles avec matching IA entre apprenants et formateurs experts.',
      category: 'edtech',
      status: 'active',
      stage: 'Seed',
      team: [
        {
          id: 6,
          name: 'Julie Martin',
          role: 'Founder',
          avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        }
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      startDate: '2024-02-01',
      funding: '€25,000',
      investors: 2,
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      links: {
        website: 'https://skillbridge.io',
        github: 'https://github.com/startup-academy/skillbridge'
      },
      metrics: {
        users: 890,
        revenue: '€8,500',
        growth: '+78%'
      },
      tags: ['EdTech', 'Marketplace', 'IA', 'Formation'],
      featured: false,
      likes: 67,
      views: 1890,
      comments: 18
    },
    {
      id: 4,
      title: 'GreenLogistics - Transport Écologique',
      description: 'Solution de livraison urbaine écologique avec optimisation des trajets et véhicules électriques.',
      category: 'logistics',
      status: 'paused',
      stage: 'Prototype',
      team: [
        {
          id: 7,
          name: 'Antoine Moreau',
          role: 'CEO',
          avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        }
      ],
      technologies: ['Angular', 'Spring Boot', 'MongoDB', 'Google Maps API'],
      startDate: '2023-11-15',
      funding: '€15,000',
      investors: 1,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      links: {
        github: 'https://github.com/startup-academy/greenlogistics'
      },
      metrics: {
        users: 45,
        revenue: '€0',
        growth: '0%'
      },
      tags: ['Logistique', 'Environnement', 'B2B', 'Transport'],
      featured: false,
      likes: 34,
      views: 567,
      comments: 8
    },
    {
      id: 5,
      title: 'HealthConnect - Télémédecine',
      description: 'Plateforme de téléconsultation médicale avec IA pour pré-diagnostic et suivi patient personnalisé.',
      category: 'healthtech',
      status: 'completed',
      stage: 'Exit',
      team: [
        {
          id: 8,
          name: 'Dr. Sarah Williams',
          role: 'Medical Director',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        }
      ],
      technologies: ['React', 'Node.js', 'TensorFlow', 'WebRTC'],
      startDate: '2022-03-01',
      funding: '€500,000',
      investors: 8,
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      links: {
        website: 'https://healthconnect.medical'
      },
      metrics: {
        users: 5000,
        revenue: '€150,000',
        growth: 'Acquis'
      },
      tags: ['HealthTech', 'IA', 'Télémédecine', 'B2C'],
      featured: true,
      likes: 234,
      views: 8901,
      comments: 56
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les catégories', icon: Briefcase },
    { id: 'mobile', name: 'Applications Mobile', icon: Code },
    { id: 'saas', name: 'SaaS', icon: Globe },
    { id: 'edtech', name: 'EdTech', icon: BookOpen },
    { id: 'healthtech', name: 'HealthTech', icon: Heart },
    { id: 'logistics', name: 'Logistique', icon: TrendingUp }
  ];

  const statuses = [
    { id: 'all', name: 'Tous les statuts' },
    { id: 'active', name: 'Actif' },
    { id: 'paused', name: 'En pause' },
    { id: 'completed', name: 'Terminé' }
  ];

  const technologies = [
    { id: 'all', name: 'Toutes les technologies' },
    { id: 'react', name: 'React' },
    { id: 'vue', name: 'Vue.js' },
    { id: 'angular', name: 'Angular' },
    { id: 'node', name: 'Node.js' },
    { id: 'python', name: 'Python' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    const matchesTech = selectedTech === 'all' || 
                       project.technologies.some(tech => 
                         tech.toLowerCase().includes(selectedTech.toLowerCase())
                       );
    
    return matchesSearch && matchesCategory && matchesStatus && matchesTech;
  });

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('detail');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedProjectId(null);
  };

  // Render project detail view
  if (currentView === 'detail' && selectedProjectId) {
    return (
      <ProjectDetail 
        projectId={selectedProjectId} 
        onBack={handleBackToList}
      />
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success-100 text-success-800';
      case 'paused': return 'bg-warning-100 text-warning-800';
      case 'completed': return 'bg-primary-100 text-primary-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Actif';
      case 'paused': return 'En pause';
      case 'completed': return 'Terminé';
      default: return status;
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Prototype': return 'bg-gray-100 text-gray-800';
      case 'MVP': return 'bg-blue-100 text-blue-800';
      case 'Seed': return 'bg-green-100 text-green-800';
      case 'Growth': return 'bg-purple-100 text-purple-800';
      case 'Exit': return 'bg-gold-100 text-gold-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6 md:mb-8 animate-fade-in-up">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl shadow-soft">
            <Target className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary-900">
              Projets Startup Academy
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Découvrez les projets innovants de notre communauté d'entrepreneurs
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-900">12</div>
            <div className="text-sm text-gray-600">Projets actifs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success-600">€890K</div>
            <div className="text-sm text-gray-600">Fonds levés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">45</div>
            <div className="text-sm text-gray-600">Entrepreneurs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold-600">3</div>
            <div className="text-sm text-gray-600">Exits réussis</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-4 md:p-6 mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un projet..."
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
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white transition-all duration-300"
            >
              {statuses.map(status => (
                <option key={status.id} value={status.id}>
                  {status.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white transition-all duration-300"
            >
              {technologies.map(tech => (
                <option key={tech.id} value={tech.id}>
                  {tech.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className="grid grid-cols-2 gap-1 w-4 h-4">
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className="space-y-1 w-4 h-4">
                <div className="bg-current h-1 rounded-sm"></div>
                <div className="bg-current h-1 rounded-sm"></div>
                <div className="bg-current h-1 rounded-sm"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Projects Grid/List */}
      <div className={`animate-fade-in-up ${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-6'
      }`} style={{ animationDelay: '0.2s' }}>
        {filteredProjects.map((project, index) => (
          <div key={project.id} className={`group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium transition-all duration-500 hover:scale-105 animate-slide-up ${
            viewMode === 'list' ? 'flex' : ''
          } ${project.featured ? 'ring-2 ring-gold-200' : ''}`} style={{ animationDelay: `${0.1 * index}s` }}>
            
            {project.featured && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 shadow-soft">
                  <Star className="h-3 w-3 fill-current" />
                  <span>Projet vedette</span>
                </div>
              </div>
            )}

            {viewMode === 'grid' ? (
              // Grid View
              <>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                        {getStatusLabel(project.status)}
                      </span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStageColor(project.stage)}`}>
                        {project.stage}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Team */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex -space-x-2">
                      {project.team.slice(0, 3).map((member) => (
                        <img
                          key={member.id}
                          src={member.avatar}
                          alt={member.name}
                          className="w-8 h-8 rounded-full border-2 border-white shadow-soft"
                          title={`${member.name} - ${member.role}`}
                        />
                      ))}
                      {project.team.length > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                          +{project.team.length - 3}
                        </div>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">
                      {project.team.length} membre{project.team.length > 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                    <div>
                      <div className="text-sm font-bold text-gray-900">{project.metrics.users}</div>
                      <div className="text-xs text-gray-500">Utilisateurs</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-success-600">{project.metrics.revenue}</div>
                      <div className="text-xs text-gray-500">Revenus</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary-600">{project.metrics.growth}</div>
                      <div className="text-xs text-gray-500">Croissance</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{project.comments}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Click handler for entire card */}
                <div 
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => handleProjectClick(project.id.toString())}
                />
              </>
            ) : (
              // List View
              <div className="flex w-full">
                <div className="relative w-48 flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-primary-900">
                          {project.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStageColor(project.stage)}`}>
                          {project.stage}
                        </span>
                        {project.featured && (
                          <div className="flex items-center space-x-1 text-gold-600">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="text-xs font-medium">Vedette</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>Depuis {formatDate(project.startDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{project.team.length} membres</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4" />
                          <span>{project.funding} levés</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-4">
                      <div className="flex space-x-2">
                        {project.links.website && (
                          <a
                            href={project.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                          >
                            <Globe className="h-4 w-4" />
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="grid grid-cols-3 gap-4 text-center mb-2">
                          <div>
                            <div className="text-sm font-bold text-gray-900">{project.metrics.users}</div>
                            <div className="text-xs text-gray-500">Users</div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-success-600">{project.metrics.revenue}</div>
                            <div className="text-xs text-gray-500">Revenue</div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-primary-600">{project.metrics.growth}</div>
                            <div className="text-xs text-gray-500">Growth</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{project.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{project.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{project.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Click handler for entire card */}
                <div 
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => handleProjectClick(project.id.toString())}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucun projet trouvé
          </h3>
          <p className="text-gray-500">
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center animate-fade-in-up">
        <div className="max-w-2xl mx-auto">
          <Zap className="h-12 w-12 mx-auto mb-4 text-gold-400" />
          <h2 className="text-2xl font-bold mb-4">
            Vous avez un projet innovant ?
          </h2>
          <p className="text-primary-100 mb-6">
            Rejoignez notre communauté d'entrepreneurs et donnez vie à vos idées avec le soutien de Startup Academy.
          </p>
          <button className="bg-white text-primary-700 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors font-medium shadow-soft hover:shadow-medium transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <Plus className="h-5 w-5" />
            <span>Soumettre mon projet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;