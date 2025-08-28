import React, { useState } from "react";
import {
  Search,
  Send,
  MoreVertical,
  Phone,
  Video,
  Paperclip,
  Smile,
  Circle,
  Check,
  CheckCheck,
  Plus,
  Archive,
  Star,
  Trash2,
  Edit,
  Image as ImageIcon,
  File,
  Mic,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Claudel from '../../assets/dr claudel.jpg';

const MessagesPage: React.FC = () => {
  const { user } = useAuth();
  const [selectedConversation, setSelectedConversation] = useState<
    number | null
  >(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const conversations = [
    {
      id: 1,
      participant: {
        id: 2,
        name: "Claudel Noubissie",
        profession: "Mentor en Business",
        avatar: Claudel,
        isOnline: true,
        lastSeen: null,
      },
      lastMessage: {
        id: 5,
        content:
          "Parfait ! Je t'envoie le document dans la journée. À bientôt !",
        timestamp: "2025-01-20T15:30:00Z",
        senderId: 2,
        read: true,
      },
      unreadCount: 0,
      isPinned: true,
      isArchived: false,
    },
    {
      id: 2,
      participant: {
        id: 3,
        name: "Joelle Eyenga",
        profession: "Expert Marketing Digital",
        avatar: Claudel,
        isOnline: false,
        lastSeen: "2025-01-20T14:45:00Z",
      },
      lastMessage: {
        id: 8,
        content: "Super ! On peut programmer un appel cette semaine ?",
        timestamp: "2025-01-20T14:20:00Z",
        senderId: 3,
        read: false,
      },
      unreadCount: 2,
      isPinned: false,
      isArchived: false,
    },
    {
      id: 3,
      participant: {
        id: 4,
        name: "Samuel Eto'o",
        profession: "Consultant Business",
        avatar: Claudel,
        isOnline: true,
        lastSeen: null,
      },
      lastMessage: {
        id: 12,
        content: "Merci pour les conseils ! 🚀",
        timestamp: "2025-01-20T11:15:00Z",
        senderId: 4,
        read: true,
      },
      unreadCount: 0,
      isPinned: false,
      isArchived: false,
    },
    {
      id: 4,
      participant: {
        id: 5,
        name: "Alice Nkom",
        profession: "Experte Finance",
        avatar:Claudel,
        isOnline: false,
        lastSeen: "2025-01-19T18:30:00Z",
      },
      lastMessage: {
        id: 15,
        content: "Les analyses financières sont prêtes pour révision",
        timestamp: "2025-01-19T16:45:00Z",
        senderId: 5,
        read: true,
      },
      unreadCount: 0,
      isPinned: false,
      isArchived: false,
    },
  ];

  const messages = {
    1: [
      {
        id: 1,
        content:
          "Salut ! J'ai vu ton profil et je serais intéressé par tes services de mentoring. Peux-tu me dire comment ça se passe ?",
        timestamp: "2025-01-20T14:00:00Z",
        senderId: user?.id || "1",
        read: true,
        type: "text",
      },
      {
        id: 2,
        content:
          "Bonjour ! Merci pour ton message. Je serais ravi de t'accompagner. Mon approche se base sur des sessions individuelles où nous définissons ensemble tes objectifs et challenges.",
        timestamp: "2025-01-20T14:15:00Z",
        senderId: 2,
        read: true,
        type: "text",
      },
      {
        id: 3,
        content:
          "Ça m'intéresse beaucoup ! Quels sont tes tarifs et ta disponibilité ?",
        timestamp: "2025-01-20T14:20:00Z",
        senderId: user?.id || "1",
        read: true,
        type: "text",
      },
      {
        id: 4,
        content:
          "Je t'envoie un document avec tous les détails. Pour la disponibilité, j'ai des créneaux libres cette semaine et la suivante.",
        timestamp: "2025-01-20T14:25:00Z",
        senderId: 2,
        read: true,
        type: "text",
      },
      {
        id: 5,
        content:
          "Parfait ! Je t'envoie le document dans la journée. À bientôt !",
        timestamp: "2025-01-20T15:30:00Z",
        senderId: 2,
        read: true,
        type: "text",
      },
    ],
    2: [
      {
        id: 6,
        content:
          "Hello Sophie ! J'ai lu ton post sur le growth hacking, très intéressant !",
        timestamp: "2025-01-20T13:30:00Z",
        senderId: user?.id || "1",
        read: true,
        type: "text",
      },
      {
        id: 7,
        content:
          "Merci ! Tu travailles dans quel domaine ? Je serais curieuse d'en savoir plus sur ton projet.",
        timestamp: "2025-01-20T14:00:00Z",
        senderId: 3,
        read: true,
        type: "text",
      },
      {
        id: 8,
        content: "Super ! On peut programmer un call cette semaine ?",
        timestamp: "2025-01-20T14:20:00Z",
        senderId: 3,
        read: false,
        type: "text",
      },
    ],
  };

  const [messagesState, setMessagesState] = useState(messages);

  const filteredConversations = conversations.filter(
    (conv) =>
      conv.participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.participant.profession
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const selectedConv = conversations.find(
    (conv) => conv.id === selectedConversation
  );
  const conversationMessages = selectedConversation
    ? messagesState[selectedConversation] || []
    : [];

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatLastSeen = (timestamp: string) => {
    const now = new Date();
    const lastSeen = new Date(timestamp);
    const diffInMinutes = Math.floor(
      (now.getTime() - lastSeen.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 60) return `Vu il y a ${diffInMinutes}min`;
    if (diffInMinutes < 1440)
      return `Vu il y a ${Math.floor(diffInMinutes / 60)}h`;
    return `Vu il y a ${Math.floor(diffInMinutes / 1440)}j`;
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConversation) {
      const message = {
        id: Date.now(),
        content: newMessage,
        timestamp: new Date().toISOString(),
        senderId: user?.id || "1",
        read: false,
        type: "text",
      };

      setMessagesState((prev) => ({
        ...prev,
        [selectedConversation]: [
          ...(prev[selectedConversation] || []),
          message,
        ],
      }));

      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 animate-fade-in">
      {/* Header */}
      <div className="mb-6 md:mb-8 animate-fade-in-up">
        <h1 className="text-2xl md:text-3xl font-bold text-primary-900 mb-2">
          Messages Privés
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Communiquez directement avec les membres de la communauté
        </p>
      </div>

      <div
        className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden h-[500px] md:h-[600px] flex animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
        {/* Conversations List */}
        <div className="w-full md:w-1/3 border-r border-gray-200 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher une conversation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-sm md:text-base"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-all duration-300 hover:bg-gray-50 ${
                  selectedConversation === conversation.id
                    ? "bg-primary-50 border-primary-200"
                    : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={conversation.participant.avatar}
                      alt={conversation.participant.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-soft"
                    />
                    {conversation.participant.isOnline ? (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success-500 rounded-full border-2 border-white"></div>
                    ) : (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {conversation.participant.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        {conversation.isPinned && (
                          <Star className="h-3 w-3 text-gold-500 fill-current" />
                        )}
                        <span className="text-xs text-gray-500">
                          {formatTime(conversation.lastMessage.timestamp)}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-1">
                      {conversation.participant.profession}
                    </p>

                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500 truncate flex-1">
                        {conversation.lastMessage.senderId ===
                          (user?.id || "1") && (
                          <span className="mr-1">
                            {conversation.lastMessage.read ? (
                              <CheckCheck className="h-3 w-3 text-primary-600 inline" />
                            ) : (
                              <Check className="h-3 w-3 text-gray-400 inline" />
                            )}
                          </span>
                        )}
                        {conversation.lastMessage.content}
                      </p>
                      {conversation.unreadCount > 0 && (
                        <div className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ml-2">
                          {conversation.unreadCount}
                        </div>
                      )}
                    </div>

                    {!conversation.participant.isOnline &&
                      conversation.participant.lastSeen && (
                        <p className="text-xs text-gray-400 mt-1">
                          {formatLastSeen(conversation.participant.lastSeen)}
                        </p>
                      )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedConv ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-gray-50/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img
                        src={selectedConv.participant.avatar}
                        alt={selectedConv.participant.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      {selectedConv.participant.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {selectedConv.participant.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {selectedConv.participant.isOnline ? (
                          <span className="text-success-600">En ligne</span>
                        ) : (
                          selectedConv.participant.lastSeen &&
                          formatLastSeen(selectedConv.participant.lastSeen)
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                      <Phone className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                      <Video className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-4">
                {conversationMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.senderId === (user?.id || "1")
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.senderId === (user?.id || "1")
                          ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">
                        {message.content}
                      </p>
                      <div
                        className={`flex items-center justify-end mt-2 space-x-1 ${
                          message.senderId === (user?.id || "1")
                            ? "text-primary-100"
                            : "text-gray-500"
                        }`}
                      >
                        <span className="text-xs">
                          {formatTime(message.timestamp)}
                        </span>
                        {message.senderId === (user?.id || "1") &&
                          (message.read ? (
                            <CheckCheck className="h-3 w-3" />
                          ) : (
                            <Check className="h-3 w-3" />
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 bg-gray-50/50">
                <div className="flex items-end space-x-3">
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                      <Paperclip className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                      <ImageIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex-1 relative">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Tapez votre message..."
                      rows={1}
                      className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all duration-300"
                    />
                    <button className="absolute right-3 top-3 p-1 text-gray-400 hover:text-primary-600 transition-colors">
                      <Smile className="h-5 w-5" />
                    </button>
                  </div>

                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-soft hover:shadow-medium transform hover:scale-105"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Sélectionnez une conversation
                </h3>
                <p className="text-gray-500">
                  Choisissez une conversation pour commencer à échanger
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
