import axios from "axios";

// an instance of axios for reuse  ...  /searchteams.php?t=Arsenal ....
export const api = axios.create({
  baseURL: "https://www.thesportsdb.com/api/v1/json/123",
});


// planning to have another axios api here
export const api2 = axios.create({
  baseURL: "https://free-api-live-football-data.p.rapidapi.com",
  headers: {
    //"x-rapidapi-key": "979114a0cdmsha1a204f9ea6a304p1224c5jsn58d432da7920",
    "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
  },
});

// fetch("https://v3.football.api-sports.io/players?id=276&season=2019", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "v3.football.api-sports.io",
// 		"x-rapidapi-key": "93100a0f38mshe00907a196c032bp189ce9jsndc69d1e50ddc"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });


