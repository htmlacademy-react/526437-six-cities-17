import axios, { AxiosInstance } from 'axios';

export default function createApi():AxiosInstance{

  const token: string | null = window.localStorage.getItem('token');

  const timeOut = import.meta.env.VITE_TIME_OUT;
  const url = import.meta.env.VITE_UPLOAD_URL;
  const baseURL = url;

  const axiosInstance = axios.create({baseURL: baseURL, timeout: timeOut});

  axiosInstance.defaults.headers.common['X-Token'] = `${token}` || '';

  return axiosInstance;
}
