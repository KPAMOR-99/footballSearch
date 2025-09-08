// types/player.ts
export interface Player {
  idPlayer: string;
  strPlayer: string;
  strTeam: string;
  strSport: string;
  strThumb?: string;
  strCutout?: string;
  strNationality: string;
  dateBorn?: string;
  strStatus?: string;
  strGender?: string;
  strPosition?: string;
  relevance?: string;
}

export interface PlayerJSON {
  player: Player[];
}
