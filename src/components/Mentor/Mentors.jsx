import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "../../config/Axios";

export default function Mentors (){

    const [mentor, setMentor] = useState([]);

    useEffect(()=>{
        Axios.get("/mentorsAll")
        .then(res=>setMentor(res.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <>
        <h1 className="text-3xl font-semibold bg-cyan-400 py-6">Mentors List</h1>
        <div className="w-11/12 mx-auto flex flex-col gap-4 my-10 sm:flex-row sm:justify-center sm:flex-wrap">
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
    )
}