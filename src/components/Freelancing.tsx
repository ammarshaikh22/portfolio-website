/* eslint-disable react/no-unescaped-entities */
import Numbers from "./Numbers"
const Freelancing = () => {
    return (
        <section className="bg-fixed relative py-10 md:h-[90vh] bg-[url('/bg_freelancing.jpg')] bg-cover bg-center my-20 flex flex-col items-center justify-center">
            <Numbers />
            <div className='mt-10 md:mt-0 max-w-[92%] mx-auto text-center'>
                <h2 className='text-3xl md:text-5xl font-semibold'>I'm <span className='text-yellow-500'>Available</span> for freelancing</h2>
                <p className=" max-w-[80%] md:max-w-[60%] mx-auto text-gray-400 mt-4">Experienced front-end developer specializing in Next.js and React. Available for freelance projects to create high-quality, responsive web applications.</p>
                <div className='mt-6'>
                    <button className='bg-yellow-500 rounded-3xl py-2 border-none font-semibold w-[152px] h-[50px] text-sm text-black' >HIRE ME</button>
                </div>
            </div>
        </section>
    )
}

export default Freelancing