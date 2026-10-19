import React, { useState } from 'react'
import Navbar from './Navbar'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import api from '../api'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // ফর্ম পাঠালে মেসেজ ব্যাকএন্ডের ডেটাবেজে জমা হবে
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await api.post('/contact/', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '', website: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className='bg-linear-to-r  from-blue-500 to-orange-400'>
      
      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        {/* হেডিং */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-medium text-indigo-500">Contact me</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">
            Let's build your{' '}
            <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              next project
            </span>
          </h2>
          <p className="mt-4 text-slate-600">
            Tell me about your idea. I usually reply within one day.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {/* বাম পাশ: যোগাযোগের তথ্য */}
          <div className="flex flex-col gap-5">
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-pink-500 text-2xl text-white">
                <FiMail />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Email</span>
                <span className="font-semibold text-slate-900">abdulalim13790a@gmail.com</span>
              </span>
            </a>

            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-pink-500 text-2xl text-white">
                <FaWhatsapp />
              </span>
              <span>
                <span className="block text-sm text-slate-500">WhatsApp</span>
                <span className="font-semibold text-slate-900">+880 1879247854</span>
              </span>
            </a>

            <a
              href="tel:+8801XXXXXXXXX"
              className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-pink-500 text-2xl text-white">
                <FiPhone />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Phone</span>
                <span className="font-semibold text-slate-900">+880 1879247854</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-pink-500 text-2xl text-white">
                <FiMapPin />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Location</span>
                <span className="font-semibold text-slate-900">Rajshahi, Bangladesh</span>
              </span>
            </div>
          </div>

          {/* ডান পাশ: ফর্ম */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="your name"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me what you want to build..."
                className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* স্প্যাম বটের জন্য লুকানো ঘর। মানুষ এটা দেখে না */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
            >
              <FiSend className="text-xl" />
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="rounded-lg bg-green-50 px-4 py-3 text-green-700">
                Thank you! Your message was sent. I will reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-red-700">
                Sorry, the message could not be sent. Please try again in a moment.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact