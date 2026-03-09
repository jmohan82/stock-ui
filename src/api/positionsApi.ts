import { apiClient } from "./axiosClient"
import type { Position } from "../types/position"

export const getPositions = async (portfolioId: string) => {
  const res = await apiClient.get<Position[]>(
    `/portfolios/${portfolioId}/positions`
  )

  return res.data
}

export const closePosition = async (positionId: string) => {
  const res = await apiClient.post(`/positions/${positionId}/close`)
  return res.data
}