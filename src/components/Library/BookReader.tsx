import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Bookmark,
  Search,
  Settings,
  Maximize,
  Minimize,
  Sun,
  Moon,
  Type,
  Palette,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Menu,
  X,
  Highlighter as Highlight,
  MessageCircle,
  Share2,
  FileText,
  Eye,
  Clock,
  BookOpen,
  Target,
  Quote,
} from "lucide-react";

interface BookReaderProps {
  bookId: string;
  onBack: () => void;
}

const BookReader: React.FC<BookReaderProps> = ({ bookId, onBack }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isReading, setIsReading] = useState(false);
  const [readingSpeed, setReadingSpeed] = useState(1);
  const [showNotes, setShowNotes] = useState(false);
  const [showHighlights, setShowHighlights] = useState(false);

  // Mock book data
  const book = {
    id: 1,
    title: "The Le jeune entrepreneur africain",
    author: "Claudel Noubissie",
    totalPages: 336,
    currentChapter: "Chapter 1: Introduction",
    progress: 15, // percentage
    bookmarks: [12, 45, 78, 156],
    highlights: [
      {
        page: 23,
        text: "The Le jeune entrepreneur africain method teaches you how to drive a startup",
        color: "yellow",
      },
      { page: 45, text: "Build-Measure-Learn feedback loop", color: "blue" },
      { page: 67, text: "Minimum Viable Product (MVP)", color: "green" },
    ],
    notes: [
      {
        page: 23,
        note: "Important concept for our startup",
        timestamp: "2025-01-20",
      },
      {
        page: 45,
        note: "Apply this to our product development",
        timestamp: "2025-01-20",
      },
      { page: 67, note: "Start with MVP approach", timestamp: "2025-01-21" },
    ],
    tableOfContents: [
      {
        chapter: 1,
        title: "Introduction",
        page: 22,
        sections: [
          "L’Afrique a une jeunesse démographiquement dominante.",
          "Le système éducatif hérité de la colonisation forme des salariés, pas des créateurs.",
        ],
      },
      {
        chapter: 2,
        title: "L’illusion de richesse",
        page: 25,
        sections: [
          "Beaucoup vivent au-dessus de leurs moyens pour paraître riches.",
          "Exemple comparatif entre deux fonctionnaires : l’un sobre, l’autre endetté.",
          "Les pays occidentaux sont eux-mêmes surendettés malgré leur apparente richesse.",
          "L’Afrique est riche en ressources mais dépendante économiquement.",
        ],
      },
      {
        chapter: 3,
        title: "Les 10 raisons de créer une entreprise",
        page: 49,
        sections: [
          "Le salariat est un danger pour l’Afrique.",
          "C’est la pire manière de gagner de l’argent.",
          "Vous réalisez le rêve de quelqu’un d’autre.",
        ],
      },
      {
        chapter: 4,
        title: "Les 20 erreurs à éviter lors du lancement",
        page: 78,
        sections: ["Vouloir tout faire seul.", "Négliger l’étude de marché."],
      },
    ],
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= book.totalPages) {
      setCurrentPage(page);
    }
  };

  const handleZoom = (direction: "in" | "out") => {
    if (direction === "in" && zoom < 200) {
      setZoom(zoom + 25);
    } else if (direction === "out" && zoom > 50) {
      setZoom(zoom - 25);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      setShowSidebar(false);
    }
  };

  const toggleReading = () => {
    setIsReading(!isReading);
  };

  const getThemeClasses = () => {
    return isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${getThemeClasses()} ${
        isFullscreen ? "fixed inset-0 z-50" : ""
      }`}
    >
      {/* Header */}
      <div
        className={`border-b ${
          isDarkMode
            ? "border-gray-700 bg-gray-800"
            : "border-gray-200 bg-white"
        } p-4`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className={`flex items-center space-x-2 ${
                isDarkMode
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-600 hover:text-primary-600"
              } transition-colors group`}
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span>Retour</span>
            </button>

            <div className="hidden md:block">
              <h1 className="text-lg font-semibold">{book.title}</h1>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {book.author} • Page {currentPage} sur {book.totalPages}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Reading Controls */}
            <button
              onClick={toggleReading}
              className={`p-2 rounded-lg transition-colors ${
                isReading
                  ? "bg-primary-600 text-white"
                  : isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
              }`}
            >
              {isReading ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>

            {/* Search */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className={`p-2 rounded-lg transition-colors ${
                showSearch
                  ? "bg-primary-600 text-white"
                  : isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
              }`}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Sidebar Toggle */}
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className={`p-2 rounded-lg transition-colors ${
                showSidebar
                  ? "bg-primary-600 text-white"
                  : isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
              }`}
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
              }`}
            >
              {isFullscreen ? (
                <Minimize className="h-5 w-5" />
              ) : (
                <Maximize className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="mt-4 animate-slide-down">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher dans le livre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-200 text-gray-900 placeholder-gray-500"
                }`}
              />
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 flex">
        {/* Sidebar */}
        {showSidebar && (
          <div
            className={`w-80 border-r ${
              isDarkMode
                ? "border-gray-700 bg-gray-800"
                : "border-gray-200 bg-gray-50"
            } overflow-y-auto animate-slide-right`}
          >
            <div className="p-6">
              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Progression</span>
                  <span className="text-sm text-primary-600">
                    {book.progress}%
                  </span>
                </div>
                <div
                  className={`w-full rounded-full h-2 ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${book.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Page {currentPage}</span>
                  <span>{book.totalPages} pages</span>
                </div>
              </div>

              {/* Tabs */}
              <div className="mb-6">
                <div className="flex space-x-1 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => {
                      setShowNotes(false);
                      setShowHighlights(false);
                    }}
                    className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                      !showNotes && !showHighlights
                        ? "bg-white dark:bg-gray-600 text-primary-600 dark:text-white shadow-sm"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    Sommaire
                  </button>
                  <button
                    onClick={() => {
                      setShowNotes(false);
                      setShowHighlights(true);
                    }}
                    className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                      showHighlights
                        ? "bg-white dark:bg-gray-600 text-primary-600 dark:text-white shadow-sm"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    Surlignages
                  </button>
                  <button
                    onClick={() => {
                      setShowNotes(true);
                      setShowHighlights(false);
                    }}
                    className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                      showNotes
                        ? "bg-white dark:bg-gray-600 text-primary-600 dark:text-white shadow-sm"
                        : "text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    Notes
                  </button>
                </div>
              </div>

              {/* Table of Contents */}
              {!showNotes && !showHighlights && (
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold mb-3">
                    Table des matières
                  </h3>
                  {book.tableOfContents.map((chapter) => (
                    <div key={chapter.chapter} className="space-y-1">
                      <button
                        onClick={() => handlePageChange(chapter.page)}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          currentPage >= chapter.page &&
                          currentPage <
                            (book.tableOfContents[chapter.chapter]
                              ? book.tableOfContents[chapter.chapter].page
                              : book.totalPages)
                            ? "bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">
                            Chapitre {chapter.chapter}: {chapter.title}
                          </span>
                          <span className="text-xs text-gray-500">
                            p.{chapter.page}
                          </span>
                        </div>
                      </button>
                      {chapter.sections.map((section, index) => (
                        <button
                          key={index}
                          className="w-full text-left pl-6 pr-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {section}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights */}
              {showHighlights && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold mb-3">Surlignages</h3>
                  {book.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border-l-4 cursor-pointer transition-colors ${
                        highlight.color === "yellow"
                          ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20"
                          : highlight.color === "blue"
                          ? "border-blue-400 bg-blue-50 dark:bg-blue-900/20"
                          : "border-green-400 bg-green-50 dark:bg-green-900/20"
                      }`}
                      onClick={() => handlePageChange(highlight.page)}
                    >
                      <div className="flex items-start space-x-2">
                        <Highlight
                          className={`h-4 w-4 mt-0.5 ${
                            highlight.color === "yellow"
                              ? "text-yellow-600"
                              : highlight.color === "blue"
                              ? "text-blue-600"
                              : "text-green-600"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="text-sm">{highlight.text}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Page {highlight.page}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Notes */}
              {showNotes && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold mb-3">Mes notes</h3>
                  {book.notes.map((note, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        isDarkMode
                          ? "border-gray-600 hover:bg-gray-700"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                      onClick={() => handlePageChange(note.page)}
                    >
                      <div className="flex items-start space-x-2">
                        <MessageCircle className="h-4 w-4 mt-0.5 text-primary-600" />
                        <div className="flex-1">
                          <p className="text-sm">{note.note}</p>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-xs text-gray-500">
                              Page {note.page}
                            </p>
                            <p className="text-xs text-gray-500">
                              {note.timestamp}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Reading Area */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div
              className={`max-w-4xl w-full ${
                isDarkMode ? "bg-gray-800" : "bg-white"
              } rounded-lg shadow-large p-8 transition-all duration-300`}
              style={{
                transform: `scale(${zoom / 100})`,
                fontSize: `${fontSize}px`,
                lineHeight: "1.6",
              }}
            >
              {/* Mock Book Content */}
              <div className="space-y-6">
                <h1 className="text-3xl font-bold mb-6">
                  {book.currentChapter}
                </h1>

                <p>
                  La population africaine est la population la plus jeune du
                  monde, avec approximativement 200 millions d’habitants âgés de
                  15 à 24 ans, un nombre qui devrait atteindre 330 millions
                  d’ici à 2034. Elle a aussi le taux de croissance démographique
                  le plus élevé du monde. Dans moins de trois générations, 41 %
                  des jeunes de la planète seront africains. D’ici 2050, plus du
                  quart de la population active du globe sera africaine. Au XXIe
                  siècle, l’Afrique sera le seul continent dont la population
                  jeune continuera à s’accroître fortement1.
                </p>

                <p>
                  Cependant, la plupart de nos jeunes ne comprennent pas que la
                  réussite future des nations africaines dépend du leadership,
                  des compétences et de l’ingéniosité de la jeunesse du
                  continent. Dans son livre intitulé{" "}
                  <strong>« Réfléchissez et devenez riches »</strong>, Napoléon
                  Hill affirme :
                  <blockquote
                    className={`border-l-4 border-primary-600 pl-4 italic ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    « Celui qui désire profondément une chose est sûr de gagner
                    ! […] certains croient que personne ne peut devenir riche
                    par la pensée […] ils sont incapables de penser en matière
                    de riches, car leurs pensées sont habituées à la pauvreté,
                    la misère, l’échec et la défaite»
                  </blockquote>
                  En effet, beaucoup de jeunes Africains sont cantonnés à ne
                  penser qu’à des choses minables et infâmes. Leur esprit de
                  colonisé est resté ancré dans la peur, transmis de parents à
                  enfants, conservant ainsi leur cerveau dans un état végétatif,
                  entretenu par la lobotomie médiatique, l’éducation formant
                  principalement au salariat et surtout les religions importées
                  qui prônent les bienfaits de la pauvreté comme condition pour
                  aller au ciel. Ce fameux ciel! Cela me rappelle ce passage
                  biblique qui stipule :{" "}
                  <blockquote
                    className={`border-l-4 border-x-red-500 pl-4 italic ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    « Il est plus facile à un chameau de passer par le trou
                    d’une aiguille qu’à un riche d’entrer dans le royaume de
                    Dieu », Marc 10:25 ; Luc 18:25.{" "}
                  </blockquote>
                </p>

                <p>
                  Ce petit passage a maintenu nos cerveaux en obnubilation,
                  permettant ainsi à nos prédateurs qui nous ont apporté ces
                  religions de piller nos richesses, ceci parfois à l’aide de
                  certains de nos frères (les esclaves de maison), puisqu’être
                  pauvre était devenu un avantage ; cela leur préparait une
                  place confortable auprès de Dieu, garantissant ainsi à ces
                  fidèles d’un nouveau genre la vie éternelle ! L’objectif était
                  donc de présenter la richesse comme un péché et surtout de
                  neutraliser notre capacité de rébellion.
                </p>

                <p>
                  Du coup, ils passent leur temps à prier, à toujours déléguer à
                  Dieu ce qu’ils devraient d’abord résoudre eux mêmes, à savoir,
                  leurs problèmes. Il devenait ainsi facile de pointer un doigt
                  accusateur (et c’est toujours le cas actuellement) sur ceux
                  qui ont réussi leur vie économique en disant : « il est dans
                  le Famla2» ; « c’est un sectaire3 » ; ou encore « il est pédé
                  4 » ; ceci suffisait à justifier leur fainéantise, comme quoi
                  leur échec est dû au fait qu’ils ne soient pas eux aussi
                  entrés dans des loges! Cette domination mentale dans laquelle
                  nous avons été ensevelis durant des siècles a fait de nous des
                  esclaves modernes et fiers de l’être. Il serait absurde de ne
                  pas vouloir comprendre les enjeux de créer votre propre
                  startup, votre propre business ou plus simplement votre propre
                  entreprise, lorsqu’on maîtrise l’impact de ce processus dans
                  le développement et l’indépendance économique d’un pays, même
                  si cela n’est point la seule manière de réussir sa vie ou même
                  encore d’acquérir une certaine autosatisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div
            className={`border-t ${
              isDarkMode
                ? "border-gray-700 bg-gray-800"
                : "border-gray-200 bg-white"
            } p-4`}
          >
            <div className="flex items-center justify-between">
              {/* Page Navigation */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    currentPage <= 1
                      ? "opacity-50 cursor-not-allowed"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
                  }`}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Précédent</span>
                </button>

                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    value={currentPage}
                    onChange={(e) =>
                      handlePageChange(parseInt(e.target.value) || 1)
                    }
                    className={`w-16 px-2 py-1 text-center rounded border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 text-white"
                        : "bg-white border-gray-300 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-primary-500`}
                  />
                  <span
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    / {book.totalPages}
                  </span>
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= book.totalPages}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    currentPage >= book.totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : isDarkMode
                      ? "text-gray-300 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
                  }`}
                >
                  <span>Suivant</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Zoom and Tools */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleZoom("out")}
                  disabled={zoom <= 50}
                  className={`p-2 rounded-lg transition-colors ${
                    zoom <= 50
                      ? "opacity-50 cursor-not-allowed"
                      : isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
                  }`}
                >
                  <ZoomOut className="h-4 w-4" />
                </button>

                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {zoom}%
                </span>

                <button
                  onClick={() => handleZoom("in")}
                  disabled={zoom >= 200}
                  className={`p-2 rounded-lg transition-colors ${
                    zoom >= 200
                      ? "opacity-50 cursor-not-allowed"
                      : isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
                  }`}
                >
                  <ZoomIn className="h-4 w-4" />
                </button>

                <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"></div>

                <button
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
                  }`}
                >
                  <Bookmark className="h-4 w-4" />
                </button>

                <button
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
                  }`}
                >
                  <Highlight className="h-4 w-4" />
                </button>

                <button
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" />
                </button>

                <button
                  className={`p-2 rounded-lg transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-700"
                      : "text-gray-600 hover:text-primary-600 hover:bg-gray-100"
                  }`}
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Mode Overlay */}
      {isReading && (
        <div className="fixed bottom-4 right-4 bg-primary-600 text-white p-4 rounded-lg shadow-large animate-slide-up">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4" />
              <span className="text-sm">Lecture audio</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  setReadingSpeed(Math.max(0.5, readingSpeed - 0.25))
                }
              >
                <SkipBack className="h-4 w-4" />
              </button>
              <span className="text-sm">{readingSpeed}x</span>
              <button
                onClick={() =>
                  setReadingSpeed(Math.min(2, readingSpeed + 0.25))
                }
              >
                <SkipForward className="h-4 w-4" />
              </button>
            </div>
            <button onClick={toggleReading}>
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookReader;
