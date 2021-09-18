import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/gameActions";
import { IGame } from "../../interfaces";

const tempGame: IGame = {
  id: "TVasX8",
  status: "main",
  current_task: 1,
  settings: {
    is_master_player: true,
    is_auto_card_open: true,
    score_type: "story point",
    score_type_short: "SP",
    round_time: 120,
    cards: [1, 2, 3, 5, 8, "?", "coffee"],
  },
};

type gameActionsType = ActionType<typeof actions>;

const gameReducer = (state = tempGame, action: gameActionsType): IGame => {
  switch (action.type) {
    case getType(actions.setLoading):
      return state;
    case getType(actions.goToLobby):
      return { ...state, status: "lobby" };
    case getType(actions.goToGame):
      return { ...state, status: "game" };
    case getType(actions.goToResult):
      return { ...state, status: "result" };
    default:
      return state;
  }
};

export default gameReducer;
