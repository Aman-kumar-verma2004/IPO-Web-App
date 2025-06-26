import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      })

      alert(res.data.msg)

      // Optional: Save token to localStorage (for future auth)
      localStorage.setItem('token', res.data.token)

      // Redirect to Admin Dashboard
      navigate('/admin/dashboard')
    } catch (err) {
      console.error(err)
      alert(
        err.response?.data?.msg || 'Login failed. Please check credentials.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex justify-center items-center px-4">
      <form
        onSubmit={handleLogin}
        className="bg-zinc-900 p-6 rounded-xl w-full max-w-sm shadow-md border border-purple-600"
      >
        <h2 className="text-2xl text-purple-500 font-bold mb-4 text-center">
          Admin Login
        </h2>

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
          disabled={loading}
          className={`w-full py-2 rounded ${
            loading
              ? 'bg-purple-400 cursor-not-allowed'
              : 'bg-purple-600 hover:bg-purple-700'
          } text-white`}
        >
          {loading ? 'Logging in...' : 'Login'}
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
