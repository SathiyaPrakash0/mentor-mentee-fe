import { useState,useEffect } from "react";

import Axios from "../../config/Axios";

import HomeMentors from "./HomeMentors";

const MentorCard = () =>{
    
    const [mentor, setMentor] = useState([]);
    const [exp3Mentor, setExp3Mentor] = useState([]);

    useEffect(()=>{
        Axios.get("/mentorsNew")
        .then(res=>setMentor(res.data))
        .catch(err=>console.log(err))

        Axios.post("/mentorFilterGtExp",{"end":3})
        .then(res=>{console.log(exp3Mentor);setExp3Mentor(res.data)})
        .catch(err=>console.log(err))
    },[])

    return(
        <div className="w-[280px] mx-auto my-3 sm:w-auto sm:mx-1">
            <h1 className="text-xl font-bold text-black">New mentors</h1>
            <HomeMentors mentor={mentor} />
            <h1 className="text-xl font-bold text-black">Experienced mentors (3+ years) </h1>
            <HomeMentors mentor={exp3Mentor} />
        </div>
    );
}



export default MentorCard;