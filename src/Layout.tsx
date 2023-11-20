import './Layout.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedCursor from 'react-animated-cursor';

function Layout() {

  return (
    <>
      <AnimatedCursor
      innerSize={12}
      outerSize={25}
      color='255, 255, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={3}
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
      ]}
    />
      <Navbar></Navbar>

      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 '>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Layout
