import { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import Axios from "../../config/Axios";

import { Chip } from "@material-tailwind/react";

//Import The Icons
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const MentorView=()=>{
    let {mID} = useParams();

    const [mentorInfo, setMentorInfo] = useState({});

    useEffect(()=>{
        Axios.post("/mentor",{mId:mID})
        .then(res=>setMentorInfo(res.data))
        .catch(err=>console.log(err))
    },[])

    return(
        <div>
            <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-28 lg:my-0">
                <div id="profile"
                    class="w-full lg:w-3/5 lg:h-[80vh] rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-2 lg:mx-0">
                    <div class="p-4 md:px-10 md:py-8 text-center lg:text-left">
                        <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://source.unsplash.com/MP0IUfwrn0A')" }}></div>

                        <h1 class="text-3xl font-bold pt-8 lg:pt-0">{mentorInfo?.a?.name}</h1>
                        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                            <svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                            </svg> {mentorInfo?.b?.job}
                        </p>
                        
                        <p class="text-sm text-justify lg:max-h-28 overflow-y-scroll border rounded-lg px-2 pt-1 pb-3 my-2">{mentorInfo?.b?.description}</p>

                        <div class="py-2 pb-8 flex flex-wrap gap-1">
                            {
                                mentorInfo?.b?.expertAt.map((data,idx)=>(
                                    <Chip key={idx} color="green" value={data} className="text-[10px] rounded-full" />
                                ))
                            }
                        </div>

                        <div class="my-2 pb-8 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                            <a class="link text-2xl text-gray-800" href={`tel:${mentorInfo?.a?.mobile}`} target="_blank" data-tippy-content="@facebook_handle">
                                <MdOutlinePhoneInTalk />
                            </a>
                            <a class="link text-2xl text-gray-800" href={`mailto:${mentorInfo?.a?.email}`} target="_blank" data-tippy-content="@facebook_handle">
                                <IoMail />
                            </a>
                            <a class="link text-2xl text-gray-800" href={`https://wa.me/91${mentorInfo?.a?.mobile}`} target="_blank" data-tippy-content="@facebook_handle">
                                <IoLogoWhatsapp />
                            </a>
                        </div>

                    </div>

                </div>

                <div class="w-full lg:w-2/5">
                    <img src="https://source.unsplash.com/MP0IUfwrn0A" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />

                </div>

            </div>
        </div>
    )
}

export default MentorView;