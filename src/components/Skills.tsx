import React from 'react'
import "./css/Skills.css"

interface SkillsProps {
    // Add your prop types here
    skills: string[]
}

const Skills: React.FC<SkillsProps> = ({skills}) => {
    return (
        <>
         <div className='body-div'>
        <div className="scroll">
          <div>
            {skills.map((skill,index) => {
              return (
                <span id={`${index}`} className='w-40 bg-gradient-to-r from-blue-200 to-blue-400 text-gray-800 dark:from-slate-500 dark:to-blue-400 dark:text-gray-200 h-16 text-center justify-center items-center'>{skill}</span>
              )
            })}
          </div>
          <div>
            {skills.map((skill,index) => {
              return (
                <span id={`${index}`} className='w-40 bg-gradient-to-r from-blue-200 to-blue-400 text-gray-800 dark:from-slate-500 dark:to-blue-400 dark:text-gray-200 h-16 text-center justify-center items-center'>{skill}</span>
              )
            })}
          </div>
        </div>
      </div>
        </>
    )
}

export default Skills