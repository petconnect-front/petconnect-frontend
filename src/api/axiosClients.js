import axios from 'axios';

export const authAPI = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API, // Ej: http://localhost:3000/api/v1/auth
});

export const postAPI = axios.create({
  baseURL: import.meta.env.VITE_POST_API, // Ej: http://localhost:3030/api/v1/posts
});

export const commentAPI = axios.create({
  baseURL: import.meta.env.VITE_COMMENT_API, // Ej: http://localhost:3031/api/v1/comments (define en .env)
});

export const mediaAPI = axios.create({
  baseURL: import.meta.env.VITE_MEDIA_API, // Ej: http://localhost:3034/api/v1/media
});

// Función para añadir interceptor de token a cada instancia
const addAuthInterceptor = (instance) => {
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
};

// Agregar interceptor a todas las APIs
addAuthInterceptor(authAPI);
addAuthInterceptor(postAPI);
addAuthInterceptor(commentAPI);
addAuthInterceptor(mediaAPI);
