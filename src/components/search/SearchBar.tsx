import { type ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Input from "./Input";
import SubmitBtn from "./SubmitBtn";
import Container from "../Container";
import Suggestions from "./Suggestions";
import { type PlayerJSON } from "../types/player";
import { type TeamJSON } from "../types/team";

const SearchBar = () => {
  // states for managing user input, the resutls gotten from the search and the type of search either player or tea thatll determine the api endpint to be used for the search
  const [content, setContent] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [searchType, setSearchType] = useState<"player" | "team">("player");

  const navigate = useNavigate();

  const handleFocus = () => setContent("");

  // this component updates the content of the input form and fetches results
  const renderInput = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContent(value);

    //this initialises an empty array for the results
    if (!value) {
      setResults([]);
      return;
    }

    //this is here so that i can include hits as im typing, into the suggestion component wihtout having to submit first
    try {
      if (searchType === "player") {
        const response = await api.get<PlayerJSON>(
          `/searchplayers.php?p=${value}`
        );
        setResults(response.data.player || []);
        console.log(results)
        
      } else {
        const response = await api.get<TeamJSON>(`/searchteams.php?t=${value}`);
        setResults(response.data.team || []);
        console.log(results)
      }
    } catch (err) {
      console.error("Suggestion fetch failed", err);
      setResults([]);
    }
  };

  // here if the button is cliked without selecting any of the suggestions itll just direct you to the first result in the array of result
  
const handleSearch = async () => {
  if (!content) return;

  try {
    if (searchType === "player") {
      const response = await api.get<PlayerJSON>(`/searchplayers.php?p=${content}`);
      const players = response.data.player || [];
      if (players.length > 0) {
        navigate("/playerProfile", {
          state: { playerData: { player: [players[0]] } },
        });
      }
    } else if (searchType === "team") {
      const response = await api.get<TeamJSON>(`/searchteams.php?t=${content}`);
      const teams = response.data.team || [];
      if (teams.length > 0) {
        navigate("/clubProfile", {
          state: { teamData: { team: [teams[0]] } },
        });
      }
    }
  } catch (err) {
    console.error("Search failed", err);
  }
};

  return (
    <Container className="relative flex flex-col gap-2 items-center justify-center">
      <div className="flex gap-4">
        {/* these ones are for selecting the search mode, whether player or team */}
        <label>
          <input
            type="radio"
            checked={searchType === "player"}
            onChange={() => setSearchType("player")}
          />
          Player
        </label>
        <label>
          <input
            type="radio"
            checked={searchType === "team"}
            onChange={() => setSearchType("team")}
          />
          Team
        </label>
      </div>
      <Container className="flex flex-row gap-2 ">
          <div className="relative w-full ">
        <Input
          content={content}
          renderInput={renderInput}
          handleFocus={handleFocus}
        />
        <Suggestions results={results} type={searchType}  />
      </div>

      
      <SubmitBtn handleSearch={handleSearch}  />

      </Container>

    


  </Container>
    
  );
};

export default SearchBar;
