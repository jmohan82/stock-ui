import { apiClient } from "./axiosClient"

export const getStressScenarios = async (portfolioId: string) => {

  const res = await apiClient.get(
    `/portfolios/${portfolioId}/stress-test`
  )

  return res.data
}