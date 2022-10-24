import React, { useState } from 'react'
import { BiPlus } from "react-icons/bi"
import { BsX } from "react-icons/bs"

const Three = () => {

    const [faq, setFaq] = useState(false);

    const handleQuestions = () => {
        setFaq(!faq);
    }

    return (
        <>
            {/* main questions */}
            <div className='flex w-[90%] bg-[#303030] p-2 mt-2 m-auto justify-between items-center'>
                <p className='text-white text-lg md:text-2xl lg:text-3xl font-semibold'>Where can I watch ?</p>
                {/* icon div */}
                <div onClick={handleQuestions}>
                {faq ? <BsX className='text-white text-2xl md:cursor-pointer' /> : <BiPlus className='text-white text-2xl md:cursor-pointer' />}
                </div>
            </div>

            {/* answer main div */}
            <div className={faq ? 'w-[90%] pt-2 ease-in-out duration-1000 bg-[#303030] p-2 m-auto' : "hidden"}>
                <p className='text-white md:text-xl'>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>

                <p className='text-white md:text-xl pt-4 md:pt-6'>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </div>
        </>
    );
}

export default Three
