import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_API;

export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});
