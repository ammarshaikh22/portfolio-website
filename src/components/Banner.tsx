/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Link from 'next/link'
const Banner = () => {
    const scroll = (targetId: any) => {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let start: number | null = null;

        const animateScroll = (timestamp: number) => {
            if (start === null) start = timestamp;
            const progress = timestamp - start;
            const currentPosition = startPosition + (distance * progress) / duration;
            window.scrollTo(0, currentPosition);

            if (progress < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                window.scrollTo(0, targetPosition);
            }
        };

        requestAnimationFrame(animateScroll);
    };
    return (
        <section id='home' className='pt-48 bg-bannerImg md:bg-contain bg-cover bg-no-repeat md:bg-left-20-bottom-90 md:bg-right-10-bottom-0 h-[100vh] md:h-[140vh] bg-center' >
            <div className='max-w-[96%] md:max-w-[92%] mx-auto'>
                <div className='flex justify-between'>
                    <div className='w-full md:text-start text-center mt-12 md:mt-0' >
                        <span className='text-sm text-yellow-500'>HELLO!</span>
                        <h1 className=' md:max-w-[50%] text-6xl mt-6 leading-tight font-extrabold'>I'm a <span className='text-yellow-500'>Web Developer</span> Based In Pakistan</h1>
                        <div className='flex items-center gap-2 mt-4 justify-center md:justify-start'>
                            <button className='text-sm text-black w-[110px] h-[50px] p-2 bg-yellow-500 rounded-3xl font-semibold'><Link href="/">Hire Me</Link></button>
                            <button className='text-sm text-white w-[130px] h-[50px] p-2 bg-transparent border border-white rounded-3xl' onClick={() => scroll("project")}><Link href="#project">My Work</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner