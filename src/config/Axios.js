import axios from "axios";

const Axios = axios.create({
    baseURL: "https://mentor-mentee-be.onrender.com/"
});

export default Axios;
