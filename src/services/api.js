import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketseat-launch.firebaseio.com/',
});

export default api;
