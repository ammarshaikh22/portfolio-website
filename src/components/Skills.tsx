import React from 'react'
import { Progress } from "@/components/ui/progress"
import { skills } from "@/data/data"
const Skills = () => {
    return (
        <section id='skills' className='relative my-20'>
            <div className='max-w-[92%] mx-auto'>
                <div className='text-center'>
                    <h2 className='z-[-1] absolute top-0 left-0 right-0 md:text-8xl text-trans'>Skills</h2>
                    <h2 className='text-3xl md:text-5xl'>My Skills</h2>
                    <p className='max-w-[95%] md:max-w-[76%] mx-auto mt-6 md:mt-10 text-gray-400 text-sm md:text-base'>Proficient front-end developer with expertise in HTML, CSS, JavaScript, React, and Next.js, specializing in responsive design and intuitive user interfaces. Skilled in Git version control and problem-solving complex issues.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-10'>
                    {
                        skills.map((curr) => {
                            return (
                                <div key={curr.id}>
                                    <span>{curr.name}</span>
                                    <Progress value={curr.value} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills