import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.tsx'
import './index.css'
import Projects from './pages/Projects.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blogs from './pages/Blogs.tsx'
import Home from './pages/Home.tsx'
// Supports weights 100-900
import '@fontsource-variable/lexend';
// Supports weights 100-900
import '@fontsource-variable/noto-sans-syriac';
// Supports only weight 400
import '@fontsource-variable/nabla';
import { RecoilRoot } from 'recoil';
import { Contact } from 'lucide-react'
import About from './pages/About.tsx'
import Freelance from './pages/Freelancework.tsx'
import Resume from './pages/Resume.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="freelance" element={<Freelance />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </RecoilRoot>
)