import './Layout.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Button } from './components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react';

function Layout() {

  return (
    <>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10 '>
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default Layout
