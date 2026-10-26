import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

const axiosService = async (method, url, reqBody = {}) => {
  return await axiosInstance({
    method,
    url,
    data: reqBody,
  });
};

export default axiosService;