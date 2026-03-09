import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../authContext"

export default function LoginPage() {

  const { login } = useAuth()

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    setLoading(true)

    try {

      await login({ email, password })

      navigate("/app/org-dashboard")

    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        placeholder="Email"
        className="w-full p-2 bg-slate-900 border border-border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full p-2 bg-slate-900 border border-border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        disabled={loading}
        className="w-full bg-emerald-600 p-2 rounded"
      >
        Login
      </button>

    </form>
  )
}