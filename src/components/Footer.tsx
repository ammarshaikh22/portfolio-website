"use client"
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { services } from "@/data/data"
import { menu } from "@/data/data";
const Footer = () => {
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
        <footer className='relative py-14'>
            <div className='max-w-[92%] mx-auto'>
                <div className='flex flex-col md:flex-row justify-center gap-10 md:gap-14'>
                    <div className="md:w-[25%]">
                        <h4 className="text-2xl">About</h4>
                        <p className="mt-12 text-gray-400 text-base">Hi, I'm an experienced front-end developer with a passion for creating high-quality, responsive web applications using Next.js and React. I love turning ideas into reality and delivering exceptional user experiences.</p>
                    </div>
                    <div className="md:w-[25%]">
                        <h4 className="text-2xl md:ml-6">Links</h4>
                        <div className="mt-10 md:ml-6">
                            <ul className="flex flex-col gap-4">
                                {
                                    menu.map((curr, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={`#${curr.url}`} className="text-gray-400" onClick={() => scroll(curr.url)}>&rarr; {curr.name} </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-[25%]">
                        <h4 className="text-2xl">Services</h4>
                        <div className="mt-10">
                            <ul className="flex flex-col gap-4">
                                {
                                    services.map((curr) => {
                                        return (
                                            <li key={curr.id}>
                                                <Link href="#services" onClick={() => scroll("services")}  className="text-gray-400">&rarr; {curr.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-[25%]">
                        <h4 className="text-2xl">Have a Question?</h4>
                        <div className="mt-10 flex flex-col gap-4">
                            <p className="text-gray-400">Karachi,SD Pakistan</p>
                            <p className="text-gray-400">03162324240</p>
                            <p className="text-gray-400">ammarshaikh50099@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="mt-20 md:text-center">
                    <p>Copyright ©2024 All rights reserved | This template is made by 💗 Ammar Shaikh</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer