import axios from 'axios';

const apiHeaders = axios.create({
  baseURL: 'https://scpobjetiva.com.br/api',  
  headers: {
    'Content-Type': 'multipart/form-data' 
  }
});

export default apiHeaders;
