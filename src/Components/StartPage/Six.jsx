import React,{useState} from 'react'
import { BiPlus } from "react-icons/bi"
import { BsX } from "react-icons/bs"

const Six = () => {

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

                <p className='text-white'>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>

                <p className='text-white md:text-xl pt-4 md:pt-6'>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>

            </div>
    </>
  );
}

export default Six
