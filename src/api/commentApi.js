// src/api/commentApi.js
import { commentAPI } from './axiosClients'; // instancia desde axiosClients.js

// Obtener comentarios de un post específico
export const getCommentsByPost = async (postId) => {
  const res = await commentAPI.get(`/?postId=${postId}`);
  return res.data;
};

// Crear un nuevo comentario
export const createComment = async (postId, commentData) => {
  const res = await commentAPI.post('/', {
    postId,
    ...commentData,
  });
  return res.data;
};
