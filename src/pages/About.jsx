import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import alim_laptop from '../assets/alim_laptop.png'
import { FiDownload } from 'react-icons/fi'

// একটা স্কিল বারের ছোট কম্পোনেন্ট
function Skill({ name, percent, show }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm font-medium text-slate-700">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-linear-to-r from-indigo-500 to-pink-500 transition-all duration-1000 ease-out"
          style={{ width: show ? `${percent}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function About() {
  const [show, setShow] = useState(false)

  // পেজ খুললে বারগুলো ০% থেকে ভরতে শুরু করবে
  useEffect(() => {
    const t = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className='bg-linear-to-r  from-blue-500 to-orange-400 '>
      <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* বাম পাশ: ছবি */}
          <div className="flex justify-center">
            <div className="h-400 w-72 overflow-hidden  border-4 border-indigo-500 p-1 md:h-80 md:w-80">
              <img src={alim_laptop} alt="Abdul Alim" className="h-full w-full  object-cover" />
            </div>
          </div>

          {/* ডান পাশ: লেখা ও স্কিল */}
          <div>
            <p className="text-lg font-medium text-indigo-500">About me</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">
              I'm{' '}
              <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                Md. Abdul Alim
              </span>
            </h2>
            <p className="mt-4 text-slate-600">
              I am a full-stack web developer. I build fast and modern websites and web apps that help
              businesses get more clients. I handle everything from design to code to launch.
            </p>

            {/* স্কিল বার */}
            <div className="mt-8 flex flex-col gap-5">
              <Skill name="React" percent={90} show={show} />
              <Skill name="Tailwind CSS" percent={85} show={show} />
              <Skill name="JavaScript" percent={88} show={show} />
              <Skill name="Python" percent={80} show={show} />
              <Skill name="Django" percent={75} show={show} />
            </div>

            {/* CV ডাউনলোড বাটন */}
            <a
              href="/Abdul-Alim-CV.pdf"
              download
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5"
            >
              <FiDownload className="text-xl" />
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About