export default function FilterBar({ selectedSector, setSector, selectedDate, setDate }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-4">
      <select
        className="bg-zinc-900 text-white border border-purple-600 rounded px-4 py-2"
        value={selectedSector}
        onChange={(e) => setSector(e.target.value)}
      >
        <option value="">All Sectors</option>
        <option value="Tech">Tech</option>
        <option value="Finance">Finance</option>
        <option value="Energy">Energy</option>
        <option value="Pharma">Pharma</option>
        <option value="Automobile">Automobile</option>
        <option value="Telecom">Telecom</option>
        <option value="Retail">Retail</option>
      </select>

      <input
        type="date"
        className="bg-zinc-900 text-white border border-purple-600 rounded px-4 py-2"
        value={selectedDate}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>
  )
}
