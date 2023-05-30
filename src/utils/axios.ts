import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fake-api-roan.vercel.app/api/",
  headers: {},
});

export default axiosInstance;
