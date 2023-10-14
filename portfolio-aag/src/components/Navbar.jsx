import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import  Logo from '../assets/Logo3.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[75px] flex justify-between items-center px-10 bg-[#e0e0e9] text-black'>
        <div className='mt-3'>
            <img src={Logo} alt='Logo' style={{width: '190px'}}/>
        </div>
        <ul className='hidden md:flex'>
            <li className='text-xl font-bold hover:scale-110 duration-500'>Home</li>
            <li className='text-xl font-bold hover:scale-110 duration-500'>About</li>
            <li className='text-xl font-bold hover:scale-110 duration-500'>Skills & Technologies</li>
            <li className='text-xl font-bold hover:scale-110 duration-500'>Projects</li>
            <li className='text-xl font-bold hover:scale-110 duration-500'>Skills</li>
            <li className='text-xl font-bold hover:scale-110 duration-500'>Contact</li>
        </ul>

        {/* Bar icon */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#DEE1DD] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills & Technologies</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social navbar */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300 font-bold'
                    href='https://www.linkedin.com/in/andazo/'
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300 font-bold'
                    href='https://github.com/andazo'
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300 font-bold'
                    href='andazo2501@gmail.com'
                    target="_blank"
                    >
                    Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300 font-bold'
                    href='/'
                    target="_blank"
                    >
                    Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar