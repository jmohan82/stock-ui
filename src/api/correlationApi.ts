import { apiClient } from "./axiosClient"

export const getCorrelationClusters = async (portfolioId: string) => {

  const res = await apiClient.get(
    `/portfolios/${portfolioId}/correlation-clusters`
  )

  return res.data
}