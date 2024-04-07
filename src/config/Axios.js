import axios from "axios";

const Axios = axios.create({
    baseURL: "http://127.0.0.1:1234"
});

export default Axios;