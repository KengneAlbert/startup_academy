import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<User>) => Promise<boolean>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('startup-academy-user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication logic
    const mockUsers: User[] = [
      {
        id: '1',
        email: 'member@startup.com',
        name: 'Alice Johnson',
        role: 'member',
        profession: 'UX Designer',
        bio: 'Passionate about creating user-centered designs',
        location: 'Paris, France',
        skills: ['UX Design', 'Prototyping', 'User Research'],
        joinDate: '2024-01-15',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        id: '2',
        email: 'coordinator@startup.com',
        name: 'Marcus Chen',
        role: 'coordinator',
        profession: 'Business Mentor',
        bio: 'Helping entrepreneurs build successful startups',
        location: 'London, UK',
        skills: ['Business Strategy', 'Mentoring', 'Fundraising'],
        joinDate: '2023-08-10',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      },
      {
        id: '3',
        email: 'admin@startup.com',
        name: 'Sarah Williams',
        role: 'administrator',
        profession: 'Platform Administrator',
        bio: 'Managing the Startup Academy community',
        location: 'New York, USA',
        skills: ['Platform Management', 'Community Building', 'Analytics'],
        joinDate: '2023-05-01',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
      }
    ];

    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'password') {
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem('startup-academy-user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = async (userData: Partial<User>): Promise<boolean> => {
    // Mock registration logic
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: userData.email || '',
      name: userData.name || '',
      role: userData.role || 'member',
      profession: userData.profession || '',
      bio: userData.bio || '',
      location: userData.location || '',
      skills: userData.skills || [],
      joinDate: new Date().toISOString().split('T')[0],
      avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    };

    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('startup-academy-user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('startup-academy-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};