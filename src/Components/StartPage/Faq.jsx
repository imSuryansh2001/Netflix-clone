import React from 'react'
import Five from './Five';
import Four from './Four';
import One from './One';
import Six from './Six';
import Three from './Three';
import Two from './Two';

const Faq = () => {

    return (
        <>
            <hr className='text-4xl lg:text-8xl font-extrabold text-[#222222]' />

            {/* faq main div */}
            <div className='bg-black'>
                <h1 className='text-center pt-16 lg:pt-24 text-white text-3xl sm:text-4xl lg:text-5xl font-bold'>Frequently Asked Questions</h1>

                {/* question components div wrapped */}
                <div className='md:w-[70%] m-auto'>
                    <One />
                    <Two />
                    <Three />
                    <Four />
                    <Five />
                    <Six />
                </div>

            </div>
        </>
    );
}

export default Faq;
