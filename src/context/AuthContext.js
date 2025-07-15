import { createContext, useContext, useState } from 'react';
import { login as loginAPI, logout as logoutAPI, getProfile } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const response = await loginAPI(credentials);
    const { token } = response.data;
    localStorage.setItem('token', token);
    const profile = await getProfile();
    setUser(profile.data);
  };

  const logout = async () => {
    await logoutAPI();
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
