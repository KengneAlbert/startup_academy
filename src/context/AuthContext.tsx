import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "../types";
import Claudel from '../assets/claudel.jpg';

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
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem("startup-academy-user");
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
      id: "1",
      email: "member@startup.com",
      name: "Dr Claudel",
      role: "member",
      profession: "UX Designer",
      bio: "Passionné par la création de designs centrés sur l'utilisateur",
      location: "Yaoundé, CMR",
      skills: ["UX Design", "Prototypage", "Recherche utilisateur"],
      joinDate: "2025-01-15",
      avatar: Claudel,
      },
      {
      id: "2",
      email: "coordinator@startup.com",
      name: "Dilane Noféle",
      role: "coordinator",
      profession: "Mentor en Entrepreneuriat",
      bio: "Accompagnement des entrepreneurs dans le développement de startups",
      location: "Douala, Cameroun",
      skills: ["Stratégie d'entreprise", "Mentorat", "Levée de fonds"],
      joinDate: "2023-08-10",
      avatar:Claudel,
      },
      {
      id: "3",
      email: "admin@startup.com",
      name: "Mireille Tchaptchet",
      role: "administrator",
      profession: "Administratrice de la Plateforme",
      bio: "Gestion de la communauté Startup Academy",
      location: "Bafoussam, Cameroun",
      skills: ["Gestion de plateforme", "Animation de communauté", "Analyse de données"],
      joinDate: "2023-05-01",
      avatar:Claudel,
      },
    ];

    const foundUser = mockUsers.find((u) => u.email === email);
    if (foundUser && password === "password") {
      setUser(foundUser);
      setIsAuthenticated(true);
      localStorage.setItem("startup-academy-user", JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = async (userData: Partial<User>): Promise<boolean> => {
    // Mock registration logic
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: userData.email || "",
      name: userData.name || "",
      role: userData.role || "member",
      profession: userData.profession || "",
      bio: userData.bio || "",
      location: userData.location || "",
      skills: userData.skills || [],
      joinDate: new Date().toISOString().split("T")[0],
      avatar:Claudel,
    };

    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem("startup-academy-user", JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("startup-academy-user");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
