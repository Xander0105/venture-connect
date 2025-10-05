import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { FIREBASE_COLLECTIONS } from '../../utils/constants';
import CreateProposalForm from '../proposals/CreateProposalForm';
import ProposalList from '../proposals/ProposalList';

const EntrepreneurDashboard = ({ user }) => {
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProposals = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const q = query(collection(db, FIREBASE_COLLECTIONS.PROPOSALS), where("ownerId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const userProposals = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      userProposals.sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate());
      setProposals(userProposals);
    } catch (error) {
      console.error('Error fetching proposals:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProposals();
  }, [user]);

  return (
    <div>
      <CreateProposalForm user={user} onProposalCreated={fetchProposals} />
      {loading ? (
        <p className="mt-6 text-center">Loading proposals...</p>
      ) : (
        <ProposalList proposals={proposals} />
      )}
    </div>
  );
};

export default EntrepreneurDashboard;
