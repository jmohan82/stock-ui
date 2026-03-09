import { BrowserRouter } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "./app/queryClient"
import { AppRouter } from "./app/router"
import { AuthProvider } from "./auth/authContext"
import { OrganizationProvider } from "./organizations/organizationContext"
import { PortfolioProvider } from "./portfolios/portfolioContext"

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <OrganizationProvider>
            <PortfolioProvider>
              <AppRouter />
            </PortfolioProvider>
          </OrganizationProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}