import axios from "axios"
import { tokenManager } from "../utils/tokenManager"

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

apiClient.interceptors.request.use((config) => {
  const token = tokenManager.get()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      tokenManager.clear()
      window.location.href = "/auth/login"
    }
    return Promise.reject(error)
  }
)