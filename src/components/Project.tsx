import React from 'react'
import { Gridlayout } from './ui/Gridlayout'

const Project = () => {
    return (
        <section id='project' className='relative mt-24 mb-56'>
            <div className='max-w-[92%] mx-auto'>
                <div className='text-center'>
                    <h2 className='z-[-1] absolute top-0 left-0 right-0 md:text-8xl text-trans'>Project</h2>
                    <h2 className='text-3xl md:text-5xl'>Oue Project</h2>
                    <p className='max-w-[95%] md:max-w-[76%] mx-auto mt-6 md:mt-10 text-gray-400 text-sm md:text-base'>Developed a responsive web application using React and Next.js, focusing on seamless user experience and efficient version control with Git.</p>
                </div>
                <div className='mt-10'>
                    <Gridlayout />
                </div>
            </div>
        </section>
    )
}

export default Project