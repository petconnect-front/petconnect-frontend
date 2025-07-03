import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/api', // Ajusta si tu API Gateway usa otro puerto
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
