import React from 'react';

const ProposalList = ({ proposals }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Your Proposals</h2>
    {proposals.length === 0 ? (
      <p className="text-gray-600">You have not submitted any proposals yet.</p>
    ) : (
      <div className="space-y-4">
        {proposals.map(p => (
          <div key={p.id} className="border p-4 rounded-lg">
            <h3 className="font-bold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-500">{p.category} - ₹{p.fundingGoal.toLocaleString('en-IN')}</p>
            <p className="text-gray-700 mt-2">{p.summary}</p>
            <p className="mt-2">
              Status: <span className="font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">{p.status}</span>
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default ProposalList;
