import { useParams } from 'react-router-dom'
import { dummyIPOs } from '../utils/constants'

export default function IPODetails() {
  const { id } = useParams()
  const ipo = dummyIPOs.find((ipo) => ipo.id === id)

  if (!ipo) return <div className="text-white p-6">IPO Not Found</div>

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h2 className="text-3xl font-bold text-purple-500">{ipo.company}</h2>
      <p className="text-zinc-400 mt-2">{ipo.description}</p>
      <ul className="mt-4 space-y-2">
        <li><strong>Price Band:</strong> ₹{ipo.priceBand}</li>
        <li><strong>Lot Size:</strong> {ipo.lotSize} shares</li>
        <li><strong>Sector:</strong> {ipo.sector}</li>
        <li><strong>Open Date:</strong> {ipo.openDate}</li>
        <li><strong>Close Date:</strong> {ipo.closeDate}</li>
        <li><a className="text-purple-400 underline" href={ipo.rhp} target="_blank">RHP Document</a></li>
      </ul>
    </div>
  )
}

