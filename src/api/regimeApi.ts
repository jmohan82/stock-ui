import { apiClient } from "./axiosClient"

export const getMarketRegime = async () => {
  const res = await apiClient.get("/system/market-regime")
  return res.data
}