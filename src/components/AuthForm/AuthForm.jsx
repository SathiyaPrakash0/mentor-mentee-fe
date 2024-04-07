import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import Axios from "../../config/Axios";

export function SignInForm() {

    const navigate = useNavigate();

    const {isAuthenticated,userData,login} = useAuth();
    useEffect(()=>{
        if(isAuthenticated){
            navigate("/");
        }
    },[userData])

    const [inpData, setInpData] = useState({
        email: "",
        password: ""
    });
    function handleInput(e){
        setInpData({
            ...inpData,[e.target.name]:e.target.value
        })
    }

   
    const handleSignIn = async (e)=>{
        e.preventDefault();
        await Axios.post("/signin",inpData)
        .then(async (res)=>{
            await login(res.data.token,res.data.user);
        })
        .catch(err=>console.error(err))
    }

    return ( 
        <form onSubmit={handleSignIn} className="text-white flex flex-col justify-center items-center gap-2 border border-[#C5722D] w-11/12 h-[60vh] py-10 mx-auto backdrop-blur rounded-md">
            <div className="flex gap-4">
                {/* <label htmlFor="email">email</label> */}
                <input type="email" id="LEmail" name="email" className="rounded-md p-1 text-black" placeholder="Email" onChange={handleInput} />
            </div>
            <div className="flex flex-col gap-4">
                {/* <label htmlFor="cPass">Password</label> */}
                <input type="password" id="LPass" name="passsword" className="rounded-md p-1 text-black" placeholder="Password" onChange={handleInput} />
            </div>
            <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Sign In
            </button>
        </form>
    );
}


export function SignUpForm() {
    
    const navigate = useNavigate();

    const {isAuthenticated,userData,login} = useAuth();
    useEffect(()=>{
        if(isAuthenticated){
            navigate("/");

        }
    },[userData])

    const [inpData, setInpData] = useState({
        name:"",
        email: "",
        mobile:"",
        role:2,
        password: "",

    });
    function handleInput(e){
        setInpData({
            ...inpData,[e.target.name]:e.target.value
        })
    }

   
    const handleSignUp = async (e)=>{
        e.preventDefault();
        console.log(inpData);
        await Axios.post("/signup",inpData)
        .then(async (res)=>{
            await login(res.data.token,res.data.user);
        })
        .catch(err=>console.error(err))
    }


    return (
        <form onSubmit={handleSignUp} className="text-white flex flex-col justify-center items-center gap-2 border border-[#C5722D] w-11/12 h-[60vh] py-6 mx-auto backdrop-blur rounded-md">
            <div className="flex gap-4">
                {/* <label htmlFor="name">username</label> */}
                <input type="text" id="name" name="name" onChange={handleInput} className="rounded-md p-1 text-black" placeholder="Name" />
            </div>
            <div className="flex gap-4">
                {/* <label htmlFor="email">email</label> */}
                <input type="email" id="email" name="email" onChange={handleInput} className="rounded-md p-1 text-black" placeholder="Email" />
            </div>
            <div className="flex gap-4">
                {/* <label htmlFor="mobile">phone number</label> */}
                <input type="text" id="mobile" name="mobile" onChange={handleInput} pattern="[0-9]{10}" className="rounded-md p-1 text-black" placeholder="Mobile Number" />
            </div>
            <div className="flex gap-4">
                <input type="radio" name="role" id="role1" onChange={handleInput} value="2" checked />
                <label htmlFor="role1">Mentor</label>
                <input type="radio" name="role" id="role2" onChange={handleInput} value="1" />
                <label htmlFor="role2">Mentee</label>
            </div>
            <div className="flex flex-col gap-4">
                <div>
                    {/* <label htmlFor="pass">Password</label> */}
                    <input type="password" id="pass" name="password" onChange={handleInput} className="rounded-md p-1 text-black" placeholder="Password" />
                </div>
                <div>
                    {/* <label htmlFor="cPass">Confirm Password</label> */}
                    <input type="password" id="cPass" className="rounded-md p-1 text-black" placeholder="Confirm Password" />
                </div>
            </div>
            <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                Sign Up
            </button>
        </form>

    );
}