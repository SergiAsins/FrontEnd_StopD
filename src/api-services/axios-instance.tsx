import axios from "axios";
const apiUrl = "http://localhost:8080/api/v1/";
const axiosInstance = axios.create({
  baseURL: apiUrl,
  // timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  //withCredentials, true,
});

export default axiosInstance;
