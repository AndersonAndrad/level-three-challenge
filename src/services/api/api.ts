import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://192.168.15.38:3000',
});

export default api;
