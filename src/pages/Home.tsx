import Cards from '@/components/cards'
import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CodeComponent from '@/components/codeComponent';
import Skills from '@/components/Skills';
import SkillsRev from '@/components/SkillsRev';
import TimelineCard from '@/components/timelineCard';
import Contact from './Contact';

gsap.registerPlugin(useGSAP);

interface HomeProps {
  // Add your prop types here
}
const skills = ["React", "Next.js", "TailwindCSS", "TypeScript", "Node.js", "Javascript", "Express", "MongoDB", "GraphQL", "RESTful APIs", "Git", "Jest", "Docker", "AWS", "CI/CD", "Agile", "Scrum", "Kanban", "JIRA", "Figma","React", "Next.js", "TailwindCSS", "TypeScript", "Node.js", "Javascript", "Express"]
const Home: React.FC<HomeProps> = ({ }) => {

  //GSAP Animations
  useGSAP(() => {
    gsap.from(".astrodivider", {
      scrollTrigger: {
        trigger: ".astrodivider",
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
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
                Hello, I am <p className='font-pacifico inline-flex text-blue-400'>Vivek</p>
              </span>
              <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 dark:to-white from-white to-blue-800 w-full"><br />
                Frontend Developer
              </span>
            </h1>
          </div>
        </div>
        <div className="astrodivider mx-auto mt-32 scale-150"><div className="astrodividermask"></div><span className='text-blue-500 dark:bg-slate-800 bg-slate-200 text-2xl'><i>&#10038;</i></span></div>
        
<div className="flex flex-row items-center">
  <div className="flex flex-col">
<span id='tech' className="flex text-5xl font-lexend pb-4 bg-clip-text text-transparent bg-gradient-to-t dark:from-slate-500 dark:to-white from-slate-200 to-blue-800 w-full"><br />
                Technologies i work with
              </span>

  <div className="astrodivider pt-6 px-16 scale-150"><div className="astrodividermask"></div></div>

<span className="flex text-justify pr-6 text-lg font-lexend dark:text-slate-500  text-gray-800 w-full"><br />Seasoned in React, Next.js, and TailwindCSS, with a command over TypeScript, Node.js, and MongoDB. Proficient in Agile, CI/CD, and adept with collaborative platforms like JIRA and Figma. Let's innovate together!
</span>
              </div>
<div className="font-lexend text-md font-semibold my-32 dark:text-white text-white">
        <Skills skills={skills.slice(0,9)}></Skills>
        <SkillsRev skills={skills.slice(9,18)}></SkillsRev>
        <Skills skills={skills.slice(18,-1)}></Skills>
        </div>
</div>

        <CodeComponent language={'javascript'} />

        <Cards></Cards>
        <TimelineCard Title={'Experience'} Description={''}></TimelineCard>
        <Contact Title='Get in Touch'></Contact>
      </div>
    </>
  )
}

export default Home