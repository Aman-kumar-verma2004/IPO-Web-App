import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AdminDashboard() {
  const [ipos, setIpos] = useState([])

  const fetchIPOs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/ipos')
      setIpos(res.data)
    } catch (err) {
      console.error('❌ Failed to fetch IPOs:', err)
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this IPO?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/ipos/${id}`)
      setIpos(ipos.filter(ipo => ipo.id !== id))
      alert('IPO deleted successfully!')
    } catch (err) {
      console.error('❌ Error deleting IPO:', err)
    }
  }

  useEffect(() => {
    fetchIPOs()
  }, [])

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-purple-500">Admin Dashboard</h1>
        <Link to="/admin/add" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          + Add IPO
        </Link>
      </div>

      <table className="w-full text-sm text-left border border-zinc-700">
        <thead className="bg-zinc-900 text-purple-400">
          <tr>
            <th className="p-3">Company</th>
            <th className="p-3">Sector</th>
            <th className="p-3">Dates</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ipos.map((ipo) => (
            <tr key={ipo.id} className="border-t border-zinc-800 hover:bg-zinc-900">
              <td className="p-3">{ipo.company}</td>
              <td className="p-3">{ipo.sector}</td>
              <td className="p-3">{ipo.openDate} → {ipo.closeDate}</td>
              <td className="p-3 space-x-2">
                <Link to={`/admin/edit/${ipo.id}`} className="text-purple-400 hover:underline">Edit</Link>
                <button onClick={() => handleDelete(ipo.id)} className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
