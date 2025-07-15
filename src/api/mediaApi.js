// src/api/mediaApi.js
import axios from 'axios';

const mediaAPI = axios.create({
  baseURL: import.meta.env.VITE_MEDIA_API, // Asegúrate de tener esta variable en tu .env
});

mediaAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 📤 Subir imagen
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  const res = await mediaAPI.post('/api/v1/media/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data.imageUrl; // Asumiendo que backend devuelve { imageUrl }
};
