import axios from 'axios';

const api = axios.create({
  baseURL: 'https://scpobjetiva.com.br/api',
});

export default api;
