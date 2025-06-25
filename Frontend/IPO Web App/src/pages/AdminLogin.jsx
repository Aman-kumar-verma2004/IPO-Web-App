import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    
    if (email === 'admin@example.com' && password === 'admin123') {
      alert('Login Successful')
      navigate('/admin/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-6 rounded-xl w-full max-w-sm shadow-md border border-purple-600"
      >
        <h2 className="text-2xl text-purple-500 font-bold mb-4 text-center">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-black text-white border border-zinc-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-black text-white border border-zinc-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
        >
          Login
        </button>

        <p className="text-center text-sm text-zinc-400 mt-4">
          Don’t have an account?{' '}
          <Link to="/admin/register" className="text-purple-400 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}
