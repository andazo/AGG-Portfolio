import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#8892b0] text-xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Andrés Azofeifa García</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Software Developer.</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px] text-xl'>I'm a dedicated Software Engineer with a strong focus on web development, design, and data analysis. 
          My expertise lies in crafting web applications and digital platforms that drive the success of products 
          and businesses.
        </p>
        <div>
        <button className='text-white font-bold group border-4 px-6 py-3 my-2 flex items-center hover:bg-[#8892b0] hover:border-[#8892b0]'>
            My Projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-4 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home