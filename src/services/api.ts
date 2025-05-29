// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona o interceptor depois de criar a instância
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  console.log('api.interceptors:token', token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const apiLogin = axios.create({
  baseURL: import.meta.env.VITE_API_LOGIN,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api, apiLogin };
