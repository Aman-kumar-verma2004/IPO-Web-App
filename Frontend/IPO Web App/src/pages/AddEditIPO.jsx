import { useState } from 'react'
import axios from 'axios'

export default function AddEditIPO() {
  const [company, setCompany] = useState('')
  const [priceBand, setPriceBand] = useState('')
  const [lotSize, setLotSize] = useState('')
  const [sector, setSector] = useState('')
  const [openDate, setOpenDate] = useState('')
  const [closeDate, setCloseDate] = useState('')
  const [rhpLink, setRhpLink] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await axios.post('http://localhost:5000/api/ipos', {
        company,
        priceBand,
        lotSize,
        sector,
        openDate,
        closeDate,
        rhpLink,
      })

      alert('IPO added successfully!')
      // Optionally clear the form:
      setCompany('')
      setPriceBand('')
      setLotSize('')
      setSector('')
      setOpenDate('')
      setCloseDate('')
      setRhpLink('')
    } catch (error) {
      console.error(error)
      alert('Error adding IPO')
    }
  }

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold text-purple-500 mb-4">Add / Edit IPO</h2>

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
          Save IPO
        </button>
      </form>
    </div>
  )
}
