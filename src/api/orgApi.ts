import { apiClient } from "./axiosClient"
import type{ Organization, Portfolio } from "../types/organization"


export const getOrganizations = async () => {
  const res = await apiClient.get<Organization[]>("/organizations")
  return res.data
}

export const getOrgPortfolios = async (orgId: string) => {
  const res = await apiClient.get<Portfolio[]>(`/organizations/${orgId}/portfolios`)
  return res.data
}

export const getOrgMetrics = async (orgId: string) => {
  const res = await apiClient.get(`/organizations/${orgId}/metrics`)
  return res.data
}