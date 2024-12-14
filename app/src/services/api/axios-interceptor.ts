import axios, { AxiosError } from 'axios';
import { AppError } from '../../types/errors';
import { API_BASE_URL } from '../../utils/constants';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleAxiosError = (error: AxiosError): AppError => {
  const message = error.response?.data?.message || error.message;
  return new AppError(message);
};

// Request interceptor
api.interceptors.request.use(
  (config) => config,
  (error: AxiosError) => Promise.reject(handleAxiosError(error))
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(handleAxiosError(error))
);

export default api;