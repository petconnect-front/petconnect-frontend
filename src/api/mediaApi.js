// src/api/mediaApi.js
import API from './axios';

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  const res = await API.post('/api/media', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data.url; // Asegúrate que el backend devuelva la URL en ese campo
};
