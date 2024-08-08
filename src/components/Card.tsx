"use client"
import { useEffect, useState } from "react"
const Cards = ({ value, name }: any) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [incre, setIncre] = useState(0)
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
    let increase = setTimeout(() => {
        !activeSection ? setIncre(incre + 5) : setIncre(0)
    }, 30)
    if (incre === value) {
        clearTimeout(increase)
    }
    return (
        <div className="bg-box text-center w-[250px] h-[130px] p-4 flex flex-col justify-center items-center">
            <span className="text-yellow-500 text-3xl">{ incre}</span>
            <h3 className="text-base mt-2 text-gray-300">{name}</h3>
        </div>
    )
}

export default Cards