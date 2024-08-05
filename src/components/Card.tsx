"use client"
import { useState } from "react"
const Cards = ({ value, name }: any) => {
    const [incre, setIncre] = useState(0)
    let increase = setTimeout(() => {
        setIncre(incre + 1)
    }, 20)
    if (incre === value) {
        clearTimeout(increase)
    }
    return (
        <div className="bg-box text-center w-[250px] h-[130px] p-4 flex flex-col justify-center items-center">
            <span className="text-yellow-500 text-3xl">{incre}</span>
            <h3 className="text-base mt-2 text-gray-300">{name}</h3>
        </div>
    )
}

export default Cards