import axios, { AxiosInstance } from 'axios';

export default function createApi():AxiosInstance{
  const timeOut = import.meta.env.VITE_TIME_OUT;
  const url = import.meta.env.VITE_UPLOAD_URL;
  const baseURL = url;

  const axiosInstance = axios.create({baseURL: baseURL, timeout: timeOut});

  return axiosInstance;
}
