// components/types/team.ts
export interface Team {
  strTeam: string
  strTeamAlternate?: string
  strTeamShort?: string
  intFormedYear?: string
  strSport?: string
  strLeague?: string
  idLeague?: string
  strStadium?: string
  strLocation?: string
  intStadiumCapacity?: string
  strWebsite?: string
  strFacebook?: string
  strTwitter?: string
  strInstagram?: string
  strDescriptionEN?: string
  strCountry?: string
  strBadge?: string
  strLogo?: string
  strFanart1?: string
  strFanart2?: string
  strFanart3?: string
  strFanart4?: string
  strBanner?: string
  strYoutube?: string  
}

export interface TeamJSON {
  teams: Team[]
}
