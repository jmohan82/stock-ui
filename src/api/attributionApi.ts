import { apiClient } from "./axiosClient"

export const getTradeAttribution = async (portfolioId: string) => {

  const res = await apiClient.get(
    `/portfolios/${portfolioId}/trade-attribution`
  )

  return res.data
}