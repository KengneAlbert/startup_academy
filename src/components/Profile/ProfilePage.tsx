import React, { useState } from 'react';
import { 
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
  Edit,
  Camera,
  Plus,
  Award,
  Users,
  TrendingUp,
  Download,
  ExternalLink,
  Check,
  X,
  Save,
  Eye,
  Heart,
  Share2,
  MoreHorizontal,
  Building,
  GraduationCap,
  Target,
  Zap,
  Clock,
  FileText
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [showContactModal, setShowContactModal] = useState(false);

  // Mock data pour le profil complet
  const profileData = {
    ...user,
    coverImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
    company: 'TechFlow Solutions',
    website: 'https://alicejohnson.design',
    phone: '+33 6 12 34 56 78',
    email: user?.email || 'alice@techflow.com',
    followers: 1247,
    following: 456,
    connections: 892,
    profileViews: 2341,
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alice-johnson',
      twitter: 'https://twitter.com/alice_ux',
      github: 'https://github.com/alice-johnson',
      website: 'https://alicejohnson.design'
    },
    services: [
      {
        id: 1,
        title: 'Audit UX/UI',
        description: 'Analyse complète de votre interface utilisateur avec recommandations détaillées',
        price: '€500-1500',
        duration: '1-2 semaines',
        category: 'UX Design'
      },
      {
        id: 2,
        title: 'Design System',
        description: 'Création d\'un système de design cohérent pour votre produit',
        price: '€2000-5000',
        duration: '3-4 semaines',
        category: 'Design System'
      },
      {
        id: 3,
        title: 'Formation Équipe',
        description: 'Formation de vos équipes aux bonnes pratiques UX/UI',
        price: '€800/jour',
        duration: '1-3 jours',
        category: 'Formation'
      }
    ],
    experience: [
      {
        id: 1,
        title: 'Senior UX Designer',
        company: 'TechFlow Solutions',
        location: 'Paris, France',
        startDate: '2022-01',
        endDate: null,
        current: true,
        description: 'Lead UX pour les produits B2B, gestion d\'une équipe de 4 designers, refonte complète de l\'interface utilisateur.',
        achievements: [
          'Augmentation de 40% de la satisfaction utilisateur',
          'Réduction de 60% du temps de formation',
          'Mise en place du design system'
        ]
      },
      {
        id: 2,
        title: 'UX Designer',
        company: 'StartupLab',
        location: 'Lyon, France',
        startDate: '2019-06',
        endDate: '2021-12',
        current: false,
        description: 'Design d\'interfaces pour startups tech, recherche utilisateur, prototypage.',
        achievements: [
          'Design de 15+ applications mobiles',
          'Conduite de 200+ entretiens utilisateurs',
          'Certification Google UX Design'
        ]
      },
      {
        id: 3,
        title: 'Junior Designer',
        company: 'Creative Agency',
        location: 'Marseille, France',
        startDate: '2017-09',
        endDate: '2019-05',
        current: false,
        description: 'Design graphique et web, création de supports marketing.',
        achievements: [
          'Création de 50+ identités visuelles',
          'Gestion de projets clients',
          'Formation en design thinking'
        ]
      }
    ],
    education: [
      {
        id: 1,
        degree: 'Master UX Design',
        school: 'École Supérieure de Design',
        location: 'Paris, France',
        year: '2017',
        description: 'Spécialisation en design d\'interaction et recherche utilisateur'
      },
      {
        id: 2,
        degree: 'Licence Design Graphique',
        school: 'Université des Arts',
        location: 'Lyon, France',
        year: '2015',
        description: 'Formation complète en design graphique et communication visuelle'
      }
    ],
    certifications: [
      {
        id: 1,
        name: 'Google UX Design Certificate',
        issuer: 'Google',
        date: '2023',
        credentialId: 'GUX-2023-001'
      },
      {
        id: 2,
        name: 'Certified Usability Analyst',
        issuer: 'Human Factors International',
        date: '2022',
        credentialId: 'CUA-2022-456'
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'App Mobile E-commerce',
        description: 'Refonte complète de l\'expérience mobile pour une plateforme e-commerce',
        image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Mobile App',
        year: '2023',
        client: 'ShopFlow'
      },
      {
        id: 2,
        title: 'Dashboard Analytics',
        description: 'Interface de visualisation de données pour startup fintech',
        image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Web App',
        year: '2023',
        client: 'FinTech Pro'
      },
      {
        id: 3,
        title: 'Site Web Corporate',
        description: 'Refonte du site institutionnel avec focus sur la conversion',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        category: 'Website',
        year: '2022',
        client: 'TechCorp'
      }
    ],
    testimonials: [
      {
        id: 1,
        author: 'Marcus Chen',
        role: 'CEO, TechFlow',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        content: 'Alice a transformé notre produit. Son approche méthodique et sa créativité ont permis d\'améliorer significativement l\'expérience utilisateur.',
        rating: 5,
        date: '2023-12'
      },
      {
        id: 2,
        author: 'Sophie Laurent',
        role: 'Product Manager, StartupLab',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        content: 'Collaboration exceptionnelle ! Alice comprend parfaitement les enjeux business et traduit les besoins en solutions design élégantes.',
        rating: 5,
        date: '2023-11'
      }
    ]
  };

  const tabs = [
    { id: 'about', label: 'À propos', icon: Users },
    { id: 'services', label: 'Services', icon: Briefcase },
    { id: 'experience', label: 'Expérience', icon: Award },
    { id: 'portfolio', label: 'Portfolio', icon: Eye },
    { id: 'testimonials', label: 'Témoignages', icon: Star }
  ];

  const stats = [
    { label: 'Connexions', value: profileData.connections, icon: Users, color: 'text-blue-600' },
    { label: 'Vues du profil', value: profileData.profileViews, icon: Eye, color: 'text-green-600' },
    { label: 'Abonnés', value: profileData.followers, icon: Heart, color: 'text-red-600' },
    { label: 'Projets', value: '23', icon: Briefcase, color: 'text-purple-600' }
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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Cover Image & Profile Header */}
      <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-soft border border-gray-100 overflow-hidden mb-6 md:mb-8 animate-fade-in-up">
        {/* Cover Image */}
        <div className="relative h-48 md:h-64 bg-gradient-to-r from-primary-600 to-primary-800">
          <img
            src={profileData.coverImage}
            alt="Cover"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          {isEditing && (
            <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-xl hover:bg-white/30 transition-colors">
              <Camera className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Profile Info */}
        <div className="relative px-4 md:px-8 pb-6 md:pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between -mt-12 md:-mt-16 relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl object-cover ring-4 ring-white shadow-large"
                />
                {isEditing && (
                  <button className="absolute bottom-2 right-2 bg-primary-600 text-white p-2 rounded-xl hover:bg-primary-700 transition-colors shadow-soft">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Basic Info */}
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h1 className="text-2xl md:text-3xl font-bold text-primary-900">{profileData.name}</h1>
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-gold-500 fill-current" />
                    <span className="text-base md:text-lg font-semibold text-gray-700">4.9</span>
                  </div>
                </div>
                <p className="text-lg md:text-xl text-gray-700 mb-2">{profileData.profession}</p>
                <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm md:text-base text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Building className="h-4 w-4" />
                    <span>{profileData.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{profileData.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Membre depuis {new Date(profileData.joinDate).getFullYear()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mt-6 lg:mt-0">
              {!isEditing ? (
                <>
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 md:px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium transform hover:scale-105 text-sm md:text-base"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Contacter</span>
                  </button>
                  <button className="bg-white border border-gray-200 text-gray-700 px-4 md:px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium text-sm md:text-base">
                    <Users className="h-5 w-5" />
                    <span>Se connecter</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-gray-100 text-gray-700 p-3 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gradient-to-r from-success-600 to-success-700 text-white px-4 md:px-6 py-3 rounded-xl hover:from-success-700 hover:to-success-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium text-sm md:text-base"
                  >
                    <Save className="h-5 w-5" />
                    <span>Sauvegarder</span>
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-100 text-gray-700 px-4 md:px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"
                  >
                    <X className="h-5 w-5" />
                    <span>Annuler</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center mb-2">
                    <Icon className={`h-6 w-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-primary-900">{stat.value.toLocaleString()}</div>
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
                <p className="text-gray-700 leading-relaxed">
                  {profileData.bio}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {profileData.skills?.map((skill, index) => (
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
                  {profileData.education.map((edu) => (
                    <div key={edu.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="bg-primary-100 p-2 rounded-xl">
                        <GraduationCap className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                        <p className="text-gray-600">{edu.school}</p>
                        <p className="text-sm text-gray-500">{edu.location} • {edu.year}</p>
                        <p className="text-sm text-gray-600 mt-2">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-6">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profileData.certifications.map((cert) => (
                    <div key={cert.id} className="p-4 bg-gradient-to-r from-gold-50 to-gold-100 rounded-xl border border-gold-200">
                      <div className="flex items-start space-x-3">
                        <div className="bg-gold-200 p-2 rounded-lg">
                          <Award className="h-4 w-4 text-gold-700" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm">{cert.name}</h3>
                          <p className="text-sm text-gray-600">{cert.issuer}</p>
                          <p className="text-xs text-gray-500 mt-1">{cert.date} • ID: {cert.credentialId}</p>
                        </div>
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
                    <span className="text-sm text-gray-700">{profileData.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{profileData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <a href={profileData.website} className="text-sm text-primary-600 hover:text-primary-700">
                      {profileData.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-primary-900 mb-4">Réseaux sociaux</h2>
                <div className="space-y-3">
                  {profileData.socialLinks.linkedin && (
                    <a
                      href={profileData.socialLinks.linkedin}
                      className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-blue-700 group-hover:text-blue-800">LinkedIn</span>
                      <ExternalLink className="h-3 w-3 text-blue-500 ml-auto" />
                    </a>
                  )}
                  {profileData.socialLinks.twitter && (
                    <a
                      href={profileData.socialLinks.twitter}
                      className="flex items-center space-x-3 p-3 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors group"
                    >
                      <Twitter className="h-5 w-5 text-sky-600" />
                      <span className="text-sm text-sky-700 group-hover:text-sky-800">Twitter</span>
                      <ExternalLink className="h-3 w-3 text-sky-500 ml-auto" />
                    </a>
                  )}
                  {profileData.socialLinks.github && (
                    <a
                      href={profileData.socialLinks.github}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                    >
                      <Github className="h-5 w-5 text-gray-600" />
                      <span className="text-sm text-gray-700 group-hover:text-gray-800">GitHub</span>
                      <ExternalLink className="h-3 w-3 text-gray-500 ml-auto" />
                    </a>
                  )}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-primary-900 mb-4">Actions rapides</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors text-left">
                    <Download className="h-4 w-4 text-primary-600" />
                    <span className="text-sm text-primary-700">Télécharger CV</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-gold-50 rounded-xl hover:bg-gold-100 transition-colors text-left">
                    <Share2 className="h-4 w-4 text-gold-600" />
                    <span className="text-sm text-gold-700">Partager profil</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors text-left">
                    <MoreHorizontal className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Plus d'options</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.services.map((service) => (
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

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="space-y-8">
              {profileData.experience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {index !== profileData.experience.length - 1 && (
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
                      <p className="text-gray-600 mb-4">{exp.description}</p>
                      {exp.achievements && (
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Réalisations clés :</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                <Check className="h-4 w-4 text-success-600 mt-0.5 flex-shrink-0" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.portfolio.map((project) => (
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

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {profileData.testimonials.map((testimonial) => (
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
                Contacter {profileData.name}
              </h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
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
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 px-4 py-3 text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-soft hover:shadow-medium"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;