import React from 'react'

const SignInFooter = () => {
    return (
        <>
            {/* footer main div */}
            <div className='md:mt-10 pb-6 lg:pb-8'>
                <p className='text-white text-center mt-6 md:text-lg md:font-semibold'>Questions? Call 000-800-040-1843</p>

                {/* links main box */}
                <div className='flex justify-evenly w-[95%] m-auto mt-6'>
                    <div >
                        <p className='text-white'>FAQ</p>
                        <p className='text-white'>Cookie Preferences</p>
                    </div>

                    <div >
                        <p className='text-white'>Help Centre</p>
                        <p className='text-white'>Corporate Information</p>
                    </div>

                    <div >
                        <p className='text-white'>Terms of Use</p>
                        <p className='text-white'>Privacy</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default SignInFooter;
