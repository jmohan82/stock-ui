export interface PerformanceMetrics {

  cagr: number

  sharpe: number

  sortino: number

  maxDrawdown: number

  winRate: number

  avgR: number

  capitalEfficiency: number
}

export interface EquityPoint {

  date: string

  value: number
}

export interface DrawdownPoint {

  date: string

  drawdown: number
}

export interface MonthlyReturn {

  month: string

  return: number
}