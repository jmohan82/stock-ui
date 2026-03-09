import OrganizationSwitcher from "../../organizations/OrganizationSwitcher"
import PortfolioSwitcher from "../../portfolios/PortfolioSwitcher"

export default function Header() {

  return (
    <div className="h-16 border-b border-border flex items-center justify-between px-6">

      <div className="flex space-x-4">

        <OrganizationSwitcher />

        <PortfolioSwitcher />

      </div>

      <div className="text-sm text-gray-400">
        Institutional Portfolio Intelligence
      </div>

    </div>
  )
}