export type StressMode =
  | "NORMAL"
  | "CRASH"
  | "LIQUIDATE"

export interface CrashMetrics {

  vix: number

  vixSpikePercent: number

  spy3DayDrop: number

  stressMode: StressMode

  exposureReduction: number
}

export interface CrashEvent {

  id: string

  timestamp: string

  event: string

  exposureBefore: number

  exposureAfter: number
}