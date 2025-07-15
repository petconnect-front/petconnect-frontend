// src/api/postApi.js
import { postAPI } from './axiosClients'; // importar la instancia ya creada

// 🔁 Obtener todas las publicaciones
export const getAllPosts = async () => {
  const res = await postAPI.get('/'); // baseURL ya tiene /api/v1/posts
  return res.data;
};

// 📝 Crear una nueva publicación
export const createPost = async (postData) => {
  const res = await postAPI.post('/', postData);
  return res.data;
};
