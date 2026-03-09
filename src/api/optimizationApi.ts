import { apiClient } from "./axiosClient"

export const runPortfolioOptimization = async (portfolioId: string) => {

  const res = await apiClient.post(
    `/portfolios/${portfolioId}/optimize`
  )

  return res.data
}