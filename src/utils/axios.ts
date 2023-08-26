import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PROD_API_BASE_URL
    : process.env.NEXT_PUBLIC_DEV_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL,
  headers: {},
});

export default axiosInstance;
