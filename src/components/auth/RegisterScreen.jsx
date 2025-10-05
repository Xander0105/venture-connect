import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { USER_ROLES } from '../../utils/constants';
import Button from '../ui/Button';
import Input from '../ui/Input';

const RegisterScreen = ({ setActiveComponent }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState(USER_ROLES.ENTREPRENEUR);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        fullName,
        email,
        role,
        createdAt: new Date()
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Join VentureConnect</h2>
        {error && <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <Input id="fullName" type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <Input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">I am an:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>{USER_ROLES.ENTREPRENEUR}</option>
              <option>{USER_ROLES.INVESTOR}</option>
              <option>{USER_ROLES.BANKER}</option>
              <option>{USER_ROLES.BUSINESS_ADVISOR}</option>
            </select>
          </div>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{' '}
          <button 
            onClick={() => setActiveComponent('login')} 
            className="text-blue-600 hover:underline bg-transparent border-none cursor-pointer"
          >
            Log In
          </button>
        </p>
        <p className="text-center mt-2">
          <button 
            onClick={() => setActiveComponent('landing')} 
            className="text-blue-600 hover:underline bg-transparent border-none cursor-pointer"
          >
            ← Back to Home
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;
