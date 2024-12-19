import axios from 'axios';

export default function useRequest(){
  const url = import.meta.env.VITE_UPLOAD_URL;
  const baseURL = url;

  const axiosInstance = axios.create({baseURL});

  return axiosInstance;
}
