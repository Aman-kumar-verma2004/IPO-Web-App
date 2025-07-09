import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function IPODetails() {
  const { id } = useParams()
  const [ipo, setIpo] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`http://localhost:5000/api/ipos/${id}`)
      .then(res => {
        setIpo(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error("❌ Error fetching IPO:", err)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="text-white p-6">Loading IPO details...</div>
  if (!ipo) return <div className="text-white p-6">IPO Not Found</div>

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-purple-500">{ipo.company}</h2>
      <p className="text-zinc-400 mt-2">{ipo.description || "No description available."}</p>
      <ul className="mt-4 space-y-2">
        <li><strong>Price Band:</strong> ₹{ipo.priceBand}</li>
        <li><strong>Lot Size:</strong> {ipo.lotSize} shares</li>
        <li><strong>Sector:</strong> {ipo.sector}</li>
        <li><strong>Open Date:</strong> {ipo.openDate}</li>
        <li><strong>Close Date:</strong> {ipo.closeDate}</li>
        {ipo.rhpLink && (
          <li>
            <a className="text-purple-400 underline" href={ipo.rhpLink} target="_blank" rel="noopener noreferrer">
              RHP Document
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
