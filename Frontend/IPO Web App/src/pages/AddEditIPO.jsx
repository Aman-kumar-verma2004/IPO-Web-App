export default function AddEditIPO() {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold text-purple-500 mb-4">Add / Edit IPO</h2>
      <form className="space-y-4 max-w-xl">
        <input className="w-full p-2 rounded bg-zinc-900 border border-zinc-700" placeholder="Company Name" />
        <input className="w-full p-2 rounded bg-zinc-900 border border-zinc-700" placeholder="Price Band (₹150 - ₹180)" />
        <input className="w-full p-2 rounded bg-zinc-900 border border-zinc-700" placeholder="Lot Size" />
        <input className="w-full p-2 rounded bg-zinc-900 border border-zinc-700" placeholder="Sector" />
        <input type="date" className="w-full p-2 rounded bg-zinc-900 border border-zinc-700" />
        <input type="date" className="w-full p-2 rounded bg-zinc-900 border border-zinc-700" />
        <input className="w-full p-2 rounded bg-zinc-900 border border-zinc-700" placeholder="RHP Link" />
        <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
          Save IPO
        </button>
      </form>
    </div>
  )
}
