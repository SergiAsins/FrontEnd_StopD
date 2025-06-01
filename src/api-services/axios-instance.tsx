import axios from "axios";
import { API_BASE_URL } from "../config/config";

//const apiUrl = "http://34.205.175.94:8080/api/v1/";
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1/";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  //withCredentials, true,
});

export default axiosInstance;
