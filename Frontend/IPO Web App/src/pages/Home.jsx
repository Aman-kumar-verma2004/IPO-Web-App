import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
  const [ipos, setIpos] = useState([])
  const [filteredIpos, setFilteredIpos] = useState([])
  const [selectedSector, setSelectedSector] = useState('')
  const [uniqueSectors, setUniqueSectors] = useState([])

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  useEffect(() => {
    const fetchIPOs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/ipos')
        setIpos(res.data)
        setFilteredIpos(res.data)

        // Dynamically extract unique sectors
        const sectors = [...new Set(res.data.map(ipo => ipo.sector))]
        setUniqueSectors(sectors)
      } catch (err) {
        console.error('❌ Error fetching IPOs:', err)
      }
    }

    fetchIPOs()
  }, [])

  const handleFilter = () => {
    let result = ipos

    if (selectedSector) {
      result = result.filter((ipo) => ipo.sector === selectedSector)
    }

    if (startDate) {
      result = result.filter((ipo) => ipo.openDate >= startDate)
    }

    if (endDate) {
      result = result.filter((ipo) => ipo.closeDate <= endDate)
    }

    setFilteredIpos(result)
  }

  const resetFilters = () => {
    setSelectedSector('')
    setStartDate('')
    setEndDate('')
    setFilteredIpos(ipos)
  }

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold text-purple-500 mb-6">Upcoming IPOs</h1>

      {/* 🔍 Filter Bar */}
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <select
          className="p-2 rounded bg-zinc-900 border border-zinc-700"
          value={selectedSector}
          onChange={(e) => setSelectedSector(e.target.value)}
        >
          <option value="">All Sectors</option>
          {uniqueSectors.map((sector, index) => (
            <option key={index} value={sector}>
              {sector}
            </option>
          ))}
        </select>

        <input
          type="date"
          className="p-2 rounded bg-zinc-900 border border-zinc-700"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="p-2 rounded bg-zinc-900 border border-zinc-700"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <div className="flex gap-2">
          <button
            onClick={handleFilter}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            Apply
          </button>
          <button
            onClick={resetFilters}
            className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded"
          >
            Reset
          </button>
        </div>
      </div>

      {/* 🗃️ IPO List */}
      {filteredIpos.length === 0 ? (
        <p className="text-zinc-400">No IPOs match your filter.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIpos.map((ipo) => (
            <div
              key={ipo.id}
              className="bg-zinc-900 p-4 rounded-lg shadow-md border border-zinc-700"
            >
              <h2 className="text-xl font-semibold text-purple-400 mb-2">{ipo.company}</h2>
              <p className="text-sm text-zinc-300">Sector: {ipo.sector}</p>
              <p className="text-sm text-zinc-400">Price Band: {ipo.priceBand}</p>
              <p className="text-sm text-zinc-400">Lot Size: {ipo.lotSize}</p>
              <p className="text-sm text-zinc-400">
                Dates: {ipo.openDate} → {ipo.closeDate}
              </p>
              {ipo.rhpLink && (
                <a
                  href={ipo.rhpLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-500 underline block mt-2"
                >
                  View RHP
                </a>
              )}
              <Link
                to={`/ipo/${ipo.id}`}
                className="block mt-3 text-purple-400 hover:underline text-sm"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
