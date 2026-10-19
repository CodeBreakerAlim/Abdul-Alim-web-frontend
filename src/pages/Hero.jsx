import React from 'react'
import alim_presentation from '../assets/alim_presentation.png'
function Hero() {
  return (
    <div className='bg-linear-to-r  from-blue-500 to-orange-400'>
        <section className="mx-auto  py-8 min-h-[80vh] max-w-7xl  gap-6 px-10">
                <div className='flex flex-col md:flex-row justify-center ' >
                    <div>
                        <p className='text-lg font-medium text-orange-700 transition duration-700 ease-out delay-[100ms] motion-reduce:transition-none'>
                            Hi, I'm Abdul Alim, a full-stack web developer
                        </p>

                        <h1 className="max-w-3xl  font-serif font-semibold text-slate-900 text-4xl md:text-7xl">
                            I build fast, modern web apps that bring you more clients.
                        </h1>

                        <p className='max-w-xl text-lg text-slate-600 transition duration-700 ease-out delay-[2000ms] motion-reduce:transition-none'>
                            I design and build websites and web apps for businesses, from idea to launch.
                        </p>

                        <div className='flex flex-wrap gap-4 transition duration-700 ease-out delay-[2200ms] motion-reduce:transition-none'>
                            <a
                                href="#contact"
                                className="rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 px-8 py-4 font-semibold text-white hover:-translate-y-0.5"
                            >
                                Get a free consultation
                            </a>
                            <a
                                href="#portfolio"
                                className="rounded-lg border border-slate-300 px-8 py-4 font-semibold text-slate-800 hover:border-indigo-500 hover:text-indigo-500"
                            >
                                See my work
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-6 gap-4">
                        <div className="h-120 w-70 overflow-auto border-indigo-500 p-1">
                            <img src={alim_presentation} alt="Abdul Alim" className="h-full w-full rounded-xl object-cover" />
                        </div>

                        <h2 className="text-center text-2xl font-semibold text-slate-900">Md. Abdul Alim</h2>
                        <p className="text-center text-slate-500">Full-stack Web Developer</p>
                    </div>
                </div>
                <div className='flex md:ml-18 gap-4 mt-7 bg-blue-300 rounded min-w-80 max-w-100 p-3'>
                    <div className='border-r-2 px-2 py-1'><h1 className='text-amber-600 text-3xl'>5+</h1><h1>Experiences</h1></div>
                    <div className='border-r-2 px-2 py-1'><h1 className='text-amber-600 text-3xl'>20+</h1><h1>Project done</h1></div>
                    <div className=' px-2 py-1'><h1 className='text-amber-600 text-3xl'>80+</h1><h1>Happy Clients</h1></div>
                </div>
            </section>
    </div>
  )
}

export default Hero