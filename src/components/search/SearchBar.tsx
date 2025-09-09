import { type ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "./Input";
import SubmitBtn from "./SubmitBtn";
import Container from "../Container";
import Suggestions from "./Suggestions";
import { type Player, type PlayerJSON } from "../types/player";
import { type Team, type TeamJSON } from "../types/team";
import { api } from "../api";

const SearchBar = () => {
  // states for managing user input, the resutls gotten from the search and the type of search either player or team thatll determine the api endpint to be used for the search
  const [content, setContent] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [searchType, setSearchType] = useState<"player" | "team">("player");

  const navigate = useNavigate();

  const handleFocus = () => setContent("");

  // this component updates the content of the input form
  const renderInput = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContent(value);
  };

  // this handles results
  useEffect(() => {
    const fetchData = async () => {
      //this initialises an empty array for the results
      if (!content) {
        setResults([]);
        return;
      }

      //this is here so that i can include hits as im typing, into the suggestion component wihtout having to submit first
      try {
        if (searchType === "player") {
          const response = await api.get<PlayerJSON>(
            `/searchplayers.php?p=${content}`
          );
          setResults(response.data.player || []);
          console.log(response.data.player);
        } else {
          const response = await api.get<TeamJSON>(
            `/searchteams.php?t=${content}`
          );
          setResults(response.data.teams || []);
          console.log(response.data.teams);
        }
      } catch (err) {
        console.error("Suggestion fetch failed", err);
        setResults([]);
      }
    };
    fetchData();
  }, [content, searchType]);

  // lifted up navigation logic so both suggestions and search button use the same function
  const handleClick = (item: Player | Team) => {
    if (searchType === "player") {
      navigate("/playerProfile", {
        state: { playerData: { player: [item as Player] } },
        // im not sure how i would add anohter api here
      });
    } else {
      navigate("/clubProfile", {
        state: { teamData: { team: [item as Team] } },
      });
    }
  };

  // here if the button is cliked without selecting any of the suggestions it'll just direct you to the first result in the array of result
  const handleSearch = async () => {
    if (!content || results.length === 0) return;
    handleClick(results[0]); // just reuse the first suggestion
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
          <Suggestions
            results={results}
            type={searchType}
            onSelect={handleClick}
          />
        </div>

        <SubmitBtn handleSearch={handleSearch} />
      </Container>
    </Container>
  );
};

export default SearchBar;
