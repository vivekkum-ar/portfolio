import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

interface FooterProps {
  // Add your prop types here
}

const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="dark:bg-slate-700 bg-gray-200 text-white text-center h-8 mt-2 pb-6 border-t-8 dark:border-blue-700 border-blue-300"></div>
      {/* <div className="h-20 rounded-2xl bg-gray-700 opacity-20 mx-6 text-white text-center flex items-center justify-center"> */}
      <div className="flex flex-row justify-center items-center py-4 dark:bg-slate-900">
        <p className="text-8xl basis-1/2 w-full font-pacifico bg-clip-text text-transparent  bg-gradient-to-b from-blue-400 dark:opacity-60 to-blue-200 ">Vivek Kumar</p>
        <div className="basis-1/2 flex flex-col w-full h-full">

          <div className="flex flex-row w-full h-full font-lexend justify-end pe-12">
            <div className='flex flex-col w-20 '>
              <h1 className="font-semibold text-md mb-2 text-blue-500">Sections</h1>
              <Link className="text-xs ps-2 pb-2 text-gray-700 dark:text-gray-400 hover:text-blue-500 border-s-4 border-blue-500" to="">Projects</Link>
              <Link className="text-xs ps-2 pb-2 text-gray-700 dark:text-gray-400 hover:text-blue-500 border-s-4 border-blue-500" to="">About me</Link>
              <Link className="text-xs ps-2 pb-2 text-gray-700 dark:text-gray-400 hover:text-blue-500 border-s-4 border-blue-500" to="">Blogs</Link>
              <Link className="text-xs ps-2 pb-2 text-gray-700 dark:text-gray-400 hover:text-blue-500 border-s-4 border-blue-500" to="">Contact</Link>
            </div>
            <div className='flex flex-col w-26'>
              <h1 className="font-semibold text-md mb-2 text-blue-500">Legal</h1>
              <Link className="text-xs ps-2 pb-2 text-gray-700 dark:text-gray-400 hover:text-blue-500 border-s-4 border-blue-500" to="">Terms</Link>
              <Link className="text-xs ps-2 pb-2 text-gray-700 dark:text-gray-400 hover:text-blue-500 border-s-4 border-blue-500" to="">Privacy Policy</Link>
              {/* <Link className="text-xs ps-2 pb-2 text-gray-400 hover:text-blue-500 border-s-4 border-blue-500" to="">Blogs</Link> */}
              {/* <Link className="text-xs ps-2 pb-2 text-gray-400 hover:text-blue-500 border-s-4 border-blue-500" to="">Contact</Link> */}
            </div>
          </div>
          <div className='inline-flex gap-4 justify-end my-6 pe-8'>
            <Link to="https://github.com/vivekkum-ar" className=""><Icon href='https://github.com/vivekkum-ar' className='text-gray-500 dark:text-gray-300 hover:text-gray-600' icon="bi:github" width="25" height="25" /></Link>
            <Link to="mailto:vivek.zfw@gmail.com" className=""><Icon href='https://mailto:vivek.zfw@gmail.com' icon="simple-icons:gmail" className='text-gray-500 dark:text-gray-300 hover:text-red-400' width="25" height="25" /></Link>
            <Link to="https://linkedin.com/in/mrvivekkumar" className=""><Icon href='https://linkedin.com/in/mrvivekkumar' icon="bi:linkedin" className='text-gray-500 dark:text-gray-300 hover:text-blue-500' width="25" height="25" /></Link>
            <Link to="https://instagram.com/vivekkum.ar" className=""><Icon href='https://instagram.com/vivekkum.ar' icon="cib:instagram" className='text-gray-500 dark:text-gray-300 hover:text-fuchsia-500' width="25" height="25" /></Link>
            <Link to="https://x.com/vivekkum_ar" className=""><Icon href='https://x.com/vivekkum_ar' icon="bi:twitter-x" className='text-gray-500 dark:text-gray-300 hover:text-slate-400' width="25" height="25" /></Link>
          </div>
        </div>
      </div>
      <p className="absolute text-sm z-20 text-gray-800 dark:text-gray-300 bg-transparent text-center w-full inline-flex justify-center gap-2 py-1">
        Last updated Feb/2024&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Vivek Kumar&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Developed with expertise in
        <Icon href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' className='hover:text-yellow-300' icon="simple-icons:javascript" width="20" height="20" />
        <Icon href='https://react.dev/' className='hover:text-blue-300' icon="akar-icons:react-fill" width="20" height="20" />
        <Icon href='https://tailwindcss.com/' className='hover:text-teal-500' icon="ri:tailwind-css-fill" width="20" height="20" />
        <Icon href='https://github.com' className='hover:text-gray-800' icon="bi:github" width="20" height="20" />.
      </p>
      <p className="relative font-lexend h-8 font-normal text-sm text-gray-200 dark:opacity-50 dark:bg-blue-700 bg-blue-300 text-center">
      </p>
      {/* </div> */}
    </div>
  )
}

export default Footer