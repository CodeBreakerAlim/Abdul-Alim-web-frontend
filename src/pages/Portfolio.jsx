import React, { useEffect, useState } from 'react'
import api from '../api'
import { FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

// একটা প্রজেক্ট কার্ড
function ProjectCard({ title, problem, result, tags, live, github, image }) {
  return (
    <div className=" flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl">
      {/* ছবি: image না দিলে গ্রেডিয়েন্ট বক্স দেখাবে */}
      <div className="h-48 w-full overflow-hidden bg-linear-to-r from-indigo-500 to-pink-500">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl font-bold text-white/80">
            {title.charAt(0)}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>

        <p className="text-slate-600">
          <span className="font-semibold text-slate-900">Problem: </span>
          {problem}
        </p>
        <p className="text-slate-600">
          <span className="font-semibold text-slate-900">Result: </span>
          {result}
        </p>

        {/* টেক ট্যাগ */}
        <div className="flex flex-wrap gap-2">
          {tags.split(',').map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600"
            >
              {tag.trim()}
            </span>
          ))}
        </div>

        {/* বাটন */}
        <div className="mt-auto flex gap-3 pt-4">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-pink-500 px-5 py-2 font-semibold text-white transition hover:-translate-y-0.5"
            >
              <FiExternalLink />
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-2 font-semibold text-slate-800 transition hover:border-indigo-500 hover:text-indigo-500"
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function Portfolio() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    api
      .get('/projects/')
      .then((res) => setProjects(res.data))
      .catch(() => setFailed(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='bg-linear-to-r  from-blue-500 to-orange-400'>
      <section id="portfolio" className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
        {/* হেডিং */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-medium text-indigo-500">My Portfolio</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-5xl">
            Projects I'm{' '}
            <span className="bg-linear-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              proud of
            </span>
          </h2>
          <p className="mt-4 text-slate-600">
            A few real projects, with the problem I solved and what changed after.
          </p>
        </div>

        {/* প্রজেক্ট কার্ড */}
        {loading && <p className="mt-14 text-center text-slate-900">Loading projects...</p>}
        {failed && (
          <p className="mt-14 text-center text-slate-900">
            Could not load projects. Please refresh in a moment.
          </p>
        )}
        {!loading && !failed && projects.length === 0 && (
          <p className="mt-14 text-center text-slate-900">New projects are coming soon.</p>
        )}

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>

    </div>
  )
}

export default Portfolio