import { createAction, createCustomAction } from "typesafe-actions";
import { IGame, IGameSettings } from "../../interfaces";

// types
const SET_GAME = "SET_GAME";
const SET_LOADING = "SET_LOADING";
const GO_TO_LOBBY = "GO_TO_LOBBY";
const GO_TO_GAME = "GO_TO_GAME";
const GO_TO_RESULT = "GO_TO_RESULT";
const SET_OPEN = "SET_OPEN";
const SET_SETTINGS = "SET_SETTINGS";

// sagaTypes
export const NEW_GAME_SAGA = "NEW_GAME_SAGA";
export const CONNECT_GAME_SAGA = "CONNECT_GAME_SAGA";

export const setGame = createCustomAction(SET_GAME, (data: IGame) => ({
  payload: data,
}));

export const newGameSaga = createAction(NEW_GAME_SAGA)();

export const connectGameSaga = createCustomAction(
  CONNECT_GAME_SAGA,
  (id: string) => ({
    payload: id,
  }),
);

export const setLoading = createCustomAction(SET_LOADING, (flag: boolean) => ({
  payload: flag,
}));

export const setSettings = createCustomAction(
  SET_SETTINGS,
  (settings: IGameSettings) => ({
    payload: settings,
  }),
);

export const chatOpenClose = createCustomAction(SET_OPEN);

export const goToLobby = createAction(GO_TO_LOBBY)();
export const goToGame = createAction(GO_TO_GAME)();
export const goToResult = createAction(GO_TO_RESULT)();
