import { apiClient } from "./axiosClient"
import type { CrashMetrics, CrashEvent } from "../types/crash"

export const getCrashMetrics = async () => {

  const res = await apiClient.get<CrashMetrics>(
    "/system/crash-metrics"
  )

  return res.data
}

export const getCrashEvents = async () => {

  const res = await apiClient.get<CrashEvent[]>(
    "/system/crash-events"
  )

  return res.data
}