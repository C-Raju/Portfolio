import React from 'react';
import { GiCheckMark } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { BiSolidSchool } from "react-icons/bi";   


const Education = () => {
  const dataitems = [
    {
     certificate:"MERN Stack Development",
     date:"Apr 2023",
     TAN:"Dcodetech Industrial Training (OPC) Pvt.Ltd.",
     location:"Thane-West,Maharashtra.",
     Marks:"Grade A",
    },
    {
      certificate:"BSc.ComputerScience, Mumbai University",
      date:"May 2022",
      TAN:"VPM's RZ Shah College of Arts, Science and Commerce.",
      location:"Mulund-East,Mumbai.",
      Marks:"Percentage-66.78%",
     },
     {
      certificate:"HSC -12th, Maharashtra Board",
      date:"May 2019",
      TAN:"Holy Angels high school & Junior College.",
      location:"Mulund-East,Mumbai.",
      Marks:"Percentage-48.46%",
     },
     {
      certificate:"SSC -10th, Maharashtra Board",
      date:"Apr 2017",
      TAN:"J.A Meghani, Mulund high school.",
      location:"Mulund-West,Mumbai.",
      Marks:"Percentage-55.60%",
     }
  ]
  return (
    <>
     <div className='sm:flex bg-purple-800 rounded-md m-20 ' id='education'>
     <div className='w-1/2 mx-10 text-2xl'>
     <h1 className='text-white text-5xl mt-4'>Education.</h1>
     {dataitems.map((d,i) => (
      <div key={i} className='text-white shadow-xl rounded-md w-fit p-4 border-2 m-10'>
      <h2 className='flex'><IoMdSchool className='mr-2 mt-1' />{d.certificate} <span className='ml-4 text-purple-400'>{d.date}</span></h2>
      <p className='flex'><BiSolidSchool className='mr-2 mt-1' />{d.TAN}</p>
      <p className='flex'><IoLocation className='mr-2 mt-1' />{d.location}</p>
      <h3 className='flex'><GiCheckMark className='mr-2 mt-1' />{d.Marks}</h3>
      </div>
      ))}
      </div>
     <div className='w-1/2'> 
      <img className="h-full rounded-r-lg bg-purple-500" src="./img/vecteezy_3d-graduation-of-university-hat-cap-or-diploma-graduation_10915899_987.png" alt="" />
     </div>
     </div>
    </>
  )
}

export default Education
