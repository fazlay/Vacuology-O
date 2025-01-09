import axios from "axios";

const apiMethod = axios.create({
     baseURL: `https://vacuology-server.onrender.com`,
    //  baseURL: `http://localhost:5000`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
})
  
export {apiMethod};