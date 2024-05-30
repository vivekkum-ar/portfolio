import React from 'react'
import "../index.css"

interface LoadingProps {
  // Add your prop types here
}

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <div className="scale-150 spinner-overlay bg-gray-900 opacity-30 dark:bg-white">
      <div className="flex justify-items-center items-center w-[100px] h-[100px] rounded-lg">
    <div className="spinner
    center scale-150
    ">
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
    <div className="spinner-blade"></div>
</div>
</div>
</div>
  )
}

export default Loading