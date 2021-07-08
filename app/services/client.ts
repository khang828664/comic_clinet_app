import axios from 'axios';
import  ApiConfig from 'app/config/api-config'
const apiClient = axios.create({
  baseURL: ApiConfig.BASE_URL,
  responseType: 'json',
  withCredentials: true,
});

export { apiClient };
