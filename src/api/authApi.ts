import { apiClient } from "./axiosClient"
import type { LoginRequest, RegisterRequest, AuthResponse, User } from "../types/auth"

export const loginApi = async (data: LoginRequest) => {
  const res = await apiClient.post<AuthResponse>("/auth/login", data)
  return res.data
}

export const registerApi = async (data: RegisterRequest) => {
  const res = await apiClient.post<AuthResponse>("/auth/register", data)
  return res.data
}

export const getMe = async () => {
  const res = await apiClient.get<User>("/auth/me")
  return res.data
}

export const resetPasswordApi = async (email: string) => {
  const res = await apiClient.post("/auth/reset-password", { email })
  return res.data
}