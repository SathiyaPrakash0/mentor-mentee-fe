import { useState } from "react";
import {Link} from "react-router-dom";


import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";


const HomeMentors = ({mentor})=>{

    const [currentSlide, setCurrentSlide] = useState(0);

    let previousSlide = () => {
        if (currentSlide === 0) setCurrentSlide(mentor.length - 1);
        else setCurrentSlide(currentSlide - 1);
      };
    
      let nextSlide = () => {
        if (currentSlide === mentor.length - 1) setCurrentSlide(0);
        else setCurrentSlide(currentSlide + 1);
      };

    return(
        <>
        {/* small screen components */}
        <div className="sm:hidden overflow-hidden relative">
            <div className="flex gap-2 transition ease-out duration-500 py-1 px-0" 
                style={{transform: `translateX(-${currentSlide*65}%)`}}>
            {
                    mentor.map((data,idx)=>(
                        <div className="bg-white shadow-xl rounded-lg py-3 min-w-[200px]" key={idx}>
                            <div className="photo-wrapper p-2">
                                <img className="w-28 h-28 rounded-full mx-auto md:w-32 md:h-32" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
                            </div>
                            <div className="p-2">
                                <h3 className="text-center text-base text-gray-900 font-medium leading-8 md:text-xl">{data.name}</h3>
                                <div className="text-center text-gray-400 text-xs font-semibold">
                                    <p>Web Developer</p>
                                </div>
                                <div className="text-center my-3">
                                    <Link to={`mentor/${data._id}`} className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">View Profile</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="absolute top-0 left-0 h-full justify-between items-center flex text-black px-2 text-2xl">
                <button onClick={previousSlide}>
                    <FaChevronCircleLeft />
                </button>
            </div>
            <div className="absolute top-0 right-0 h-full justify-between items-center flex text-black px-2 text-2xl">
                <button onClick={nextSlide}>
                    <FaChevronCircleRight />
                </button>
            </div>
        </div>

        {/* large screen components */}
        <div className="hidden w-11/12 mx-auto sm:flex flex-col gap-4 my-10 sm:flex-row sm:justify-center sm:flex-wrap">
            {
                mentor.map((data,idx)=>(
                    <div className="bg-white shadow-xl rounded-lg py-3 sm:px-6 lg:px-10" key={idx}>
                        <div className="photo-wrapper p-2">
                            <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
                        </div>
                        <div className="p-2">
                            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{data.name}</h3>
                            <div className="text-center text-gray-400 text-xs font-semibold">
                                <p>Web Developer</p>
                            </div>
                            <div className="text-center my-3">
                            <Link to={`/mentor/${data._id}`} className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium">View Profile</Link>
                            </div>

                        </div>
                    </div>
                    
                ))
            }
        </div>
        </>
    );
}

export default HomeMentors;