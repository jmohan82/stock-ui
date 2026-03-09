import { Link } from "react-router-dom"

export default function Sidebar() {

  return (
    <div className="w-64 bg-card border-r border-border p-4">

      <h2 className="text-lg font-semibold mb-6">
        AI Capital
      </h2>

      <nav className="flex flex-col space-y-3">

        <Link to="/app/org-dashboard">Organization</Link>

        <Link to="/app/portfolio/1">Portfolio</Link>

        <Link to="/app/portfolio/1/positions">Positions</Link>

        <Link to="/app/portfolio/1/risk">Risk</Link>

        <Link to="/app/portfolio/1/crash">Crash Monitor</Link>

        <Link to="/app/portfolio/1/analytics">Analytics</Link>

      </nav>

    </div>
  )
}