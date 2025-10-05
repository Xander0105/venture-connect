import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { FIREBASE_COLLECTIONS } from '../../utils/constants';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

const BankerDashboard = ({ user }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  
  const fetchProducts = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const q = query(collection(db, FIREBASE_COLLECTIONS.FINANCIAL_PRODUCTS), where("bankerId", "==", user.uid));
      const querySnapshot = await getDocs(q);
      const bankerProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(bankerProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [user]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await addDoc(collection(db, FIREBASE_COLLECTIONS.FINANCIAL_PRODUCTS), {
        bankerId: user.uid,
        productName,
        description,
        createdAt: new Date(),
      });
      setProductName('');
      setDescription('');
      fetchProducts(); // Refresh list
    } catch (error) {
      console.error("Error adding product: ", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Add Financial Product</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <Input 
            type="text" 
            placeholder="Product Name (e.g., Small Business Loan)" 
            value={productName} 
            onChange={e => setProductName(e.target.value)} 
          />
          <Textarea 
            placeholder="Product Description" 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={submitting}>
            {submitting ? 'Adding...' : 'Add Product'}
          </Button>
        </form>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Financial Products</h2>
        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p>You have not added any products.</p>
        ) : (
          <div className="space-y-4">
            {products.map(p => (
              <div key={p.id} className="border p-4 rounded-lg">
                <h3 className="font-bold text-lg">{p.productName}</h3>
                <p className="text-gray-700 mt-2">{p.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BankerDashboard;
