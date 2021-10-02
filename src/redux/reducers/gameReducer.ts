import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/gameActions";
import { IGame } from "../../interfaces";

const tempGame: IGame = {
  status: "main",
  current_task: 1,
  settings: {
    is_master_player: false,
    is_auto_card_open: false,
    timerNeeded: false,
    round_time: 0,
    score_type: "",
    score_type_short: "",
    cover: "",
    cards: [],
  },
  loading: false,
  id: "",
  isChatOpen: false,
};

type gameActionsType = ActionType<typeof actions>;

const gameReducer = (state = tempGame, action: gameActionsType): IGame => {
  switch (action.type) {
    case getType(actions.setLoading):
      return state;
    case getType(actions.setGame):
      return { ...state, ...action.payload };
    case getType(actions.goToLobby):
      return { ...state, status: "lobby" };
    case getType(actions.goToGame):
      return { ...state, status: "game" };
    case getType(actions.goToResult):
      return { ...state, status: "result" };
    case getType(actions.chatOpenClose):
      return { ...state, isChatOpen: !state.isChatOpen };
    case getType(actions.setSettings):
      return { ...state, settings: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
