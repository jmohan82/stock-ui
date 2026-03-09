import { apiClient } from "./axiosClient"

export const getRiskHeat = async (portfolioId: string) => {

  const res = await apiClient.get(
    `/portfolios/${portfolioId}/risk-heat`
  )

  return res.data
}