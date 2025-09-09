// pages/PlayerProfile.tsx
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
//import { useEffect } from "react";
import { api2 } from "../components/api";

// This component renders when the user navigates to a player profile
const PlayerProfile = () => {
  const { state } = useLocation();
  const playerData = state?.playerData;

  console.log(playerData);

  // Guard for empty/null data
  if (!playerData || !playerData.player || playerData.player.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4 flex items-center justify-center">
        <h2>No player data found. Please search for a player.</h2>
      </div>
    );
  }

  const player = playerData.player[0];

  // adding 2nd api for search here witht eh useEffect hook you mentioned
  useEffect(()=>{
    const searchPlayer = async (name: string) =>{
      try {
      const res: any = await api2.get<any>("/football-players-search", {
        params: { search: name },
      });
      let playerID = res.data.response.suggestions[0].id;
      const res2: any = await api2.get("/football-player-detail", {
        params: { playerID },
      });
      console.log(res2.data);
    } catch (error) {
      console.error("Error searching player:", error);
    }
    }
    searchPlayer(player.strPlayer);  
  })
  
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-green-700 rounded-2xl p-4 flex items-center justify-around shadow-lg">
        <div>
          <h1 className="text-xl font-bold">{player.strPlayer}</h1>
          <p className="text-sm">{player.strTeam}</p>
          <p className="mt-1 text-sm">{player.strNationality}</p>
          <p className="mt-1 text-xs italic">{player.strStatus}</p>
        </div>

        <div className="flex-shrink-0 mx-4">
          <img
            src={player.strCutout || player.strThumb || "/placeholder.png"}
            alt={player.strPlayer}
            className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        <div className="text-right">
          <p className="text-sm">Born: {player.dateBorn}</p>
          <p className="text-sm">Position: {player.strPosition}</p>
          <p className="text-xs text-gray-200">Gender: {player.strGender}</p>
        </div>
      </div>
      <div className="bg-gray-700 rounded-2xl m-4 p-4 flex items-center justify-around shadow-lg">
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            possimus!
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            possimus!
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            possimus!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
