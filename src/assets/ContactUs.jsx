import { IoIosMail,IoMdCall,IoMdPin } from "react-icons/io";
import { BiLogoLinkedinSquare,BiLogoWhatsappSquare,BiLogoTelegram } from "react-icons/bi";

const ContactUs = () => {

  return (
    <>
    <div className='flex m-20 bg-purple-900 rounded-md p-8 justify-between overflow-hidden' id='contactus'>
      <div className='flex flex-col relative space-y-8'>
        <h1 className='text-white text-9xl'>Contact Me</h1>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.impedit blanditiis?</p>
        <div className=' mt-12'>
        <span className='flex text-white text-3xl'><IoIosMail className='h-6 w-20'/>Chandrashekharraju306@gmail.com</span>
        <span className='flex text-white text-3xl'><IoMdCall className='h-6 w-20'/>9029292001</span>
        <span className='flex text-white text-3xl'><IoMdPin className='h-6 w-20'/>Mulund, Maharashtra, India. 400080-Mumbai</span>
        </div>
        <div className='flex'>
         <a href='https://www.linkedin.com/in/chandrashekhar-raju-416a20218'><BiLogoLinkedinSquare className='hover:opacity-30 duration-700 h-10 w-20  text-white'/></a>
         <a href=" https://wa.me/qr/ZHLW7I7LMP4KB1 "><BiLogoWhatsappSquare className='hover:opacity-30 duration-700 h-10 w-20 text-white'/></a>
         <a href='https://t.me/CMR29'><BiLogoTelegram className='hover:opacity-30 duration-700 h-10 w-20  text-white'/></a>
        </div>
     </div>
     <div className='relative'>
     <div className='bg-purple-500 absolute z-0 w-40 h-40 -right-28 -top-28 rounded-full'></div>
     <div className='bg-purple-500 absolute z-0 w-40 h-40 -left-24 -bottom-20 rounded-full'></div>
     <div className='flex z-10 relative justify-center bg-slate-50 rounded-md p-4 shadow-xl shadow-purple-500'>
       <form  className='flex flex-col space-y-4' action="https://formspree.io/f/moqopbgg" method="POST">
       <label className='text-2xl text-purple-800'>FullName</label>
        <input className='border-2 rounded-md border-purple-800 w-96' type="name" name="name"  />
        
        <label className='text-2xl text-purple-800'>Email</label>
        <input className='border-2 rounded-md border-purple-800 w-96' type="email" name="email" />
        
        <label className='text-2xl text-purple-800'>Type your Message</label>
        <textarea className='border-2 rounded-md border-purple-800 w-96 ' name="message" cols="30" rows="4"   />

        <button className='rounded-md  bg-purple-800 text-white text-2xl p-2 mt-6 w-56 hover:bg-purple-500 duration-1000' >SEND MESSAGE</button>
     
       </form>
      
     </div>
   
     </div>
     </div>
     </>
  )
}

export default ContactUs