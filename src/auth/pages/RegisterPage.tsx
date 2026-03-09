import { useState } from "react"
import { useAuth } from "../authContext"
import { useNavigate } from "react-router-dom"

export default function RegisterPage() {

  const { register } = useAuth()

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()

    await register({
      name,
      email,
      password
    })

    navigate("/app/org-dashboard")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        placeholder="Name"
        className="w-full p-2 bg-slate-900 border border-border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <button className="w-full bg-emerald-600 p-2 rounded">
        Register
      </button>

    </form>
  )
}