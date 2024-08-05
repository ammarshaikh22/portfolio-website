/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import { contact } from "@/data/data"
import Image from 'next/image'
import Link from 'next/link'
import Form from './Form'
const Contact = () => {
    return (
        <section id='contact' className='relative mt-14'>
            <div className='max-w-[92%] mx-auto'>
                <div className='text-center'>
                    <h2 className='z-[-1] absolute top-0 left-0 right-0 md:text-8xl text-trans'>Contact</h2>
                    <h2 className='text-3xl md:text-5xl'>Contact Me</h2>
                    <p className='max-w-[95%] md:max-w-[76%] mx-auto mt-6 md:mt-10 text-gray-400 text-sm md:text-base'>Interested in working together? Reach out to discuss your project, get a quote, or just to say hi. Let's create something amazing</p>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mt-24'>
                    {
                        contact.map((curr) => {
                            return (
                                <div key={curr.id} className='text-center flex flex-col justify-center items-center'>
                                    <div className=' w-[100px] h-[100px] rounded-full bg-box mb-8 text-yellow-500 flex justify-center items-center'>
                                        <Image src={curr.img} alt='img' width={30} height={30} color='text-yellow-500' />
                                    </div>
                                    <span className='text-base font-semibold'>{curr.name}</span>
                                    <p className='mt-8'><Link href={curr.link}>{curr.detail}</Link></p>
                                </div>
                            )
                        })
                    }
                </div>
                <Form />
            </div>
        </section>
    )
}

export default Contact