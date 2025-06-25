import { useState } from 'react'
import IPOCard from '../component/IPOCard'
import SearchBar from '../component/SearchBar'
import FilterBar from '../component/FilterBar'
import { dummyIPOs } from '../utils/constants'

export default function Home() {
  const [query, setQuery] = useState('')
  const [sector, setSector] = useState('')
  const [date, setDate] = useState('')

  const filteredIPOs = dummyIPOs.filter((ipo) => {
    const matchesSearch = ipo.company.toLowerCase().includes(query.toLowerCase())
    const matchesSector = sector ? ipo.sector === sector : true
    const matchesDate = date ? ipo.openDate === date : true
    return matchesSearch && matchesSector && matchesDate
  })

  return (
    <div className="bg-black min-h-screen px-6 py-8 text-white">
      <h1 className="text-3xl font-bold text-purple-500 mb-4">Upcoming IPOs</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <FilterBar selectedSector={sector} setSector={setSector} selectedDate={date} setDate={setDate} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {filteredIPOs.map((ipo) => (
          <IPOCard key={ipo.id} ipo={ipo} />
        ))}
      </div>
    </div>
  )
}
