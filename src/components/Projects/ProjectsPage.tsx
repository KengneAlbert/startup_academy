import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";
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
  Zap,
} from "lucide-react";
import Claudel from '../../assets/formations.jpg';
import Formation from '../../assets/siege_cote_ivoire1.jpg';
import Equipe from '../../assets/equipe.jpg';
import DrClaudel from '../../assets/claudel.jpg';

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentView, setCurrentView] = useState<"list" | "detail">("list");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const projects = [
    {
      id: 1,
      title: "Formation en entrepreneuriat - Douala",
      description:
        "Programme de formation intensive en entrepreneuriat pour les jeunes camerounais, avec focus sur l'innovation et le digital.",
      category: "edtech",
      status: "active",
      stage: "MVP",
      team: [
        {
          id: 1,
          name: "Dr Claudel",
          role: "Formateur Principal",
          avatar: DrClaudel
        },
        {
          id: 2,
          name: "Thomas Kuete",
          role: "Coordinateur",
          avatar: Formation
        },
        {
          id: 3,
          name: "Sophie Nana",
          role: "Mentor",
          avatar: Equipe
        }
      ],
      technologies: ["E-learning", "Mentorat", "Coaching", "Certification"],
      startDate: "2024-01-15",
      funding: "15M FCFA",
      investors: 2,
      image: Formation,
      links: {
        website: "https://startup-academy.cm",
        demo: "https://demo.startup-academy.cm"
      },
      metrics: {
        users: 250,
        revenue: "8M FCFA",
        growth: "+45%"
      },
      tags: ["Formation", "Entrepreneuriat", "Innovation", "Digital"],
      featured: true,
      likes: 89,
      views: 2341,
      comments: 23
    },
    {
      id: 2,
      title: "Incubateur Startup Academy - Yaoundé",
      description:
        "Programme d'incubation pour startups innovantes avec accompagnement personnalisé et accès aux financements.",
      category: "saas",
      status: "active", 
      stage: "Growth",
      team: [
        {
          id: 4,
          name: "Marcus Ebai",
          role: "Directeur",
          avatar: Claudel
        },
        {
          id: 5,
          name: "Marie Dongmo",
          role: "Responsable Programme",
          avatar: Equipe
        }
      ],
      technologies: ["Mentorat", "Financement", "Formation", "Networking"],
      startDate: "2023-08-10",
      funding: "50M FCFA",
      investors: 5,
      image: Claudel,
      links: {
        website: "https://incubateur.startup-academy.cm"
      },
      metrics: {
        users: 45,
        revenue: "25M FCFA", 
        growth: "+120%"
      },
      tags: ["Incubation", "Innovation", "Startups", "Entrepreneuriat"],
      featured: true,
      likes: 156,
      views: 4567,
      comments: 34
    },
    {
      id: 3,
      title: "Formation Continue - Bafoussam",
      description:
        "Programmes de formation continue pour entrepreneurs et professionnels dans l'Ouest du Cameroun.",
      category: "edtech",
      status: "active",
      stage: "Seed",
      team: [
        {
          id: 6,
          name: "Julie Kamga",
          role: "Coordinatrice",
          avatar: Equipe
        }
      ],
      technologies: ["Formation", "Coaching", "Certification"],
      startDate: "2024-02-01",
      funding: "5M FCFA",
      investors: 2,
      image: DrClaudel,
      links: {
        website: "https://formation.startup-academy.cm"
      },
      metrics: {
        users: 89,
        revenue: "3M FCFA",
        growth: "+78%"
      },
      tags: ["Formation", "Professionnels", "Développement", "Certification"],
      featured: false,
      likes: 67,
      views: 1890,
      comments: 18
    },
    {
      id: 4,
      title: "Startup Weekend - Kribi",
      description:
        "Événement d'innovation et entrepreneuriat sur 54h pour développer des projets innovants dans le tourisme.",
      category: "edtech",
      status: "paused",
      stage: "Prototype",
      team: [
        {
          id: 7,
          name: "Antoine Mbarga",
          role: "Organisateur",
          avatar: Formation
        }
      ],
      technologies: ["Innovation", "Entrepreneuriat", "Coaching"],
      startDate: "2023-11-15",
      funding: "2M FCFA",
      investors: 1,
      image: Equipe,
      links: {
        website: "https://weekend.startup-academy.cm"
      },
      metrics: {
        users: 45,
        revenue: "800k FCFA",
        growth: "0%"
      },
      tags: ["Innovation", "Tourisme", "Entrepreneuriat", "Événement"],
      featured: false,
      likes: 34,
      views: 567,
      comments: 8
    }
  ];

  const categories = [
    { id: "all", name: "Toutes les catégories", icon: Briefcase },
    { id: "mobile", name: "Applications Mobile", icon: Code },
    { id: "saas", name: "SaaS", icon: Globe },
    { id: "edtech", name: "EdTech", icon: BookOpen },
    { id: "healthtech", name: "HealthTech", icon: Heart },
    { id: "logistics", name: "Logistique", icon: TrendingUp },
  ];

  const statuses = [
    { id: "all", name: "Tous les statuts" },
    { id: "active", name: "Actif" },
    { id: "paused", name: "En pause" },
    { id: "completed", name: "Terminé" },
  ];

  const technologies = [
    { id: "all", name: "Toutes les technologies" },
    { id: "react", name: "React" },
    { id: "vue", name: "Vue.js" },
    { id: "angular", name: "Angular" },
    { id: "node", name: "Node.js" },
    { id: "python", name: "Python" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;
    const matchesTech =
      selectedTech === "all" ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(selectedTech.toLowerCase())
      );

    return matchesSearch && matchesCategory && matchesStatus && matchesTech;
  });

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView("detail");
  };

  const handleBackToList = () => {
    setCurrentView("list");
    setSelectedProjectId(null);
  };

  // Render project detail view
  if (currentView === "detail" && selectedProjectId) {
    return (
      <ProjectDetail projectId={selectedProjectId} onBack={handleBackToList} />
    );
  }

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

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Actif";
      case "paused":
        return "En pause";
      case "completed":
        return "Terminé";
      default:
        return status;
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      month: "long",
      year: "numeric",
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
              Découvrez les projets innovants de notre communauté
              d'entrepreneurs
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
            <div className="text-2xl font-bold text-success-600">890K CFA</div>
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
      <div
        className="bg-white rounded-2xl shadow-soft border border-gray-100 p-4 md:p-6 mb-6 md:mb-8 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
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
              {categories.map((category) => (
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
              {statuses.map((status) => (
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
              {technologies.map((tech) => (
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
            {filteredProjects.length} projet
            {filteredProjects.length > 1 ? "s" : ""} trouvé
            {filteredProjects.length > 1 ? "s" : ""}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-primary-100 text-primary-600"
                  : "text-gray-400 hover:text-gray-600"
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
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-primary-100 text-primary-600"
                  : "text-gray-400 hover:text-gray-600"
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
      <div
        className={`animate-fade-in-up ${
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-6"
        }`}
        style={{ animationDelay: "0.2s" }}
      >
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium transition-all duration-500 hover:scale-105 animate-slide-up ${
              viewMode === "list" ? "flex" : ""
            } ${project.featured ? "ring-2 ring-gold-200" : ""}`}
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {project.featured && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 shadow-soft">
                  <Star className="h-3 w-3 fill-current" />
                  <span>Projet vedette</span>
                </div>
              </div>
            )}

            {viewMode === "grid" ? (
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
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {getStatusLabel(project.status)}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStageColor(
                          project.stage
                        )}`}
                      >
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
                      {project.team.length} membre
                      {project.team.length > 1 ? "s" : ""}
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
                      <div className="text-sm font-bold text-gray-900">
                        {project.metrics.users}
                      </div>
                      <div className="text-xs text-gray-500">Utilisateurs</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-success-600">
                        {project.metrics.revenue}
                      </div>
                      <div className="text-xs text-gray-500">Revenus</div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-primary-600">
                        {project.metrics.growth}
                      </div>
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
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        project.status
                      )}`}
                    >
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
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStageColor(
                            project.stage
                          )}`}
                        >
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
                        {project.technologies
                          .slice(0, 4)
                          .map((tech, techIndex) => (
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
                            <div className="text-sm font-bold text-gray-900">
                              {project.metrics.users}
                            </div>
                            <div className="text-xs text-gray-500">Users</div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-success-600">
                              {project.metrics.revenue}
                            </div>
                            <div className="text-xs text-gray-500">Revenue</div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-primary-600">
                              {project.metrics.growth}
                            </div>
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
            Rejoignez notre communauté d'entrepreneurs et donnez vie à vos idées
            avec le soutien de Startup Academy.
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
