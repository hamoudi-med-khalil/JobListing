import React from 'react'

const Hero = ({title, subtitle}) => {
    return (
        <>
            <section className="bg-indigo-700 p-20 mb-4" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-white">
                    <div className='flex flex-col justify-center items-center text-white' >
                        <h1 className="text-2xl font-extrabold sm:text-4xl md:text-5xl">{title}</h1>
                        <p className="my-8 text-xl"> {subtitle} </p>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Hero