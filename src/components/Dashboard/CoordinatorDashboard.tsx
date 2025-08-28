import React, { useState } from "react";
import {
  Plus,
  BookOpen,
  Users,
  TrendingUp,
  Video,
  Upload,
  Calendar,
  BarChart3,
  Edit,
  Trash2,
} from "lucide-react";

const CoordinatorDashboard: React.FC = () => {
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [showAddBook, setShowAddBook] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoUrl: "",
    category: "",
    level: "beginner",
    pdfFile: null as File | null,
    bookTitle: "",
    bookAuthor: "",
    bookCategory: "",
    bookDescription: "",
  });

  const stats = [
    {
      label: "Formations créées",
      value: "15",
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      label: "Étudiants actifs",
      value: "234",
      icon: Users,
      color: "text-green-600",
    },
    {
      label: "Livres ajoutés",
      value: "42",
      icon: Upload,
      color: "text-purple-600",
    },
    {
      label: "Taux de completion",
      value: "78%",
      icon: TrendingUp,
      color: "text-gold-600",
    },
  ];

  const recentCourses = [
    {
      id: 1,
      title: "Introduction au Business Model Canvas",
      students: 156,
      completion: 75,
      createdAt: "2025-01-15",
      status: "active",
    },
    {
      id: 2,
      title: "Stratégies de Financement pour Startups",
      students: 89,
      completion: 68,
      createdAt: "2025-01-10",
      status: "active",
    },
    {
      id: 3,
      title: "Marketing Digital pour Entrepreneurs",
      students: 203,
      completion: 82,
      createdAt: "2025-01-05",
      status: "active",
    },
  ];

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock course creation
    console.log("Creating course:", formData);
    setShowAddCourse(false);
    setFormData({
      ...formData,
      title: "",
      description: "",
      videoUrl: "",
      category: "",
      level: "beginner",
    });
  };

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock book creation
    console.log("Adding book:", formData);
    setShowAddBook(false);
    setFormData({
      ...formData,
      bookTitle: "",
      bookAuthor: "",
      bookCategory: "",
      bookDescription: "",
      pdfFile: null,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary-900 mb-2">
          Tableau de bord Coordinateur
        </h1>
        <p className="text-gray-600">
          Gérez vos formations et resources pour la communauté
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => setShowAddCourse(true)}
          className="bg-primary-600 text-white p-6 rounded-lg hover:bg-primary-700 transition-colors flex items-center space-x-3"
        >
          <Plus className="h-6 w-6" />
          <div className="text-left">
            <h3 className="font-semibold">Ajouter une formation</h3>
            <p className="text-sm text-primary-100">
              Créer une nouvelle formation vidéo
            </p>
          </div>
        </button>

        <button
          onClick={() => setShowAddBook(true)}
          className="bg-gold-600 text-white p-6 rounded-lg hover:bg-gold-700 transition-colors flex items-center space-x-3"
        >
          <Upload className="h-6 w-6" />
          <div className="text-left">
            <h3 className="font-semibold">Ajouter un livre</h3>
            <p className="text-sm text-gold-100">
              Enrichir la bibliothèque numérique
            </p>
          </div>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-primary-900">
                    {stat.value}
                  </p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Courses */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-primary-900 mb-6">
          Formations récentes
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Formation
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Étudiants
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Progression
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {recentCourses.map((course) => (
                <tr key={course.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">
                      {course.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      Status: {course.status}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{course.students}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${course.completion}%` }}
                        />
                      </div>
                      <span className="text-sm">{course.completion}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {new Date(course.createdAt).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-700">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Course Modal */}
      {showAddCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">
              Ajouter une formation
            </h3>
            <form onSubmit={handleAddCourse} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Titre de la formation
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Lien vidéo
                </label>
                <input
                  type="url"
                  required
                  value={formData.videoUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, videoUrl: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="business">Business</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                  <option value="tech">Technologie</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Niveau
                </label>
                <select
                  value={formData.level}
                  onChange={(e) =>
                    setFormData({ ...formData, level: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="beginner">Débutant</option>
                  <option value="intermediate">Intermédiaire</option>
                  <option value="advanced">Avancé</option>
                </select>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddCourse(false)}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
                >
                  Créer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Book Modal */}
      {showAddBook && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">
              Ajouter un livre
            </h3>
            <form onSubmit={handleAddBook} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Titre du livre
                </label>
                <input
                  type="text"
                  required
                  value={formData.bookTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, bookTitle: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Auteur
                </label>
                <input
                  type="text"
                  required
                  value={formData.bookAuthor}
                  onChange={(e) =>
                    setFormData({ ...formData, bookAuthor: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catégorie
                </label>
                <select
                  required
                  value={formData.bookCategory}
                  onChange={(e) =>
                    setFormData({ ...formData, bookCategory: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Sélectionner une catégorie</option>
                  <option value="business">Business</option>
                  <option value="finance">Finance</option>
                  <option value="marketing">Marketing</option>
                  <option value="tech">Technologie</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  required
                  value={formData.bookDescription}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      bookDescription: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fichier PDF
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  required
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pdfFile: e.target.files?.[0] || null,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddBook(false)}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 text-white bg-gold-600 rounded-md hover:bg-gold-700 transition-colors"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoordinatorDashboard;
