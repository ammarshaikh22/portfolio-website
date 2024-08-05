import { services } from "@/data/data"
import Image from 'next/image';
const Services = () => {
    return (
        <section id="services" className='relative my-16'>
            <div className='max-w-[92%] mx-auto'>
                <div className='text-center'>
                    <h2 className='z-[-1] absolute top-0 left-0 right-0 md:text-8xl text-trans'>Services</h2>
                    <h2 className='text-3xl md:text-5xl'>Services</h2>
                    <p className='max-w-[95%] md:max-w-[76%] mx-auto mt-6 md:mt-10 text-gray-400 text-sm md:text-base'>Crafting responsive and interactive websites using the latest technologies like HTML5, CSS3, and JavaScript frameworks such as React and Next.js..</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12'>
                    {
                        services.map((curr) => {
                            return (
                                <div className='box relative transition-colors duration-500 ease-in-out bg-box hover:bg-yellow-500 font-semibold text-md text-center h-[250px] p-8 flex flex-col items-center gap-6 service-card' key={curr.id}>
                                    <Image src={curr.icon} alt="img" width={110} height={100}/>
                                    <h3>{curr.name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services