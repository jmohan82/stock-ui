import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { RiskAlertBanner } from "../../risk/RiskAlertBanner"

export default function AppLayout() {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Header />

        <RiskAlertBanner />

        <main className="p-6 overflow-auto">
          <Outlet />
        </main>

      </div>

    </div>
  )
}