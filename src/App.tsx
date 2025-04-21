// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Knowledge from "./pages/knowledge.tsx";
import Projects from "./pages/projects.tsx";
import GitHubReposPage from "./components/Repos.tsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
 <main className="pt-8">
        <Routes>
         
          <Route path="/" element={<Hero />} />

          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/github_repos" element={<GitHubReposPage />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
