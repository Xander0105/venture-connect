import React from 'react';
import BrowseAllProposals from '../proposals/BrowseAllProposals';

const InvestorDashboard = ({ user }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Browse Investment Opportunities</h2>
    <BrowseAllProposals user={user} actionButtonText="Express Interest" />
  </div>
);

export default InvestorDashboard;
