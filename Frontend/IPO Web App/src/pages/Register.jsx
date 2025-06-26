import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
      })

      alert(res.data.msg || 'Registered Successfully!')
      navigate('/admin') // Redirect to login
    } catch (err) {
      console.error(err)
      alert(err.response?.data?.msg || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-zinc-900 p-6 rounded-xl shadow-md border border-purple-600"
      >
        <h2 className="text-2xl font-bold text-purple-500 mb-6 text-center">Admin Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-3 p-2 rounded bg-black text-white border border-zinc-700"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
        >
          {loading ? 'Registering...' : 'Register'}
        </button>

        <p className="text-center text-sm text-zinc-400 mt-4">
          Already have an account?{' '}
          <Link to="/admin" className="text-purple-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}
