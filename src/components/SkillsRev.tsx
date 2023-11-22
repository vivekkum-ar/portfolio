import React from 'react'
import "./css/SkillsRev.css"
import { Button } from './ui/button'

interface SkillsRevProps {
    // Add your prop types here
    skills: string[]
}

const SkillsRev: React.FC<SkillsRevProps> = ({skills}) => {
    return (
        <>
         <div className='body-div'>
        <div className="scrollR">
          <div>
            {skills.map((skill,index) => {
              return (
                <span className='w-40 bg-gradient-to-r from-blue-200 to-blue-400 text-gray-800 dark:from-slate-500 dark:to-blue-400 dark:text-gray-200 h-16 text-center justify-center items-center'>{skill}</span>
              )
            })}
          </div>
          <div>
            {skills.map((skill,index) => {
              return (
                <span className='w-40 bg-gradient-to-r from-blue-200 to-blue-400 text-gray-800 dark:from-slate-500 dark:to-blue-400 dark:text-gray-200 h-16 text-center justify-center items-center'>{skill}</span>
              )
            })}
          </div>
        </div>
      </div>
        </>
    )
}

export default SkillsRev