import React, { useEffect, useRef } from 'react'
import { flushSync } from 'react-dom';
import { NavigationMenus } from './Nav';
import { useRecoilState } from 'recoil';
import { dark_Theme } from '@/Recoil/store';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from '@iconify/react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { redirect, useNavigate } from 'react-router-dom';

interface NavbarProps {
  // Add your prop types here
}

const Navbar: React.FC<NavbarProps> = ({ }) => {
  const navigate = useNavigate();
  /* ---------------------------------------------------------------------------------------------- */
  /*                            Code for dark mode toggle button in React                           */
  /* ---------------------------------------------------------------------------------------------- */
  const Ref = useRef<HTMLButtonElement>(null);
  const [darkTheme, setdarkTheme] = useRecoilState(dark_Theme);
  const toggleDarkMode = async (darkTheme: boolean) => {
    if (!Ref.current || !document.startViewTransition) {
      setdarkTheme(!darkTheme);
      return;
    }
    await document.startViewTransition(() => {
      console.log("inside v");
      flushSync(() => {
        setdarkTheme(darkTheme);
      });
    }).ready;
    const { top, left, width, height } = Ref.current.getBoundingClientRect();
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    console.log("outside")

    document.documentElement.animate({
      clipPath: [
        `circle(0px at ${left + width / 2}px ${top + height / 2}px)`,
        `circle(${maxRadius}px at ${left + width / 2}px ${top + height / 2}px)`,
      ]
    },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      })


  }
  useEffect(() => {
    // console.log("inside e");

    if (darkTheme == false) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("dark-theme", `false`);
    } else if (darkTheme == true) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("dark-theme", `true`);
    }
  }, [darkTheme]);


  return (
    <nav className="main-header bg-inherit px-4 lg:px-6 pb-4 pt-2 mx-auto max-w-screen-xl z-50">
      <div className="flex flex-row justify-between items-center">

        {/* <div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2"> */}
        <a href="/" className="flex items-center">
          <img src="/images/logo-fav.ico" className="outline-1 outline outline-slate-700 shadow-lg rounded-full h-5 sm:h-12" alt="Vivek's Profile" />
          <span className="self-center text-lg whitespace-nowrap font-lexend ms-2">VIVEK KUMAR</span>
        </a>
        {/* </div> */}
        <div className="flex flex-row items-center justify-between pt-1">
          <NavigationMenus></NavigationMenus>
        </div>
        <div className="flex items-center lg:order-2">
          {/* <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a> */}
          {/* <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get started</a> */}
          <button ref={Ref} id="theme-toggle" onClick={() => { toggleDarkMode(!darkTheme) }} type="button" className="dark:text-white text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700  rounded-full text-sm p-2.5">
            <svg id="theme-toggle-dark-icon" className={`${darkTheme === true ? "" : "hidden"} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            <svg id="theme-toggle-light-icon" className={`${darkTheme === false ? "" : "hidden"} w-5 h-5`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
          </button>
          <div className='block lg:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="/{user.photoURL}" className="rounded-full outline outline-gray-500" height={35} width={35} />
                  <AvatarFallback className="border-2  text-center px-2.5 py-2 rounded-full">
                    <Icon icon="material-symbols:menu" />
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='z-40 font-lexend border border-gray-500 rounded-lg shadow-lg dark:shadow-gray-700 shadow-gray-300'>
                {/* <DropdownMenuLabel>Hi, {user.displayName}</DropdownMenuLabel> */}
                <DropdownMenuItem className=' text-xs'
                  onClick={() => { const element = document.querySelector(`#projects`); element?.scrollIntoView({ behavior: 'smooth' }); }}
                ><Icon icon="ion:desktop-outline" className="inline-flex" fontSize={15} style={{}} />
                  Projects
                </DropdownMenuItem>
                <DropdownMenuSeparator className='' />
                <DropdownMenuItem className=' text-xs'
                  onClick={() => { navigate("/about"); }}
                ><Icon icon="icon-park-twotone:me" className="inline-flex" fontSize={15} style={{}} />
                  About me
                </DropdownMenuItem>
                <DropdownMenuSeparator className='' />
                <DropdownMenuItem className=' text-xs'
                  onClick={() => { navigate("/resume"); }}
                ><Icon icon="ph:download-bold" className="inline-flex" fontSize={15} style={{}} />
                  Resume
                </DropdownMenuItem>
                <DropdownMenuSeparator className='' />
                <DropdownMenuItem className=' text-xs'
                  onClick={() => { redirect("https://next-blog-website-phi.vercel.app/"); }}
                ><Icon icon="fa6-solid:blog" className="inline-flex" fontSize={15} style={{}} />
                  Blogs
                </DropdownMenuItem>
                <DropdownMenuSeparator className='' />
                <DropdownMenuItem className=' text-xs'
                  onClick={() => { const element = document.querySelector(`#experience`); element?.scrollIntoView({ behavior: 'smooth' }); }}
                ><Icon icon="material-symbols:work-history" className="inline-flex" fontSize={15} style={{}} />
                  Experience
                </DropdownMenuItem>
                <DropdownMenuSeparator className='' />
                <DropdownMenuItem className=' text-xs'
                  onClick={() => { const element = document.querySelector(`#tech`); element?.scrollIntoView({ behavior: 'smooth' }); }}
                ><Icon icon="gridicons:science" className="inline-flex" fontSize={15} style={{}} />
                  Tech i use
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar