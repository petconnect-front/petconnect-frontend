import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api',
});

// Añadir token a cada request si existe
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
