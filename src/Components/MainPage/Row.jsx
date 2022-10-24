import React, { useEffect, useState } from 'react'
import axios from "../axios"
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {

  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (currentValue) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(currentValue?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));

        }).catch(error => console.log(error));
    }
  }


  return (
    <>
      {/* main div */}
      <div className='w-full mt-4'>
        <h1 className='text-white pl-3 text-lg md:text-xl lg:text-2xl font-bold mt-6 md:mt-10 lg:mt-14'> {title} </h1>

        {/* row main div */}
        <div className='flex mt-2 object-contain items-center overflow-x-scroll scrollbar-hide'>
          {
            movies.map((currentValue) => {
              return <>
                {/* for images */}
                <img key={currentValue.id} onClick={() => handleClick(currentValue)} className='h-[10rem] lg:px-3 md:hover:scale-110 md:duration-500 md:cursor-pointer md:h-[15rem] lg:h-[20rem] p-2' src={` ${baseUrl}${currentValue.poster_path}`} alt={currentValue.name} />
              </>
            })
          }
        </div>

        {/* for youtube videos */}
        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}

      </div>
    </>
  );
}

export default Row
