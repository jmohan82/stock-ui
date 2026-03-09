import { apiClient } from "./axiosClient"

export const getPerformanceMetrics = async (portfolioId: string) => {

  const res = await apiClient.get(
    `/portfolios/${portfolioId}/performance-metrics`
  )

  return res.data
}

export const getEquityCurve = async (portfolioId: string) => {

  const res = await apiClient.get(
    `/portfolios/${portfolioId}/equity-curve`
  )

  return res.data
}

export const getDrawdownCurve = async (portfolioId: string) => {

  const res = await apiClient.get(
    `/portfolios/${portfolioId}/drawdown-curve`
  )

  return res.data
}

export const getMonthlyReturns = async (portfolioId: string) => {

  const res = await apiClient.get(
    `/portfolios/${portfolioId}/monthly-returns`
  )

  return res.data
}