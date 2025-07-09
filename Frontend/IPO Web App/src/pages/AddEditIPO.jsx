import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export default function AddEditIPO() {
  const [company, setCompany] = useState('')
  const [priceBand, setPriceBand] = useState('')
  const [lotSize, setLotSize] = useState('')
  const [sector, setSector] = useState('')
  const [openDate, setOpenDate] = useState('')
  const [closeDate, setCloseDate] = useState('')
  const [rhpLink, setRhpLink] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  // Fetch existing IPO details if editing
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/ipos/${id}`)
        .then(res => {
          const ipo = res.data
          setCompany(ipo.company)
          setPriceBand(ipo.priceBand)
          setLotSize(ipo.lotSize.toString())
          setSector(ipo.sector)
          setOpenDate(ipo.openDate)
          setCloseDate(ipo.closeDate)
          setRhpLink(ipo.rhpLink || '')
        })
        .catch(err => {
          console.error("❌ Error fetching IPO:", err)
          alert("Failed to fetch IPO details")
        })
    }
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      company,
      priceBand,
      lotSize: parseInt(lotSize),
      sector,
      openDate,
      closeDate,
      rhpLink
    }

    try {
      if (id) {
        // Update IPO
        await axios.put(`http://localhost:5000/api/ipos/${id}`, payload)
        alert('IPO updated successfully!')
      } else {
        // Create new IPO
        await axios.post('http://localhost:5000/api/ipos', payload)
        alert('IPO added successfully!')
      }

      navigate('/admin/dashboard')
    } catch (error) {
      console.error(error)
      alert('Error saving IPO')
    }
  }

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold text-purple-500 mb-4">{id ? "Edit IPO" : "Add IPO"}</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />
        <input
          className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
          placeholder="Price Band (₹150 - ₹180)"
          value={priceBand}
          onChange={(e) => setPriceBand(e.target.value)}
          required
        />
        <input
          className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
          placeholder="Lot Size"
          value={lotSize}
          onChange={(e) => setLotSize(e.target.value)}
          required
        />
        <input
          className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
          placeholder="Sector"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
          value={openDate}
          onChange={(e) => setOpenDate(e.target.value)}
          required
        />
        <input
          type="date"
          className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
          value={closeDate}
          onChange={(e) => setCloseDate(e.target.value)}
          required
        />
        <input
          className="w-full p-2 rounded bg-zinc-900 border border-zinc-700"
          placeholder="RHP Link"
          value={rhpLink}
          onChange={(e) => setRhpLink(e.target.value)}
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
        >
          {id ? "Update IPO" : "Save IPO"}
        </button>
      </form>
    </div>
  )
}
