// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.tsx'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Knowledge from './pages/knowledge.tsx'
import Projects from './pages/projects.tsx'
import './App.css'


function App() {

  return (
    <>
     <BrowserRouter>
     <ThemeProvider>
    <Navbar/>
    
    <Routes>
    <Route path="/" element={<Hero/>} />

    <Route path="/knowledge" element={<Knowledge/>} />

    <Route path="/projects" element={<Projects/>} />
    </Routes>
    </ThemeProvider>
    </BrowserRouter>
     </>
  )
}

export default App





