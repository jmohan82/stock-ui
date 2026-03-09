import { apiClient } from "./axiosClient"

export const getPortfolioSummary = async (portfolioId: string) => {
  const res = await apiClient.get(`/portfolios/${portfolioId}/summary`)
  return res.data
}

export const getPortfolioPositions = async (portfolioId: string) => {
  const res = await apiClient.get(`/portfolios/${portfolioId}/positions`)
  return res.data
}