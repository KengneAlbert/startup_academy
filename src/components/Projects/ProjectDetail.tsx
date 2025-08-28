import React, { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Globe,
  Heart,
  Share2,
  MessageCircle,
  Star,
  Users,
  Calendar,
  TrendingUp,
  Award,
  Target,
  Zap,
  Eye,
  Download,
  Play,
  Code,
  Lightbulb,
  FileText,
  Mail,
  Linkedin,
  Twitter,
  MapPin,
  Building,
  DollarSign,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Info,
  Bookmark,
  Flag,
  ThumbsUp,
  Send,
  Plus,
  Edit,
  Settings,
} from "lucide-react";
import Claudel from '../../assets/formations.jpg';
import Formation from '../../assets/siege_cote_ivoire1.jpg';
import Equipe from '../../assets/equipe.jpg';
import DrClaudel from '../../assets/claudel.jpg';

interface ProjectDetailProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onBack }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [newComment, setNewComment] = useState("");

  // Mock project data - in real app, fetch by projectId
  const project = {
    id: 1,
    title: "EcoTrack - Suivi Carbone Personnel",
    tagline: "Réduisez votre empreinte carbone avec gamification",
    description:
      "Application mobile pour suivre et réduire son empreinte carbone quotidienne avec gamification et conseils personnalisés.",
    longDescription:
      "EcoTrack est une application mobile innovante qui permet aux utilisateurs de suivre leur empreinte carbone quotidienne de manière ludique et engageante. Grâce à un système de gamification avancé, les utilisateurs sont motivés à adopter des comportements plus écologiques. L'application propose des défis personnalisés, des conseils pratiques et un système de récompenses pour encourager les bonnes pratiques environnementales.",
    category: "mobile",
    status: "active",
    stage: "MVP",
    featured: true,
    image:
      Formation,
    gallery: [
      Formation,
      Claudel,
      Equipe,
    ],
    team: [
      {
        id: 1,
        name: "Dr. Fotso",
        role: "Product Owner & UX Designer",
        avatar: DrClaudel,
        bio: "Passionné par l'UX et l'environnement, Fotso dirige la vision produit d'EcoTrack.",
        skills: ["UX Design", "Product Management", "User Research"],
        linkedin: "https://linkedin.com/in/fotso",
        isFounder: true,
      },
      {
        id: 2,
        name: "Tchakounte Paul",
        role: "Tech Lead & CTO",
        avatar: DrClaudel,
        bio: "Développeur full-stack expert en React Native et architecture cloud.",
        skills: ["React Native", "Node.js", "AWS", "DevOps"],
        linkedin: "https://linkedin.com/in/tchakounte-paul",
        github: "https://github.com/tchakounte-paul",
        isFounder: true,
      },
      {
        id: 3,
        name: "Mireille Nguimbi",
        role: "Marketing & Growth",
        avatar: DrClaudel,
        bio: "Spécialiste en growth hacking et marketing digital pour startups.",
        skills: ["Growth Hacking", "Digital Marketing", "Analytics"],
        linkedin: "https://linkedin.com/in/mireille-nguimbi",
        twitter: "https://twitter.com/mireille_growth",
        isFounder: false,
      },
    ],
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "AWS",
      "Firebase",
      "Stripe",
    ],
    startDate: "2025-01-15",
    funding: {
      total: "50M FCFA",
      stage: "Seed",
      investors: 3,
      nextRound: "Series A - Q3 2025",
    },
    metrics: {
      users: 1250,
      revenue: "12M FCFA",
      growth: "+45%",
      retention: "78%",
      downloads: "2.5K",
      rating: 4.6,
    },
    links: {
      website: "https://ecotrack.app",
      github: "https://github.com/startup-academy/ecotrack",
      demo: "https://demo.ecotrack.app",
      appStore: "https://apps.apple.com/app/ecotrack",
      playStore: "https://play.google.com/store/apps/details?id=com.ecotrack",
    },
    tags: [
      "Environnement",
      "Mobile",
      "B2C",
      "Gamification",
      "Sustainability",
      "CleanTech",
    ],
    problem:
      "Les Camerounais veulent réduire leur empreinte carbone mais ne savent pas par où commencer ni comment mesurer leurs progrès de manière engageante.",
    solution:
      "Une app mobile qui gamifie le suivi carbone avec des défis personnalisés, des conseils pratiques et un système de récompenses motivant.",
    targetMarket:
      "Particuliers soucieux de l'environnement à Douala et Yaoundé, âgés de 25-45 ans, urbains, avec un revenu moyen-élevé.",
    businessModel:
      "Freemium avec abonnement premium (2500 FCFA/mois) pour fonctionnalités avancées et coaching personnalisé.",
    competition: [
      {
        name: "Carbon Tracker",
        strength: "Précision des calculs",
        weakness: "Interface peu engageante",
      },
      {
        name: "Green Habits",
        strength: "Communauté active",
        weakness: "Manque de gamification",
      },
      {
        name: "EcoLife",
        strength: "Contenu éducatif",
        weakness: "Pas de suivi personnalisé",
      },
    ],
    roadmap: [
      {
        quarter: "Q1 2025",
        status: "completed",
        milestones: [
          "MVP lancé",
          "1000 premiers utilisateurs",
          "Feedback initial collecté",
        ],
      },
      {
        quarter: "Q2 2025",
        status: "in-progress",
        milestones: [
          "Système de récompenses",
          "Intégration IoT",
          "5000 utilisateurs",
        ],
      },
      {
        quarter: "Q3 2025",
        status: "planned",
        milestones: [
          "Version premium",
          "Partenariats entreprises",
          "Levée Series A",
        ],
      },
      {
        quarter: "Q4 2025",
        status: "planned",
        milestones: [
          "Expansion en Afrique Centrale",
          "50K utilisateurs",
          "Rentabilité",
        ],
      },
    ],
    updates: [
      {
        id: 1,
        date: "2025-01-20",
        title: "Lancement de la version 2.0",
        content:
          "Nouvelle interface utilisateur et système de défis amélioré. Les utilisateurs peuvent maintenant créer des groupes et se challenger entre amis.",
        author: "Dr. Fotso",
        likes: 23,
        comments: 8,
      },
      {
        id: 2,
        date: "2025-01-15",
        title: "Partenariat avec GreenTech Cameroun",
        content:
          "Nous sommes ravis d'annoncer notre partenariat avec GreenTech Cameroun pour intégrer leurs données de transport en temps réel.",
        author: "Tchakounte Paul",
        likes: 31,
        comments: 12,
      },
      {
        id: 3,
        date: "2025-01-10",
        title: "Milestone : 1000 utilisateurs !",
        content:
          "Nous avons atteint les 1000 utilisateurs actifs ! Merci à toute la communauté pour votre soutien et vos retours précieux.",
        author: "Mireille Nguimbi",
        likes: 45,
        comments: 18,
      },
    ],
    comments: [
      {
        id: 1,
        user: {
          name: "Kamga Jean",
          avatar: DrClaudel,
        },
        content:
          "Projet très prometteur ! L'approche gamifiée est brillante pour engager les utilisateurs sur le long terme.",
        date: "2025-01-18",
        likes: 12,
        replies: [
          {
            id: 11,
            user: {
              name: "Dr. Fotso",
              avatar: DrClaudel,
            },
            content:
              "Merci Jean ! Votre expertise en business model nous a beaucoup aidés.",
            date: "2025-01-18",
          },
        ],
      },
      {
        id: 2,
        user: {
          name: "Nkeng Marie",
          avatar: DrClaudel,
        },
        content:
          "Avez-vous pensé à intégrer des partenariats avec des entreprises pour le B2B ?",
        date: "2025-01-17",
        likes: 8,
        replies: [],
      },
    ],
    likes: 89,
    views: 2341,
    bookmarks: 34,
  };

  const tabs = [
    { id: "overview", label: "Aperçu", icon: Eye },
    { id: "team", label: "Équipe", icon: Users },
    { id: "progress", label: "Progression", icon: TrendingUp },
    { id: "updates", label: "Actualités", icon: MessageCircle },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success-100 text-success-800";
      case "paused":
        return "bg-warning-100 text-warning-800";
      case "completed":
        return "bg-primary-100 text-primary-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Prototype":
        return "bg-gray-100 text-gray-800";
      case "MVP":
        return "bg-blue-100 text-blue-800";
      case "Seed":
        return "bg-green-100 text-green-800";
      case "Growth":
        return "bg-purple-100 text-purple-800";
      case "Exit":
        return "bg-gold-100 text-gold-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoadmapStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-success-600" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-warning-600" />;
      case "planned":
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
      default:
        return <Info className="h-5 w-5 text-gray-400" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      // Add comment logic here
      setNewComment("");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors group"
      >
        <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        <span>Retour aux projets</span>
      </button>

      {/* Project Header */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-8 animate-fade-in-up">
        {/* Hero Image */}
        <div className="relative h-64 md:h-80">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-6 left-6">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 shadow-soft">
                <Star className="h-4 w-4 fill-current" />
                <span>Projet vedette</span>
              </div>
            </div>
          )}

          {/* Status & Stage */}
          <div className="absolute top-6 right-6 flex space-x-2">
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(
                project.status
              )}`}
            >
              Actif
            </span>
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full ${getStageColor(
                project.stage
              )}`}
            >
              {project.stage}
            </span>
          </div>

          {/* Project Info */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              {project.title}
            </h1>
            <p className="text-lg opacity-90 mb-4">{project.tagline}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{project.team.length} membres</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>Depuis {formatDate(project.startDate)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4" />
                <span>{project.funding.total} levés</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="h-4 w-4" />
                <span>{project.metrics.users} utilisateurs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Bar */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{project.views} vues</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart
                  className={`h-4 w-4 ${
                    isLiked ? "fill-current text-red-600" : ""
                  }`}
                />
                <span>{project.likes + (isLiked ? 1 : 0)} likes</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{project.comments.length} commentaires</span>
              </div>
              <div className="flex items-center space-x-1">
                <Bookmark className="h-4 w-4" />
                <span>{project.bookmarks} favoris</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  isLiked
                    ? "bg-red-100 text-red-600"
                    : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                <span>J'aime</span>
              </button>

              <button
                onClick={handleBookmark}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  isBookmarked
                    ? "bg-gold-100 text-gold-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gold-50 hover:text-gold-600"
                }`}
              >
                <Bookmark
                  className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`}
                />
                <span>Sauvegarder</span>
              </button>

              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors">
                <Share2 className="h-4 w-4" />
                <span>Partager</span>
              </button>

              <button
                onClick={() => setShowContactModal(true)}
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                <span>Contacter l'équipe</span>
              </button>
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
                    ? "border-primary-600 text-primary-600 bg-primary-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
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
      <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">
                  Description du projet
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">
                      Problème
                    </h3>
                    <p className="text-gray-700 text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-3">
                      Solution
                    </h3>
                    <p className="text-gray-700 text-sm">{project.solution}</p>
                  </div>
                </div>
              </div>

              {/* Business Model */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">
                  Modèle économique
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Marché cible
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {project.targetMarket}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Modèle de revenus
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {project.businessModel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Competition */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">
                  Analyse concurrentielle
                </h2>
                <div className="space-y-4">
                  {project.competition.map((competitor, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {competitor.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-success-600">
                            Force :{" "}
                          </span>
                          <span className="text-gray-700">
                            {competitor.strength}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-error-600">
                            Faiblesse :{" "}
                          </span>
                          <span className="text-gray-700">
                            {competitor.weakness}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">
                  Galerie
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Metrics */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">
                  Métriques clés
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-xl">
                    <div className="text-lg font-bold text-blue-900">
                      {project.metrics.users}
                    </div>
                    <div className="text-xs text-blue-700">Utilisateurs</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-xl">
                    <div className="text-lg font-bold text-green-900">
                      {project.metrics.revenue}
                    </div>
                    <div className="text-xs text-green-700">Revenus</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-xl">
                    <div className="text-lg font-bold text-purple-900">
                      {project.metrics.growth}
                    </div>
                    <div className="text-xs text-purple-700">Croissance</div>
                  </div>
                  <div className="text-center p-3 bg-gold-50 rounded-xl">
                    <div className="text-lg font-bold text-gold-900">
                      {project.metrics.retention}
                    </div>
                    <div className="text-xs text-gold-700">Rétention</div>
                  </div>
                </div>
              </div>

              {/* Funding */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">
                  Financement
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total levé</span>
                    <span className="font-semibold">
                      {project.funding.total}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stage</span>
                    <span className="font-semibold">
                      {project.funding.stage}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Investisseurs</span>
                    <span className="font-semibold">
                      {project.funding.investors}
                    </span>
                  </div>
                  <div className="pt-3 border-t border-gray-100">
                    <div className="text-sm text-gray-600 mb-1">
                      Prochaine levée
                    </div>
                    <div className="font-semibold text-primary-600">
                      {project.funding.nextRound}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">
                  Liens
                </h3>
                <div className="space-y-3">
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group"
                    >
                      <Globe className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-blue-700 group-hover:text-blue-800">
                        Site web
                      </span>
                      <ExternalLink className="h-3 w-3 text-blue-500 ml-auto" />
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                    >
                      <Github className="h-5 w-5 text-gray-600" />
                      <span className="text-sm text-gray-700 group-hover:text-gray-800">
                        GitHub
                      </span>
                      <ExternalLink className="h-3 w-3 text-gray-500 ml-auto" />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                    >
                      <Play className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-green-700 group-hover:text-green-800">
                        Démo
                      </span>
                      <ExternalLink className="h-3 w-3 text-green-500 ml-auto" />
                    </a>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.team.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="text-center mb-4">
                  <div className="relative inline-block">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-3 ring-4 ring-white shadow-soft"
                    />
                    {member.isFounder && (
                      <div className="absolute -top-1 -right-1 bg-gold-500 text-white p-1 rounded-full">
                        <Award className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                  {member.isFounder && (
                    <span className="inline-block px-2 py-1 bg-gold-100 text-gold-800 text-xs rounded-full">
                      Fondateur
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-700 mb-4 text-center">
                  {member.bio}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Compétences
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-sky-100 text-sky-600 rounded-lg hover:bg-sky-200 transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Progress Tab */}
        {activeTab === "progress" && (
          <div className="space-y-8">
            {/* Roadmap */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-primary-900 mb-6">
                Roadmap
              </h2>
              <div className="space-y-6">
                {project.roadmap.map((quarter, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getRoadmapStatusIcon(quarter.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {quarter.quarter}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            quarter.status === "completed"
                              ? "bg-success-100 text-success-800"
                              : quarter.status === "in-progress"
                              ? "bg-warning-100 text-warning-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {quarter.status === "completed"
                            ? "Terminé"
                            : quarter.status === "in-progress"
                            ? "En cours"
                            : "Planifié"}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {quarter.milestones.map((milestone, milestoneIndex) => (
                          <li
                            key={milestoneIndex}
                            className="text-sm text-gray-700 flex items-center space-x-2"
                          >
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Evolution */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-primary-900 mb-6">
                Évolution des métriques
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">
                    {project.metrics.users}
                  </div>
                  <div className="text-sm text-blue-700">
                    Utilisateurs actifs
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    +45% ce mois
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-900">
                    {project.metrics.revenue}
                  </div>
                  <div className="text-sm text-green-700">Revenus mensuels</div>
                  <div className="text-xs text-green-600 mt-1">
                    +78% ce mois
                  </div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-900">
                    {project.metrics.retention}
                  </div>
                  <div className="text-sm text-purple-700">
                    Taux de rétention
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    +12% ce mois
                  </div>
                </div>
                <div className="text-center p-4 bg-gold-50 rounded-xl">
                  <Star className="h-8 w-8 text-gold-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold-900">
                    {project.metrics.rating}
                  </div>
                  <div className="text-sm text-gold-700">Note app stores</div>
                  <div className="text-xs text-green-600 mt-1">
                    +0.3 ce mois
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Updates Tab */}
        {activeTab === "updates" && (
          <div className="space-y-8">
            {/* Project Updates */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-primary-900 mb-6">
                Actualités du projet
              </h2>
              <div className="space-y-6">
                {project.updates.map((update) => (
                  <div
                    key={update.id}
                    className="border-b border-gray-100 pb-6 last:border-b-0"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 p-2 rounded-xl">
                        <MessageCircle className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {update.title}
                          </h3>
                          <span className="text-sm text-gray-500">
                            {formatDate(update.date)}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-3">{update.content}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Par {update.author}
                          </span>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{update.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{update.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <h2 className="text-xl font-semibold text-primary-900 mb-6">
                Commentaires
              </h2>

              {/* Add Comment */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Partagez vos thoughts sur ce projet..."
                  rows={3}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                />
                <div className="flex justify-end mt-3">
                  <button
                    onClick={handleComment}
                    disabled={!newComment.trim()}
                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                    <span>Commenter</span>
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {project.comments.map((comment) => (
                  <div key={comment.id} className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={comment.user.avatar}
                        alt={comment.user.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">
                            {comment.user.name}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {formatDate(comment.date)}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-3">{comment.content}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <button className="hover:text-primary-600 transition-colors">
                            J'aime ({comment.likes})
                          </button>
                          <button className="hover:text-primary-600 transition-colors">
                            Répondre
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="ml-14 space-y-4">
                        {comment.replies.map((reply) => (
                          <div
                            key={reply.id}
                            className="flex items-start space-x-4"
                          >
                            <img
                              src={reply.user.avatar}
                              alt={reply.user.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium text-gray-900 text-sm">
                                  {reply.user.name}
                                </h5>
                                <span className="text-xs text-gray-500">
                                  {formatDate(reply.date)}
                                </span>
                              </div>
                              <p className="text-gray-700 text-sm">
                                {reply.content}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4 animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-primary-900">
                Contacter l'équipe {project.title}
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
                  placeholder="Votre message à l'équipe..."
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

export default ProjectDetail;
