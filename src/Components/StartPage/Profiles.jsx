import React from 'react'
import chidern from "../assets/children.png"

const Profiles = () => {
  return (
    <>
        <hr className='text-4xl lg:text-8xl font-extrabold text-[#222222]' />
      {/* main div */}
      <div className='bg-black lg:pt-20 pb-10 flex lg:text-start lg:justify-evenly lg:flex-row-reverse lg:items-center flex-col'>
        <div className='text-white w-[90%] lg:text-start md:w-[70%] lg:w-[45%] m-auto mt-20 xl:mt-32'>
          <h1 className='text-center text-3xl sm:text-4xl mt-6 lg:text-5xl font-bold'>Create profiles for children.</h1>
          <p className='text-center sm:m-auto text-lg mt-4 sm:mt-8 md:text-2xl'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
        </div>

        <div className=' w-[90%] lg:w-[40%] mt-12 m-auto' >
          <center><img src={chidern} alt={chidern} /></center>
        </div>
      </div>
    </>
  );
}

export default Profiles
