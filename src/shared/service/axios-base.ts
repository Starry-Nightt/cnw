import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "localhost:5000/",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.authorization = "";
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  const data = response.data;
  return data;
});

export default axiosInstance;
