import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { USER_ROLES } from '../../utils/constants';
import Button from '../ui/Button';
import EntrepreneurDashboard from './EntrepreneurDashboard';
import InvestorDashboard from './InvestorDashboard';
import BankerDashboard from './BankerDashboard';
import AdvisorDashboard from './AdvisorDashboard';

const Dashboard = ({ user, userData }) => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  const renderRoleDashboard = () => {
    switch (userData.role) {
      case USER_ROLES.ENTREPRENEUR: 
        return <EntrepreneurDashboard user={user} />;
      case USER_ROLES.INVESTOR: 
        return <InvestorDashboard user={user} />;
      case USER_ROLES.BANKER: 
        return <BankerDashboard user={user} />;
      case USER_ROLES.BUSINESS_ADVISOR: 
        return <AdvisorDashboard user={user} />;
      default: 
        return <p>Invalid user role.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            Venture<span className="text-blue-600">Connect</span> Dashboard
          </div>
          <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600">Log Out</Button>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, {userData.fullName || user.email}!</h1>
          <p className="text-gray-600 mt-2">Your role: <span className="font-semibold text-blue-600">{userData.role}</span></p>
        </div>
        {renderRoleDashboard()}
      </main>
    </div>
  );
};

export default Dashboard;
