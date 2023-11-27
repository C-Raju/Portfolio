import { useState } from "react";
import { BsToggle2On, BsToggle2Off} from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const NavItems = [
  {
    herf:"#education",
    tag:"Education"
  },
  {
    herf:"#skill",
    tag:"Skill"
  },
  {
    herf:"#project",
    tag:"Project"
  },
  {
    herf:"#contactus",
    tag:"ContactMe"
  },

]

 

  return (
  
      <nav className="flex justify-end p-2  bg-purple-800 ">
        <label className="flex ml-10 mr-auto text-3xl font-bold text-white mt-2 px-2 sm:text-5xl ">ChandraShekhar.</label>
        <ul className='sm:flex sm:my-4 sm:text-2xl sm:text-white hidden'>
        {NavItems.map((d,i)=>(
        <li key={i} className="mx-6  after:rounded-full after:content-[''] after:w-0 after:duration-1000  after:block after:h-1 after:bg-purple-400 after:hover:w-full  after:transition-all after:scale-x-0 after:left-0 after:hover:origin-left after:hover:scale-x-100 after:hover:shadow-md after:hover:shadow-purple-400 px-2" ><a href={d.herf}>{d.tag}</a></li>
        ))}
        </ul>
        <div onClick={() => setOpen(!open)} className="sm:hidden m-3">
          {
            open ? <BsToggle2On className="text-3xl"/> : <BsToggle2Off className="text-3xl"/>
          }
        </div>
      </nav>
      
      
     
  )
}

export default Navbar




