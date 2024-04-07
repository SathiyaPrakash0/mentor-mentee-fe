
import { useAuth } from "../contexts/AuthContext";
import Axios from "../config/Axios";

const useSignIn = ()=>{
    const {login} = useAuth();
    
    const signInUser = async (values)=>{
        try{
            const res = await Axios.post("/signin",values);
            // console.log(res);
            if(res.status === 200){
                login(res.data.token, res.data.user);
                console.log("login sucessful");
            } else if(res.status === 404){
                console.log("login failed");
            } else{
                console.log("some at loogin with this credentials");
            }
        } catch(err){
            console.error(err);
        }
    }

    return {signInUser};
}

export default useSignIn;