// src/api/commentApi.js
import API from './axios';

const BASE_URL = '/api/comments'; // Ruta desde el API Gateway

// Obtener comentarios de un post específico
export const getCommentsByPost = async (postId) => {
  const res = await API.get(`${BASE_URL}?postId=${postId}`);
  return res.data;
};

// Crear un nuevo comentario
export const createComment = async (postId, commentData) => {
  const res = await API.post(BASE_URL, {
    postId,
    ...commentData
  });
  return res.data;
};
