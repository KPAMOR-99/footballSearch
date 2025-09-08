import { useLocation } from "react-router-dom";

const ClubProfile = () => {
  const { state } = useLocation();
  const teamData = state?.teamData;

  console.log(teamData);

  if (!teamData || !teamData.team || teamData.team.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4 flex items-center justify-center">
        <h2>No team data found. Please search for a team.</h2>
      </div>
    )
  }
  const team = teamData.team[0];
  console.log(team)

  return (
    <div className="w-full text-white">
      <ul>
        <li>{team.strSport}</li>
      </ul>
      {/*      
      <div 
        className="relative h-64 flex items-center justify-center"
        style={{ backgroundImage: `url(${team.fanart})`, backgroundSize: "cover" }}
      >
        <div className="bg-black/60 p-4 rounded-xl flex items-center gap-4">
          <img src={team.badge} alt={team.name} className="w-20 h-20" />
          <div>
            <h1 className="text-3xl font-bold">{team.name}</h1>
            <p>{team.country} • Founded {team.founded}</p>
            <p>{team.stadium} ({team.capacity})</p>
          </div>
        </div>
      </div>
      */}

      {/* Overview 
      <div className="grid grid-cols-3 gap-6 p-6 bg-gray-900">
        <div>
          <h2 className="font-semibold">Location</h2>
          <p>{team.location}</p>
        </div>
        <div className="flex items-center justify-center">
          <img src={team.badge} alt="badge" className="w-32 h-32" />
        </div>
        <div>
          <h2 className="font-semibold">League</h2>
          <p>{team.league}</p>
          
        </div>
      </div>
      */}

      {/* About 
      <div className="p-6 bg-gray-800">
        <h2 className="text-xl font-bold mb-2">About</h2>
        <p className="text-sm leading-relaxed">{team.description}</p>
      </div>
      */}

      {/* Social Links 
      <div className="flex gap-4 p-6 bg-gray-900">
        <a href={team.socials.website} className="underline">Website</a>
        <a href={team.socials.twitter} className="underline">Twitter</a>
        <a href={team.socials.instagram} className="underline">Instagram</a>
        <a href={team.socials.youtube} className="underline">YouTube</a>
      </div>
      */}
    </div>
  )
}

export default ClubProfile;
