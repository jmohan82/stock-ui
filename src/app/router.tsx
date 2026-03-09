import { Routes, Route } from "react-router-dom"

import LoginPage from "../auth/pages/LoginPage"
import RegisterPage from "../auth/pages/RegisterPage"
import ResetPasswordPage from "../auth/pages/ResetPasswordPage"

import OrganizationDashboard from "../organizations/OrganizationDashboard"
import PortfolioDashboard from "../portfolios/PortfolioDashboard"
import PositionsPage from "../positions/PositionsPage"
import RiskControlPanel from "../risk/RiskControlPanel"
import CrashMonitor from "../crash/CrashMonitor"
import PerformanceAnalytics from "../analytics/PerformanceAnalytics"

import AppLayout from "../components/layout/AppLayout"
import AuthLayout from "../components/layout/AuthLayout"

export function AppRouter() {
  return (
    <Routes>

      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/reset" element={<ResetPasswordPage />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/app/org-dashboard" element={<OrganizationDashboard />} />
        <Route path="/app/portfolio/:id" element={<PortfolioDashboard />} />
        <Route path="/app/portfolio/:id/positions" element={<PositionsPage />} />
        <Route path="/app/portfolio/:id/risk" element={<RiskControlPanel />} />
        <Route path="/app/portfolio/:id/crash" element={<CrashMonitor />} />
        <Route path="/app/portfolio/:id/analytics" element={<PerformanceAnalytics />} />
      </Route>

    </Routes>
  )
}