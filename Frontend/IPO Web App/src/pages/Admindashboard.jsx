import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dummyIPOs } from '../utils/constants'

export default function AdminDashboard() {
  const [ipos, setIPOs] = useState(dummyIPOs)

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
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
