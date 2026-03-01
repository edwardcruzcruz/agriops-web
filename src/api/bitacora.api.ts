import axios from "axios";

export const bitacoraApi = axios.create({
    baseURL: import.meta.env.VITE_BITACORA_BASE_URL,
});

bitacoraApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

bitacoraApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      const requestUrl = error.config?.url;
      // El servidor respondió con error
      if (status === 401 && requestUrl !== "/auth/login") {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    } 

    return Promise.reject(error);
  }
);