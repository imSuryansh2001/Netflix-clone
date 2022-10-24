import React from 'react'
import strangerThings from "../assets/strangerThings.png"
import gifTwo from "../assets/gifTwo.gif"

const Download = () => {
    return (
        <>
            <hr className='text-4xl lg:text-8xl font-extrabold text-[#222222]' />
            {/* main div */}
            <div className='bg-black lg:pt-20 flex lg:flex-row lg:flex-row-reverse lg:text-start lg:justify-evenly lg:items-center flex-col'>
                <div className='text-white w-[90%] lg:text-start md:w-[70%] lg:w-[45%] m-auto mt-20 lg:mt-32 sm:mt-20'>
                    <h1 className='text-center text-3xl sm:text-4xl lg:text-5xl font-bold'>Download your shows to watch offline.</h1>
                    <p className='text-center sm:m-auto text-lg mt-4 sm:mt-8 md:text-2xl'>Save your favourites easily and always have something to watch.</p>
                </div>

                <div className=' w-[90%] md:w-[70%] flex flex-col items-center justify-center bg-eleven h-[50vh] bg-cover bg-center lg:w-[35%] mt-6 m-auto' >
                    {/* downloading main div */}
                    <div className='flex justify-evenly items-center w-[17rem] md:w-[22rem] mt-[15rem] md:mt-[17rem] p-2 bg-black rounded-lg border-[1px] border-white'>
                        <img className='w-[3rem]' src={strangerThings} alt={strangerThings} />

                        {/* downloading text and stranger things text main div */}
                        <div className='flex flex-col justify-center items-center'>
                            <p className='text-white'>Stranger Things</p>
                            <p className='text-[#0071EB]' >Downloading...</p>
                        </div>
                        <img className='w-[3rem]' src={gifTwo} alt={gifTwo} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Download
