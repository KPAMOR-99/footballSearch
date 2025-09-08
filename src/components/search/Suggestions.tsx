import { type Player } from "../types/player";
import { type Team } from "../types/team";

// there are two types here, so the search suggestions can have eoither or these object shape
// no need for two interfaces since i used type for union
type SuggestionsProps = {
  type: "player" | "team";
  results: Player[] | Team[];
  onSelect: (item: Player | Team) => void; //this is paassed from searchbar
};

const Suggestions = ({ results, type, onSelect }: SuggestionsProps) => {
  if (!results || results.length === 0) return null;

  // when a suggestion is clicked this function will direct you to the right profile page
  return (
    <ul className="mb-16 absolute bg-white border rounded shadow-md w-full mt-1 max-h-60 overflow-y-auto z-10">
      {results.map((item, index) => (
        <li
          key={index}
          className="p-2 hover:bg-gray-200 cursor-pointer text-black"
          onClick={() => onSelect(item)} 
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
