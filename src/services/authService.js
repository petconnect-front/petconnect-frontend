import client from '../api/axiosClient';

export const login = (credentials) => client.post('/auth/login', credentials);
export const register = (data) => client.post('/auth/register', data);
export const getProfile = () => client.get('/auth/profile');
export const logout = () => client.post('/auth/logout');
export const refreshToken = (refresh) => client.post('/auth/refresh-token', { refreshToken: refresh });
