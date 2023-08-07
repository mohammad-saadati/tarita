import axios from "axios";

const axiosInstance = axios.create({
  // https://fake-api-roan.vercel.app/api/
  // http://localhost:3001
  baseURL: "http://localhost:3001",
  headers: {},
});

export default axiosInstance;
