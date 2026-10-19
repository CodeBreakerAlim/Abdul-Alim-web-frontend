import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <nav className="relative bg-linear-to-r  from-blue-500 to-orange-400  z-50 flex items-center justify-between  px-5 py-5 shadow-sm md:px-10">
        {/* লোগো */}
        <Link to="/" onClick={close} className="text-2xl font-bold text-slate-900">
          <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">A</span>bdul{' '}
          <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">A</span>lim
        </Link>

        {/* ডেস্কটপ মেনু */}
        <div className="hidden gap-8 text-slate-700 md:flex">
          <Link to="/" className="transition hover:text-indigo-500">Home</Link>
          <Link to="services" className="transition hover:text-indigo-500">Service</Link>
          <Link to="about" className="transition hover:text-indigo-500">About me</Link>
          <Link to="portfolio" className="transition hover:text-indigo-500">Portfolio</Link>
          <Link to="contact" className="transition hover:text-indigo-500">Contact me</Link>
        </div>

        {/* ডেস্কটপ Hire Me বাটন */}
        <Link
          to="/contact"
          className="hidden rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 md:inline-block"
        >
          Hire Me
        </Link>

        {/* মোবাইল টগল বাটন */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="rounded-lg border border-slate-300 p-2 text-2xl text-slate-800 md:hidden"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        {/* মোবাইল মেনু: উপর থেকে স্লাইড করে নামে */}
        <div className="absolute left-0 top-full w-full overflow-hidden md:hidden">
          <div
            className={`flex flex-col gap-5 bg-linear-to-r from-indigo-500 to-pink-400 text-center px-5 py-6 text-slate-700 shadow-lg transition-all duration-300 ease-out ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-full opacity-0'
              }`}
          >
            <Link to="home" onClick={() => setOpen(!open)} className="transition hover:text-indigo-500">Home</Link>
            <Link to="services" onClick={() => setOpen(!open)} className="transition hover:text-indigo-500">Service</Link>
            <Link to="about" onClick={() => setOpen(!open)} className="transition hover:text-indigo-500">About me</Link>
            <Link to="portfolio" onClick={() => setOpen(!open)} className="transition hover:text-indigo-500">Portfolio</Link>
            <Link to="contact" onClick={() => setOpen(!open)} className="transition hover:text-indigo-500">Contact me</Link>
            <Link
              to="/contact"
              onClick={close}
              className=" rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 px-6 py-3  font-semibold text-white"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar