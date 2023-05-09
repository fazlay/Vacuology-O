import axios from "axios";

const apiMethod = axios.create({
    baseURL: `https://vacuology-server.onrender.com`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
})
  
export {apiMethod};