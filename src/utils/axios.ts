import axios from "axios";

const axiosInstance = axios.create({
  // https://fake-api-roan.vercel.app/api/
  baseURL: "http://localhost:3000",
  headers: {},
});

export default axiosInstance;
