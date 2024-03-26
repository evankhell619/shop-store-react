import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Popol Kupa</div>

        <div className="hidden md:flex space-x-4">
          <Link
            className="text-white hover:text-slate-600"
            to="/src/components/Home.jsx"
          >
            Home
          </Link>
          <Link className="text-white hover:text-slate-600" to="/FormRegis">
            Register
          </Link>
          <Link className="text-white hover:text-slate-600" to="/FormLogin">
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
