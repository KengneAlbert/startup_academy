import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/Layout/Sidebar';
import TopBar from './components/Layout/TopBar';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import MemberDashboard from './components/Dashboard/MemberDashboard';
import CoordinatorDashboard from './components/Dashboard/CoordinatorDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import CoursesPage from './components/Courses/CoursesPage';
import LibraryPage from './components/Library/LibraryPage';
import MembersPage from './components/Members/MembersPage';
import FeedPage from './components/Feed/FeedPage';
import MessagesPage from './components/Messages/MessagesPage';
import ProfilePage from './components/Profile/ProfilePage';
import ProjectsPage from './components/Projects/ProjectsPage';
import EventsPage from './components/Events/EventsPage';

const AppContent: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showLogin, setShowLogin] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!isAuthenticated) {
    return (
      <div>
        {showLogin ? (
          <LoginForm onToggleForm={() => setShowLogin(false)} />
        ) : (
          <RegisterForm onToggleForm={() => setShowLogin(true)} />
        )}
      </div>
    );
  }

  const renderDashboard = () => {
    switch (user?.role) {
      case 'coordinator':
        return <CoordinatorDashboard />;
      case 'administrator':
        return <AdminDashboard />;
      default:
        return <MemberDashboard />;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return renderDashboard();
      case 'courses':
        return <CoursesPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'events':
        return <EventsPage />;
      case 'library':
        return <LibraryPage />;
      case 'members':
        return <MembersPage />;
      case 'feed':
        return <FeedPage />;
      case 'messages':
        return <MessagesPage />;
      case 'profile':
        return <ProfilePage />;
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar 
          currentPage={currentPage} 
          onPageChange={setCurrentPage}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <main className={`flex-1 animate-fade-in pb-20 md:pb-0 ${
          isSidebarCollapsed ? 'md:ml-0' : 'md:ml-0'
        }`}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;