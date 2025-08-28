import React, { useState } from 'react';
import { 
  Download, 
  BookOpen, 
  Filter,
  Search,
  ChevronDown,
  Eye,
  Star,
  Calendar,
  User
} from 'lucide-react';
import BookDetail from './BookDetail';
import BookReader from './BookReader';
import Livre1 from '../../assets/livres/cent_idees_de_projets.jpg';
import Livre2 from '../../assets/livres/corona_virus.jpg';
import Livre3 from '../../assets/livres/creer_sa_structure_hospitaliere.jpg';
import Livre4 from '../../assets/livres/education_pour_enfants.jpg';
import Livre5 from '../../assets/livres/entreprendre_et_investir_autrement.jpg';
import Livre6 from '../../assets/livres/femme_patrone.jpg';
import Livre7 from '../../assets/livres/investisseur_immobilier.jpg';
import Livre8 from '../../assets/livres/la_fonction_marketing_a_hopital.jpg';
import Livre9 from '../../assets/livres/le_jeune_entrepreneur_africain_tome_un.jpg';
import Livre10 from '../../assets/livres/le_prix_de_la_reussite.jpg';
import Livre11 from '../../assets/livres/les_secrets_des_meilleurs_vendeurs.jpg';
import Livre12 from '../../assets/livres/marketing_relationnel.jpg';

const LibraryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentView, setCurrentView] = useState<'list' | 'detail' | 'reader'>('list');
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  const books = [
    {
      id: 1,
      title: 'Le jeune entrepreneur africain',
      author: 'Claudel Noubisie',
      category: 'business',
      description: 'Une approche révolutionnaire pour créer des entreprises plus rapidement et plus intelligemment',
      thumbnail: Livre9,
      pdfUrl: '#',
      downloadCount: 1247,
      rating: 4.8,
      publishedDate: '2011-09-13',
      pages: 336
    },
    {
      id: 2,
      title: 'Tontine Structurelle en Afrique',
      author: 'Claudel Noubissie',
      category: 'business',
      description: 'Comment les tontines peuvent transformer le financement des PME en Afrique',
      thumbnail: Livre5,
      pdfUrl: '#',
      downloadCount: 892,
      rating: 4.6,
      publishedDate: '2014-09-16',
      pages: 224
    },
    {
      id: 3,
      title: 'Corona Virus',
      author: 'Dr Claudel Noubissie',
      category: 'santé',
      description: 'Une pendémie mondiale et son impact sur la santé publique',
      thumbnail: Livre2,
      pdfUrl: '#',
      downloadCount: 634,
      rating: 4.7,
      publishedDate: '2020-01-01',
      pages: 288
    },
    {
      id: 4,
      title: "Guide pratique pour l'éducation des enfants",
      author: 'Claudel Noubissie',
      category: 'education',
      description: 'Stratégies efficaces pour élever des enfants heureux et en bonne santé',
      thumbnail: Livre4,
      pdfUrl: '#',
      downloadCount: 567,
      rating: 4.5,
      publishedDate: '2019-03-15',
      pages: 336
    },
    {
      id: 5,
      title: 'La Femme du Patron',
      author: 'Yael Motaze',
      category: 'couple',
      description: 'Récit inspirant d\'une femme qui soutient son mari entrepreneur',
      thumbnail: Livre6,
      pdfUrl: '#',
      downloadCount: 423,
      rating: 4.4,
      publishedDate: '2024-07-01',
      pages: 272
    },
    {
      id: 6,
      title: 'Guide Pratique de l\'Investisseur Immobilier',
      author: 'Augustin Noubissie',
      category: 'Immobilier',
      description: 'Stratégies pour réussir dans l\'investissement immobilier en Afrique',
      thumbnail: Livre7,
      pdfUrl: '#',
      downloadCount: 789,
      rating: 4.6,
      publishedDate: '2019-03-04',
      pages: 304
    },
    {
      id: 7,
      title: 'Marketing Relationnel',
      author: 'Claudel Noubissie',
      category: 'marketing',
      description: 'Techniques avancées pour fidéliser les clients et augmenter les ventes',
      thumbnail: Livre12,
      pdfUrl: '#',
      downloadCount: 1123,
      rating: 4.9,
      publishedDate: '2008-08-01',
      pages: 464
    },
    {
      id: 8,
      title: 'Le prix de la réussite',
      author: 'Claudel Noubissie',
      category: 'business',
      description: 'Les sacrifices nécessaires pour atteindre le succès entrepreneurial',
      thumbnail: Livre10,
      pdfUrl: '#',
      downloadCount: 345,
      rating: 4.3,
      publishedDate: '2017-08-17',
      pages: 272
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les domaines' },
    { id: 'business', name: 'Business' },
    { id: 'finance', name: 'Finance' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'tech', name: 'Technologie' }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'business': return 'bg-blue-100 text-blue-800';
      case 'finance': return 'bg-green-100 text-green-800';
      case 'marketing': return 'bg-purple-100 text-purple-800';
      case 'tech': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'business': return 'Business';
      case 'finance': return 'Finance';
      case 'marketing': return 'Marketing';
      case 'tech': return 'Tech';
      default: return category;
    }
  };

  const handleBookClick = (bookId: string) => {
    setSelectedBookId(bookId);
    setCurrentView('detail');
  };

  const handleReadBook = (bookId: string) => {
    setSelectedBookId(bookId);
    setCurrentView('reader');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedBookId(null);
  };

  // Render different views
  if (currentView === 'detail' && selectedBookId) {
    return (
      <BookDetail 
        bookId={selectedBookId} 
        onBack={handleBackToList}
        onRead={handleReadBook}
      />
    );
  }

  if (currentView === 'reader' && selectedBookId) {
    return (
      <BookReader 
        bookId={selectedBookId}
        onBack={handleBackToList}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6 md:mb-8 animate-fade-in-up">
        <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
          Bibliothèque Numérique
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Accédez à une collection de livres expertisés pour entrepreneurs
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un livre ou un auteur..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
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
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        {filteredBooks.map((book) => (
          <div key={book.id} className="group bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium transition-all duration-500 hover:scale-105 animate-slide-up">
            <div className="relative">
              <img
                src={book.thumbnail}
                alt={book.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(book.category)}`}>
                  {getCategoryLabel(book.category)}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <div className="bg-black/75 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-current" />
                  <span>{book.rating}</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-large">
                  <Eye className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-primary-900 mb-1 line-clamp-2">
                {book.title}
              </h3>
              
              <div className="flex items-center space-x-1 mb-3">
                <User className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{book.author}</span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {book.description}
              </p>

              <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(book.publishedDate).getFullYear()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{book.pages} pages</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <Download className="h-4 w-4" />
                  <span>{book.downloadCount} téléchargements</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 text-sm shadow-soft hover:shadow-medium transform hover:scale-105">
                  <Download className="h-4 w-4" />
                  <span>Télécharger</span>
                </button>
                <button 
                  onClick={() => handleBookClick(book.id.toString())}
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-soft hover:shadow-medium transform hover:scale-105"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucun livre trouvé
          </h3>
          <p className="text-gray-500">
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}
    </div>
  );
};

export default LibraryPage;