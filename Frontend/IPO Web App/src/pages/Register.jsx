import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form className="w-full max-w-sm bg-zinc-900 p-6 rounded-xl shadow-md border border-purple-600">
        <h2 className="text-2xl font-bold text-purple-500 mb-6 text-center">Admin Register</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-3 p-2 rounded bg-black text-white border border-zinc-700"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-2 rounded bg-black text-white border border-zinc-700"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-black text-white border border-zinc-700"
          required
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
        >
          Register
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
