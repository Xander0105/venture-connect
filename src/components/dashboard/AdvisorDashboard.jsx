import React from 'react';
import BrowseAllProposals from '../proposals/BrowseAllProposals';

const AdvisorDashboard = ({ user }) => (
  <div>
    <h2 className="text-2xl font-bold text-gray-800 mt-6">Browse Proposals for Consultation</h2>
    <BrowseAllProposals user={user} actionButtonText="Offer Services" />
  </div>
);

export default AdvisorDashboard;
