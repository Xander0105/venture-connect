import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import Button from '../ui/Button';
import Input from '../ui/Input';

const LoginScreen = ({ setActiveComponent }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Log In to VentureConnect</h2>
        {error && <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <Input id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
            {loading ? 'Logging In...' : 'Log In'}
          </Button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{' '}
          <button 
            onClick={() => setActiveComponent('register')} 
            className="text-blue-600 hover:underline bg-transparent border-none cursor-pointer"
          >
            Sign Up
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

export default LoginScreen;
