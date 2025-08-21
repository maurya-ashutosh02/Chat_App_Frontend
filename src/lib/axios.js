// lib/axios.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-app-backend-67t6.onrender.com/app"
  //import.meta.env.MODE==="development"? "http://localhost:5000/app":"/app",
  withCredentials: true // ✅ important for cookies
});
