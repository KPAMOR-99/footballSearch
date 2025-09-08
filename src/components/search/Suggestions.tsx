import { useNavigate } from "react-router-dom";
import { type Player } from "../types/player";
import { type Team } from "../types/team";

// there are two types here, so the search suggestions can have eoither or these object shape
// no need for two interfaces since i used type for union
type SuggestionsProps =
  | { type: "player"; results: Player[] }
  | { type: "team"; results: Team[] };

const Suggestions = ({ results, type }: SuggestionsProps) => {
  const navigate = useNavigate();

  // when a suggestion is clicked this function will direct you to the right profile page
  const handleClick = (item: Player | Team) => {
    if (type === "player") {
      navigate("/playerProfile", {
        state: { playerData: { player: [item as Player] } },
      });
    } else {
      navigate("/clubProfile", {
        state: { teamData: { team: [item as Team] } },
      });
    }
  };

  if (!results || results.length === 0) return null;

  return (
    <ul className="mb-16 absolute bg-white border rounded shadow-md w-full mt-1 max-h-60 overflow-y-auto z-10">
      {results.map((item, index) => (
        <li
          key={index}
          className="p-2 hover:bg-gray-200 cursor-pointer text-black"
          onClick={() => handleClick(item)}
        >
          {type === "player"
            ? (item as Player).strPlayer
            : (item as Team).strTeam}
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;

