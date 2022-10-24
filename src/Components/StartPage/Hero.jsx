import React from 'react'
import NetflixLogo from "../assets/NetflixLogo.png"
import ReadyStart from './ReadyStart';
import Middle from "./Middle"
import Faq from './Faq';
import SignInFooter from './SignInFooter';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            {/* background image main div */}
            <div className='bg-nb bg-cover bg-center h-[65vh] md:h-[80vh] lg:h-[100vh] w-full'>
                {/* nav main box */}
                <div className='flex justify-between w-[95%] m-auto h-[7vh] items-center pt-3 md:pt-6 lg:pt-10'>
                    <img className='h-[3vh] md:h-[4vh] lg:h-[5vh] xl:h-[6vh]' src={NetflixLogo} alt={NetflixLogo} />
                    {/* sign in button and select language box */}
                    <div className='flex items-center'>
                       <Link to="main"> <h1 className='text-white border-[1px] px-3 md:px-5 md:py-[0.2rem] md:cursor-pointer border-white rounded-sm'>Main-page</h1></Link>
                        <Link to="signin"><button className='bg-[#E50914] mx-2 text-white px-4 md:px-5 py-[0.1rem] md:py-[0.3rem] rounded-sm'>Sign In</button></Link>
                    </div>
                </div>

                <h1 className='text-center text-white text-3xl sm:text-5xl lg:text-6xl  mt-16 sm:mt-24 md:mt-40 lg:mt-44 w-[90%] md:w-[70%] xl:w-[50%] m-auto font-bold'>Unlimited movies, TV shows and more.</h1>
                <p className='text-white text-center text-lg sm:text-2xl md:text-3xl mt-4 md:mt-8 w-[90%] m-auto'>Watch anywhere. Cancel anytime.</p>

                <ReadyStart />

            </div>

            <Middle />

            <div className='bg-black'>
                <Faq />
                <div className='pt-6' ><ReadyStart /></div>

                <hr className='text-4xl lg:text-8xl mt-16 font-extrabold text-[#222222]' />

                <SignInFooter />

            </div>
        </>
    );
}

export default Hero