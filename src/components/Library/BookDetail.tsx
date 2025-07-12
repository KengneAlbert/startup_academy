import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Download, 
  Eye, 
  Star, 
  Calendar, 
  User, 
  BookOpen, 
  Heart, 
  Share2, 
  MessageCircle,
  ExternalLink,
  FileText,
  Clock,
  Award,
  TrendingUp,
  Users,
  Bookmark,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Settings,
  ChevronLeft,
  ChevronRight,
  Search,
  Highlight,
  Quote,
  Tag,
  Globe,
  Printer,
  Mail
} from 'lucide-react';

interface BookDetailProps {
  bookId: string;
  onBack: () => void;
  onRead: (bookId: string) => void;
}

const BookDetail: React.FC<BookDetailProps> = ({ bookId, onBack, onRead }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Mock book data - in real app, fetch by bookId
  const book = {
    id: 1,
    title: 'The Lean Startup',
    author: 'Eric Ries',
    category: 'business',
    description: 'Une approche révolutionnaire pour créer des entreprises plus rapidement et plus intelligemment',
    longDescription: 'The Lean Startup est une méthode révolutionnaire qui a changé la façon dont les entreprises sont créées et les nouveaux produits sont lancés. Eric Ries définit une startup comme une organisation humaine conçue pour créer un nouveau produit ou service dans des conditions d\'extrême incertitude. Cette approche favorise les entreprises qui sont à la fois plus efficaces en termes de capital et qui exploitent mieux la créativité humaine.',
    thumbnail: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    pdfUrl: '#',
    downloadCount: 1247,
    rating: 4.8,
    reviewsCount: 342,
    publishedDate: '2011-09-13',
    pages: 336,
    language: 'Français',
    publisher: 'Crown Business',
    isbn: '978-0307887894',
    fileSize: '2.3 MB',
    format: 'PDF',
    readTime: '8h 30m',
    difficulty: 'Intermédiaire',
    tags: ['Entrepreneuriat', 'Innovation', 'Startup', 'Lean', 'Méthodologie'],
    tableOfContents: [
      {
        chapter: 1,
        title: 'Start',
        pages: '1-25',
        sections: [
          'The Lean Startup Method',
          'Entrepreneurial Management',
          'Validated Learning'
        ]
      },
      {
        chapter: 2,
        title: 'Steer',
        pages: '26-180',
        sections: [
          'Build-Measure-Learn',
          'Minimum Viable Product',
          'Innovation Accounting',
          'Pivot (or Persevere)'
        ]
      },
      {
        chapter: 3,
        title: 'Accelerate',
        pages: '181-336',
        sections: [
          'Batch',
          'Grow',
          'Adapt',
          'Innovate'
        ]
      }
    ],
    keyTakeaways: [
      'Apprenez à construire une organisation qui apprend',
      'Maîtrisez le cycle Build-Measure-Learn',
      'Comprenez quand pivoter et quand persévérer',
      'Développez un produit minimum viable (MVP)',
      'Implémentez l\'innovation accounting',
      'Créez des moteurs de croissance durables'
    ],
    aboutAuthor: {
      name: 'Eric Ries',
      bio: 'Eric Ries est un entrepreneur et auteur américain. Il est le créateur de la méthodologie Lean Startup, qui a été adoptée dans le monde entier par des entrepreneurs et des entreprises établies.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievements: [
        'Fondateur de IMVU',
        'Entrepreneur en résidence à Harvard Business School',
        'Co-fondateur de Long-Term Stock Exchange',
        'Auteur de plusieurs bestsellers'
      ],
      otherBooks: [
        'The Startup Way',
        'The Leader\'s Guide'
      ]
    },
    reviews: [
      {
        id: 1,
        user: {
          name: 'Alice Johnson',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        rating: 5,
        comment: 'Un livre essentiel pour tout entrepreneur. La méthodologie Lean Startup a complètement changé ma façon d\'aborder le développement produit.',
        date: '2024-01-18',
        helpful: 23
      },
      {
        id: 2,
        user: {
          name: 'Thomas Dubois',
          avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        rating: 4,
        comment: 'Très bon livre avec des concepts pratiques. Quelques répétitions mais les exemples sont excellents.',
        date: '2024-01-16',
        helpful: 18
      },
      {
        id: 3,
        user: {
          name: 'Sophie Laurent',
          avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
        },
        rating: 5,
        comment: 'Indispensable ! J\'ai appliqué ces méthodes dans ma startup et les résultats sont impressionnants.',
        date: '2024-01-14',
        helpful: 31
      }
    ],
    relatedBooks: [
      {
        id: 2,
        title: 'Zero to One',
        author: 'Peter Thiel',
        thumbnail: 'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        rating: 4.6
      },
      {
        id: 3,
        title: 'The Innovator\'s Dilemma',
        author: 'Clayton M. Christensen',
        thumbnail: 'https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        rating: 4.7
      },
      {
        id: 4,
        title: 'Crossing the Chasm',
        author: 'Geoffrey A. Moore',
        thumbnail: 'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop',
        rating: 4.4
      }
    ]
  };

  const tabs = [
    { id: 'overview', label: 'Aperçu', icon: BookOpen },
    { id: 'contents', label: 'Table des matières', icon: FileText },
    { id: 'author', label: 'Auteur', icon: User },
    { id: 'reviews', label: 'Avis', icon: Star }
  ];

  const stats = [
    { label: 'Téléchargements', value: book.downloadCount.toLocaleString(), icon: Download, color: 'text-blue-600' },
    { label: 'Note moyenne', value: book.rating.toString(), icon: Star, color: 'text-gold-600' },
    { label: 'Avis', value: book.reviewsCount.toString(), icon: MessageCircle, color: 'text-green-600' },
    { label: 'Pages', value: book.pages.toString(), icon: BookOpen, color: 'text-purple-600' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors group"
      >
        <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
        <span>Retour à la bibliothèque</span>
      </button>

      {/* Book Header */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden mb-8 animate-fade-in-up">
        <div className="p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
            {/* Book Cover */}
            <div className="flex-shrink-0 mb-6 lg:mb-0">
              <div className="relative group">
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="w-48 h-64 md:w-56 md:h-72 object-cover rounded-xl shadow-large mx-auto lg:mx-0 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-large">
                    <Eye className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Book Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full">
                      {book.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {book.difficulty}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-4xl font-bold text-primary-900 mb-2">{book.title}</h1>
                  <p className="text-lg md:text-xl text-gray-700 mb-4">par {book.author}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{book.description}</p>
                </div>
                
                <div className="flex flex-col space-y-2 ml-4">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 rounded-xl transition-colors ${
                      isLiked ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className={`p-3 rounded-xl transition-colors ${
                      isBookmarked ? 'bg-gold-100 text-gold-600' : 'bg-gray-100 text-gray-600 hover:bg-gold-50 hover:text-gold-600'
                    }`}
                  >
                    <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-3 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Book Details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-lg font-bold text-gray-900">{book.pages}</div>
                  <div className="text-xs text-gray-600">Pages</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-lg font-bold text-gray-900">{book.readTime}</div>
                  <div className="text-xs text-gray-600">Lecture</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-lg font-bold text-gray-900">{book.language}</div>
                  <div className="text-xs text-gray-600">Langue</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl">
                  <div className="text-lg font-bold text-gray-900">{book.fileSize}</div>
                  <div className="text-xs text-gray-600">Taille</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(book.rating) ? 'text-gold-500 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">{book.rating}</span>
                <span className="text-gray-600">({book.reviewsCount} avis)</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => onRead(book.id.toString())}
                  className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium transform hover:scale-105"
                >
                  <Eye className="h-5 w-5" />
                  <span>Lire en ligne</span>
                </button>
                <button className="flex-1 bg-gradient-to-r from-success-600 to-success-700 text-white px-6 py-3 rounded-xl hover:from-success-700 hover:to-success-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium transform hover:scale-105">
                  <Download className="h-5 w-5" />
                  <span>Télécharger PDF</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="border-t border-gray-100 p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center mb-2">
                    <Icon className={`h-6 w-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-primary-900">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-gray-100">
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
                <p className="text-gray-700 leading-relaxed mb-6">{book.longDescription}</p>
                
                <h3 className="text-lg font-semibold text-primary-900 mb-3">Points clés</h3>
                <div className="space-y-3">
                  {book.keyTakeaways.map((takeaway, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">Mots-clés</h2>
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full hover:bg-primary-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Book Info */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">Informations</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Éditeur</span>
                    <span className="font-medium">{book.publisher}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Publication</span>
                    <span className="font-medium">{new Date(book.publishedDate).getFullYear()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">ISBN</span>
                    <span className="font-medium text-sm">{book.isbn}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Format</span>
                    <span className="font-medium">{book.format}</span>
                  </div>
                </div>
              </div>

              {/* Related Books */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">Livres similaires</h3>
                <div className="space-y-4">
                  {book.relatedBooks.map((relatedBook) => (
                    <div key={relatedBook.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <img
                        src={relatedBook.thumbnail}
                        alt={relatedBook.title}
                        className="w-12 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm truncate">{relatedBook.title}</h4>
                        <p className="text-xs text-gray-600 truncate">{relatedBook.author}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-3 w-3 text-gold-500 fill-current" />
                          <span className="text-xs text-gray-600">{relatedBook.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Table of Contents Tab */}
        {activeTab === 'contents' && (
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-primary-900 mb-6">Table des matières</h2>
            
            <div className="space-y-6">
              {book.tableOfContents.map((chapter) => (
                <div key={chapter.chapter} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">
                        Chapitre {chapter.chapter}: {chapter.title}
                      </h3>
                      <span className="text-sm text-gray-600">Pages {chapter.pages}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-3">
                      {chapter.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors cursor-pointer">
                          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                          <span>{section}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Author Tab */}
        {activeTab === 'author' && (
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="flex items-center space-x-6 mb-8">
              <img
                src={book.aboutAuthor.avatar}
                alt={book.aboutAuthor.name}
                className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-large"
              />
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-2">{book.aboutAuthor.name}</h2>
                <p className="text-gray-600 leading-relaxed">{book.aboutAuthor.bio}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-4">Réalisations</h3>
                <div className="space-y-3">
                  {book.aboutAuthor.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-gold-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-4">Autres livres</h3>
                <div className="space-y-3">
                  {book.aboutAuthor.otherBooks.map((otherBook, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                      <BookOpen className="h-5 w-5 text-primary-600" />
                      <span className="text-gray-700">{otherBook}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold text-primary-900">Avis des lecteurs</h2>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-gold-500 fill-current" />
                <span className="text-lg font-bold">{book.rating}</span>
                <span className="text-gray-600">({book.reviewsCount} avis)</span>
              </div>
            </div>

            <div className="space-y-6">
              {book.reviews.map((review) => (
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
                      <p className="text-gray-700 leading-relaxed mb-3">{review.comment}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <button className="hover:text-primary-600 transition-colors">
                          Utile ({review.helpful})
                        </button>
                        <button className="hover:text-primary-600 transition-colors">
                          Répondre
                        </button>
                      </div>
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

export default BookDetail;