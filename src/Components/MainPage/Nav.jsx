import React, { useState, useEffect } from 'react'
import NetflixLogo from "../assets/NetflixLogo.png"
import "./Nav.css"
import { Link } from 'react-router-dom'

const Nav = () => {

    const [show, handleShow] = useState(false);


    // for navbar bar on scroll
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                handleShow(true);
            } else
                handleShow(false);
        });

        // return () =>{
        //     window.removeEventListener("scroll");
        // };

    });

    return (
        <>
            {/* nav main box */}
            <div className={`nav ${show && "nav-black "}`}>
                <img className='h-[3vh] lg:p-1 md:h-[4vh] ml-4 lg:mt-3 lg:h-[5vh] xl:h-[6vh]' src={NetflixLogo} alt={NetflixLogo} />

                {/* sign in button and select language box */}
                <div className='flex items-center lg:mt-3'>
                    <Link to="/"><h1 className='text-white border-[1px] px-3 md:px-5 md:py-[0.2rem] md:cursor-pointer border-white rounded-sm'>Start-page</h1></Link>
                    <a href="https://help.netflix.com/en/" target="_blank" rel="noopener noreferrer"><button className='bg-[#E50914] mx-2 text-white px-4 md:px-5 py-[0.1rem] md:py-[0.3rem] rounded-sm'>Help?</button></a>
                </div>
            </div>
        </>
    );
}

export default Nav
