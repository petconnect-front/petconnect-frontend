// src/api/registrationApi.js
import { authAPI } from './axiosClients'; // usamos auth-service directo, sin API Gateway

export const registerUser = async (userData) => {
  const res = await authAPI.post('/api/v1/auth/register', userData);
  return res.data;
};
