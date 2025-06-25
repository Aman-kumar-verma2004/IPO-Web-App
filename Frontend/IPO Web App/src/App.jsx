import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/NavBar'
import Home from './pages/Home'
import IPODetails from './pages/IPODetails'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/Admindashboard'
import AddEditIPO from './pages/AddEditIPO'
import Register from "./pages/Register"

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-4 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipo/:id" element={<IPODetails />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/add" element={<AddEditIPO />} />
          <Route path="/admin/edit/:id" element={<AddEditIPO />} />
          <Route path="*" element={<h1 className="text-white p-6">404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  )
}
