import "./App.css";

import { Link } from "react-router-dom";
// BrowserRouter, Routes, Route,

import Container from "./components/Container";
import Header from "./components/Header";
import SearchBar from "./components/search/SearchBar";
import Suggestions from "./components/search/Suggestions";
import SubmitBtn from "./components/search/SubmitBtn";


function App() {


  return (
    <>
      <Container className="min-h-screen flex flex-col items-center justify-center bg-gray-900  text-white px-4">
      
        <Header />

        <Container className=" w-full max-w-xl flex items-center justify-center gap-2 ">
          
          <SearchBar/>

        </Container>

        <div className="">
          
        </div>
        <button>
          <Link to="/PlayerProfile"> click to player profile</Link>
        </button>
        <button>
          <Link to="/ClubProfile"> click to club profile</Link>
        </button>

        <Suggestions />
      </Container>
    </>
  );
}

export default App;
