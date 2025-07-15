import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../api/axiosClients';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verifica si hay token válido al cargar la app
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authAPI.get('/profile')
        .then((res) => {
          setUser(res.data);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setUser(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  // Función para hacer login
  const login = async (email, password) => {
    const res = await authAPI.post('/login', { email, password });
    localStorage.setItem('token', res.data.token);
    setUser(res.data.user);
    return res;
  };

  // Función para hacer logout
  const logout = async () => {
    try {
      await authAPI.post('/logout');
    } catch (err) {
      console.warn('Logout failed:', err.message);
    }
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
