import axios from "axios";


// an instance of axios for reuse  ...  /searchteams.php?t=Arsenal ....  
const api = axios.create({
    baseURL: "https://www.thesportsdb.com/api/v1/json/123",
})





export default api
