import React, { useState } from "react";
import MemberProfile from './MemberProfile';
import {
  Search,
  Filter,
  MapPin,
  Briefcase,
  Star,
  MessageCircle,
  UserPlus,
  ChevronDown,
  Users,
  Award,
  Calendar,
  ExternalLink,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  Phone,
} from "lucide-react";
import Claudel from '../../assets/cordos/cordo_burkina.jpg';
import Claudel2 from '../../assets/dr claudel.jpg';

const MembersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentView, setCurrentView] = useState<'list' | 'profile'>('list');
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);

  const members = [
    {
      id: 1,
      name: "Alain Tchouamo",
      profession: "UX Designer & Product Manager",
      company: "TechFlow Solutions",
      location: "Douala, Cameroun",
      sector: "tech",
      bio: "Passionné par la création d'expériences utilisateur exceptionnelles. 8 ans d'expérience dans le design de produits digitaux.",
      skills: [
        "UX Design",
        "Product Management",
        "Figma",
        "User Research",
        "Prototyping",
      ],
      experience: "8 ans",
      avatar: Claudel,
      rating: 4.9,
      connections: 156,
      projects: 23,
      isOnline: true,
      joinDate: "2023-01-15",
      socialLinks: {
        linkedin: "https://linkedin.com/in/alain-tchouamo",
        twitter: "https://twitter.com/alain_ux",
        website: "https://alaintchouamo.design",
      },
      services: ["Audit UX", "Design System", "Formation équipe"],
      availability: "Disponible pour missions",
    },
    {
      id: 2,
      name: "Emmanuel Nganou",
      profession: "Business Mentor & Investor",
      company: "Nganou Ventures",
      location: "Yaoundé, Cameroun",
      sector: "finance",
      bio: "Entrepreneur en série et investisseur. J'aide les startups à lever des fonds et à développer leur stratégie business.",
      skills: [
        "Business Strategy",
        "Fundraising",
        "Mentoring",
        "Investment",
        "Scaling",
      ],
      experience: "15 ans",
      avatar: Claudel2,
      rating: 4.8,
      connections: 342,
      projects: 67,
      isOnline: false,
      joinDate: "2022-08-10",
      socialLinks: {
        linkedin: "https://linkedin.com/in/emmanuel-nganou",
        website: "https://nganouvent.cm",
      },
      services: ["Mentoring", "Due Diligence", "Pitch Coaching"],
      availability: "Sélectif",
    },
    {
      id: 3,
      name: "Christian Tamo",
      profession: "Marketing Digital & Growth Hacker",
      company: "Growth Lab",
      location: "Douala, Cameroun",
      sector: "marketing",
      bio: "Spécialiste en croissance digitale. J'aide les startups à acquérir leurs premiers clients et à optimiser leur funnel.",
      skills: [
        "Growth Hacking",
        "SEO/SEA",
        "Analytics",
        "Content Marketing",
        "Automation",
      ],
      experience: "6 ans",
      avatar: Claudel2,
      rating: 4.7,
      connections: 234,
      projects: 45,
      isOnline: true,
      joinDate: "2023-03-22",
      socialLinks: {
        linkedin: "https://linkedin.com/in/christian-tamo",
        twitter: "https://twitter.com/tamo_growth",
      },
      services: ["Audit Marketing", "Stratégie Growth", "Formation équipe"],
      availability: "Disponible",
    },
    {
      id: 4,
      name: "Steve Kuate",
      profession: "CTO & Tech Lead",
      company: "DevCraft Studio",
      location: "Yaoundé, Cameroun",
      sector: "tech",
      bio: "Développeur full-stack passionné par les technologies émergentes. Expert en architecture cloud et DevOps.",
      skills: [
        "React",
        "Node.js",
        "AWS",
        "DevOps",
        "Architecture",
        "Team Leadership",
      ],
      experience: "10 ans",
      avatar: Claudel2,
      rating: 4.9,
      connections: 189,
      projects: 34,
      isOnline: true,
      joinDate: "2022-11-05",
      socialLinks: {
        linkedin: "https://linkedin.com/in/steve-kuate",
        website: "https://stevekuate.dev",
      },
      services: ["Développement MVP", "Audit Technique", "Mentoring Tech"],
      availability: "Disponible",
    },
    {
      id: 5,
      name: "Marie Kamdem",
      profession: "CFO & Expert Comptable",
      company: "FinanceFlow",
      location: "Douala, Cameroun",
      sector: "finance",
      bio: "Expert-comptable spécialisée dans l'accompagnement des startups. Je simplifie la gestion financière pour les entrepreneurs.",
      skills: [
        "Comptabilité",
        "Finance",
        "Fiscalité",
        "Levée de fonds",
        "Business Plan",
      ],
      experience: "12 ans",
      avatar: Claudel2,
      rating: 4.8,
      connections: 167,
      projects: 56,
      isOnline: false,
      joinDate: "2023-02-14",
      socialLinks: {
        linkedin: "https://linkedin.com/in/marie-kamdem",
      },
      services: ["Comptabilité", "Business Plan", "Optimisation fiscale"],
      availability: "Complet",
    },
    {
      id: 6,
      name: "Antoine Fotso",
      profession: "Sales Director & Business Developer",
      company: "SalesForce Pro",
      location: "Bafoussam, Cameroun",
      sector: "business",
      bio: "Directeur commercial avec une expertise en développement business B2B. Passionné par la création de partenariats stratégiques.",
      skills: [
        "Sales",
        "Business Development",
        "Négociation",
        "Partenariats",
        "CRM",
      ],
      experience: "9 ans",
      avatar: Claudel2,
      rating: 4.6,
      connections: 298,
      projects: 41,
      isOnline: true,
      joinDate: "2022-12-08",
      socialLinks: {
        linkedin: "https://linkedin.com/in/antoine-fotso",
        twitter: "https://twitter.com/fotso_sales",
      },
      services: [
        "Stratégie commerciale",
        "Formation vente",
        "Développement partenariats",
      ],
      availability: "Disponible",
    },
  ];

  const sectors = [
    { id: "all", name: "Tous les secteurs" },
    { id: "tech", name: "Technologie" },
    { id: "finance", name: "Finance" },
    { id: "marketing", name: "Marketing" },
    { id: "business", name: "Business" },
  ];

  const locations = [
    { id: "all", name: "Toutes les villes" },
    { id: "paris", name: "Paris" },
    { id: "lyon", name: "Lyon" },
    { id: "marseille", name: "Marseille" },
    { id: "nice", name: "Nice" },
    { id: "bordeaux", name: "Bordeaux" },
    { id: "london", name: "London" },
  ];

  const skills = [
    { id: "all", name: "Toutes les compétences" },
    { id: "ux-design", name: "UX Design" },
    { id: "development", name: "Développement" },
    { id: "marketing", name: "Marketing" },
    { id: "finance", name: "Finance" },
    { id: "business", name: "Business" },
  ];

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector =
      selectedSector === "all" || member.sector === selectedSector;
    const matchesLocation =
      selectedLocation === "all" ||
      member.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesSkill =
      selectedSkill === "all" ||
      member.skills.some((skill) =>
        skill.toLowerCase().includes(selectedSkill.toLowerCase())
      );

    return matchesSearch && matchesSector && matchesLocation && matchesSkill;
  });

  const getSectorColor = (sector: string) => {
    switch (sector) {
      case "tech":
        return "bg-blue-100 text-blue-800";
      case "finance":
        return "bg-green-100 text-green-800";
      case "marketing":
        return "bg-purple-100 text-purple-800";
      case "business":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "Disponible":
        return "bg-success-100 text-success-800";
      case "Disponible pour missions":
        return "bg-success-100 text-success-800";
      case "Sélectif":
        return "bg-warning-100 text-warning-800";
      case "Complet":
        return "bg-error-100 text-error-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleMemberClick = (memberId: string) => {
    setSelectedMemberId(memberId);
    setCurrentView('profile');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedMemberId(null);
  };

  // Render member profile view
  if (currentView === 'profile' && selectedMemberId) {
    return (
      <MemberProfile 
        memberId={selectedMemberId} 
        onBack={handleBackToList}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6 md:mb-8 animate-fade-in-up">
        <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
          Répertoire des Membres
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Connectez-vous avec des entrepreneurs et experts de votre domaine
        </p>
      </div>

      {/* Search and Filters */}
      <div
        className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 mb-8 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un membre..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="relative">
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white transition-all duration-300"
            >
              {sectors.map((sector) => (
                <option key={sector.id} value={sector.id}>
                  {sector.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white transition-all duration-300"
            >
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white transition-all duration-300"
            >
              {skills.map((skill) => (
                <option key={skill.id} value={skill.id}>
                  {skill.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            {filteredMembers.length} membre
            {filteredMembers.length > 1 ? "s" : ""} trouvé
            {filteredMembers.length > 1 ? "s" : ""}
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

      {/* Members Grid/List */}
      <div
        className={`animate-fade-in-up ${
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "space-y-4"
        }`}
        style={{ animationDelay: "0.2s" }}
      >
        {filteredMembers.map((member, index) => (
          <div
            key={member.id}
            className={`group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium transition-all duration-500 hover:scale-105 animate-slide-up ${
              viewMode === "list" ? "flex items-center p-6" : "p-6"
            }`}
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {viewMode === "grid" ? (
              // Grid View
              <>
                <div className="relative mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-2xl object-cover ring-2 ring-white shadow-soft"
                      />
                      {member.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-primary-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {member.profession}
                      </p>
                      <p className="text-xs text-gray-500">{member.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-gold-500 fill-current" />
                      <span className="text-sm font-medium">
                        {member.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getSectorColor(
                        member.sector
                      )}`}
                    >
                      {member.sector}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getAvailabilityColor(
                        member.availability
                      )}`}
                    >
                      {member.availability}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{member.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{member.connections}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{member.projects} projets</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 text-sm shadow-soft hover:shadow-medium transform hover:scale-105">
                    <MessageCircle className="h-4 w-4" />
                    <span>Contacter</span>
                  </button>
                  <button 
                    onClick={() => handleMemberClick(member.id.toString())}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105"
                  >
                    onClick={() => handleMemberClick(member.id.toString())}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </>
            ) : (
              // List View
              <div className="flex items-center space-x-6 w-full">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-2xl object-cover ring-2 ring-white shadow-soft"
                  />
                  {member.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success-500 rounded-full border-2 border-white"></div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-primary-900">
                      {member.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-gold-500 fill-current" />
                      <span className="text-sm font-medium">
                        {member.rating}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-1">
                    {member.profession}
                  </p>
                  <p className="text-xs text-gray-500 mb-2">{member.company}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{member.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{member.connections} connexions</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{member.experience}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {member.skills.slice(0, 4).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{member.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full text-center ${getAvailabilityColor(
                      member.availability
                    )}`}
                  >
                    {member.availability}
                  </span>
                  <div className="flex space-x-2">
                    <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center space-x-2 text-sm shadow-soft hover:shadow-medium transform hover:scale-105">
                      <MessageCircle className="h-4 w-4" />
                      <span>Contacter</span>
                    </button>
                    <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105">
                      <UserPlus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucun membre trouvé
          </h3>
          <p className="text-gray-500">
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}
    </div>
  );
};

export default MembersPage;
