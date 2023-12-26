import './Layout.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedCursor from 'react-animated-cursor';
import { dark_Theme } from './Recoil/store';
import { useRecoilState } from 'recoil';
import Footer from './components/footer';
import { Toaster } from './components/ui/sonner';

function Layout() {
  const [darkMode] = useRecoilState(dark_Theme);
  return (
    <>
      <AnimatedCursor
      innerSize={10}
      outerSize={40}
      color={darkMode ? '255, 255, 255' : '0, 0, 0'}
      outerAlpha={0.2}
      innerScale={1}
      outerScale={2}
      
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]
    }
    
    />
      <Navbar></Navbar>

      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 '>
        <Outlet></Outlet>
      </div>
      <Toaster />
        <Footer></Footer>
    </>
  )
}

export default Layout
