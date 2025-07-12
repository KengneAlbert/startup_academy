import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Settings, 
  SkipBack, 
  SkipForward,
  ArrowLeft,
  CheckCircle,
  Clock,
  BookOpen,
  Download,
  MessageCircle,
  ThumbsUp,
  Share2,
  ChevronLeft,
  ChevronRight,
  FileText,
  Quiz,
  Code,
  Lightbulb
} from 'lucide-react';

interface LessonPlayerProps {
  courseId: string;
  lessonId: string;
  onBack: () => void;
}

const LessonPlayer: React.FC<LessonPlayerProps> = ({ courseId, lessonId, onBack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(25);
  const [showNotes, setShowNotes] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  // Mock lesson data
  const lesson = {
    id: 1,
    title: 'Qu\'est-ce que le Business Model Canvas ?',
    description: 'Introduction complète au Business Model Canvas, son histoire et ses applications pratiques dans le monde entrepreneurial.',
    duration: '12:30',
    type: 'video',
    videoUrl: 'https://example.com/video.mp4',
    completed: false,
    notes: [
      {
        time: '2:15',
        content: 'Le Business Model Canvas a été créé par Alexander Osterwalder'
      },
      {
        time: '5:30',
        content: 'Les 9 blocs principaux du canvas'
      },
      {
        time: '8:45',
        content: 'Exemples d\'entreprises utilisant le canvas'
      }
    ],
    transcript: [
      {
        time: '0:00',
        speaker: 'Marcus Chen',
        text: 'Bonjour et bienvenue dans cette formation sur le Business Model Canvas. Je suis Marcus Chen, votre instructeur pour cette série de cours.'
      },
      {
        time: '0:15',
        speaker: 'Marcus Chen',
        text: 'Aujourd\'hui, nous allons découvrir ensemble ce qu\'est le Business Model Canvas, pourquoi c\'est un outil essentiel pour tout entrepreneur, et comment vous pouvez l\'utiliser pour structurer votre idée d\'entreprise.'
      },
      {
        time: '0:35',
        speaker: 'Marcus Chen',
        text: 'Le Business Model Canvas est un outil de gestion stratégique qui permet de décrire, analyser et concevoir des modèles économiques de manière simple et visuelle.'
      }
    ],
    resources: [
      {
        title: 'Template Business Model Canvas',
        type: 'pdf',
        size: '2.3 MB',
        downloadUrl: '#'
      },
      {
        title: 'Exemples de Canvas célèbres',
        type: 'pdf',
        size: '1.8 MB',
        downloadUrl: '#'
      },
      {
        title: 'Checklist de validation',
        type: 'pdf',
        size: '0.9 MB',
        downloadUrl: '#'
      }
    ]
  };

  const course = {
    title: 'Introduction au Business Model Canvas',
    modules: [
      {
        id: 1,
        title: 'Introduction au Business Model Canvas',
        lessons: [
          {
            id: 1,
            title: 'Qu\'est-ce que le Business Model Canvas ?',
            duration: '12:30',
            type: 'video',
            completed: false,
            current: true
          },
          {
            id: 2,
            title: 'Histoire et évolution du Canvas',
            duration: '8:45',
            type: 'video',
            completed: false,
            current: false
          },
          {
            id: 3,
            title: 'Quiz : Concepts de base',
            duration: '5:00',
            type: 'quiz',
            completed: false,
            current: false
          }
        ]
      },
      {
        id: 2,
        title: 'Les 9 blocs du Canvas',
        lessons: [
          {
            id: 4,
            title: 'Segments de clientèle',
            duration: '15:20',
            type: 'video',
            completed: false,
            current: false
          },
          {
            id: 5,
            title: 'Proposition de valeur',
            duration: '18:15',
            type: 'video',
            completed: false,
            current: false
          }
        ]
      }
    ]
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return Play;
      case 'quiz': return Quiz;
      case 'exercise': return Code;
      case 'project': return Lightbulb;
      default: return FileText;
    }
  };

  const allLessons = course.modules.flatMap(module => 
    module.lessons.map(lesson => ({ ...lesson, moduleTitle: module.title }))
  );
  const currentIndex = allLessons.findIndex(l => l.id === parseInt(lessonId));
  const previousLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors group"
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span>Retour au cours</span>
          </button>
          
          <div className="text-center text-white">
            <h1 className="text-lg font-semibold">{lesson.title}</h1>
            <p className="text-sm text-gray-300">{course.title}</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-white text-sm">
              {currentIndex + 1} / {allLessons.length}
            </div>
            <button className="text-white hover:text-gray-300 transition-colors">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Video Player */}
          <div className="relative bg-black flex-1 flex items-center justify-center">
            <div className="w-full h-full max-w-6xl mx-auto relative">
              {/* Video placeholder */}
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {isPlaying ? (
                      <Pause className="h-8 w-8" />
                    ) : (
                      <Play className="h-8 w-8 ml-1" />
                    )}
                  </div>
                  <p className="text-lg font-medium">{lesson.title}</p>
                  <p className="text-gray-400">{lesson.duration}</p>
                </div>
              </div>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-600 rounded-full h-1 cursor-pointer">
                    <div
                      className="bg-primary-600 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="h-5 w-5 text-white" />
                      ) : (
                        <Play className="h-5 w-5 text-white ml-0.5" />
                      )}
                    </button>
                    
                    <button className="text-white hover:text-gray-300 transition-colors">
                      <SkipBack className="h-5 w-5" />
                    </button>
                    
                    <button className="text-white hover:text-gray-300 transition-colors">
                      <SkipForward className="h-5 w-5" />
                    </button>
                    
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white hover:text-gray-300 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </button>
                    
                    <div className="text-white text-sm">
                      3:15 / {lesson.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="text-white hover:text-gray-300 transition-colors">
                      <Settings className="h-5 w-5" />
                    </button>
                    <button className="text-white hover:text-gray-300 transition-colors">
                      <Maximize className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Navigation */}
          <div className="bg-gray-800 border-t border-gray-700 p-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {previousLesson && (
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="text-sm">Précédent: {previousLesson.title}</span>
                  </button>
                )}
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-success-600 text-white px-4 py-2 rounded-lg hover:bg-success-700 transition-colors">
                  <CheckCircle className="h-4 w-4" />
                  <span>Marquer comme terminé</span>
                </button>
                
                {nextLesson && (
                  <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    <span className="text-sm">Suivant: {nextLesson.title}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="bg-white p-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{lesson.title}</h2>
                  <p className="text-gray-600 mb-6">{lesson.description}</p>
                  
                  {/* Tabs */}
                  <div className="border-b border-gray-200 mb-6">
                    <nav className="flex space-x-8">
                      <button
                        onClick={() => {
                          setShowNotes(true);
                          setShowTranscript(false);
                        }}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          showNotes
                            ? 'border-primary-500 text-primary-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        Notes du cours
                      </button>
                      <button
                        onClick={() => {
                          setShowTranscript(true);
                          setShowNotes(false);
                        }}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                          showTranscript
                            ? 'border-primary-500 text-primary-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        Transcription
                      </button>
                    </nav>
                  </div>

                  {/* Notes */}
                  {showNotes && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Points clés</h3>
                      {lesson.notes.map((note, index) => (
                        <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                          <div className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-sm font-medium">
                            {note.time}
                          </div>
                          <p className="text-gray-700 flex-1">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Transcript */}
                  {showTranscript && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Transcription</h3>
                      {lesson.transcript.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm font-medium">
                            {item.time}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 mb-1">{item.speaker}</div>
                            <p className="text-gray-700">{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Resources */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Ressources</h3>
                    <div className="space-y-3">
                      {lesson.resources.map((resource, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                          <div className="flex items-center space-x-3">
                            <FileText className="h-5 w-5 text-gray-400" />
                            <div>
                              <div className="font-medium text-gray-900 text-sm">{resource.title}</div>
                              <div className="text-xs text-gray-500">{resource.type.toUpperCase()} • {resource.size}</div>
                            </div>
                          </div>
                          <button className="text-primary-600 hover:text-primary-700">
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center space-x-2 p-3 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                        <ThumbsUp className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">J'aime cette leçon</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 p-3 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                        <MessageCircle className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Poser une question</span>
                      </button>
                      <button className="w-full flex items-center space-x-2 p-3 bg-white rounded-lg border hover:bg-gray-50 transition-colors">
                        <Share2 className="h-4 w-4 text-gray-400" />
                        <span className="text-sm">Partager</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contenu du cours</h3>
            
            <div className="space-y-4">
              {course.modules.map((module) => (
                <div key={module.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h4 className="font-medium text-gray-900 text-sm">{module.title}</h4>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {module.lessons.map((moduleLesson) => {
                      const Icon = getLessonIcon(moduleLesson.type);
                      const isCurrent = moduleLesson.id === parseInt(lessonId);
                      
                      return (
                        <div
                          key={moduleLesson.id}
                          className={`px-4 py-3 flex items-center space-x-3 cursor-pointer transition-colors ${
                            isCurrent
                              ? 'bg-primary-50 border-r-2 border-primary-600'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex-shrink-0">
                            {moduleLesson.completed ? (
                              <CheckCircle className="h-4 w-4 text-success-600" />
                            ) : (
                              <Icon className={`h-4 w-4 ${isCurrent ? 'text-primary-600' : 'text-gray-400'}`} />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className={`text-sm font-medium truncate ${
                              isCurrent ? 'text-primary-900' : 'text-gray-900'
                            }`}>
                              {moduleLesson.title}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {moduleLesson.duration}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlayer;