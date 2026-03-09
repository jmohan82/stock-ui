import { apiClient } from "./axiosClient"

export const getSectorExposure = async (portfolioId: string) => {

  const res = await apiClient.get(
    `/portfolios/${portfolioId}/sector-exposure`
  )

  return res.data
}