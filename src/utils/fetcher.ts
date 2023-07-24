import { AxiosError } from "axios";
import axios from "@/utils/axios";

interface ErrorResponse {
  message: string;
  // Add other fields as needed based on your API error response
}

export const getFetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError<ErrorResponse>;
    throw new Error(
      axiosError.response?.data?.message || "Failed to fetch data"
    );
  }
};
