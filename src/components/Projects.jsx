import React from 'react'
import Kane from '../assets/FotoKaneTaxi.png'
import deFeria from '../assets/DeFeriaFoto.png'
import ecciPass from '../assets/EcciPassFoto.png'


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-600 py-1'>Projects</p>
                <p className='py-6 font-bold text-xl'>Some of the projects I've worked in</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${Kane})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Kane Taxi
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://kane-2023.web.app/' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Run
                                </button>
                            </a>
                            <a href='https://github.com/andazo/Kane-Web#markdown-header-ejecucion-del-proyecto' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${deFeria})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            deFeria.cr
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://www.deferia.cr/' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Run
                                </button>
                            </a>
                            <a href='https://github.com/fabianabarca/ferias' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${ecciPass})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            EcciPass UCR
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://ecci-pass.netlify.app/login' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Run
                                </button>
                            </a>
                            <a href='https://github.com/mgnr7/EcciPass' target="_blank" rel="noopener noreferrer">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects