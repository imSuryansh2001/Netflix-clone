import React from 'react'
import NetflixLogo from "../assets/NetflixLogo.png"
import SignInFooter from './SignInFooter';
import {Link} from "react-router-dom"

const SignIn = () => {
    return (
        <>
            {/* sign in main div */}
            <div className='bg-black md:bg-nb md:bg-cover md:bg-center h-[100vh] md:h-[110vh] lg:h-[125vh] w-full'>

                {/* logo main div */}
                <div className='flex justify-between w-[90%] m-auto h-[7vh] items-center pt-3 md:pt-6 lg:pt-10'>
                    <img className='h-[3vh] md:cursor-pointer md:h-[4vh] lg:h-[5vh] xl:h-[6vh]' src={NetflixLogo} alt={NetflixLogo} />
                    <Link to="/"><h1 className='text-white border-[1px] px-3 md:px-5 md:py-[0.2rem] md:cursor-pointer border-white rounded-sm'>Start-page</h1></Link>
                </div>

                {/* sign in main box */}
                <div className=' mt-8 w-[90%] md:w-[70%] lg:w-[50%] xl:w-[30%] m-auto  md:rounded-xl md:p-10 md:bg-black md:backdrop-blur-sm md:bg-black/50'>
                    <h3 className='text-white font-bold text-4xl sm:text-4xl lg:text-4xl '>Sign In</h3>
                    <input className='bg-[#333333] outline-none text-white pl-2 mt-8 py-4 rounded-sm w-[100%]' type="text" placeholder='Email or phone number' />
                    <input className='bg-[#333333] outline-none text-white mt-4 pl-2 py-4 rounded-sm w-[100%]' type="password" placeholder='Password' />
                    <button className='bg-[#E50914] rounded-sm text-white w-[100%] font-semibold py-4 mt-4' >Sign In</button>
                    {/* remember me and need help main box */}
                    <div className='flex items-center justify-between mt-2'>
                        {/* checkbox and remember me text div */}
                        <div className='flex items-center'>
                            <input className='mt-1 h-[1rem] w-[1rem]' type="checkbox" />
                            <p className='text-white pl-2 '>Remember me</p>
                        </div>
                        <a href='https://help.netflix.com/en/' target="_blank" rel="noopener noreferrer"><p className='text-white md:cursor-pointer'>Need help ?</p></a>
                    </div>

                    <p className='text-white mt-10'> <span className='text-[#333333] md:text-white' >New to Netflix ? </span> <Link to="/"><span className=' ml-2 md:cursor-pointer md:hover:border-b-[1px] md:hover:border-white' >Sign up now.</span></Link> </p>
                    <p className='text-[#333333] md:text-white text-sm mt-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="https://help.netflix.com/en/node/412" target="_blank" rel="noopener noreferrer"><span className='text-[#0071EB] md:cursor-pointer md:hover:border-b-[1px] md:hover:border-[#0071eb]'>Learn more.</span></a> </p>

                </div>

                <hr className='text-white font-bold text-2xl mt-16' />

                <SignInFooter />

            </div>
        </>
    );
}

export default SignIn;
