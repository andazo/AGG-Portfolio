import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactLogo from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import PowerBI from '../assets/PowerBi.png';
import Tailwind from '../assets/tailwind.png';
import SQLServ from '../assets/SQLServerLogo.png';
import Java from '../assets/JavaLogo.png';
//import PyhtonLogo from '../assets/PythonLogo.png';
import PyhtonLogoIcon from '../assets/PyhtonLogo.png';
import Github from '../assets/github.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Main container with skills */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-5xl font-bold inline border-b-4 border-purple-600 py-1'>Skills & Technologies</p>
                <p className='py-5 font-bold text-xl'>Some of the technologies and Frameworks I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>JavaScript</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>Node Js</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>React</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>Tailwind</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FireBase} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>Firebase</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={SQLServ} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>SQL Server</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PowerBI} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>PowerBi</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PyhtonLogoIcon} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>Python</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>Java</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt='Logo JavaScript'/>
                    <p className='my-4 font-bold'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills