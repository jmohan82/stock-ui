import { apiClient } from "./axiosClient"
import type { RiskSettings, RiskAuditLog } from "../types/risk"

export const getRiskSettings = async (portfolioId: string) => {

  const res = await apiClient.get<RiskSettings>(
    `/portfolios/${portfolioId}/risk-settings`
  )

  return res.data
}

export const updateRiskSettings = async ({
  portfolioId,
  settings
}: {
  portfolioId: string
  settings: RiskSettings
}) => {

  const res = await apiClient.put(
    `/portfolios/${portfolioId}/risk-settings`,
    settings
  )

  return res.data
}

export const getRiskAuditLog = async (portfolioId: string) => {

  const res = await apiClient.get<RiskAuditLog[]>(
    `/portfolios/${portfolioId}/risk-audit`
  )

  return res.data
}