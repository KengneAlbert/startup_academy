import React, { useState } from 'react';
import {
  ArrowLeft,
  MapPin,
  Briefcase,
  Calendar,
  Star,
  MessageCircle,
  Phone,
  Mail,
  Globe,
  Linkedin,
  Twitter,
  Github,
  Users,
  Award,
  TrendingUp,
  Download,
  ExternalLink,
  Heart,
  Share2,
  MoreHorizontal,
  Building,
  GraduationCap,
  Target,
  Eye,
  CheckCircle,
  Clock,
  FileText,
  Code,
  Lightbulb,
  X,
  Send,
  UserPlus,
  Flag,
  Shield
} from 'lucide-react';

interface MemberProfileProps {
  memberId: string;
  onBack: () => void;
}

const MemberProfile: React.FC<MemberProfileProps> = ({ memberId, onBack }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [showContactModal, setShowContactModal] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [contactMessage, setContactMessage] = useState('');

  // Mock member data - in real app, fetch by memberId
  const member = {
    id: 1,
    name: "Alain Tchouamo",
    profession: "UX Designer & Product Manager",
    company: "TechFlow Solutions",
    location: "Douala, Cameroun",
    sector: "tech",
    bio: "Passionné par la création d'expériences utilisateur exceptionnelles. 8 ans d'expérience dans le design de produits digitaux pour le marché africain. J'aide les startups à créer des produits centrés sur l'utilisateur.",
    skills: [
      "UX Design",
      "Product Management", 
      "Figma",
      "User Research",
      "Prototyping",
      "Design System",
      "Mobile Design",
      "Usability Testing"
    ],
    experience: "8 ans",
    avatar: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    coverImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    rating: 4.9,
    connections: 156,
    followers: 342,
    following: 89,
    projects: 23,
    isOnline: true,
    joinDate: "2023-01-15",
    lastActive: "2025-01-20T15:30:00Z",
    verified: true,
    socialLinks: {
      linkedin: "https://linkedin.com/in/alain-tchouamo",
      twitter: "https://twitter.com/alain_ux",
      website: "https://alaintchouamo.design",
      github: "https://github.com/alain-tchouamo"
    },
    contact: {
      email: "alain@techflow.cm",
      phone: "+237 6 91 23 45 67",
      website: "https://alaintchouamo.design"
    },
    services: [
      {
        id: 1,
        title: "Audit UX/UI",
        description: "Analyse complète de votre interface utilisateur avec recommandations d'amélioration",
        price: "150,000 FCFA",
        duration: "1-2 semaines",
        category: "Audit"
      },
      {
        id: 2,
        title: "Design System",
        description: "Création d'un système de design cohérent pour votre produit",
        price: "500,000 FCFA",
        duration: "3-4 semaines", 
        category: "Design"
      },
      {
        id: 3,
        title: "Formation UX",
        description: "Formation de votre équipe aux bonnes pratiques UX/UI",
        price: "75,000 FCFA/jour",
        duration: "Variable",
        category: "Formation"
      }
    ],
    portfolio: [
      {
        id: 1,
        title: "App Mobile Banking",
        description: "Interface mobile pour une banque camerounaise",
        image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        category: "Mobile App",
        year: "2024",
        client: "Afriland First Bank"
      },
      {
        id: 2,
        title: "Plateforme E-commerce",
        description: "Design d'une marketplace pour produits locaux",
        image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        category: "Web App",
        year: "2024",
        client: "CamerMarket"
      },
      {
        id: 3,
        title: "Dashboard Analytics",
        description: "Interface de tableau de bord pour startup fintech",
        image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        category: "Dashboard",
        year: "2023",
        client: "PayTech Solutions"
      }
    ],
    experience: [
      {
        id: 1,
        title: "Senior UX Designer",
        company: "TechFlow Solutions",
        location: "Douala, Cameroun",
        startDate: "2022-01",
        endDate: null,
        current: true,
        description: "Lead UX pour les produits digitaux, gestion d'équipe design, recherche utilisateur."
      },
      {
        id: 2,
        title: "Product Designer",
        company: "Digital Africa",
        location: "Yaoundé, Cameroun", 
        startDate: "2019-06",
        endDate: "2021-12",
        current: false,
        description: "Design d'interfaces pour applications mobiles et web, prototypage, tests utilisateur."
      }
    ],
    education: [
      {
        id: 1,
        degree: "Master en Design Interactif",
        school: "École Supérieure d'Art de Douala",
        year: "2017",
        location: "Douala, Cameroun"
      }
    ],
    testimonials: [
      {
        id: 1,
        author: "Marie Kamdem",
        role: "CEO, StartupCam",
        avatar: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        content: "Alain a transformé notre produit. Son approche UX centrée utilisateur a augmenté notre engagement de 300%.",
        rating: 5,
        date: "2024-12"
      },
      {
        id: 2,
        author: "Paul Etoga",
        role: "CTO, FinTech Pro",
        avatar: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        content: "Excellent travail sur notre dashboard. Interface intuitive et design moderne. Je recommande vivement !",
        rating: 5,
        date: "2024-11"
      }
    ],
    stats: [
      { label: 'Projets réalisés', value: '23', icon: Target, color: 'text-blue-600' },
      { label: 'Clients satisfaits', value: '18', icon: Users, color: 'text-green-600' },
      { label: 'Années d\'expérience', value: '8', icon: Award, color: 'text-purple-600' },
      { label: 'Note moyenne', value: '4.9', icon: Star, color: 'text-gold-600' }
    ]
  };

  const tabs = [
    { id: 'about', label: 'À propos', icon: Users },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'portfolio', label: 'Portfolio', icon: Eye },
    { id: 'experience', label: 'Expérience', icon: Award },
    { id: 'testimonials', label: 'Témoignages', icon: Star }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
  };

  const calculateDuration = (startDate: string, endDate: string | null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth();
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years > 0) {
      return remainingMonths > 0 ? `${years} an${years > 1 ? 's' : ''} ${remainingMonths} mois` : `${years} an${years > 1 ? 's' : ''}`;
    }
    return `${months} mois`;
  };

  const getAvailabilityStatus = () => {
    return member.isOnline ? 'En ligne' : `Vu ${formatTimeAgo(member.lastActive)}`;
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'à l\'instant';
    if (diffInHours < 24) return `il y a ${diffInHours}h`;
    return `il y a ${Math.floor(diffInHours / 24)}j`;
  };

  const handleSendMessage = () => {
    if (contactMessage.trim()) {
      // Logic to send message
      console.log('Sending message:', contactMessage);
      setContactMessage('');
      setShowContactModal(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors group"
      >
        <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        <span>Retour aux membres</span>
      </button>

      {/* Profile Header */}
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-soft border border-gray-100 overflow-hidden mb-6 md:mb-8 animate-fade-in-up">
        {/* Cover Image */}
        <div className="relative h-48 md:h-64 bg-gradient-to-r from-primary-600 to-primary-800">
          <img
            src={member.coverImage}
            alt="Cover"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Profile Info */}
        <div className="relative px-4 md:px-8 pb-6 md:pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between -mt-12 md:-mt-16 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl object-cover ring-4 ring-white shadow-large"
                />
                {member.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success-500 rounded-full border-4 border-white"></div>
                )}
                {member.verified && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-primary-900">{member.name}</h1>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-gold-500 fill-current" />
                    <span className="text-base md:text-lg font-semibold text-gray-700">{member.rating}</span>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-700 mb-2">{member.profession}</p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Building className="h-4 w-4" />
                    <span>{member.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Membre depuis {new Date(member.joinDate).getFullYear()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span className={member.isOnline ? 'text-success-600' : 'text-gray-500'}>
                      {getAvailabilityStatus()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mt-6 lg:mt-0">
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 md:px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium transform hover:scale-105 text-sm md:text-base"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Envoyer un message</span>
              </button>
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`px-4 md:px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium text-sm md:text-base ${
                  isFollowing
                    ? 'bg-success-100 text-success-700 hover:bg-success-200'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <UserPlus className="h-5 w-5" />
                <span>{isFollowing ? 'Suivi' : 'Suivre'}</span>
              </button>
              <div className="flex space-x-2">
                <button className="bg-gray-100 text-gray-700 p-3 rounded-xl hover:bg-gray-200 transition-colors">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="bg-gray-100 text-gray-700 p-3 rounded-xl hover:bg-gray-200 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="bg-gray-100 text-gray-700 p-3 rounded-xl hover:bg-gray-200 transition-colors">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100">
            {member.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center mb-2">
                    <Icon className={`h-6 w-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-primary-900">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm font-medium border-b-2 transition-all duration-300 whitespace-nowrap ${
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
      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {/* About Tab */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">À propos</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{member.bio}</p>
                
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Compétences</h3>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full hover:bg-primary-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-6">Formation</h2>
                <div className="space-y-4">
                  {member.education.map((edu) => (
                    <div key={edu.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="bg-primary-100 p-2 rounded-xl">
                        <GraduationCap className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.school}</p>
                        <p className="text-sm text-gray-500">{edu.location} • {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-primary-900 mb-4">Contact</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{member.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{member.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <a href={member.contact.website} className="text-sm text-primary-600 hover:text-primary-700">
                      {member.contact.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-primary-900 mb-4">Réseaux sociaux</h2>
                <div className="space-y-3">
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-blue-700 group-hover:text-blue-800">LinkedIn</span>
                      <ExternalLink className="h-3 w-3 text-blue-500 ml-auto" />
                    </a>
                  )}
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group"
                    >
                      <Twitter className="h-5 w-5 text-sky-600" />
                      <span className="text-sm text-sky-700 group-hover:text-sky-800">Twitter</span>
                      <ExternalLink className="h-3 w-3 text-sky-500 ml-auto" />
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                    >
                      <Github className="h-5 w-5 text-gray-600" />
                      <span className="text-sm text-gray-700 group-hover:text-gray-800">GitHub</span>
                      <ExternalLink className="h-3 w-3 text-gray-500 ml-auto" />
                    </a>
                  )}
                  {member.socialLinks.website && (
                    <a
                      href={member.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                    >
                      <Globe className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-green-700 group-hover:text-green-800">Site web</span>
                      <ExternalLink className="h-3 w-3 text-green-500 ml-auto" />
                    </a>
                  )}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-primary-900 mb-4">Statistiques</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Connexions</span>
                    <span className="font-semibold">{member.connections}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Abonnés</span>
                    <span className="font-semibold">{member.followers}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Abonnements</span>
                    <span className="font-semibold">{member.following}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Expérience</span>
                    <span className="font-semibold">{member.experience}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {member.services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-medium transition-all duration-300 hover:scale-105 animate-slide-up">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <Briefcase className="h-6 w-6 text-primary-600" />
                  </div>
                  <span className="px-3 py-1 bg-gold-100 text-gold-800 text-xs rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-lg font-bold text-primary-900">{service.price}</div>
                </div>
                <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-medium shadow-soft hover:shadow-medium transform hover:scale-105">
                  Demander un devis
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {member.portfolio.map((project) => (
              <div key={project.id} className="group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium transition-all duration-500 hover:scale-105 animate-slide-up">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-black/75 backdrop-blur-sm text-white text-xs rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 backdrop-blur-sm text-primary-600 p-3 rounded-full shadow-large hover:bg-white transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Client: {project.client}</span>
                    <button className="text-primary-600 hover:text-primary-700 transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="space-y-8">
              {member.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {index !== member.experience.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200"></div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      exp.current ? 'bg-primary-100' : 'bg-gray-100'
                    }`}>
                      <Briefcase className={`h-6 w-6 ${
                        exp.current ? 'text-primary-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-primary-900">{exp.title}</h3>
                          <p className="text-gray-700">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">
                            {formatDate(exp.startDate)} - {exp.current ? 'Présent' : formatDate(exp.endDate!)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {calculateDuration(exp.startDate, exp.endDate)}
                          </div>
                          {exp.current && (
                            <span className="inline-block mt-1 px-2 py-1 bg-success-100 text-success-800 text-xs rounded-full">
                              Actuel
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {member.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-medium transition-all duration-300 animate-slide-up">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-soft"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary-900">{testimonial.author}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-primary-900">
                Contacter {member.name}
              </h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-gray-900">{member.name}</div>
                <div className="text-sm text-gray-500">{member.profession}</div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Objet de votre message"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 px-4 py-3 text-gray-700 bg-gray-200 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!contactMessage.trim()}
                  className="flex-1 px-4 py-3 text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-soft hover:shadow-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Envoyer</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberProfile;