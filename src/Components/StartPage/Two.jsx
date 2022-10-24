import React,{useState} from 'react'
import { BiPlus } from "react-icons/bi"
import { BsX } from "react-icons/bs"

const Two = () => {

    const [faq, setFaq] = useState(false);

    const handleQuestions = () => {
        setFaq(!faq);
    }

  return (
    <>
         {/* main questions */}
         <div className='flex w-[90%] bg-[#303030] p-2 mt-2 m-auto justify-between items-center'>
                <p className='text-white text-lg md:text-2xl lg:text-3xl font-semibold'>How much does Netflix cost ?</p>
                {/* icon div */}
                <div onClick={handleQuestions}>
                {faq ? <BsX className='text-white text-2xl md:cursor-pointer' /> : <BiPlus className='text-white text-2xl md:cursor-pointer' />}
                </div>
            </div>

            {/* answer main div */}
            <div className={faq ? 'w-[90%] md:text-xl pt-2 ease-in-out duration-1000 bg-[#303030] p-2 m-auto' : "hidden"}>
                <p className='text-white md:text-xl'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
            </div>
    </>
  );
}

export default Two
