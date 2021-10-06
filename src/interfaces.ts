// пользователь - другие игроки
export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  position: string;
  image: string;
  is_observer: boolean;
  is_master: boolean;
  game?: string;
}

// interface IGameSettings {
//   is_master_player?: boolean;
//   is_auto_card_open?: boolean;
//   score_type?: string;
//   score_type_short?: string;
//   round_time?: number;
//   cards?: (number | string)[];
// }

export interface IGameSettings {
  is_master_player: boolean;
  is_auto_card_open: boolean;
  timerNeeded: boolean;
  round_time: number;
  score_type: string;
  score_type_short: string;
  cover: string;
  cards: (string | number)[];
}
export interface IGame {
  id?: string;
  status: "main" | "lobby" | "game" | "result";
  current_task: number;
  settings: IGameSettings;
  loading?: boolean;
  isChatOpen: boolean;
}
