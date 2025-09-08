import { useLocation } from "react-router-dom";

const ClubProfile = () => {
  const { state } = useLocation();
  const teamData = state?.teamData;

  if (!teamData || !teamData.team || teamData.team.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4 flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          No team data found. Please search for a team.
        </h2>
      </div>
    );
  }

  const team = teamData.team[0];

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Header with fanart */}
      <div
        className="relative h-64 flex items-center justify-center bg-gray-800"
        style={{
          backgroundImage: team.strTeamFanart1
            ? `url(${team.strTeamFanart1})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center gap-3">
          {team.strTeamBadge && (
            <img
              src={team.strTeamBadge}
              alt={team.strTeam}
              className="w-28 h-28 object-contain drop-shadow-lg"
            />
          )}
          <h1 className="text-3xl font-bold">{team.strTeam}</h1>
          <p className="text-gray-300">
            {team.strCountry} -- {team.strSport}
          </p>
        </div>
      </div>

      {/* Overview section */}
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Founded</h2>
          <p>{team.intFormedYear || "N/A"}</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">Stadium</h2>
          <p className="font-medium">{team.strStadium}</p>
          <p className="text-sm text-gray-400">
            {team.intStadiumCapacity
              ? `${team.intStadiumCapacity} capacity`
              : "Capacity unknown"}
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 shadow">
          <h2 className="text-lg font-semibold mb-2">League</h2>
          <p>{team.strLeague}</p>
        </div>
      </div>

      {/* About section */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-gray-800 rounded-xl p-6 shadow">
          <h2 className="text-xl font-bold mb-3">About</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {team.strDescriptionEN || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClubProfile;
