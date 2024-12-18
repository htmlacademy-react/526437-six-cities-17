import axios from 'axios';

export default function useRequest(){
  const baseURL: string = 'https://16.design.htmlacademy.pro';

  const axiosInstance = axios.create({baseURL});

  return axiosInstance;
}
