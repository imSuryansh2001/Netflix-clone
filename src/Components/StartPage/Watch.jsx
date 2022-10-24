import React from 'react'
import videoTwo from "../assets/VideoTwo.m4v"

const Watch = () => {
  return (
    <>
      <hr className='text-4xl lg:text-8xl font-extrabold text-[#222222]' />
      {/* main div */}
      <div className='bg-black lg:pt-20 pb-10 flex lg:flex-row lg:text-start lg:justify-evenly lg:items-center flex-col'>
        <div className='text-white w-[90%] lg:text-start md:w-[70%] lg:w-[40%] m-auto mt-12 sm:mt-20'>
          <h1 className='text-center text-3xl sm:text-4xl mt-6 lg:text-5xl font-bold'>Watch everywhere.</h1>
          <p className='text-center sm:m-auto text-lg mt-4 sm:mt-8 md:text-2xl'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>

        <div className=' w-[90%] lg:w-[40%] mt-12 m-auto' >
          <video className='m-auto' loop muted autoPlay controls='' src={videoTwo} type="video/m4v" />
        </div>
      </div>
    </>
  );
}

export default Watch
