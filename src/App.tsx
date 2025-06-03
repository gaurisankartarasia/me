// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/index.tsx";
import FrontPage from "./pages/Hero.tsx";
import Projects from "./pages/projects.tsx";

import GitHubReposPage from "./pages/Repos.tsx";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="pt-8">
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/git_repos" element={<GitHubReposPage />} />
          </Routes>
        </main>{" "}
      </BrowserRouter>
    </>
  );
}

export default App;
