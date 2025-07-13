import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star,
  Filter,
  Search,
  ChevronDown,
  ExternalLink,
  Share2,
  Heart,
  Bookmark,
  Plus,
  Video,
  Coffee,
  Briefcase,
  Award,
  TrendingUp,
  Globe,
  User,
  CheckCircle,
  AlertCircle,
  Info,
  Zap,
  Target,
  Lightbulb,
  MessageCircle,
  Eye,
  Download,
  Bell,
  ArrowRight
} from 'lucide-react';

const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDate, setSelectedDate] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const events = [
    {
      id: 1,
      title: 'Startup Weekend Paris 2024',
      description: '54 heures pour créer une startup de A à Z avec des entrepreneurs passionnés',
      longDescription: 'Le Startup Weekend est l\'événement entrepreneurial le plus intense et enrichissant ! Pendant 54 heures non-stop, vous allez pitcher votre idée, former une équipe, développer un prototype et présenter votre startup devant un jury d\'experts. C\'est l\'occasion parfaite de tester votre idée, rencontrer des co-fondateurs potentiels et vivre l\'expérience startup en accéléré.',
      category: 'competition',
      type: 'presential',
      date: '2024-02-15',
      endDate: '2024-02-17',
      time: '18:00',
      endTime: '20:00',
      location: 'Station F, Paris',
      address: '5 Parvis Alan Turing, 75013 Paris',
      price: '€45',
      capacity: 120,
      registered: 89,
      organizer: {
        name: 'Startup Academy',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        verified: true
      },
      speakers: [
        {
          id: 1,
          name: 'Marcus Chen',
          role: 'Serial Entrepreneur',
          company: 'Chen Ventures',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          bio: 'Fondateur de 3 startups, investisseur et mentor'
        },
        {
          id: 2,
          name: 'Sophie Laurent',
          role: 'Growth Expert',
          company: 'Growth Lab',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          bio: 'Spécialiste en croissance et marketing digital'
        }
      ],
      image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      tags: ['Entrepreneuriat', 'Innovation', 'Networking', 'Competition'],
      featured: true,
      status: 'upcoming',
      registrationDeadline: '2024-02-10',
      agenda: [
        { time: '18:00', title: 'Accueil et networking', duration: '30min' },
        { time: '18:30', title: 'Pitchs des idées (60 secondes)', duration: '90min' },
        { time: '20:00', title: 'Formation des équipes', duration: '60min' },
        { time: '21:00', title: 'Début du développement', duration: 'Toute la nuit' }
      ],
      requirements: [
        'Laptop personnel obligatoire',
        'Motivation et énergie pour 54h',
        'Aucune compétence technique requise',
        'Esprit d\'équipe et collaboration'
      ],
      benefits: [
        'Mentorat par des experts',
        'Accès aux outils et ressources',
        'Networking avec 120 entrepreneurs',
        'Prix pour les meilleures startups',
        'Certificat de participation'
      ]
    },
    {
      id: 2,
      title: 'Webinaire : Lever des Fonds en 2024',
      description: 'Stratégies et conseils pratiques pour réussir sa levée de fonds',
      longDescription: 'Dans ce webinaire exclusif, découvrez les dernières tendances du financement startup en 2024. Nos experts partageront leurs stratégies éprouvées pour préparer votre pitch deck, identifier les bons investisseurs et négocier les meilleures conditions. Session interactive avec Q&A en direct.',
      category: 'webinar',
      type: 'online',
      date: '2024-02-08',
      time: '14:00',
      endTime: '15:30',
      location: 'En ligne',
      address: 'Lien Zoom envoyé par email',
      price: 'Gratuit',
      capacity: 500,
      registered: 342,
      organizer: {
        name: 'Marcus Chen',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        verified: true
      },
      speakers: [
        {
          id: 1,
          name: 'Marcus Chen',
          role: 'Investor & Mentor',
          company: 'Chen Ventures',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          bio: '€50M+ investis dans 200+ startups'
        },
        {
          id: 3,
          name: 'Marie Dubois',
          role: 'CFO & Finance Expert',
          company: 'FinanceFlow',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          bio: 'Experte en structuration financière'
        }
      ],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      tags: ['Financement', 'Investissement', 'Pitch', 'Stratégie'],
      featured: true,
      status: 'upcoming',
      registrationDeadline: '2024-02-07',
      agenda: [
        { time: '14:00', title: 'Introduction et contexte 2024', duration: '15min' },
        { time: '14:15', title: 'Préparer son pitch deck', duration: '30min' },
        { time: '14:45', title: 'Identifier les bons investisseurs', duration: '20min' },
        { time: '15:05', title: 'Négociation et due diligence', duration: '15min' },
        { time: '15:20', title: 'Q&A en direct', duration: '10min' }
      ],
      requirements: [
        'Connexion internet stable',
        'Avoir un projet de startup',
        'Questions préparées pour le Q&A'
      ],
      benefits: [
        'Template pitch deck offert',
        'Liste d\'investisseurs français',
        'Replay disponible 30 jours',
        'Accès au groupe privé',
        'Session de suivi individuelle'
      ]
    },
    {
      id: 3,
      title: 'Networking Entrepreneurs Tech',
      description: 'Soirée networking dédiée aux entrepreneurs du secteur tech',
      longDescription: 'Rejoignez-nous pour une soirée networking exclusive dédiée aux entrepreneurs tech ! Rencontrez des fondateurs, développeurs, designers et investisseurs dans une ambiance décontractée. Speed networking, présentations éclair et discussions libres autour d\'un cocktail.',
      category: 'networking',
      type: 'presential',
      date: '2024-02-12',
      time: '18:30',
      endTime: '21:30',
      location: 'Le Wagon Paris',
      address: '16 Villa Gaudelet, 75011 Paris',
      price: '€25',
      capacity: 80,
      registered: 67,
      organizer: {
        name: 'Tech Entrepreneurs Paris',
        avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        verified: true
      },
      speakers: [
        {
          id: 4,
          name: 'Thomas Dubois',
          role: 'CTO & Tech Lead',
          company: 'DevCraft Studio',
          avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          bio: 'Expert en architecture cloud et DevOps'
        }
      ],
      image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      tags: ['Tech', 'Networking', 'Startups', 'Innovation'],
      featured: false,
      status: 'upcoming',
      registrationDeadline: '2024-02-11',
      agenda: [
        { time: '18:30', title: 'Accueil et cocktail', duration: '30min' },
        { time: '19:00', title: 'Speed networking (3 rounds)', duration: '45min' },
        { time: '19:45', title: 'Pitchs éclair (2min/startup)', duration: '30min' },
        { time: '20:15', title: 'Networking libre et discussions', duration: '75min' }
      ],
      requirements: [
        'Être entrepreneur ou dans l\'écosystème tech',
        'Cartes de visite recommandées',
        'Pitch de 30 secondes préparé'
      ],
      benefits: [
        'Rencontres qualifiées',
        'Groupe WhatsApp post-événement',
        'Cocktail et snacks inclus',
        'Photos professionnelles',
        'Invitations événements futurs'
      ]
    },
    {
      id: 4,
      title: 'Masterclass : Growth Hacking',
      description: 'Techniques avancées de croissance pour startups',
      longDescription: 'Masterclass intensive sur les techniques de growth hacking les plus efficaces en 2024. Apprenez à identifier vos leviers de croissance, optimiser vos funnels et scaler votre startup avec un budget limité. Cas pratiques et outils concrets.',
      category: 'workshop',
      type: 'hybrid',
      date: '2024-02-20',
      time: '09:00',
      endTime: '17:00',
      location: 'Hybrid (Paris + Online)',
      address: 'WeWork Opéra, Paris + Zoom',
      price: '€150',
      capacity: 50,
      registered: 38,
      organizer: {
        name: 'Sophie Laurent',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        verified: true
      },
      speakers: [
        {
          id: 2,
          name: 'Sophie Laurent',
          role: 'Growth Expert',
          company: 'Growth Lab',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          bio: 'A aidé 100+ startups à scaler'
        }
      ],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      tags: ['Growth', 'Marketing', 'Scaling', 'Analytics'],
      featured: false,
      status: 'upcoming',
      registrationDeadline: '2024-02-18',
      agenda: [
        { time: '09:00', title: 'Accueil et introduction', duration: '30min' },
        { time: '09:30', title: 'Fondamentaux du growth hacking', duration: '90min' },
        { time: '11:00', title: 'Pause café', duration: '15min' },
        { time: '11:15', title: 'Optimisation des funnels', duration: '90min' },
        { time: '12:45', title: 'Déjeuner networking', duration: '60min' },
        { time: '13:45', title: 'Cas pratiques et exercices', duration: '120min' },
        { time: '15:45', title: 'Outils et automation', duration: '60min' },
        { time: '16:45', title: 'Q&A et conclusion', duration: '15min' }
      ],
      requirements: [
        'Laptop avec accès internet',
        'Avoir une startup ou projet',
        'Connaissances marketing de base',
        'Google Analytics configuré (optionnel)'
      ],
      benefits: [
        'Kit d\'outils growth complet',
        'Templates et frameworks',
        'Accès communauté privée',
        'Suivi personnalisé 30 jours',
        'Certificat de participation'
      ]
    },
    {
      id: 5,
      title: 'Demo Day Startup Academy',
      description: 'Présentation des meilleures startups de notre programme',
      longDescription: 'Événement phare de Startup Academy ! Découvrez les startups les plus prometteuses de notre programme d\'accélération. Pitchs de 5 minutes, démonstrations produits et networking avec investisseurs et partenaires. L\'occasion de découvrir les futures licornes !',
      category: 'demo',
      type: 'presential',
      date: '2024-03-05',
      time: '14:00',
      endTime: '18:00',
      location: 'Palais Brongniart, Paris',
      address: 'Place de la Bourse, 75002 Paris',
      price: 'Sur invitation',
      capacity: 200,
      registered: 156,
      organizer: {
        name: 'Startup Academy',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        verified: true
      },
      speakers: [
        {
          id: 1,
          name: 'Marcus Chen',
          role: 'Program Director',
          company: 'Startup Academy',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          bio: 'Directeur du programme d\'accélération'
        }
      ],
      image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      tags: ['Demo Day', 'Startups', 'Investissement', 'Innovation'],
      featured: true,
      status: 'upcoming',
      registrationDeadline: '2024-03-01',
      agenda: [
        { time: '14:00', title: 'Accueil et networking', duration: '30min' },
        { time: '14:30', title: 'Mot d\'ouverture', duration: '15min' },
        { time: '14:45', title: 'Pitchs startups (Batch 1)', duration: '45min' },
        { time: '15:30', title: 'Pause et démonstrations', duration: '30min' },
        { time: '16:00', title: 'Pitchs startups (Batch 2)', duration: '45min' },
        { time: '16:45', title: 'Panel investisseurs', duration: '30min' },
        { time: '17:15', title: 'Networking et cocktail', duration: '45min' }
      ],
      requirements: [
        'Invitation obligatoire',
        'Profil LinkedIn à jour',
        'Intérêt pour l\'investissement ou partenariats'
      ],
      benefits: [
        'Accès aux meilleures startups',
        'Networking investisseurs',
        'Pitch decks des startups',
        'Suivi post-événement',
        'Invitations événements VIP'
      ]
    },
    {
      id: 6,
      title: 'Café Entrepreneurs Matinal',
      description: 'Petit-déjeuner networking mensuel pour entrepreneurs',
      longDescription: 'Commencez votre mois du bon pied ! Rejoignez notre petit-déjeuner networking mensuel dans une ambiance décontractée. Échanges informels, partage d\'expériences et nouvelles rencontres autour d\'un café et viennoiseries.',
      category: 'networking',
      type: 'presential',
      date: '2024-02-01',
      time: '08:00',
      endTime: '10:00',
      location: 'Café de Flore, Paris',
      address: '172 Boulevard Saint-Germain, 75006 Paris',
      price: '€15',
      capacity: 30,
      registered: 28,
      organizer: {
        name: 'Entrepreneurs Paris',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        verified: true
      },
      speakers: [],
      image: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      tags: ['Networking', 'Petit-déjeuner', 'Informel', 'Mensuel'],
      featured: false,
      status: 'past',
      registrationDeadline: '2024-01-30',
      agenda: [
        { time: '08:00', title: 'Accueil et petit-déjeuner', duration: '30min' },
        { time: '08:30', title: 'Tour de table (1min/personne)', duration: '30min' },
        { time: '09:00', title: 'Networking libre', duration: '60min' }
      ],
      requirements: [
        'Être entrepreneur ou porteur de projet',
        'Ponctualité appréciée'
      ],
      benefits: [
        'Petit-déjeuner inclus',
        'Ambiance décontractée',
        'Groupe WhatsApp',
        'Rendez-vous mensuel'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Toutes les catégories', icon: Calendar },
    { id: 'webinar', name: 'Webinaires', icon: Video },
    { id: 'workshop', name: 'Ateliers', icon: Briefcase },
    { id: 'networking', name: 'Networking', icon: Users },
    { id: 'competition', name: 'Compétitions', icon: Award },
    { id: 'demo', name: 'Demo Days', icon: TrendingUp }
  ];

  const types = [
    { id: 'all', name: 'Tous les formats' },
    { id: 'online', name: 'En ligne' },
    { id: 'presential', name: 'Présentiel' },
    { id: 'hybrid', name: 'Hybride' }
  ];

  const dateFilters = [
    { id: 'all', name: 'Toutes les dates' },
    { id: 'today', name: 'Aujourd\'hui' },
    { id: 'week', name: 'Cette semaine' },
    { id: 'month', name: 'Ce mois' },
    { id: 'upcoming', name: 'À venir' }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesType = selectedType === 'all' || event.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'webinar': return 'bg-blue-100 text-blue-800';
      case 'workshop': return 'bg-purple-100 text-purple-800';
      case 'networking': return 'bg-green-100 text-green-800';
      case 'competition': return 'bg-red-100 text-red-800';
      case 'demo': return 'bg-gold-100 text-gold-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'online': return Globe;
      case 'presential': return MapPin;
      case 'hybrid': return Zap;
      default: return Calendar;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-success-100 text-success-800';
      case 'ongoing': return 'bg-warning-100 text-warning-800';
      case 'past': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'upcoming': return 'À venir';
      case 'ongoing': return 'En cours';
      case 'past': return 'Terminé';
      default: return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return timeString;
  };

  const isEventSoldOut = (event: any) => {
    return event.registered >= event.capacity;
  };

  const getRegistrationStatus = (event: any) => {
    if (event.price === 'Sur invitation') return 'invitation';
    if (isEventSoldOut(event)) return 'soldout';
    if (new Date(event.registrationDeadline) < new Date()) return 'closed';
    return 'open';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6 md:mb-8 animate-fade-in-up">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl shadow-soft">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-primary-900">
              Événements Startup Academy
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Participez aux événements qui façonnent l'écosystème entrepreneurial
            </p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">24</div>
            <div className="text-sm text-gray-600">Événements ce mois</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success-600">1,250</div>
            <div className="text-sm text-gray-600">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">85%</div>
            <div className="text-sm text-gray-600">Taux satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gold-600">150+</div>
            <div className="text-sm text-gray-600">Speakers experts</div>
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
              placeholder="Rechercher un événement..."
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
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white transition-all duration-300"
            >
              {types.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white transition-all duration-300"
            >
              {dateFilters.map(filter => (
                <option key={filter.id} value={filter.id}>
                  {filter.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {filteredEvents.length} événement{filteredEvents.length > 1 ? 's' : ''} trouvé{filteredEvents.length > 1 ? 's' : ''}
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

      {/* Events Grid/List */}
      <div className={`animate-fade-in-up ${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-6'
      }`} style={{ animationDelay: '0.2s' }}>
        {filteredEvents.map((event, index) => {
          const TypeIcon = getTypeIcon(event.type);
          const registrationStatus = getRegistrationStatus(event);
          
          return (
            <div key={event.id} className={`group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium transition-all duration-500 hover:scale-105 animate-slide-up ${
              viewMode === 'list' ? 'flex' : ''
            } ${event.featured ? 'ring-2 ring-purple-200' : ''}`} style={{ animationDelay: `${0.1 * index}s` }}>
              
              {event.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 shadow-soft">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Événement phare</span>
                  </div>
                </div>
              )}

              {viewMode === 'grid' ? (
                // Grid View
                <>
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <div className="flex flex-col space-y-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                          {getStatusLabel(event.status)}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center space-x-2 text-sm text-gray-800">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                          <Clock className="h-4 w-4" />
                          <span>{formatTime(event.time)} - {formatTime(event.endTime)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary-900 mb-2 line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <TypeIcon className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        <span>{event.registered}/{event.capacity} participants</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        <span>Par {event.organizer.name}</span>
                        {event.organizer.verified && (
                          <CheckCircle className="h-3 w-3 text-blue-600" />
                        )}
                      </div>
                    </div>

                    {/* Speakers */}
                    {event.speakers.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex -space-x-2">
                            {event.speakers.slice(0, 3).map((speaker) => (
                              <img
                                key={speaker.id}
                                src={speaker.avatar}
                                alt={speaker.name}
                                className="w-6 h-6 rounded-full border-2 border-white shadow-soft"
                                title={`${speaker.name} - ${speaker.role}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            {event.speakers.length} speaker{event.speakers.length > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                      {event.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{event.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Price and Registration */}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary-900">
                        {event.price}
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Heart className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                          <Share2 className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors">
                          <Bookmark className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Registration Button */}
                    <div className="mt-4">
                      {registrationStatus === 'soldout' ? (
                        <button disabled className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl cursor-not-allowed">
                          Complet
                        </button>
                      ) : registrationStatus === 'closed' ? (
                        <button disabled className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl cursor-not-allowed">
                          Inscriptions fermées
                        </button>
                      ) : registrationStatus === 'invitation' ? (
                        <button className="w-full bg-gradient-to-r from-gold-600 to-gold-700 text-white py-3 rounded-xl hover:from-gold-700 hover:to-gold-800 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105">
                          Demander une invitation
                        </button>
                      ) : (
                        <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105">
                          S'inscrire
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                // List View
                <div className="flex w-full">
                  <div className="relative w-64 flex-shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <div className="text-xs text-gray-800 font-medium">
                          {formatDate(event.date)}
                        </div>
                        <div className="text-xs text-gray-600">
                          {formatTime(event.time)} - {formatTime(event.endTime)}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-primary-900">
                            {event.title}
                          </h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                            {getStatusLabel(event.status)}
                          </span>
                          {event.featured && (
                            <div className="flex items-center space-x-1 text-purple-600">
                              <Star className="h-4 w-4 fill-current" />
                              <span className="text-xs font-medium">Phare</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {event.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <TypeIcon className="h-4 w-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4" />
                            <span>{event.registered}/{event.capacity} participants</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>Par {event.organizer.name}</span>
                            {event.organizer.verified && (
                              <CheckCircle className="h-3 w-3 text-blue-600" />
                            )}
                          </div>
                          <div className="text-lg font-bold text-primary-900">
                            {event.price}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {event.tags.slice(0, 4).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                          {event.tags.length > 4 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{event.tags.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end space-y-4 ml-6">
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                            <Heart className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <Share2 className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gold-600 hover:bg-gold-50 rounded-lg transition-colors">
                            <Bookmark className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="w-48">
                          {registrationStatus === 'soldout' ? (
                            <button disabled className="w-full bg-gray-300 text-gray-500 py-2 rounded-xl cursor-not-allowed text-sm">
                              Complet
                            </button>
                          ) : registrationStatus === 'closed' ? (
                            <button disabled className="w-full bg-gray-300 text-gray-500 py-2 rounded-xl cursor-not-allowed text-sm">
                              Inscriptions fermées
                            </button>
                          ) : registrationStatus === 'invitation' ? (
                            <button className="w-full bg-gradient-to-r from-gold-600 to-gold-700 text-white py-2 rounded-xl hover:from-gold-700 hover:to-gold-800 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105 text-sm">
                              Demander invitation
                            </button>
                          ) : (
                            <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-2 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105 text-sm">
                              S'inscrire
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucun événement trouvé
          </h3>
          <p className="text-gray-500">
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 text-white text-center animate-fade-in-up">
        <div className="max-w-2xl mx-auto">
          <Lightbulb className="h-12 w-12 mx-auto mb-4 text-gold-400" />
          <h2 className="text-2xl font-bold mb-4">
            Vous organisez un événement ?
          </h2>
          <p className="text-purple-100 mb-6">
            Partagez votre événement avec la communauté Startup Academy et touchez des centaines d'entrepreneurs passionnés.
          </p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors font-medium shadow-soft hover:shadow-medium transform hover:scale-105 flex items-center space-x-2 mx-auto">
            <Plus className="h-5 w-5" />
            <span>Proposer un événement</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;