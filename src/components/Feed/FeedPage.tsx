import React, { useState } from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  MoreHorizontal,
  Image as ImageIcon,
  Video,
  FileText,
  Send,
  Bookmark,
  Flag,
  Edit,
  Trash2,
  Camera,
  Smile,
  Link,
  TrendingUp,
  Users,
  Clock,
  Eye,
  X,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Claudel from '../../assets/dr claudel.jpg';

const FeedPage: React.FC = () => {
  const { user } = useAuth();
  const [newPostContent, setNewPostContent] = useState("");
  const [showPostModal, setShowPostModal] = useState(false);
  const [selectedPostType, setSelectedPostType] = useState<
    "text" | "image" | "video"
  >("text");
  const [activeFilter, setActiveFilter] = useState("all");

  const posts = [
    {
      id: 1,
      author: {
        id: 2,
        name: "Jean-Paul Biya",
        profession: "Business Mentor",
        avatar: Claudel,
      },
      content:
        "Excellente session de mentoring aujourd'hui à Douala avec 3 startups prometteuses ! 🚀 Le potentiel entrepreneurial au Cameroun est immense. Mon conseil du jour : concentrez-vous sur les besoins locaux.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      timestamp: "2025-01-20T14:30:00Z",
      likes: 42,
      comments: 8,
      shares: 3,
      liked: false,
      bookmarked: false,
      type: "image",
      tags: ["Cameroun", "startup", "mentorat"],
    },
    {
      id: 2,
      author: {
        id: 3,
        name: "Marie Tchuente",
        profession: "Growth Hacker",
        avatar: Claudel,
      },
      content:
        "Retour sur notre campagne marketing à Yaoundé : +300% de croissance ! 📈\n\nLes clés du succès :\n✅ Adaptation au marché local\n✅ Partenariats avec les commerces locaux\n✅ Marketing mobile\n✅ Analyse en temps réel\n\nQui veut en savoir plus ? 👇",
      timestamp: "2025-01-20T11:15:00Z",
      likes: 67,
      comments: 15,
      shares: 12,
      liked: true,
      bookmarked: true,
      type: "text",
      tags: ["marketing", "Yaoundé", "croissance"],
    },
    {
      id: 3,
      author: {
        id: 4,
        name: "Paul Etoga",
        profession: "CTO",
        avatar: Claudel,
      },
      content:
        "Nouvelle vidéo sur le développement mobile en Afrique ! Focus sur les solutions adaptées au marché camerounais et les défis de connectivité.",
      videoUrl: "https://example.com/video.mp4",
      videoThumbnail:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      timestamp: "2025-01-20T09:45:00Z",
      likes: 89,
      comments: 23,
      shares: 18,
      liked: false,
      bookmarked: false,
      type: "video",
      tags: ["tech", "mobile", "Afrique"],
    },
    {
      id: 4,
      author: {
        id: 1,
        name: "Dr Claudel",
        profession: "UX Designer",
        avatar:Claudel,
      },
      content:
        'Startup Weekend Douala : quelle énergie ! 48h intenses avec des entrepreneurs talentueux. Notre projet "EcoTrack Cameroun" a gagné ! 🏆\n\nMerci à tous les participants !',
      image:
        "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      timestamp: "2025-01-19T18:20:00Z",
      likes: 156,
      comments: 34,
      shares: 28,
      liked: true,
      bookmarked: false,
      type: "image",
      tags: ["Douala", "startup", "innovation"],
    },
    {
      id: 5,
      author: {
        id: 5,
        name: "Sarah Ngo Bakot",
        profession: "CFO",
        avatar: Claudel,
      },
      content:
        "💡 Finance au Cameroun : Les clés du succès\n\nConseils essentiels :\n1️⃣ Bien connaître le marché local\n2️⃣ Diversifier ses sources de financement\n3️⃣ Maintenir une réserve de trésorerie\n\n#FinanceAfrique #Entrepreneuriat",
      timestamp: "2025-01-19T15:10:00Z",
      likes: 94,
      comments: 19,
      shares: 31,
      liked: false,
      bookmarked: true,
      type: "text",
      tags: ["finance", "Cameroun", "conseil"],
    },
  ];

  const [postsState, setPostsState] = useState(posts);

  const filters = [
    { id: "all", name: "Tout", icon: TrendingUp },
    { id: "text", name: "Articles", icon: FileText },
    { id: "image", name: "Images", icon: ImageIcon },
    { id: "video", name: "Vidéos", icon: Video },
  ];

  const filteredPosts = postsState.filter(
    (post) => activeFilter === "all" || post.type === activeFilter
  );

  const handleLike = (postId: number) => {
    setPostsState((posts) =>
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleBookmark = (postId: number) => {
    setPostsState((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
      )
    );
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInHours = Math.floor(
      (now.getTime() - postTime.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "À l'instant";
    if (diffInHours < 24) return `Il y a ${diffInHours}h`;
    return `Il y a ${Math.floor(diffInHours / 24)}j`;
  };

  const handleCreatePost = () => {
    if (newPostContent.trim()) {
      const newPost = {
        id: postsState.length + 1,
        author: {
          id: user?.id || "1",
          name: user?.name || "Utilisateur",
          profession: user?.profession || "Membre",
          avatar:
            user?.avatar ||
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        },
        content: newPostContent,
        timestamp: new Date().toISOString(),
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
        bookmarked: false,
        type: selectedPostType,
        tags: [],
      };

      setPostsState([newPost, ...postsState]);
      setNewPostContent("");
      setShowPostModal(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-4 md:mb-8 animate-fade-in-up">
        <h1 className="text-xl md:text-3xl font-bold text-primary-900 mb-1 md:mb-2">
          Fil d'Actualité
        </h1>
        <p className="text-gray-600 text-xs md:text-base">
          Découvrez les dernières actualités de la communauté Startup Academy
        </p>
      </div>

      {/* Filters */}
      <div
        className="bg-white rounded-2xl shadow-soft border border-gray-100 p-4 md:p-6 mb-6 md:mb-8 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-gray-900">Filtres</h2>
            <button
              onClick={() => setShowPostModal(true)}
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-1.5 rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center space-x-1 shadow-soft text-xs"
            >
              <Edit className="h-3 w-3" />
              <span>Publier</span>
            </button>
          </div>

          <div className="flex space-x-1 mb-3 overflow-x-auto pb-2">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-soft"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="h-3 w-3" />
                  <span className="text-xs font-medium">{filter.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between mb-4">
            <div className="flex space-x-2">
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      activeFilter === filter.id
                        ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-soft"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{filter.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setShowPostModal(true)}
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-300 flex items-center space-x-2 shadow-soft hover:shadow-medium transform hover:scale-105"
            >
              <Edit className="h-4 w-4" />
              <span>Publier</span>
            </button>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div
        className="space-y-4 md:space-y-6 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        {filteredPosts.map((post, index) => (
          <article
            key={post.id}
            className="bg-white rounded-xl md:rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-medium transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {/* Post Header */}
            <div className="p-4 md:p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover ring-2 ring-white shadow-soft"
                  />
                  <div>
                    <h3 className="font-semibold text-primary-900 text-sm md:text-base">
                      {post.author.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      {post.author.profession}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{formatTimeAgo(post.timestamp)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleBookmark(post.id)}
                    className={`p-1.5 md:p-2 rounded-lg transition-colors ${
                      post.bookmarked
                        ? "text-gold-600 bg-gold-100"
                        : "text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Bookmark className="h-3 w-3 md:h-4 md:w-4" />
                  </button>
                  <button className="p-1.5 md:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal className="h-3 w-3 md:h-4 md:w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-4 md:p-6">
              <div className="mb-4">
                <p className="text-gray-800 leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {post.content}
                </p>

                {/* Post Media */}
                {post.image && (
                  <div className="mb-4 rounded-lg md:rounded-xl overflow-hidden">
                    <img
                      src={post.image}
                      alt="Post content"
                      className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {post.videoThumbnail && (
                  <div className="mb-4 rounded-lg md:rounded-xl overflow-hidden relative group cursor-pointer">
                    <img
                      src={post.videoThumbnail}
                      alt="Video thumbnail"
                      className="w-full h-48 md:h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-large">
                        <Video className="h-6 w-6 md:h-8 md:w-8 text-primary-600" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 md:px-3 py-1 bg-primary-100 text-primary-800 text-xs md:text-sm rounded-full hover:bg-primary-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Post Actions */}
            <div className="px-4 md:px-6 py-3 md:py-4 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 md:space-x-6">
                  <button
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center space-x-2 transition-all duration-300 ${
                      post.liked
                        ? "text-red-600"
                        : "text-gray-500 hover:text-red-600"
                    }`}
                  >
                    <Heart
                      className={`h-4 w-4 md:h-5 md:w-5 ${
                        post.liked ? "fill-current" : ""
                      }`}
                    />
                    <span className="text-xs md:text-sm font-medium">
                      {post.likes}
                    </span>
                  </button>

                  <button className="flex items-center space-x-2 text-gray-500 hover:text-primary-600 transition-colors">
                    <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-xs md:text-sm font-medium">
                      {post.comments}
                    </span>
                  </button>

                  <button className="flex items-center space-x-2 text-gray-500 hover:text-green-600 transition-colors">
                    <Share2 className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-xs md:text-sm font-medium">
                      {post.shares}
                    </span>
                  </button>
                </div>

                <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-500">
                  <Eye className="h-3 w-3 md:h-4 md:w-4" />
                  <span>{Math.floor(Math.random() * 500) + 100} vues</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Create Post Modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-t-3xl md:rounded-2xl p-4 md:p-6 w-full max-w-lg mx-0 md:mx-4 animate-scale-in fixed bottom-0 md:relative md:bottom-auto">
            {/* Mobile handle bar */}
            <div className="block md:hidden w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-primary-900">
                Créer une publication
              </h3>
              <button
                onClick={() => setShowPostModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 md:p-0"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center space-x-3 mb-4 md:mb-4">
              <img
                src={
                  user?.avatar ||
                  "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                }
                alt={user?.name}
                className="w-10 h-10 md:w-10 md:h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-gray-900 text-sm md:text-base">
                  {user?.name}
                </div>
                <div className="text-xs md:text-sm text-gray-500">
                  {user?.profession}
                </div>
              </div>
            </div>

            <textarea
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Quoi de neuf ?"
              rows={6}
              className="w-full p-3 md:p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-sm md:text-base min-h-[120px] md:min-h-[100px]"
            />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 space-y-4 md:space-y-0">
              <div className="flex justify-center md:justify-start space-x-4 md:space-x-2">
                <button className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-1 p-3 md:p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl md:rounded-lg transition-colors">
                  <ImageIcon className="h-6 w-6 md:h-5 md:w-5" />
                  <span className="text-xs md:hidden">Photo</span>
                </button>
                <button className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-1 p-3 md:p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl md:rounded-lg transition-colors">
                  <Video className="h-6 w-6 md:h-5 md:w-5" />
                  <span className="text-xs md:hidden">Vidéo</span>
                </button>
                <button className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-1 p-3 md:p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl md:rounded-lg transition-colors">
                  <Link className="h-6 w-6 md:h-5 md:w-5" />
                  <span className="text-xs md:hidden">Lien</span>
                </button>
                <button className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-1 p-3 md:p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl md:rounded-lg transition-colors">
                  <Smile className="h-6 w-6 md:h-5 md:w-5" />
                  <span className="text-xs md:hidden">Emoji</span>
                </button>
              </div>

              <div className="flex space-x-3 md:space-x-3">
                <button
                  onClick={() => setShowPostModal(false)}
                  className="flex-1 md:flex-none px-4 py-3 md:py-2 text-gray-700 bg-gray-200 rounded-xl hover:bg-gray-300 transition-colors text-sm md:text-base"
                >
                  Annuler
                </button>
                <button
                  onClick={handleCreatePost}
                  disabled={!newPostContent.trim()}
                  className="flex-1 md:flex-none px-6 py-3 md:py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-soft hover:shadow-medium transform hover:scale-105 text-sm md:text-base"
                >
                  <Send className="h-4 w-4" />
                  <span>Publier</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 animate-fade-in-up">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Aucune publication trouvée
          </h3>
          <p className="text-gray-500">
            Soyez le premier à publier du contenu !
          </p>
        </div>
      )}
    </div>
  );
};

export default FeedPage;
