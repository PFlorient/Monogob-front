import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useAuth } from '../store/useAuth';
import { ApiResponse } from '../common/types/apiResponse';

const baseURL =
  import.meta.env.VITE_BACK_OFFICE_API_URL + import.meta.env.VITE_BACK_OFFICE_API_VERSION;

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuth.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const get = async <T>(url: string, config?: AxiosRequestConfig) => {
  const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.get(url, config);
  return response.data;
};

const post = async <T>(url: string, data: unknown, config?: AxiosRequestConfig) => {
  const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.post(url, data, config);
  return response.data;
};

const patch = async <T>(url: string, data: unknown, config?: AxiosRequestConfig) => {
  const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.patch(url, data, config);
  return response.data;
};
const del = async <T>(url: string, config?: AxiosRequestConfig) => {
  const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.delete(url, config);
  return response.data;
};

export const axiosApi = {
  get,
  post,
  patch,
  del,
};
