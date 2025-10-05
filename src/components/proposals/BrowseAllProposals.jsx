import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { FIREBASE_COLLECTIONS, PROPOSAL_CATEGORIES } from '../../utils/constants';
import Button from '../ui/Button';
import Input from '../ui/Input';

const BrowseAllProposals = ({ user, actionButtonText }) => {
  const [allProposals, setAllProposals] = useState([]);
  const [filteredProposals, setFilteredProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchAllProposals = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, FIREBASE_COLLECTIONS.PROPOSALS));
        const proposals = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        proposals.sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate());
        setAllProposals(proposals);
        setFilteredProposals(proposals);
      } catch (error) {
        console.error('Error fetching proposals:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllProposals();
  }, []);

  useEffect(() => {
    let proposals = allProposals;
    if (categoryFilter !== 'All') {
      proposals = proposals.filter(p => p.category === categoryFilter);
    }
    if (searchQuery) {
      proposals = proposals.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.summary.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProposals(proposals);
  }, [searchQuery, categoryFilter, allProposals]);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Input 
          type="text" 
          placeholder="Search by keyword..." 
          value={searchQuery} 
          onChange={e => setSearchQuery(e.target.value)} 
        />
        <select 
          value={categoryFilter} 
          onChange={e => setCategoryFilter(e.target.value)} 
          className="px-4 py-3 border border-gray-300 rounded-lg"
        >
          <option>All</option>
          {PROPOSAL_CATEGORIES.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          {filteredProposals.length > 0 ? (
            filteredProposals.map(p => (
              <div key={p.id} className="border p-4 rounded-lg flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-500">
                    {p.category} - ₹{p.fundingGoal.toLocaleString('en-IN')}
                  </p>
                  <p className="text-gray-700 mt-2">{p.summary}</p>
                </div>
                <Button className="bg-green-500 hover:bg-green-600 ml-4 flex-shrink-0">
                  {actionButtonText}
                </Button>
              </div>
            ))
          ) : (
            <p>No proposals found matching your criteria.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BrowseAllProposals;
