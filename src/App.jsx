import { useState,useEffect } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Roots from './component/Roots'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
function App() {


  return (
    <Routes>
      <Route path='/' element={<Roots />}>
        <Route index element={<Home />}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='portfolio' element={<Portfolio />}/>
      </Route>
    </Routes>
  )
}

export default App
