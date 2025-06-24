export default function IPOCard({ ipo }) {
  return (
    <div className="bg-black text-white border border-purple-600 rounded-xl p-5 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-purple-500">{ipo.company}</h2>
      <p className="text-zinc-400 text-sm">Opens: {ipo.openDate} • Closes: {ipo.closeDate}</p>
      <div className="flex justify-between mt-2 text-sm">
        <span>₹{ipo.priceBand}</span>
        <span>Lot: {ipo.lotSize} shares</span>
      </div>
      <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
        Apply Now
      </button>
    </div>
  )
}