import { createContext, useContext, useState } from "react"

interface PortfolioContextType {
  portfolioId: string | null
  setPortfolio: (id: string) => void
}

const PortfolioContext =
  createContext<PortfolioContextType | null>(null)

export const PortfolioProvider = ({
  children
}: {
  children: React.ReactNode
}) => {

  const [portfolioId, setPortfolioId] = useState<string | null>(null)

  const setPortfolio = (id: string) => {
    setPortfolioId(id)
  }

  return (
    <PortfolioContext.Provider
      value={{
        portfolioId,
        setPortfolio
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export const usePortfolio = () => {

  const ctx = useContext(PortfolioContext)

  if (!ctx) {
    throw new Error("usePortfolio must be used inside provider")
  }

  return ctx
}