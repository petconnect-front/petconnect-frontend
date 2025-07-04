import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { AuthContext } from './AuthContext.js';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loadUserFromToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUser(decoded);
      } catch (err) {
        console.error('Error al decodificar el token:', err);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUserFromToken();
    window.addEventListener('storage', loadUserFromToken);
    return () => window.removeEventListener('storage', loadUserFromToken);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
