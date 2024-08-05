import { Clients } from '@/data/data'
import React from 'react'
import Cards from './Card'

const Numbers = () => {
    return (
        <div className='flex md:flex-row flex-col justify-center items-center gap-4 md:gap-10 relative md:absolute md:-top-16 md:left-0 md:right-0 mx-auto'>
            {
                Clients.map((curr) => {
                    return (
                        <Cards key={curr.id} name={curr.name} value={curr.value} />
                    )
                })
            }
        </div>
    )
}

export default Numbers