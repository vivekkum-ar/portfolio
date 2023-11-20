import Cards from '@/components/cards'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface HomeProps {
  // Add your prop types here
}

const Home: React.FC<HomeProps> = ({ }) => {

  //GSAP Animations
  useGSAP(() => {
    gsap.from(".astrodivider", {
      scrollTrigger: {
        trigger: ".astrodivider",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
      y: -500,
      opacity: 0,
      duration: 1,
    });



  });

  return (
    <>
    <div className="relative">

    <div className='h-96 dark:bgg bgg-light relative opacity-40'>
  <div className="flex flex-col justify-center items-center h-full border border-solid border-opacity-35">
    {/* <!-- Your content here --> */}
  </div>
</div>
<div className='gradient-to-light dark:gradient-to-dark h-96 flex flex-row justify-center absolute top-0 w-full'>

</div>  
    <div className='h-96 absolute top-0 w-full'>
      <div className="flex flex-col justify-center items-center h-full ">
    <h1 className="font-lexend font-normal text-7xl w-full text-center">
    <span className="bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 from-white to-blue-800  dark:to-white w-full">
      Hello, I am Vivek
    </span>
    <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 dark:to-white from-white to-blue-800 w-full"><br/>
    Frontend Developer
    </span>
  </h1>
  </div>
  </div>  
  <div className="astrodivider mx-auto mt-32 scale-150"><div className="astrodividermask"></div><span className='text-blue-500 dark:bg-slate-800 bg-slate-200 text-2xl'><i>&#10038;</i></span></div>
  {/* <div className="h-40 gradient-to-light-180 w-full p-5 flex flex-row justify-center items-center -translate-y-10">
    <div className="divider h-2 w-[30%] bg-gray-500"></div>
  </div> */}
  

  {/* <div className="p-8 sm:py-12 relative z-20 h-full flex flex-col"><div className="flex flex-col sm:flex-row gap-3 justify-between"><h3 className="text-4xl font-semibold">Slant it</h3></div><p className="prose text-gray-200/60 font-medium text-sm my-8 leading-[1.8] tracking-wide drop-shadow">Having built so many products, I looked for ways to make videos of my products that I could post online. Screen recordings worked, but they weren’t catchy enough on social media. And that’s why I built Slant it!<br /><br />Slant it is an easy-to-use 3D product video maker from simple screen recordings. It has various features including smart music beat detection, dozens of 3D animations, and more spread across free and pro plans.</p><div className="flex justify-between mt-auto"><a className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-gray-50 text-gray-950 shadow-xl shadow-black/20 hover:bg-gray-300 focus:ring-1 ring-gray-300 focus:ring-offset-2 text-sm font-medium px-4 py-2" href="https://slantit.app" target="_blank" >Liv <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover/button:translate-x-px group-hover/button:-translate-y-px transition-transform"><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></a></div></div> */}
  <Cards></Cards>





  
  </div>
  </>
  )
}

export default Home