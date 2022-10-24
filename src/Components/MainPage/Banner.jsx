import React, { useEffect, useState } from 'react'
import axios from "../axios"
import requests from '../requests';


const Banner = () => {

    const [banner, setBanner] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setBanner(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    // console.log(banner);


    return (
        <>
            {/* banner main container */}
            <header className='h-[60vh] md:h-[70vh] lg:h-[100vh] w-full'
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
                    backgroundPosition: "center",
                }}
            >


                {/* banner main contents */}
                <div className='pt-16 md:pt-24 lg:pt-32'>
                    <h1 className='text-4xl md:text-5xl text-white px-3 lg:text-shadow-lg shadow-black  font-bold'> {banner?.title || banner.name || banner.original_name} </h1>
                    {/* buttons div */}
                    <div className='ml-4 mt-6 md:mt-10'>
                        <button className='text-white hover:border-black hover:bg-black hover:text-white duration-500 rounded-sm px-6 md:px-10 md:py-3 py-2 border-2 border-white' >Play</button>
                        <button className='text-white hover:border-black hover:bg-black hover:text-white duration-500 rounded-sm px-6 md:px-10 md:py-3 ml-4 py-2 border-2 border-white' >My List</button>
                    </div>

                    {/* description */}
                    <p className='text-white md:w-[70%] lg:w-[50%] md:text-lg  px-3 mt-3 md:mt-6'>
                        {banner?.overview}
                    </p>
                </div>

            </header>
        </>
    );
}

export default Banner;
