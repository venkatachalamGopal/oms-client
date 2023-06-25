import axios from "axios";




export default axios.create({
    // baseURL:"http://localhost:4000/api/",
    baseURL:"https://oms-server-gbmc.onrender.com/api",
    headers:{
        Token:localStorage.getItem("token"),
        role:localStorage.getItem("role")
    }
    
})