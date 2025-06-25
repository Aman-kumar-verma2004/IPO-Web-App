export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search company..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full max-w-md px-4 py-2 bg-zinc-900 text-white rounded border border-purple-600 placeholder:text-zinc-400"
    />
  )
}