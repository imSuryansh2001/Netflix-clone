import React,{useState} from 'react'
import { BiPlus } from "react-icons/bi"
import { BsX } from "react-icons/bs"

const Five = () => {

    const [faq, setFaq] = useState(false);

    const handleQuestions = () => {
        setFaq(!faq);
    }

  return (
    <>
         {/* main questions */}
         <div className='flex w-[90%] bg-[#303030] p-2 mt-2 m-auto justify-between items-center'>
                <p className='text-white text-lg md:text-2xl lg:text-3xl font-semibold'>What can In watch on Netflix ?</p>
                {/* icon div */}
                <div onClick={handleQuestions}>
                {faq ? <BsX className='text-white text-2xl md:cursor-pointer' /> : <BiPlus className='text-white text-2xl md:cursor-pointer' />}
                </div>
            </div>

            {/* answer main div */}
            <div className={faq ? 'w-[90%] pt-2 md:text-xl ease-in-out duration-1000 bg-[#303030] p-2 m-auto' : "hidden"}>
                <p className='text-white'>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            </div>
    </>
  );
}

export default Five
