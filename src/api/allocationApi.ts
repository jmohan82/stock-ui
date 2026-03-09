import { apiClient } from "./axiosClient"

export const getStrategyAllocation = async (portfolioId: string) => {

  const res = await apiClient.get(
    `/portfolios/${portfolioId}/strategy-allocation`
  )

  return res.data
}