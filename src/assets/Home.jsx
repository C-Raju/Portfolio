import React from 'react'
import { BiLogoLinkedinSquare,BiLogoInstagram,BiLogoTelegram,BiLogoWhatsappSquare } from "react-icons/bi"; 
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <>
    <hr />
     <div className='bg-purple-800 py-60 px-16 sm:flex justify-between items-center '> 
         <img className='w-28 sm:w-96 sm:h-96 -top-10 relative shadow-2xl shadow-white  ring-2 ring-purple-300 ring-offset-8  bg-white rounded-md ' src="./img/85f229e0-44df-11ee-b168-f77744fe9cd9.jpg" alt="banner" />
       
        <div className=' sm:p-6 sm:-top-20'>
         <h1 className='my-4 font-bold text-4xl '>Hii, I'm Chandrashekhar Murgan <span className='text-white drop-shadow-md'>Raju.</span></h1> 
         <h2 className='my-4 font-bold text-5xl animate-pulse'><span className='text-white drop-shadow-lg '>MERN</span> Stack Developer.</h2>
         <p className='text-3xl '>I am seeking opportunities that can help me in enhancing my Skills. </p>
      
        <div className='mt-20'> 
         <button className="rounded-full relative  -top-1 -left-1 bg-purple-500 py-2.5 px-5 font-medium  text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full  before:rounded-full   before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 shadow-md  shadow-black text-2xl"><a href='#contactus'>Hire Me</a></button>
         <a href="./img/Shekhar.Raju-Resume.pdf" download="Shekhar.Raju-Resume"><button className="rounded-full relative -top-1 -left-1 bg-white py-2.5 px-5 font-medium mx-4 text-purple-500 transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full  before:rounded-full  before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 shadow-md shadow-black text-2xl">Resume</button></a>
        </div>
       </div>
        
       <div className=' text-white '>
        <a href="https://www.linkedin.com/in/chandrashekhar-raju-416a20218"><BiLogoLinkedinSquare className='hover:opacity-30 duration-700 h-10 w-20 my-8'/></a>
        <a href="https://www.instagram.com/xx_raju_"><BiLogoInstagram className='hover:opacity-30 duration-700 h-10 w-20 my-8'/></a>
        <a href="https://t.me/CMR29"><BiLogoTelegram className='hover:opacity-30 duration-700 h-10 w-20 my-8'/></a>
        <a href=" https://wa.me/qr/ZHLW7I7LMP4KB1 "><BiLogoWhatsappSquare className='hover:opacity-30 duration-700 h-10 w-20 my-8'/></a>
       </div>
       
     </div>
    <Education/>
    <Skills/>
    <Projects/>
    <ContactUs/>
    </>
  )
}

export default Home



