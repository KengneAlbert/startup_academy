export interface User {
  id: string;
  email: string;
  name: string;
  role: 'member' | 'coordinator' | 'administrator';
  avatar?: string;
  profession?: string;
  bio?: string;
  location?: string;
  skills?: string[];
  experience?: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  joinDate: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  thumbnail: string;
  videoUrl: string;
  progress?: number;
  enrolled?: boolean;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  thumbnail: string;
  pdfUrl: string;
  downloadCount: number;
}

export interface Post {
  id: string;
  authorId: string;
  author: User;
  content: string;
  image?: string;
  video?: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
  liked?: boolean;
}

export interface Comment {
  id: string;
  authorId: string;
  author: User;
  content: string;
  timestamp: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
}