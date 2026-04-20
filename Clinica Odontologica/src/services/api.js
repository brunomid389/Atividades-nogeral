import axios from 'axios';

// Configurar a URL API
const api = axios.create({
  baseURL: 'http://localhost:3001/api', // Ajuste cconforme a API
  headers: {
    'Content-Type': 'application/json'
  }
});

// adicionar token 
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
