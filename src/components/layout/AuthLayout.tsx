import { Outlet } from "react-router-dom"

export default function AuthLayout() {

  return (
    <div className="h-screen flex items-center justify-center bg-background">

      <div className="w-full max-w-md bg-card p-8 rounded-lg border border-border">

        <h1 className="text-xl font-semibold mb-6 text-center">
          Institutional AI Trading Platform
        </h1>

        <Outlet />

      </div>

    </div>
  )
}