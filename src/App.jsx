import { useState} from 'react'
import './App.css'
import {AiOutlineMenu,AiOutlineHome, AiOutlineMail, AiOutlineProject} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {GrProjects} from 'react-icons/gr'
import {TypeAnimation} from 'react-type-animation'

import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedin} from 'react-icons/fa'
// https://www.youtube.com/watch?v=22CxRxryQFE
// Build and Deploy a Custom React Portfolio - Vite.js & Tailwind CSS

import  PropTypes from 'prop-types'
function App() {
  
  return (
    <>
    <Sidenav/>
    <Main/>
    <Work/>
    <Projects/>
    <Contact/>
    </>
  )
}





function Sidenav(){
  const [nav,setNav] = useState(false)
  const handleNav = ()=>{
    setNav(!nav)
    console.log('state Changed');
  }
  return(
    <div>
    <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[99] md:hidden'/>
    {
      nav ? (
        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
          <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineHome size={20}/>
            <span className='pl-4'>Home</span>
          </a>
          <a onClick={handleNav} href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <GrProjects size={20}/>
            <span className='pl-4'>Work</span>
          </a>
          <a onClick={handleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineProject size={20}/>
            <span className='pl-4'>Projects</span>
          </a>
          <a onClick={handleNav} href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <BsPerson size={20}/>
            <span className='pl-4'>Resume</span>
          </a>
          <a onClick={handleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
            <AiOutlineMail size={20}/>
            <span className='pl-4'>Contact</span>
          </a>
        </div>
        )
        :(
          ""
          
      )}
      <div className='md:block hidden fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            {/*  justify-center  items-center  */}
            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
              <AiOutlineHome size={20}/>
            </a>
            <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
              <GrProjects size={20}/>
            </a>
            <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
              <AiOutlineProject size={20}/>
            </a>
            <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
              <BsPerson size={20}/>
            </a>
            <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300' >
              <AiOutlineMail size={20}/>
            </a>
          </div>
      </div>
    </div>
  )
}

// ***************************************************************
// Main
// ***************************************************************
import logo from './assets/bk.png'

function Main() {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={logo} alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50 '>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col  justify-center lg:items-start items-center '>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I&apos;m Islam Abozeed</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I&apos;m a
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        1000,
        'Tech Enthusiast',
        1000,
        'Building websites',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em',paddingLeft:'5px', display: 'inline-block' }}
      repeat={Infinity}
    />
        </h2>
        <div className='flex  justify-between pt-6 max-w-[200px] w-full'>
          <FaTwitter className='cursor-pointer' size={20}/>
          <FaFacebookF className='cursor-pointer' size={20}/>
          <FaInstagram className='cursor-pointer' size={20}/>
          <FaLinkedin className='cursor-pointer' size={20}/>
        </div>
      </div>
      </div>
    </div>
  )
}
// ***************************************************************
// WORK
// ***************************************************************
const data = [
  {
    year: 2022,
      title: 'The Shawshank Redemption',
      duration: '1 year',
      details: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
      year: 2021,
      title: "The Godfather",
      duration: '2 years',
      details: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
      year: 2020,
      title: "The Dark Knight",
      duration: '3 years',
      details: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      year: 2019,
      title: "Jurassic Park",
      duration: '4 years',
      details: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose."
    },
];
// import WorkItem from './workItem'
function Work() {

  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item , idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details}/>
      )
      )}
      {/* console.log('how many'); */}
    </div>
  )

}


// const WorkItem = ()=>{
//   return (
//     <div>WorkItem</div>
//   )
// }


function WorkItem({year,title,duration,details}) {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
          <span className='inline-blox px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>{year}</span>
          <span className='text-lg font-semibold text-[#0015e]'>{title}</span>
          <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
        </p>
          <p className='my-2 text-base font-normal text-stone-500'>{details}</p>
      </li>
    </ol>
  )
}






// ***************************************************************
//Projects
// ***************************************************************
import pro1  from "./assets/project-1.png";
import pro2  from "./assets/project-2.png";
import pro3  from "./assets/project-3.png";
import pro4  from "./assets/project-4.png";
function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quod, neque ipsam voluptatibus rem illo optio suscipit accusamus est ipsa voluptatem dolore voluptatum officia dolor laudantium aspernatur velit pariatur eos!
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
      <ProjectItem img={pro1} title='Crypto App'/>
      <ProjectItem img={pro2} title='Property App'/>
      <ProjectItem img={pro3} title='Netflex App'/>
      <ProjectItem img={pro4} title='Twitch App'/>
        
      </div>
    </div>
  )
}

function ProjectItem({img,title}) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
      <img src={img} alt="" className='rounded-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
          {title}
          </h3>
          <p className='pb-4 pt-2 text-white text-center'>React JS</p>
          <a href="">
            <p className='text-center p-3 rounded-lg bg-white text-grat-700 font-bold cursor-pointer text-lg'>More Info</p>
          </a>
      </div>
    </div>
  )
}
// ***************************************************************
//Contact
// ***************************************************************
function Contact() {
  return (
    <div id='contact' className='max-w-[1048px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
      <form action="" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
              <label htmlFor="" className='uppercase text-sm py-2'>Name</label>
              <input  className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='name' />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="" className='uppercase text-sm py-2'>Phone Number</label>
              <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='phone' />
            </div>
        </div>
          <div className='flex flex-col py-2'>
          <label htmlFor="" className='uppercase text-sm py-2'>E-mail</label>
            <input  className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' />
          </div>
          <div className='flex flex-col'>
          <label htmlFor="" className='uppercase text-sm py-2'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' />
          </div>
          <div className='flex flex-col py-2' >
          <label htmlFor="" className='uppercase text-sm py-2'>Message</label>
          <textarea className='border-2 rounded-lg p-3 border-gray-300' name="message" id="" cols="" rows="10"></textarea>
          </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
          Send Message
        </button>
      </form>
    </div>
  )
}

WorkItem.propTypes = {
  year: PropTypes.number,
  title: PropTypes.string,
  duration: PropTypes.string,
  details: PropTypes.string,
};
ProjectItem.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
}

export default App