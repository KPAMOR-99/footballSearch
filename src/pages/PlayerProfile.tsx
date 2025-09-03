interface CareerClub {
  name: string;
  season: string;
  matches: number;
  goals: number;
}

const PlayerProfile = () => {
  const career: CareerClub[] = [
    {
      name: "Ferro Carril Oeste (Free transfer)",
      season: "Jan 2025 - now",
      matches: 18,
      goals: 0,
    },
    {
      name: "San Telmo (Free transfer)",
      season: "Jan 2023 - Dec 2024",
      matches: 37,
      goals: 1,
    },
    {
      name: "Patronato de Parana",
      season: "Aug 2022 - Dec 2022",
      matches: 8,
      goals: 0,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
     

      <div className="bg-green-700 rounded-2xl p-4 flex items-center justify-between shadow-lg">

       
        <div>
          <h1 className="text-xl font-bold">Martin Vallejos</h1>
          <p className="text-sm">Ferro Carril Oeste</p>
          <p className="mt-1 text-sm">🇦🇷 Argentina</p>
        </div>

        
        <div className="flex-shrink-0 mx-4">
          <img
            src="data.player[0].strThumb" 
            alt="Player thumbnail"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />
        </div>

       
        <div className="text-right">
          <p className="text-sm">
            Shirt: <span className="font-bold">8</span>
          </p>
          <p className="text-sm">Age: 24 (Dec 25, 2000)</p>
          <p className="text-sm">Position: Right-Back</p>
          <p className="text-xs text-gray-200">Other: RWB, CM</p>
        </div>
      </div>

      {/* Season Stats */}
      <div className="mt-6 bg-gray-800 rounded-2xl p-4 shadow-lg">
        <h2 className="text-lg font-semibold mb-2">
          Primera Nacional Zona A 2025
        </h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm">Goals</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm">Assists</p>
          </div>
          <div>
            <p className="text-2xl font-bold">16</p>
            <p className="text-sm">Matches</p>
          </div>
          <div>
            <p className="text-2xl font-bold">1,105</p>
            <p className="text-sm">Minutes played</p>
          </div>
          <div>
            <p className="text-2xl font-bold">2</p>
            <p className="text-sm text-yellow-400">Yellow cards</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-red-400">Red cards</p>
          </div>
        </div>
      </div>

      {/* Career Section */}
      <div className="mt-6 bg-gray-800 rounded-2xl p-4 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Career</h2>
        <div className="space-y-3">
          {career.map((club, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-700 pb-2 last:border-0"
            >
              <div>
                <p className="font-medium">{club.name}</p>
                <p className="text-xs text-gray-400">{club.season}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">Matches: {club.matches}</p>
                <p className="text-sm">Goals: {club.goals}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
