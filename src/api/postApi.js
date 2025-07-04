// src/api/postApi.js
import API from './axios';

const BASE_URL = 'http://localhost:4000/api/posts';

// ✅ Obtener todos los posts
export const getAllPosts = async () => {
  const res = await API.get(BASE_URL);
  return res.data;
};

// ✅ Crear un nuevo post
export const createPost = async (postData) => {
  const res = await API.post(BASE_URL, postData);
  return res.data;
};
