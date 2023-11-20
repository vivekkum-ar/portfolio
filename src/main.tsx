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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="Projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
  </RecoilRoot>
)
