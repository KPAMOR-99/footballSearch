import "./App.css";


import { Link } from "react-router-dom";


import Container from "./components/Container";
import Header from "./components/Header";
import SearchBar from "./components/search/SearchBar";


function App() {


  return (
    <>
   
      <Container className="min-h-screen flex flex-col items-center justify-center bg-gray-900  text-white px-4">
      
        <Header />

        <Container className=" w-full max-w-xl flex items-center justify-center gap-2 ">
          
          <SearchBar/>

        </Container>

   { /* these two buttons are just here for testing, l'll remove them soon */}
        <button>
          <Link to="/PlayerProfile"> click to player profile</Link>
        </button>
        <button>
          <Link to="/ClubProfile"> click to club profile</Link>
        </button>

      </Container>   
    </>
  );
}

export default App;
