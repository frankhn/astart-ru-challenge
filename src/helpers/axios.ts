import axios from 'axios';

const http = axios.create({
  baseURL: 'https://u38027.netangels.ru',
  headers: {
    Authorization: 'JWT ',
    'access-control-allow-origin': '*',
    'content-Type': 'application/json',
  },
});

http.interceptors.request.use(request => {
  request.headers.Authorization = 'JWT ';
  return request;
});

export default http;
