import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md"

const ReadyStart = () => {
    return (
        <>
            <p className='text-white text-center text-lg md:text-xl mt-2 md:mt-10 w-[80%] m-auto'>Ready to watch? Enter your email to create or restart your membership.</p>

            {/* Email input and get started button */}
            <center className="lg:flex lg:justify-center">
                <input className='outline-none px-2 py-3 lg:py-4 xl:py-5 w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] mt-4' placeholder='Email address' type="email" />
                <button className='bg-[#E50914] flex items-center py-3 lg:py-4 md:text-lg xl:py-5 justify-evenly text-white outline-none mt-4 lg:px-10 px-4'>Get Started <MdKeyboardArrowRight className='text-white ml-1 text-xl mt-1 ' /></button>
            </center>
        </>
    );
}

export default ReadyStart
