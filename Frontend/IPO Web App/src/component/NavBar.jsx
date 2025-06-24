import React from 'react'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div>
      <nav className='bg-black text-white px-6 py-4 flex justify-between items-center shadow-md'>
        <Link to="/" className="text-2xl font-bold text-purple-500">IPO Platform</Link>
      
      <div className="space-x-6 text-sm">
        <Link to="/" className="hover:text-purple-400">Home</Link>
        <Link to="/admin" className="hover:text-purple-400">Admin</Link>
      </div>
      </nav>
    </div>
  )
}

export default NavBar
