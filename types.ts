export enum GAME_STATUS {
  'WAITING_ROOM',
  'GENERATING_IDEAS',
  'PLAYING',
  'GAME_OVER',
};

export enum ROUND_STATUS {
  'CHOOSING',
  'GUESSING',
  'SCORING',
};

export type PlayerType = {
  uuid: string;
  name: string;
};

export type PreferenceType = string;

export type PerferencesType = string[];

export type RoundType = {
  choosingPlayerUUID: string;
  status: ROUND_STATUS;
  statusTimeRemaining: number;
  choices: PerferencesType;
  guesses: Record<string, PerferencesType>;
}

export type GameType = {
  uuid: string;
  code: string;
  status: GAME_STATUS;
  statusTimeRemaining: number;
  players: PlayerType[];
  playersReadyUUIDs: string[];
  currentRoundIndex: number;
};