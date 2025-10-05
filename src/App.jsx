import React, { useState } from 'react';
import { useAuth } from './hooks/useAuth';
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/landing/Header';
import HeroSection from './components/landing/HeroSection';
import FeaturesSection from './components/landing/FeaturesSection';
import RolesSection from './components/landing/RolesSection';
import Footer from './components/landing/Footer';
import LoginScreen from './components/auth/LoginScreen';
import RegisterScreen from './components/auth/RegisterScreen';

function App() {
  const [activeComponent, setActiveComponent] = useState('landing');
  const { user, userData, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (user && userData) {
    return <Dashboard user={user} userData={userData} />;
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case 'login':
        return <LoginScreen setActiveComponent={setActiveComponent} />;
      case 'register':
        return <RegisterScreen setActiveComponent={setActiveComponent} />;
      default:
        return (
          <>
            <Header setActiveComponent={setActiveComponent} />
            <main>
              <HeroSection setActiveComponent={setActiveComponent} />
              <FeaturesSection />
              <RolesSection />
            </main>
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="bg-white font-sans">
      {renderComponent()}
    </div>
  );
}

export default App;
