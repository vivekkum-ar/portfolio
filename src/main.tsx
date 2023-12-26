import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Supports weights 100-900
import '@fontsource-variable/lexend';
// Supports weights 100-900
import '@fontsource-variable/noto-sans-syriac';
// Supports only weight 400
import '@fontsource-variable/nabla';
import '@fontsource/pacifico';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home.tsx'
import Blogs from './pages/Blogs.tsx'
import Projects from './pages/Projects.tsx'
import About from './pages/About.tsx'
import Freelance from './pages/Freelancework.tsx'
import Resume from './pages/Resume.tsx'
import Contact from './pages/Contact.tsx'
import PrivacyPage from './pages/legal/Privacy.tsx'
import TermsPage from './pages/legal/Terms.tsx'
import NoPage from './pages/NoPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="freelance" element={<Freelance />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="legal/privacy" element={<PrivacyPage />} />
            <Route path="legal/terms" element={<TermsPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </RecoilRoot>
)