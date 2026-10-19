import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-10">
        {/* লোগো ও ছোট পরিচয় */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">A</span>bdul{' '}
            <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">A</span>lim
          </Link>
          <p className="mt-4 max-w-xs text-slate-400">
            Full-stack web developer building fast and modern websites that bring businesses more clients.
          </p>
        </div>

        {/* দ্রুত লিংক */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick links</h3>
          <div className="mt-4 flex flex-col gap-3">
            <Link to="/" className="transition hover:text-indigo-400">Home</Link>
            <Link to="/services" className="transition hover:text-indigo-400">Service</Link>
            <Link to="/about" className="transition hover:text-indigo-400">About me</Link>
            <Link to="/portfolio" className="transition hover:text-indigo-400">Portfolio</Link>
            <Link to="/contact" className="transition hover:text-indigo-400">Contact me</Link>
          </div>
        </div>

        {/* যোগাযোগ ও সোশ্যাল */}
        <div>
          <h3 className="text-lg font-semibold text-white">Let's work together</h3>
          <p className="mt-4 text-slate-400">Have a project in mind? Send me a message.</p>

          <Link
            to="/contact"
            className="mt-5 inline-block rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Hire Me
          </Link>

          <div className="mt-6 flex gap-3 text-xl">
            <a
              href="https://github.com/CodeBreakerAlim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-alim-716668335/?isSelfProfile=true"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/md.abdul.alim.954444"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-white"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:your@email.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-white"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      {/* নিচের কপিরাইট লাইন */}
      <div className="border-t border-slate-800 px-5 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Md. Abdul Alim. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer