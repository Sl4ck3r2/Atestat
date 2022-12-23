import axios from 'axios';
import { toast } from 'react-hot-toast';

export const BASE_PATH = process.env.REACT_APP_BACKEND_BASE_URL ?? 'http://localhost:3001/api';

const axiosInstance = axios.create({
  baseURL: BASE_PATH,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    const { data } = response;

    if (!data) {
      toast.error('An error occurred');
      return Promise.reject(error);
    }

    //toast.error(`${data.message}: ${data.error}`);
    return Promise.reject(error);
  },
);

export default axiosInstance;
