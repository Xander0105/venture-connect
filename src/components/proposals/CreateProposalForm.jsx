import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { PROPOSAL_CATEGORIES, FIREBASE_COLLECTIONS } from '../../utils/constants';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

const CreateProposalForm = ({ user, onProposalCreated }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [category, setCategory] = useState(PROPOSAL_CATEGORIES[0]);
  const [fundingGoal, setFundingGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await addDoc(collection(db, FIREBASE_COLLECTIONS.PROPOSALS), {
        ownerId: user.uid,
        title,
        summary,
        category,
        fundingGoal: Number(fundingGoal),
        status: 'Submitted',
        createdAt: new Date(),
      });
      setSuccess('Proposal submitted successfully!');
      setTitle(''); setSummary(''); setCategory(PROPOSAL_CATEGORIES[0]); setFundingGoal('');
      onProposalCreated();
    } catch (err) {
      setError('Failed to submit proposal. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Business Proposal</h2>
      {error && <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4">{error}</p>}
      {success && <p className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input id="title" type="text" placeholder="Proposal Title" value={title} onChange={e => setTitle(e.target.value)} />
        <Textarea id="summary" placeholder="Executive Summary" value={summary} onChange={e => setSummary(e.target.value)} />
        <Input id="fundingGoal" type="number" placeholder="Funding Goal (INR)" value={fundingGoal} onChange={e => setFundingGoal(e.target.value)} />
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category:</label>
          <select id="category" value={category} onChange={e => setCategory(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            {PROPOSAL_CATEGORIES.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Proposal'}
        </Button>
      </form>
    </div>
  );
};

export default CreateProposalForm;
