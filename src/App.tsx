// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Knowledge from './pages/knowledge.tsx'
import Projects from './pages/projects.tsx'
import './App.css'




function App() {

  return (
    <>
     <BrowserRouter>
    <Navbar/>
 

    <Routes>
    <Route path="/" element={<Hero/>} />

    <Route path="/knowledge" element={<Knowledge/>} />

    <Route path="/projects" element={<Projects/>} />
    </Routes>
    </BrowserRouter>
     </>
  )
}

export default App





