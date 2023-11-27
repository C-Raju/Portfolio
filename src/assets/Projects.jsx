import { AiFillGithub } from "react-icons/ai";

const Projects = () => {

  return (
    <>
    <div className='bg-purple-500 rounded-md m-20 text-black text-4xl p-4' id="project">
    <a href='https://github.com/C-Raju' className='flex drop-shadow-lg font-bold text-white'><AiFillGithub className="hover:opacity-30 duration-700"/>Projects.</a>
    <div className='flex justify-between p-20'>
      <div className='text-white w-80 h-96 text-center hover:opacity-50 duration-1000'>
        <img src="./img/vecteezy_3d-paper-and-pen-icon_18868596_137.png" alt="" />
        <a href='https://shekhar-foodblog.netlify.app/'>Blog</a>
      </div>
      <div className='text-white w-44 h-44 text-center hover:opacity-50 duration-1000'>
        <img src="./img/vecteezy_3d-isolated-order-food-icon_11301120_808.png" alt="" />
        <a> Food Ordering</a>
      </div>
      <div className='text-white w-80 h-96 text-center hover:opacity-50 duration-1000'>
        <img src="./img/vecteezy_book-and-pencil-education-concept-illustration-for-business_8480494_178.png" alt="" />
        <a>Blog</a>
      </div>
      <div className='text-white w-80 h-96 text-center hover:opacity-50 duration-1000'>
        <img src="./img/vecteezy_book-and-pencil-education-concept-illustration-for-business_8480494_178.png" alt="" />
        <a>Blog</a>
      </div>
    </div>
    </div>
    </>
  )
}

export default Projects
 