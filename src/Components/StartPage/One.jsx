import React, { useState } from 'react'
import { BiPlus } from "react-icons/bi"
import { BsX } from "react-icons/bs"

const One = () => {

    const [faq, setFaq] = useState(false);

    const handleQuestions = () => {
        setFaq(!faq);
    }

    return (
        <>
            {/* main questions */}
            <div className='flex w-[90%] bg-[#303030] p-2 mt-6 m-auto justify-between items-center'>
                <p className='text-white text-lg md:text-2xl lg:text-3xl font-semibold'>What is Netflix ?</p>
                {/* icon div */}
                <div onClick={handleQuestions}>
                    {faq ? <BsX className='text-white text-2xl md:cursor-pointer' /> : <BiPlus className='text-white text-2xl md:cursor-pointer' />}
                </div>
            </div>

            {/* answer main div */}
            <div className={faq ? 'w-[90%] pt-2 ease-in-out duration-1000 bg-[#303030] p-2 m-auto' : "hidden"}>
                <p className='text-white md:text-xl'>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>

                <p className='text-white md:text-xl pt-4 md:pt-6'>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
            </div>
        </>
    );
}

export default One;
