import axios from "axios";

//const baseUrl = "https://jsonplaceholder.typicode.com"
// an instance of axios for reuse
const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})


export default api
