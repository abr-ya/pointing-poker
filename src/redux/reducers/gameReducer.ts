import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/gameActions";
import { IGame } from "../../interfaces";

const tempGame: IGame = {
  status: "main",
  current_task: 1,
  settings: {},
  loading: false,
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
    default:
      return state;
  }
};

export default gameReducer;
