import React from 'react';
import { DiReact,DiNodejs,DiMongodb,DiGithubBadge } from "react-icons/di";
import {SiTailwindcss,SiCss3,SiJavascript,SiRedux,SiHtml5,SiExpress  } from "react-icons/si";


const Skills = () => {
  return (
    <>
    <div className='bg-purple-800 p-14 mt-20 rounded-md overflow-hidden relative m-20' id='skill'>
      <h1 className='flex text-9xl text-white drop-shadow-lg'>MySkills</h1>
      <div className='bg-purple-500 absolute z-0 w-40 h-40 -right-14 -bottom-14 rounded-full'></div>
      <div className='flex justify-between  p-8 relative z-10'>

        <div className='contentbox1'>
      
        <span className='flex text-5xl text-white'><DiReact className='h-12 w-20'/>React.Js</span>
        
        <span className='flex text-5xl text-white'><SiExpress className='h-12 w-20'/>Express</span>
     
        <span className='flex text-5xl text-white'><DiNodejs className='h-12 w-20'/>Node.Js</span>
     
        <span className='flex text-5xl text-white'><DiMongodb className='h-12 w-20'/>Mongodb</span>
    
        <span className='flex text-5xl text-white'><SiRedux className='h-12 w-20'/>Redux.Js</span>
        </div>
                              {/* ----second--- */}
        <div className='flex'>
        <span className='flex text-5xl text-white'><SiHtml5 className='h-12 w-20'/>Html</span>
      

        
        <span className='flex text-5xl text-white'><SiCss3 className='h-12 w-20'/>Css</span>
      
  
        
        <span className='flex text-5xl text-white'><SiJavascript className='h-12 w-20'/>Javascript</span>
      

        
        <span className='flex text-5xl text-white'><SiTailwindcss className='h-12 w-20'/>Tailwind.Css</span>
      

       
        <span className='flex text-5xl text-white'><DiGithubBadge className='h-12 w-20'/>Github</span>
         
        </div>
  
      </div>
      </div>
    </>
  )
}

export default Skills