import React from 'react'
import Navbar from './Navbar'
import { FiMonitor, FiShoppingCart, FiServer, FiUploadCloud } from 'react-icons/fi'

function Services() {
  return (
    <div className='bg-linear-to-r  from-blue-500 to-orange-400'>

      <section id="service" className=" mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        {/* হেডিং */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-medium text-indigo-500">My Services</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">
            What I can build for{' '}
            <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              your business
            </span>
          </h2>
          <p className="mt-4 text-slate-600">
            From the first idea to the live website, I handle design, code and launch.
          </p>
        </div>

        {/* সার্ভিস কার্ড */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-pink-500 text-2xl text-white">
              <FiMonitor />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">Business Websites</h3>
            <p className="mt-2 text-slate-600">
              Fast, mobile-friendly websites that make your business look professional.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-pink-500 text-2xl text-white">
              <FiShoppingCart />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">E-commerce Stores</h3>
            <p className="mt-2 text-slate-600">
              Online shops with product pages, cart, checkout and an admin panel.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-pink-500 text-2xl text-white">
              <FiServer />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">Web Apps and APIs</h3>
            <p className="mt-2 text-slate-600">
              Full-stack apps, dashboards and backend APIs built to grow with you.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-indigo-500 to-pink-500 text-2xl text-white">
              <FiUploadCloud />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">Deployment and Support</h3>
            <p className="mt-2 text-slate-600">
              I put your site live, connect your domain and fix issues after launch.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services