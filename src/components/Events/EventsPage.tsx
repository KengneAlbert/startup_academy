import React, { useState } from "react";
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
  ArrowRight,
} from "lucide-react";

import Even1 from "../../assets/equipe.jpg";
import Even2 from "../../assets/equipe dr claudel.jpg";
import Even3 from "../../assets/siege_cote_ivoire1.jpg";

const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDate, setSelectedDate] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const events = [
    {
      id: 1,
      title: "Startup Weekend Yaoundé 2025",
      description:
        "54 heures pour créer une startup de A à Z avec des entrepreneurs passionnés",
      longDescription:
        "Le Startup Weekend est l'événement entrepreneurial le plus intense et enrichissant ! Pendant 54 heures non-stop, vous allez pitcher votre idée, former une équipe, développer un prototype et présenter votre startup devant un jury d'experts. C'est l'occasion parfaite de tester votre idée, rencontrer des co-fondateurs potentiels et vivre l'expérience startup en accéléré.",
      category: "competition",
      type: "presential",
      date: "2025-02-15",
      endDate: "2025-02-17",
      time: "18:00",
      endTime: "20:00",
      location: "Canal Olympia Bessengue, Douala",
      address: "Bessengue, Douala",
      price: "25 000 FCFA",
      capacity: 120,
      registered: 89,
      organizer: {
        name: "Startup Academy Cameroun",
        avatar: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16b",
        verified: true,
      },
      speakers: [
        {
          id: 1,
          name: "Christian Ngan",
          role: "Serial Entrepreneur",
          company: "Madlyn Cazalis",
          avatar:
            "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
          bio: "Fondateur de Madlyn Cazalis, investisseur et mentor",
        },
        {
          id: 2,
          name: "Rebecca Enonchong",
          role: "Tech Entrepreneur",
          company: "AppsTech",
          avatar:
            "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab",
          bio: "Fondatrice de AppsTech, experte en technologie",
        },
      ],
      image: Even1,
      tags: ["Entrepreneuriat", "Innovation", "Networking", "Competition"],
      featured: true,
      status: "upcoming",
      registrationDeadline: "2025-02-10",
    },
    {
      id: 2,
      title: "Webinaire : Lever des Fonds en Afrique en 2025",
      description:
        "Stratégies et conseils pratiques pour réussir sa levée de fonds",
      category: "webinar",
      type: "online",
      date: "2025-02-08",
      time: "14:00",
      endTime: "15:30",
      location: "En ligne",
      address: "Lien Zoom envoyé par email",
      price: "Gratuit",
      capacity: 500,
      registered: 342,
      organizer: {
        name: "Alain Nkenfack",
        avatar: "https://images.unsplash.com/photo-1578635073897-3807ceb9a88d",
        verified: true,
      },
      speakers: [
        {
          id: 1,
          name: "Alain Nkenfack",
          role: "Investment Expert",
          company: "Kejie Ventures",
          avatar:
            "https://images.unsplash.com/photo-1531384441138-2736e62e0919",
          bio: "Expert en investissement avec plus de 10 ans d'expérience",
        },
        {
          id: 3,
          name: "Olivia Mvondo",
          role: "Finance Expert",
          company: "FinanceFlow",
          avatar:
            "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab",
          bio: "Experte en structuration financière",
        },
      ],
      image: Even2,
      tags: ["Financement", "Investissement", "Pitch", "Stratégie"],
      featured: true,
      status: "upcoming",
      registrationDeadline: "2025-02-07",
    },
    {
      id: 3,
      title: "Networking Tech Douala",
      description: "Soirée networking dédiée aux entrepreneurs du secteur tech",
      category: "networking",
      type: "presential",
      date: "2025-02-12",
      time: "18:30",
      endTime: "21:30",
      location: "ActivSpaces Douala",
      address: "Akwa, Douala",
      price: "15 000 FCFA",
      capacity: 80,
      registered: 67,
      organizer: {
        name: "Tech Community Douala",
        avatar: "https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85",
        verified: true,
      },
      speakers: [
        {
          id: 4,
          name: "Arthur Zang",
          role: "Tech Innovator",
          company: "Himore Medical",
          avatar:
            "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
          bio: "Inventeur du Cardiopad",
        },
      ],
      image: Even3,
      tags: ["Tech", "Networking", "Startups", "Innovation"],
      featured: false,
      status: "upcoming",
      registrationDeadline: "2025-02-11",
    },
  ];

  const categories = [
    { id: "all", name: "Toutes les catégories", icon: Calendar },
    { id: "webinar", name: "Webinaires", icon: Video },
    { id: "workshop", name: "Ateliers", icon: Briefcase },
    { id: "networking", name: "Networking", icon: Users },
    { id: "competition", name: "Compétitions", icon: Award },
    { id: "demo", name: "Demo Days", icon: TrendingUp },
  ];

  const types = [
    { id: "all", name: "Tous les formats" },
    { id: "online", name: "En ligne" },
    { id: "presential", name: "Présentiel" },
    { id: "hybrid", name: "Hybride" },
  ];

  const dateFilters = [
    { id: "all", name: "Toutes les dates" },
    { id: "today", name: "Aujourd'hui" },
    { id: "week", name: "Cette semaine" },
    { id: "month", name: "Ce mois" },
    { id: "upcoming", name: "À venir" },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "all" || event.category === selectedCategory;
    const matchesType = selectedType === "all" || event.type === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "webinar":
        return "bg-blue-100 text-blue-800";
      case "workshop":
        return "bg-purple-100 text-purple-800";
      case "networking":
        return "bg-green-100 text-green-800";
      case "competition":
        return "bg-red-100 text-red-800";
      case "demo":
        return "bg-gold-100 text-gold-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "online":
        return Globe;
      case "presential":
        return MapPin;
      case "hybrid":
        return Zap;
      default:
        return Calendar;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-success-100 text-success-800";
      case "ongoing":
        return "bg-warning-100 text-warning-800";
      case "past":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "upcoming":
        return "À venir";
      case "ongoing":
        return "En cours";
      case "past":
        return "Terminé";
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    return timeString;
  };

  const isEventSoldOut = (event: any) => {
    return event.registered >= event.capacity;
  };

  const getRegistrationStatus = (event: any) => {
    if (event.price === "Sur invitation") return "invitation";
    if (isEventSoldOut(event)) return "soldout";
    if (new Date(event.registrationDeadline) < new Date()) return "closed";
    return "open";
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
              Participez aux événements qui façonnent l'écosystème
              entrepreneurial
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
      <div
        className="bg-white rounded-2xl shadow-soft border border-gray-100 p-4 md:p-6 mb-6 md:mb-8 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
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
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white transition-all duration-300"
            >
              {types.map((type) => (
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
              {dateFilters.map((filter) => (
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
            {filteredEvents.length} événement
            {filteredEvents.length > 1 ? "s" : ""} trouvé
            {filteredEvents.length > 1 ? "s" : ""}
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

      {/* Events Grid/List */}
      <div
        className={`animate-fade-in-up ${
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-6"
        }`}
        style={{ animationDelay: "0.2s" }}
      >
        {filteredEvents.map((event, index) => {
          const TypeIcon = getTypeIcon(event.type);
          const registrationStatus = getRegistrationStatus(event);

          return (
            <div
              key={event.id}
              className={`group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium transition-all duration-500 hover:scale-105 animate-slide-up ${
                viewMode === "list" ? "flex" : ""
              } ${event.featured ? "ring-2 ring-purple-200" : ""}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {event.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 shadow-soft">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Événement phare</span>
                  </div>
                </div>
              )}

              {viewMode === "grid" ? (
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
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(
                            event.category
                          )}`}
                        >
                          {event.category}
                        </span>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                            event.status
                          )}`}
                        >
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
                          <span>
                            {formatTime(event.time)} -{" "}
                            {formatTime(event.endTime)}
                          </span>
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
                        <span>
                          {event.registered}/{event.capacity} participants
                        </span>
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
                            {event.speakers.length} speaker
                            {event.speakers.length > 1 ? "s" : ""}
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
                      {registrationStatus === "soldout" ? (
                        <button
                          disabled
                          className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl cursor-not-allowed"
                        >
                          Complet
                        </button>
                      ) : registrationStatus === "closed" ? (
                        <button
                          disabled
                          className="w-full bg-gray-300 text-gray-500 py-3 rounded-xl cursor-not-allowed"
                        >
                          Inscriptions fermées
                        </button>
                      ) : registrationStatus === "invitation" ? (
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
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(
                          event.category
                        )}`}
                      >
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
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                              event.status
                            )}`}
                          >
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
                            <span>
                              {event.registered}/{event.capacity} participants
                            </span>
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
                          {registrationStatus === "soldout" ? (
                            <button
                              disabled
                              className="w-full bg-gray-300 text-gray-500 py-2 rounded-xl cursor-not-allowed text-sm"
                            >
                              Complet
                            </button>
                          ) : registrationStatus === "closed" ? (
                            <button
                              disabled
                              className="w-full bg-gray-300 text-gray-500 py-2 rounded-xl cursor-not-allowed text-sm"
                            >
                              Inscriptions fermées
                            </button>
                          ) : registrationStatus === "invitation" ? (
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
            Partagez votre événement avec la communauté Startup Academy et
            touchez des centaines d'entrepreneurs passionnés.
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
